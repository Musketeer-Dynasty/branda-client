"use client";
import { Ierror } from "@/app/(user)/dashboard/page";
import { AuthFormStyles, AuthStyles } from "@/components/auth/style";
import { validateEmail } from "@/utils/validateEmail";
import { isStrongPassword } from "@/utils/validatePwd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Cookies from "js-cookie";
import { BACKEND_URL } from "@/lib/config";
import {
  CheckedIcon,
  EmailIcon,
  EyeIcon,
  FormErrorIcon,
} from "@/components/icons/auth";
import Link from "next/link";
import { ButtonLoader } from "@/components/icons/dashboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IForm {
  email: string;
  password: string;
}

const Auth = () => {
  const [pwdError, setPwdError] = useState<Ierror>({
    active: false,
    text: "",
  });
  const [form, setForm] = useState<IForm>({ email: "", password: "" });
  const [pwd, setPwd] = useState<string>("");
  const [showPwd, setShowPwd] = useState(false);
  const handlePwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPwd(value);

    let msg: string | null = isStrongPassword(value);
    setFormError({ active: false, text: "" });
    if (msg !== null) {
      setPwdError({
        active: true,
        text: msg,
      });
    } else {
      setPwdError({
        active: false,
        text: "Password is Strong",
      });
      setForm({ ...form, password: value });
    }
  };
  // For Email
  const [email, setEmail] = useState<string>("");
  // error
  const [emailError, setEmailError] = useState<Ierror>({
    active: false,
    text: "",
  });
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setFormError({ active: false, text: "" });
    // Perform email validation
    if (!validateEmail(value)) {
      setEmailError({ active: true, text: "Invalid email address." });
    } else {
      setEmailError({ active: false, text: "Valid Email" });
      setForm({ ...form, email: value });
    }
  };

  // handle signup form
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [formError, setFormError] = useState<Ierror>({
    active: false,
    text: "",
  });
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    if (
      !emailError.active &&
      !pwdError.active &&
      emailError.text !== "" &&
      pwdError.text !== ""
    ) {
      // call signin API
      try {
        setIsLoading(true);
        const { data } = await axios.post(`${BACKEND_URL}/v1/login`, form);
        if (data) {
          let inSetTime = new Date(new Date().getTime() + 2 * 60 * 60 * 1000);
          Cookies.set("token", data.token, { expires: inSetTime });
          Cookies.set("email", form.email);
          setIsLoading(false);
          router.push("/dashboard");
        }
      } catch (error: any) {
        setIsLoading(false);
        setPwd("");
        setPwdError({active : true, text : ""});
        setForm({...form, password : ""});
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
            <h4>Login</h4>
          </div>
          <div className="form-input">
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
                  type={showPwd ? "text" : "password"}
                  name="pwd1"
                  value={pwd}
                  onChange={handlePwdChange}
                  placeholder="Enter Password"
                  autoComplete="new-password"
                  className={pwdError.active ? "error-bdr" : ""}
                />
                <div className="forgot">
                  <Link href="#">
                    <p>Forgot Password?</p>
                  </Link>
                </div>
                <div className="abs" onClick={() => setShowPwd(!showPwd)}>
                  {pwdError.active === false && pwdError.text === "" && (
                    <EyeIcon isShown={showPwd} />
                  )}
                  {pwdError.active === false && pwdError.text !== "" && (
                    <CheckedIcon />
                  )}
                  {pwdError.active === true && <EyeIcon isShown={showPwd} />}
                </div>
              </div>
            </div>
          </div>
          <div className="btn">
            <button
              type="submit"
              disabled={
                emailError.active ||
                pwdError.active ||
                emailError.text == "" ||
                pwdError.text == ""
              }
            >
              {isLoading ? <ButtonLoader /> : "Sign In"}
            </button>
          </div>
        </form>
      </AuthFormStyles>
    </AuthStyles>
  );
};

export default Auth;
