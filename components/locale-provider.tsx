"use client"

import { useEffect } from "react"

interface LocaleProviderProps {
    locale: string
    children: React.ReactNode
}

export default function LocaleProvider({ locale, children }: LocaleProviderProps) {
    useEffect(() => {
        document.documentElement.lang = locale
    }, [locale])

    return <>{children}</>
} 