import Link from 'next/link'
import { ArrowLeft, Boxes, Layers3, Search } from 'lucide-react'
import { plugins } from '@/lib/generated-plugins'
import { titleCase } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { CategoryEndpoints } from '@/components/docs/category-endpoints'

export default async function Category({params}:{params:Promise<{category:string}>}){
  const {category}=await params
  const list=plugins.filter(p=>p.category===category).map(({run,...p}:any)=>p)
  return <section className="container py-10 md:py-16"><Button asChild variant="outline" className="mb-6 rounded-full"><Link href="/docs"><ArrowLeft className="h-4 w-4"/>Kembali ke Docs</Link></Button><div data-aos="modern-up" className="relative overflow-hidden rounded-[2.25rem] border bg-card p-6 shadow-2xl shadow-primary/5 md:p-10 soft-grid"><div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl"/><div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-end"><div><div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm font-bold"><Layers3 className="h-4 w-4 text-primary"/> Module</div><div className="mb-4 grid h-16 w-16 place-items-center rounded-3xl bg-primary/10 text-primary"><Boxes className="h-8 w-8"/></div><h1 className="break-words text-4xl md:text-6xl">{titleCase(category)}</h1><p className="mt-3 max-w-xl text-muted-foreground">{list.length} endpoint tersedia di kategori ini. Gunakan search untuk menemukan endpoint lebih cepat.</p></div><div className="rounded-3xl border bg-background/80 p-5"><Search className="mb-2 h-6 w-6 text-primary"/><p className="text-sm font-bold">Search Ready</p><p className="text-xs text-muted-foreground">Cari endpoint berdasarkan nama, path, atau deskripsi.</p></div></div></div><CategoryEndpoints items={list}/></section>
}
