# Com1 REST API

Com1 adalah website dokumentasi REST API gratis tanpa apikey, tanpa autentikasi, dan tanpa limit request internal. Project ini dibuat dengan Next.js, TypeScript, Tailwind CSS, dan komponen Shadcn UI.

## Fitur Utama

- Landing Page modern dengan statistic module dan endpoint.
- Docs page dengan contoh request multi bahasa.
- Browse page untuk melihat semua kategori.
- Category page dengan Search Endpoint.
- Endpoint page dengan tab Info, Example, dan Playground.
- Playground mendukung GET, POST JSON, dan POST form-data.
- Input otomatis berdasarkan tipe parameter.
- Upload file dengan validasi maksimal ukuran file.
- Modal response success/error dengan tombol Copy.
- Theme picker grid dan dark/light mode.
- Sistem plugin otomatis dari `lib/plugins/[category]/[endpoint].ts`.

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Generate Plugin

```bash
npm run generate:plugins
```

Script ini akan membaca semua plugin dari `lib/plugins/*/*.ts` dan membuat `lib/generated-plugins.ts`.

## Struktur Plugin

```ts
import type { PluginEndpoint } from '@/lib/plugin-types'

const plugin: PluginEndpoint = {
  title: 'Cek Kodam',
  slug: 'cek-kodam',
  category: 'game',
  method: 'GET',
  bodyType: 'query',
  path: '/api/game/cek-kodam',
  description: 'Endpoint hiburan untuk mengecek kodam random.',
  parameters: [
    { name: 'text', type: 'text', required: true, description: 'Nama.', example: 'Mrchlldev' }
  ],
  async run(params) {
    return { status: true, code: 200, result: params }
  }
}

export default plugin
```

## Method dan Body Type

### GET

Gunakan `bodyType: "query"`.

```txt
/api/game/cek-kodam?text=Mrchlldev
```

### POST JSON

Gunakan `bodyType: "json"`.

```ts
method: 'POST',
bodyType: 'json'
```

### POST Form Data

Gunakan `bodyType: "form-data"`, cocok untuk upload file.

```ts
{ name: 'file', type: 'file', required: true, maxSizeMB: 5 }
```

## Tipe Input Parameter

- `text`
- `string`
- `number`
- `boolean`
- `textarea`
- `password`
- `email`
- `url`
- `file`
- `image`
- `audio`
- `video`

## Setting Website

Semua teks utama dan domain bisa diubah di:

```txt
lib/site.ts
```

Author/Developer default:

- Marcellino F.A (Mrchlldev)
- Email: `mrchlldev@gmail.com`
- Telegram: `https://t.me/mrchllabimanyu`
- GitHub: `https://github.com/Mrchlldev`

## Deploy Vercel

Project bisa langsung dideploy ke Vercel. Pastikan build command:

```bash
npm run build
```

Output framework otomatis dikenali sebagai Next.js.
