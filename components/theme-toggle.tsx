'use client'
import { Palette, Check, Sun, Moon, Monitor, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

const palettes = [
  { id: 'red', label: 'Red', tone: 'bg-red-500' },
  { id: 'orange', label: 'Orange', tone: 'bg-orange-500' },
  { id: 'blue', label: 'Blue', tone: 'bg-blue-500' },
  { id: 'violet', label: 'Violet', tone: 'bg-violet-500' },
  { id: 'green', label: 'Green', tone: 'bg-emerald-500' },
  { id: 'cyan', label: 'Cyan', tone: 'bg-cyan-500' },
  { id: 'pink', label: 'Pink', tone: 'bg-pink-500' },
  { id: 'slate', label: 'Slate', tone: 'bg-slate-700' }
]

export function ThemeToggle(){
  const { theme, setTheme } = useTheme()
  const [palette, setPalette] = useState('red')
  useEffect(()=>{ const saved = localStorage.getItem('com1-palette') || 'red'; setPalette(saved); document.documentElement.dataset.palette = saved },[])
  const choose = (id:string)=>{ setPalette(id); localStorage.setItem('com1-palette', id); document.documentElement.dataset.palette = id }
  return <Dialog>
    <DialogTrigger asChild><Button variant="outline" className="rounded-full"><Palette className="h-4 w-4"/>Theme</Button></DialogTrigger>
    <DialogContent className="overflow-hidden rounded-[2rem] sm:max-w-xl">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
      <DialogHeader className="relative">
        <DialogTitle className="flex items-center gap-2 text-2xl"><Sparkles className="h-5 w-5 text-primary"/>Theme Settings</DialogTitle>
      </DialogHeader>
      <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4">
        {palettes.map(p=><button key={p.id} onClick={()=>choose(p.id)} className="group relative overflow-hidden rounded-2xl border bg-background p-4 text-left transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
          <span className={`mb-3 block h-10 w-full rounded-xl ${p.tone}`} />
          <span className="font-bold">{p.label}</span>
          {palette===p.id && <span className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="h-4 w-4"/></span>}
        </button>)}
      </div>
      <div className="relative mt-2 rounded-3xl border bg-secondary/50 p-4">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-muted-foreground">Mode</p>
        <div className="grid grid-cols-3 gap-2">
          <Button variant={theme==='light'?'default':'outline'} className="rounded-2xl" onClick={()=>setTheme('light')}><Sun className="h-4 w-4"/>Light</Button>
          <Button variant={theme==='dark'?'default':'outline'} className="rounded-2xl" onClick={()=>setTheme('dark')}><Moon className="h-4 w-4"/>Dark</Button>
          <Button variant={theme==='system'?'default':'outline'} className="rounded-2xl" onClick={()=>setTheme('system')}><Monitor className="h-4 w-4"/>Auto</Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
}
