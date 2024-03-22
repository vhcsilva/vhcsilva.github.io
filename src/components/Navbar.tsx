import { ClockIcon } from '@/assets/icons/clock'
import { CodeIcon } from '@/assets/icons/code-bracket'
import { SquaresIcon } from '@/assets/icons/squares'
// import { TrophyIcon } from '@/assets/icons/trophy'
import { UserIcon } from '@/assets/icons/user'
import { NavbarButton } from '@/components/NavbarButton'

export function Navbar() {
  return (
    <nav
      className={`fixed flex top-4 w-min inset-x-0 mx-auto lg:mx-0 lg:top-1/4 lg:left-3 lg:flex-col gap-3 bg-gray-700 rounded-full p-1
      justify-center align-middle lg:w-14`}
    >
      <NavbarButton sectionId="about" label="About" icon={<UserIcon />} title="Go to about section" />
      <NavbarButton sectionId="timeline" label="Timeline" icon={<ClockIcon />} title="Go to timeline section" />
      <NavbarButton sectionId="projects" label="Projects" icon={<SquaresIcon />} title="Go to projects section" />
      <NavbarButton sectionId="technology" label="Technology" icon={<CodeIcon />} title="Go to technology section" />
      {/* <NavbarLink sectionId="prizes" label="Prizes" icon={<TrophyIcon />} title="Go to prizes section" /> */}
    </nav>
  )
}
