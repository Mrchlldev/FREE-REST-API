'use client'
import Link from 'next/link'
import { Boxes, FileText, Home, Mail, Menu, Search, Sparkles, X, BookOpen, LayoutGrid, Route } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/theme-toggle'
import { categories, plugins } from '@/lib/generated-plugins'
import { titleCase } from '@/lib/utils'
import { site } from '@/lib/site'

export function Header(){
  const [q,setQ]=useState('')
  const endpointResults = useMemo(()=>plugins.filter(p=>`${p.title} ${p.slug} ${p.category} ${p.description}`.toLowerCase().includes(q.toLowerCase())).slice(0,10),[q])
  return <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-2xl">
    <div className="container flex h-20 items-center justify-between gap-3">
      <Link href="/" className="group flex min-w-0 items-center gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition group-hover:rotate-6 group-hover:scale-105"><Sparkles className="h-5 w-5"/></span>
        <span className="truncate font-title text-2xl font-black tracking-tight">{site.name}</span>
      </Link>
      <nav className="hidden items-center gap-1 lg:flex">{site.nav.map(i=><Button key={i.href} asChild variant="ghost" className="rounded-full"><Link href={i.href}>{i.label}</Link></Button>)}</nav>
      <div className="flex items-center gap-2"><ThemeToggle/><Sheet><SheetTrigger asChild><Button variant="outline" size="icon" className="rounded-full"><Menu className="h-5 w-5"/></Button></SheetTrigger><SheetContent className="w-[420px] overflow-y-auto bg-card/95 p-0 backdrop-blur-2xl">
        <div className="relative overflow-hidden border-b p-6 soft-grid">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/20 blur-3xl"/>
          <SheetClose asChild><Button variant="outline" size="icon" className="absolute right-4 top-4 z-10 rounded-full"><X className="h-5 w-5"/></Button></SheetClose>
          <div className="relative mb-4 grid h-14 w-14 place-items-center rounded-3xl bg-primary text-primary-foreground shadow-lg shadow-primary/30"><Sparkles className="h-6 w-6"/></div>
          <h2 className="relative font-title text-3xl font-black">{site.name}</h2>
          <p className="relative mt-2 text-sm leading-6 text-muted-foreground">Cari kategori dan endpoint REST API publik dengan cepat.</p>
        </div>
        <div className="sticky top-0 z-10 border-b bg-card/90 p-4 backdrop-blur-xl"><div className="relative"><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/><Input value={q} onChange={e=>setQ(e.target.value)} className="h-12 rounded-2xl pl-11" placeholder="Search endpoint..."/></div></div>
        <nav className="space-y-4 p-5">
          <div className="grid grid-cols-2 gap-3">
            {[{href:'/',label:'Home',icon:Home},{href:'/docs',label:'Docs',icon:FileText},{href:'/docs/browse',label:'Browse',icon:LayoutGrid},{href:'/guide',label:'Guide',icon:BookOpen},{href:'/contact',label:'Contact',icon:Mail}].map(item=>{const Icon=item.icon; return <SheetClose asChild key={item.href}><Link className="flex items-center gap-2 rounded-2xl border bg-background p-4 font-semibold transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent" href={item.href}><Icon className="h-4 w-4 text-primary"/>{item.label}</Link></SheetClose>})}
          </div>
          {q && <div className="rounded-3xl border bg-background p-3 shadow-xl shadow-primary/5"><p className="mb-2 px-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Endpoint Result</p>{endpointResults.length?endpointResults.map(p=><SheetClose asChild key={`${p.category}-${p.slug}`}><Link href={`/docs/${p.category}/${p.slug}`} className="flex items-center justify-between gap-3 rounded-2xl p-3 transition hover:bg-accent"><span className="min-w-0"><span className="block truncate font-semibold">{p.title}</span><span className="block truncate font-code text-xs text-muted-foreground">{p.path}</span></span><span className="shrink-0 rounded-full bg-primary/10 px-2 py-1 text-xs font-bold text-primary">{p.method}</span></Link></SheetClose>):<p className="px-2 py-3 text-sm text-muted-foreground">No endpoint found.</p>}</div>}
          <div className="pt-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Categories</div>
          <div className="grid gap-3">{categories.map(c=><SheetClose asChild key={c.slug}><Link href={`/docs/${c.slug}`} className="group flex items-center justify-between rounded-3xl border bg-background p-4 transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent hover:shadow-lg hover:shadow-primary/5"><span className="flex min-w-0 items-center gap-3"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary"><Boxes className="h-5 w-5"/></span><span className="truncate font-bold">{titleCase(c.slug)}</span></span><span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-muted-foreground">{c.count}</span></Link></SheetClose>)}</div>
          <div className="rounded-3xl border bg-primary/10 p-4 text-sm text-primary"><Route className="mb-2 h-5 w-5"/><b>{plugins.length} endpoint</b> siap dipakai tanpa apikey.</div>
        </nav>
      </SheetContent></Sheet></div>
    </div>
  </header>
}
