import { CardProps } from '@types/index'
import { cn } from '@utils/cn'

export default function Card({ title, children, className, actions }: CardProps) {
  return (
    <div className={cn('card', className)}>
      {(title || actions) && (
        <div className="flex items-center justify-between mb-4">
          {title && <h3 className="text-xl font-semibold">{title}</h3>}
          {actions && <div className="flex gap-2">{actions}</div>}
        </div>
      )}
      {children}
    </div>
  )
}
