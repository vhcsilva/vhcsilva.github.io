import { ProjectCard } from '@/components/ProjectCard'
import { Section } from '@/components/Section'
import { projects } from '@/data/projects'

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard project={project} key={project?.name} />
        ))}
      </div>
    </Section>
  )
}
