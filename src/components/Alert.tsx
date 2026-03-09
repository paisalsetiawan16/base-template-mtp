import { AlertCircle, CheckCircle, Info, XCircle, X } from 'lucide-react'
import { cn } from '@utils/cn'

interface AlertProps {
  type?: 'success' | 'error' | 'warning' | 'info'
  title?: string
  message: string
  onClose?: () => void
  className?: string
}

export default function Alert({
  type = 'info',
  title,
  message,
  onClose,
  className,
}: AlertProps) {
  const config = {
    success: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800',
      text: 'text-green-800 dark:text-green-200',
      icon: <CheckCircle size={20} />,
    },
    error: {
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-200 dark:border-red-800',
      text: 'text-red-800 dark:text-red-200',
      icon: <XCircle size={20} />,
    },
    warning: {
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-200 dark:border-yellow-800',
      text: 'text-yellow-800 dark:text-yellow-200',
      icon: <AlertCircle size={20} />,
    },
    info: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-800 dark:text-blue-200',
      icon: <Info size={20} />,
    },
  }

  const { bg, border, text, icon } = config[type]

  return (
    <div className={cn('flex items-start gap-3 p-4 rounded-lg border', bg, border, className)}>
      <div className={text}>{icon}</div>
      <div className="flex-1">
        {title && <h4 className={cn('font-semibold mb-1', text)}>{title}</h4>}
        <p className={cn('text-sm', text)}>{message}</p>
      </div>
      {onClose && (
        <button onClick={onClose} className={cn('hover:opacity-70', text)}>
          <X size={18} />
        </button>
      )}
    </div>
  )
}
