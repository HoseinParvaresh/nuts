import type { Metadata } from "next";
import DashboardHeader from "@/components/Admin/DashboardHeader";
export const metadata: Metadata = {
	title: "Dashboard",
	description: "AdminDashboard",
};

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="font-dana">
			{children}
		</div>
	);
}
