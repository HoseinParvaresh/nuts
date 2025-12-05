"use client";

import { FiSearch } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";
import SelectLanguage from "./SelectLanguage";
import apiRequests from "@/services/config";
import { useRouter } from "next/navigation";

export type Number = {
	id: string;
	number: string;
	platform: string;
	show: boolean;
};

export type Logo = {
	id:string,
	url: string,
	side: string
}

export default function Header({logos} : {logos : Logo[]}) {
	const [numbers, setNumbers] = useState<Number[]>([]);
	const [toggle, setToggle] = useState<string>("hidden");
	const [navToggle, setNavToggle] = useState<string>("-left-65");
	const [search, setSearch] = useState("");
	const router = useRouter();
	
	useEffect(() => {
		apiRequests.get("/numbers").then((res) => setNumbers(res.data));
	}, []);

	function navbarToggle() {
		toggle === "hidden" ? setToggle("") : setToggle("hidden");
		navToggle === "left-0" ? setNavToggle("-left-65") : setNavToggle("left-0");
	}
	function searchProducts() {
		if (!search.trim()) return;
		router.push(`/search?query=${search}`);
	}
	return (
		<div className="relative border-b border-primary/20">
			{/* layout */}
			<div onClick={navbarToggle} className={`w-full ${toggle} fixed h-screen z-10 bg-black/30`}></div>
			{/* header */}
			<div className="flex justify-between items-start px-2 4xs:px-3 2xs:px-5 md:px-0 lg:px-25 py-5 gap-3 4xs:gap-4 2xs:gap-5">
				{/* bar icon */}
				<div onClick={navbarToggle} className="md:hidden mt-1">
					<HiMiniBars3 className="size-7" />
				</div>
				{/* group name */}
				<a href="/">
					<img className="size-60 hidden md:block" src={logos[0].url} alt="logo" />
				</a>
				{/* title and search box and number */}
				<div className="flex flex-col item-center gap-5 w-full md:w-auto">
					{/* top header text */}
					<p className="text-2xl xs:text-4xl md:text-3xl lg:text-4xl font-poppinsBold text-left">Iran Nuts And Spices Trading Group</p>
					{/* search box & language */}
					<div className="flex flex-col 2xs:flex-row gap-2 lg:gap-5 relative">
						<div className="flex-center w-full flex">
							<div className="border-y-2 border-l-2 border-secondary rounded-l-md w-full">
								<input placeholder="Search products..." onChange={(e) => setSearch(e.target.value)} value={search} className="outline-none w-full p-[11px] placeholder:text-sm md:placeholder:text-base placeholder:text-primary text-primary" type="text" />
							</div>
							<div onClick={searchProducts} className="bg-secondary text-primary p-[13px] border border-secondary rounded-r-md cursor-pointer">
								<FiSearch className="size-5.5" />
							</div>
						</div>
						<SelectLanguage />
					</div>

					{/* number */}
					<div className="flex flex-col gap-4">
						{numbers.map(
							(n) =>
								n.show &&
								(n.platform === "whatsapp" ? (
									<a key={n.id} target="blank" href={`https://wa.me/${n.number}`} className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-center gap-2 font-anta">
										<FaWhatsapp className="text-green-600 text-2xl xs:text-3xl" />
										<span className="text-green-700 font-medium text-base xs:text-[22px]">
											WhatsApp <span className="hidden lg:inline">( Country IRAN )</span> <span className="font-bold xs:text-2xl text-lg tracking-wider">{n.number}</span>
										</span>
									</a>
								) : n.platform === "telegram" ? (
									<a key={n.id} target="blank" href={`https://t.me/${n.number}`} className={`bg-sky-50 border border-sky-200 rounded-xl p-3 flex items-center gap-2 font-anta`}>
										<FaTelegram className="text-sky-600 text-2xl xs:text-3xl" />
										<span className="text-sky-700 font-medium text-base xs:text-[22px]">
											Telegram <span className="hidden lg:inline">( Country IRAN )</span> <span className="xs:text-2xl text-lg font-bold tracking-wider">{n.number}</span>
										</span>
									</a>
								) : (
									<a key={n.id} target="blank" href={`https://instagram.com/${n.number}`} className={`bg-pink-50 border border-pink-200 rounded-xl p-3 flex items-center gap-2 font-anta`}>
										<FaInstagram className="text-pink-600 text-2xl xs:text-3xl" />
										<span className="text-pink-700 font-medium text-base xs:text-[22px]">
											Instagram <span className="hidden lg:inline">( Country IRAN )</span> <span className="font-bold xs:text-2xl text-lg tracking-wider">{n.number}</span>
										</span>
									</a>
								))
						)}
					</div>
				</div>
				{/* logo */}
				<a href="/">
					<img className="size-60 hidden md:block" src={logos[1].url} alt="logo" />
				</a>
			</div>
			{/* navbar */}
			<div className={`fixed flex flex-col px-3 bg-white h-screen top-0 ${navToggle} w-67 z-20 transition-all duration-300`}>
				{/* marks icon */}
				<div className="self-end" onClick={navbarToggle}>
					<HiMiniXMark className="size-8 my-3" />
				</div>
				{/* logo */}
				<div className="flex">
					<img className="size-30" src={logos[0].url} alt="logo" />
					<img className="size-30" src={logos[1].url} alt="logo" />
				</div>
				{/* contact */}
				<div className="flex flex-col gap-4">
					<p className="font-poppinsBold mt-7 text-base">Contact us (Country IRAN)</p>
					<div className="flex flex-col gap-4">
						{numbers.map(
							(n) =>
								n.show &&
								(n.platform === "whatsapp" ? (
									<a key={n.id} target="blank" href={`https://wa.me/${n.number}`} className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-center gap-2">
										<FaWhatsapp className="text-green-600 text-xl xs:text-3xl" />
										<span className="text-green-700 font-medium text-sm xs:text-[22px]">WhatsApp {n.number}</span>
									</a>
								) : n.platform === "telegram" ? (
									<a key={n.id} target="blank" href={`https://t.me/${n.number}`} className={`bg-sky-50 border border-sky-200 rounded-xl p-3 flex items-center gap-2`}>
										<FaTelegram className="text-sky-600 text-xl xs:text-3xl" />
										<span className="text-sky-700 font-medium text-sm xs:text-[22px]">Telegram {n.number}</span>
									</a>
								) : (
									<a key={n.id} target="blank" href={`https://instagram.com/${n.number}`} className={`bg-pink-50 border border-pink-200 rounded-xl p-3 flex items-center gap-2`}>
										<FaInstagram className="text-pink-600 text-xl xs:text-3xl" />
										<span className="text-pink-700 font-medium text-sm xs:text-[22px]">Instagram {n.number}</span>
									</a>
								))
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
