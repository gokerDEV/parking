# Internationalization (i18n) System

This document describes the clean, centralized internationalization system implemented in this Next.js application.

## Overview

The application uses Next.js App Router's built-in internationalization features with a centralized dictionary system for clean, maintainable, and type-safe translations.

## Architecture

### Directory Structure

```
├── app/
│   ├── [lang]/           # Dynamic locale routing
│   │   ├── layout.tsx    # Locale-specific layout
│   │   └── page.tsx      # Main page with locale support
│   └── layout.tsx        # Root layout
├── dictionaries/         # Translation files
│   ├── en.json          # English translations
│   └── tr.json          # Turkish translations
├── lib/
│   ├── dictionaries.ts  # Dictionary utilities
│   └── dictionary-types.ts # TypeScript types
├── components/
│   ├── language-switcher.tsx # Language switcher component
│   └── domain-parking.tsx    # Main component using translations
└── middleware.ts        # Locale detection and routing
```

### Key Features

- **Type-safe translations** with TypeScript interfaces
- **Server-side rendering** for optimal SEO
- **Automatic locale detection** based on browser preferences
- **Clean URL structure** with locale prefixes (`/en/`, `/tr/`)
- **Language switcher** for user convenience
- **Centralized dictionary management**

## Implementation Details

### 1. Dictionary System

The dictionary system is centralized in JSON files with TypeScript interfaces for type safety:

```typescript
// lib/dictionary-types.ts
export interface Dictionary {
  common: {
    forSale: string
    contact: string
    // ... other common translations
  }
  domain: {
    premiumDomain: string
    premiumDomainDesc: string
    // ... domain-specific translations
  }
  // ... other sections
}
```

### 2. Dictionary Utilities

```typescript
// lib/dictionaries.ts
export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]?.() ?? dictionaries.en()
}

export const getSupportedLocales = (): Locale[] => {
  return ['en', 'tr']
}
```

### 3. Middleware for Locale Detection

The middleware automatically detects the user's preferred locale and redirects to the appropriate URL:

```typescript
// middleware.ts
function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
  
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  const locales = getSupportedLocales()
  const defaultLocale = getDefaultLocale()
  
  return match(languages, locales, defaultLocale)
}
```

### 4. Dynamic Routing

The `[lang]` route segment enables dynamic locale handling:

```typescript
// app/[lang]/page.tsx
interface PageProps {
  params: Promise<{ lang: Locale }>
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  // ... rest of the component
}
```

### 5. Language Switcher

A client-side component that allows users to switch between languages:

```typescript
// components/language-switcher.tsx
export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname()
  
  const getLocalizedPath = (locale: Locale) => {
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/'
    return `/${locale}${pathWithoutLocale}`
  }
  
  // ... render language options
}
```

## Usage

### Adding New Translations

1. **Update the TypeScript interface** in `lib/dictionary-types.ts`:
```typescript
export interface Dictionary {
  // ... existing sections
  newSection: {
    newKey: string
  }
}
```

2. **Add translations to JSON files**:
```json
// dictionaries/en.json
{
  "newSection": {
    "newKey": "English translation"
  }
}

// dictionaries/tr.json
{
  "newSection": {
    "newKey": "Turkish translation"
  }
}
```

3. **Use in components**:
```typescript
const dict = await getDictionary(locale)
return <div>{dict.newSection.newKey}</div>
```

### Adding New Locales

1. **Update supported locales** in `lib/dictionaries.ts`:
```typescript
export const getSupportedLocales = (): Locale[] => {
  return ['en', 'tr', 'de'] // Add new locale
}
```

2. **Create new dictionary file** `dictionaries/de.json`

3. **Update TypeScript types**:
```typescript
export type Locale = 'en' | 'tr' | 'de'
```

4. **Update static params** in layout and page components:
```typescript
export async function generateStaticParams() {
  return [
    { lang: 'en' as const },
    { lang: 'tr' as const },
    { lang: 'de' as const }, // Add new locale
  ]
}
```

## SEO Benefits

- **Proper `lang` attributes** on HTML elements
- **Alternate language links** in metadata
- **Locale-specific URLs** for better indexing
- **Server-side rendering** for optimal performance

## Best Practices

1. **Always use TypeScript interfaces** for type safety
2. **Keep translations organized** by feature/section
3. **Use semantic keys** that describe the content
4. **Test all locales** during development
5. **Consider pluralization** for complex translations
6. **Use interpolation** for dynamic content when needed

## Dependencies

- `@formatjs/intl-localematcher` - Locale matching
- `negotiator` - HTTP Accept-Language parsing
- `@types/negotiator` - TypeScript definitions

## Migration from Old System

The old system used hardcoded translations in components. The new system:

1. ✅ **Removes hardcoded translations** from components
2. ✅ **Centralizes all translations** in JSON files
3. ✅ **Adds type safety** with TypeScript interfaces
4. ✅ **Implements proper routing** with locale prefixes
5. ✅ **Improves SEO** with proper metadata
6. ✅ **Enhances UX** with language switcher

This creates a clean, maintainable, and scalable internationalization system that follows Next.js best practices. 