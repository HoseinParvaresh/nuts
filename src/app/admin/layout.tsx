import type { Metadata } from "next";
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
