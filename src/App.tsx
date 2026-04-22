import { BackgroundLayers } from '@/components/BackgroundLayers'
import { ContactSection } from '@/components/ContactSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { StackSection } from '@/components/StackSection'
import { TopBar } from '@/components/TopBar'
import { WorkSection } from '@/components/WorkSection'
import { useLocaleContext } from '@/i18n/useLocaleContext'
import { useNavActive } from '@/hooks/useNavActive'
import { useReveal } from '@/hooks/useReveal'

function App() {
  const active = useNavActive()
  const { locale, t } = useLocaleContext()
  useReveal(locale)

  return (
    <>
      <BackgroundLayers />
      <TopBar active={active} locationLine={t('location.line')} />

      <main>
        <Hero />
        <ExperienceSection />
        <StackSection />
        <WorkSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

export default App
