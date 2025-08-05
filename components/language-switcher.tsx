"use client"

import { useLanguage } from "./language-context"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <Select value={lang} onValueChange={setLang}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="id">🇮🇩 Bahasa</SelectItem>
        <SelectItem value="en">🇬🇧 English</SelectItem>
      </SelectContent>
    </Select>
  )
}
