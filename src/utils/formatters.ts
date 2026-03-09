import { format } from 'date-fns'

export const formatDate = (date: Date | string, formatStr = 'dd MMM yyyy') => {
  return format(new Date(date), formatStr)
}

export const formatCurrency = (amount: number, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}

export const formatNumber = (num: number) => {
  return new Intl.NumberFormat('en-US').format(num)
}

export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}
