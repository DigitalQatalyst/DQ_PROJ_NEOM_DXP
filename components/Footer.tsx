import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-zinc-900 pt-16 pb-8 text-zinc-400">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <img
                                src="https://neom.scene7.com/is/image/neom/logo-neom-en-spaced?fmt=png-alpha&scl=1"
                                alt="NEOM"
                                className="h-10 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="mb-6 text-sm leading-relaxed">
                            NEOM is a new vision of what the future could be. A land of the future, where the greatest minds and best talents are empowered to embody pioneering ideas.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/" className="hover:text-neom-gold transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-neom-gold transition-colors">Discover NEOM</Link></li>
                            <li><Link href="/marketplace" className="hover:text-neom-gold transition-colors">Explore Sectors</Link></li>
                            <li><Link href="/signin" className="hover:text-neom-gold transition-colors">Sign In</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Sectors</h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-neom-gold transition-colors">Energy & Water</a></li>
                            <li><a href="#" className="hover:text-neom-gold transition-colors">Biotech</a></li>
                            <li><a href="#" className="hover:text-neom-gold transition-colors">Mobility</a></li>
                            <li><a href="#" className="hover:text-neom-gold transition-colors">Tech & Digital</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-neom-gold shrink-0" />
                                <span>NEOM, Tabuk Region, Saudi Arabia</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-neom-gold shrink-0" />
                                <span>+966 11 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-neom-gold shrink-0" />
                                <span>contact@neom.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t border-zinc-800 pt-8 text-center text-xs">
                    <p>© {new Date().getFullYear()} NEOM Academy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
