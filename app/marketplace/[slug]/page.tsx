"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    Search,
    Filter,
    Zap,
    Droplets,
    CreditCard,
    TrendingDown,
    Leaf,
    Home,
    Car,
    Sun,
    CheckCircle2,
    Clock,
    ShieldCheck,
    ChevronRight,
    Star,
    Building2,
    Truck,
    User,
    Hammer,
    FileCheck,
    Building,
    Shield,
    Handshake,
    GraduationCap,
    Factory,
    Lock,
    LayoutGrid,
    Ruler
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { servicesData } from "@/lib/data/marketplace";

const defaultData = servicesData["future-living"];

export default function MarketplaceDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const data = servicesData[slug] || defaultData;

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredServices = data.services.filter(service => {
        const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.desc.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="bg-[#FCFCFC] min-h-screen text-neom-black pt-20 font-sans">
            {/* Header / Hero Section */}
            <div className="bg-white border-b border-zinc-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-neom-gold/5 -skew-x-12 translate-x-1/2" />

                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative">
                    <Link
                        href="/marketplace"
                        className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-neom-gold transition-colors mb-8 group"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Sectors
                    </Link>

                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl font-black text-neom-black tracking-tight uppercase sm:text-6xl"
                        >
                            {data.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mt-6 text-xl text-zinc-500 leading-relaxed font-medium"
                        >
                            {data.description}
                        </motion.p>
                    </div>

                    <div className="mt-12 flex flex-col md:flex-row gap-6 items-center">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-300" />
                            <input
                                type="text"
                                placeholder="Search for a service..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-2xl border border-zinc-100 bg-white py-5 pl-12 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-neom-gold/20 transition-all text-neom-black placeholder:text-zinc-300 font-medium"
                            />
                        </div>
                        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 w-full md:w-auto">
                            <Filter className="h-5 w-5 text-zinc-300 mr-2 flex-shrink-0" />
                            {data.categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={cn(
                                        "px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border",
                                        selectedCategory === cat
                                            ? "bg-neom-black text-white border-neom-black shadow-lg"
                                            : "bg-white text-zinc-400 border-zinc-100 hover:border-neom-gold/50"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-2xl font-black text-neom-black uppercase tracking-tight">
                        Available Services
                        <span className="ml-4 text-xs font-black text-zinc-300 uppercase tracking-widest">
                            ({filteredServices.length} Results)
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <AnimatePresence mode="popLayout">
                        {filteredServices.map((service, idx) => (
                            <motion.div
                                key={service.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="group h-full"
                            >
                                <div className="bg-white rounded-[2.5rem] border border-zinc-100 p-8 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col relative overflow-hidden">
                                    <div className="flex items-start justify-between mb-8">
                                        <div className={cn(
                                            "p-4 rounded-2xl shadow-sm text-white group-hover:scale-110 transition-transform duration-300",
                                            service.color
                                        )}>
                                            {(() => {
                                                const ServiceIcon = service.icon;
                                                return <ServiceIcon className="h-8 w-8" />;
                                            })()}
                                        </div>
                                        <div className="flex flex-col items-end gap-1.5">
                                            {service.isPopular && (
                                                <span className="inline-flex items-center rounded-full bg-orange-50 text-[9px] font-black uppercase tracking-widest text-orange-500 px-3 py-1 border border-orange-100">
                                                    <Star className="h-3 w-3 mr-1 fill-orange-500" />
                                                    POPULAR
                                                </span>
                                            )}
                                            <div className="flex items-center text-zinc-400 text-[10px] font-black tracking-widest">
                                                <Star className="h-3 w-3 mr-1 text-zinc-200 fill-zinc-200" />
                                                {service.popularity > 0 ? service.popularity : "N/A"}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-2">
                                            {service.subCategory || service.category}
                                        </div>
                                        <h3 className="text-2xl font-black text-neom-black tracking-tight uppercase group-hover:text-neom-gold transition-colors leading-none">
                                            {service.name}
                                        </h3>
                                    </div>

                                    <p className="text-zinc-500 text-sm leading-relaxed mb-10 flex-grow font-medium">
                                        {service.desc}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-zinc-50 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-[9px] font-black text-emerald-500 uppercase tracking-[0.2em]">
                                            {service.status === "Available" ? (
                                                <div className="flex items-center">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                                                    Instant Access
                                                </div>
                                            ) : (
                                                <div className="flex items-center text-zinc-400">
                                                    <Clock className="h-3.5 w-3.5 mr-2" />
                                                    Coming Soon
                                                </div>
                                            )}
                                        </div>
                                        {service.status === "Available" ? (
                                            <Link
                                                href={`/marketplace/${slug}/${service.id}`}
                                                className="bg-neom-black text-white px-7 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-neom-gold hover:text-neom-black transition-all flex items-center shadow-lg shadow-black/5"
                                            >
                                                Access Now
                                                <ChevronRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        ) : (
                                            <div className="bg-zinc-100 text-zinc-300 px-7 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest cursor-not-allowed">
                                                Locked
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredServices.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-32 text-center"
                    >
                        <div className="inline-flex items-center justify-center p-8 bg-zinc-50 rounded-full mb-8 border border-zinc-100">
                            <Search className="h-10 w-10 text-zinc-100" />
                        </div>
                        <h3 className="text-2xl font-black text-neom-black uppercase">No services discovered</h3>
                        <p className="mt-4 text-zinc-500 max-w-sm mx-auto font-medium leading-relaxed">
                            The cognitive network couldn't find matches for your current parameters. Try adjusting your exploration filters.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setSelectedCategory("All");
                            }}
                            className="mt-10 bg-neom-gold text-neom-black px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-neom-black hover:text-white transition-all shadow-xl shadow-neom-gold/20"
                        >
                            Reset Exploration
                        </button>
                    </motion.div>
                )}
            </div>

            {/* Bottom CTA */}
            <div className="bg-neom-black border-t border-white/5 py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="text-center lg:text-left max-w-2xl">
                            <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">Searching for sector specifics?</h2>
                            <p className="text-zinc-500 text-xl font-medium leading-relaxed">Our cognitive AI assistant is here to help you navigate NEOM's sectors and synthesize personalized roadmaps.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
                            <button className="bg-neom-gold text-neom-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-2xl shadow-neom-gold/20 whitespace-nowrap">
                                Engage Neural Assistant
                            </button>
                            <button className="border border-white/10 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all whitespace-nowrap">
                                Protocol Support
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
