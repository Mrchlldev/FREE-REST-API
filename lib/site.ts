export const site = {
  name: 'Com1',
  url: 'https://domain.com',
  ogImage: '/og-image.png',
  description: 'Platform Rest API gratis tanpa Apikey maupun Limit Request.',
  nav: [{label:'Docs',href:'/docs'},{label:'Contact',href:'/contact'}],
  hero: {title:'Platfrom Rest API Gratis tanpa Apikey maupun Limit Request', cta:'Read Docs', code:`const res = await fetch('https://domain.com/api/game/cek-kodam?text=Mrchlldev')\nconst data = await res.json()\nconsole.log(data)`},
  features: [
    {title:'Tanpa Apikey',description:'Endpoint bisa langsung dipakai tanpa login dan tanpa token.',icon:'KeyRound'},
    {title:'Tanpa Limit',description:'Bebas request untuk kebutuhan belajar dan eksperimen.',icon:'Infinity'},
    {title:'Playground',description:'Testing endpoint langsung dari website.',icon:'PlayCircle'},
    {title:'Example Lengkap',description:'Contoh cURL, JS, Python, Go, dan PHP.',icon:'Code2'},
    {title:'Plugin Otomatis',description:'Endpoint cukup ditaruh di lib/plugins/category/endpoint.ts.',icon:'Boxes'},
    {title:'Shadcn UI',description:'Komponen modern, rapi, dan responsif.',icon:'PanelsTopLeft'}
  ],
  faq: [{q:'Apakah perlu apikey?',a:'Tidak. Semua endpoint bebas digunakan tanpa apikey.'},{q:'Di mana menambah endpoint?',a:'Tambahkan file plugin ke lib/plugins/[category]/[endpoint].ts lalu jalankan npm run generate:plugins.'},{q:'Apakah bisa deploy ke Vercel?',a:'Bisa. Project ini sudah siap deploy ke Vercel.'}],
  footer: {about:'Com1 adalah platform Rest API gratis untuk belajar, bot, dan eksperimen developer.',information:[{label:'About',href:'/'},{label:'Feature',href:'/#features'},{label:'Terms',href:'/terms'},{label:'Privacy & Policy',href:'/privacy-policy'},{label:'Disclaimer',href:'/disclaimer'}]},
  legal: {
    terms: [{title:'Terms of Service',description:'Gunakan layanan Com1 secara wajar dan jangan menyalahgunakan endpoint untuk aktivitas yang merugikan pihak lain.'},{title:'Availability',description:'Kami tidak menjamin setiap endpoint selalu aktif karena sumber data dan layanan pihak ketiga dapat berubah kapan saja.'}],
    privacy: [{title:'Privacy Policy',description:'Com1 tidak menyediakan sistem login, apikey, atau autentikasi sehingga tidak menyimpan data akun pengguna.'},{title:'Request Data',description:'Parameter yang dikirim ke endpoint hanya diproses untuk menghasilkan respons dan tidak digunakan untuk profiling.'}],
    disclaimer: [{title:'Disclaimer',description:'Semua endpoint disediakan apa adanya untuk kebutuhan edukasi, testing, dan integrasi ringan.'},{title:'Third Party',description:'Beberapa endpoint dapat bergantung pada sumber pihak ketiga. Perubahan pada sumber tersebut bisa memengaruhi hasil respons.'}]
  },
  contact: {title:'Contact',description:'Hubungi developer untuk kerja sama, laporan bug, atau request endpoint baru.',email:'abimanyumarcel4@gmail.com',handle:'@mrchlldev'}
}
