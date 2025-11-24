import { Division, EventItem, Member, NewsItem, Product } from '../lib/types';

export const STATS = [
  { label: 'Anggota', value: '200+' },
  { label: 'Item Shop', value: '20+' },
  { label: 'Berita', value: '12' },
  { label: 'Event Selesai', value: '8' },
];

export const VISI_MISI = {
  visi: "Menjadikan HIMATIF sebagai wadah pengembangan potensi mahasiswa yang unggul, inovatif, dan berintegritas dalam bidang Teknologi Informasi.",
  misi: [
    "Membangun solidaritas dan kekeluargaan antar anggota.",
    "Menyelenggarakan kegiatan yang menunjang akademik dan non-akademik.",
    "Menjalin kerjasama dengan pihak internal maupun eksternal kampus.",
    "Mengembangkan minat dan bakat mahasiswa di bidang IT."
  ]
};

export const PENGURUS_HARIAN: Member[] = [
  { id: 1, name: "Kanakin", role: "Ketua Himpunan", imageUrl: "https://picsum.photos/id/1005/300/300" },
  { id: 2, name: "Siti Aminah", role: "Wakil Ketua", imageUrl: "https://picsum.photos/id/1011/300/300" },
  { id: 3, name: "Budi Santoso", role: "Sekretaris", imageUrl: "https://picsum.photos/id/1025/300/300" },
];

export const DIVISIONS: Division[] = [
  {
    id: "psdm",
    name: "PSDM",
    description: "Pengembangan Sumber Daya Manusia fokus pada kaderisasi dan peningkatan soft skill anggota.",
    imageUrl: "https://picsum.photos/id/1/600/400"
  },
  {
    id: "litbang",
    name: "Litbang",
    description: "Penelitian dan Pengembangan bertanggung jawab atas riset teknologi dan inovasi organisasi.",
    imageUrl: "https://picsum.photos/id/2/600/400"
  },
  {
    id: "kominfo",
    name: "Multimedia Komunikasi & Informasi",
    description: "Mengelola sosial media, dokumentasi kegiatan, dan branding HIMATIF.",
    imageUrl: "https://picsum.photos/id/3/600/400"
  },
  {
    id: "seni",
    name: "Olahraga & Seni",
    description: "Menampung dan menyalurkan minat bakat mahasiswa di bidang olahraga dan kesenian.",
    imageUrl: "https://picsum.photos/id/4/600/400"
  },
  {
    id: "danus",
    name: "Usaha Mandiri",
    description: "Mencari pendanaan kreatif melalui penjualan merchandise dan kerjasama sponsorship.",
    imageUrl: "https://picsum.photos/id/5/600/400"
  },
  {
    id: "rohani",
    name: "Rohani",
    description: "Membangun karakter mahasiswa yang beriman dan bertaqwa melalui kegiatan keagamaan.",
    imageUrl: "https://picsum.photos/id/6/600/400"
  }
];

export const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "Tech Seminar 2024",
    date: "12 Oktober 2024",
    description: "Seminar teknologi membahas AI dan Masa Depan Coding.",
    imageUrl: "https://picsum.photos/id/20/400/600"
  },
  {
    id: 2,
    title: "Coding Bootcamp",
    date: "20 November 2024",
    description: "Pelatihan intensif ReactJS untuk pemula selama 3 hari.",
    imageUrl: "https://picsum.photos/id/26/400/600"
  },
  {
    id: 3,
    title: "HIMATIF Cup",
    date: "15 Desember 2024",
    description: "Turnamen E-Sport Mobile Legends dan Futsal antar angkatan.",
    imageUrl: "https://picsum.photos/id/96/400/600"
  }
];

export const PRODUCTS: Product[] = [
  { id: 1, name: "Karsa T-Shirt", price: "Rp 85.000", category: "Baju", imageUrl: "https://picsum.photos/id/90/300/300" },
  { id: 2, name: "HIMATIF Lanyard", price: "Rp 25.000", category: "Aksesoris", imageUrl: "https://picsum.photos/id/100/300/300" },
  { id: 3, name: "Sticker Pack V1", price: "Rp 10.000", category: "Aksesoris", imageUrl: "https://picsum.photos/id/103/300/300" },
  { id: 4, name: "Totebag Canvas", price: "Rp 45.000", category: "Tas", imageUrl: "https://picsum.photos/id/104/300/300" },
  { id: 5, name: "Tumbler Custom", price: "Rp 60.000", category: "Tumbler", imageUrl: "https://picsum.photos/id/106/300/300" },
  { id: 6, name: "Jaket Angkatan", price: "Rp 150.000", category: "Baju", imageUrl: "https://picsum.photos/id/110/300/300" },
  { id: 7, name: "Gantungan Kunci", price: "Rp 15.000", category: "Aksesoris", imageUrl: "https://picsum.photos/id/145/300/300" },
  { id: 8, name: "Topi Himatif", price: "Rp 50.000", category: "Baju", imageUrl: "https://picsum.photos/id/158/300/300" },
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
