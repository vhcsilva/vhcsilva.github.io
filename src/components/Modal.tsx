import type { MouseEvent, ReactNode } from 'react'

import { CloseIcon } from '@/assets/icons/close'

import styles from '@/components/Modal.module.css'

type ModalProps = {
  title: string
  isVisible: boolean
  children?: ReactNode
  onCloseClick: () => void
}

export function Modal({ title, isVisible, children, onCloseClick }: ModalProps) {
  function onBackdropClick(e: MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onCloseClick()
  }

  if (!isVisible) return null

  return (
    <div className={styles.backdrop} onClick={onBackdropClick} role="presentation">
      <div className={styles.panel} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className={styles.header}>
          <h2 id="modal-title">{title}</h2>
          <button type="button" className={styles.close} onClick={onCloseClick} aria-label="Close dialog">
            <CloseIcon height={28} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
