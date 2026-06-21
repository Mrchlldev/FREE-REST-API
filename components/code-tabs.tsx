'use client'
import { Tabs,TabsContent,TabsList,TabsTrigger } from '@/components/ui/tabs'; import { CodeBlock } from '@/components/code-block'
export function samples(url:string){return {curl:`curl "${url}"`,javascript:`const res = await fetch('${url}')
const data = await res.json()
console.log(data)`,python:`import requests
res = requests.get('${url}')
print(res.json())`,go:`package main
import (
  "fmt"
  "io"
  "net/http"
)
func main() {
  res, _ := http.Get("${url}")
  body, _ := io.ReadAll(res.Body)
  fmt.Println(string(body))
}`,php:`<?php
$res = file_get_contents('${url}');
echo $res;`}}
export function CodeTabs({url}:{url:string}){const s=samples(url); return <Tabs defaultValue="javascript" className="rounded-3xl border bg-card p-3 shadow-xl shadow-primary/5"><TabsList className="flex h-auto flex-wrap justify-start rounded-2xl bg-secondary/70 p-1.5"><TabsTrigger value="curl" className="rounded-xl">cURL</TabsTrigger><TabsTrigger value="javascript" className="rounded-xl">Javascript</TabsTrigger><TabsTrigger value="python" className="rounded-xl">Python</TabsTrigger><TabsTrigger value="go" className="rounded-xl">Go</TabsTrigger><TabsTrigger value="php" className="rounded-xl">PHP</TabsTrigger></TabsList>{Object.entries(s).map(([k,v])=><TabsContent key={k} value={k}><CodeBlock code={v} title={k}/></TabsContent>)}</Tabs>}
