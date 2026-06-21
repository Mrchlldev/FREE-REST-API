'use client'
import { Tabs,TabsContent,TabsList,TabsTrigger } from '@/components/ui/tabs'
import { CodeBlock } from '@/components/code-block'

type SampleOptions = { method?: 'GET'|'POST'; bodyType?: 'query'|'json'|'form-data'; body?: Record<string,string>; url: string }
export function samples(opts: SampleOptions){
  const method = opts.method || 'GET'
  const bodyType = opts.bodyType || 'query'
  const url = opts.url
  const json = JSON.stringify(opts.body || { name: 'Mrchlldev', message: 'Halo dari Com1 API' }, null, 2)
  if(method==='POST' && bodyType==='json') return {
    curl:`curl -X POST "${url}" \\\n  -H "Content-Type: application/json" \\\n  -d '${json.replace(/'/g,"\\'")}'`,
    javascript:`const res = await fetch('${url}', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify(${json})\n})\nconst data = await res.json()\nconsole.log(data)`,
    python:`import requests\n\npayload = ${json}\nres = requests.post('${url}', json=payload)\nprint(res.json())`,
    go:`package main\nimport (\n  "bytes"\n  "fmt"\n  "io"\n  "net/http"\n)\nfunc main() {\n  body := []byte(\`${json}\`)\n  res, _ := http.Post("${url}", "application/json", bytes.NewBuffer(body))\n  data, _ := io.ReadAll(res.Body)\n  fmt.Println(string(data))\n}`,
    php:`<?php\n$payload = '${json.replace(/'/g,"\\'")}';\n$opts = ['http' => ['method' => 'POST', 'header' => 'Content-Type: application/json', 'content' => $payload]];\necho file_get_contents('${url}', false, stream_context_create($opts));`
  }
  if(method==='POST' && bodyType==='form-data') return {
    curl:`curl -X POST "${url}" \\\n  -F "title=Test Upload" \\\n  -F "file=@/path/to/file.png"`,
    javascript:`const form = new FormData()\nform.append('title', 'Test Upload')\nform.append('file', fileInput.files[0])\n\nconst res = await fetch('${url}', {\n  method: 'POST',\n  body: form\n})\nconst data = await res.json()\nconsole.log(data)`,
    python:`import requests\n\nfiles = {'file': open('file.png', 'rb')}\ndata = {'title': 'Test Upload'}\nres = requests.post('${url}', data=data, files=files)\nprint(res.json())`,
    go:`// Use multipart/form-data with mime/multipart package\n// POST ${url}\n// fields: title, file`,
    php:`<?php\n$curl = curl_init('${url}');\n$post = ['title' => 'Test Upload', 'file' => new CURLFile('file.png')];\ncurl_setopt($curl, CURLOPT_POST, true);\ncurl_setopt($curl, CURLOPT_POSTFIELDS, $post);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\necho curl_exec($curl);`
  }
  return {
    curl:`curl "${url}"`,
    javascript:`const res = await fetch('${url}')\nconst data = await res.json()\nconsole.log(data)`,
    python:`import requests\nres = requests.get('${url}')\nprint(res.json())`,
    go:`package main\nimport (\n  "fmt"\n  "io"\n  "net/http"\n)\nfunc main() {\n  res, _ := http.Get("${url}")\n  body, _ := io.ReadAll(res.Body)\n  fmt.Println(string(body))\n}`,
    php:`<?php\n$res = file_get_contents('${url}');\necho $res;`
  }
}
export function CodeTabs({url, method='GET', bodyType='query', body}:{url:string; method?:'GET'|'POST'; bodyType?:'query'|'json'|'form-data'; body?:Record<string,string>}){const s=samples({url,method,bodyType,body}); return <Tabs defaultValue="javascript" className="rounded-3xl border bg-card p-3 shadow-xl shadow-primary/5"><TabsList className="flex h-auto flex-wrap justify-start rounded-2xl bg-secondary/70 p-1.5"><TabsTrigger value="curl" className="rounded-xl">cURL</TabsTrigger><TabsTrigger value="javascript" className="rounded-xl">Javascript</TabsTrigger><TabsTrigger value="python" className="rounded-xl">Python</TabsTrigger><TabsTrigger value="go" className="rounded-xl">Go</TabsTrigger><TabsTrigger value="php" className="rounded-xl">PHP</TabsTrigger></TabsList>{Object.entries(s).map(([k,v])=><TabsContent key={k} value={k}><CodeBlock code={v} title={k}/></TabsContent>)}</Tabs>}
