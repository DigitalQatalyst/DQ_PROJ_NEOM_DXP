"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    Filter,
    ChevronRight,
    ArrowUpRight,
    Clock,
    User,
    Tag,
    Download
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { publications, publicationCategories } from "@/lib/data/insights";

export default function InsightsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPublications = publications.filter(pub => {
        const matchesCategory = selectedCategory === "All" || pub.category === selectedCategory;
        const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pub.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPub = publications.find(p => p.featured);

    return (
        <div className="bg-white min-h-screen pt-20 text-neom-black">
            {/* Hero / Header Section */}
            <div className="bg-[#FBFBFB] border-b border-zinc-100 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl font-black text-neom-black sm:text-5xl tracking-tight uppercase">Ecosystem Insights</h1>
                            <p className="mt-4 text-xl text-zinc-500 leading-relaxed font-medium">
                                Explore the research, strategic reports, and technical breakthroughs shaping the first cognitive cities in the world.
                            </p>
                        </div>
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
                            <input
                                type="text"
                                placeholder="Search publications..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-neom-gold text-neom-black placeholder:text-zinc-400"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Publication */}
            {featuredPub && selectedCategory === "All" && !searchQuery && (
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="group relative overflow-hidden rounded-[2.5rem] bg-white text-neom-black shadow-2xl border border-zinc-100"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative h-64 lg:h-auto overflow-hidden">
                                <Image
                                    src={featuredPub.image}
                                    alt={featuredPub.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="relative z-10 p-8 lg:p-16 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-3 py-1 rounded-full bg-neom-gold text-[10px] font-black uppercase tracking-wider text-neom-black">Critical Insight</span>
                                    <span className="text-zinc-400 text-xs font-black uppercase tracking-widest">{featuredPub.category}</span>
                                </div>
                                <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-6 group-hover:text-neom-gold transition-colors uppercase">
                                    {featuredPub.title}
                                </h2>
                                <p className="text-lg text-zinc-500 mb-8 max-w-xl font-medium">
                                    {featuredPub.desc}
                                </p>
                                <div className="flex flex-wrap items-center gap-6 mb-10 text-sm text-zinc-400 font-bold uppercase tracking-widest">
                                    <div className="flex items-center gap-2">
                                        <User className="h-4 w-4 text-neom-gold" />
                                        {featuredPub.author}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-neom-gold" />
                                        {featuredPub.readTime}
                                    </div>
                                </div>
                                <Link
                                    href={`/insights/${featuredPub.id}`}
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-neom-gold text-neom-black rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-neom-black hover:text-white transition-all w-fit shadow-xl shadow-neom-gold/20"
                                >
                                    Access Report <ArrowUpRight className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Categories Navigation */}
            <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-zinc-100 py-4">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide no-scrollbar">
                        <div className="flex h-10 items-center justify-center px-4 bg-zinc-50 border border-zinc-100 rounded-xl text-zinc-400 mr-2 shrink-0">
                            <Filter className="h-4 w-4" />
                        </div>
                        {publicationCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={cn(
                                    "px-6 py-2 rounded-xl text-sm font-black uppercase tracking-widest transition-all whitespace-nowrap",
                                    selectedCategory === cat
                                        ? "bg-neom-gold text-neom-black shadow-lg shadow-neom-gold/20"
                                        : "bg-zinc-50 text-zinc-500 border border-zinc-100 hover:border-neom-gold/50 hover:text-neom-gold"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Publications Grid */}
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredPublications.map((pub, idx) => (
                            <motion.div
                                key={pub.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="group flex flex-col bg-white rounded-3xl border border-zinc-100 overflow-hidden shadow-sm hover:shadow-2xl hover:border-neom-gold/30 transition-all font-medium"
                            >
                                <div className="relative h-56 w-full">
                                    <Image
                                        src={pub.image}
                                        alt={pub.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black text-neom-black border border-zinc-200 uppercase tracking-widest">
                                            {pub.type}
                                        </span>
                                    </div>
                                    {pub.downloadable && (
                                        <div className="absolute top-4 right-4">
                                            <div className="h-8 w-8 rounded-full bg-neom-gold text-neom-black flex items-center justify-center animate-bounce-subtle shadow-lg">
                                                <Download className="h-4 w-4" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Tag className="h-3.5 w-3.5 text-neom-gold" />
                                        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{pub.category}</span>
                                    </div>
                                    <h3 className="text-xl font-black text-neom-black mb-4 group-hover:text-neom-gold transition-colors line-clamp-2 leading-snug uppercase">
                                        {pub.title}
                                    </h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {pub.desc}
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-zinc-50 flex items-center justify-between">
                                        <div className="text-[10px] font-black text-zinc-400 flex items-center gap-2 uppercase tracking-widest">
                                            <Clock className="h-3.5 w-3.5" />
                                            {pub.date}
                                        </div>
                                        <Link
                                            href={`/insights/${pub.id}`}
                                            className="flex items-center justify-center h-10 w-10 rounded-xl bg-zinc-50 border border-zinc-100 text-zinc-400 group-hover:bg-neom-gold group-hover:text-neom-black group-hover:border-neom-gold transition-all"
                                        >
                                            <ChevronRight className="h-5 w-5" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {filteredPublications.length === 0 && (
                    <div className="text-center py-40">
                        <div className="h-20 w-20 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Search className="h-10 w-10 text-zinc-200" />
                        </div>
                        <h2 className="text-2xl font-black text-neom-black mb-2">No publications discovered</h2>
                        <p className="text-zinc-500 font-medium">The cognitive network has no results for your exploration terms.</p>
                        <button
                            onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                            className="mt-8 px-6 py-2 bg-neom-gold text-neom-black rounded-xl font-black uppercase tracking-widest text-sm hover:bg-neom-black hover:text-white transition-all shadow-xl shadow-neom-gold/20"
                        >
                            Reset Search
                        </button>
                    </div>
                )}
            </div>

            {/* Newsletter CTA for Insights */}
            <section className="bg-neom-black py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tight uppercase">Access the Neural Feed</h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto mb-12 text-lg font-medium">
                        Sync with the latest technical breakthroughs and strategic ecosystem updates from NEOM.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your identity-linked email"
                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-neom-gold font-medium"
                        />
                        <button className="w-full sm:w-auto px-8 py-4 bg-neom-gold text-neom-black rounded-2xl font-black uppercase tracking-widest text-sm hover:shadow-lg hover:shadow-neom-gold/20 transition-all">
                            Connect
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
