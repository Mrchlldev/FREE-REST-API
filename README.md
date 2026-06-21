# Com1 Rest API

Website Rest API gratis tanpa apikey, tanpa autentikasi, dan tanpa limit request.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Shadcn UI style components
- AOS Animate on Scroll
- Montserrat untuk title, Poppins untuk body

## Install
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run start
```

## Struktur Endpoint Otomatis
Plugin endpoint disimpan di:

```txt
lib/plugins/[category]/[endpoint].ts
```

Contoh:

```txt
lib/plugins/game/cek-kodam.ts
```

Setelah menambah plugin, jalankan:

```bash
npm run generate:plugins
```

Script akan membuat `lib/generated-plugins.ts` otomatis berisi daftar endpoint dan category.

## Format Plugin
```ts
import type { PluginEndpoint } from '@/lib/plugin-types'

const endpoint: PluginEndpoint = {
  title: 'Cek Kodam',
  slug: 'cek-kodam',
  category: 'game',
  method: 'GET',
  path: '/api/game/cek-kodam',
  description: 'Cek kodam hiburan.',
  parameters: [{ name: 'text', type: 'string', required: true, description: 'Nama', example: 'Mrchlldev' }],
  async run(params) {
    return { status: true, code: 200, result: params.text }
  }
}
export default endpoint
```

## Cara Pakai Endpoint
```bash
curl "https://domain.com/api/game/cek-kodam?text=Mrchlldev"
```

## Setting Website
Semua teks utama, meta tag, fitur, FAQ, footer, contact, terms, privacy, dan disclaimer ada di:

```txt
lib/site.ts
```

`og:image` memakai `/public/og-image.png`. Ganti file tersebut sesuai branding kamu.

## Deploy Vercel
Upload repo ke GitHub, lalu import ke Vercel. Build command default:

```bash
npm run build
```
