"use client";

import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from "framer-motion";
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
    ArrowRight,
    Heart,
    Filter,
    SortAsc,
    Star,
    TrendingUp,
    Grid3X3,
    List,
    GitCompare,
    Plus,
    X
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const marketplaces = [
    {
        category: "Future Living",
        items: [
            { id: "biotech", name: "Biotech", persona: "Research Scientist", type: "Innovation", desc: "Leading the future of personalized medicine and genetic research.", rating: 4.8, trending: true, featured: true },
            { id: "health-wellbeing", name: "Health and Wellbeing", persona: "Wellness Coordinator", type: "Social", desc: "Redefining health and wellness through integrated, proactive care.", rating: 4.6, trending: false, featured: true },
            { id: "education", name: "Education, Research & Innovation", persona: "Academic Researcher", type: "Academic", desc: "A global hub for lifelong learning and groundbreaking discovery.", rating: 4.9, trending: true, featured: false },
            { id: "food", name: "Food", persona: "Sustainable Farmer", type: "Essential", desc: "Innovative food production and desert agriculture solutions.", rating: 4.5, trending: false, featured: false },
            { id: "water", name: "Water", persona: "Resource Manager", type: "Essential", desc: "Sustainable desalination and water conservation technologies.", rating: 4.7, trending: true, featured: true },
        ],
        icon: User,
        color: "bg-neom-gold"
    },
    {
        category: "Industrial & Infrastructure",
        items: [
            { id: "energy", name: "Energy", persona: "Grid Engineer", type: "Core", desc: "100% renewable energy powering the world's most sustainable city.", rating: 4.9, trending: true, featured: true },
            { id: "design-construction", name: "Design and Construction", persona: "Lead Architect", type: "Core", desc: "Building the future with cognitive and sustainable design.", rating: 4.7, trending: false, featured: true },
            { id: "manufacturing", name: "Manufacturing", persona: "Plant Manager", type: "Core", desc: "Next-generation advanced and clean manufacturing.", rating: 4.4, trending: false, featured: false },
            { id: "mobility", name: "Mobility", persona: "Transit Specialist", type: "Core", desc: "Seamless, autonomous, and sustainable transport solutions.", rating: 4.8, trending: true, featured: true },
            { id: "tech-digital", name: "Technology and Digital", persona: "AI Developer", type: "Core", desc: "The world's first cognitive city, powered by AI and data.", rating: 5.0, trending: true, featured: true },
        ],
        icon: Building2,
        color: "bg-neom-gold"
    },
    {
        category: "Lifestyle & Culture",
        items: [
            { id: "entertainment-culture", name: "Entertainment and Culture", persona: "Creative Director", type: "Lifestyle", desc: "A world-class destination for arts, culture, and entertainment.", rating: 4.6, trending: false, featured: true },
            { id: "media", name: "Media", persona: "Content Creator", type: "Lifestyle", desc: "A revolutionary hub for global media production.", rating: 4.5, trending: true, featured: false },
            { id: "sport", name: "Sport", persona: "Athlete", type: "Lifestyle", desc: "A premier global destination for sport and high performance.", rating: 4.7, trending: true, featured: true },
            { id: "tourism", name: "Tourism", persona: "Travel Agent", type: "Lifestyle", desc: "Luxury and sustainable tourism at the crossroads of the world.", rating: 4.8, trending: true, featured: true },
            { id: "financial-services", name: "Financial Services", persona: "Investment Banker", type: "Lifestyle", desc: "A future-proof financial ecosystem for global business.", rating: 4.6, trending: false, featured: false },
        ],
        icon: Handshake,
        color: "bg-neom-gold"
    }
];

export default function MarketplacePage() {
    const [activeTab, setActiveTab] = useState(marketplaces[0].category);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("name");
    const [filterType, setFilterType] = useState("all");
    const [favorites, setFavorites] = useState<string[]>([]);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [showFilters, setShowFilters] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [compareMode, setCompareMode] = useState(false);
    const [compareList, setCompareList] = useState<string[]>([]);

    // Generate search suggestions
    const generateSuggestions = (query: string) => {
        if (query.length < 2) {
            setSuggestions([]);
            return;
        }
        
        const allItems = marketplaces.flatMap(m => m.items);
        const matches = allItems
            .filter(item => 
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                item.desc.toLowerCase().includes(query.toLowerCase()) ||
                item.persona.toLowerCase().includes(query.toLowerCase())
            )
            .slice(0, 5)
            .map(item => item.name);
        
        setSuggestions(matches);
    };

    const handleSearchChange = (value: string) => {
        setSearchQuery(value);
        generateSuggestions(value);
        setShowSuggestions(true);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setSearchQuery(suggestion);
        setShowSuggestions(false);
        setSuggestions([]);
    };

    const toggleCompareMode = () => {
        setCompareMode(!compareMode);
        setCompareList([]);
    };

    const toggleCompareItem = (itemId: string) => {
        setCompareList(prev => 
            prev.includes(itemId) 
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId].slice(0, 3) // Max 3 items to compare
        );
    };

    const getAllItems = () => {
        return marketplaces.flatMap(m => m.items);
    };

    const getCompareItems = () => {
        const allItems = getAllItems();
        return allItems.filter(item => compareList.includes(item.id));
    };

    const filteredItems = marketplaces
        .find(m => m.category === activeTab)?.items
        .filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.desc.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesType = filterType === "all" || item.type === filterType;
            return matchesSearch && matchesType;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "rating":
                    return b.rating - a.rating;
                case "name":
                    return a.name.localeCompare(b.name);
                case "trending":
                    return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
                default:
                    return 0;
            }
        }) || [];

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
                                onChange={(e) => handleSearchChange(e.target.value)}
                                onFocus={() => setShowSuggestions(true)}
                                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 py-4 pl-14 pr-6 text-neom-black focus:outline-none focus:ring-2 focus:ring-neom-gold transition-all font-bold placeholder:text-zinc-400"
                            />
                            {showSuggestions && suggestions.length > 0 && (
                                <div className="absolute top-full mt-2 w-full bg-white border border-zinc-200 rounded-2xl shadow-xl z-50 overflow-hidden">
                                    {suggestions.map((suggestion, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleSuggestionClick(suggestion)}
                                            className="w-full px-6 py-3 text-left hover:bg-neom-gold/10 transition-colors flex items-center gap-3"
                                        >
                                            <Search className="h-4 w-4 text-zinc-400" />
                                            <span className="font-medium text-neom-black">{suggestion}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-neom-black hover:bg-neom-gold hover:text-neom-black transition-all font-black text-sm uppercase tracking-widest"
                            >
                                <Filter className="h-4 w-4" />
                                Filters
                            </button>
                            <button
                                onClick={toggleCompareMode}
                                className={cn(
                                    "flex items-center gap-2 rounded-2xl border px-4 py-3 transition-all font-black text-sm uppercase tracking-widest",
                                    compareMode 
                                        ? "bg-neom-gold text-neom-black border-neom-gold" 
                                        : "border-zinc-200 bg-white text-neom-black hover:bg-neom-gold hover:text-neom-black"
                                )}
                            >
                                <GitCompare className="h-4 w-4" />
                                Compare ({compareList.length})
                            </button>
                            <div className="flex items-center gap-1 rounded-2xl border border-zinc-200 bg-white p-1">
                                <button
                                    onClick={() => setViewMode("grid")}
                                    className={cn(
                                        "p-2 rounded-xl transition-all",
                                        viewMode === "grid" ? "bg-neom-gold text-neom-black" : "text-zinc-400 hover:text-neom-black"
                                    )}
                                >
                                    <Grid3X3 className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode("list")}
                                    className={cn(
                                        "p-2 rounded-xl transition-all",
                                        viewMode === "list" ? "bg-neom-gold text-neom-black" : "text-zinc-400 hover:text-neom-black"
                                    )}
                                >
                                    <List className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                {/* Compare Bar */}
                {compareMode && compareList.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 p-4 bg-neom-gold/10 border border-neom-gold/20 rounded-2xl flex items-center justify-between"
                    >
                        <div className="flex items-center gap-4">
                            <GitCompare className="h-5 w-5 text-neom-gold" />
                            <span className="font-black text-neom-black uppercase tracking-widest text-sm">
                                Comparing {compareList.length} sector{compareList.length > 1 ? 's' : ''}
                            </span>
                            <div className="flex gap-2">
                                {getCompareItems().map(item => (
                                    <span key={item.id} className="px-3 py-1 bg-neom-gold text-neom-black rounded-full text-xs font-black uppercase tracking-widest">
                                        {item.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            {compareList.length >= 2 && (
                                <button className="px-4 py-2 bg-neom-gold text-neom-black rounded-xl font-black text-xs uppercase tracking-widest hover:bg-neom-black hover:text-neom-gold transition-all">
                                    View Comparison
                                </button>
                            )}
                            <button
                                onClick={() => setCompareList([])}
                                className="p-2 rounded-xl bg-white/80 text-neom-black hover:bg-white transition-all"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* Filters Bar */}
                <AnimatePresence>
                    {showFilters && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mb-8 p-6 bg-zinc-50 rounded-2xl border border-zinc-200"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">Sort By</label>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-neom-black focus:outline-none focus:ring-2 focus:ring-neom-gold font-bold"
                                    >
                                        <option value="name">Name</option>
                                        <option value="rating">Rating</option>
                                        <option value="trending">Trending</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">Filter Type</label>
                                    <select
                                        value={filterType}
                                        onChange={(e) => setFilterType(e.target.value)}
                                        className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-neom-black focus:outline-none focus:ring-2 focus:ring-neom-gold font-bold"
                                    >
                                        <option value="all">All Types</option>
                                        <option value="Innovation">Innovation</option>
                                        <option value="Social">Social</option>
                                        <option value="Academic">Academic</option>
                                        <option value="Essential">Essential</option>
                                        <option value="Core">Core</option>
                                        <option value="Lifestyle">Lifestyle</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">Quick Filters</label>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setFilterType("all")}
                                            className="px-4 py-2 rounded-xl bg-white border border-zinc-200 text-neom-black hover:bg-neom-gold hover:text-neom-black transition-all font-black text-xs uppercase tracking-widest"
                                        >
                                            All
                                        </button>
                                        <button
                                            onClick={() => setSortBy("trending")}
                                            className="px-4 py-2 rounded-xl bg-white border border-zinc-200 text-neom-black hover:bg-neom-gold hover:text-neom-black transition-all font-black text-xs uppercase tracking-widest flex items-center gap-1"
                                        >
                                            <TrendingUp className="h-3 w-3" />
                                            Hot
                                        </button>
                                        <button
                                            onClick={() => setSortBy("rating")}
                                            className="px-4 py-2 rounded-xl bg-white border border-zinc-200 text-neom-black hover:bg-neom-gold hover:text-neom-black transition-all font-black text-xs uppercase tracking-widest flex items-center gap-1"
                                        >
                                            <Star className="h-3 w-3" />
                                            Top
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Sidebar Tabs */}
                    <div className="lg:col-span-1 space-y-3">
                        {marketplaces.map((m, idx) => (
                            <motion.button
                                key={m.category}
                                onClick={() => setActiveTab(m.category)}
                                className={cn(
                                    "flex w-full items-center gap-4 rounded-2xl p-5 text-left font-black uppercase tracking-widest text-[10px] transition-all border relative overflow-hidden",
                                    activeTab === m.category
                                        ? "bg-neom-black text-white border-neom-black shadow-xl"
                                        : "text-zinc-400 hover:bg-zinc-50 border-transparent"
                                )}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {activeTab === m.category && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-neom-gold/20"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <m.icon className={cn("h-5 w-5 relative z-10", activeTab === m.category ? "text-neom-gold" : "text-zinc-300")} />
                                <span className="relative z-10">{m.category}</span>
                                {activeTab === m.category && (
                                    <motion.div
                                        className="ml-auto w-2 h-2 bg-neom-gold rounded-full relative z-10"
                                        layoutId="activeIndicator"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    <div className="lg:col-span-3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3, type: "spring", stiffness: 80 }}
                                layout
                            >
                                <div className={cn(
                                    viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-8" : "space-y-4"
                                )}>
                                    {filteredItems.length > 0 ? (
                                        filteredItems.map((item, idx) => (
                                            <motion.div
                                                key={item.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ 
                                                    duration: 0.5, 
                                                    delay: idx * 0.1,
                                                    type: "spring",
                                                    stiffness: 100
                                                }}
                                                whileHover={{ 
                                                    scale: 1.02,
                                                    transition: { duration: 0.2 }
                                                }}
                                                layout
                                            >
                                                <SectorCard 
                                                    item={item} 
                                                    viewMode={viewMode} 
                                                    favorites={favorites} 
                                                    setFavorites={setFavorites} 
                                                    compareMode={compareMode} 
                                                    compareList={compareList} 
                                                    toggleCompareItem={toggleCompareItem} 
                                                />
                                            </motion.div>
                                        ))
                                    ) : (
                                        <motion.div 
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="col-span-full py-24 text-center"
                                        >
                                            <motion.div
                                                animate={{ 
                                                    scale: [1, 1.1, 1],
                                                    rotate: [0, 5, -5, 0]
                                                }}
                                                transition={{ 
                                                    duration: 2, 
                                                    repeat: Infinity,
                                                    repeatType: "reverse"
                                                }}
                                            >
                                                <Search className="h-12 w-12 text-zinc-200 mx-auto mb-6" />
                                            </motion.div>
                                            <p className="text-zinc-400 font-black uppercase tracking-widest text-sm">No sectors matched our filters.</p>
                                        </motion.div>
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

function SectorCard({ item, viewMode, favorites, setFavorites, compareMode, compareList, toggleCompareItem }: any) {
    const isFavorite = favorites.includes(item.id);
    const isComparing = compareList.includes(item.id);
    
    const toggleFavorite = (e: React.MouseEvent) => {
        e.preventDefault();
        setFavorites(prev => 
            isFavorite 
                ? prev.filter(id => id !== item.id)
                : [...prev, item.id]
        );
    };

    const handleCompareClick = (e: React.MouseEvent) => {
        e.preventDefault();
        toggleCompareItem(item.id);
    };

    if (viewMode === "list") {
        return (
            <motion.div
                whileHover={{ scale: 1.01, x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <Link
                    href={`/marketplace/${item.id}`}
                    className="group flex items-center gap-6 rounded-2xl border border-zinc-100 bg-[#FBFBFB] p-6 shadow-sm transition-all hover:bg-white hover:border-neom-gold hover:shadow-xl"
                >
                    <motion.div 
                        className="flex-shrink-0"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                    >
                        <div className="h-16 w-16 rounded-2xl bg-neom-gold/10 flex items-center justify-center text-neom-gold group-hover:scale-110 transition-transform">
                            <Star className="h-8 w-8" />
                        </div>
                    </motion.div>
                    <div className="flex-grow">
                        <div className="flex items-center gap-4 mb-2">
                            <motion.h3 
                                className="text-xl font-black text-neom-black uppercase tracking-tight group-hover:text-neom-gold transition-colors"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                {item.name}
                            </motion.h3>
                            {item.trending && (
                                <motion.span 
                                    className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-neom-gold"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <TrendingUp className="h-3 w-3" />
                                    Trending
                                </motion.span>
                            )}
                            {item.featured && (
                                <motion.span 
                                    className="px-2 py-1 text-[10px] font-black uppercase tracking-widest bg-neom-gold text-neom-black rounded-full"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    Featured
                                </motion.span>
                            )}
                        </div>
                    <p className="text-sm text-zinc-500 font-medium mb-2">{item.desc}</p>
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] text-neom-gold font-black uppercase tracking-widest">
                            Lead: {item.persona}
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                            {item.type}
                        </span>
                        <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-neom-gold fill-current" />
                            <span className="text-[10px] font-black text-neom-gold">{item.rating}</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    {compareMode && (
                        <motion.button
                            onClick={handleCompareClick}
                            className={cn(
                                "p-3 rounded-xl border transition-all",
                                isComparing 
                                    ? "bg-neom-gold text-neom-black border-neom-gold" 
                                    : "border-zinc-200 bg-white text-zinc-400 hover:text-neom-gold"
                            )}
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <GitCompare className="h-4 w-4" />
                        </motion.button>
                    )}
                    <motion.button
                        onClick={toggleFavorite}
                        className="p-3 rounded-xl border border-zinc-200 bg-white text-zinc-400 hover:text-neom-gold transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.div
                            animate={isFavorite ? { scale: [1, 1.3, 1] } : {}}
                            transition={{ duration: 0.3 }}
                        >
                            <Heart className={cn("h-4 w-4", isFavorite && "fill-current text-neom-gold")} />
                        </motion.div>
                    </motion.button>
                    <motion.div 
                        className="h-10 w-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-neom-gold group-hover:text-neom-black transition-all"
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronRight className="h-5 w-5" />
                    </motion.div>
                </div>
            </Link>
        </motion.div>
    );
    }

    return (
        <motion.div
            whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { duration: 0.2, type: "spring", stiffness: 300 }
            }}
            layout
        >
            <Link
                href={`/marketplace/${item.id}`}
                className="group flex flex-col rounded-[2.5rem] border border-zinc-100 bg-[#FBFBFB] p-8 shadow-sm transition-all hover:bg-white hover:border-neom-gold hover:shadow-2xl relative overflow-hidden"
            >
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-neom-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                />
            <motion.button
                onClick={toggleFavorite}
                className="absolute top-6 right-6 p-3 rounded-xl border border-zinc-200 bg-white/80 backdrop-blur-sm text-zinc-400 hover:text-neom-gold transition-all z-10"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
            >
                <motion.div
                    animate={isFavorite ? { scale: [1, 1.3, 1] } : {}}
                    transition={{ duration: 0.3 }}
                >
                    <Heart className={cn("h-4 w-4", isFavorite && "fill-current text-neom-gold")} />
                </motion.div>
            </motion.button>
            
            {compareMode && (
                <motion.button
                    onClick={handleCompareClick}
                    className={cn(
                        "absolute top-6 right-20 p-3 rounded-xl border transition-all z-10",
                        isComparing 
                            ? "bg-neom-gold text-neom-black border-neom-gold" 
                            : "border-zinc-200 bg-white/80 backdrop-blur-sm text-zinc-400 hover:text-neom-gold"
                    )}
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <GitCompare className="h-4 w-4" />
                </motion.button>
            )}
            
            <motion.div 
                className="mb-6 flex items-center justify-between"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                        {item.type}
                    </span>
                    {item.trending && (
                        <motion.span 
                            className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-neom-gold"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <TrendingUp className="h-3 w-3" />
                            Hot
                        </motion.span>
                    )}
                    {item.featured && (
                        <motion.span 
                            className="px-2 py-1 text-[10px] font-black uppercase tracking-widest bg-neom-gold text-neom-black rounded-full"
                            whileHover={{ scale: 1.1 }}
                        >
                            Featured
                        </motion.span>
                    )}
                </div>
                <motion.div 
                    className="flex items-center gap-1"
                    whileHover={{ scale: 1.1 }}
                >
                    <Star className="h-4 w-4 text-neom-gold fill-current" />
                    <span className="text-[10px] font-black text-neom-gold">{item.rating}</span>
                </motion.div>
            </motion.div>

            <motion.h3 
                className="text-2xl font-black text-neom-black uppercase tracking-tight group-hover:text-neom-gold transition-colors mb-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
            >
                {item.name}
            </motion.h3>
            <p className="text-[10px] text-neom-gold font-black uppercase tracking-widest mb-4">
                Lead: {item.persona}
            </p>
            <p className="text-sm leading-relaxed text-zinc-500 font-medium mb-8">
                {item.desc}
            </p>
            
            <motion.div 
                className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Explore Sector</span>
                <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <ArrowRight className="h-4 w-4 text-neom-gold" />
                </motion.div>
            </motion.div>
            </Link>
        </motion.div>
    );
}
