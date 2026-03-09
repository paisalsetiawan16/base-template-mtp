import { useEffect } from 'react'
import { X } from 'lucide-react'
import { cn } from '@utils/cn'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div
        className={cn(
          'relative bg-white dark:bg-dark-2 rounded-lg shadow-xl w-full mx-4',
          sizes[size]
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-dark-3">
          {title && <h3 className="text-xl font-semibold">{title}</h3>}
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 dark:hover:bg-dark-3 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
