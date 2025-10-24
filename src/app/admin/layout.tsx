import type { Metadata } from "next";
import "@/styles/globals.css";


export const metadata: Metadata = {
  title: "admin",
  description: "Admin Dashboard",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins">
        {children}
      </body>
    </html>
  );
}
