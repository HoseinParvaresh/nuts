import type { Metadata } from "next";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Toaster/>
        <Header/>
        {children}
    </>
  );
}
