import { SectionHead } from '@/components/SectionHead'
import { timeline } from '@/data/timeline'
import { pick } from '@/i18n/locale'
import { useLocaleContext } from '@/i18n/useLocaleContext'

function splitTags(techs: string) {
  return techs
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

export function ExperienceSection() {
  const { locale, t } = useLocaleContext()
  const jobCount = timeline.filter((x) => x.type === 'job').length
  const meta = t('experience.meta', { positions: jobCount, years: 7 })

  return (
    <section id="experience">
      <SectionHead num="02" label={t('experience.label')} meta={meta} />

      <div className="timeline">
        {timeline.map((xp, i) => {
          const tags = splitTags(xp.techs)
          const delayClass = i > 0 ? `d${Math.min(i, 5)}` : ''
          const endLabel = xp.end === 'now' ? t('xp.now') : xp.end
          return (
            <div key={xp.id} className={['xp-row', 'reveal', delayClass].filter(Boolean).join(' ')}>
              <div className="years">
                <span className="dot">●</span>
                {xp.start} — {endLabel}
              </div>
              <div className="main">
                <h3>{pick(xp.role, locale)}</h3>
                <div className="org">
                  <a href={xp.companyUrl} target="_blank" rel="noreferrer">
                    {xp.company}
                  </a>
                  {' · '}
                  <span>{pick(xp.location, locale)}</span>
                </div>
                <p dangerouslySetInnerHTML={{ __html: pick(xp.summaryHtml, locale) }} />
              </div>
              <div className="tags">
                {tags.map((tag, ti) => (
                  <span key={tag} className={`tag ${ti === 0 ? 'pri' : ''}`.trim()}>
                    {tag.toLowerCase()}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
