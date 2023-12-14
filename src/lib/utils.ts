import { type ClassValue, clsx } from "clsx"
import { parse } from "path"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: 'USD' | 'IDR'
    //notation?: Intl.NumberFormatOptions['notation']
  } = {}
) {
  const { currency = 'IDR'} = options

  const numericPrice = typeof price === 'string' ? parseFloat(price) : price

  return new Intl.NumberFormat('id-ID', {
    style:'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(numericPrice)
}
