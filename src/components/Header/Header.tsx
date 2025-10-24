"use client";

import { FiSearch } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
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
			<div className="flex justify-between items-start px-2 4xs:px-3 2xs:px-5 lg:px-12 py-5 gap-3 4xs:gap-4 2xs:gap-5">
				{/* bar icon */}
				<div onClick={navbarToggle} className="md:hidden mt-1">
					<HiMiniBars3 className="size-7" />
				</div>
				{/* group name */}
				<img className="size-40 lg:size-50 xl:size-60 hidden md:block" src="/images/logo2.png" alt="logo" />
				{/* title and search box and number */}
				<div className="flex flex-col item-center gap-4 w-full md:w-auto">
					{/* top header text */}
					<p className="text-2xl xs:text-4xl md:text-3xl lg:text-4xl font-poppinsBold text-left">Iran Nuts And Spices Trading Group</p>
					{/* search box */}
					<div className="flex-center w-full flex">
						<div className="border-y-2 border-l-2 border-secondary rounded-l-md w-full">
							<input placeholder="Search products..." className="outline-none w-full pl-2 p-1 md:p-3 placeholder:text-sm md:placeholder:text-base placeholder:text-primary text-primary" type="text" />
						</div>
						<div className="bg-secondary text-primary p-[5.5px] md:p-[13.5px] border border-secondary rounded-r-md cursor-pointer">
							<FiSearch className="size-5.5" />
						</div>
					</div>
					{/* number */}
					<div className="flex flex-col gap-4">
						<a href="#" className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-center gap-2">
							<FaWhatsapp className="text-green-600 text-3xl" />
							<span className="text-green-700 font-medium text-[22px]">WhatsApp ( Country IRAN ) +989931882813</span>
						</a>
						<a href="#" className="bg-sky-50 border border-sky-200 rounded-xl p-3 flex items-center gap-2">
							<FaTelegram className="text-sky-600 text-3xl" />
							<span className="text-sky-700 font-medium text-[22px]">Telegram ( Country IRAN ) +989931882813</span>
						</a>
					</div>
				</div>
				{/* logo */}
				<img className="h-40 lg:h-50 xl:h-60 w-50 lg:w-60 xl:w-70 hidden md:block" src="/images/logo1.png" alt="logo" />
			</div>
			{/* navbar */}
			<div className={`fixed flex flex-col px-3 bg-white h-screen top-0 ${navToggle} w-67 z-20 transition-all duration-300`}>
				{/* marks icon */}
				<div className="self-end" onClick={navbarToggle}>
					<HiMiniXMark className="size-8 my-3" />
				</div>
				{/* logo */}
				<div className="flex">
					<img className="size-30" src="/images/logo2.png" alt="logo" />
					<img className="h-30 w-31" src="/images/logo1.png" alt="logo" />
				</div>
				{/* contact */}
				<div className="flex flex-col gap-4">
					<p className="font-interBold mt-7 text-lg">Contact us (Country IRAN)</p>
					<div>
						<a href="" className="flex-center gap-3 mb-5">
							<FaWhatsapp className="size-10 text-green-500" />
							<span className="text-orange-400 font-poppinsBold text-xl">WhatsApp +989931882813</span>
						</a>
						<a href="" className="flex-center gap-3">
							<FaTelegram className="size-10 text-sky-500" />
							<span className="text-orange-400 font-poppinsBold text-xl">Telegram +989931882813</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
