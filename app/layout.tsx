import Version from "@/components/common/version"
import { CookieWidget } from '@/components/features/cookie-widget.component'
import { getDictionary, Locale } from '@/lib/dictionaries'
import { getAllDomains } from "@/lib/domain-utils"
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { headers } from 'next/headers'
import Link from "next/link"
import type React from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Domain Parking",
  description: "Premium domains for sale",
  generator: 'v0.dev'
}

// Dynamic constants for static pages
export async function getConstants() {
  const headersList = await headers()
  const domain = (headersList.get("x-domain")) === "localhost"
    ? "kirkpinar.org"
    : headersList.get("x-domain") || "localhost"

  const { getDomainData } = await import('@/lib/domain-utils')
  const domainData = await getDomainData(domain)

  return {
    CONTACT_EMAIL: domainData.contact,
    DOMAIN: domain,
    SITE_NAME: domain
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Domain'den locale bulmak için headers kullan
  const headersList = await headers()
  const domain = (headersList.get("x-domain")) === "localhost"
    ? "kirkpinar.org"
    : headersList.get("x-domain") || "localhost"

  // Burada domain'e göre locale bulmak için bir yardımcı fonksiyon kullanabilirsin
  // Örneğin getDomainData(domain) ile locale alabilirsin:
  // (Aynı kod page.tsx'de de var)
  const { getDomainData } = await import('@/lib/domain-utils')
  const domainData = await getDomainData(domain)
  const locale = domainData.locale || 'en'
  const dict = await getDictionary(locale as Locale)

  const allDomains = await getAllDomains()
  const otherDomains = allDomains.filter((d) => d !== domain)



  return (
    <html lang={locale}>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6920776915496505" crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {/* Header */}
          <header className="border-b border-gray-100 bg-gray-50 shadow-sm">
            <div className="px-6 py-4">
              <h2 className="text-2xl font-bold text-gray-900"><Link href="/">{domain}</Link></h2>
            </div>
          </header>
          {children}
          {/* Other Domains Footer */}
          {otherDomains.length > 0 && (
            <footer className="bg-gray-50 border-t border-gray-200">
              <div className="max-w-4xl mx-auto px-4 py-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{dict.domain.otherDomainsTitle}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {otherDomains.slice(0, 8).map((otherDomain) => (
                    <a
                      key={otherDomain}
                      href={`https://${otherDomain}`}
                      className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all text-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="font-medium text-gray-900 text-sm">{otherDomain}</span>
                    </a>
                  ))}
                </div>
              </div>
            </footer>
          )}
        </div>
        <Version />
        <CookieWidget dict={dict} locale={locale} />
        <Analytics />
      </body>
    </html>
  )
}
