import { SectionHead } from '@/components/SectionHead'
import { stackGroups } from '@/data/stackGroups'
import { pick } from '@/i18n/locale'
import { useLocaleContext } from '@/i18n/useLocaleContext'

const widthClass = {
  4: 'w4',
  6: 'w6',
  8: 'w8',
  12: 'w12'
} as const

export function StackSection() {
  const { locale, t } = useLocaleContext()

  return (
    <section id="stack">
      <SectionHead num="03" label={t('section.stack.label')} meta={t('stack.meta')} />

      <div className="stack">
        {stackGroups.map((g, i) => (
          <div
            key={g.id}
            className={['group', widthClass[g.width], 'reveal', i > 0 ? `d${Math.min(i, 5)}` : ''].filter(Boolean).join(' ')}
          >
            <div className="gh">
              <span className="gname">{pick(g.name, locale)}</span>
              <span className="gtag">{pick(g.tag, locale)}</span>
            </div>
            <div className="items">
              {g.items.map(({ tech, primary }) => (
                <span key={`${g.id}-${tech}`} className={primary ? 'item primary' : 'item'}>
                  {tech.toLowerCase()}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
