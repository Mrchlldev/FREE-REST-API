export type PluginParameter = { name: string; type: 'string'|'number'|'boolean'; required?: boolean; description: string; example?: string }
export type PluginEndpoint = { title: string; slug: string; category: string; icon?: string; method: 'GET'|'POST'; path: string; description: string; tags?: string[]; parameters: PluginParameter[]; run: (params: Record<string,string>) => Promise<any> | any }
