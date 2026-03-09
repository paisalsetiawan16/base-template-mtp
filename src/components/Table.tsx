import { TableColumn } from '@types/index'
import { cn } from '@utils/cn'

interface TableProps<T> {
  data: T[]
  columns: TableColumn<T>[]
  onRowClick?: (row: T) => void
}

export default function Table<T extends Record<string, any>>({
  data,
  columns,
  onRowClick,
}: TableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 dark:bg-dark-3">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-dark-3">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => onRowClick?.(row)}
              className={cn(
                'hover:bg-gray-50 dark:hover:bg-dark-3 transition-colors',
                onRowClick && 'cursor-pointer'
              )}
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                  {column.render
                    ? column.render(row[column.key as string], row)
                    : row[column.key as string]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
