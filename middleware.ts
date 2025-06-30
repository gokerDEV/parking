import { getDefaultLocale, getSupportedLocales, type Locale } from '@/lib/dictionaries'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { type NextRequest, NextResponse } from "next/server"

function getLocale(request: NextRequest): string {
  // Get the preferred locale from the request headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  const locales = getSupportedLocales()
  const defaultLocale = getDefaultLocale()

  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  // Get the hostname from the request
  const hostname = request.headers.get("host") || ""
  const domain = hostname.split(":")[0]

  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = getSupportedLocales().some(
    (locale: Locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // If the pathname already has a locale, just add the domain header
  if (pathnameHasLocale) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("x-domain", domain)

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }

  // For root path, don't redirect, just add domain header
  if (pathname === '/') {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("x-domain", domain)

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }

  // For other paths without locale, redirect to locale-specific path
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-domain", domain)

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
