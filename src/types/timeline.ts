import type { Localized } from '@/i18n/locale'

export type TimelineEntryType = 'job' | 'education'

export type TimelineEntry = {
  id: string
  role: Localized
  company: string
  companyUrl: string
  location: Localized
  start: string
  /** Use literal `now` for current role; UI maps to `t('xp.now')` */
  end: string
  type: TimelineEntryType
  /** Short comma-separated stack line for tags (often same in both locales) */
  techs: string
  /** One or two sentences; may include <b>…</b> */
  summaryHtml: Localized
}
