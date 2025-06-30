'use client'

import { Button } from '@/components/ui/button'
import { storageLocal } from '@/lib/storage.utils'
import { HotJar } from '@/lib/third-parties/hotjar'
import { GoogleAnalytics } from '@next/third-parties/google'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

export default function CookieBanner({ nonce }: { nonce?: string }) {
  const [show, setShow] = useState(false)
  const handleAccept = () => {
    storageLocal.setItem('cookies', 'true')
    setShow(false)
  }
  const handleReject = () => {
    storageLocal.setItem('cookies', 'false')
    setShow(false)
  }
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
  return show ? (
    <div className="fixed right-0 bottom-0 z-50 flex w-full items-end lg:w-1/2">
      <div
        className="bg-foreground/90 dark:bg-foreground/80 text-background w-full backdrop-blur-sm"
        role="region"
        aria-label="Cookie banner"
      >
        <div
          role="alertdialog"
          aria-describedby="policy-text"
          aria-modal="true"
          aria-label="Cookies and use of our website"
          className="flex items-center justify-center shadow-sm"
        >
          <div className="p-4 md:p-6 xl:container">
            <div className="flex flex-col items-stretch sm:flex-row">
              <div className="grow text-sm">
                <h2 className="mb-2 text-lg font-semibold">
                  Cookies and use of our website
                </h2>
                <div className="text-background/80">
                  Our site uses cookies and similar technologies from us and
                  third parties (like Google Analytics, Hotjar) to analyze
                  traffic and understand how you use our site, helping us
                  improve your experience. See our{' '}
                  <Link
                    href="/cookies"
                    aria-label="More information about our cookie policy"
                    className="font-semibold underline underline-offset-2"
                  >
                    Cookie policy
                  </Link>{' '}
                  for details. Your information is handled according to our{' '}
                  <Link
                    href="/privacy"
                    aria-label="More information about your privacy"
                    className="font-semibold underline underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                  . <br />
                  Do you accept these analytics technologies?
                </div>
              </div>
              <div className="flex items-center justify-end gap-4 p-4 sm:pr-0 sm:pl-4">
                <Button
                  id="cookie-reject"
                  onClick={handleReject}
                  variant="destructive"
                >
                  Reject
                </Button>
                <Button
                  id="cookie-accept"
                  onClick={handleAccept}
                  variant="secondary"
                >
                  Accept
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
