export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: string
}

export interface MenuItem {
  label: string
  icon: React.ReactNode
  path: string
  badge?: string
  children?: MenuItem[]
}

export interface CardProps {
  title?: string
  children: React.ReactNode
  className?: string
  actions?: React.ReactNode
}

export interface TableColumn<T> {
  key: keyof T | string
  label: string
  render?: (value: any, row: T) => React.ReactNode
  sortable?: boolean
}

export interface ChartData {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    backgroundColor?: string | string[]
    borderColor?: string | string[]
  }[]
}
