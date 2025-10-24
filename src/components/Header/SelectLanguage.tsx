"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { link } from "fs"

const languages = [
  {
    value: "Spanish",
    label: "Spanish",
    link: "",
  },
  {
    value: "Arabic",
    label: "Arabic",
    link: ""
  },
  {
    value: "French",
    label: "French",
    link: ""
  },
  {
    value: "German",
    label: "German",
    link: ""
  },
  {
    value: "Portuguese",
    label: "Portuguese",
    link: ""
  },
  {
    value: "Russian",
    label: "Russian",
    link: ""
  },
  {
    value: "Chinese",
    label: "Chinese",
    link: ""
  },
  {
    value: "Japanese",
    label: "Japanese",
    link: ""
  },
  {
    value: "Turkish",
    label: "Turkish",
    link: ""
  },
  {
    value: "Persian",
    label: "Persian",
    link: ""
  },
  {
    value: "Hindi",
    label: "Hindi",
    link: ""
  },
  {
    value: "Indonesian",
    label: "Indonesian",
    link: ""
  },
  {
    value: "Dutch",
    label: "Dutch",
    link: ""
  },
  {
    value: "Thai",
    label: "Thai",
    link: ""
  },
  {
    value: "Vietnamese",
    label: "Vietnamese",
    link: ""
  },
  {
    value: "Polish",
    label: "Polish",
    link: ""
  },
  {
    value: "Ukrainian",
    label: "Ukrainian",
    link: ""
  }
]

export function SelectLanguage() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? languages.find((language) => language.value === value)?.label
            : "Select Language"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Language..." className="h-9" />
          <CommandList>
            <CommandEmpty>No Language found.</CommandEmpty>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language.value}
                  value={language.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {language.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === language.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
