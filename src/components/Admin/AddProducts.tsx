"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Alert from "@/lib/Alert";
import apiRequests from "@/services/config";
import { Textarea } from "../ui/textarea";
import { AddButton } from "./AddButton";

export type images = {
	image: string;
	primary: boolean;
};



export default function AddProducts() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [loading, setLoading] = useState(false);
	const [image1, setImage1] = useState<File | null>(null);
	const [image2, setImage2] = useState<File | null>(null);
	const [image3, setImage3] = useState<File | null>(null);
	const [image4, setImage4] = useState<File | null>(null);
	const [image5, setImage5] = useState<File | null>(null);

	const previewImage = (e: any) => {
		const [file] = e.target.files;
		if (file) {
			e.target.nextElementSibling.src = URL.createObjectURL(file);
			e.target.previousElementSibling.classList.add("hidden");
		}
	};
	async function createProduct() {
		if (!title) {
			Alert("error", "عنوان وارد نشده");
			return false;
		}
		setLoading(true);

		let uploadedImages = [
			{ image1: "", primary: true },
			{ image2: "", primary: false },
			{ image3: "", primary: false },
			{ image4: "", primary: false },
			{ image5: "", primary: false },
		];

		if (image1) {
			const url1 = await upload(image1);
			uploadedImages[0].image1 = url1;
		}
		if (image2) {
			const url2 = await upload(image2);
			uploadedImages[1].image2 = url2;
		}
		if (image3) {
			const url3 = await upload(image3);
			uploadedImages[2].image3 = url3;
		}
		if (image4) {
			const url4 = await upload(image4);
			uploadedImages[3].image4 = url4;
		}
		if (image5) {
			const url5 = await upload(image5);
			uploadedImages[4].image5 = url5;
		}
		const data = {
			title,
			show: true,
			description,
			images: uploadedImages,
			main: true
		};

		apiRequests
			.post("/products", data)
			.then(() => {
				Alert("success", "محصول با موفقیت ثبت شد");
				setTitle("")
				setDescription("")
				setLoading(false);
			})
			.catch(() => {
				Alert("error", "محصول ثبت نشد");
				setTitle("")
				setDescription("")
				setLoading(false);
			});
	}
	const upload = async (file: any) => {
		const upload_preset = "user_images";
		const cloud_name = "dt0lzjiwt";
		const api_key = "695583444611436";

		if (file.name === undefined) {
			return false;
		}

		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", upload_preset);
		formData.append("api_key", api_key);

		try {
			const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
				method: "POST",
				body: formData,
			});

			const data = await response.json();

			if (data.secure_url) {
				return data.secure_url;
			}
		} catch (error) {
			Alert("error", error);
		}
	};

	return (
		<Dialog>
			<form className="self-end">
				<DialogTrigger asChild>
					<div>
						<AddButton title={"افزودن محصول"} />
					</div>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Add product</DialogTitle>
					</DialogHeader>
					<div className="grid gap-4">
						<div className="grid gap-3">
							<Label htmlFor="name-1" className="font-dana">
								عنوان
							</Label>
							<Input value={title} onChange={(e) => setTitle(e.target.value)} id="name-1" name="name" required />
						</div>
						<div className="grid gap-3">
							<Label htmlFor="name-1" className="font-dana">
								توضیحات
							</Label>
							<Textarea value={description} onChange={(e) => setDescription(e.target.value)} id="name-1" required />
						</div>
						<div className="grid grid-cols-3 gap-5 font-dana">
							<label htmlFor="file-1" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
								<div className="flex flex-col items-center justify-center pt-5 pb-6">
									<svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
									</svg>
									<p className="hidden md:block mb-2 text-sm text-center text-gray-500 ">
										<span>کلیک کنید</span> یا بکشید و رها کنید
									</p>
									<p className="hidden md:block mb-2 text-sm text-center text-gray-500 font-danaBold">عکس اصلی</p>
								</div>
								<input
									accept="image/*"
									onChange={(e) => {
										e.target.files ? setImage1(e.target.files[0]) : "";
										previewImage(e);
									}}
									id="file-1"
									type="file"
									className="hidden"
								/>
								<img id="blah" src="/" alt="" />
							</label>
							<label htmlFor="file-2" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
								<div className="flex flex-col items-center justify-center pt-5 pb-6">
									<svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
									</svg>
									<p className="hidden md:block mb-2 text-sm text-center text-gray-500">
										<span>کلیک کنید</span> یا بکشید و رها کنید
									</p>
									<p className="hidden md:block mb-2 text-sm text-center text-gray-500 font-danaBold">عکس دوم</p>
								</div>
								<input
									accept="image/*"
									onChange={(e) => {
										e.target.files ? setImage2(e.target.files[0]) : "";
										previewImage(e);
									}}
									id="file-2"
									type="file"
									className="hidden"
								/>
								<img id="blah" src="/" alt="" />
							</label>
							<label htmlFor="file-3" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
								<div className="flex flex-col items-center justify-center pt-5 pb-6">
									<svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
									</svg>
									<p className="hidden md:block mb-2 text-sm text-center text-gray-500">
										<span>کلیک کنید</span> یا بکشید و رها کنید
									</p>
									<p className="hidden md:block mb-2 text-sm text-center text-gray-500 font-danaBold">عکس سوم</p>
								</div>
								<input
									accept="image/*"
									onChange={(e) => {
										e.target.files ? setImage3(e.target.files[0]) : "";
										previewImage(e);
									}}
									id="file-3"
									type="file"
									className="hidden"
								/>
								<img id="blah" src="/" alt="" />
							</label>
							<label htmlFor="file-4" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
								<div className="flex flex-col items-center justify-center pt-5 pb-6">
									<svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
									</svg>
									<p className="hidden md:block mb-2 text-sm text-center text-gray-500">
										<span>کلیک کنید</span> یا بکشید و رها کنید
									</p>
									<p className="hidden md:block mb-2 text-sm text-center text-gray-500 font-danaBold">عکس چهارم</p>
								</div>
								<input
									accept="image/*"
									onChange={(e) => {
										e.target.files ? setImage4(e.target.files[0]) : "";
										previewImage(e);
									}}
									id="file-4"
									type="file"
									className="hidden"
								/>
								<img id="blah" src="/" alt="" />
							</label>
							<label htmlFor="file-5" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
								<div className="flex flex-col items-center justify-center pt-5 pb-6">
									<svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
									</svg>
									<p className="hidden md:block mb-2 text-sm text-center text-gray-500">
										<span>کلیک کنید</span> یا بکشید و رها کنید
									</p>
									<p className="hidden md:block mb-2 text-sm text-center text-gray-500 font-danaBold">عکس پنجم</p>
								</div>
								<input
									accept="image/*"
									onChange={(e) => {
										e.target.files ? setImage5(e.target.files[0]) : "";
										previewImage(e);
									}}
									id="file-5"
									type="file"
									className="hidden"
								/>
								<img id="blah" src="/" alt="" />
							</label>

						</div>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button className="font-dana" variant="outline">
								بستن
							</Button>
						</DialogClose>
						{!loading ? (
							<Button className="font-dana cursor-pointer" onClick={createProduct} type="submit">
								ایجاد محصول
							</Button>
						) : (
							<Button className="font-dana cursor-pointer" variant="outline" disabled>
								...در حال ایجاد
							</Button>
						)}
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	);
}
