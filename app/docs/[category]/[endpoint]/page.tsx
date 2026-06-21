import Link from 'next/link'
import { ArrowLeft, BadgeInfo, CircleCheck, Code2, Info, ListChecks, Play, Server, ShieldAlert, AlertTriangle, XCircle, FileJson, UploadCloud } from 'lucide-react'
import { notFound } from 'next/navigation'
import { findPlugin } from '@/lib/generated-plugins'
import { Card,CardContent,CardHeader,CardTitle } from '@/components/ui/card'
import { Tabs,TabsContent,TabsList,TabsTrigger } from '@/components/ui/tabs'
import { CodeTabs } from '@/components/code-tabs'
import { Playground } from './playground'
import { Button } from '@/components/ui/button'
import { CodeBlock } from '@/components/code-block'
import { site } from '@/lib/site'

const status = [
  { code: 200, label: 'Success', icon: CircleCheck, cls: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
  { code: 400, label: 'Bad Request', icon: AlertTriangle, cls: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400' },
  { code: 404, label: 'Endpoint Not Found', icon: XCircle, cls: 'border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400' },
  { code: 413, label: 'File Too Large', icon: UploadCloud, cls: 'border-orange-500/30 bg-orange-500/10 text-orange-600 dark:text-orange-400' },
  { code: 500, label: 'Internal Server Error', icon: ShieldAlert, cls: 'border-zinc-500/30 bg-zinc-500/10 text-zinc-600 dark:text-zinc-300' }
]

export default async function Endpoint({params}:{params:Promise<{category:string;endpoint:string}>}){
  const {category,endpoint}=await params
  const plugin=findPlugin(category,endpoint)
  if(!plugin) return notFound()
  const bodyType = plugin.bodyType || 'query'
  const query=plugin.method==='GET' ? plugin.parameters.map((p:any)=>`${p.name}=${encodeURIComponent(p.example||'value')}`).join('&') : ''
  const url=`${site.domain}${plugin.path}${query ? `?${query}` : ''}`
  const body = Object.fromEntries(plugin.parameters.filter((p:any)=>!['file','image','audio','video'].includes(p.type)).map((p:any)=>[p.name,p.example||'value']))
  const result=JSON.stringify({status:true,code:200,creator:'Com1',result:{message:'Endpoint executed successfully'}},null,2)
  return <section className="container py-10 md:py-16">
    <Button asChild variant="outline" className="mb-6 rounded-full"><Link href={`/docs/${plugin.category}`}><ArrowLeft className="h-4 w-4"/>Kembali ke Category</Link></Button>
    <div data-aos="modern-up" className="relative overflow-hidden rounded-[2rem] border bg-card p-6 shadow-2xl shadow-primary/5 md:p-10 soft-grid"><div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl"/><div className="relative"><div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm font-bold"><Server className="h-4 w-4 shrink-0 text-primary"/><span className="truncate">{plugin.method} • {plugin.path}</span></div><h1 className="break-words text-4xl md:text-6xl">{plugin.title}</h1><p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{plugin.description}</p><div className="mt-5 flex flex-wrap gap-2"><span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{plugin.method}</span><span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-muted-foreground">{bodyType}</span><span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-muted-foreground">JSON Response</span></div></div></div>
    <Tabs defaultValue="info" className="mt-8"><TabsList className="flex h-auto w-full flex-wrap justify-start rounded-3xl border bg-card p-2 shadow-xl shadow-primary/5"><TabsTrigger value="info" className="rounded-2xl px-5 py-3"><Info className="mr-2 h-4 w-4"/>Info</TabsTrigger><TabsTrigger value="example" className="rounded-2xl px-5 py-3"><Code2 className="mr-2 h-4 w-4"/>Example</TabsTrigger><TabsTrigger value="playground" className="rounded-2xl px-5 py-3"><Play className="mr-2 h-4 w-4"/>Playground</TabsTrigger></TabsList>
      <TabsContent value="info" className="mt-6"><div className="grid gap-5 md:grid-cols-2"><Card className="modern-card"><CardHeader><CardTitle className="flex items-center gap-2"><BadgeInfo className="h-5 w-5 text-primary"/>Endpoint Info</CardTitle></CardHeader><CardContent className="space-y-3 text-sm"><p><b>Method:</b> {plugin.method}</p><p><b>Body Type:</b> {bodyType}</p><p><b>Path:</b> <span className="font-code">{plugin.path}</span></p><p><b>Category:</b> {plugin.category}</p><p><b>Response:</b> JSON</p></CardContent></Card><Card className="modern-card"><CardHeader><CardTitle className="flex items-center gap-2"><FileJson className="h-5 w-5 text-primary"/>Status Code</CardTitle></CardHeader><CardContent className="grid gap-2 text-sm">{status.map(s=>{const Icon=s.icon; return <p key={s.code} className={`flex items-center gap-2 rounded-xl border p-3 font-semibold ${s.cls}`}><Icon className="h-4 w-4"/>{s.code} - {s.label}</p>})}</CardContent></Card></div><Card className="modern-card mt-5"><CardHeader><CardTitle className="flex items-center gap-2"><ListChecks className="h-5 w-5 text-primary"/>Parameters</CardTitle></CardHeader><CardContent><div className="overflow-x-auto rounded-2xl border"><table className="w-full text-sm"><thead className="bg-secondary/60"><tr className="text-left"><th className="p-3">Name</th><th className="p-3">Type</th><th className="p-3">Required</th><th className="p-3">Max Size</th><th className="p-3">Description</th></tr></thead><tbody>{plugin.parameters.map((p:any)=><tr className="border-t" key={p.name}><td className="p-3 font-bold">{p.name}</td><td className="p-3">{p.type}</td><td className="p-3">{p.required?'Yes':'No'}</td><td className="p-3">{p.maxSizeMB?`${p.maxSizeMB}MB`:'-'}</td><td className="p-3 text-muted-foreground">{p.description}</td></tr>)}</tbody></table></div></CardContent></Card></TabsContent>
      <TabsContent value="example" className="mt-6"><CodeTabs url={url} method={plugin.method} bodyType={bodyType as any} body={body}/><h2 className="mb-4 mt-8 text-3xl">Example Result</h2><CodeBlock code={result} title="JSON Response"/></TabsContent>
      <TabsContent value="playground" className="mt-6"><Playground plugin={{ title: plugin.title, path: plugin.path, method: plugin.method, bodyType: bodyType as any, parameters: plugin.parameters }}/></TabsContent>
    </Tabs>
  </section>
}
