"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import DashboardHeader from "@/components/Admin/DashboardHeader";
import { FiSearch } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";
import SelectLanguage from "@/components/Header/SelectLanguage";
import apiRequests from "@/services/config";
import Alert from "@/lib/Alert";

export default function HeaderLogoSettings() {
	const [leftLogo, setLeftLogo] = useState<string | null>(null);
	const [rightLogo, setRightLogo] = useState<string | null>(null);
	const [rightLogoFile, setRightLogoFile] = useState<File | null>(null);
	const [leftLogoFile, setLeftLogoFile] = useState<File | null>(null);
	const [loadingLeft, setLoadingLeft] = useState(false);
	const [loadingRight, setLoadingRight] = useState(false);

	const handleUpload = (e: React.ChangeEvent<HTMLInputElement>, side: "left" | "right") => {
		const file = e.target.files?.[0];
		if (!file) return;
		const url = URL.createObjectURL(file);

		if (side === "left") {
			setLeftLogo(url);
			setLeftLogoFile(file);
		} else {
			setRightLogo(url);
			setRightLogoFile(file);
		}
	};
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
	const leftLogoHandler = async () => {
		setLoadingLeft(true);

		let url = "";

		if (leftLogoFile instanceof File) {
			url = await upload(leftLogoFile);
		}

		await apiRequests
			.patch("/logos/1", { url })
			.then((res) => {
				Alert("success", "لوگو به روز شد");
				setLoadingLeft(false);
			})
			.catch((res) => {
				Alert("error", "تغییری ایجاد نشد");
				setLoadingLeft(false);
			});
	};
	const rightLogoHandler = async () => {
		setLoadingRight(true);

		let url = "";

		if (rightLogoFile instanceof File) {
			url = await upload(rightLogoFile);
		}

		await apiRequests
			.patch("/logos/2", { url })
			.then((res) => {
				Alert("success", "لوگو به روز شد");
				setLoadingRight(false);
			})
			.catch((res) => {
				Alert("error", "تغییری ایجاد نشد");
				setLoadingRight(false);
			});
	};

	return (
		<div className="w-full">
			<DashboardHeader />
			<div className="max-w-4xl mx-auto p-6 space-y-10">
				<h1 className="text-3xl font-bold text-center mb-6">تنظیمات لوگوهای هدر</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Left Logo Card */}
					<Card className="rounded-2xl shadow-md">
						<CardContent className="p-6 space-y-4">
							<h2 className="text-xl font-semibold text-center">لوگوی سمت چپ</h2>

							{leftLogo ? <img src={leftLogo} alt="Left Logo Preview" className="w-32 h-32 object-contain mx-auto border rounded-xl p-2 shadow" /> : <div className="w-32 h-32 mx-auto border rounded-xl flex items-center justify-center text-gray-400">پیش‌نمایش</div>}

							<div className="space-y-2">
								<Label>آپلود لوگو جدید</Label>
								<Input type="file" accept="image/*" onChange={(e) => handleUpload(e, "left")} />
							</div>
							{loadingLeft ? (
								<Button className="w-full flex gap-2 items-center justify-center">
									...درحال تغییر
								</Button>
							) : (
								<Button onClick={leftLogoHandler} className="w-full flex gap-2 items-center justify-center">
									<Upload size={18} /> ذخیره تغییرات
								</Button>
							)}
						</CardContent>
					</Card>

					{/* Right Logo Card */}
					<Card className="rounded-2xl shadow-md">
						<CardContent className="p-6 space-y-4">
							<h2 className="text-xl font-semibold text-center">لوگوی سمت راست</h2>

							{rightLogo ? <img src={rightLogo} alt="Right Logo Preview" className="w-32 h-32 object-contain mx-auto border rounded-xl p-2 shadow" /> : <div className="w-32 h-32 mx-auto border rounded-xl flex items-center justify-center text-gray-400">پیش‌نمایش</div>}

							<div className="space-y-2">
								<Label>آپلود لوگو جدید</Label>
								<Input type="file" accept="image/*" onChange={(e) => handleUpload(e, "right")} />
							</div>

							{loadingRight ? (
								<Button className="w-full flex gap-2 items-center justify-center">
									...درحال تغییر
								</Button>
							) : (
								<Button onClick={rightLogoHandler} className="w-full flex gap-2 items-center justify-center">
									<Upload size={18} /> ذخیره تغییرات
								</Button>
							)}
						</CardContent>
					</Card>
				</div>
			</div>
			{/* Layout Preview */}
			<div className="my-20">
				<h2 className="text-xl font-semibold mb-4 text-center">پیش‌نمایش هدر</h2>
				<div className="relative border-b border-primary/20">
					{/* header */}
					<div className="flex justify-between items-start px-2 4xs:px-3 2xs:px-5 md:px-0 lg:px-25 py-5 gap-3 4xs:gap-4 2xs:gap-5">
						{/* bar icon */}
						<div className="md:hidden mt-1">
							<HiMiniBars3 className="size-7" />
						</div>
						{/* group name */}

						{leftLogo ? <img src={leftLogo} className="size-60" /> : <span className="text-gray-400">لوگو چپ</span>}

						{/* title and search box and number */}
						<div className="flex flex-col item-center gap-5 w-full md:w-auto">
							{/* top header text */}
							<p className="text-2xl xs:text-4xl md:text-3xl lg:text-4xl font-poppinsBold text-left">Iran Nuts And Spices Trading Group</p>
							{/* search box & language */}
							<div className="flex flex-col 2xs:flex-row gap-2 lg:gap-5 relative">
								<div className="flex-center w-full flex">
									<div className="border-y-2 border-l-2 border-secondary rounded-l-md w-full">
										<input placeholder="Search products..." className="outline-none w-full p-[11px] placeholder:text-sm md:placeholder:text-base placeholder:text-primary text-primary" type="text" />
									</div>
									<div className="bg-secondary text-primary p-[13px] border border-secondary rounded-r-md cursor-pointer">
										<FiSearch className="size-5.5" />
									</div>
								</div>
								<SelectLanguage />
							</div>

							{/* number */}
							<div className="flex flex-col gap-4">
								<a target="blank" href="/" className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-center gap-2 font-anta">
									<FaWhatsapp className="text-green-600 text-2xl xs:text-3xl" />
									<span className="text-green-700 font-medium text-base xs:text-[22px]">
										WhatsApp <span className="hidden lg:inline">( Country IRAN )</span> <span className="font-bold xs:text-2xl text-lg tracking-wider">+989931882813</span>
									</span>
								</a>
								<a target="blank" href="/" className={`bg-sky-50 border border-sky-200 rounded-xl p-3 flex items-center gap-2 font-anta`}>
									<FaTelegram className="text-sky-600 text-2xl xs:text-3xl" />
									<span className="text-sky-700 font-medium text-base xs:text-[22px]">
										Telegram <span className="hidden lg:inline">( Country IRAN )</span> <span className="xs:text-2xl text-lg font-bold tracking-wider">+989931882813</span>
									</span>
								</a>
							</div>
						</div>
						{/* logo */}
						{rightLogo ? <img src={rightLogo} className="size-60" /> : <span className="text-gray-400">لوگو راست</span>}
					</div>
				</div>
			</div>
		</div>
	);
}
