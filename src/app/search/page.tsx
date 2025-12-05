import apiRequests from "@/services/config";
import Product from "@/components/Product/Product";
export type Product = {
	id: string;
	title: string;
	images: [{ image1: string; primary: boolean }, { image2: string; primary: boolean }, { image3: string; primary: boolean }, { image4: string; primary: boolean }, { image5: string; primary: boolean }];
	show: boolean;
	description: string;
	main: boolean;
};

interface SearchPageProps {
	searchParams: {
		query?: string;
	};
}

export default async function SearchPage({ searchParams }: SearchPageProps) {

	const query = searchParams.query || "";
	let products: Product[] = [];

  const res = await fetch(`https://api.irnst.ir/products`,{ cache: "no-store" });
  products = await res.json();

  const filtered = products.filter((p) =>
    p.title?.toLowerCase().includes(query.toLowerCase())
  );

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold">
      Search results for: <span className="text-blue-600">{query}</span>
			</h1>

			<div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 px-5 md:px-10 py-5">
				{filtered.length > 0 ? (
					filtered.reverse().map((product) => (
						<Product key={product.id} productData={product}/>
					))
				) : (
					<p className="text-gray-600 mt-6">No products found.</p>
				)}
			</div>
		</div>
	);
}
