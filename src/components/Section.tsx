import { HTMLAttributes } from 'react'

export function Section({ children, className, title, ...rest }: HTMLAttributes<HTMLElement>) {
  return (
    <section
      {...rest}
      className={`w-full md:max-w-[780px] [&:not(:last-child)]:border-b-2 [&:not(:last-child)]:border-gray-300
        [&:not(:last-child)]:pb-5 ${className}`}
    >
      <h3 className="text-white font-semibold mb-6">{title}</h3>
      {children}
    </section>
  )
}
