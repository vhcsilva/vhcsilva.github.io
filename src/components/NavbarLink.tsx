import { ReactNode } from 'react'

type NavbarButtonProps = {
  href: string
  label: string
  icon: ReactNode
  title: string
}

export function NavbarLink({ href, label, icon, title }: NavbarButtonProps) {
  return (
    <a
      href={href}
      link-label={label}
      title={title}
      className={`relative flex hover:bg-gray-300 text-white align-middle py-2 px-3
      rounded-full after:absolute after:content-[attr(link-label)] after:left-10 after:invisible
      lg:hover:after:visible lg:hover:w-40`}
    >
      {icon}
    </a>
  )
}
