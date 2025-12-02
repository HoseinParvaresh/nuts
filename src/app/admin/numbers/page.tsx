import DashboardHeader from "@/components/Admin/DashboardHeader";
import { NumbersTable } from "@/components/Admin/NumbersTable";
import AddProducts from "@/components/Admin/AddProducts";
import apiRequests from "@/services/config";
import AddNumber from "@/components/Admin/AddNumber";
export const dynamic = "force-dynamic"

export default async function page() {
	const res = await apiRequests.get("/numbers");

	return (
		<>
			<DashboardHeader />
			<div className="px-10 py-5 mt-10 flex flex-col">
				<p className="text-3xl text-right font-danaBold mb-5">لیست شماره ها</p>
				<AddNumber />
				{<NumbersTable data={res.data} />}
			</div>
		</>
	);
}
