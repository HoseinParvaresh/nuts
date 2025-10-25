"use client"

import { useState } from "react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function SelectLanguage() {
  const [selectedLanguage, setSelectedLanguage] = useState("English")
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <img
            src="/placeholder.svg"
            alt="US Flag"
            width={24}
            height={24}
            className="rounded-full"
            style={{ aspectRatio: "24/24", objectFit: "cover" }}
          />
          <span className="font-medium">{selectedLanguage}</span>
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuLabel>Select Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => setSelectedLanguage("English")}>
            <div className="flex items-center gap-2">
              <img
                src="/placeholder.svg"
                alt="US Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>English</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedLanguage("Espa\u00F1ol")}>
            <div className="flex items-center gap-2">
              <img
                src="/placeholder.svg"
                alt="Spanish Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Español</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedLanguage("Fran\u00E7ais")}>
            <div className="flex items-center gap-2">
              <img
                src="/placeholder.svg"
                alt="French Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Français</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedLanguage("Deutsch")}>
            <div className="flex items-center gap-2">
              <img
                src="/placeholder.svg"
                alt="German Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Deutsch</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedLanguage("\u4E2D\u6587")}>
            <div className="flex items-center gap-2">
              <img
                src="/placeholder.svg"
                alt="Chinese Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>中文</span>
            </div>
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