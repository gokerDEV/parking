import 'server-only'
type Dictionary = Record<string, Record<string, string>>

export type Locale = 'en' | 'tr'

const dictionaries = {
    en: () => import('../dictionaries/en.json').then((module) => module.default as Dictionary),
    tr: () => import('../dictionaries/tr.json').then((module) => module.default as Dictionary),
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
    return dictionaries[locale]?.() ?? dictionaries.en()
}

export const getSupportedLocales = (): Locale[] => {
    return ['en', 'tr']
}

export const isSupportedLocale = (locale: string): locale is Locale => {
    return getSupportedLocales().includes(locale as Locale)
}

export const getDefaultLocale = (): Locale => {
    return 'en'
} 