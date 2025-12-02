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
      <DropdownMenuContent align="center" className="w-[200px] h-100">
        <DropdownMenuLabel>Select Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>

          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["English","en-flag"])}>
            <a href="/" className="flex items-center gap-2">
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
            <a href="https://irnst-ir.translate.goog/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=fa&_x_tr_pto=wapp&_x_tr_hist=true" className="flex items-center gap-2">
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
            <a href="https://irnst-ir.translate.goog/?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=fa&_x_tr_pto=wapp&_x_tr_hist=true" className="flex items-center gap-2">
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
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Suomi","fi-flag"])}>
            <a href="https://irnst-ir.translate.goog/?_x_tr_sl=en&_x_tr_tl=sv&_x_tr_hl=fa&_x_tr_pto=wapp&_x_tr_hist=true" className="flex items-center gap-2">
              <img
                src="/svg/fi-flag.svg"
                alt="Suomi Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Suomi</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Deutsch","gr-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=de&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
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
            <a href="https://translate.google.com/translate?sl=en&tl=pt-PT&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
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
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Português (Brasil)","br-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=pt&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/br-flag.svg"
                alt="Português (Brasil) Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Português (Brasil)</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Italiano","it-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=it&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
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
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Afrikaans","za-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=af&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/za-flag.svg"
                alt="Afrikaans Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Afrikaans</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["isiZulu","za-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=zu&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/za-flag.svg"
                alt="isiZulu Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>isiZulu</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["isiXhosa","za-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=xh&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/za-flag.svg"
                alt="isiXhosa Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>isiXhosa</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Kiswahili","tz-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=sw&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/tz-flag.svg"
                alt="Kiswahili Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Kiswahili</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Hausa","ng-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=ha&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/ng-flag.svg"
                alt="Hausa Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Hausa</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Yorùbá","ng-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=yo&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/ng-flag.svg"
                alt="Yorùbá Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Yorùbá</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Igbo","ng-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=ig&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/ng-flag.svg"
                alt="Igbo Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Igbo</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Kinyarwanda","rw-flag"])}>
            <a href="https://irnst-ir.translate.goog/?_x_tr_sl=en&_x_tr_tl=rw&_x_tr_hl=fa&_x_tr_pto=wapp&_x_tr_hist=true" className="flex items-center gap-2">
              <img
                src="/svg/rw-flag.svg"
                alt="Kinyarwanda Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Kinyarwanda</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Lingála","cd-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=ln&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/cd-flag.svg"
                alt="Lingála Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Lingála</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["አማርኛ","et-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=am&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/et-flag.svg"
                alt="አማርኛ Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>አማርኛ</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["chiShona","zw-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=sn&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/zw-flag.svg"
                alt="chiShona Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>chiShona</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Somali","so-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=so&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/so-flag.svg"
                alt="Somali Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Somali</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Čeština","cs-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=cs&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/cs-flag.svg"
                alt="Čeština Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Čeština</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Dansk","da-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=da&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/da-flag.svg"
                alt="Dansk Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Dansk</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Norsk","nb-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=no&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/nb-flag.svg"
                alt="Norsk Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Norsk</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Română","ro-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=ro&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/ro-flag.svg"
                alt="Română Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Română</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Српски","sr-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=sr&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/sr-flag.svg"
                alt="Српски Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Српски</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Svenska","sv-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=sv&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/sv-flag.svg"
                alt="Svenska Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Svenska</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Ελληνικά","el-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=el&hl=en&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/el-flag.svg"
                alt="Ελληνικά Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Ελληνικά</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Русский","rs-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=ru&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
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
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Hrvatski","hr-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=hr&hl=en&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/hr-flag.svg"
                alt="Hrvatski Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Hrvatski</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["中文（中国)","ch-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=zh-CN&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/ch-flag.svg"
                alt="中文（中国） Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>中文（中国）</span>
            </a>
          </DropdownMenuItem>    
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["中文（台灣）","ch-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=zh-TW&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/ch-flag.svg"
                alt="中文（台灣） Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>中文（台灣）</span>
            </a>
          </DropdownMenuItem>      
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["日本語","jp-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=ja&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
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
            <a href="https://translate.google.com/translate?sl=en&tl=ko&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
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
            <a href="https://translate.google.com/translate?sl=en&tl=ar&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
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
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["اُردو","pk-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=ur&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/pk-flag.svg"
                alt="اُردو Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>اُردو</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Türkçe","tr-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=tr&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
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
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Azərbaycan dili","az-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=az&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/az-flag.svg"
                alt="Azərbaycan dili Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Azərbaycan dili</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Magyar","hu-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=hu&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/hu-flag.svg"
                alt="Magyar Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Magyar</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Հայերեն","hy-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=hy&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/hy-flag.svg"
                alt="Հայերեն Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Հայերեն</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Bahasa","id-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=id&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/id-flag.svg"
                alt="Bahasa Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Bahasa</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["ქართული","ka-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=ka&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/ka-flag.png"
                alt="ქართული Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>ქართული</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["ភាសាខ្មែរ","km-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=km&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/km-flag.svg"
                alt="ភាសាខ្មែរ Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>ភាសាខ្មែរ</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["Български","bg-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=bg&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/bg-flag.svg"
                alt="Български Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>Български</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["বাংলা","bn-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=bn&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/bn-flag.svg"
                alt="বাংলা Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>বাংলা</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-1" onClick={() => setSelectedLanguage(["हिन्दी","hi-flag"])}>
            <a href="https://translate.google.com/translate?sl=en&tl=hi&hl=fa&u=https://irnst.ir&client=webapp" className="flex items-center gap-2">
              <img
                src="/svg/hi-flag.svg"
                alt="हिन्दी Flag"
                width={24}
                height={24}
                className="rounded-full"
                style={{ aspectRatio: "24/24", objectFit: "cover" }}
              />
              <span>हिन्दी</span>
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