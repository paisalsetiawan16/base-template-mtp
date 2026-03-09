import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@utils/cn'

interface DropdownItem {
  label: string
  value: string
  icon?: React.ReactNode
  onClick?: () => void
}

interface DropdownProps {
  label: string
  items: DropdownItem[]
  className?: string
}

export default function Dropdown({ label, items, className }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={dropdownRef} className={cn('relative', className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-2 border border-gray-300 dark:border-dark-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-3 transition-colors"
      >
        {label}
        <ChevronDown size={16} className={cn('transition-transform', isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-dark-2 border border-gray-200 dark:border-dark-3 rounded-lg shadow-lg z-10">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                item.onClick?.()
                setIsOpen(false)
              }}
              className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50 dark:hover:bg-dark-3 transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
