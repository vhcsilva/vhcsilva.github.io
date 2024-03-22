import { ReactNode } from 'react'

type SocialLinkProps = {
  href: string
  label: string
  icon: ReactNode
  title: string
}

export function SocialLink({ href, label, icon, title }: SocialLinkProps) {
  return (
    <a
      href={href}
      title={title}
      target="_blank"
      rel="noopener roreferer"
      className={`rounded-full flex items-center gap-2 p-2 px-3 bg-gray text-white fill-green hover:bg-green
          hover:text-background group transition-all duration-300 text-sm w-full md:w-auto justify-center md:justify-start`}
    >
      <span className="text-green group-hover:text-background transition-all duration-300">{icon}</span>
      {label}
    </a>
  )
}
