'use client'
import Link from 'next/link'
import { Boxes, FileText, Home, Languages, Mail, Menu, Search, Sparkles, X, BookOpen } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/theme-toggle'
import { categories, plugins } from '@/lib/generated-plugins'
import { titleCase } from '@/lib/utils'
import { useI18n, T } from '@/lib/i18n'
import { site } from '@/lib/site'

export function Header(){
  const {lang,setLang}=useI18n()
  const [q,setQ]=useState('')
  const endpointResults = useMemo(()=>plugins.filter(p=>`${p.title} ${p.slug} ${p.category} ${p.description}`.toLowerCase().includes(q.toLowerCase())).slice(0,8),[q])
  return <header className="sticky top-0 z-40 border-b bg-background/75 backdrop-blur-2xl">
    <div className="container flex h-20 items-center justify-between">
      <Link href="/" className="group flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition group-hover:rotate-6"><Sparkles className="h-5 w-5"/></span><span className="font-title text-2xl font-black tracking-tight">{site.name}</span></Link>
      <nav className="hidden items-center gap-1 md:flex">{site.nav.map(i=><Button key={i.href} asChild variant="ghost" className="rounded-full"><Link href={i.href}>{i.label}</Link></Button>)}</nav>
      <div className="flex items-center gap-2"><Button variant="outline" size="sm" className="rounded-full" onClick={()=>setLang(lang==='id'?'en':'id')}><Languages className="h-4 w-4"/>{lang.toUpperCase()}</Button><ThemeToggle/><Sheet><SheetTrigger asChild><Button variant="outline" size="icon" className="rounded-full"><Menu className="h-5 w-5"/></Button></SheetTrigger><SheetContent className="w-[390px] overflow-y-auto border-r bg-card/95 p-0 backdrop-blur-2xl">
        <div className="relative overflow-hidden border-b p-6 soft-grid"><div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/15 blur-3xl"/><SheetClose asChild><Button variant="ghost" size="icon" className="absolute right-4 top-4 rounded-full"><X className="h-5 w-5"/></Button></SheetClose><div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30"><Sparkles className="h-5 w-5"/></div><h2 className="font-title text-3xl font-black">{site.name}</h2><p className="mt-2 text-sm text-muted-foreground"><T id="Cari kategori atau endpoint REST API dengan cepat." en="Search REST API categories or endpoints quickly."/></p></div>
        <div className="sticky top-0 z-10 border-b bg-card/90 p-4 backdrop-blur-xl"><div className="relative"><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/><Input value={q} onChange={e=>setQ(e.target.value)} className="h-12 rounded-2xl pl-11" placeholder="Search endpoint..."/></div></div>
        <nav className="space-y-3 p-5">
          <div className="grid grid-cols-2 gap-3"><SheetClose asChild><Link className="flex items-center gap-2 rounded-2xl border bg-background p-4 transition hover:-translate-y-0.5 hover:bg-accent" href="/"><Home className="h-4 w-4 text-primary"/><T id="Beranda" en="Home"/></Link></SheetClose><SheetClose asChild><Link className="flex items-center gap-2 rounded-2xl border bg-background p-4 transition hover:-translate-y-0.5 hover:bg-accent" href="/docs"><FileText className="h-4 w-4 text-primary"/><T id="Docs" en="Docs"/></Link></SheetClose><SheetClose asChild><Link className="flex items-center gap-2 rounded-2xl border bg-background p-4 transition hover:-translate-y-0.5 hover:bg-accent" href="/guide"><BookOpen className="h-4 w-4 text-primary"/><T id="Guide" en="Guide"/></Link></SheetClose><SheetClose asChild><Link className="flex items-center gap-2 rounded-2xl border bg-background p-4 transition hover:-translate-y-0.5 hover:bg-accent" href="/contact"><Mail className="h-4 w-4 text-primary"/><T id="Kontak" en="Contact"/></Link></SheetClose></div>
          {q && <div className="rounded-3xl border bg-background p-3"><p className="mb-2 px-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Endpoint</p>{endpointResults.length?endpointResults.map(p=><SheetClose asChild key={`${p.category}-${p.slug}`}><Link href={`/docs/${p.category}/${p.slug}`} className="flex items-center justify-between rounded-2xl p-3 transition hover:bg-accent"><span><span className="block font-semibold">{p.title}</span><span className="text-xs text-muted-foreground">{p.path}</span></span><span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-bold text-primary">{p.method}</span></Link></SheetClose>):<p className="px-2 py-3 text-sm text-muted-foreground">No endpoint found.</p>}</div>}
          <div className="pt-2 text-xs font-bold uppercase tracking-widest text-muted-foreground"><T id="Kategori" en="Categories"/></div>{categories.map(c=><SheetClose asChild key={c.slug}><Link href={`/docs/${c.slug}`} className="group flex items-center justify-between rounded-3xl border bg-background p-4 transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent hover:shadow-lg hover:shadow-primary/5"><span className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/10 text-primary"><Boxes className="h-4 w-4"/></span><span className="font-semibold">{titleCase(c.slug)}</span></span><span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-muted-foreground">{c.count}</span></Link></SheetClose>)}
        </nav>
      </SheetContent></Sheet></div>
    </div>
  </header>
}
