'use client'
import { ThemeProvider } from 'next-themes'; import AOS from 'aos'; import 'aos/dist/aos.css'; import { useEffect } from 'react'; import { I18nProvider } from '@/lib/i18n';
export function Providers({children}:{children:React.ReactNode}){useEffect(()=>{AOS.init({duration:850, once:false, easing:'ease-out-cubic', offset:80})},[]); return <ThemeProvider attribute="class" defaultTheme="system" enableSystem><I18nProvider>{children}</I18nProvider></ThemeProvider>}
