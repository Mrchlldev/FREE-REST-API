'use client'
import React, {createContext, useContext, useEffect, useState} from 'react'

type Lang = 'id'|'en'
type Ctx = {lang:Lang; setLang:(v:Lang)=>void; tr:(id:string,en:string)=>string}
const I18nContext = createContext<Ctx>({lang:'id', setLang:()=>{}, tr:(id,en)=>id})
const dict: Record<string,string> = {
  'Kembali ke Docs':'Back to Docs','Kembali ke Category':'Back to Category','Lihat Example':'View Example','Lihat Module':'View Module','Buka Docs':'Open Docs','Coba Endpoint':'Try Endpoint','Kategori':'Categories','Kontak':'Contact','Beranda':'Home','Dokumentasi':'Documentation','Cari kategori atau endpoint REST API dengan cepat.':'Search REST API categories or endpoints quickly.','Endpoint tidak ditemukan.':'Endpoint not found.','endpoint tersedia di kategori ini. Gunakan search untuk menemukan endpoint lebih cepat.':'endpoints available in this category. Use search to find endpoints faster.','Semua endpoint bebas digunakan tanpa apikey, tanpa autentikasi, dan tanpa limit request.':'All endpoints are free to use without apikey, authentication, or request limits.','Informasi dibuat ringkas, lengkap, dan mudah dipahami untuk pengguna Com1 REST API.':'Information is written to be concise, complete, and easy to understand for Com1 REST API users.','Total kategori endpoint yang terdeteksi otomatis.':'Total endpoint categories detected automatically.','Total endpoint aktif dari sistem plugin.':'Total active endpoints from the plugin system.','Fitur utama Com1 untuk dokumentasi dan testing endpoint.':'Main Com1 features for endpoint documentation and testing.','Klik Run Endpoint untuk melihat respon dalam Modal Pop Up.':'Click Run Endpoint to view the response in a Modal Pop Up.','Klik Run Endpoint untuk melihat respon.':'Click Run Endpoint to view the response.','Module yang tersedia':'Available modules','Endpoint aktif otomatis':'Automatically active endpoints','Contoh respons JSON':'JSON response example','Tidak ada apikey':'No apikey','Tanpa Apikey':'Without Apikey','Tanpa Limit Request':'Without Request Limit','Gratis tanpa':'Free without','maupun':'or','Platfrom':'Platform','endpoint tersedia':'endpoints available','API yang siap dipakai':'Ready-to-use APIs','Kategori endpoint aktif':'Active endpoint categories','Cari endpoint':'Search endpoint'
}
function applyLang(lang:Lang){
  if(typeof document==='undefined') return
  const walker=document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
  const nodes:Text[]=[]; while(walker.nextNode()) nodes.push(walker.currentNode as Text)
  nodes.forEach(n=>{
    const parent=n.parentElement; if(!parent || ['SCRIPT','STYLE','TEXTAREA','INPUT','PRE','CODE'].includes(parent.tagName)) return
    const orig=(n as any).__origText ?? n.nodeValue ?? ''; (n as any).__origText=orig
    if(lang==='id'){ n.nodeValue=orig; return }
    let out=orig
    Object.entries(dict).forEach(([id,en])=>{ out=out.replaceAll(id,en) })
    n.nodeValue=out
  })
}
export function I18nProvider({children}:{children:React.ReactNode}){
  const [lang,setLangState]=useState<Lang>('id')
  useEffect(()=>{ const saved=localStorage.getItem('com1-lang') as Lang|null; if(saved==='id'||saved==='en') setLangState(saved) },[])
  useEffect(()=>{ setTimeout(()=>applyLang(lang), 50) },[lang])
  const setLang=(v:Lang)=>{ setLangState(v); localStorage.setItem('com1-lang',v); setTimeout(()=>applyLang(v), 0) }
  const tr=(id:string,en:string)=> lang==='id'?id:en
  return <I18nContext.Provider value={{lang,setLang,tr}}>{children}</I18nContext.Provider>
}
export function useI18n(){return useContext(I18nContext)}
export function T({id,en,className}:{id:string;en:string;className?:string}){const {tr}=useI18n(); return <span className={className}>{tr(id,en)}</span>}
