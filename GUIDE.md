# GUIDE.md — Panduan Com1 REST API

## 1. Buka Dokumentasi
Masuk ke halaman `/docs` untuk melihat total module, total endpoint, contoh request, dan contoh response JSON.

## 2. Browse Kategori
Buka `/docs/browse` atau Sidebar untuk melihat semua kategori endpoint. Klik kategori untuk melihat endpoint di dalamnya.

## 3. Pilih Endpoint
Di halaman kategori, gunakan Search Endpoint untuk mencari endpoint berdasarkan nama, path, atau deskripsi.

## 4. Baca Tab Info
Tab Info berisi method, body type, path, parameter, tipe input, maksimal ukuran file, dan status code.

## 5. Pakai Tab Example
Tab Example menyediakan contoh cURL, JavaScript, Python, Go, dan PHP. Domain contoh mengikuti `site.domain` di `lib/site.ts`.

## 6. Coba Playground
Tab Playground otomatis membuat input sesuai parameter:

- `text`, `string`, `email`, `password`, `number`, `url`
- `textarea`
- `file`, `image`, `audio`, `video`

Untuk endpoint `POST`:

- `bodyType: "json"` akan mengirim JSON body.
- `bodyType: "form-data"` akan mengirim FormData, cocok untuk upload file.

## 7. Menambah Endpoint Baru
Buat file plugin di:

```txt
lib/plugins/[category]/[endpoint].ts
```

Lalu jalankan:

```bash
npm run generate:plugins
```

## 8. Mengubah Domain Website
Edit file:

```txt
lib/site.ts
```

Ubah:

```ts
domain: 'https://com1.example.com'
```

Domain ini akan dipakai di terminal landing page dan semua contoh kode.
