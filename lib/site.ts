export const site = {
  name: 'Com1',
  url: 'https://domain.com',
  ogImage: '/og-image.png',
  description: 'Com1 menyediakan kumpulan endpoint REST API gratis yang bisa langsung dipakai tanpa apikey, tanpa autentikasi, dan tanpa limit request.',
  nav: [
    { label: 'Docs', href: '/docs' },
    { label: 'Guide', href: '/guide' },
    { label: 'Contact', href: '/contact' }
  ],
  hero: {
    badge: 'Free Public REST API',
    title: { before: 'Platfrom', api: 'Rest API', middle: 'Gratis tanpa', key: 'Apikey', last: 'maupun', limit: 'Limit Request' },
    subtitle: 'Gunakan endpoint Com1 untuk bot, website, tools otomatis, dan eksperimen data ringan secara cepat.',
    cta: 'Read Docs',
    secondaryCta: 'View Guide',
    terminal: ['~ $ loading plugins....', '~ $ api/game/cek-kodam', '~ $ all plugins loaded...', '~ $ welcome to Com1'],
    code: `const res = await fetch('https://domain.com/api/game/cek-kodam?text=Mrchlldev')\nconst data = await res.json()\nconsole.log(data)`
  },
  stats: {
    categories: { title: 'Module', description: 'Kategori endpoint aktif' },
    endpoints: { title: 'Endpoint', description: 'API yang siap dipakai' }
  },
  features: [
    { title: 'Tanpa Apikey', description: 'Semua endpoint bisa dipanggil langsung memakai URL publik tanpa membuat token akses.', icon: 'KeyRound' },
    { title: 'Tanpa Limit Request', description: 'Cocok untuk testing bot, dashboard, dan eksperimen kecil tanpa batasan request internal.', icon: 'Infinity' },
    { title: 'Playground Endpoint', description: 'Uji parameter endpoint langsung dari halaman dokumentasi dan lihat respons JSON dengan rapi.', icon: 'PlayCircle' },
    { title: 'Example Multi Bahasa', description: 'Setiap endpoint memiliki contoh request untuk cURL, JavaScript, Python, Go, dan PHP.', icon: 'Code2' },
    { title: 'Plugin Otomatis', description: 'Tambahkan file plugin baru dan sistem akan membaca kategori serta endpoint secara otomatis.', icon: 'Boxes' },
    { title: 'Dokumentasi Cepat', description: 'Info parameter, status code, contoh request, dan hasil respons disusun agar mudah dipahami.', icon: 'BookOpen' }
  ],
  faq: [
    { q: 'Apakah Com1 membutuhkan apikey?', a: 'Tidak. Endpoint Com1 dibuat agar bisa digunakan langsung dari URL tanpa apikey dan tanpa login.' },
    { q: 'Bagaimana cara mencoba endpoint?', a: 'Buka halaman endpoint, masuk ke tab Playground, isi parameter yang tersedia, lalu klik Run Endpoint.' },
    { q: 'Apakah semua endpoint memiliki contoh kode?', a: 'Ya. Setiap endpoint menampilkan contoh cURL, JavaScript, Python, Go, PHP, dan contoh respons JSON.' },
    { q: 'Bagaimana menambah endpoint baru?', a: 'Buat plugin di lib/plugins/[category]/[endpoint].ts, lalu jalankan npm run generate:plugins agar endpoint terdaftar otomatis.' }
  ],
  docs: {
    title: 'Dokumentasi Com1 Rest API',
    subtitle: 'Cari module, pilih endpoint, lalu gunakan contoh request atau Playground untuk mengetes respons JSON.',
    exampleTitle: 'Example Request',
    resultTitle: 'Example Result'
  },
  guide: {
    title: 'Guide Pemakaian Com1',
    subtitle: 'Ikuti langkah sederhana ini untuk membaca dokumentasi, mencoba endpoint, dan memakai respons API di aplikasi kamu.',
    steps: [
      { title: 'Buka Dokumentasi', description: 'Masuk ke halaman Docs untuk melihat jumlah module, jumlah endpoint, dan daftar kategori API.' },
      { title: 'Pilih Category', description: 'Pilih kategori endpoint yang sesuai kebutuhan, misalnya game, tools, canvas, downloader, atau kategori lain yang tersedia.' },
      { title: 'Buka Endpoint', description: 'Di halaman endpoint, baca tab Info untuk melihat method, path, parameter, dan status code.' },
      { title: 'Coba Example', description: 'Gunakan tab Example untuk menyalin contoh request cURL, JavaScript, Python, Go, atau PHP.' },
      { title: 'Testing Playground', description: 'Isi parameter di tab Playground, klik Run Endpoint, lalu salin respons JSON yang muncul di modal.' },
      { title: 'Integrasikan API', description: 'Tempel URL endpoint ke project bot atau website kamu dan olah data JSON dari field result.' }
    ]
  },
  footer: {
    about: 'Com1 adalah platform REST API gratis untuk membantu pengguna mencoba endpoint publik secara cepat dan sederhana.',
    author: { name: 'Marcellino F.A', role: 'Com1 Maintainer', handle: '@mrchlldev', email: 'abimanyumarcel4@gmail.com' },
    information: [
      { label: 'About', href: '/' },
      { label: 'Feature', href: '/#features' },
      { label: 'Guide', href: '/guide' },
      { label: 'Terms', href: '/terms' },
      { label: 'Privacy & Policy', href: '/privacy-policy' },
      { label: 'Disclaimer', href: '/disclaimer' }
    ]
  },
  legal: {
    terms: [
      { title: 'Penerimaan Ketentuan', description: 'Dengan memakai endpoint Com1, pengguna dianggap memahami bahwa layanan ini disediakan sebagai REST API publik untuk kebutuhan belajar, testing, integrasi ringan, dan eksperimen teknis.' },
      { title: 'Penggunaan yang Diizinkan', description: 'Endpoint boleh digunakan untuk bot, website, aplikasi pribadi, contoh pembelajaran, dan kebutuhan pengujian selama tidak merugikan pengguna lain, pemilik sumber data, atau pihak ketiga.' },
      { title: 'Penggunaan yang Dilarang', description: 'Pengguna dilarang memakai Com1 untuk spam, serangan otomatis, penyalahgunaan data, aktivitas ilegal, scraping agresif, atau tindakan lain yang dapat mengganggu stabilitas layanan.' },
      { title: 'Ketersediaan Endpoint', description: 'Com1 berusaha menjaga endpoint tetap aktif, tetapi beberapa endpoint dapat berubah, berhenti, atau mengalami error karena pembaruan sistem maupun perubahan sumber data eksternal.' },
      { title: 'Perubahan Layanan', description: 'Daftar endpoint, format respons, parameter, dan dokumentasi dapat diperbarui sewaktu-waktu agar layanan tetap relevan dan mudah digunakan.' }
    ],
    privacy: [
      { title: 'Tidak Ada Sistem Akun', description: 'Com1 tidak memakai login, autentikasi, apikey, atau limit request internal sehingga tidak menyimpan data akun pengguna.' },
      { title: 'Parameter Request', description: 'Parameter yang dikirim ke endpoint hanya diproses untuk menghasilkan respons API. Jangan mengirim password, token pribadi, nomor identitas, atau data rahasia ke endpoint publik.' },
      { title: 'Data Teknis', description: 'Hosting atau platform server dapat mencatat data teknis standar seperti waktu request, path endpoint, user agent, dan status respons untuk kebutuhan keamanan dan debugging.' },
      { title: 'Pihak Ketiga', description: 'Beberapa endpoint dapat mengambil data dari sumber eksternal. Kebijakan privasi sumber eksternal tersebut berada di luar kendali Com1.' },
      { title: 'Keamanan Pengguna', description: 'Pengguna bertanggung jawab memastikan data yang dikirim tidak bersifat sensitif dan tidak melanggar aturan layanan pihak lain.' }
    ],
    disclaimer: [
      { title: 'Layanan Apa Adanya', description: 'Com1 disediakan apa adanya sebagai platform REST API gratis. Tidak ada jaminan bahwa semua endpoint selalu akurat, lengkap, cepat, atau aktif sepanjang waktu.' },
      { title: 'Bukan Sumber Resmi', description: 'Respons endpoint tidak selalu berasal dari sumber resmi. Gunakan hasil API sebagai referensi teknis dan lakukan pengecekan ulang untuk kebutuhan penting.' },
      { title: 'Ketergantungan Sumber Data', description: 'Beberapa endpoint dapat bergantung pada sumber data eksternal. Jika sumber tersebut berubah, dibatasi, atau tidak tersedia, respons endpoint juga dapat ikut berubah.' },
      { title: 'Tanggung Jawab Pengguna', description: 'Pengguna bertanggung jawab penuh atas cara memakai endpoint, menyimpan respons, membagikan data, dan mengintegrasikan API ke aplikasi masing-masing.' },
      { title: 'Batasan Kerugian', description: 'Com1 tidak bertanggung jawab atas kerugian langsung maupun tidak langsung yang muncul akibat penggunaan, kegagalan, perubahan, atau ketidaktersediaan endpoint.' }
    ]
  },
  contact: { title: 'Contact', description: 'Hubungi maintainer Com1 untuk laporan bug endpoint, request module baru, atau kerja sama pengembangan REST API.', email: 'abimanyumarcel4@gmail.com', handle: '@mrchlldev' }
}
