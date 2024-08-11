import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import {
  HorizontallyAlignedOptions,
  ImageOptionStyle,
  MultiStepFormStyle,
  OptionStyle,
  StageStyle,
  VaryingStepStyle,
  VerticallyAlignedOptions,
} from "./style";
import { motion } from "framer-motion";
import ReactConfetti from "react-confetti";
import { CopyToClipboard } from "@/utils/copyText";
import {
  BulletPoint,
  ColoredButtonLoader,
  SelectedBulletPoint,
} from "../icons/dashboard";
import axios from "axios";
import { BACKEND_URL } from "@/lib/config";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

interface IOption {
  text: string;
  handleSelection: Dispatch<SetStateAction<string>>;
  selectedText: string;
  fontSize?: string;
}
interface ImageOption {
  handleSelection: Dispatch<SetStateAction<string>>;
  selectedUrl: string;
  url: string;
}

export const OptionComp: React.FC<IOption> = ({
  text,
  handleSelection,
  selectedText,
  fontSize,
}) => {
  return (
    <OptionStyle onClick={() => handleSelection(text)} $fontsize={fontSize}>
      <div className="x">
        {text === selectedText ? <SelectedBulletPoint /> : <BulletPoint />}
      </div>
      <p>{text}</p>
    </OptionStyle>
  );
};
export const ImageOptionComp: React.FC<ImageOption> = ({
  url,
  handleSelection,
  selectedUrl,
}) => {
  return (
    <ImageOptionStyle onClick={() => handleSelection(url)}>
      <div className="x">
        {selectedUrl === url ? <SelectedBulletPoint /> : <BulletPoint />}
      </div>
      <div className="img">
        {url && <Image src={url} width={0} height={0} alt="" sizes="100%" />}
      </div>
    </ImageOptionStyle>
  );
};

interface IMultiStepForm {
  brandNameArray: string[];
  selectedNiche: string;
  selectedIndustry: string;
}
export const MultiStepForm: React.FC<IMultiStepForm> = ({
  brandNameArray,
  selectedIndustry,
  selectedNiche,
}) => {
  const [trackStages, setTrackStages] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCopy, setIsCopy] = useState(false);
  const [brandNames, setBrandNames] = useState<string[] | null>(brandNameArray);
  const [brandTags, setBrandTags] = useState<string[] | null>(null);
  const [stateStep, setStateStep] = useState("name");

  // for loader
  const [isLoading, setIsLoading] = useState(false);
  // for name
  const [selectedName, setSelectedName] = useState("");

  // for fonts
  const [fonts, setFonts] = useState(null);

  // for logos
  const [logos, setLogos] = useState<string[] | null>(null);
  const [selectedLogoUrl, setSelectedLogoUrl] = useState("");

  // for photos
  const [photos, setPhotos] = useState<string[] | null>(null);
  const [selectedImgUrl, setSelectedImgUrl] = useState("");

  // for illustrations
  const [illustrations, setIllustrations] = useState<string[] | null>(null);
  const [selectedIlUrl, setSelectedIlUrl] = useState("");

  // for tag
  const [selectedBrandTag, setSelectedBrandTag] = useState("");

  const handleSelection = async (step: string) => {
    if (step === "name") {
      // post to api then if successful
      setStateStep("logo");
      setTrackStages(trackStages + 1);
    } else if (step === "logo") {
      // call get
      //post to api if successful
      setStateStep("color");
      setTrackStages(trackStages + 1);
    } else if (step === "color") {
      // call get
      //post to api if successful
      setStateStep("font");
      setTrackStages(trackStages + 1);
      handleScroll(50);
    } else if (step === "font") {
      // call get
      //post to api if successful then
      setStateStep("tag");
      setTrackStages(trackStages + 1);
      handleScroll(50);
    } else if (step === "tag") {
      // call get
      //post to api if successful then
      setTrackStages(trackStages + 1);
      setStateStep("illustration");
    } else if (step === "illustration") {
      // call get
      //post to api if successful then
      handleScroll(100);
      setTrackStages(trackStages + 1);
      setStateStep("photo");
    } else if (step === "photo") {
      // call get
      //post to api if successful then
      setIsSuccess(true);
      setTrackStages(trackStages + 1);
      setTimeout(() => {
        setIsSuccess(false);
      }, 7000);
    } else if (step === "copy") {
      CopyToClipboard("link");
      setIsCopy(true);
    }
  };
  // when changed recalls the useeffect
  const [regenerate, setIsRegenerate] = useState(false);
  
  useEffect(() => {
    const token = Cookies.get("token");
    const body = {
      niche: selectedNiche,
      industry: selectedIndustry,
    };
    if (stateStep == "logo") {
      setIsLoading(true);
      axios
        .get(`${BACKEND_URL}/logo`, {
          params: body,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data) {
            setIsLoading(false);
            setLogos(res.data);
          }
        })
        .catch((error: any) => {
          console.log(error);
          setIsLoading(false);
          toast.error("An error occurred, Click regenerate!");
        });
    } else if (stateStep == "font") {
      setIsLoading(true);
      axios
        .get(`${BACKEND_URL}/font`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data) {
            setIsLoading(false);
            setFonts(res.data.data);
          }
        })
        .catch((error: any) => {
          console.log(error);
          setIsLoading(false);
          toast.error("An error occurred, Click regenerate!");
        });
    } else if (stateStep == "tag") {
      setIsLoading(true);
      axios
        .get(`${BACKEND_URL}/messaging`, {
          params: body,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data) {
            setIsLoading(false);
            setBrandTags(res.data.data);
          }
        })
        .catch((error: any) => {
          console.log(error);
          setIsLoading(false);
          toast.error("An error occurred, Click regenerate!");
        });
    } else if (stateStep == "illustration") {
      setIsLoading(true);
      axios
        .get(`${BACKEND_URL}/illustration`, {
          params: body,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data) {
            setIsLoading(false);
            setIllustrations(res.data);
          }
        })
        .catch((error: any) => {
          console.log(error);
          setIsLoading(false);
          toast.error("An error occurred, Click regenerate!");
        });
    } else if (stateStep == "photo") {
      setIsLoading(true);
      axios
        .get(`${BACKEND_URL}/photography`, {
          params: body,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data) {
            setIsLoading(false);
            setPhotos(res.data);
          }
        })
        .catch((error: any) => {
          console.log(error);
          setIsLoading(false);
          toast.error("An error occurred, Click regenerate!");
        });
    } else if (stateStep == "name"){
      // code to recall api
    }
  }, [stateStep]);
  // slider when the step gets to the middle
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (scrollOffset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <MultiStepFormStyle>
        <div className="stage-head" ref={containerRef}>
          {[1, 2, 3, 4, 5, 6, 7].map((ele, index) => (
            <StageStyle key={index} $isSelected={ele <= trackStages}>
              <motion.div className="circle" layout>
                <p>{ele}</p>
              </motion.div>
              {index !== 6 && <div className="dash"></div>}
            </StageStyle>
          ))}
        </div>
        {trackStages === 1 && (
          <VaryingStepStyle>
            <div className="top">
              <h3>Brand Name</h3>
              <p>Choose your preferred brand name</p>
            </div>
            <div className="options">
              <VerticallyAlignedOptions>
                {isLoading ? (
                  <ColoredButtonLoader />
                ) : (
                  <>
                    {brandNames &&
                      brandNames.map((ele, index) => (
                        <OptionComp
                          text={ele}
                          key={index}
                          handleSelection={setSelectedName}
                          selectedText={selectedName}
                        />
                      ))}
                  </>
                )}
              </VerticallyAlignedOptions>
            </div>
            <div className="btn">
              <button
                type="submit"
                onClick={() => handleSelection("name")}
                disabled={selectedName === "" || isLoading}
              >
                Select brand name
              </button>
              <button>Regen</button>
            </div>
          </VaryingStepStyle>
        )}
        {trackStages === 2 && (
          <VaryingStepStyle>
            <div className="top">
              <h3>Brand Logo</h3>
              <p>Choose your preferred brand logo</p>
            </div>
            <div className="options">
              <HorizontallyAlignedOptions>
                {isLoading ? (
                  <ColoredButtonLoader />
                ) : (
                  <>
                    {logos &&
                      logos.map((ele, index) => (
                        <ImageOptionComp
                          url={ele}
                          key={index}
                          handleSelection={setSelectedLogoUrl}
                          selectedUrl={selectedLogoUrl}
                        />
                      ))}
                  </>
                )}
              </HorizontallyAlignedOptions>
            </div>
            <div className="btn">
              <button
                type="submit"
                onClick={() => handleSelection("logo")}
                disabled={isLoading || selectedLogoUrl === ""}
              >
                Select brand logo
              </button>
            </div>
          </VaryingStepStyle>
        )}
        {trackStages === 3 && (
          <VaryingStepStyle>
            <div className="top">
              <h3>Brand Color</h3>
              <p>Choose your preferred brand color</p>
            </div>
            <div className="options"></div>
            <div className="btn">
              <button type="submit" onClick={() => handleSelection("color")}>
                Select brand color
              </button>
            </div>
          </VaryingStepStyle>
        )}
        {trackStages === 4 && (
          <VaryingStepStyle>
            <div className="top">
              <h3>Brand Typography</h3>
              <p>Choose your preferred brand font type</p>
            </div>
            <div className="options"></div>
            <div className="btn">
              <button type="submit" onClick={() => handleSelection("font")}>
                Select brand font
              </button>
            </div>
          </VaryingStepStyle>
        )}
        {trackStages === 5 && (
          <VaryingStepStyle>
            <div className="top">
              <h3>Brand Tag line</h3>
              <p>Choose your preferred brand tagline</p>
            </div>
            <div className="options">
              <VerticallyAlignedOptions>
                {isLoading ? (
                  <ColoredButtonLoader />
                ) : (
                  <>
                    {brandTags &&
                      brandTags.map((ele, index) => (
                        <OptionComp
                          text={ele}
                          key={index}
                          handleSelection={setSelectedBrandTag}
                          selectedText={selectedBrandTag}
                          fontSize="1.125rem"
                        />
                      ))}
                  </>
                )}
              </VerticallyAlignedOptions>
            </div>
            <div className="btn">
              <button
                type="submit"
                onClick={() => handleSelection("tag")}
                disabled={selectedBrandTag === "" || isLoading}
              >
                Select brand tag line
              </button>
            </div>
          </VaryingStepStyle>
        )}
        {trackStages === 6 && (
          <VaryingStepStyle>
            <div className="top">
              <h3>Brand Illustration</h3>
              <p>Choose your preferred brand illustration</p>
            </div>
            <div className="options">
              <HorizontallyAlignedOptions>
                {isLoading ? (
                  <ColoredButtonLoader />
                ) : (
                  <>
                    {illustrations &&
                      illustrations.map((ele, index) => (
                        <ImageOptionComp
                          url={ele}
                          key={index}
                          handleSelection={setSelectedIlUrl}
                          selectedUrl={selectedIlUrl}
                        />
                      ))}
                  </>
                )}
              </HorizontallyAlignedOptions>
            </div>
            <div className="btn">
              <button
                type="submit"
                onClick={() => handleSelection("illustration")}
                disabled={isLoading}
              >
                Select illustration
              </button>
            </div>
          </VaryingStepStyle>
        )}
        {trackStages === 7 && (
          <VaryingStepStyle>
            <div className="top">
              <h3>Brand photography</h3>
              <p>Choose your preferred brand photography</p>
            </div>
            <div className="options">
              <HorizontallyAlignedOptions>
                {isLoading ? (
                  <ColoredButtonLoader />
                ) : (
                  <>
                    {photos &&
                      photos.map((ele, index) => (
                        <ImageOptionComp
                          url={ele}
                          key={index}
                          handleSelection={setSelectedImgUrl}
                          selectedUrl={selectedImgUrl}
                        />
                      ))}
                  </>
                )}
              </HorizontallyAlignedOptions>
            </div>
            <div className="btn">
              <button
                type="submit"
                onClick={() => handleSelection("photo")}
                disabled={isLoading}
              >
                Select brand photo
              </button>
            </div>
          </VaryingStepStyle>
        )}
        {trackStages === 8 && (
          <VaryingStepStyle>
            <div className="top">
              <h3>Congratulations!</h3>
              <p>Your brand identity have been created!</p>
            </div>
            <div className="btn">
              <button type="submit" onClick={() => handleSelection("copy")}>
                {isCopy ? "Copied Link" : "Copy Link"}
              </button>
            </div>
          </VaryingStepStyle>
        )}
        {/* {trackStages === 8 && (
          <VaryingStepStyle>
            <div className="top">
              <h3>Brand Pitch Deck</h3>
              <p>Choose your preferred pitch deck template</p>
            </div>
            <div className="otions"></div>
            <div className="btn">
              <button type="submit" onClick={() => handleSelection("pitchdeck")}>
                Select brand pitch deck
              </button>
            </div>
          </VaryingStepStyle>
        )} */}
      </MultiStepFormStyle>
      {isSuccess && (
        <ReactConfetti width={window.innerWidth} height={window.innerHeight} />
      )}
    </>
  );
};
