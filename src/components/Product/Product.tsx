"use client";
import { useState} from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export type Product = {
	id: string;
	title: string;
	images: [{ image1: string; primary: boolean }, { image2: string; primary: boolean }];
	show: boolean;
	description: string
};

export default function Product({productData} : { productData: Product }) {
	const images = [
		{
			original: productData.images[0].image1,
			thumbnail: productData.images[0].image1,
			originalClass : "h-38 4xs:h-44 3xs:h-55 2xs:h-68 xs:h-87 sm:h-110 md:h-170 w-170"
		},
		{
			original: productData.images[1].image2,
			thumbnail: productData.images[1].image2,
			originalClass : "h-38 4xs:h-44 3xs:h-55 2xs:h-68 xs:h-87 sm:h-110 md:h-170"
		},
	];
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

	const openModal = (product : Product) => {
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
			<div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden">
				<img src={productData.images[0].image1} className="rounded-t-2xl w-full h-62 4xs:h-70 3xs:h-80 2xs:h-93 xs:h-110 sm:h-66 md:h-76 lg:h-68 xl:h-64 2xl:h-61.5 object-cover object-top bg-gray-50 hover:scale-110 transition-transform" />
				<div onClick={() => openModal(productData)} className="p-4 text-center cursor-pointer">
					<h3 className="text-lg/6 font-semibold text-gray-800 line-clamp-2 h-12">{productData.title}</h3>
					<p className="text-[15px] text-gray-600 mt-5 line-clamp-2 h-[45px]">{productData.description}</p>
				</div>
			</div>
			{/* modal */}
			{isModalOpen && selectedProduct && (
				<div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg p-4 max-w-4xl w-full mx-4 max-h-[80vh] overflow-auto">
						<div className="flex justify-between items-center mb-4">
							<h2 className="text-base sm:text-2xl font-poppinsBold">{productData.title}</h2>
							<button onClick={closeModal} className="text-gray-500 hover:text-gray-700 text-4xl">
								×
							</button>
						</div>
						<div className="w-full">
							<ImageGallery
								items={images}
								showThumbnails={true}
								thumbnailPosition="right"
								showPlayButton={false}
								showFullscreenButton={false}
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
