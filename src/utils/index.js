import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...styles) => {
  return twMerge(clsx(styles))
}

export const priceFormat = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}