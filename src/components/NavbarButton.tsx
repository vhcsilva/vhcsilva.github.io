import { ReactNode } from 'react'

type NavbarButtonProps = {
  sectionId: string
  label: string
  icon: ReactNode
  title: string
}

export function NavbarButton({ sectionId, label, icon, title }: NavbarButtonProps) {
  function scroll() {
    const el = document.getElementById(sectionId)
    if (!el) return
    window.scroll({
      top: el.offsetTop - 80,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scroll}
      link-label={label}
      title={title}
      className={`relative flex hover:bg-gray-300 text-white align-middle py-2 px-3
      rounded-full after:absolute after:content-[attr(link-label)] after:left-10 after:invisible
      lg:hover:after:visible lg:hover:w-40`}
    >
      {icon}
    </button>
  )
}
