import type { Locale } from '@/i18n/locale'
import { useEffect } from 'react'

/** Mirrors template scroll-reveal: adds `.in` when `.reveal` enters the viewport. */
export function useReveal(locale: Locale) {
  useEffect(() => {
    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.remove('in')
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return
          en.target.classList.add('in')
          en.target.querySelectorAll<HTMLElement>('.skill-bar .fill').forEach((f) => {
            const w = f.dataset.w
            if (w != null) f.style.width = `${w}%`
          })
          io.unobserve(en.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [locale])
}
