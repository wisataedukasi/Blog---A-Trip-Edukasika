import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

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
      noimageindex: false, // Default, can be changed if needed
      "max-video-preview": -1, // Default, can be changed if needed
      "max-image-preview": "large", // Default, can be changed if needed
      "max-snippet": -1, // Default, can be changed if needed
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
