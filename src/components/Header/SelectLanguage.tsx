"use client";

import { useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function SelectLanguage() {
	const [selectedLanguage, setSelectedLanguage] = useState(["English", "en-flag.svg"]);
	const languages = [
		{ id: 1, link: "/", image: "en-flag.svg", text: "English" },

		{ label: true, text: "Asia" },
		{ id: 2, link: "https://translate.google.com/translate?sl=en&tl=zh-CN&hl=fa&u=https://irnst.ir&client=webapp", image: "ch-flag.svg", text: "中文（中国）" },
		{ id: 3, link: "https://translate.google.com/translate?sl=en&tl=zh-TW&hl=fa&u=https://irnst.ir&client=webapp", image: "ch-flag.svg", text: "中文（台灣）" },
		{ id: 4, link: "https://translate.google.com/translate?sl=en&tl=ja&hl=fa&u=https://irnst.ir&client=webapp", image: "jp-flag.svg", text: "日本語" },
		{ id: 5, link: "https://translate.google.com/translate?sl=en&tl=ko&hl=fa&u=https://irnst.ir&client=webapp", image: "sk-flag.svg", text: "한국어" },
		{ id: 6, link: "https://translate.google.com/translate?sl=en&tl=ar&hl=fa&u=https://irnst.ir&client=webapp", image: "ar-flag.svg", text: "العربية" },
		{ id: 7, link: "https://translate.google.com/translate?sl=en&tl=ur&hl=fa&u=https://irnst.ir&client=webapp", image: "pk-flag.svg", text: "اُردو" },
		{ id: 8, link: "https://translate.google.com/translate?sl=en&tl=tr&hl=fa&u=https://irnst.ir&client=webapp", image: "tr-flag.svg", text: "Türkçe" },
		{ id: 9, link: "https://translate.google.com/translate?sl=en&tl=az&hl=fa&u=https://irnst.ir&client=webapp", image: "az-flag.svg", text: "Azərbaycan dili" },
		{ id: 10, link: "https://translate.google.com/translate?sl=en&tl=hy&hl=fa&u=https://irnst.ir&client=webapp", image: "hy-flag.svg", text: "Հայերեն" },
		{ id: 11, link: "https://translate.google.com/translate?sl=en&tl=id&hl=fa&u=https://irnst.ir&client=webapp", image: "id-flag.svg", text: "Bahasa" },
		{ id: 12, link: "https://translate.google.com/translate?sl=en&tl=ka&hl=fa&u=https://irnst.ir&client=webapp", image: "ka-flag.png", text: "ქართული" },
		{ id: 13, link: "https://translate.google.com/translate?sl=en&tl=km&hl=fa&u=https://irnst.ir&client=webapp", image: "km-flag.svg", text: "ភាសាខ្មែរ" },
		{ id: 14, link: "https://translate.google.com/translate?sl=en&tl=bn&hl=fa&u=https://irnst.ir&client=webapp", image: "bn-flag.svg", text: "বাংলা" },
		{ id: 15, link: "https://translate.google.com/translate?sl=en&tl=hi&hl=fa&u=https://irnst.ir&client=webapp", image: "hi-flag.svg", text: "हिन्दी" },

		{ label: true, text: "Europe" },
		{ id: 16, link: "https://translate.google.com/translate?sl=en&tl=es&hl=fa&u=https://irnst.ir&client=webapp", image: "es-flag.svg", text: "Español" },
		{ id: 17, link: "https://translate.google.com/translate?sl=en&tl=fr&hl=fa&u=https://irnst.ir&client=webapp", image: "fr-flag.svg", text: "Français" },
		{ id: 18, link: "https://translate.google.com/translate?sl=en&tl=de&hl=fa&u=https://irnst.ir&client=webapp", image: "gr-flag.svg", text: "Deutsch" },
		{ id: 19, link: "https://translate.google.com/translate?sl=en&tl=pt-PT&hl=fa&u=https://irnst.ir&client=webapp", image: "pr-flag.svg", text: "Português" },
		{ id: 20, link: "https://translate.google.com/translate?sl=en&tl=it&hl=fa&u=https://irnst.ir&client=webapp", image: "it-flag.svg", text: "Italiano" },
		{ id: 21, link: "https://translate.google.com/translate?sl=en&tl=cs&hl=fa&u=https://irnst.ir&client=webapp", image: "cs-flag.svg", text: "Čeština" },
		{ id: 22, link: "https://translate.google.com/translate?sl=en&tl=da&hl=fa&u=https://irnst.ir&client=webapp", image: "da-flag.svg", text: "Dansk" },
		{ id: 23, link: "https://translate.google.com/translate?sl=en&tl=no&hl=fa&u=https://irnst.ir&client=webapp", image: "nb-flag.svg", text: "Norsk" },
		{ id: 24, link: "https://translate.google.com/translate?sl=en&tl=ro&hl=fa&u=https://irnst.ir&client=webapp", image: "ro-flag.svg", text: "Română" },
		{ id: 25, link: "https://translate.google.com/translate?sl=en&tl=sr&hl=fa&u=https://irnst.ir&client=webapp", image: "sr-flag.svg", text: "Српски" },
		{ id: 26, link: "https://translate.google.com/translate?sl=en&tl=sv&hl=fa&u=https://irnst.ir&client=webapp", image: "sv-flag.svg", text: "Svenska" },
		{ id: 27, link: "https://translate.google.com/translate?sl=en&tl=el&hl=en&u=https://irnst.ir&client=webapp", image: "el-flag.svg", text: "Ελληνικά" },
		{ id: 28, link: "https://translate.google.com/translate?sl=en&tl=ru&hl=fa&u=https://irnst.ir&client=webapp", image: "rs-flag.svg", text: "Русский" },
		{ id: 29, link: "https://translate.google.com/translate?sl=en&tl=hr&hl=en&u=https://irnst.ir&client=webapp", image: "hr-flag.svg", text: "Hrvatski" },
		{ id: 30, link: "https://translate.google.com/translate?sl=en&tl=hu&hl=fa&u=https://irnst.ir&client=webapp", image: "hu-flag.svg", text: "Magyar" },
		{ id: 31, link: "https://translate.google.com/translate?sl=en&tl=bg&hl=fa&u=https://irnst.ir&client=webapp", image: "bg-flag.svg", text: "Български" },
		{ id: 32, link: "https://translate.google.com/translate?sl=en&tl=fi&hl=fa&u=https://irnst.ir&client=webapp", image: "fi-flag.svg", text: "Suomi" },

		{ label: true, text: "Africa" },
		{ id: 33, link: "https://translate.google.com/translate?sl=en&tl=af&hl=fa&u=https://irnst.ir&client=webapp", image: "za-flag.svg", text: "Afrikaans" },
		{ id: 34, link: "https://translate.google.com/translate?sl=en&tl=zu&hl=fa&u=https://irnst.ir&client=webapp", image: "za-flag.svg", text: "isiZulu" },
		{ id: 35, link: "https://translate.google.com/translate?sl=en&tl=xh&hl=fa&u=https://irnst.ir&client=webapp", image: "za-flag.svg", text: "isiXhosa" },
		{ id: 36, link: "https://translate.google.com/translate?sl=en&tl=sw&hl=fa&u=https://irnst.ir&client=webapp", image: "tz-flag.svg", text: "Kiswahili" },
		{ id: 37, link: "https://translate.google.com/translate?sl=en&tl=ha&hl=fa&u=https://irnst.ir&client=webapp", image: "ng-flag.svg", text: "Hausa" },
		{ id: 38, link: "https://translate.google.com/translate?sl=en&tl=yo&hl=fa&u=https://irnst.ir&client=webapp", image: "ng-flag.svg", text: "Yorùbá" },
		{ id: 39, link: "https://translate.google.com/translate?sl=en&tl=ig&hl=fa&u=https://irnst.ir&client=webapp", image: "ng-flag.svg", text: "Igbo" },
		{ id: 40, link: "https://irnst-ir.translate.goog/?_x_tr_sl=en&_x_tr_tl=rw&_x_tr_hl=fa&_x_tr_pto=wapp&_x_tr_hist=true", image: "rw-flag.svg", text: "Kinyarwanda" },
		{ id: 41, link: "https://translate.google.com/translate?sl=en&tl=ln&hl=fa&u=https://irnst.ir&client=webapp", image: "cd-flag.svg", text: "Lingála" },
		{ id: 42, link: "https://translate.google.com/translate?sl=en&tl=am&hl=fa&u=https://irnst.ir&client=webapp", image: "et-flag.svg", text: "አማርኛ" },
		{ id: 43, link: "https://translate.google.com/translate?sl=en&tl=sn&hl=fa&u=https://irnst.ir&client=webapp", image: "zw-flag.svg", text: "chiShona" },
		{ id: 44, link: "https://translate.google.com/translate?sl=en&tl=so&hl=fa&u=https://irnst.ir&client=webapp", image: "so-flag.svg", text: "Somali" },

		{ label: true, text: "America" },
		{ id: 45, link: "https://translate.google.com/translate?sl=en&tl=pt&hl=fa&u=https://irnst.ir&client=webapp", image: "br-flag.svg", text: "Português (Brasil)" },
	];

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="flex items-center gap-2 h-12">
					<img src={`/svg/${selectedLanguage[1]}`} alt="US Flag" width={24} height={24} className="rounded-full" style={{ aspectRatio: "24/24", objectFit: "cover" }} />
					<span className="font-medium">{selectedLanguage[0]}</span>
					<ChevronDownIcon />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="center" className="w-[200px] h-100">
				<DropdownMenuGroup>
					{languages.map((lan, index) =>
						lan.label ? (
							<div key={index}>
								<DropdownMenuLabel className="mt-2" key={index}>{lan.text}</DropdownMenuLabel>
								<DropdownMenuSeparator className="my-0" />
							</div>
						) : (
							<DropdownMenuItem key={index} className="p-1" onClick={() => setSelectedLanguage([lan.text, lan.image || ""])}>
								<a href={lan.link} className="flex items-center gap-2">
									<img src={`/svg/${lan.image}`} alt={lan.text} width={24} height={24} className="rounded-full" style={{ aspectRatio: "24/24", objectFit: "cover" }} />
									<span>{lan.text}</span>
								</a>
							</DropdownMenuItem>
						)
					)}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

function ChevronDownIcon() {
	return (
		<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="m6 9 6 6 6-6" />
		</svg>
	);
}
