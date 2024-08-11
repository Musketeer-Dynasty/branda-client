import Link from "next/link";
import { Logo, LogoutPopIcon, MenuIcon, XIcon } from "../icons/header";
import { HeaderStyle, MobileDropdownStyles } from "./style";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { BACKEND_URL } from "@/lib/config";
import Cookies from "js-cookie";
import { FlexAbsoluteModalStyles } from "../dashboard/style";
import { LogoutModalStyles } from "../layout/style";

export const RootHeader = () => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const CTA = () => {
    if (pathname === "/auth/login") {
      router.push("/auth/signup");
    } else {
      router.push("/auth/login");
    }
  };
  useEffect(() => {
    setShowDropdown(false);
  }, [pathname]);
  return (
    <HeaderStyle>
      <div className="logo">
        <Link href="/">
          {" "}
          <Logo />
        </Link>
      </div>
      <div className="links desktop">
        <Link href="#">
          <p>About Us</p>
        </Link>
        <Link href="#">
          <p>Contact</p>
        </Link>
        <Link href="#">
          <p>Services</p>
        </Link>
        <div className="btn">
          <motion.button type="button" onClick={CTA} whileTap={{ scale: 0.85 }}>
            {pathname.includes("/auth/login") ? "Get Started" : "Login"}
          </motion.button>
        </div>
      </div>
      <div className="mobile menu" onClick={() => setShowDropdown(true)}>
        <MenuIcon />
      </div>
      {showDropdown && (
        <MobileDropdownStyles>
          <div className="left" onClick={() => setShowDropdown(false)}></div>
          <div className="right">
            <div className="cx">
              <div className="x" onClick={() => setShowDropdown(false)}>
                <XIcon />
              </div>
            </div>
            <div className="li">
              <Link href="#">
                <p>About Us</p>
              </Link>
            </div>
            <div className="li">
              <Link href="#">
                <p>Contact</p>
              </Link>
            </div>
            <div className="li">
              <Link href="#">
                <p>Services</p>
              </Link>
            </div>
            <div className="btn">
              <button type="button" onClick={CTA}>
                {pathname.includes("/auth/login") ? "Get Started" : "Login"}
              </button>
            </div>
          </div>
        </MobileDropdownStyles>
      )}
    </HeaderStyle>
  );
};

interface IUser {
  fname: string;
  lname: string;
}
export const DashboardHeader = () => {
  const router = useRouter();
  const token = Cookies.get("token");
  const [user, setUser] = useState<IUser>({ fname: "", lname: "" });
  // console.log(token);
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // console.log(token);
    axios
      .get(`${BACKEND_URL}/users/me`, config)
      .then((res) => {
        if (res.data) {
          Cookies.set("name",res.data.data.firstname);
          setUser({
            fname: res.data.data.firstname,
            lname: res.data.data.lastname,
          });
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <HeaderStyle>
      <div className="logo">
        <Link href="/dashboard">
          {" "}
          <Logo />
        </Link>
      </div>
      <div className="links desktop">
        <div className="fk">
          <div className="circle">
            <h5>{user.fname !== "" && user.fname[0] + user.lname[0]}</h5>
          </div>
          <p>{user.fname + " " + user.lname}</p>
        </div>
        <div className="btn">
          <button
            type="button"
            onClick={() => {
              setShowLogoutModal(true);
              setShowDropdown(false);
            }}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="mobile" onClick={() => setShowDropdown(true)}>
        <MenuIcon />
      </div>
      {showDropdown && (
        <MobileDropdownStyles>
          <div className="left" onClick={() => setShowDropdown(false)}></div>
          <div className="right">
            <div className="cx">
              <div className="x" onClick={() => setShowDropdown(false)}>
                <XIcon />
              </div>
            </div>
            <div className="li">
              <div className="fk">
                <div className="circle">
                  <h5>{user && user.fname[0] + user.lname[0]}</h5>
                </div>
                <p>{user.fname + " " + user.lname}</p>
              </div>
            </div>
            <div className="li">
              <Link href="#">
                <p>Contact</p>
              </Link>
            </div>
            <div className="li">
              <Link href="#">
                <p>Services</p>
              </Link>
            </div>
            <div className="btn">
              <button
                type="button"
                onClick={() => {
                  setShowLogoutModal(true);
                  setShowDropdown(false);
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </MobileDropdownStyles>
      )}
      {showLogoutModal && (
        <LogoutModal cancelLogout={() => setShowLogoutModal(false)} />
      )}
    </HeaderStyle>
  );
};

interface ILogoutActionsModal {
  cancelLogout: () => void;
  naviHref?: string;
}
export const LogoutModal: React.FC<ILogoutActionsModal> = ({
  cancelLogout,
  naviHref,
}) => {
  const router = useRouter();
  const [isloggingout, setIsLoggingOut] = useState(false);
  const handleLogout = () => {
    setIsLoggingOut(true);
    // remove token from jscookie
    Cookies.set("token", "");
    Cookies.set("email", "");
    Cookies.set("name", "");
    if (naviHref) {
      router.push(naviHref);
    } else {
      router.push("/auth/login");
    }
  };
  return (
    <FlexAbsoluteModalStyles>
      <LogoutModalStyles>
        <div className="pop">
          <div className="up">
            <div className="x" onClick={cancelLogout}>
              {" "}
              <XIcon />
            </div>
            <div className="l">
              <LogoutPopIcon />
            </div>
            <h4>Done generating today?</h4>
            <p>
              Hello dear, click the button below to logout of branda, your no1
              tool for brand asset generation
            </p>
          </div>
          <div className="down">
            <button
              type="button"
              onClick={handleLogout}
              disabled={isloggingout}
            >
              {isloggingout ? "Logging out..." : "Sign Out"}
            </button>
          </div>
        </div>
      </LogoutModalStyles>
    </FlexAbsoluteModalStyles>
  );
};
export const SessionModal: React.FC<ILogoutActionsModal> = ({
  cancelLogout,
  naviHref,
}) => {
  const router = useRouter();
  const [isloggingout, setIsLoggingOut] = useState(false);
  const handleLogout = () => {
    setIsLoggingOut(true);
    // remove token from jscookie
    Cookies.set("token", "");
    if (naviHref) {
      router.push(naviHref);
    } else {
      router.push("/auth/login");
    }
  };
  return (
    <FlexAbsoluteModalStyles>
      <LogoutModalStyles>
        <div className="pop">
          <div className="up">
            <div className="l">
              <LogoutPopIcon />
            </div>
            <h4>Your Session has expired!!!</h4>
            <p>
              Hello user your session has expired! You need to logout and login
              again to continue working!
            </p>
          </div>
          <div className="down">
            <button
              type="button"
              onClick={handleLogout}
              disabled={isloggingout}
            >
              {isloggingout ? "Logging out" : "Sign Out"}
            </button>
          </div>
        </div>
      </LogoutModalStyles>
    </FlexAbsoluteModalStyles>
  );
};
