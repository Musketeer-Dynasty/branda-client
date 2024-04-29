import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const work_sans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={work_sans.className}>{children}</body>
    </html>
  );
}