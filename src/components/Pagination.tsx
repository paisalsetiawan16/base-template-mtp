import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@utils/cn'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className={cn('flex items-center justify-center gap-2', className)}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-3 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={20} />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            'px-4 py-2 rounded-lg transition-colors',
            page === currentPage
              ? 'bg-primary-600 text-white'
              : 'hover:bg-gray-100 dark:hover:bg-dark-3'
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-3 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}
