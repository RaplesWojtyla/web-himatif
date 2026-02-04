import React from 'react';
import { STATS, VISI_MISI, PENGURUS_HARIAN, DIVISIONS, EVENTS, PRODUCTS, NEWS, SHOP_CATEGORIES } from '../data/constants';
import { ArrowRight, Calendar, User, ChevronRight, ShoppingCart, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const App: React.FC = () => {
	return (
		<div className="min-h-screen font-sans selection:bg-himatif-accent selection:text-himatif-dark">
			<Navbar />

			{/* HERO SECTION */}
			<section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-himatif-dark">
				<div className="absolute inset-0 z-0 opacity-30">
					<img
						src="https://picsum.photos/id/180/1920/1080"
						alt="Background"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="absolute inset-0 bg-gradient-to-b from-himatif-dark/50 via-himatif-dark/80 to-himatif-dark z-10"></div>

				<div className="container mx-auto px-4 z-20 text-center">
					<h2 className="text-himatif-accent font-bold tracking-widest text-sm md:text-base mb-4 animate-bounce">WELCOME TO OFFICIAL WEBSITE</h2>
					<h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
						HIMPUNAN MAHASISWA <br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-himatif-accent">TEKNOLOGI INFORMASI</span>
					</h1>
					<p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
						Wadah aspirasi, kreasi, dan inovasi bagi seluruh mahasiswa Teknologi Informasi untuk mewujudkan masa depan digital yang lebih baik.
					</p>
					<div className="flex flex-col md:flex-row gap-4 justify-center">
						<Link href="#about" className="px-8 py-3 bg-himatif-accent text-himatif-dark font-bold rounded-full hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg">
							Tentang Kami
						</Link>
						<Link href="#events" className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-himatif-dark transition-all transform hover:scale-105">
							Program Kerja
						</Link>
					</div>
				</div>
			</section>

			{/* STATS BAR */}
			<div className="bg-white shadow-xl relative z-30 -mt-16 container mx-auto rounded-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:mx-auto max-w-6xl border-b-4 border-himatif-accent">
				{STATS.map((stat, idx) => (
					<div key={idx} className="text-center border-r last:border-0 border-slate-100">
						<div className="text-3xl md:text-4xl font-black text-himatif-primary mb-1">{stat.value}</div>
						<div className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
					</div>
				))}
			</div>

			{/* ABOUT & VISI MISI */}
			<section id="about" className="py-20 bg-slate-50">
				<div className="container mx-auto px-4 md:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
						<div>
							<div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold mb-4">TENTANG KAMI</div>
							<h2 className="text-3xl md:text-4xl font-bold text-himatif-dark mb-6">Latar Belakang HIMATIF</h2>
							<p className="text-slate-600 leading-relaxed mb-6">
								Himpunan Mahasiswa Teknologi Informasi (HIMATIF) didirikan sebagai respons terhadap kebutuhan wadah pengembangan diri mahasiswa di luar kegiatan akademik. Kami hadir untuk menjembatani aspirasi mahasiswa dengan pihak prodi, serta menjadi inkubator bakat di bidang teknologi.
							</p>
							<p className="text-slate-600 leading-relaxed">
								Sejak berdiri, HIMATIF telah melahirkan ratusan alumni yang sukses berkiprah di berbagai perusahaan teknologi ternama.
							</p>
						</div>
						<div className="relative">
							<img src="https://picsum.photos/id/60/600/400" alt="About Us" className="rounded-2xl shadow-2xl z-10 relative" />
							<div className="absolute -bottom-6 -right-6 w-48 h-48 bg-himatif-accent/20 rounded-full -z-0 blur-2xl"></div>
							<div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full -z-0 blur-xl"></div>
						</div>
					</div>

					{/* VISI MISI CARDS */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow md:col-span-1">
							<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
								<ArrowUpRight size={24} />
							</div>
							<h3 className="text-xl font-bold text-himatif-dark mb-4">Visi Kami</h3>
							<p className="text-slate-600 text-sm leading-relaxed">{VISI_MISI.visi}</p>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow md:col-span-2">
							<div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-6">
								<ChevronRight size={24} />
							</div>
							<h3 className="text-xl font-bold text-himatif-dark mb-4">Misi Kami</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{VISI_MISI.misi.map((m, i) => (
									<div key={i} className="flex gap-3 items-start">
										<span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
										<p className="text-slate-600 text-sm">{m}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* PENGURUS HARIAN */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4 md:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-himatif-dark mb-2">Badan Pengurus Harian</h2>
						<p className="text-slate-500">Nakhoda kapal HIMATIF periode 2024/2025</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{PENGURUS_HARIAN.map((member) => (
							<div key={member.id} className="group relative text-center">
								<div className="relative overflow-hidden rounded-2xl mb-4 mx-auto w-full aspect-square">
									<img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" />
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
										<span className="text-white text-xs font-bold tracking-widest uppercase"></span>
									</div>
								</div>
								<h3 className="text-lg font-bold text-himatif-dark">{member.name}</h3>
								<p className="text-sm text-himatif-primary font-medium">{member.role}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* DIVISI SECTION */}
			<section id="divisions" className="py-20 bg-himatif-dark text-white">
	<div className="container mx-auto px-4 md:px-8">
		<div className="flex justify-between items-end mb-12">
			<div>
				<div className="text-himatif-accent font-bold mb-2 uppercase tracking-widest text-sm">
					Struktur Organisasi
				</div>
				<h2 className="text-3xl md:text-4xl font-bold">Divisi Kami</h2>
			</div>
			<div className="hidden md:block text-slate-400 text-sm max-w-xs text-right">
				Fokus area pengembangan untuk menunjang softskill dan hardskill anggota.
			</div>
		</div>

		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{DIVISIONS.map((div) => (
				<Link
					key={div.id}
					href={`/divisions/${div.id}`}
					className="bg-slate-800 rounded-xl overflow-hidden hover:bg-slate-700 transition-colors group cursor-pointer border border-slate-700 block"
				>
					<div className="h-48 overflow-hidden">
						<img
							src={div.imageUrl}
							alt={div.name}
							className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
						/>
					</div>
					<div className="p-6">
						<h3 className="text-xl font-bold text-white mb-2 group-hover:text-himatif-accent transition-colors">
							{div.name}
						</h3>
						<p className="text-slate-400 text-sm mb-4 line-clamp-3">
							{div.description}
						</p>
						<span className="text-xs font-bold text-himatif-accent uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
							Selengkapnya <ArrowRight size={12} />
						</span>
					</div>
				</Link>
			))}
		</div>
	</div>
</section>

			{/* EVENTS SECTION (Horizontal Scroll) */}
			<section id="events" className="py-20 bg-slate-50 overflow-hidden">
				<div className="container mx-auto px-4 md:px-8 relative">
					<div className="mb-10 flex justify-between items-center">
						<h2 className="text-3xl font-bold text-himatif-dark">Program Kerja & Event</h2>
						<Link href="#" className="text-himatif-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
							Lihat Semua <ArrowRight size={16} />
						</Link>
					</div>

					<div className="flex overflow-x-auto pb-8 gap-6 snap-x md:grid md:grid-cols-3 md:overflow-visible">
						{EVENTS.map((event) => (
							<div key={event.id} className="min-w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden snap-center group">
								<div className="h-48 overflow-hidden relative">
									<img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
									<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-himatif-dark shadow-sm">
										Coming Soon
									</div>
								</div>
								<div className="p-6">
									<div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
										<Calendar size={14} className="text-himatif-accent" />
										<span>{event.date}</span>
									</div>
									<h3 className="text-lg font-bold text-himatif-dark mb-2 group-hover:text-himatif-primary transition-colors">{event.title}</h3>
									<p className="text-slate-600 text-sm mb-4">{event.description}</p>
									<button className="w-full py-2 rounded-lg border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-himatif-primary hover:text-white hover:border-himatif-primary transition-all">
										Detail Event
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* SHOP SECTION */}
			<section id="shop" className="py-20 bg-white">
				<div className="container mx-auto px-4 md:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-himatif-dark">Himatif Shop</h2>
						<p className="text-slate-500 mt-2">Dukung kami dengan membeli merchandise resmi</p>
					</div>

					{/* Categories */}
					<div className="flex flex-wrap justify-center gap-4 mb-12">
						{SHOP_CATEGORIES.map((cat, idx) => (
							<div key={idx} className="flex flex-col items-center justify-center w-24 h-24 bg-slate-50 rounded-xl border border-slate-100 hover:border-himatif-accent hover:shadow-md cursor-pointer transition-all group">
								<span className="text-2xl mb-2 group-hover:scale-110 transition-transform">{cat.icon}</span>
								<span className="text-xs font-medium text-slate-600">{cat.name}</span>
							</div>
						))}
					</div>

					{/* Product Grid */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{PRODUCTS.map((product) => (
							<div key={product.id} className="group">
								<div className="bg-slate-100 rounded-xl overflow-hidden mb-3 relative aspect-square">
									<img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
									<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-himatif-dark translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-himatif-accent">
										<ShoppingCart size={18} />
									</button>
									<span className="absolute top-3 left-3 text-[10px] font-bold bg-himatif-dark text-white px-2 py-1 rounded">{product.category}</span>
								</div>
								<div>
									<h3 className="font-bold text-himatif-dark truncate">{product.name}</h3>
									<p className="text-himatif-primary font-semibold">{product.price}</p>
								</div>
							</div>
						))}
					</div>

					<div className="mt-12 text-center">
						<Link href="#" className="inline-block px-8 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-colors">
							Lihat Semua Produk
						</Link>
					</div>
				</div>
			</section>

			{/* NEWS SECTION */}
			<section id="news" className="py-20 bg-slate-50 border-t border-slate-200">
				<div className="container mx-auto px-4 md:px-8">
					<div className="flex justify-between items-center mb-10">
						<div>
							<h2 className="text-3xl font-bold text-himatif-dark">Berita Terkini</h2>
							<p className="text-sm text-slate-500 mt-1">Update terbaru seputar kegiatan kampus dan himpunan</p>
						</div>
						<div className="flex gap-2">
							<button className="w-10 h-10 border border-slate-300 rounded-full flex items-center justify-center text-slate-500 hover:bg-white hover:shadow-sm transition-all">
								&larr;
							</button>
							<button className="w-10 h-10 border border-slate-300 rounded-full flex items-center justify-center text-slate-500 hover:bg-white hover:shadow-sm transition-all">
								&rarr;
							</button>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{NEWS.map((item) => (
							<article key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
								<div className="h-48 overflow-hidden">
									<img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
								</div>
								<div className="p-6 flex-1 flex flex-col">
									<div className="flex items-center gap-2 mb-3">
										<span className="w-2 h-2 bg-himatif-accent rounded-full"></span>
										<span className="text-xs font-semibold text-slate-400 uppercase">{item.date}</span>
									</div>
									<h3 className="text-lg font-bold text-himatif-dark mb-3 hover:text-himatif-primary cursor-pointer leading-tight">
										{item.title}
									</h3>
									<p className="text-slate-500 text-sm mb-4 line-clamp-3 flex-1">
										{item.excerpt}
									</p>
									<Link href="#" className="text-himatif-primary text-sm font-bold hover:underline mt-auto inline-block">
										Baca Selengkapnya
									</Link>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* CTA SECTION */}
			<section className="py-20 bg-himatif-primary relative overflow-hidden">
				<div className="absolute top-0 left-0 w-full h-full">
					<div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
					<div className="absolute bottom-0 right-0 w-96 h-96 bg-himatif-accent/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
				</div>
				<div className="container mx-auto px-4 text-center relative z-10">
					<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Siap Berkontribusi?</h2>
					<p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
						Bergabunglah bersama kami untuk mengembangkan potensi diri dan membangun relasi di dunia teknologi informasi.
					</p>
					<button className="bg-himatif-accent text-himatif-dark px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-yellow-300 transition-all transform hover:-translate-y-1">
						Daftar Anggota Sekarang
					</button>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default App;