import { ExternalLink } from "lucide-react"

interface DomainData {
  locale: string
  title: string
  description: string
  price: string
  currency: string
  contact: string
  content: string
}

interface DomainParkingProps {
  domain: string
  domainData: DomainData
  allDomains: string[]
}

// Language-specific content
const translations = {
  en: {
    premiumDomain: "Premium Domain",
    premiumDomainDesc: "Short, memorable, and brandable domain name",
    instantTransfer: "Instant Transfer",
    instantTransferDesc: "Quick and secure domain transfer process on name.com",
    seoReady: "SEO Ready",
    seoReadyDesc: "Perfect for building your brand online",
    otherDomainsTitle: "Other Premium Domains Available",
    forSale: "FOR SALE",
  },
  tr: {
    premiumDomain: "Premium Alan Adı",
    premiumDomainDesc: "Kısa, akılda kalıcı ve markalanabilir alan adı",
    instantTransfer: "Anında Transfer",
    instantTransferDesc: "name.com üzerinden hızlı ve güvenli alan adı transfer süreci",
    seoReady: "SEO Hazır",
    seoReadyDesc: "Markanızı çevrimiçi oluşturmak için mükemmel",
    otherDomainsTitle: "Diğer Premium Alan Adları Mevcut",
    forSale: "SATILIK",
  },
}

export default function DomainParking({ domain, domainData, allDomains }: DomainParkingProps) {
  const otherDomains = allDomains.filter((d) => d !== domain)
  const locale = domainData.locale || "en"
  const t = translations[locale as keyof typeof translations] || translations.en

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-gray-50 shadow-sm">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-900">{domain}</h2>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">{domain}</h2>

          <div className="inline-flex items-center bg-green-50 text-green-800 px-6 py-3 rounded-full text-xl font-semibold mb-8">
            <span className="text-2xl mr-2">{domainData.currency === "USD" ? "$" : "€"}</span>
            {domainData.price}
            <span className="ml-2 text-sm font-medium">{t.forSale}</span>
          </div>
        </div>

        {/* Description - Simple HTML rendering */}
        <article className="prose prose-lg prose-gray max-w-3xl mx-auto mb-12">
          <section dangerouslySetInnerHTML={{ __html: domainData.content }} />
        </article>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ExternalLink className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">{t.premiumDomain}</h4>
            <p className="text-gray-600 text-sm">{t.premiumDomainDesc}</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">{t.instantTransfer}</h4>
            <p className="text-gray-600 text-sm">{t.instantTransferDesc}</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">{t.seoReady}</h4>
            <p className="text-gray-600 text-sm">{t.seoReadyDesc}</p>
          </div>
        </div>
      </main>

      {/* Other Domains Footer */}
      {otherDomains.length > 0 && (
        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{t.otherDomainsTitle}</h3>
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
  )
}
