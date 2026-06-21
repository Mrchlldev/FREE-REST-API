import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
export function cn(...inputs: ClassValue[]){return twMerge(clsx(inputs))}
export function titleCase(s:string){return s.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}
