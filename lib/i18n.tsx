'use client'
import React, {createContext, useContext, useEffect, useState} from 'react'

type Lang = 'id'|'en'
type Ctx = {lang:Lang; setLang:(v:Lang)=>void; tr:(id:string,en:string)=>string}
const I18nContext = createContext<Ctx>({lang:'id', setLang:()=>{}, tr:(id,en)=>id})
export function I18nProvider({children}:{children:React.ReactNode}){
  const [lang,setLangState]=useState<Lang>('id')
  useEffect(()=>{ const saved=localStorage.getItem('com1-lang') as Lang|null; if(saved==='id'||saved==='en') setLangState(saved) },[])
  const setLang=(v:Lang)=>{ setLangState(v); localStorage.setItem('com1-lang',v) }
  const tr=(id:string,en:string)=> lang==='id'?id:en
  return <I18nContext.Provider value={{lang,setLang,tr}}>{children}</I18nContext.Provider>
}
export function useI18n(){return useContext(I18nContext)}
export function T({id,en,className}:{id:string;en:string;className?:string}){const {tr}=useI18n(); return <span className={className}>{tr(id,en)}</span>}
