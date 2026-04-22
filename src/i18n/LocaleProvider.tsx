import { useCallback, useLayoutEffect, useMemo, useState, type ReactNode } from 'react'

import {
  CV_DOWNLOAD_FILENAME,
  CV_PATHS,
  LOCALE_STORAGE_KEY,
  readInitialLocale,
  type Locale
} from '@/i18n/locale'
import { LocaleContext } from '@/i18n/localeContext'
import { translate } from '@/i18n/messages'
import type { MessageKey } from '@/i18n/messages'

function syncDocumentHtml(locale: Locale) {
  const html = document.documentElement
  html.dataset.lang = locale
  html.lang = locale === 'pt' ? 'pt-BR' : 'en'
}

function syncLocaleQueryParam(locale: Locale) {
  const url = new URL(window.location.href)
  url.searchParams.set('locale', locale)
  window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`)
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() =>
    typeof window === 'undefined' ? 'en' : readInitialLocale()
  )

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
    try {
      syncLocaleQueryParam(next)
    } catch {
      /* ignore */
    }
    syncDocumentHtml(next)
  }, [])

  useLayoutEffect(() => {
    syncDocumentHtml(locale)
  }, [locale])

  const value = useMemo(() => {
    const t = (key: MessageKey, vars?: Record<string, string | number>) => translate(locale, key, vars)
    return {
      locale,
      setLocale,
      t,
      cvHref: CV_PATHS[locale],
      cvDownloadName: CV_DOWNLOAD_FILENAME[locale]
    }
  }, [locale, setLocale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
