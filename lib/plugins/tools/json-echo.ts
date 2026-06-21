import type { PluginEndpoint } from '@/lib/plugin-types'

const plugin: PluginEndpoint = {
  title: 'JSON Echo',
  slug: 'json-echo',
  category: 'tools',
  icon: 'Braces',
  method: 'POST',
  bodyType: 'json',
  path: '/api/tools/json-echo',
  description: 'Menerima body JSON dan mengembalikan data yang dikirim sebagai respons JSON.',
  tags: ['json', 'post', 'tools'],
  parameters: [
    { name: 'name', type: 'text', required: true, description: 'Nama pengguna atau label data.', example: 'Mrchlldev' },
    { name: 'message', type: 'textarea', required: true, description: 'Pesan yang akan dikembalikan oleh endpoint.', example: 'Halo dari Com1 API' },
    { name: 'email', type: 'email', required: false, description: 'Email opsional untuk contoh input email.', example: 'mrchlldev@gmail.com' }
  ],
  async run(params) {
    return { status: true, code: 200, creator: 'Com1', result: { received: params, type: 'json-body' } }
  }
}
export default plugin
