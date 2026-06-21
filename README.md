# Com1 Rest API

Com1 adalah website dokumentasi REST API gratis tanpa apikey, tanpa autentikasi, dan tanpa limit request. Project ini dibuat dengan Next.js, TypeScript, Tailwind CSS, dan komponen Shadcn UI.

## Fitur

- Landing Page modern dengan Hero, statistic module/endpoint, terminal typewriter, contoh request, feature card, dan FAQ.
- Dokumentasi endpoint otomatis dari folder `lib/plugins/[category]/[endpoint].ts`.
- Halaman `/docs`, `/docs/[category]`, dan `/docs/[category]/[endpoint]`.
- Tab endpoint: Info, Example, Playground.
- Playground langsung di halaman endpoint, memakai Source Code Pro, line number, tombol Copy, dan modal respons Success/Error.
- Sidebar modern dengan search endpoint dan daftar category.
- Theme selector: pilih warna tema dan toggle Light/Dark mode.
- Toggle bahasa ID/EN untuk teks website.
- Halaman Guide, Contact, Terms, Privacy Policy, dan Disclaimer.
- Legal content berbentuk array title + description di `lib/site.ts`.

## Instalasi

```bash
npm install
npm run dev
```

Buka:

```txt
http://localhost:3000
```

## Build Production

```bash
npm run build
npm run start
```

## Deploy ke Vercel

1. Upload project ke GitHub.
2. Import repository ke Vercel.
3. Jalankan build command default:

```bash
npm run build
```

4. Output Next.js akan otomatis terdeteksi oleh Vercel.

## Struktur Plugin Endpoint

Semua plugin endpoint ditempatkan di:

```txt
lib/plugins/[category]/[endpoint].ts
```

Contoh:

```txt
lib/plugins/game/cek-kodam.ts
```

Setelah menambah plugin baru, jalankan:

```bash
npm run generate:plugins
```

Saat `npm run build`, script generate otomatis dijalankan.

## Contoh Plugin

```ts
import type { PluginEndpoint } from '@/lib/plugin-types'

const endpoint: PluginEndpoint = {
  title: 'Cek Kodam',
  slug: 'cek-kodam',
  category: 'game',
  icon: 'Shield',
  method: 'GET',
  path: '/api/game/cek-kodam',
  description: 'Cek kodam random berdasarkan nama.',
  tags: ['game', 'fun'],
  parameters: [
    {
      name: 'text',
      type: 'string',
      required: true,
      description: 'Nama yang ingin dicek kodamnya.',
      example: 'Mrchlldev'
    }
  ],
  async run(params) {
    const text = params.text
    if (!text) return { status: false, code: 400, message: 'Parameter text wajib diisi' }

    return {
      status: true,
      code: 200,
      creator: 'Com1',
      result: {
        name: text,
        kodam: 'Macan Putih',
        aura: '77%'
      }
    }
  }
}

export default endpoint
```

## Format URL API

```txt
https://domain.com/api/[category]/[endpoint]?text=Mrchlldev
```

Contoh:

```txt
https://domain.com/api/game/cek-kodam?text=Mrchlldev
```

## Setting Website

Semua teks utama website bisa diedit di:

```txt
lib/site.ts
lib/settings/site.ts
lib/settings/legal.ts
lib/settings/guide.ts
```

`lib/settings/*` disediakan agar setting lebih mudah dicari dan bisa dikembangkan lagi.

## Meta Tag

Meta tag, Open Graph, Twitter Card, favicon, dan `og:image` diatur dari `app/layout.tsx` dan konfigurasi `lib/site.ts`.

## Script Penting

```bash
npm run dev              # menjalankan development server
npm run generate:plugins # generate daftar endpoint otomatis
npm run build            # generate plugin + build production
npm run start            # menjalankan production server
```
