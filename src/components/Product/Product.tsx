export default function Product() {
	return (
		<div className="bg-white rounded-md p-2 pb-3">
			{/* image */}
			<div className="max-w-[330px] max-h-[330px] mx-auto">
				<img className="object-cover" src="/images/p-1.webp" alt="p-1" />
			</div>
			{/* title */}
			<p className="text-2xl md:text-xl lg:text-2xl font-interBold text-center line-clamp-2 h-[56px] px-2">Premium walnut kernelPremium walnut kernel</p>
			{/* desc */}
			<p className="mt-6 text-center text-lg md:text-base lg:text-lg line-clamp-3 px-2">Oily and flavorful / Medium size / Broken rate: 15% Oily and flavorful / Medium size / Broken rate: 15%</p>
		</div>
	);
}
