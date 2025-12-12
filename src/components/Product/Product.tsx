"use client";
import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export type Product = {
	id: string;
	title: string;
	images: [{ image1: string; primary: boolean }, { image2: string; primary: boolean }, { image3: string; primary: boolean }];
	show: boolean;
	description: string;
	main: boolean;
};

export default function Product({ productData }: { productData: Product }) {
	const renderItem = (item: any) => {
		return (
			<div>
				<img src={item.original || null} alt="" className={productData.main ? "rounded-sm" : "!h-60 2xs:!h-90 xs:!h-110 !w-120 rounded-full"} />
			</div>
		);
	};

	const renderThumbInner = (item : any) => {
		return (
			<div className="bg-white">
				<img src={item.thumbnail || null} className={productData.main ? "rounded-none" : "rounded-full" } alt="" />
			</div>
		);
	};

	const images = [
		productData.images[1]?.image2,
		productData.images[2]?.image3,
	  ]
		.filter(Boolean) 
		.map((img) => ({
		  original: img,
		  thumbnail: img,
		}));

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

	const openModal = (product: Product) => {
		setSelectedProduct(product);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedProduct(null);
	};

	if (!selectedProduct && isModalOpen) {
		setIsModalOpen(false);
	}
	return (
		<>
			<div onClick={() => openModal(productData)} className="bg-white min-h-[418px] relative rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden">
				<img src={productData.images[0].image1} className={` w-full object-cover max-h-[270px] object-center bg-gray-50 hover:scale-110 transition-transform  ${productData.main ? "rounded-none" : "rounded-full"}`} />
				<div onClick={() => openModal(productData)} className="p-4 text-center cursor-pointer">
					<h3 className="text-lg/6 font-semibold text-gray-800 line-clamp-2 h-12">{productData.title}</h3>
					<p className="text-[15px] text-gray-600 mt-4 line-clamp-2 h-[45px] text-left">{productData.description}</p>
				</div>
			</div>
			{/* modal */}
			{isModalOpen && selectedProduct && (
				<div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg p-4 w-100 3xs:w-160 mx-4 max-h-[80vh] overflow-auto">
						<div className="flex justify-between items-center mb-4">
							<h2 className="text-base sm:text-2xl font-poppinsBold">{productData.title}</h2>
							<button onClick={closeModal} className="text-gray-500 hover:text-gray-700 text-4xl">
								×
							</button>
						</div>
						<div className="w-full">
							<ImageGallery items={images} renderItem={renderItem} renderThumbInner={renderThumbInner} showThumbnails={true} thumbnailPosition="right" showPlayButton={false} showFullscreenButton={false} />
						</div>
					</div>
				</div>
			)}
		</>
	);
}
