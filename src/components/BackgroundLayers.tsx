import { useEffect, useRef } from 'react'

export function BackgroundLayers() {
  const asciiRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = asciiRef.current
    if (!el) return
    const chars = '01 ░▒▓ ·./\\+-=*#;: '
    let out = ''
    for (let i = 0; i < 220; i++) {
      let row = ''
      for (let j = 0; j < 220; j++) row += chars[Math.floor(Math.random() * chars.length)]
      out += `${row}\n`
    }
    el.textContent = out
  }, [])

  return (
    <>
      <div className="bg-layer bg-grid" aria-hidden />
      <div className="bg-layer bg-noise" aria-hidden />
      <div className="bg-layer bg-ascii" id="asciiBg" ref={asciiRef} aria-hidden />
      <div className="vignette" aria-hidden />
      <div className="scanlines" aria-hidden />
    </>
  )
}
