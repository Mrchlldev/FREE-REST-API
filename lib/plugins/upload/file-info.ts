import type { PluginEndpoint } from '@/lib/plugin-types'

const plugin: PluginEndpoint = {
  title: 'File Info',
  slug: 'file-info',
  category: 'upload',
  icon: 'FileUp',
  method: 'POST',
  bodyType: 'form-data',
  path: '/api/upload/file-info',
  description: 'Membaca metadata file dari form-data dan mengembalikan nama, tipe, serta ukuran file.',
  tags: ['upload', 'form-data', 'file'],
  parameters: [
    { name: 'title', type: 'text', required: true, description: 'Judul atau nama request upload.', example: 'Test Upload' },
    { name: 'file', type: 'file', required: true, description: 'File yang ingin dicek metadata-nya.', maxSizeMB: 5, accept: '*/*' }
  ],
  async run(params) {
    const file = params.file as File
    return { status: true, code: 200, creator: 'Com1', result: { title: params.title, file: { name: file.name, type: file.type || 'application/octet-stream', size: file.size, size_mb: Number((file.size / 1024 / 1024).toFixed(3)) } } }
  }
}
export default plugin
