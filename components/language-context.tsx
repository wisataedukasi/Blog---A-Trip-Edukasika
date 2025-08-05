"use client"

import type React from "react"
import { createContext, useState, useEffect, useContext, useCallback } from "react"

interface Translations {
  [key: string]: string
}

interface LanguageContextType {
  lang: string
  translations: Translations
  setLang: (newLang: string) => void
  t: (key: string) => string
  isLoading: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<string>("id")
  const [translations, setTranslations] = useState<Translations>({})
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchTranslations = useCallback(async (selectedLang: string) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/lang/${selectedLang}.json`)
      if (!response.ok) {
        throw new Error(`Failed to load translations for ${selectedLang}`)
      }
      const data: Translations = await response.json()
      setTranslations(data)
      if (data.title) {
        document.title = data.title
      }
    } catch (error) {
      console.error("Error fetching translations:", error)
      setTranslations({})
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    const storedLang = localStorage.getItem("lang")
    const initialLang = storedLang || "id"
    setLangState(initialLang)
    fetchTranslations(initialLang)
  }, [fetchTranslations])

  // Effect to update the html lang attribute
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback(
    (newLang: string) => {
      localStorage.setItem("lang", newLang)
      setLangState(newLang)
      fetchTranslations(newLang)
    },
    [fetchTranslations],
  )

  const t = useCallback(
    (key: string) => {
      return translations[key] || key
    },
    [translations],
  )

  return (
    <LanguageContext.Provider value={{ lang, translations, setLang, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
