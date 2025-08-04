import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "A Trip Edukasika – Wisata Edukasi Keluarga di Desa Wisata Gerabah Kasongan Jogja",
  description:
    "A Trip Edukasika - Wisata Edukasi menyediakan pengalaman belajar sambil bermain di Yogyakarta. Cocok untuk anak, sekolah, dan keluarga.",
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
