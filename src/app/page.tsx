import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import apiRequests from "@/services/config";
export const dynamic = "force-dynamic"

export default async function Home() {

	const res = await apiRequests.get("/products")
	const products = res.data.reverse();
	
	return (
		<div>
			<Header />
			<Main data={products}/>
		</div>
	);
}


