import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import apiRequests from "@/services/config";
export const dynamic = "force-dynamic";

export default async function Home() {
	const res = await apiRequests.get("/products");
	const resLogo = await apiRequests.get("/logos");

	const products = res.data.reverse();
	const logos = resLogo.data

	return (
		<div>
			<Header logos={logos} />
			<div className="bg-[#f2f5fc]">
				<Main data={products} />
			</div>
		</div>
	);
}
