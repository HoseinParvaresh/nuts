import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import apiRequests from "@/services/config";

export default async function Home() {

	const res = await apiRequests("/products")
	const products = res.data.reverse();
	
	return (
		<div>
			<Header />
			<Main data={products}/>
		</div>
	);
}


