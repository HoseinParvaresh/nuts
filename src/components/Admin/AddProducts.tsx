"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Alert from "@/lib/Alert";
import apiRequests from "@/services/config";
import styled from "styled-components";

export type images = {
	image: string;
	primary: boolean;
};

export const AddButton = () => {
	return (
		<StyledWrapper>
			<button className="button" type="button">
				<span className="button__text">افزودن محصول</span>
				<span className="button__icon">
					<svg className="svg" fill="none" height={24} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
						<line x1={12} x2={12} y1={5} y2={19} />
						<line x1={5} x2={19} y1={12} y2={12} />
					</svg>
				</span>
			</button>
		</StyledWrapper>
	);
};
const StyledWrapper = styled.div`
	.button {
		--main-focus: #2d8cf0;
		--font-color: #323232;
		--bg-color-sub: #dedede;
		--bg-color: #eee;
		--main-color: #323232;
		position: relative;
		width: 200px;
		height: 40px;
		cursor: pointer;
		display: flex;
		align-items: center;
		border: 2px solid var(--main-color);
		box-shadow: 4px 4px var(--main-color);
		background-color: var(--bg-color);
		border-radius: 10px;
		overflow: hidden;
	}

	.button,
	.button__icon,
	.button__text {
		transition: all 0.3s;
	}

	.button .button__text {
		transform: translateX(22px);
		color: var(--font-color);
		font-weight: 600;
	}

	.button .button__icon {
		position: absolute;
		transform: translateX(157px);
		height: 100%;
		width: 39px;
		background-color: var(--bg-color-sub);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.button .svg {
		width: 20px;
		fill: var(--main-color);
	}

	.button:hover {
		background: var(--bg-color);
	}

	.button:hover .button__text {
		color: transparent;
	}

	.button:hover .button__icon {
		width: 197px;
		transform: translateX(0);
	}

	.button:active {
		transform: translate(3px, 3px);
		box-shadow: 0px 0px var(--main-color);
	}
`;

export default function AddProducts() {
	const [title, setTitle] = useState("");
	const [image1, setImage1] = useState<File | null>(null);
	const [image2, setImage2] = useState<File | null>(null);

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

		let uploadedImages = [
			{ image1: "", primary: true },
			{ image2: "", primary: false },
		];

		if (image1) {
			const url1 = await upload(image1);
			uploadedImages[0].image1 = url1;
		}
		if (image2) {
			const url2 = await upload(image2);
			uploadedImages[1].image2 = url2;
		}
		const data = {
			title,
			show: true,
			images: uploadedImages,
		};
		apiRequests
			.post("/products", data)
			.then(() => Alert("success", "محصول با موفقیت ثبت شد"))
			.catch(() => Alert("error", "محصول ثبت نشد"));
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
						<AddButton />
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
						<div className="grid grid-cols-2 gap-5 font-dana">
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
						</div>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button className="font-dana" variant="outline">
								بستن
							</Button>
						</DialogClose>
						<Button className="font-dana" onClick={createProduct} type="submit">
							ساخت محصول
						</Button>
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	);
}
