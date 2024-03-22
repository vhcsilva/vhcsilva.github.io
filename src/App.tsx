import { AboutSection } from '@/components/AboutSection'
import { TechnologySection } from '@/components/TechnologySection'
import { TimelineSection } from '@/components/TimelineSection'
import { Navbar } from '@/components/Navbar'
import { ProjectsSection } from '@/components/ProjectsSection'
import { Credits } from '@/components/Credits'

function App() {
  return (
    <>
      <Navbar />

      <main className="py-10 md:pt-0 px-5 lg:px-0 w-full flex flex-col gap-5 items-center">
        <AboutSection />
        <TimelineSection />
        <ProjectsSection />
        <TechnologySection />
      </main>

      <footer>
        <Credits />
      </footer>
    </>
  )
}

export default App
