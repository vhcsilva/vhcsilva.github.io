import posthog from 'posthog-js'

import { SectionHead } from '@/components/SectionHead'
import { projects } from '@/data/projects'
import { pick } from '@/i18n/locale'
import { useLocaleContext } from '@/i18n/useLocaleContext'

export function WorkSection() {
  const { locale, t } = useLocaleContext()
  const meta = t('work.meta', { count: projects.length })

  return (
    <section id="work">
      <SectionHead num="04" label={t('section.work.label')} meta={meta} />

      <div className="projects">
        {projects.map((project, i) => (
          <article key={project.name} className="proj">
            <div className="head">
              <span>
                <span className="idx">{String(i + 1).padStart(2, '0')}</span>{' '}
                <span className="year">{t('work.yearLabel')}</span>
              </span>
              <span className="status">
                <i /> {t('work.status')}
              </span>
            </div>

            <h3>{project.name}</h3>

            <p className="desc">{pick(project.shortDescription, locale)}</p>

            <div className="tags-row">
              {project.techs.map((tech) => (
                <span key={tech} className="tag pri">
                  {tech.toLowerCase()}
                </span>
              ))}
            </div>
            {(project.appUrl || project.repository || project.figmaUrl) && (
              <div className="proj-links">
                {project.appUrl && (
                  <a
                    href={project.appUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() =>
                      posthog.capture('project_link_clicked', { project: project.name, link_type: 'site' })
                    }
                  >
                    {t('modal.site')}
                  </a>
                )}
                {project.repository && (
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() =>
                      posthog.capture('project_link_clicked', { project: project.name, link_type: 'repo' })
                    }
                  >
                    {t('modal.repo')}
                  </a>
                )}
                {project.figmaUrl && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() =>
                      posthog.capture('project_link_clicked', { project: project.name, link_type: 'figma' })
                    }
                  >
                    {t('modal.figma')}
                  </a>
                )}
              </div>
            )}

            <div className="preview" aria-hidden>
              <div className="ph" data-label={t('work.previewLabel')}>
                <img src={project.preview} alt="" width={180} height={110} style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
