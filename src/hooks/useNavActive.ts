import { useEffect, useState } from 'react'

const SECTION_IDS = ['hero', 'experience', 'stack', 'work', 'contact'] as const

export type SectionId = (typeof SECTION_IDS)[number]

export function useNavActive() {
  const [active, setActive] = useState<SectionId>('hero')

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return
          const id = en.target.id as SectionId
          if (SECTION_IDS.includes(id)) setActive(id)
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return active
}
