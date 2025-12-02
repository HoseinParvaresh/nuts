"use client";

import { HiMiniBars3 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import { useState } from "react";
import * as motion from "motion/react-client";
import moment from "moment-jalaali";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

export default function DashboardHeader() {
	moment.loadPersian({ dialect: "persian-modern" });
	const today = moment().format("dddd jD jMMMM");
	const [toggle, setToggle] = useState<string>("hidden");
	const [navToggle, setNavToggle] = useState<string>("-right-65");

	function navbarToggle() {
		toggle === "hidden" ? setToggle("") : setToggle("hidden");
		navToggle === "right-0" ? setNavToggle("-right-75") : setNavToggle("right-0");
	}

	return (
		<div className="flex items-center justify-between w-full h-22 px-5 sm:px-7 bg-white max-lg:border-b max-lg:border-b-black/10 lg:rounded-lg shadow-lg">
			{/* overlay */}
			<div onClick={navbarToggle} className={`w-full ${toggle} fixed h-screen z-10 bg-black/30 top-0 left-0`}></div>
			{/* bars icon */}
			<HiMiniBars3 onClick={navbarToggle} className="block size-6" />
			{/* logo */}
			<Link href={"/"} className="text-2xl font-danaBold">
				داشبورد ادمین
			</Link>
			{/* date */}
			<time dateTime="2025-07-01T08:29:42.802Z" className="flex-center text-sm text-black/80 select-none font-danaBold">
				{today}
			</time>

			{/* navbar */}
			<div className={`fixed flex flex-col px-3 bg-white h-screen top-0 ${navToggle} w-60 z-20 transition-all duration-300`}>
				{/* marks icon */}
				<div className="self-end" onClick={navbarToggle}>
					<HiMiniXMark className="size-8 my-3" />
				</div>
				<ul className="flex flex-col gap-y-8 mt-10 px-10 *:cursor-pointer *:text-black/70 *:hover:text-black transition-colors">
					<li>
						<a href="/admin">لیست محصولات</a>
					</li>
					<li>
						<a href="/admin/numbers">لیست شماره ها</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
