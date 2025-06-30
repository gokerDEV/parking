'use client'

import { Button } from '@/components/ui/button'
import type { Dictionary } from '@/lib/dictionary-types'
import { storageLocal } from '@/lib/storage.utils'
import { HotJar } from '@/lib/third-parties/hotjar'
import { GoogleAnalytics } from '@next/third-parties/google'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

interface CookieBannerProps {
  nonce?: string
  locale: string
  dict: Dictionary
}

export default function CookieBanner({ nonce, locale, dict }: CookieBannerProps) {
  const [show, setShow] = useState(false)

  const handleAccept = useCallback(() => {
    storageLocal.setItem('cookies', 'true')
    setShow(false)
  }, [])

  const handleReject = useCallback(() => {
    storageLocal.setItem('cookies', 'false')
    setShow(false)
  }, [])

  const handleOpen = useCallback(() => {
    const showBanner = () => {
      setShow(true)
      clearTimeout(timeoutId)
      window.removeEventListener('mousemove', showBanner)
      window.removeEventListener('touchstart', showBanner)
    }
    const timeoutId = setTimeout(() => {
      window.addEventListener('mousemove', showBanner)
      window.addEventListener('touchstart', showBanner)
    }, 1000)
  }, [])

  useEffect(() => {
    if (!Boolean(storageLocal.getItem('cookies'))) {
      handleOpen()
    }
  }, [handleOpen])

  // Only show banner if dictionary is available
  if (!dict?.cookieBanner) {
    return null
  }

  const t = dict.cookieBanner

  return show ? (
    <div className="fixed right-0 bottom-0 z-50 flex w-full items-end lg:w-1/2">
      <div
        className="bg-foreground/90 dark:bg-foreground/80 text-background w-full backdrop-blur-sm"
        role="region"
        aria-label={t.cookieBannerAria}
      >
        <div
          role="alertdialog"
          aria-describedby="policy-text"
          aria-modal="true"
          aria-label={t.cookiesUseAria}
          className="flex items-center justify-center shadow-sm"
        >
          <div className="p-4 md:p-6 xl:container">
            <div className="flex flex-col items-stretch sm:flex-row">
              <div className="grow text-sm">
                <h2 className="mb-2 text-lg font-semibold">
                  {t.title}
                </h2>
                <div className="text-background/80">
                  {t.description}{' '}
                  <Link
                    href={`/${locale}/cookies`}
                    aria-label={t.cookiePolicyAria}
                    className="font-semibold underline underline-offset-2"
                  >
                    {t.cookiePolicy}
                  </Link>{' '}
                  {t.forDetails}{' '}
                  <Link
                    href={`/${locale}/privacy`}
                    aria-label={t.privacyPolicyAria}
                    className="font-semibold underline underline-offset-2"
                  >
                    {t.privacyPolicy}
                  </Link>
                  . <br />
                  {t.question}
                </div>
              </div>
              <div className="flex items-center justify-end gap-4 p-4 sm:pr-0 sm:pl-4">
                <Button
                  id="cookie-reject"
                  onClick={handleReject}
                  variant="destructive"
                >
                  {t.reject}
                </Button>
                <Button
                  id="cookie-accept"
                  onClick={handleAccept}
                  variant="secondary"
                >
                  {t.accept}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : Boolean(storageLocal.getItem('cookies')) ? (
    <>
      <HotJar hjid={process.env.NEXT_PUBLIC_HOTJAR_ID} nonce={nonce} />
      {process.env.NODE_ENV === 'production' &&
        process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics
            gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
            nonce={nonce}
          />
        )}
    </>
  ) : null
}
