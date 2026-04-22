import type { Localized } from '@/i18n/locale'
import type { Technology } from '@/types/technologies'

export type Project = {
  name: string
  shortDescription: Localized
  longDescription: Localized
  repository?: string
  appUrl?: string
  figmaUrl?: string
  techs: Technology[]
  preview: string
}
