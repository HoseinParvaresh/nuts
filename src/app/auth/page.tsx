"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import apiRequests from "@/services/config";
import { isValidEmail, isValidPassword } from "@/lib/utils";
import Alert from "@/lib/Alert";
import Cookies from "js-cookie";

export default function page() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e: any) => {
		if (!isValidEmail(email) || !isValidPassword(password)) {
			Alert("error", "ایمیل یا رمز عبور نادرست است");
			return false;
		}

		e.preventDefault();
		setLoading(true);
		setError("");

		apiRequests
			.get("/admin")
			.then((res) => {
				
				if (res.data[0].email === email && res.data[0].password === password) {
					Cookies.set("token", JSON.stringify({ token: "token" }));
					router.push("/admin");
				} else {
					Alert("error", "ایمیل یا رمز عبور نادرست است");
				}
			})
			.catch((res) => {
				setError(res || "خطا در لاگین");
				Alert("error", "خطا در ارتباط با سرور");
			})
			.finally(() => setLoading(false));
	};

	return (
		<div className="bg-slate-900 md:h-screen font-dana">
			<div className="grid md:grid-cols-2 items-center gap-8 h-full">
				<div className="max-md:order-1 p-4">
					<img src="https://readymadeui.com/signin-image.webp" className="lg:max-w-[80%] w-full h-full object-contain block mx-auto" alt="login-image" />
				</div>

				<div className="flex items-center md:p-8 p-6 bg-white md:rounded-tl-[55px] md:rounded-bl-[55px] h-full">
					<form className="max-w-lg w-full mx-auto">
						<div className="mb-12">
							<h3 className="text-slate-900 text-4xl font-bold text-center">ورود به داشبورد ادمین</h3>
						</div>
						<div className="space-y-8">
							<div>
								<label className="text-slate-900 text-xs font-medium block mb-2">ایمیل</label>
								<div className="relative flex items-center">
									<input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="text" required className="w-full text-sm border-b border-slate-300 focus:border-slate-800 pl-2 pr-8 py-3 outline-none" placeholder="Enter email" />
									<svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
										<defs>
											<clipPath id="a" clipPathUnits="userSpaceOnUse">
												<path d="M0 512h512V0H0Z" data-original="#000000"></path>
											</clipPath>
										</defs>
										<g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
											<path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
											<path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
										</g>
									</svg>
								</div>
							</div>
							<div>
								<label className="text-slate-900 text-xs font-medium block mb-2">رمز عبور</label>
								<div className="relative flex items-center">
									<input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="text" required className="w-full text-sm border-b border-slate-300 focus:border-slate-800 pl-2 pr-8 py-3 outline-none" placeholder="Enter password" />
									<svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
										<path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
									</svg>
								</div>
							</div>
						</div>
						<div className="mt-12">
							<button type="button" disabled={loading} onClick={handleSubmit} className="w-full py-3 px-6 text-sm font-medium cursor-pointer tracking-wider rounded-full text-white bg-slate-800 hover:bg-slate-900 focus:outline-none">
								{loading ? "...در حال ورود" : "ورود"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
