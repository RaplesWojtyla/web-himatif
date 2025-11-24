import React from 'react';
import { Instagram, Twitter, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-himatif-dark text-white py-16">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-himatif-accent rounded-full flex items-center justify-center font-bold text-himatif-dark">
                                H
                            </div>
                            <span className="text-2xl font-bold tracking-wider">HIMATIF</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Himpunan Mahasiswa Teknologi Informasi. Wadah aspirasi dan kreasi mahasiswa TI untuk masa depan yang lebih inovatif.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-himatif-accent uppercase tracking-wider">Hubungi Kami</h3>
                        <ul className="space-y-3 text-slate-300 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-himatif-accent shrink-0 mt-1" />
                                <span>Gedung Student Center Lt. 2, Kampus Pusat, Jl. Teknologi No. 1, Jakarta.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-himatif-accent shrink-0" />
                                <span>sekretariat@himatif.org</span>
                            </li>
                        </ul>
                    </div>

                    {/* Socials Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-himatif-accent uppercase tracking-wider">Sosial Media</h3>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-himatif-accent hover:text-himatif-dark transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-himatif-accent hover:text-himatif-dark transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-himatif-accent hover:text-himatif-dark transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                        <p className="text-xs text-slate-500 mt-8">
                            © 2024 HIMATIF. All rights reserved.
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;