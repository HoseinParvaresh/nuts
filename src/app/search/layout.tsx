import type { Metadata } from "next";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header/Header";
import apiRequests from "@/services/config";

const resLogo = await apiRequests.get("/logos");
const logos = resLogo.data;

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
			<Toaster />
			<Header logos={logos} />
			<div className="bg-[#f2f5fc]">{children}</div>
		</>
	);
}
