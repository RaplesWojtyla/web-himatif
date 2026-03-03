import { Division, EventItem, Member, NewsItem, Product } from '../lib/types';

export const STATS = [
  { label: 'Anggota', value: '200+' },
  { label: 'Item Shop', value: '20+' },
  { label: 'Partnership', value: '12' },
  { label: 'Event Selesai', value: '8' },
];

export const VISI_MISI = {
  visi: "Mengupayakan HIMATIF sebagai wadah pengembangan mahasiswa Teknologi Informasi yang bertakwa kepada Tuhan Yang Maha Esa, demokratis, berkarakter, bertanggung jawab, berpikir kritis, inovatif, progresif, serta memiliki kepedulian sosial dalam menghadapi dinamika kehidupan kampus secara aktif dan bermakna, sebagai bekal untuk berkontribusi di era transformasi digital.",
  misi: [
    "Menyediakan ruang bagi mahasiswa Teknologi Informasi untuk belajar, berdiskusi, dan mengembangkan diri di luar kelas.",
    "Membangun budaya kerja organisasi yang terbuka, bertanggung jawab, dan saling menghargai.",
    "Mendukung pengembangan minat dan bakat mahasiswa melalui program kerja yang relevan dan bermanfaat.",
    "Menumbuhkan semangat kebersamaan dan mempererat tali persaudaraan antar mahasiswa Teknologi Informasi.",
    "Komunikasi berperan penting karena menjadi sarana untuk membangun budaya terbuka, mendukung kerja sama, dan memperkuat rasa kebersamaan dalam organisasi."
  ]
};

export const PENGURUS_HARIAN: Member[] = [
  { id: 1, name: "Naurah dan Nazwa", role: "Kesekretariatan", imageUrl: "/images/divisions/bph/kesekretariatan.JPG" },
  { id: 2, name: "Ilyas, Qhanakin dan Petra", role: "Ketua", imageUrl: "/images/divisions/bph/ketua.JPG" },
  { id: 3, name: "Jesica dan Yehezkiel", role: "Kebendaharaan", imageUrl: "/images/divisions/bph/kebendaharaan.JPG" },
];

export const DIVISIONS: Division[] = [
  {
    id: "psdm",
    name: "PSDM",
    description: "Pengembangan Sumber Daya Manusia fokus pada kaderisasi dan peningkatan soft skill anggota.",
    longDescription:
      "Divisi PSDM bertanggung jawab dalam proses kaderisasi, pelatihan kepemimpinan, serta pengembangan soft skill anggota HIMATIF agar siap menghadapi dunia profesional.",
    imageUrl: "/images/divisions/psdm/cover_psdm.JPG",
    members: [
      {
        id: 1,
        name: "Paskal dan Rahmaini",
        role: "Koordinator dan Divisi",
        imageUrl: "/images/divisions/psdm/members/paskal_rahmaini.JPG"
      },
      {
        id: 2,
        name: "Samuel",
        role: "Anggota",
        imageUrl: "/images/divisions/psdm/members/samuel.JPG"
      },
      {
        id: 3,
        name: "Sutanto",
        role: "Anggota",
        imageUrl: "/images/divisions/psdm/members/sutanto.JPG"
      },
      {
        id: 4,
        name: "Cindy",
        role: "Anggota",
        imageUrl: "/images/divisions/psdm/members/cindy.JPG"
      },
      {
        id: 5,
        name: "Chaterine",
        role: "Anggota",
        imageUrl: "/images/divisions/psdm/members/chaterine.JPG"
      },
      {
        id: 6,
        name: "Arya",
        role: "Anggota",
        imageUrl: "/images/divisions/psdm/members/arya.JPG"
      },
      {
        id: 7,
        name: "Panji",
        role: "Anggota",
        imageUrl: "/images/divisions/psdm/members/panji.JPG"
      },
      {
        id: 8,
        name: "Nabila",
        role: "Anggota",
        imageUrl: "/images/divisions/psdm/members/nabila.JPG"
      },
      {
        id: 9,
        name: "Nazwar",
        role: "Anggota",
        imageUrl: "/images/divisions/psdm/members/nazwar.JPG"
      },
      {
        id: 10,
        name: "Andrian",
        role: "Anggota",
        imageUrl: "/images/divisions/psdm/members/andrian.JPG"
      },
    ],
  },
  {
    id: "litbang",
    name: "Litbang",
    description: "Penelitian dan Pengembangan bertanggung jawab atas riset teknologi dan inovasi organisasi.",
    longDescription:
      "Divisi Litbang berfokus pada kegiatan penelitian, pengembangan produk teknologi, serta inovasi yang dapat mendukung kemajuan organisasi.",
    imageUrl: "/images/divisions/litbang/cover_litbang.JPG",
    members: [
      {
        id: 1,
        name: "Brisbane dan Susi",
        role: "Koordinator dan Sekretaris",
        imageUrl: "/images/divisions/litbang/members/bane_susi.JPG"
      },
      {
        id: 2,
        name: "Patra",
        role: "Anggota",
        imageUrl: "/images/divisions/litbang/members/patra.JPG"
      },
      {
        id: 3,
        name: "Marialise",
        role: "Anggota",
        imageUrl: "/images/divisions/litbang/members/marialise.JPG"
      },
      {
        id: 4,
        name: "Carlos",
        role: "Anggota",
        imageUrl: "/images/divisions/litbang/members/carlos.JPG"
      },
      {
        id: 5,
        name: "Kelly",
        role: "Anggota",
        imageUrl: "/images/divisions/litbang/members/kelly.JPG"
      },
      {
        id: 6,
        name: "Pangeran",
        role: "Anggota",
        imageUrl: "/images/divisions/litbang/members/pangeran.JPG"
      },
      {
        id: 7,
        name: "Vincent",
        role: "Anggota",
        imageUrl: "/images/divisions/litbang/members/vincent.JPG"
      },
    ],
  },
  {
    id: "kominfo",
    name: "Multimedia Komunikasi & Informasi",
    description: "Mengelola sosial media, dokumentasi kegiatan, dan branding HIMATIF.",
    longDescription:
      "Divisi Kominfo bertugas mengelola media sosial, dokumentasi visual, serta menjaga citra dan branding HIMATIF di ranah digital.",
    imageUrl: "/images/divisions/mulkominfo/cover_mulkominfo.JPG",
    members: [
      {
        id: 1,
        name: "Rayza dan Adelia",
        role: "Koordinator dan Sekretaris",
        imageUrl: "/images/divisions/mulkominfo/members/rayza_adelia.JPG"
      },
      {
        id: 2,
        name: "Rangga",
        role: "Anggota",
        imageUrl: "/images/divisions/mulkominfo/members/rangga.JPG"
      },
      {
        id: 3,
        name: "Melody",
        role: "Anggota",
        imageUrl: "/images/divisions/mulkominfo/members/melody.JPG"
      },
      {
        id: 4,
        name: "Cindy",
        role: "Anggota",
        imageUrl: "/images/divisions/mulkominfo/members/cindy.JPG"
      },
      {
        id: 5,
        name: "Mawaddah",
        role: "Anggota",
        imageUrl: "/images/divisions/mulkominfo/members/mawaddah.JPG"
      },
      {
        id: 6,
        name: "Halila",
        role: "Anggota",
        imageUrl: "/images/divisions/mulkominfo/members/halila.JPG"
      },
      {
        id: 7,
        name: "Sanny",
        role: "Anggota",
        imageUrl: "/images/divisions/mulkominfo/members/sanny.JPG"
      },
    ],
  },
  {
    id: "seni",
    name: "Olahraga & Seni",
    description: "Menampung dan menyalurkan minat bakat mahasiswa di bidang olahraga dan kesenian.",
    longDescription:
      "Divisi Olahraga & Seni mewadahi minat bakat mahasiswa dalam bidang olahraga, musik, tari, dan seni pertunjukan lainnya.",
    imageUrl: "/images/divisions/olsen/cover_olsen.JPG",
    members: [
      {
        id: 1,
        name: "Travy dan Victor",
        role: "Koordinator dan Sekretaris",
        imageUrl: "/images/divisions/olsen/members/travy_victor.JPG"
      },
      {
        id: 2,
        name: "Ubay",
        role: "Anggota",
        imageUrl: "/images/divisions/olsen/members/ubay.JPG"
      },
      {
        id: 3,
        name: "Geri",
        role: "Anggota",
        imageUrl: "/images/divisions/olsen/members/geri.JPG"
      },
      {
        id: 4,
        name: "Rasyiqah",
        role: "Anggota",
        imageUrl: "/images/divisions/olsen/members/rasyiqah.JPG"
      },
      {
        id: 5,
        name: "Daffa",
        role: "Anggota",
        imageUrl: "/images/divisions/olsen/members/daffa.JPG"
      },
      {
        id: 6,
        name: "Hasbi",
        role: "Anggota",
        imageUrl: "/images/divisions/olsen/members/hasbi.JPG"
      },
      {
        id: 7,
        name: "Rafi",
        role: "Anggota",
        imageUrl: "/images/divisions/olsen/members/rafi.JPG"
      },
      {
        id: 8,
        name: "Aldi",
        role: "Anggota",
        imageUrl: "/images/divisions/olsen/members/zaki.JPG"
      },
      {
        id: 9,
        name: "Anggie",
        role: "Anggota",
        imageUrl: "/images/divisions/olsen/members/anggie.JPG"
      },
      {
        id: 10,
        name: "Sofwan",
        role: "Anggota",
        imageUrl: "/images/divisions/olsen/members/sofwan.JPG"
      },
      {
        id: 11,
        name: "Aldrik",
        role: "Anggota",
        imageUrl: "/images/divisions/olsen/members/aldrik.JPG"
      },
      {
        id: 12,
        name: "Abyan",
        role: "Anggota",
        imageUrl: "/images/divisions/olsen/members/abyan.JPG"
      },
    ],
  },
  {
    id: "danus",
    name: "Usaha Mandiri",
    description: "Mencari pendanaan kreatif melalui penjualan merchandise dan kerjasama sponsorship.",
    longDescription:
      "Divisi Usaha Mandiri bertanggung jawab mencari sumber dana kreatif melalui penjualan merchandise dan kerjasama sponsorship.",
    imageUrl: "/images/divisions/um/cover_um.jpg",
    members: [
      {
        id: 1,
        name: "Zahra dan Ilma",
        role: "Koordinator dan Sekretaris",
        imageUrl: "/images/divisions/um/members/zahra_ilma.JPG"
      },
      {
        id: 2,
        name: "Nazwa",
        role: "Anggota",
        imageUrl: "/images/divisions/um/members/nazwa.JPG"
      },
      {
        id: 3,
        name: "Roofi",
        role: "Anggota",
        imageUrl: "/images/divisions/um/members/roofi.JPG"
      },
      {
        id: 4,
        name: "Nabil",
        role: "Anggota",
        imageUrl: "/images/divisions/um/members/nabil.JPG"
      },
      {
        id: 5,
        name: "Rizky",
        role: "Anggota",
        imageUrl: "/images/divisions/um/members/rizky.JPG"
      },
    ],
  },
  {
    id: "rohani",
    name: "Rohani",
    description: "Membangun karakter mahasiswa yang beriman dan bertaqwa melalui kegiatan keagamaan.",
    longDescription:
      "Divisi Rohani membina karakter spiritual mahasiswa melalui kajian rutin, bakti sosial, dan kegiatan keagamaan lainnya.",
    imageUrl: "/images/divisions/rohani/cover_rohani.JPG",
    members: [
      {
        id: 1,
        name: "Mayadi dan Putri",
        role: "Koordinator dan Sekretaris",
        imageUrl: "/images/divisions/rohani/members/mayadi_putri.JPG"
      },
      {
        id: 2,
        name: "Arialdi",
        role: "Anggota",
        imageUrl: "/images/divisions/rohani/members/arialdi.JPG"
      },
      {
        id: 3,
        name: "Haya",
        role: "Anggota",
        imageUrl: "/images/divisions/rohani/members/rohaya.JPG"
      },
      {
        id: 4,
        name: "Davina",
        role: "Anggota",
        imageUrl: "/images/divisions/rohani/members/davina.JPG"
      },
      {
        id: 5,
        name: "Rizna",
        role: "Anggota",
        imageUrl: "/images/divisions/rohani/members/rizna.JPG"
      },
      {
        id: 6,
        name: "Louis",
        role: "Anggota",
        imageUrl: "/images/divisions/rohani/members/louis.JPG"
      },
      {
        id: 7,
        name: "Grace",
        role: "Anggota",
        imageUrl: "/images/divisions/rohani/members/grace.JPG"
      },
      {
        id: 8,
        name: "Jelita",
        role: "Anggota",
        imageUrl: "/images/divisions/rohani/members/jelita.JPG"
      },
      {
        id: 9,
        name: "Ferdyan",
        role: "Anggota",
        imageUrl: "/images/divisions/rohani/members/ferdyan.jpg"
      },
      {
        id: 10,
        name: "Refael",
        role: "Anggota",
        imageUrl: "/images/divisions/rohani/members/refael.JPG"
      },
      {
        id: 11,
        name: "Irene",
        role: "Anggota",
        imageUrl: "/images/divisions/rohani/members/irene.JPG"
      },
      {
        id: 12,
        name: "Kenward",
        role: "Anggota",
        imageUrl: "/images/divisions/rohani/members/kenward.JPG"
      },
    ],
  },
];

export const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "Fun & Fit",
    date: "20 September 2025",
    description: "Seminar teknologi membahas AI dan Masa Depan Coding.",
    imageUrl: "/images/funnfit.jpg"
  },
  {
    id: 2,
    title: "Latihan Kepemimpinan",
    date: "18 Oktober 2025",
    description: "Pelatihan kepemimpinan untuk calon pengurus HIMATIF.",
    imageUrl: "/images/lk.JPG"
  },
  {
    id: 3,
    title: "IT Showcase",
    date: "6 Desember 2025",
    description: "Pameran karya mahasiswa Teknologi Informasi.",
    imageUrl: "/images/showcase.jpg"
  }
];

export const PRODUCTS: Product[] = [
  { id: 1, name: "Crochet Bakery Keychain", price: "Rp 20.000", category: "Keychain", imageUrl: "/images/shop/kc1.png" },
  { id: 2, name: "Crochet Star Keychain", price: "Rp 20.000", category: "Keychain", imageUrl: "/images/shop/kc2.png" },
  { id: 3, name: "Crochet Bow Keychain", price: "Rp 20.000", category: "Keychain", imageUrl: "/images/shop/kc3.png" },
  { id: 4, name: "Flower Bouqet Crochet", price: "Rp 90.000", category: "Bouqet", imageUrl: "/images/shop/buket1.png" },
  { id: 5, name: "Bouqet Flower 1", price: "Rp 125.000", category: "Bouqet", imageUrl: "/images/shop/buket2.png" },
  { id: 6, name: "Bouqet Flower 2", price: "Rp 125.000", category: "Bouqet", imageUrl: "/images/shop/buket3.png" },
  { id: 7, name: "Bouqet Flower 3", price: "Rp 115.000", category: "Bouqet", imageUrl: "/images/shop/buket4.png" },
  { id: 8, name: "Bouqet Flower 4", price: "Rp 80.000", category: "Bouqet", imageUrl: "/images/shop/buket5.png" },

];

export const NEWS: NewsItem[] = [
  {
    id: 1,
    title: "Pelantikan Pengurus Baru 2024/2025",
    date: "20 Januari 2024",
    excerpt: "Selamat kepada pengurus baru yang telah dilantik. Semoga amanah dalam menjalankan tugas.",
    imageUrl: "https://picsum.photos/id/200/600/400"
  },
  {
    id: 2,
    title: "Kunjungan Industri ke Jakarta",
    date: "15 Februari 2024",
    excerpt: "Mahasiswa Teknologi Informasi melakukan kunjungan ke beberapa startup unicorn di Jakarta.",
    imageUrl: "https://picsum.photos/id/201/600/400"
  },
  {
    id: 3,
    title: "Workshop UI/UX Design",
    date: "10 Maret 2024",
    excerpt: "Antusiasme peserta dalam mengikuti workshop desain antarmuka aplikasi mobile.",
    imageUrl: "https://picsum.photos/id/202/600/400"
  }
];

export const SHOP_CATEGORIES = [
  { name: "Obat", icon: "💊" },
  { name: "Makanan", icon: "🍔" },
  { name: "Minuman", icon: "🥤" },
  { name: "Baju", icon: "👕" },
  { name: "Buket", icon: "💐" },
  { name: "Tumbler", icon: "🥛" },
  { name: "Celana", icon: "👖" },
  { name: "Tas", icon: "👜" },
];
