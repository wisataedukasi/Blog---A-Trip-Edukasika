import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-context"
import { cn } from "@/lib/utils" // Import cn utility

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" }) // Define Inter as a CSS variable

export const metadata: Metadata = {
  title: "Wisata Edukasi Gerabah Kasongan – A Trip Edukasika",
  description:
    "Nikmati pengalaman membuat gerabah langsung di Kasongan, Bantul. Edukasi kreatif untuk anak, sekolah, dan keluarga bersama pengrajin lokal.",
  keywords: [
    "wisata edukasi",
    "gerabah",
    "kasongan",
    "wisata anak",
    "pelatihan gerabah",
    "sekolah",
    "outbound anak",
    "wisata jogja",
    "edukasi seni",
    "keluarga",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "A Trip Edukasika – Wisata Edukasi Gerabah Kasongan" }],
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#f5a623",
  appleWebApp: {
    capable: true,
  },
  icons: {
    icon: "/favicon.png",
  },
  other: {
    google: "nositelinkssearchbox, notranslate",
  },
  verification: {
    google: "b00zn6M_w5XN4JRWV-DVIYfwm1cUKJ_8seN-Iy_XsSg",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={cn("min-h-screen bg-background font-inter antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
