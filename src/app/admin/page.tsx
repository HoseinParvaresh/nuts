import DashboardHeader from "@/components/Admin/DashboardHeader";
import { ProductsTable } from "@/components/Admin/ProductsTable";
import AddProducts from "@/components/Admin/AddProducts";
import apiRequests from "@/services/config";
export const dynamic = "force-dynamic"

export default async function page() {
	const res = await apiRequests.get("/products");
	const products = res.data.reverse();

	return (
		<>
			<DashboardHeader />
			<div className="px-10 py-5 mt-10 flex flex-col">
				<p className="text-3xl text-right font-danaBold mb-5">لیست محصولات</p>
				<AddProducts />
				{<ProductsTable data={products} />}
			</div>
		</>
	);
}
