import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toFirstUppercase(str: string): string {
  return str.length !== 0 ? str[0].toUpperCase() + str.slice(1) : ''
}
