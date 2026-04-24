import { useEffect, useRef } from 'react'
import posthog from 'posthog-js'

import { SectionHead } from '@/components/SectionHead'
import { person, type PersonSocial } from '@/data/person'
import { pick } from '@/i18n/locale'
import { useLocaleContext } from '@/i18n/useLocaleContext'
import type { MessageKey } from '@/i18n/messages'

const CHANNEL_TITLE: Record<PersonSocial['channelKey'], MessageKey> = {
  github: 'ch.github',
  linkedin: 'ch.linkedin',
  email: 'ch.email'
}

export function ContactSection() {
  const { locale, t, cvHref, cvDownloadName } = useLocaleContext()
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          posthog.capture('contact_section_viewed')
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef}>
      <SectionHead num="05" label={t('section.contact.label')} meta={t('contact.meta')} />

      <div className="contact">
        <div>
          <h2 className="big">
            {pick(person.contactHeadlinePrefix, locale)}{' '}
            <span className="accent">{pick(person.contactHeadlineAccent, locale)}</span>
            <span className="pipe"> | </span>
            {pick(person.contactHeadlineSuffix, locale)}
          </h2>
          <p className="intro" dangerouslySetInnerHTML={{ __html: pick(person.contactIntroHtml, locale) }} />
        </div>

        <div className="channels">
          {person.socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => posthog.capture('contact_link_clicked', { channel: s.channelKey })}
            >
              <span className="ch">{t(CHANNEL_TITLE[s.channelKey])}</span>
              <span className="val">{s.label}</span>
              <span className="arrow">→</span>
            </a>
          ))}
          <a href={cvHref} download={cvDownloadName} onClick={() => posthog.capture('cv_downloaded', { locale })}>
            <span className="ch">{t('ch.cv')}</span>
            <span className="val">{t('ch.cv.val')}</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
