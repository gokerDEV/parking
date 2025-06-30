import Version from "@/components/common/version"
import { CookieWidget } from '@/components/features/cookie-widget.component'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Domain Parking",
  description: "Premium domains for sale",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Version />
        <CookieWidget />
        <Analytics />
      </body>
    </html>
  )
}
