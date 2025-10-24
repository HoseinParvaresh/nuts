"use client";
import { SetStateAction, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Product() {
	const images = [
		{
			original: "https://picsum.photos/id/1018/1000/600/",
			thumbnail: "https://picsum.photos/id/1018/250/150/",
		},
		{
			original: "https://picsum.photos/id/1015/1000/600/",
			thumbnail: "https://picsum.photos/id/1015/250/150/",
		},
		{
			original: "https://picsum.photos/id/1019/1000/600/",
			thumbnail: "https://picsum.photos/id/1019/250/150/",
		},
	];
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);

	const openModal = (product) => {
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
				<img src="/images/p-1.webp" className="rounded-t-2xl w-full h-48 object-cover bg-gray-50 hover:scale-110 transition-transform" />
				<div onClick={() => openModal({id:2})} className="p-4 text-center cursor-pointer">
					<h3 className="text-lg/6 font-semibold text-gray-800 line-clamp-2 h-12">Premium walnut kernel Premium walnut kernel</h3>
					<p className="text-sm text-gray-600 mt-5 line-clamp-2">Oily and flavorful / Medium size / Broken rate: 15%</p>
				</div>
			</div>
			{/* modal */}
			{isModalOpen && selectedProduct && (
				<div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg p-4 max-w-4xl w-full mx-4 max-h-[90vh] overflow-auto">
						<div className="flex justify-between items-center mb-4">
							<h2 className="text-2xl font-poppinsBold">Premium walnut kernel</h2>
							<button onClick={closeModal} className="text-gray-500 hover:text-gray-700 text-2xl font-poppinsBold">
								×
							</button>
						</div>
						<div className="w-full">
							<ImageGallery
								items={images}
								showThumbnails={true}
								thumbnailPosition="right" // thumbnails در سمت راست، ستونی
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
