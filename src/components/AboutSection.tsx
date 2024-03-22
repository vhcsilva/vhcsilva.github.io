import { EmailIcon } from '@/assets/icons/email'
import { GithubIcon } from '@/assets/icons/github'
import { HandIcon } from '@/assets/icons/hand'
import { LinkedinIcon } from '@/assets/icons/linkedin'
import { Section } from '@/components/Section'
import { SocialLink } from '@/components/SocialLink'

export function AboutSection() {
  const socials = [
    {
      href: 'https://github.com/vhcsilva',
      label: 'Github',
      icon: <GithubIcon />,
      title: 'Link to github profile'
    },
    {
      href: 'https://www.linkedin.com/in/vhcsilva/',
      label: 'LinkedIn',
      icon: <LinkedinIcon />,
      title: 'Link to linkedin profile'
    },
    {
      href: 'mailto:vhcsilvadev@gmail.com',
      label: 'Email',
      icon: <EmailIcon />,
      title: 'Link to send an email'
    }
  ]

  return (
    <Section id="about" className="flex flex-col items-center gap-5 justify-center font-semibold">
      <div className="flex items-center w-full gap-3">
        <div className="flex items-center gap-2 text-green bg-green-opacity-25 rounded-full py-2 px-3">
          <div className="bg-green rounded-full h-3 w-3"></div>
          <span>Available</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center gap-5">
          <h1 className="text-white">Hi, I'm Vitor</h1>
          <h1 className="text-green">
            <HandIcon />
          </h1>
        </div>
        <h1 className="text-green">Frontend Engineer</h1>
      </div>

      <div className="flex flex-col sm:flex-row w-full gap-3 items-center">
        {socials.map(({ href, label, icon, title }) => (
          <SocialLink key={`social-${label}`} href={href} label={label} title={title} icon={icon} />
        ))}
      </div>

      <div className="w-full">
        <p className="text-gray-300 font-normal text-justify"></p>
      </div>
    </Section>
  )
}
