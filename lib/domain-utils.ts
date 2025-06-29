import { promises as fs } from "fs"
import path from "path"

export interface DomainData {
  locale: string
  title: string
  description: string
  price: string
  currency: string
  contact: string
  content: string
}

// Simple markdown to HTML converter for basic formatting
function markdownToHtml(markdown: string): string {
  return (
    markdown
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mb-4 mt-8">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mb-6 mt-10">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-8 mt-12">$1</h1>')
      // Links - must come before bold/italic to avoid conflicts
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-800 underline">$1</a>')
      // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      // Lists
      .replace(/^- (.*$)/gim, '<li class="mb-2">$1</li>')
      .replace(/(<li.*<\/li>)/s, '<ul class="list-disc list-inside mb-6 space-y-2">$1</ul>')
      // Paragraphs
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/^(.*)$/gim, '<p class="mb-4">$1</p>')
      // Clean up empty paragraphs
      .replace(/<p class="mb-4"><\/p>/g, "")
      // Fix nested elements
      .replace(/<p class="mb-4">(<h[1-6])/g, "$1")
      .replace(/(<\/h[1-6]>)<\/p>/g, "$1")
      .replace(/<p class="mb-4">(<ul)/g, "$1")
      .replace(/(<\/ul>)<\/p>/g, "$1")
  )
}

export async function getDomainData(domain: string): Promise<DomainData> {
  try {
    const contentPath = path.join(process.cwd(), "content", `${domain}.mdx`)
    const fileContent = await fs.readFile(contentPath, "utf8")

    // Parse frontmatter and content
    const frontmatterRegex = /^---\s*\n(.*?)\n---\s*\n(.*)$/s
    const match = fileContent.match(frontmatterRegex)

    if (!match) {
      throw new Error("Invalid MDX format")
    }

    const frontmatter = match[1]
    const content = match[2]

    // Parse frontmatter
    const frontmatterData: Record<string, string> = {}
    frontmatter.split("\n").forEach((line) => {
      const [key, ...valueParts] = line.split(":")
      if (key && valueParts.length > 0) {
        const trimmedKey = key.trim()
        const trimmedValue = valueParts.join(":").trim().replace(/['"]/g, "")
        frontmatterData[trimmedKey] = trimmedValue
      }
    })

    return {
      locale: frontmatterData.locale || "en",
      title: frontmatterData.title || domain,
      description: frontmatterData.description || "",
      price: frontmatterData.price || "10,000",
      currency: frontmatterData.currency || "USD",
      contact: frontmatterData.contact || "hello@example.com",
      content: markdownToHtml(content.trim()),
    }
  } catch (error) {
    console.error(`Error loading domain data for ${domain}:`, error)
    throw new Error(`Domain data not found for ${domain}`)
  }
}

export async function getAllDomains(): Promise<string[]> {
  try {
    const contentDir = path.join(process.cwd(), "content")
    const files = await fs.readdir(contentDir)
    return files.filter((file) => file.endsWith(".mdx")).map((file) => file.replace(".mdx", ""))
  } catch (error) {
    console.error("Error reading content directory:", error)
    return []
  }
}
