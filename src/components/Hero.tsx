import { person } from '@/data/person'
import { pick } from '@/i18n/locale'
import { useLocaleContext } from '@/i18n/useLocaleContext'

export function Hero() {
  const { locale } = useLocaleContext()

  return (
    <section className="hero" id="hero">
      <div className="banner">
        <h1 className="huge" dangerouslySetInnerHTML={{ __html: pick(person.bannerHugeHtml, locale) }} />
        <div className="sub">
          {person.bannerBlocks.map((b) => (
            <div className="block" key={b.id}>
              <div className="l">{pick(b.label, locale)}</div>
              <div className="t">{pick(b.text, locale)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
