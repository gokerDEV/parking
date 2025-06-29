import DomainParking from "@/components/domain-parking"
import LocaleProvider from "@/components/locale-provider"
import { getAllDomains, getDomainData } from "@/lib/domain-utils"
import { Metadata } from "next"
import { headers } from "next/headers"

export const runtime = "nodejs"

export default async function HomePage() {
  const headersList = await headers()
  const domain = (headersList.get("x-domain")) === "localhost" ? "kirkpinar.org" : headersList.get("x-domain") || "localhost"

  try {
    const domainData = await getDomainData(domain)
    const allDomains = await getAllDomains()

    return (
      <LocaleProvider locale={domainData.locale}>
        <DomainParking domain={domain} domainData={domainData} allDomains={allDomains} />
      </LocaleProvider>
    )
  } catch (error) {
    const domainData = await getDomainData("kirkpinar.org")
    const allDomains = await getAllDomains()

    return (
      <LocaleProvider locale={domainData.locale}>
        <DomainParking domain={domain} domainData={domainData} allDomains={allDomains} />
      </LocaleProvider>
    )
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const domain = (headersList.get("x-domain")) === "localhost" ? "kirkpinar.org" : headersList.get("x-domain") || "localhost"

  try {
    const data = await getDomainData(domain)

    return {
      title: data.title,
      description: data.description,
      openGraph: {
        title: data.title,
        description: data.description,
        type: 'website',
        locale: data.locale,
        alternateLocale: data.locale === 'tr' ? 'en' : 'tr',
      },
      twitter: {
        card: 'summary_large_image',
        title: data.title,
        description: data.description,
      },
      alternates: {
        canonical: `https://${domain}`,
      },
    }
  } catch (error) {
    return {
      title: `${domain} - Premium Domain for Sale`,
      description: `${domain} is available for purchase. Contact us for more information.`,
      openGraph: {
        title: `${domain} - Premium Domain for Sale`,
        description: `${domain} is available for purchase. Contact us for more information.`,
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${domain} - Premium Domain for Sale`,
        description: `${domain} is available for purchase. Contact us for more information.`,
      },
      alternates: {
        canonical: `https://${domain}`,
      },
    }
  }
}
