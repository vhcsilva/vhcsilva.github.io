import { useEffect, useRef, useState } from 'react'
import posthog from 'posthog-js'

import type { SectionId } from '@/hooks/useNavActive'
import { useLocaleContext } from '@/i18n/useLocaleContext'
import type { MessageKey } from '@/i18n/messages'

const NAV: { href: string; n: string; labelKey: MessageKey }[] = [
  { href: '#hero', n: '01', labelKey: 'nav.intro' },
  { href: '#experience', n: '02', labelKey: 'nav.experience' },
  { href: '#stack', n: '03', labelKey: 'nav.stack' },
  { href: '#work', n: '04', labelKey: 'nav.work' },
  { href: '#contact', n: '05', labelKey: 'nav.contact' }
]

type TopBarProps = {
  active: SectionId
  locationLine: string
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export function TopBar({ active, locationLine }: TopBarProps) {
  const [clock, setClock] = useState('—')
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLElement | null>(null)
  const toggleRef = useRef<HTMLButtonElement | null>(null)
  const { locale, setLocale, t } = useLocaleContext()

  useEffect(() => {
    function tick() {
      const d = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }))

      setClock(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`)
    }
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 900) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!menuOpen) return
      const target = event.target as Node | null
      if (!target) return
      if (menuRef.current?.contains(target) || toggleRef.current?.contains(target)) return
      setMenuOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [menuOpen])

  return (
    <div className="topbar">
      <div className="topbar-inner">
        <button
          type="button"
          className="menu-toggle"
          ref={toggleRef}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="main-sections-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="brand">
          <span className="dot" />
          <span>vitor.hugo</span>
        </div>

        <nav
          className={`sections ${menuOpen ? 'open' : ''}`}
          aria-label="Sections"
          id="main-sections-nav"
          ref={menuRef}
        >
          <ul>
            {NAV.map(({ href, n, labelKey }) => {
              const id = href.slice(1) as SectionId
              const isActive = active === id
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={isActive ? 'active' : undefined}
                    onClick={() => {
                      setMenuOpen(false)
                      posthog.capture('nav_link_clicked', { section: id })
                    }}
                  >
                    <span className="n">{n}</span> {t(labelKey)}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="status">
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={locale === 'en' ? 'on' : undefined}
              onClick={() => {
                setLocale('en')
                posthog.capture('language_switched', { locale: 'en' })
              }}
            >
              EN
            </button>
            <button
              type="button"
              className={locale === 'pt' ? 'on' : undefined}
              onClick={() => {
                setLocale('pt')
                posthog.capture('language_switched', { locale: 'pt' })
              }}
            >
              PT-BR
            </button>
          </div>
          <span
            className="where"
            dangerouslySetInnerHTML={{
              __html: `<span style="color:var(--accent)">●</span> ${locationLine}`
            }}
          />
          <span className="time">{clock}</span>
        </div>
      </div>
    </div>
  )
}
