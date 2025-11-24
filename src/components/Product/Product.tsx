"use client";
import { useState} from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export type Product = {
	id: string;
	title: string;
	images: [{ image1: string; primary: boolean }, { image2: string; primary: boolean }];
	show: boolean;
};

export default function Product({productData} : { productData: Product }) {
	const images = [
		{
			original: productData.images[0].image1,
			thumbnail: productData.images[0].image1,
			originalClass : "size-100"
		},
		{
			original: productData.images[1].image2,
			thumbnail: productData.images[1].image2,

			originalClass : "size-100"
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
				<img src={productData.images[0].image1} className="rounded-t-2xl w-full h-48 object-cover bg-gray-50 hover:scale-110 transition-transform" />
				<div onClick={() => openModal(productData)} className="p-4 text-center cursor-pointer">
					<h3 className="text-lg/6 font-semibold text-gray-800 line-clamp-2 h-12">{productData.title}</h3>
					<p className="text-sm text-gray-600 mt-5 line-clamp-2">Oily and flavorful / Medium size / Broken rate: 15%</p>
				</div>
			</div>
			{/* modal */}
			{isModalOpen && selectedProduct && (
				<div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg p-4 max-w-4xl w-full mx-4 max-h-[90vh] overflow-auto">
						<div className="flex justify-between items-center mb-4">
							<h2 className="text-2xl font-poppinsBold">{productData.title}</h2>
							<button onClick={closeModal} className="text-gray-500 hover:text-gray-700 text-2xl font-poppinsBold">
								×
							</button>
						</div>
						<div className="w-full">
							<ImageGallery
								items={images}
								showThumbnails={true}
								thumbnailPosition="right"
								showFullscreenButton={true}
								showPlayButton={false}
								slideDuration={450}
								showBullets={false}
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
