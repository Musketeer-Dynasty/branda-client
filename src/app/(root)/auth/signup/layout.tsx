import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Signup",
  description: "Create a new branda account",
};
export interface ILayout{
  children : ReactNode;
}
const PageLayout: React.FC<ILayout> = ({ children }) => {
  return <>{children}</>;
};

export default PageLayout;
