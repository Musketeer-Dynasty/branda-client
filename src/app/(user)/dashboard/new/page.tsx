"use client";
import {
  DashboardStyle,
  DropCompStyles,
  DropdownStyles,
  FirstFormStyle,
} from "@/components/new/style";
import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  AngleDown,
  ArrowStyles,
  ButtonLoader,
} from "@/components/icons/dashboard";
import { Niches, INiche, Industries } from "@/components/new/data";
import { MultiStepForm } from "@/components/new/new";
import { Ierror } from "../page";
import { BACKEND_URL } from "@/lib/config";
import axios from "axios";
import Cookies from "js-cookie";

interface IForm {
  industry: string;
  niche: string;
  target: string;
  description: string;
}
export default function Home() {
  const [formLevel, setFormLevel] = useState(0);
  const [showindustryDropdown, setShowindustryDropdown] = useState(false);
  const [shownicheDropdown, setShownicheDropdown] = useState(false);
  const [industry, setindustry] = useState<INiche | null>(null);
  const [allIndustries, setAllIndustries] = useState(Industries);
  const [niche, setniche] = useState<INiche | null>(null);
  const [allNiches, setAllNiches] = useState<INiche[]>([]);
  const [form, setForm] = useState<IForm>({
    industry: "",
    niche: "",
    target: "",
    description: "",
  });

  const [target, setTarget] = useState("");
  const [description, setDescription] = useState("");

  const [targetError, setTargetError] = useState<Ierror>({
    active: false,
    text: "",
  });
  const [descriptionError, setDescriptionError] = useState<Ierror>({
    active: false,
    text: "",
  });
  useEffect(() => {
    const selectedIndustry = allIndustries.find(
      (ele) => ele.isSelected === true
    );
    const selectedniche = allNiches.find((ele) => ele.isSelected === true);
    if (selectedIndustry) {
      setindustry(selectedIndustry);
    }
    if (selectedniche) {
      setniche(selectedniche);
    }
  }, [allIndustries, allNiches]);

  useEffect(() => {
    setAllNiches(
      Niches.filter((ele) => ele.industry === industry?.name.toLowerCase())
    );
  }, [industry?.name]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    id: string
  ) => {
    const value = e.target.value;
    if (id === "target") {
      setTarget(value);
      if (value === "") {
        setTargetError({ active: true, text: "Invalid Input" });
      } else {
        setTargetError({ active: false, text: "" });
        setForm({ ...form, target: value });
      }
    } else if (id === "description") {
      setDescription(value);
      if (value === "") {
        setDescriptionError({ active: true, text: "Invalid Input" });
      } else {
        setDescriptionError({ active: false, text: "" });
        setForm({ ...form, description: value });
      }
    }
  };
  const selectIndustry = (name: string) => {
    const newList = allIndustries.map((ele) => {
      return { ...ele, isSelected: ele.name === name };
    });
    setAllNiches(Niches);
    setniche(null);
    setForm({ ...form, industry: name });
    setAllIndustries(newList);
    setShowindustryDropdown(false);
  };
  const selectNiche = (name: string) => {
    const newList = allNiches.map((ele) => {
      return { ...ele, isSelected: ele.name === name };
    });
    setForm({ ...form, niche: name });
    setAllNiches(newList);
    setShownicheDropdown(false);
  };
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    // setTimeout(() => {
    //   console.log(form, "submitted");
    //   setLoading(false);
    //   setFormLevel(1);
    // }, 1500);
    // call API
    // move to multistep form
    try {
      setLoading(true);
      const token = Cookies.get("token");
      const body = {
        niche: form.niche,
        industry: form.industry,
      };
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      };
      const { data } = await axios.get(`${BACKEND_URL}/brand_name`,config);
      if (data) {
        console.log(data);
        setLoading(false);
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <DashboardStyle>
      <div className="cont">
        {formLevel === 0 && (
          <FirstFormStyle>
            <h3>Kindly Provide your brand details</h3>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-ele">
                <label htmlFor="">Industry</label>
                <DropdownStyles>
                  <div
                    className="head"
                    onClick={() =>
                      setShowindustryDropdown(!showindustryDropdown)
                    }
                  >
                    <p>
                      {industry === null ? "Select industry" : industry.name}
                    </p>
                    <ArrowStyles $isSelected={showindustryDropdown}>
                      <AngleDown />
                    </ArrowStyles>
                  </div>
                  {showindustryDropdown && (
                    <div className="dropdown">
                      {allIndustries.map((ele, index) => (
                        <DropCompStyles
                          $isSelected={industry?.name === ele.name}
                          key={index}
                          onClick={() => selectIndustry(ele.name)}
                        >
                          <p>{ele.name}</p>
                        </DropCompStyles>
                      ))}
                    </div>
                  )}
                </DropdownStyles>
              </div>
              <div className="form-ele">
                <label htmlFor="">Niche</label>
                <DropdownStyles>
                  <div
                    className="head"
                    onClick={() => setShownicheDropdown(!shownicheDropdown)}
                  >
                    <p>{niche === null ? "Select industry" : niche.name}</p>
                    <ArrowStyles $isSelected={shownicheDropdown}>
                      <AngleDown />
                    </ArrowStyles>
                  </div>
                  {shownicheDropdown && (
                    <div className="dropdown">
                      {allNiches.map((ele, index) => (
                        <DropCompStyles
                          $isSelected={niche?.name === ele.name}
                          key={index}
                          onClick={() => selectNiche(ele.name)}
                        >
                          <p>{ele.name}</p>
                        </DropCompStyles>
                      ))}
                    </div>
                  )}
                </DropdownStyles>
              </div>
              <div className="form-ele aud">
                <label htmlFor="audience">Target Audience</label>
                <textarea
                  name="audience"
                  id=""
                  rows={1}
                  value={target}
                  onChange={(e) => handleInputChange(e, "target")}
                  className={targetError.active ? "error-bdr" : ""}
                ></textarea>
              </div>
              <div className="form-ele desc">
                <label htmlFor="description">Brand description</label>
                <textarea
                  name="description"
                  id=""
                  rows={1}
                  value={description}
                  onChange={(e) => handleInputChange(e, "description")}
                  className={descriptionError.active ? "error-bdr" : ""}
                ></textarea>
              </div>
              <div className="btn">
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.85 }}
                  disabled={
                    niche == null ||
                    industry == null ||
                    target === "" ||
                    description === "" ||
                    targetError.active !== false ||
                    descriptionError.active !== false
                  }
                >
                  {isLoading ? <ButtonLoader /> : "Generate Assets"}
                </motion.button>
              </div>
            </form>
          </FirstFormStyle>
        )}
        {formLevel === 1 && <MultiStepForm />}
      </div>
    </DashboardStyle>
  );
}
