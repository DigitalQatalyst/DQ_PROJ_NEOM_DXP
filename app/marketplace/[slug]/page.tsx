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
    Truck
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";

// Mock Data for Services
const servicesData: Record<string, {
    title: string;
    description: string;
    services: any[];
    categories: string[];
}> = {
    "future-living": {
        title: "Future Living Sector",
        description: "Experience THE LINE and our specialized residential services, focusing on 100% renewable energy and an urban design that prioritizes human health.",
        categories: ["All", "Connectivity", "Resources", "Wellness", "Smart Spaces", "Residency"],
        services: [
            {
                id: "activate-home",
                name: "Cognitive Onboarding",
                desc: "Initialize your living space within THE LINE with instant identity-linked service activation.",
                category: "Connectivity",
                icon: Zap,
                status: "Available",
                popularity: 4.9,
                color: "bg-neom-gold",
                isPopular: true
            },
            {
                id: "enowa-billing",
                name: "ENOWA Nexus Pay",
                desc: "Seamless, automated billing for your energy and water consumption through NEOM's circular system.",
                category: "Resources",
                icon: CreditCard,
                status: "Available",
                popularity: 4.8,
                color: "bg-zinc-100",
                isPopular: true
            },
            {
                id: "automated-transit",
                name: "Hyper-Mobility Access",
                desc: "Manage your access to NEOM's high-speed underground transit and last-mile autonomous shuttles.",
                category: "Wellness",
                icon: Car,
                status: "Available",
                popularity: 4.7,
                color: "bg-neom-gold"
            },
            {
                id: "energy-positive",
                name: "Energy Positive Management",
                desc: "Monitor your home's contribution to the grid and receive surplus energy credits.",
                category: "Resources",
                icon: Sun,
                status: "Available",
                popularity: 4.6,
                color: "bg-neom-gold"
            }
        ]
    },
    "energy-water": {
        title: "Energy & Water Sector",
        description: "Managing the world's most sustainable utility ecosystem. Powered by 100% renewable energy and zero-liquid discharge desalination.",
        categories: ["All", "Production", "Grid Management", "Innovation", "Circular Economy"],
        services: [
            {
                id: "solar-hydrogen",
                name: "Green Hydrogen Portal",
                desc: "Monitor industrial-scale green hydrogen production and distribution across NEOM's logistics network.",
                category: "Production",
                icon: Leaf,
                status: "Available",
                popularity: 4.9,
                color: "bg-neom-gold",
                isPopular: true
            },
            {
                id: "enowa-smart-grid",
                name: "Cognitive Grid Network",
                desc: "Advanced AI-driven load balancing for 100% renewable energy distribution to all sectors.",
                category: "Grid Management",
                icon: Zap,
                status: "Available",
                popularity: 4.7,
                color: "bg-zinc-100"
            }
        ]
    },
    "biotech": {
        title: "Biotech Sector",
        description: "Leading the future of personalized medicine, genomics, and bio-industrial innovation within the NEOM ecosystem.",
        categories: ["All", "Research", "Genomics", "Healthcare", "Bio-Innovation"],
        services: [
            {
                id: "neural-mapping",
                name: "Neural Health Mapping",
                desc: "Advanced cognitive health monitoring using integrated biometric sensors and neural feedback.",
                category: "Healthcare",
                icon: ShieldCheck,
                status: "Available",
                popularity: 4.9,
                color: "bg-neom-gold",
                isPopular: true
            },
            {
                id: "genetic-synthesis",
                name: "Genomic Synthesis Lab",
                desc: "Access localized genetic research tools and personalized medicine formulation services.",
                category: "Research",
                icon: Zap,
                status: "Available",
                popularity: 4.8,
                color: "bg-zinc-100"
            }
        ]
    }
};

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
        <div className="bg-white min-h-screen text-neom-black pt-20">
            {/* Header / Hero Section */}
            <div className="bg-[#FBFBFB] border-b border-zinc-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-neom-gold/5 -skew-x-12 translate-x-1/2" />

                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 relative">
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
                            className="text-4xl font-black text-neom-black tracking-tight uppercase sm:text-5xl"
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
                                className="w-full rounded-2xl border border-zinc-100 bg-white py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-neom-gold transition-all text-neom-black placeholder:text-zinc-300 font-medium"
                            />
                        </div>
                        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 w-full md:w-auto">
                            <Filter className="h-5 w-5 text-zinc-300 mr-2 flex-shrink-0" />
                            {data.categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={cn(
                                        "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border",
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

            {/* Services Grid */}
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-2xl font-black text-neom-black uppercase tracking-tight">
                        Available Protocols
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
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2, delay: idx * 0.05 }}
                                className="group relative flex flex-col rounded-[2.5rem] border border-zinc-100 bg-white p-2 transition-all hover:border-neom-gold/30 hover:shadow-2xl"
                            >
                                <div className="p-8 flex flex-col h-full bg-white rounded-[2.2rem]">
                                    <div className="flex items-start justify-between mb-8">
                                        <div className={cn(
                                            "p-4 rounded-2xl text-neom-black shadow-sm border border-zinc-50",
                                            service.color,
                                            "group-hover:scale-110 transition-transform duration-300"
                                        )}>
                                            <service.icon className="h-7 w-7" />
                                        </div>
                                        <div className="flex flex-col items-end gap-2 text-[10px] font-black uppercase tracking-widest">
                                            {service.isPopular && (
                                                <span className="inline-flex items-center rounded-full bg-neom-gold text-neom-black px-3 py-1 shadow-lg shadow-neom-gold/20">
                                                    <Star className="h-3 w-3 mr-1.5 fill-neom-black" />
                                                    Priority
                                                </span>
                                            )}
                                            <div className="flex items-center text-zinc-300 py-1">
                                                <Star className="h-3 w-3 mr-1 fill-zinc-100 text-zinc-100" />
                                                {service.popularity}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <div className="text-[10px] font-black text-neom-gold uppercase tracking-[0.2em] mb-2">
                                            {service.category}
                                        </div>
                                        <h3 className="text-xl font-black text-neom-black group-hover:text-neom-gold transition-colors uppercase tracking-tight">
                                            {service.name}
                                        </h3>
                                    </div>

                                    <p className="text-zinc-500 leading-relaxed mb-10 flex-grow font-medium">
                                        {service.desc}
                                    </p>

                                    <div className="mt-auto pt-8 border-t border-zinc-50 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                                            {service.status === "Available" ? (
                                                <>
                                                    <CheckCircle2 className="h-4 w-4 text-neom-gold" />
                                                    Quantum Ready
                                                </>
                                            ) : (
                                                <>
                                                    <Clock className="h-4 w-4 text-zinc-200" />
                                                    Synthesizing
                                                </>
                                            )}
                                        </div>
                                        <Link
                                            href={`/marketplace/${slug}/${service.id}`}
                                            className={cn(
                                                "inline-flex items-center justify-center rounded-xl px-6 py-3 text-[10px] font-black transition-all uppercase tracking-widest",
                                                service.status === "Available"
                                                    ? "bg-neom-black text-white hover:bg-neom-gold hover:text-neom-black hover:shadow-xl"
                                                    : "bg-zinc-50 text-zinc-300 cursor-not-allowed"
                                            )}
                                        >
                                            {service.status === "Available" ? "Access" : "Monitor"}
                                            {service.status === "Available" && <ChevronRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
                                        </Link>
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
