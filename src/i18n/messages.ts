import type { Locale } from '@/i18n/locale'

/** Flat dot-keys, template-style */
export type MessageKey = keyof typeof messagesEn

const messagesEn = {
  'nav.intro': 'intro',
  'nav.experience': 'experience',
  'nav.stack': 'stack',
  'nav.work': 'work',
  'nav.contact': 'contact',

  'location.line': 'Brazil · GMT-3',
  'hero.term.tab1': 'zsh — whoami',
  'hero.term.tab2': '~/projects',
  'hero.term.tab3': '~/now',
  'hero.term.path': '— 98×32',
  'hero.term.cmd': 'whoami',
  'hero.term.flag': '--verbose',
  'hero.term.output': '[ok] profile loaded ·',
  'hero.term.outputHl': '~/.vitor/profile',

  'section.stack.label': './stack.json',
  'section.work.label': './work',
  'section.contact.label': './contact',

  'experience.label': './experience',
  'experience.meta': '{positions} positions · {years} years',
  'stack.meta': 'tools I reach for',
  'work.meta': '{count} selected builds',
  'contact.meta': 'links & presence',

  'xp.now': 'now',

  'work.yearLabel': 'product',
  'work.status': 'shipped',
  'work.roleSuffix': 'selected build',
  'work.readMore': 'read more →',
  'work.previewLabel': 'preview',
  'modal.repo': 'repository →',
  'modal.site': 'live site →',
  'modal.figma': 'figma →',

  'ch.github': 'github',
  'ch.linkedin': 'linkedin',
  'ch.email': 'email',
  'ch.cv': 'cv',
  'ch.cv.val': 'PDF · 2 pages',

  'f.copy': '© {year} vitor hugo ·',
  'f.inspired': 'layout inspired by Dawid Kin',
  'f.built': 'react + vite'
} as const

const messagesPt = {
  'nav.intro': 'início',
  'nav.experience': 'experiência',
  'nav.stack': 'stack',
  'nav.work': 'projetos',
  'nav.contact': 'contato',

  'location.line': 'Brasil · GMT-3',
  'hero.term.tab1': 'zsh — whoami',
  'hero.term.tab2': '~/projetos',
  'hero.term.tab3': '~/agora',
  'hero.term.path': '— 98×32',
  'hero.term.cmd': 'whoami',
  'hero.term.flag': '--verbose',
  'hero.term.output': '[ok] perfil carregado ·',
  'hero.term.outputHl': '~/.vitor/profile',

  'section.stack.label': './stack.json',
  'section.work.label': './projetos',
  'section.contact.label': './contato',

  'experience.label': './experiência',
  'experience.meta': '{total} marcos · {jobs} funções',
  'stack.meta': 'ferramentas que mais uso',
  'work.meta': '{count} projetos em destaque',
  'contact.meta': 'links e presença',

  'xp.now': 'atual',

  'work.yearLabel': 'produto',
  'work.status': 'entregue',
  'work.roleSuffix': 'build em destaque',
  'work.readMore': 'ver mais →',
  'work.previewLabel': 'prévia',
  'modal.repo': 'repositório →',
  'modal.site': 'site →',
  'modal.figma': 'figma →',

  'ch.github': 'github',
  'ch.linkedin': 'linkedin',
  'ch.email': 'e-mail',
  'ch.cv': 'cv',
  'ch.cv.val': 'PDF · 2 páginas',

  'f.copy': '© {year} vitor hugo ·',
  'f.inspired': 'layout inspirado em Dawid Kin',
  'f.built': 'react + vite'
} as const

const catalogs: Record<Locale, Record<MessageKey, string>> = {
  en: messagesEn,
  pt: messagesPt
}

export function translate(
  locale: Locale,
  key: MessageKey,
  vars?: Record<string, string | number>
): string {
  let s: string = catalogs[locale][key] ?? String(key)
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      const needle = `{${k}}`
      s = s.split(needle).join(String(v))
    }
  }
  return s
}
