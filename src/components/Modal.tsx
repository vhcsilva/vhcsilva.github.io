import { MouseEvent, ReactNode } from 'react'

import { CloseIcon } from '@/assets/icons/close'

type Modal = {
  title: string
  isVisible: boolean
  children?: ReactNode
  onCloseClick: () => void
}

export function Modal({ title, isVisible, children, onCloseClick }: Modal) {
  function onBackdropClick(e: MouseEvent<HTMLDivElement>) {
    if ((e.target as HTMLDivElement).className.includes('backdrop')) onCloseClick()
  }

  if (!isVisible) return <></>

  return (
    <div
      className="fixed z-[1055] inset-0 h-full w-full backdrop-blur-sm flex items-center justify-center"
      onClick={onBackdropClick}
    >
      <div className="bg-gray-700 p-6 rounded-lg w-full h-full md:h-min lg:w-3/4 xl:w-1/2">
        <div className="flex items-center justify-between text-white font-bold mb-5">
          <h2>{title}</h2>

          <button onClick={onCloseClick}>
            <CloseIcon height={30} />
          </button>
        </div>

        {children}
      </div>
    </div>
  )
}
