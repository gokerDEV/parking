'use client'

import type { Dictionary } from '@/lib/dictionary-types'
import dynamic from 'next/dynamic'

const CookieBanner = dynamic(() => import('./cookie-banner.component'), {
  loading: () => null,
  ssr: false,
})

interface CookieWidgetProps {
  dict: Dictionary
  locale: string
}

export const CookieWidget = ({ dict, locale }: CookieWidgetProps) => {
  return <CookieBanner locale={locale} dict={dict} />
}
