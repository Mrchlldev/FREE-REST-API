'use client'
import { useState } from 'react'
import { Check, Copy, Play, RotateCcw, Terminal, XCircle, CheckCircle2, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

type PlaygroundPlugin = { title:string; path:string; method:'GET'|'POST'; bodyType?:'query'|'json'|'form-data'; parameters:any[] }
function Lines({text}:{text:string}){return <pre className="code-lines max-h-[55vh] overflow-auto p-4 text-sm">{text.split('\n').map((l,i)=><span className="line" key={i}>{l || ' '}</span>)}</pre>}
export function Playground({plugin}:{plugin:PlaygroundPlugin}){
  const [form,setForm]=useState<Record<string,string>>(()=>Object.fromEntries(plugin.parameters.filter((p:any)=>!['file','image','audio','video'].includes(p.type)).map((p:any)=>[p.name,p.example||''])))
  const [files,setFiles]=useState<Record<string,File|null>>({})
  const [result,setResult]=useState('')
  const [ok,setOk]=useState<boolean|null>(null)
  const [open,setOpen]=useState(false)
  const [loading,setLoading]=useState(false)
  const [copied,setCopied]=useState(false)
  async function run(){
    setLoading(true)
    try{
      let res: Response
      if(plugin.method==='GET'){
        const qs=new URLSearchParams(form).toString(); res=await fetch(`${plugin.path}?${qs}`)
      } else if(plugin.bodyType==='json'){
        res=await fetch(plugin.path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)})
      } else {
        const fd=new FormData(); Object.entries(form).forEach(([k,v])=>fd.append(k,v)); Object.entries(files).forEach(([k,v])=>{if(v) fd.append(k,v)}); res=await fetch(plugin.path,{method:'POST',body:fd})
      }
      const data=await res.json(); setOk(res.ok && data?.status !== false); setResult(JSON.stringify(data,null,2)); setOpen(true)
    }catch(e){setOk(false); setResult(JSON.stringify({status:false,code:500,message:'Failed to run endpoint'},null,2)); setOpen(true)} finally{setLoading(false)}
  }
  function reset(){setForm(Object.fromEntries(plugin.parameters.filter((p:any)=>!['file','image','audio','video'].includes(p.type)).map((p:any)=>[p.name,p.example||'']))); setFiles({}); setResult(''); setOk(null)}
  async function copy(){await navigator.clipboard.writeText(result); setCopied(true); setTimeout(()=>setCopied(false),1200)}
  function renderInput(p:any){
    if(['file','image','audio','video'].includes(p.type)) return <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed bg-secondary/40 p-4 transition hover:border-primary/50"><Upload className="h-5 w-5 text-primary"/><span className="min-w-0 flex-1"><span className="block truncate font-semibold">{files[p.name]?.name || `Upload ${p.type}`}</span><span className="block text-xs text-muted-foreground">Max {p.maxSizeMB || 10}MB</span></span><input type="file" className="hidden" accept={p.accept || (p.type==='image'?'image/*':p.type==='audio'?'audio/*':p.type==='video'?'video/*':'*/*')} onChange={e=>setFiles({...files,[p.name]:e.target.files?.[0] || null})}/></label>
    if(p.type==='textarea') return <textarea className="min-h-28 w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" value={form[p.name]||''} placeholder={p.example||p.description} onChange={e=>setForm({...form,[p.name]:e.target.value})}/>
    const type = p.type==='string'?'text':p.type
    return <Input type={type} className="h-12 rounded-2xl" value={form[p.name]||''} placeholder={p.example||p.description} onChange={e=>setForm({...form,[p.name]:e.target.value})}/>
  }
  return <><div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]"><div className="rounded-3xl border bg-card p-5 shadow-xl shadow-primary/5"><h3 className="mb-4 flex items-center gap-2 text-2xl"><Terminal className="h-5 w-5 text-primary"/>Input Playground</h3><div className="space-y-4">{plugin.parameters.map((p:any)=><div key={p.name}><label className="mb-2 block text-sm font-bold">{p.name}{p.required?' *':''}</label>{renderInput(p)}<p className="mt-1 text-xs text-muted-foreground">{p.description}</p></div>)}</div><div className="mt-5 flex flex-wrap gap-3"><Button className="rounded-full" onClick={run} disabled={loading}><Play className="h-4 w-4"/>{loading?'Running...':'Run Endpoint'}</Button><Button className="rounded-full" variant="outline" onClick={reset}><RotateCcw className="h-4 w-4"/>Reset</Button></div></div><div className="overflow-hidden rounded-3xl border bg-card shadow-xl shadow-primary/5"><div className="flex items-center justify-between border-b bg-secondary/60 px-4 py-3"><div><p className="font-bold">Response Preview</p><p className="text-xs text-muted-foreground">Source Code Pro + line number</p></div><Button size="sm" variant="outline" className="rounded-full" onClick={copy} disabled={!result}>{copied?<Check className="h-4 w-4"/>:<Copy className="h-4 w-4"/>}{copied?'Copied':'Copy'}</Button></div>{result?<Lines text={result}/>:<div className="p-8 text-sm text-muted-foreground">Klik Run Endpoint untuk melihat respons dalam Modal Pop Up.</div>}</div></div><Dialog open={open} onOpenChange={setOpen}><DialogContent className="rounded-3xl sm:max-w-3xl"><DialogHeader><DialogTitle className="flex items-center gap-2">{ok?<CheckCircle2 className="h-5 w-5 text-emerald-500"/>:<XCircle className="h-5 w-5 text-destructive"/>}{ok?'Playground Success':'Playground Error'}</DialogTitle></DialogHeader><div className="overflow-hidden rounded-2xl border bg-card"><div className="flex items-center justify-between border-b bg-secondary/60 px-4 py-3"><p className="text-sm font-bold">JSON Response</p><Button size="sm" variant="outline" className="rounded-full" onClick={copy}>{copied?<Check className="h-4 w-4"/>:<Copy className="h-4 w-4"/>}{copied?'Copied':'Copy'}</Button></div><Lines text={result}/></div></DialogContent></Dialog></>
}
