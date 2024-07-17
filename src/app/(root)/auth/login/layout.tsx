import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your branda account",
};
export interface ILayout{
  children : ReactNode;
}
const PageLayout: React.FC<ILayout> = ({ children }) => {
  return <>{children}</>;
};

export default PageLayout;
