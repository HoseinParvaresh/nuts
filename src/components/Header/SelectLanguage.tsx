"use client"

import { useState } from "react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function SelectLanguage() {
  const [selectedLanguage, setSelectedLanguage] = useState(["English","en-flag"])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 h-12">
          <img
            src={`/svg/${selectedLanguage[1]}.svg`}
            alt="US Flag"
            width={24}
            height={24}
            className="rounded-full"
            style={{ aspectRatio: "24/24", objectFit: "cover" }}
          />
          <span className="font-medium">{selectedLanguage[0]}</span>
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuLabel>Select Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>

          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["English","en-flag"])}>
            <a href="#" className="flex items-center gap-2">
              <img
                src="/svg/en-flag.svg"
                alt="US Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>English</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Español","es-flag"])}>
            <a href="#" className="flex items-center gap-2">
              <img
                src="/svg/es-flag.svg"
                alt="Spanish Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Español</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Français","fr-flag"])}>
            <a href="#" className="flex items-center gap-2">
              <img
                src="/svg/fr-flag.svg"
                alt="French Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Français</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Deutsch","gr-flag"])}>
            <a href="#" className="flex items-center gap-2">
              <img
                src="/svg/gr-flag.svg"
                alt="German Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Deutsch</span>
            </a>
          </DropdownMenuItem>     
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Português","pr-flag"])}>
            <a href="#" className="flex items-center gap-2">
              <img
                src="/svg/pr-flag.svg"
                alt="Português Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Português</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Italiano","it-flag"])}>
            <a href="#" className="flex items-center gap-2">
              <img
                src="/svg/it-flag.svg"
                alt="Italiano Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Italiano</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Русский","rs-flag"])}>
            <a href="#" className="flex items-center gap-2">
              <img
                src="/svg/rs-flag.svg"
                alt="Russia Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Русский</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Українська","uk-flag"])}>
            <a href="#" className="flex items-center gap-2">
              <img
                src="/svg/ua-flag.svg"
                alt="ua Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Українська</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Українська","uk-flag"])}>
            <a href="#" className="flex items-center gap-2">
              <img
                src="/svg/🇺🇦-flag.svg"
                alt="🇺🇦 Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Українська</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["中文","ch-flag"])}>
            <a href="#" className="flex items-center gap-2">
              <img
                src="/svg/ch-flag.svg"
                alt="china Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>中文</span>
            </a>
          </DropdownMenuItem>         
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["日本語","jp-flag"])}>
            <a href="#" className="flex items-center gap-2">
              <img
                src="/svg/jp-flag.svg"
                alt="japan Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>日本語</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["한국어","sk-flag"])}>
            <a href="#" className="flex items-center gap-2">
              <img
                src="/svg/sk-flag.svg"
                alt="South Korea Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>한국어</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["العربية","ar-flag"])}>
            <a href="#" className="flex items-center gap-2">
              <img
                src="/svg/ar-flag.svg"
                alt="arbia Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>العربية</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Türkçe","tr-flag"])}>
            <a href="#" className="flex items-center gap-2">
              <img
                src="/svg/tr-flag.svg"
                alt="Türkçe Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Türkçe</span>
            </a>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function ChevronDownIcon() {
  return (
    <svg
      className="h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}