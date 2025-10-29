import type { Metadata } from "next";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <Toaster/>
        {children}
      </body>
    </html>
  );
}
