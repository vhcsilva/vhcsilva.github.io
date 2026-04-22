export type Locale = 'en' | 'pt'

export const LOCALE_STORAGE_KEY = 'vhcsilva.locale'

export const CV_PATHS: Record<Locale, string> = {
  en: '/cv/vitor-hugo-cv-en.pdf',
  pt: '/cv/vitor-hugo-cv-pt.pdf'
}

export const CV_DOWNLOAD_FILENAME: Record<Locale, string> = {
  en: 'vitor-hugo-cv-en.pdf',
  pt: 'vitor-hugo-cv-pt-br.pdf'
}

export type Localized = { en: string; pt: string }

export function pick<T extends Localized>(value: T, locale: Locale): string {
  return locale === 'pt' ? value.pt : value.en
}

function normalizeLocale(raw: string | null | undefined): Locale | null {
  if (!raw) return null
  const [base] = raw.trim().toLowerCase().split('-')
  return base === 'pt' || base === 'en' ? base : null
}

function readQueryLocale(): Locale | null {
  try {
    return normalizeLocale(new URLSearchParams(window.location.search).get('locale'))
  } catch {
    return null
  }
}

function readBrowserLocale(): Locale | null {
  const candidates = [...(navigator.languages ?? []), navigator.language]
  for (const candidate of candidates) {
    const locale = normalizeLocale(candidate)
    if (locale) return locale
  }
  return null
}

export function readStoredLocale(): Locale | null {
  try {
    const raw = localStorage.getItem(LOCALE_STORAGE_KEY)
    return normalizeLocale(raw)
  } catch {
    return null
  }
}

export function readInitialLocale(): Locale {
  return readQueryLocale() ?? readBrowserLocale() ?? 'en'
}
