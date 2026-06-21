export const site = {
  name: 'Com1',
  domain: 'https://com1.example.com',
  url: 'https://com1.example.com',
  ogImage: '/og-image.png',
  description: 'Com1 adalah REST API publik gratis untuk mencoba endpoint sederhana tanpa apikey, tanpa autentikasi, dan tanpa limit request internal.',
  author: {
    name: 'Marcellino F.A',
    alias: 'Mrchlldev',
    role: 'Author/Developer',
    email: 'mrchlldev@gmail.com',
    telegram: 'https://t.me/mrchllabimanyu',
    github: 'https://github.com/Mrchlldev'
  },
  nav: [
    { label: 'Docs', href: '/docs' },
    { label: 'Browse', href: '/docs/browse' },
    { label: 'Guide', href: '/guide' },
    { label: 'Contact', href: '/contact' }
  ],
  hero: {
    badge: 'Free Public REST API',
    title: { before: 'Platform', api: 'REST API', middle: 'gratis tanpa', key: 'Apikey', last: 'dan', limit: 'Limit Request' },
    subtitle: 'Pakai endpoint Com1 untuk bot, website, tools otomatis, dan eksperimen data ringan dengan respons JSON yang rapi.',
    cta: 'Read Docs',
    secondaryCta: 'View Guide',
    terminal: ['~ $ COM1 Rest API', '~ $ free for use', '~ $ no apikey required', '~ $ unlimited request', '~ $ use now !'],
    code: `const res = await fetch('{DOMAIN}/api/game/cek-kodam?text=Mrchlldev')\nconst data = await res.json()\nconsole.log(data)`
  },
  stats: {
    categories: { title: 'Module', description: 'Kategori endpoint aktif' },
    endpoints: { title: 'Endpoint', description: 'API yang siap dipakai' }
  },
  features: [
    { title: 'Tanpa Apikey', description: 'Panggil endpoint langsung dari URL publik tanpa token akses atau login.', icon: 'KeyRound' },
    { title: 'Tanpa Limit Internal', description: 'Cocok untuk testing bot, dashboard, dan eksperimen ringan.', icon: 'Infinity' },
    { title: 'Playground Interaktif', description: 'Isi parameter sesuai tipe input, jalankan endpoint, lalu salin respons JSON.', icon: 'PlayCircle' },
    { title: 'Support GET & POST', description: 'Endpoint bisa memakai query, JSON body, dan form-data untuk upload file.', icon: 'Send' },
    { title: 'Example Multi Bahasa', description: 'Contoh request tersedia untuk cURL, JavaScript, Python, Go, dan PHP.', icon: 'Code2' },
    { title: 'Plugin Otomatis', description: 'Tambah file plugin baru, lalu sistem membaca kategori dan endpoint otomatis.', icon: 'Boxes' }
  ],
  faq: [
    { q: 'Apakah Com1 membutuhkan apikey?', a: 'Tidak. Endpoint Com1 dibuat agar bisa digunakan langsung tanpa apikey dan tanpa login.' },
    { q: 'Apa format respons endpoint?', a: 'Respons utama memakai JSON agar mudah dipakai di bot, website, atau tools otomatis.' },
    { q: 'Bagaimana mencoba endpoint?', a: 'Buka halaman endpoint, masuk ke tab Playground, isi parameter, lalu klik Run Endpoint.' },
    { q: 'Apakah mendukung upload file?', a: 'Ya. Endpoint POST form-data bisa menerima file, image, audio, video, atau file umum sesuai pengaturan parameter.' }
  ],
  docs: {
    title: 'Dokumentasi Com1 REST API',
    subtitle: 'Cari module, pilih endpoint, lihat contoh request, lalu gunakan Playground untuk mengetes respons JSON secara langsung.',
    exampleTitle: 'Example Request',
    resultTitle: 'Example Result'
  },
  guide: {
    title: 'Guide Pemakaian Com1',
    subtitle: 'Langkah mudah untuk membaca dokumentasi, mencoba endpoint, dan memakai respons API di aplikasi kamu.',
    steps: [
      { title: 'Buka Docs', description: 'Masuk ke halaman Docs untuk melihat jumlah module, jumlah endpoint, dan contoh pola request.' },
      { title: 'Browse Module', description: 'Buka halaman Browse atau Sidebar untuk melihat semua kategori endpoint yang tersedia.' },
      { title: 'Pilih Endpoint', description: 'Masuk ke halaman category, gunakan search endpoint, lalu pilih endpoint yang ingin dipakai.' },
      { title: 'Baca Info', description: 'Di tab Info, cek method, body type, path, parameter, tipe input, dan status code.' },
      { title: 'Salin Example', description: 'Di tab Example, pilih bahasa yang kamu butuhkan seperti cURL, JavaScript, Python, Go, atau PHP.' },
      { title: 'Coba Playground', description: 'Di tab Playground, isi input sesuai tipe parameter, jalankan endpoint, lalu salin respons dari modal.' }
    ]
  },
  footer: {
    about: 'Com1 menyediakan REST API publik gratis untuk testing, integrasi ringan, dan eksperimen respons JSON.',
    information: [
      { label: 'About', href: '/' },
      { label: 'Feature', href: '/#features' },
      { label: 'Browse', href: '/docs/browse' },
      { label: 'Guide', href: '/guide' },
      { label: 'Terms', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Disclaimer', href: '/disclaimer' }
    ]
  },
  legal: {
    terms: [
      { title: 'Penerimaan Ketentuan', description: 'Dengan memakai endpoint Com1, pengguna dianggap memahami bahwa layanan ini disediakan sebagai REST API publik gratis untuk kebutuhan belajar, testing, integrasi ringan, dan eksperimen teknis.' },
      { title: 'Penggunaan yang Diizinkan', description: 'Endpoint boleh digunakan untuk bot, website, aplikasi pribadi, pembelajaran, dan pengujian selama tidak merugikan pengguna lain, pemilik sumber data, atau pihak ketiga.' },
      { title: 'Penggunaan yang Dilarang', description: 'Pengguna dilarang memakai Com1 untuk spam, serangan otomatis, penyalahgunaan data, aktivitas ilegal, scraping agresif, bypass keamanan, atau tindakan yang dapat mengganggu stabilitas layanan.' },
      { title: 'Ketersediaan Endpoint', description: 'Com1 berusaha menjaga endpoint tetap aktif, tetapi endpoint dapat berubah, berhenti, lambat, atau error karena pembaruan sistem maupun perubahan sumber data eksternal.' },
      { title: 'Perubahan Format Respons', description: 'Parameter, path, struktur respons, dan status code dapat diperbarui sewaktu-waktu untuk memperbaiki kualitas layanan atau menyesuaikan kebutuhan teknis.' },
      { title: 'Tanggung Jawab Pengguna', description: 'Pengguna bertanggung jawab atas cara memakai endpoint, menyimpan data respons, menampilkan data ke publik, dan mengintegrasikan API ke sistem masing-masing.' }
    ],
    privacy: [
      { title: 'Tidak Ada Sistem Akun', description: 'Com1 tidak memakai login, autentikasi, apikey, atau limit request internal sehingga tidak menyimpan data akun pengguna.' },
      { title: 'Parameter Request', description: 'Parameter yang dikirim ke endpoint hanya diproses untuk menghasilkan respons API. Jangan mengirim password, token pribadi, data identitas, atau informasi rahasia ke endpoint publik.' },
      { title: 'Upload File', description: 'Untuk endpoint form-data, file diproses sesuai kebutuhan endpoint. Hindari mengunggah file sensitif, dokumen pribadi, atau media yang tidak boleh dibagikan.' },
      { title: 'Data Teknis Server', description: 'Platform hosting dapat mencatat data teknis standar seperti waktu request, path endpoint, user agent, alamat IP, ukuran request, dan status respons untuk keamanan dan debugging.' },
      { title: 'Sumber Eksternal', description: 'Beberapa endpoint dapat mengambil data dari sumber eksternal. Kebijakan privasi sumber eksternal berada di luar kendali Com1.' },
      { title: 'Keamanan Pengguna', description: 'Pengguna bertanggung jawab memastikan data yang dikirim tidak bersifat sensitif dan tidak melanggar aturan layanan pihak lain.' }
    ],
    disclaimer: [
      { title: 'Layanan Apa Adanya', description: 'Com1 disediakan apa adanya sebagai platform REST API gratis. Tidak ada jaminan bahwa semua endpoint selalu akurat, lengkap, cepat, atau aktif sepanjang waktu.' },
      { title: 'Bukan Sumber Resmi', description: 'Respons endpoint tidak selalu berasal dari sumber resmi. Gunakan hasil API sebagai referensi teknis dan lakukan pengecekan ulang untuk kebutuhan penting.' },
      { title: 'Ketergantungan Data Eksternal', description: 'Sebagian endpoint dapat bergantung pada sumber data eksternal. Jika sumber tersebut berubah, dibatasi, atau tidak tersedia, respons endpoint juga dapat ikut berubah.' },
      { title: 'Tidak Untuk Keputusan Penting', description: 'Com1 tidak ditujukan sebagai dasar keputusan medis, hukum, finansial, keselamatan, atau keputusan penting lain yang membutuhkan validasi profesional.' },
      { title: 'Tanggung Jawab Pengguna', description: 'Pengguna bertanggung jawab penuh atas penggunaan endpoint, hasil integrasi, penyimpanan respons, dan dampak yang muncul dari aplikasi yang dibuat.' },
      { title: 'Batasan Kerugian', description: 'Com1 dan developer tidak bertanggung jawab atas kerugian langsung maupun tidak langsung yang muncul akibat penggunaan, kegagalan, perubahan, atau ketidaktersediaan endpoint.' }
    ]
  },
  contact: {
    title: 'Contact Developer',
    description: 'Hubungi developer Com1 untuk laporan bug endpoint, request module baru, atau diskusi pengembangan REST API publik.',
    email: 'mrchlldev@gmail.com',
    telegram: 'https://t.me/mrchllabimanyu',
    github: 'https://github.com/Mrchlldev'
  }
}
