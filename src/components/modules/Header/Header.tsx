"use client";

import { FiSearch } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";
import { useState } from "react";
export default function Header() {
	const [toggle, setToggle] = useState<string>("hidden");
	const [navToggle, setNavToggle] = useState<string>("-left-65");

	function navbarToggle() {
		toggle === "hidden" ? setToggle("") : setToggle("hidden");
		navToggle === "left-0" ? setNavToggle("-left-65") : setNavToggle("left-0");
	}
	return (
		<div className="relative border-b border-primary/20">
			{/* layout */}
			<div onClick={navbarToggle} className={`w-full ${toggle} fixed h-screen z-10 bg-black/30`}></div>
			{/* header */}
			<div className="flex justify-between px-12 py-5">
				{/* bar icon */}
				<div onClick={navbarToggle} className="md:hidden">
					<HiMiniBars3 className="size-5" />
				</div>
				{/* group name */}
				<img className="size-60" src="/images/logo2.png" alt="logo" />
				{/* title and search box and number */}
				<div className="flex flex-col item-center gap-5">
					{/* top header image */}
					<p className="text-5xl font-interBold text-center mb-1">Iran Nuts And Spices Trading Group</p>
					{/* search box */}
					<div className="flex-center w-full hidden md:flex">
						<div className="border-y-2 border-l-2 border-secondary rounded-l-md w-full">
							<input placeholder="Search products..." className="outline-none w-full pl-2 p-1 md:p-2 placeholder:text-sm md:placeholder:text-base placeholder:text-primary text-primary" type="text" />
						</div>
						<div className="bg-secondary text-primary p-[5.5px] md:p-[9.8px] border border-secondary rounded-r-md cursor-pointer">
							<FiSearch className="size-5.5" />
						</div>
					</div>
					{/* number */}
					<div className="flex flex-col gap-4">
						<a href="" className="flex-center gap-2">
							<FaWhatsapp className="size-10 text-green-500" />
							<span className="text-orange-400 font-interBold text-3xl">WhatsApp ( Country IRAN ) +989931882813</span>
						</a>
						<a href="" className="flex-center gap-2">
							<FaTelegram className="size-10 text-sky-500" />
							<span className="text-orange-400 font-interBold text-3xl">Telegram ( Country IRAN ) +989931882813</span>
						</a>
					</div>
				</div>
				{/* logo */}
				<img className="h-60 w-70" src="/images/logo1.png" alt="logo" />
			</div>
			{/* navbar */}
			<div className={`fixed px-3 bg-white h-screen top-0 ${navToggle} w-65 z-20 transition-all duration-300`}>
				{/* logo */}
				<div className="flex-center gap-3 flex mt-5">
					<img className="w-8 xl:w-10" src="/images/logo2.png" alt="logo" />
					<p className="text-primary font-bold text-xl xl:text-3xl min-w-max">I.N.S.T Group</p>
				</div>
				{/* search */}
				<div className="flex-center w-full flex mt-5">
					<div className="border-y-2 border-l-2 border-secondary rounded-l-md w-full">
						<input placeholder="Search products..." className="outline-none w-full pl-2 p-1 md:p-2 placeholder:text-sm md:placeholder:text-base placeholder:text-primary text-primary" type="text" />
					</div>
					<div className="bg-secondary text-primary p-[5.6px] md:p-2.5 border border-secondary rounded-r-md cursor-pointer">
						<FiSearch className="size-5.5" />
					</div>
				</div>
				{/* contact */}
				<div className="mt-10">
					<p className="font-bold text-lg">Contact us</p>
					{/* number */}
					<div className="flex flex-col items-start gap-y-3 mt-4">
						<a href="" className="flex-center gap-1">
							<FaWhatsapp className="size-5.5 text-green-500" />
							<span className="text-primary">+989931882813</span>
						</a>
						<a href="" className="flex-center gap-1">
							<FaTelegram className="size-5.5 text-sky-500" />
							<span className="text-primary">+989931882813</span>
						</a>
						<a href="" className="flex-center gap-1">
							<FaInstagram className="size-5.5 text-pink-500" />
							<span className="text-primary">+989931882813</span>
						</a>
						<a href="" className="flex-center gap-1">
							<FaWhatsapp className="size-5.5 text-green-500" />
							<span className="text-primary">+989931882813</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
