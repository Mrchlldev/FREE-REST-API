import type { PluginEndpoint } from '@/lib/plugin-types'

const kodamList = ['Macan Putih','Naga Api','Harimau Biru','Garuda Emas','Kucing Oren','Elang Hitam','Serigala Bulan','Panda Santuy']

const endpoint: PluginEndpoint = {
  title: 'Cek Kodam',
  slug: 'cek-kodam',
  category: 'game',
  icon: 'Gamepad2',
  method: 'GET',
  path: '/api/game/cek-kodam',
  description: 'Cek kodam hiburan berdasarkan nama atau teks.',
  tags: ['fun','game'],
  parameters: [{ name: 'text', type: 'string', required: true, description: 'Nama atau teks yang ingin dicek.', example: 'Mrchlldev' }],
  async run(params) {
    const text = params.text?.trim()
    if (!text) return { status: false, code: 400, message: 'Parameter text wajib diisi' }
    const score = [...text].reduce((a,c)=>a+c.charCodeAt(0),0)
    return { status: true, code: 200, creator: 'Com1', result: { name: text, kodam: kodamList[score % kodamList.length], aura: `${(score % 99) + 1}%` } }
  }
}
export default endpoint
