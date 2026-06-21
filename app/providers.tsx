'use client'
import { ThemeProvider } from 'next-themes'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
export function Providers({children}:{children:React.ReactNode}){useEffect(()=>{AOS.init({duration:700,once:false,easing:'ease-out-cubic'})},[]);return <ThemeProvider attribute="class" defaultTheme="system" enableSystem>{children}</ThemeProvider>}
