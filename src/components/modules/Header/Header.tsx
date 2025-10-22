import { FiSearch } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Navbar from "./Navbar";
import { HiMiniBars3 } from "react-icons/hi2";

export default function Header() {
	return (
		<div className="relative border-b border-primary/20">
			<img src="/images/top-header.png" alt="top-header" />
			<div className="pb-2 md:pb-4 pt-2 md:pt-5">
				<div className="flex gap-8 xl:gap-0 items-center md:items-start lg:items-center justify-between px-5 md:px-10 xl:px-27.5">
					{/* navbar */}
					<div className="md:hidden">
						<HiMiniBars3 />
					</div>
					{/* logo */}
					<div className="flex-center gap-3">
						<img className="w-12 xl:w-15" src="/images/logo1.png" alt="logo" />
						<p className="text-primary font-bold text-xl xl:text-3xl min-w-max">Nuts & Spices</p>
					</div>
					{/* title and search box and number */}
					<div className="flex flex-col items-center justify-center gap-5">
						{/* search box */}
						<div className="flex-center w-full hidden md:flex">
							<div className="border-y-2 border-l-2 border-secondary rounded-l-md w-full">
								<input placeholder="Search products..." className="outline-none pl-2 p-1 md:p-2 placeholder:text-sm md:placeholder:text-base placeholder:text-primary text-primary" type="text" />
							</div>
							<div className="bg-secondary text-primary p-[5.5px] md:p-2.5 border border-secondary rounded-r-md">
								<FiSearch className="size-5.5" />
							</div>
						</div>
						{/* number */}
						<div className="flex justify-end md:justify-center items-center flex-wrap gap-2 md:gap-5">
							<a href="" className="flex-center gap-1">
								<FaWhatsapp className="size-5 md:size-5.5 text-green-500" />
								<span className="text-[13px] md:text-sm  text-primary">+989931882813</span>
							</a>
							<a href="" className="flex-center gap-1">
								<FaTelegram className="size-5 md:size-5.5 text-sky-500" />
								<span className="text-[13px] md:text-sm  text-primary">+989931882813</span>
							</a>
							<a href="" className="flex-center gap-1">
								<FaInstagram className="size-5 md:size-5.5 text-pink-500" />
								<span className="text-[13px] md:text-sm  text-primary">+989931882813</span>
							</a>
							<a href="" className="flex-center gap-1">
								<FaWhatsapp className="size-5 md:size-5.5 text-green-500" />
								<span className="text-[13px] md:text-sm  text-primary">+989931882813</span>
							</a>
						</div>
					</div>
					{/* group name */}
					<div className="flex-center gap-3 hidden md:flex">
						<img className="w-8 xl:w-10" src="/images/logo2.png" alt="logo" />
						<p className="text-primary font-bold text-xl xl:text-3xl min-w-max">I.N.S.T Group</p>
					</div>
				</div>
			</div>
			<div>{/* <div className="fixed bg-red-500 h-screen top-0 right-0 w-65 z-20">Enter</div> */}</div>
		</div>
	);
}
