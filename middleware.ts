import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  // Get the hostname from the request
  const hostname = request.headers.get("host") || ""

  // Remove port if present (for local development)
  const domain = hostname.split(":")[0]

  // Add the domain to the request headers so we can access it in our components
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-domain", domain)

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
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
