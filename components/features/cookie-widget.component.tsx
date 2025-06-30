'use client'

import dynamic from 'next/dynamic'

const CookieBanner = dynamic(() => import('./cookie-banner.component'), {
  loading: () => null,
  ssr: false,
})

export const CookieWidget = () => {
  return <CookieBanner />
}
