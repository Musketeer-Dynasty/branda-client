import Link from "next/link";
import { Logo, MenuIcon, XIcon } from "../icons/header";
import { HeaderStyle, MobileDropdownStyles } from "./style";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
  useEffect(()=>{
    setShowDropdown(false);
  },[pathname]);
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
          <button type="button" onClick={CTA}>
            {pathname.includes("/auth/login") ? "Get Started" : "Login"}
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

export const DashboardHeader = () => {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/");
  };
  return (
    <HeaderStyle>
      <div className="logo">
        <Link href="/dashboard">
          {" "}
          <Logo />
        </Link>
      </div>
      <div className="links">
        <div className="fk">
          <div className="circle">
            <h5>LA</h5>
          </div>
          <p>Lukmon Abdulsalam</p>
        </div>
        <div className="btn">
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </HeaderStyle>
  );
};
