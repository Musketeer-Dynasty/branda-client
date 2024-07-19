"use client";
import { Ierror } from "@/app/(user)/dashboard/page";
import { AuthFormStyles, AuthStyles } from "@/components/auth/style";
import {
  CheckedIcon,
  ColoredGoogleIcon,
  EmailIcon,
  EyeIcon,
  FormErrorIcon,
} from "@/components/icons/auth";
import { ButtonLoader } from "@/components/icons/dashboard";
import { BACKEND_URL } from "@/lib/config";
import { validateEmail } from "@/utils/validateEmail";
import { isStrongPassword } from "@/utils/validatePwd";
import axios from "axios";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IForm {
  fname: string;
  lname: string;
  email: string;
  pwd: string;
}
const Auth = () => {
  // for form
  const [form, setForm] = useState<IForm>({
    email: "",
    pwd: "",
    fname: "",
    lname: "",
  });

  // for pwds
  const [showPwd1, setShowPwd1] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);

  const [pwd1, setPwd1] = useState<string>("");
  const [pwd2, setPwd2] = useState<string>("");
  // errors
  const [pwd1Error, setPwd1Error] = useState<Ierror>({
    active: false,
    text: "",
  });
  const [pwd2Error, setPwd2Error] = useState<Ierror>({
    active: false,
    text: "",
  });
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<Ierror>({
    active: false,
    text: "",
  });
  const [fnameError, setFNameError] = useState<Ierror>({
    active: false,
    text: "",
  });
  const [lnameError, setLNameError] = useState<Ierror>({
    active: false,
    text: "",
  });
  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const value = e.target.value;
    if (id === "fname") {
      setFname(value);
      if (value.length < 2) {
        setFNameError({ active: true, text: "First Name is too short" });
      } else {
        setForm({ ...form, fname: value });
        setFNameError({ active: false, text: "" });
      }
    } else if (id === "lname") {
      setLname(value);
      if (value.length < 2) {
        setLNameError({ active: true, text: "Last Name is too short" });
      } else {
        setForm({ ...form, lname: value });
        setLNameError({ active: false, text: "" });
      }
    }
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // setFormError({active : false, text : ""});
    // Perform email validation
    if (!validateEmail(value)) {
      setEmailError({ active: true, text: "Invalid email address." });
    } else {
      setEmailError({ active: false, text: "Valid email address" });
      setForm({ ...form, email: value });
    }
  };

  const handlePwd1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPwd1(value);
    let msg: string | null = isStrongPassword(value);

    // this handles when the password is a match and then pwd1 value changes
    if (pwd2.length > 0) {
      if (pwd2 == value) {
        setPwd2Error({
          active: false,
          text: "Password is a match",
        });
      } else {
        setPwd2Error({
          active: true,
          text: "Password is not a match!",
        });
      }
    }
    if (msg !== null) {
      setPwd1Error({
        active: true,
        text: msg,
      });
    } else {
      setPwd1Error({
        active: false,
        text: "Password is Strong",
      });
      setForm({ ...form, pwd: value });
    }
  };
  const handlePwd2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPwd2(value);
    if (value == pwd1) {
      setPwd2Error({
        active: false,
        text: "Password is a match!",
      });
    } else {
      setPwd2Error({
        active: true,
        text: "Password is not a match!",
      });
    }
  };
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

//  fix width issue on mobile and desktop - task
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      form.pwd !== "" &&
      form.email !== "" &&
      form.fname !== "" &&
      form.lname !== ""
    ) {
        try {
          const body = {
            firstname: form.fname,
            lastname: form.fname,
            email: form.email,
            password: form.pwd,
          };
          setIsLoading(true);
          console.log(body);
          const { data } = await axios.post(`${BACKEND_URL}/signup`, body);
          if (data) {
            // use a toastify message then redirect to login page
            setIsLoading(false);
            toast.success("Account Created successfully");
            setTimeout(() => {
              router.push("/auth/login");
            }, 1200);
          }
        } catch (error: any) {
          console.log(error);
          setIsLoading(false);
          // reset password field
          setPwd1("");
          setPwd2("");
          setPwd1Error({
            active: true,
            text: "",
          });
          setPwd2Error({
            active: true,
            text: "",
          });
          setForm({ ...form, pwd: "" });
          console.log(error);
          if (error.response) {
            toast.error(`${error.response.data.message}`);
          } else {
            toast.error(`${error.message}`);
          }
        }
    }
  };

  return (
    <AuthStyles>
      <ToastContainer />
      <AuthFormStyles>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-head">
            <h4>Get Started</h4>
          </div>
          <div className="form-input">
            <div className="form-ele">
              <label htmlFor="fname">First Name</label>
              <div className="inp">
                <input
                  type="text"
                  name="fname"
                  placeholder="Enter First Name"
                  value={fname}
                  onChange={(e) => handleNameChange(e, "fname")}
                  className={fnameError.active ? "error-bdr" : ""}
                />
                <div className="abs">
                  {fnameError.active === false && fname !== "" && (
                    <CheckedIcon />
                  )}
                  {fnameError.active === true && <FormErrorIcon />}
                </div>
                <p
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                  className={fnameError.active ? "error-msg" : "correct"}
                >
                  {fnameError.text}
                </p>
              </div>
            </div>
            <div className="form-ele">
              <label htmlFor="fname">Last Name</label>
              <div className="inp">
                <input
                  type="text"
                  name="lname"
                  placeholder="Enter Last Name"
                  value={lname}
                  onChange={(e) => handleNameChange(e, "lname")}
                  className={lnameError.active ? "error-bdr" : ""}
                />
                <div className="abs">
                  {lnameError.active === false && lname !== "" && (
                    <CheckedIcon />
                  )}
                  {lnameError.active === true && <FormErrorIcon />}
                </div>
                <p
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                  className={lnameError.active ? "error-msg" : "correct"}
                >
                  {lnameError.text}
                </p>
              </div>
            </div>
            <div className="form-ele">
              <label htmlFor="name">Email</label>
              <div className="inp">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter Email Address"
                  className={emailError.active ? "error-bdr" : ""}
                  autoComplete="email"
                />
                <p
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                  className={emailError.active ? "error-msg" : "correct"}
                >
                  {emailError.active && emailError.text}
                </p>
                <div className="abs">
                  {emailError.active === false && emailError.text === "" && (
                    <EmailIcon />
                  )}
                  {emailError.active === false && emailError.text !== "" && (
                    <CheckedIcon />
                  )}
                  {emailError.active === true && <FormErrorIcon />}
                </div>
              </div>
            </div>
            <div className="form-ele">
              <label htmlFor="pwd1">Password</label>
              <div className="inp">
                <input
                  type={showPwd1 ? "text" : "password"}
                  name="pwd1"
                  onChange={handlePwd1Change}
                  value={pwd1}
                  autoComplete="new-password"
                  className={pwd1Error.active ? "error-bdr" : ""}
                  placeholder="Enter Password"
                />
                <p
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                  className={`msg ${
                    pwd1Error.active ? "error-msg" : "correct"
                  }`}
                >
                  {pwd1Error.active && pwd1Error.text}
                </p>
                <div className="abs" onClick={() => setShowPwd1(!showPwd1)}>
                  {pwd1Error.active === false && pwd1Error.text === "" && (
                    <EyeIcon isShown={showPwd1} />
                  )}
                  {pwd1Error.active === false && pwd1Error.text !== "" && (
                    <CheckedIcon />
                  )}
                  {pwd1Error.active === true && <EyeIcon isShown={showPwd1} />}
                </div>
              </div>
            </div>
            <div className="form-ele">
              <label htmlFor="pwd2">Confirm Password</label>
              <div className="inp">
                <input
                  type={showPwd2 ? "text" : "password"}
                  name="pwd2"
                  placeholder="Confirm Password"
                  value={pwd2}
                  className={pwd2Error.active ? "error-bdr" : ""}
                  onChange={handlePwd2Change}
                  autoComplete="new-password"
                />
                <p
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                  className={`msg ${
                    pwd2Error.active ? "error-msg" : "correct"
                  }`}
                >
                  {pwd2Error.active && pwd2Error.text}
                </p>
                <div className="abs" onClick={() => setShowPwd2(!showPwd2)}>
                  {pwd2Error.active === false && pwd2Error.text === "" && (
                    <EyeIcon isShown={showPwd2} />
                  )}
                  {pwd2Error.active === false && pwd2Error.text !== "" && (
                    <CheckedIcon />
                  )}
                  {pwd2Error.active === true && <FormErrorIcon />}
                </div>
              </div>
            </div>
          </div>
          <div className="btn">
            <button
              type="submit"
              disabled={
                pwd1 === "" ||
                pwd2 === "" ||
                pwd1Error.active ||
                pwd2Error.active
              }
            >
              {isLoading ? <ButtonLoader /> : "Submit"}
            </button>
          </div>
        </form>
      </AuthFormStyles>
    </AuthStyles>
  );
};

export default Auth;
