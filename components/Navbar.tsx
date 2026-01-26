"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LogIn, Menu, X, ChevronDown, User, Building2, Truck, Handshake, GraduationCap, LayoutPanelLeft, Globe, ChevronRight, Anchor, Plane } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isExploreOpen, setIsExploreOpen] = useState(false);
    const [isRegionsOpen, setIsRegionsOpen] = useState(false);

    const exploreItems = [
        { name: "Sectors", href: "/marketplace", icon: LayoutPanelLeft },
        { name: "Suppliers", href: "/suppliers", icon: Handshake },
        { name: "Invest", href: "/invest", icon: Handshake },
        { name: "Port of NEOM", href: "/port", icon: Anchor },
        { name: "NEOM Bay Airport", href: "/airport", icon: Plane },
    ];

    const regionsItems = [
        { name: "MAGNA", href: "/regions/magna", comingSoon: true },
        { name: "OXAGON", href: "/regions/oxagon", comingSoon: true },
        { name: "SINDALAH", href: "/regions/sindalah", comingSoon: true },
        { name: "THE LINE", href: "/regions/the-line", comingSoon: true },
        { name: "TROJENA", href: "/regions/trojena", comingSoon: true },
    ];

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#000000]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center shrink-0">
                            <img
                                src="https://neom.scene7.com/is/image/neom/logo-neom-en-spaced?fmt=png-alpha&scl=1"
                                alt="NEOM"
                                className="h-10 w-auto object-contain brightness-0 invert"
                            />
                        </Link>

                        <div className="hidden md:flex items-center space-x-1">
                            {/* Explore Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setIsExploreOpen(true)}
                                onMouseLeave={() => setIsExploreOpen(false)}
                            >
                                <button
                                    className={cn(
                                        "flex items-center gap-1 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] transition-all rounded-full hover:bg-white/5",
                                        pathname.startsWith("/marketplace") ? "text-neom-gold" : "text-white"
                                    )}
                                >
                                    Explore <ChevronDown className={cn("h-3 w-3 transition-transform ml-1", isExploreOpen && "rotate-180")} />
                                </button>

                                {isExploreOpen && (
                                    <div className="absolute left-0 top-full w-64 pt-2">
                                        <div className="bg-[#0A0A0A] rounded-2xl shadow-2xl border border-white/5 overflow-hidden py-3">
                                            {exploreItems.map((item) => (
                                                item.comingSoon ? (
                                                    <div
                                                        key={item.name}
                                                        className="flex items-center justify-between px-6 py-3 text-xs font-black uppercase tracking-widest text-zinc-400 border-b border-white/5 last:border-0 group cursor-default"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <item.icon className="h-4 w-4 opacity-50" />
                                                            <div className="flex flex-col">
                                                                <span>{item.name}</span>
                                                                <span className="text-[8px] text-neom-gold mt-1 animate-pulse">Coming Soon</span>
                                                            </div>
                                                        </div>
                                                        <ChevronRight className="h-3 w-3 opacity-20" />
                                                    </div>
                                                ) : (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="flex items-center gap-3 px-6 py-3 text-xs font-black uppercase tracking-widest text-zinc-400 hover:bg-white/5 hover:text-neom-gold transition-colors"
                                                    >
                                                        <item.icon className="h-4 w-4" />
                                                        {item.name}
                                                    </Link>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Regions Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setIsRegionsOpen(true)}
                                onMouseLeave={() => setIsRegionsOpen(false)}
                            >
                                <button
                                    className={cn(
                                        "flex items-center gap-1 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] transition-all rounded-full hover:bg-white/5 text-white"
                                    )}
                                >
                                    Regions <ChevronDown className={cn("h-3 w-3 transition-transform ml-1", isRegionsOpen && "rotate-180")} />
                                </button>

                                {isRegionsOpen && (
                                    <div className="absolute left-0 top-full w-64 pt-2">
                                        <div className="bg-[#0A0A0A] rounded-2xl shadow-2xl border border-white/5 overflow-hidden py-3">
                                            {regionsItems.map((item) => (
                                                <div
                                                    key={item.name}
                                                    className="flex items-center justify-between px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-zinc-400 border-b border-white/5 last:border-0 group cursor-default"
                                                >
                                                    <div className="flex flex-col">
                                                        <span>{item.name}</span>
                                                        {item.comingSoon && <span className="text-[8px] text-neom-gold mt-1 animate-pulse">Coming Soon</span>}
                                                    </div>
                                                    <ChevronRight className="h-3 w-3 opacity-20" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/insights"
                                className={cn(
                                    "px-4 py-2 text-xs font-black uppercase tracking-[0.2em] transition-all rounded-full hover:bg-white/5",
                                    pathname === "/insights" ? "text-neom-gold" : "text-white"
                                )}
                            >
                                Insights
                            </Link>

                            <Link
                                href="/about"
                                className={cn(
                                    "px-4 py-2 text-xs font-black uppercase tracking-[0.2em] transition-all rounded-full hover:bg-white/5",
                                    pathname === "/about" ? "text-neom-gold" : "text-white"
                                )}
                            >
                                Discover NEOM
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/onboarding"
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-neom-black"
                        >
                            <Handshake className="h-4 w-4" />
                            Become a Partner
                        </Link>

                        <Link
                            href="/signin"
                            className="inline-flex items-center gap-3 rounded-full bg-neom-gold px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-neom-black transition-all hover:bg-white hover:shadow-lg"
                        >
                            <User className="h-4 w-4" />
                            Sign In
                        </Link>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/5 hover:text-neom-gold focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0A0A0A] border-b border-white/5">
                    <div className="space-y-4 px-4 pb-8 pt-4">
                        <div className="space-y-2">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 px-3">Regions</p>
                            {regionsItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center justify-between px-3 py-4 text-xs font-black uppercase tracking-[0.2em] text-zinc-300 hover:bg-white/5 hover:text-neom-gold rounded-xl"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                    <ChevronRight className="h-4 w-4" />
                                </Link>
                            ))}
                        </div>
                        <div className="pt-4 border-t border-white/5 space-y-1">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 px-3 py-2">Discover</p>
                            {exploreItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center justify-between px-3 py-4 text-xs font-black uppercase tracking-[0.2em] text-zinc-300 hover:bg-white/5 hover:text-neom-gold rounded-xl"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <div className="flex items-center gap-3">
                                        <item.icon className="h-5 w-5 text-zinc-500" />
                                        {item.name}
                                    </div>
                                    <ChevronRight className="h-4 w-4" />
                                </Link>
                            ))}
                            <Link
                                href="/about"
                                className="flex items-center justify-between px-3 py-4 text-xs font-black uppercase tracking-[0.2em] text-zinc-300 hover:bg-white/5 hover:text-neom-gold rounded-xl"
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="flex items-center gap-3">
                                    <Globe className="h-5 w-5 text-zinc-500" />
                                    Discover NEOM
                                </div>
                                <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link
                                href="/onboarding"
                                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-4 text-xs font-black uppercase tracking-[0.2em] text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                <Handshake className="h-5 w-5" />
                                Become a Partner
                            </Link>
                            <Link
                                href="/signin"
                                className="flex w-full items-center justify-center gap-2 rounded-full bg-neom-gold px-4 py-4 text-xs font-black uppercase tracking-[0.2em] text-neom-black shadow-xl"
                                onClick={() => setIsOpen(false)}
                            >
                                <LogIn className="h-5 w-5" />
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
