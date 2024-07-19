"use client" ;
import { useEffect, useState } from "react";
import { Footer } from "../footer/footer";
import { DashboardHeader, SessionModal } from "../header/header";
import { DashboardRootStyles } from "./style";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const token = Cookies.get("token");
  const [hasSessionExpired, setHasSessionExpired] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (token === undefined) {
      setHasSessionExpired(true);
    } else if (token === "") {
      router.push("/auth/login");
    }
  }, [router, token]);
  return (
    <DashboardRootStyles>
      <DashboardHeader />
      <>{children}</>
      <Footer />
      {hasSessionExpired && (
        <SessionModal cancelLogout={() => router.push("/")} />
      )}
    </DashboardRootStyles>
  );
};
