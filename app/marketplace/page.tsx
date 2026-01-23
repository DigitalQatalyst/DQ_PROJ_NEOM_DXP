"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    User,
    Building2,
    Hammer,
    Truck,
    GraduationCap,
    Handshake,
    Accessibility,
    Baby,
    Search,
    ChevronRight,
    ArrowRight
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const marketplaces = [
    {
        category: "Future Living",
        items: [
            { id: "biotech", name: "Biotech", persona: "Research Scientist", type: "Innovation", desc: "Leading the future of personalized medicine and genetic research." },
            { id: "health-wellbeing", name: "Health and Wellbeing", persona: "Wellness Coordinator", type: "Social", desc: "Redefining health and wellness through integrated, proactive care." },
            { id: "education", name: "Education, Research & Innovation", persona: "Academic Researcher", type: "Academic", desc: "A global hub for lifelong learning and groundbreaking discovery." },
            { id: "food", name: "Food", persona: "Sustainable Farmer", type: "Essential", desc: "Innovative food production and desert agriculture solutions." },
            { id: "water", name: "Water", persona: "Resource Manager", type: "Essential", desc: "Sustainable desalination and water conservation technologies." },
        ],
        icon: User,
        color: "bg-neom-gold"
    },
    {
        category: "Industrial & Infrastructure",
        items: [
            { id: "energy", name: "Energy", persona: "Grid Engineer", type: "Core", desc: "100% renewable energy powering the world's most sustainable city." },
            { id: "design-construction", name: "Design and Construction", persona: "Lead Architect", type: "Core", desc: "Building the future with cognitive and sustainable design." },
            { id: "manufacturing", name: "Manufacturing", persona: "Plant Manager", type: "Core", desc: "Next-generation advanced and clean manufacturing." },
            { id: "mobility", name: "Mobility", persona: "Transit Specialist", type: "Core", desc: "Seamless, autonomous, and sustainable transport solutions." },
            { id: "tech-digital", name: "Technology and Digital", persona: "AI Developer", type: "Core", desc: "The world's first cognitive city, powered by AI and data." },
        ],
        icon: Building2,
        color: "bg-neom-gold"
    },
    {
        category: "Lifestyle & Culture",
        items: [
            { id: "entertainment-culture", name: "Entertainment and Culture", persona: "Creative Director", type: "Lifestyle", desc: "A world-class destination for arts, culture, and entertainment." },
            { id: "media", name: "Media", persona: "Content Creator", type: "Lifestyle", desc: "A revolutionary hub for global media production." },
            { id: "sport", name: "Sport", persona: "Athlete", type: "Lifestyle", desc: "A premier global destination for sport and high performance." },
            { id: "tourism", name: "Tourism", persona: "Travel Agent", type: "Lifestyle", desc: "Luxury and sustainable tourism at the crossroads of the world." },
            { id: "financial-services", name: "Financial Services", persona: "Investment Banker", type: "Lifestyle", desc: "A future-proof financial ecosystem for global business." },
        ],
        icon: Handshake,
        color: "bg-neom-gold"
    }
];

export default function MarketplacePage() {
    const [activeTab, setActiveTab] = useState(marketplaces[0].category);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredItems = marketplaces
        .find(m => m.category === activeTab)?.items
        .filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchQuery.toLowerCase())
        ) || [];

    return (
        <div className="bg-white min-h-screen text-neom-black pt-20">
            {/* Header */}
            <div className="bg-white border-b border-zinc-100 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <div>
                            <h1 className="text-4xl sm:text-6xl font-black text-neom-black uppercase tracking-tight">Sectors</h1>
                            <p className="mt-6 text-xl text-zinc-500 max-w-2xl font-medium">
                                Explore the 15 specialized sectors that define NEOM - a new vision of what the future could be.
                            </p>
                        </div>
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
                            <input
                                type="text"
                                placeholder="Search sectors..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 py-4 pl-14 pr-6 text-neom-black focus:outline-none focus:ring-2 focus:ring-neom-gold transition-all font-bold placeholder:text-zinc-400"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Sidebar Tabs */}
                    <div className="lg:col-span-1 space-y-3">
                        {marketplaces.map((m) => (
                            <button
                                key={m.category}
                                onClick={() => setActiveTab(m.category)}
                                className={cn(
                                    "flex w-full items-center gap-4 rounded-2xl p-5 text-left font-black uppercase tracking-widest text-[10px] transition-all border",
                                    activeTab === m.category
                                        ? "bg-neom-black text-white border-neom-black shadow-xl"
                                        : "text-zinc-400 hover:bg-zinc-50 border-transparent"
                                )}
                            >
                                <m.icon className={cn("h-5 w-5", activeTab === m.category ? "text-neom-gold" : "text-zinc-300")} />
                                <span>{m.category}</span>
                            </button>
                        ))}
                    </div>

                    <div className="lg:col-span-3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {filteredItems.length > 0 ? (
                                        filteredItems.map((item, idx) => (
                                            <Link
                                                key={idx}
                                                href={`/marketplace/${item.id}`}
                                                className="group flex flex-col rounded-[2.5rem] border border-zinc-100 bg-[#FBFBFB] p-8 shadow-sm transition-all hover:bg-white hover:border-neom-gold hover:shadow-2xl"
                                            >
                                                <div className="mb-6 flex items-center justify-between">
                                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                                                        {item.type}
                                                    </span>
                                                    <div className="h-10 w-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-neom-gold group-hover:text-neom-black transition-all">
                                                        <ChevronRight className="h-5 w-5" />
                                                    </div>
                                                </div>

                                                <h3 className="text-2xl font-black text-neom-black uppercase tracking-tight group-hover:text-neom-gold transition-colors">
                                                    {item.name}
                                                </h3>
                                                <p className="mt-2 text-[10px] text-neom-gold font-black uppercase tracking-widest">
                                                    Lead: {item.persona}
                                                </p>
                                                <p className="mt-6 text-sm leading-relaxed text-zinc-500 font-medium">
                                                    {item.desc}
                                                </p>
                                                <div className="mt-10 pt-6 border-t border-zinc-100 flex items-center justify-between">
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Explore Sector</span>
                                                    <ArrowRight className="h-4 w-4 text-neom-gold group-hover:translate-x-2 transition-transform" />
                                                </div>
                                            </Link>
                                        ))
                                    ) : (
                                        <div className="col-span-full py-24 text-center">
                                            <Search className="h-12 w-12 text-zinc-200 mx-auto mb-6" />
                                            <p className="text-zinc-400 font-black uppercase tracking-widest text-sm">No sectors matched our filters.</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
