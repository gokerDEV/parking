
import { Dictionary } from "@/lib/dictionary-types"
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
  dict: Dictionary
}

export default function DomainParking({ domain, domainData, dict }: DomainParkingProps) {

  return (
    <>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">{domain}</h2>

          <div className="inline-flex items-center bg-green-50 text-green-800 px-6 py-3 rounded-full text-xl font-semibold mb-8">
            <span className="text-2xl mr-2">{domainData.currency === "USD" ? "$" : "€"}</span>
            {domainData.price}
            <span className="ml-2 text-sm font-medium">{dict.common.forSale}</span>
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
            <h4 className="font-semibold text-gray-900 mb-2">{dict.domain.premiumDomain}</h4>
            <p className="text-gray-600 text-sm">{dict.domain.premiumDomainDesc}</p>
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
            <h4 className="font-semibold text-gray-900 mb-2">{dict.domain.instantTransfer}</h4>
            <p className="text-gray-600 text-sm">{dict.domain.instantTransferDesc}</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">{dict.domain.seoReady}</h4>
            <p className="text-gray-600 text-sm">{dict.domain.seoReadyDesc}</p>
          </div>
        </div>
      </main>


    </>
  )
}
