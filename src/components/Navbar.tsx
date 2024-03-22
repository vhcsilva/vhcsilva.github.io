import { ClockIcon } from '@/assets/icons/clock'
import { CodeIcon } from '@/assets/icons/code-bracket'
import { SquaresIcon } from '@/assets/icons/squares'
// import { TrophyIcon } from '@/assets/icons/trophy'
import { UserIcon } from '@/assets/icons/user'
import { NavbarLink } from '@/components/NavbarLink'

export function Navbar() {
  return (
    <nav
      className={`fixed flex top-4 w-min inset-x-0 mx-auto lg:mx-0 lg:top-1/4 lg:left-3 lg:flex-col gap-3 bg-gray-700 rounded-full p-1
      justify-center align-middle lg:w-14`}
    >
      <NavbarLink href="#about" label="About" icon={<UserIcon />} title="Go to about section" />
      <NavbarLink href="#timeline" label="Timeline" icon={<ClockIcon />} title="Go to timeline section" />
      <NavbarLink href="#projects" label="Projects" icon={<SquaresIcon />} title="Go to projects section" />
      <NavbarLink href="#technology" label="Technology" icon={<CodeIcon />} title="Go to technology section" />
      {/* <NavbarLink href="#prizes" label="Prizes" icon={<TrophyIcon />} title="Go to prizes section" /> */}
    </nav>
  )
}
