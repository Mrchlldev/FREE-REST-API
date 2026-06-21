export type InputType = 'text' | 'string' | 'number' | 'boolean' | 'textarea' | 'password' | 'email' | 'url' | 'file' | 'image' | 'audio' | 'video'
export type BodyType = 'query' | 'json' | 'form-data'

export type PluginParameter = {
  name: string
  type: InputType
  required?: boolean
  description: string
  example?: string
  options?: string[]
  maxSizeMB?: number
  accept?: string
}

export type PluginEndpoint = {
  title: string
  slug: string
  category: string
  icon?: string
  method: 'GET' | 'POST'
  bodyType?: BodyType
  path: string
  description: string
  tags?: string[]
  parameters: PluginParameter[]
  run: (params: Record<string, any>) => Promise<any> | any
}
