type SectionHeadProps = {
  num: string
  label: string
  meta: string
  className?: string
}

export function SectionHead({ num, label, meta, className = '' }: SectionHeadProps) {
  return (
    <div className={`section-head reveal ${className}`.trim()}>
      <span className="num">{num}</span>
      <span className="label">{label}</span>
      <span className="dashes" />
      <span className="meta">{meta}</span>
    </div>
  )
}
