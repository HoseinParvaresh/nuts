"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Alert from "@/lib/Alert";
import apiRequests from "@/services/config";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AddButton } from "./AddButton";


export default function AddNumber() {
	const [number, setNumber] = useState("");
	const [loading, setLoading] = useState(false);
	const [platform, setPlatform] = useState("whatsapp");

	async function createProduct() {
		if (!number) {
			Alert("error", "شماره وارد نشده");
			return false;
		}
		setLoading(true);

		const data = {
			number,
			platform, 
			show : true
		};

		apiRequests
			.post("/numbers", data)
			.then(() => {
				Alert("success", "شماره با موفقیت ثبت شد");
				setNumber("");
				setLoading(false);
			})
			.catch(() => {
				Alert("error", "شماره ثبت نشد");
				setNumber("");
				setLoading(false);
			});
	}

	return (
		<Dialog>
			<form className="self-end">
				<DialogTrigger asChild>
					<div>
						<AddButton title={"افزودن شماره"} />
					</div>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Add Number</DialogTitle>
					</DialogHeader>
					<div className="grid gap-4">
						<div className="grid gap-3">
							<Label htmlFor="name-1" className="font-dana">
								شماره
							</Label>
							<Input value={number} onChange={(e) => setNumber(e.target.value)} id="name-1" name="name" required />
						</div>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="outline" className="flex items-center gap-2 h-12">
									{platform === "whatsapp" ? <FaWhatsapp className="text-green-500 text-2xl size-6" /> : platform === "telegram" ? <FaTelegram className="text-sky-500 text-2xl size-6" /> : <FaInstagram className="text-pink-500 text-2xl size-6" />}
									<span className="font-medium">{platform}</span>
									<ChevronDownIcon />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="center" className="w-[200px]">
								<DropdownMenuGroup>
									<DropdownMenuItem className="p-1" onClick={() => setPlatform("whatsapp")}>
										<a href="#" className="flex items-center gap-2">
											<FaWhatsapp className="text-green-500 text-2xl" />
											<span>WhatsApp</span>
										</a>
									</DropdownMenuItem>
									<DropdownMenuItem className="p-1" onClick={() => setPlatform("telegram")}>
										<a href="#" className="flex items-center gap-2">
											<FaTelegram className="text-sky-500 text-2xl" />
											<span>Telegram</span>
										</a>
									</DropdownMenuItem>
									<DropdownMenuItem className="p-1" onClick={() => setPlatform("instagram")}>
										<a href="#" className="flex items-center gap-2">
											<FaInstagram className="text-pink-500 text-2xl" />
											<span>Instagram</span>
										</a>
									</DropdownMenuItem>
								</DropdownMenuGroup>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button className="font-dana" variant="outline">
								بستن
							</Button>
						</DialogClose>
						{!loading ? (
							<Button className="font-dana cursor-pointer" onClick={createProduct} type="submit">
								ایجاد شماره
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
function ChevronDownIcon() {
	return (
		<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="m6 9 6 6 6-6" />
		</svg>
	);
}
