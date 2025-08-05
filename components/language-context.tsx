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
  isLoading: boolean // Added isLoading to context type
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<string>("id")
  const [translations, setTranslations] = useState<Translations>({})
  const [isLoading, setIsLoading] = useState<boolean>(true) // New loading state

  const fetchTranslations = useCallback(async (selectedLang: string) => {
    setIsLoading(true) // Set loading to true before fetching
    try {
      const response = await fetch(`/lang/${selectedLang}.json`)
      if (!response.ok) {
        throw new Error(`Failed to load translations for ${selectedLang}`)
      }
      const data: Translations = await response.json()
      setTranslations(data)
      // Update document title if 'title' key exists
      if (data.title) {
        document.title = data.title
      }
    } catch (error) {
      console.error("Error fetching translations:", error)
      // Fallback to default language or show an error message
      setTranslations({}) // Clear translations on error
    } finally {
      setIsLoading(false) // Set loading to false after fetching (success or error)
    }
  }, [])

  useEffect(() => {
    const storedLang = localStorage.getItem("lang")
    const initialLang = storedLang || "id"
    setLangState(initialLang)
    fetchTranslations(initialLang)
  }, [fetchTranslations])

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
      return translations[key] || key // Return key if translation not found
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
