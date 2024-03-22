import { GithubIcon } from '@/assets/icons/github'
import { GlobeIcon } from '@/assets/icons/globe'
import { Modal } from '@/components/Modal'
import { SocialLink } from '@/components/SocialLink'
import { TechnologyIcon } from '@/components/TechnologyIcon'
import type { Project } from '@/types/project'
import { useState } from 'react'

type ProjectCard = {
  project: Project
}

export function ProjectCard({ project }: ProjectCard) {
  const [isModalVisible, setIsModalVisible] = useState(false)

  function onReadMoreClick() {
    setIsModalVisible(true)
  }

  function onCloseClick() {
    setIsModalVisible(false)
  }

  return (
    <>
      <div className="flex flex-col gap-4 bg-gray-700 hover:bg-green rounded-lg p-4 group transition-all">
        <h4 className="text-white font-semibold group-hover:text-black">{project?.name}</h4>

        <h5 className="text-gray-200 text-justify group-hover:text-black">{project?.shortDescription}</h5>

        <button className="text-green underline w-max group-hover:text-white" onClick={onReadMoreClick}>
          read more {'>'}
        </button>

        <div className="flex items-center gap-3 text-white group-hover:text-black">
          {project?.techs?.map((tech) => <TechnologyIcon technology={tech} />)}
        </div>
      </div>

      <Modal title={project?.name} isVisible={isModalVisible} onCloseClick={onCloseClick}>
        <div className="flex flex-wrap items-center gap-3 mb-5">
          {project?.techs?.map((tech) => (
            <div className="text-white bg-green-opacity-25 py-2 px-3 rounded-full">{tech}</div>
          ))}
        </div>

        <img src={project?.preview} alt={`${project?.name} preview`} className="rounded-3xl mb-5" />

        <p className="text-white text-justify mb-5 whitespace-pre-line">{project?.longDescription}</p>

        <div className="flex items-center gap-5 border-t border-gray-300 pt-4">
          <SocialLink
            href={project?.repository}
            label="Repository"
            icon={<GithubIcon />}
            title={`${project?.name} repository link`}
          />

          {project?.appUrl && (
            <SocialLink
              href={project?.appUrl}
              label="Website"
              icon={<GlobeIcon />}
              title={`${project?.name} website`}
            />
          )}
        </div>
      </Modal>
    </>
  )
}
