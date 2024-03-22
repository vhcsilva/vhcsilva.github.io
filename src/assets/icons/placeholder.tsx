import { SVGProps } from 'react'

export function PlaceholderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      color="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3 3H21V21H3z"></path>
      <path strokeLinecap="round" d="M21 21L3 3l18 18zm0-18L3 21 21 3z"></path>
    </svg>
  )
}
