import Link from 'next/link'
import * as Icons from 'lucide-react'
import { site } from '@/lib/site'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { categories, plugins } from '@/lib/generated-plugins'
import { CodeBlock } from '@/components/code-block'

export default function Page() {
  const domainCode = site.hero.code.replaceAll('{DOMAIN}', site.domain)
  return <>
    <section className="relative w-full overflow-hidden border-b soft-grid">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--primary)/.18),transparent_32%),linear-gradient(to_bottom,hsl(var(--primary)/.08),transparent_65%)]" />
      <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full hero-orb blur-3xl md:h-[32rem] md:w-[32rem]" />
      <div className="container relative max-w-7xl px-4 py-16 sm:px-6 md:py-28">
        <div className="grid min-w-0 gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="min-w-0" data-aos="modern-up">
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border bg-card/85 px-4 py-2 text-sm font-semibold shadow-lg shadow-primary/5"><Icons.Sparkles className="h-4 w-4 shrink-0 text-primary"/><span className="truncate">{site.hero.badge}</span></div>
            <h1 className="max-w-4xl break-words text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">{site.hero.title.before} <span className="gradient-text">{site.hero.title.api}</span> {site.hero.title.middle} <span className="gradient-text">{site.hero.title.key}</span> {site.hero.title.last} <span className="gradient-text">{site.hero.title.limit}</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{site.hero.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Button asChild size="lg" className="w-full rounded-full sm:w-auto"><Link href="/docs"><Icons.BookOpen className="h-5 w-5"/>{site.hero.cta}</Link></Button><Button asChild size="lg" variant="outline" className="w-full rounded-full sm:w-auto"><Link href="/guide"><Icons.Route className="h-5 w-5"/>{site.hero.secondaryCta}</Link></Button></div>
            <div className="mt-10 grid min-w-0 gap-4 sm:grid-cols-2"><Card className="glass-card min-w-0 text-left"><CardHeader><div className="flex min-w-0 items-center gap-3"><Icons.Layers3 className="h-8 w-8 shrink-0 text-primary"/><CardTitle className="break-words">{categories.length} {site.stats.categories.title}</CardTitle></div><CardDescription>{site.stats.categories.description}</CardDescription></CardHeader></Card><Card className="glass-card min-w-0 text-left"><CardHeader><div className="flex min-w-0 items-center gap-3"><Icons.Route className="h-8 w-8 shrink-0 text-primary"/><CardTitle className="break-words">{plugins.length} {site.stats.endpoints.title}</CardTitle></div><CardDescription>{site.stats.endpoints.description}</CardDescription></CardHeader></Card></div>
          </div>
          <div data-aos="modern-up" data-aos-delay="120" className="min-w-0 space-y-5">
            <div className="w-full overflow-hidden rounded-[2rem] border bg-zinc-950 text-zinc-100 shadow-2xl shadow-primary/10"><div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3"><span className="h-3 w-3 shrink-0 rounded-full bg-red-500"/><span className="h-3 w-3 shrink-0 rounded-full bg-yellow-500"/><span className="h-3 w-3 shrink-0 rounded-full bg-green-500"/><span className="ml-2 truncate text-xs text-zinc-400">com1-terminal</span></div><div className="space-y-3 overflow-x-auto p-5 font-code text-sm">{site.hero.terminal.map((line, i) => <p key={line} className={i === site.hero.terminal.length - 1 ? 'terminal-cursor whitespace-nowrap text-primary' : 'whitespace-nowrap text-zinc-300'}>{line}</p>)}</div></div>
            <div className="min-w-0 overflow-hidden"><CodeBlock code={domainCode} title="Javascript Example" /></div>
          </div>
        </div>
      </div>
    </section>
    <section id="features" className="container max-w-7xl px-4 py-20 sm:px-6"><div data-aos="modern-up" className="mb-10 max-w-2xl"><h2 className="text-3xl font-black tracking-tight md:text-5xl">REST API Features</h2><p className="mt-3 text-muted-foreground">Fitur utama Com1 untuk dokumentasi dan testing endpoint publik.</p></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{site.features.map((f: any, i) => {const Icon = (Icons as any)[f.icon] || Icons.Boxes; return <Card data-aos="modern-up" data-aos-delay={i * 70} key={f.title} className="modern-card min-w-0"><CardHeader><span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon className="h-6 w-6" /></span><CardTitle className="break-words">{f.title}</CardTitle><CardDescription>{f.description}</CardDescription></CardHeader></Card>})}</div></section>
    <section className="container max-w-3xl px-4 py-16 sm:px-6"><h2 data-aos="modern-up" className="mb-6 text-3xl font-black tracking-tight md:text-5xl">FAQ</h2><Accordion type="single" collapsible>{site.faq.map((f, i) => <AccordionItem data-aos="modern-up" key={f.q} value={`item-${i}`}><AccordionTrigger>{f.q}</AccordionTrigger><AccordionContent>{f.a}</AccordionContent></AccordionItem>)}</Accordion></section>
  </>
}
