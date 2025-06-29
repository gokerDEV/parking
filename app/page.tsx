import { headers } from "next/headers"
import DomainParking from "@/components/domain-parking"
import { getDomainData, getAllDomains } from "@/lib/domain-utils"

export const runtime = "edge"

export default async function HomePage() {
  const headersList = await headers()
  const domain = headersList.get("x-domain") || "localhost"

  try {
    const domainData = await getDomainData(domain)
    const allDomains = await getAllDomains()

    return <DomainParking domain={domain} domainData={domainData} allDomains={allDomains} />
  } catch (error) {
    // Fallback content when domain data is not found
    const fallbackData = {
      title: domain,
      price: "10,000",
      currency: "USD",
      contact: "hello@example.com",
      content: `<h2 class="text-2xl font-bold mb-6 mt-10">Premium Domain Available</h2>
                <p class="mb-4">This premium domain <strong class="font-semibold">${domain}</strong> is available for purchase.</p>
                <p class="mb-4">Perfect for building your next big project or establishing your brand online.</p>
                <h3 class="text-xl font-bold mb-4 mt-8">Why Choose This Domain?</h3>
                <ul class="list-disc list-inside mb-6 space-y-2">
                  <li class="mb-2">Memorable and brandable</li>
                  <li class="mb-2">SEO friendly</li>
                  <li class="mb-2">Professional appearance</li>
                  <li class="mb-2">Instant credibility</li>
                </ul>`,
    }

    return <DomainParking domain={domain} domainData={fallbackData} allDomains={[]} />
  }
}

export async function generateMetadata() {
  const headersList = await headers()
  const domain = headersList.get("x-domain") || "localhost"

  try {
    const domainData = await getDomainData(domain)
    return {
      title: `${domainData.title} - Premium Domain for Sale`,
      description: `${domainData.title} is available for purchase. ${domainData.price} ${domainData.currency}. Contact us for more information.`,
    }
  } catch (error) {
    return {
      title: `${domain} - Premium Domain for Sale`,
      description: `${domain} is available for purchase. Contact us for more information.`,
    }
  }
}
