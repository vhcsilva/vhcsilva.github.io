import { createContext } from 'react'

import type { Locale } from '@/i18n/locale'
import type { MessageKey } from '@/i18n/messages'

export type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: MessageKey, vars?: Record<string, string | number>) => string
  cvHref: string
  cvDownloadName: string
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)
