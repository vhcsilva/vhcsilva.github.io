import { Section } from '@/components/Section'
import { TechnologyIcon } from '@/components/TechnologyIcon'
import { Technology } from '@/types/technologies'

export function TechnologySection() {
  return (
    <Section id="technology" title="Techonology">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {Object.values(Technology).map((tech) => (
          <div
            className={`flex flex-col items-center gap-4 bg-gray-700 hover:bg-green text-white hover:text-black
          rounded-lg p-4 transition-all`}
          >
            <TechnologyIcon technology={tech} variant="big" />
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
