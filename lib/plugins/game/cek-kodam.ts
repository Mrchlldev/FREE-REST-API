import type { PluginEndpoint } from '@/lib/plugin-types'

const kodams = [
  'Buaya Darat',
  'Macan Putih',
  'Naga Hitam',
  'Elang Api',
  'Harimau Selatan',
  'Kucing Oren',
  'Serigala Bulan',
  'Paus Darat',
  'Garuda Emas'
]

const plugin: PluginEndpoint = {
  title: 'Cek Kodam',
  slug: 'cek-kodam',
  category: 'game',
  icon: 'Gamepad2',
  method: 'GET',
  bodyType: 'query',
  path: '/api/game/cek-kodam',
  description: 'Endpoint hiburan untuk mengecek kodam random berdasarkan nama.',
  tags: ['game', 'fun'],

  parameters: [
    {
      name: 'text',
      type: 'text',
      required: true,
      description: 'Nama yang ingin dicek kodamnya.',
      example: 'Mrchlldev'
    }
  ],

  async run(params) {
    const text = String(params.text || '').trim()

    if (!text) {
      return {
        status: false,
        code: 400,
        message: 'Parameter text wajib diisi'
      }
    }

    const idx =
      text
        .split('')
        .reduce((a, c) => a + c.charCodeAt(0), 0) % kodams.length

    return {
      status: true,
      code: 200,
      creator: 'Com1',
      result: {
        name: text,
        kodam: kodams[idx],
        aura: `${55 + idx * 6}%`
      }
    }
  }
}

export default plugin
