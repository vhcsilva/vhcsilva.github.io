import { SVGProps } from 'react'

export function SolidityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 32 32" {...props}>
      <path
        d="M20.477 2l-4.5 8h-9l4.5-8h9M11.52 30l4.5-8h9l-4.5 8h-9"
        style={{ isolation: 'isolate' }}
        fill="currentColor"
        opacity="0.45"
      ></path>
      <path
        d="M15.975 10h9l-4.5-8h-9zM16.022 22h-9l4.5 8h9z"
        style={{ isolation: 'isolate' }}
        fill="currentColor"
        opacity="0.6"
      ></path>
      <path
        d="M11.477 18l4.5-8-4.5-8-4.5 8zM20.52 14l-4.5 8 4.5 8 4.5-8z"
        style={{ isolation: 'isolate' }}
        fill="currentColor"
        opacity="0.8"
      ></path>
    </svg>
  )
}
