'use client'
import { Palette, Check, Sun, Moon, Monitor } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

const palettes = [
  { id: 'red', label: 'Red' },
  { id: 'orange', label: 'Orange' },
  { id: 'blue', label: 'Blue' },
  { id: 'violet', label: 'Violet' }
]

export function ThemeToggle(){
  const { theme, setTheme } = useTheme()
  const [palette, setPalette] = useState('red')
  useEffect(()=>{ const saved = localStorage.getItem('com1-palette') || 'red'; setPalette(saved); document.documentElement.dataset.palette = saved },[])
  const choose = (id:string)=>{ setPalette(id); localStorage.setItem('com1-palette', id); document.documentElement.dataset.palette = id }
  return <Dialog>
    <DialogTrigger asChild><Button variant="outline" className="rounded-full"><Palette className="h-4 w-4"/>Theme</Button></DialogTrigger>
    <DialogContent className="rounded-3xl sm:max-w-md">
      <DialogHeader><DialogTitle className="flex items-center gap-2"><Palette className="h-5 w-5 text-primary"/>Choose Theme</DialogTitle></DialogHeader>
      <div className="grid gap-3">
        {palettes.map(p=><Button key={p.id} variant={palette===p.id?'default':'outline'} className="h-12 justify-between rounded-2xl" onClick={()=>choose(p.id)}><span>{p.label}</span>{palette===p.id && <Check className="h-4 w-4"/>}</Button>)}
      </div>
      <div className="mt-2 rounded-2xl border bg-secondary/50 p-3">
        <p className="mb-3 text-sm font-bold">Mode</p>
        <div className="grid grid-cols-3 gap-2">
          <Button variant={theme==='light'?'default':'outline'} className="rounded-xl" onClick={()=>setTheme('light')}><Sun className="h-4 w-4"/>Light</Button>
          <Button variant={theme==='dark'?'default':'outline'} className="rounded-xl" onClick={()=>setTheme('dark')}><Moon className="h-4 w-4"/>Dark</Button>
          <Button variant={theme==='system'?'default':'outline'} className="rounded-xl" onClick={()=>setTheme('system')}><Monitor className="h-4 w-4"/>Auto</Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
}
