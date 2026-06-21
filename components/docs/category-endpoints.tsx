'use client'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { ExternalLink, Route, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function CategoryEndpoints({items}:{items:any[]}){
  const [q,setQ]=useState('')
  const filtered=useMemo(()=>items.filter(p=>`${p.title} ${p.slug} ${p.description} ${p.path}`.toLowerCase().includes(q.toLowerCase())),[items,q])
  return <div className="mt-8">
    <div data-aos="modern-up" className="relative mb-6 max-w-xl"><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/><Input value={q} onChange={e=>setQ(e.target.value)} className="h-14 rounded-2xl pl-11 text-base" placeholder="Search endpoint in this category..."/></div>
    <div className="grid gap-5 md:grid-cols-2">{filtered.map((p,i)=><Link data-aos="modern-up" data-aos-delay={i*60} key={p.slug} href={`/docs/${p.category}/${p.slug}`}><Card className="modern-card group h-full overflow-hidden"><CardHeader><div className="mb-4 flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:scale-110"><Route className="h-5 w-5"/></span><span className="flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-bold text-muted-foreground">{p.method}<ExternalLink className="h-3.5 w-3.5"/></span></div><CardTitle>{p.title}</CardTitle><CardDescription>{p.description}</CardDescription><p className="mt-3 rounded-2xl bg-secondary/60 px-3 py-2 font-mono text-xs text-muted-foreground">{p.path}</p></CardHeader></Card></Link>)}</div>
    {!filtered.length && <div className="rounded-3xl border bg-card p-8 text-center text-muted-foreground">Endpoint tidak ditemukan.</div>}
  </div>
}
