import { useLocaleContext } from '@/i18n/useLocaleContext'

export function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLocaleContext()

  return (
    <footer>
      <div className="left">
        <span>
          {t('f.copy', { year })}{' '}
          <a
            href="https://www.behance.net/gallery/186671031/Portfolio-for-Frontend-Developer"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--fg-dim)' }}
          >
            {t('f.inspired')}
          </a>
        </span>
      </div>
      <div className="right">
        <span className="ok">●</span>
        <span>{t('f.built')}</span>
      </div>
    </footer>
  )
}
