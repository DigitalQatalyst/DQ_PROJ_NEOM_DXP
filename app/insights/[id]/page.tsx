"use client";

import { motion } from "framer-motion";
import {
    ArrowLeft,
    Clock,
    User,
    Tag,
    ChevronRight,
    Share2,
    Bookmark,
    Download,
    Eye,
    Facebook,
    Twitter,
    Linkedin,
    MessageCircle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";

// Mock Data for a single insight
const insightData = {
    id: "pub-1",
    title: "Zero-Gravity Urbanism: The Architecture of THE LINE",
    subtitle: "How NEOM is redefining urban density and livability through a revolutionary three-dimensional city model.",
    author: "NEOM Design Authority",
    role: "Strategic Planning Dept",
    date: "January 15, 2026",
    readTime: "15 min read",
    views: "42,850",
    category: "Cognitive Cities",
    type: "Whitepaper / Analysis",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    content: [
        {
            type: "paragraph",
            text: "THE LINE represents a paradigm shift in how we conceive human settlements. By moving away from the traditional horizontal sprawl and hacia zero-gravity urbanism—the idea of layering city functions vertically—we are creating a city that prioritizes people and nature over cars and roads."
        },
        {
            type: "heading",
            text: "Neural Integration in Urban Layouts"
        },
        {
            type: "paragraph",
            text: "NEOM's cognitive network is the heartbeat of THE LINE. By utilizing advanced AI at the design phase, we've optimized every square meter for natural light, ventilation, and social connectivity. Our neural network analyzes millions of occupancy patterns to ensure that every resident is within a 5-minute walk of all essential services."
        },
        {
            type: "image",
            url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
            caption: "Digital Twin simulations of vertical airflow within the urban canyons of THE LINE."
        },
        {
            type: "quote",
            text: "We are not building a city on the land; we are building a city with the land. 95% of NEOM's territory remains untouched, preserved for the wildlife and the natural heritage of the Tabuk region."
        },
        {
            type: "heading",
            text: "Cognitive Energy Protocols"
        },
        {
            type: "paragraph",
            text: "Powering a vertical city requires an unprecedented approach to energy distribution. ENOWA's cognitive grid manages a 100% renewable energy mix, primarily sourced from massive wind and solar fields across the desert. The grid doesn't just respond to demand; it predicts it using the neural data of the city itself, ensuring zero waste and peak efficiency."
        }
    ],
    tags: ["THE LINE", "Zero-Gravity", "Urbanism", "Cognitive Cities", "Sustainability"]
};

export default function InsightDetailPage() {
    const params = useParams();

    return (
        <div className="bg-white min-h-screen pt-20 text-neom-black">
            {/* Top Navigation / Breadcrumbs */}
            <div className="bg-white border-b border-zinc-100 py-4 sticky top-20 z-40">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <Link href="/insights" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-neom-gold transition-all group">
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Insights
                    </Link>
                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-full hover:bg-zinc-50 text-zinc-400 transition-all"><Share2 className="h-4 w-4" /></button>
                        <button className="p-2 rounded-full hover:bg-zinc-50 text-zinc-400 transition-all"><Bookmark className="h-4 w-4" /></button>
                    </div>
                </div>
            </div>

            {/* Article Header */}
            <article className="pb-24">
                <header className="py-20 bg-[#FBFBFB]">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                        <div className="flex items-center justify-center gap-3 mb-10">
                            <span className="px-4 py-1.5 rounded-full bg-neom-gold text-[10px] font-black uppercase tracking-widest text-white">
                                {insightData.category}
                            </span>
                            <span className="text-zinc-400 text-[10px] font-black uppercase tracking-widest">{insightData.date}</span>
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-black text-neom-black leading-tight mb-10 tracking-tight uppercase">
                            {insightData.title}
                        </h1>
                        <p className="text-xl text-zinc-500 leading-relaxed mb-12 max-w-3xl mx-auto font-medium italic">
                            {insightData.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 py-10 border-y border-zinc-100 mt-12">
                            <div className="flex items-center gap-5">
                                <div className="h-16 w-16 rounded-full bg-white border-2 border-neom-gold p-1 shadow-inner overflow-hidden">
                                    <div className="h-full w-full rounded-full bg-zinc-50 flex items-center justify-center text-zinc-300">
                                        <User className="h-7 w-7" />
                                    </div>
                                </div>
                                <div className="text-left">
                                    <div className="text-neom-black font-black uppercase tracking-tight">{insightData.author}</div>
                                    <div className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-black">{insightData.role}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                                <div className="flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-neom-gold" />
                                    {insightData.readTime}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Eye className="h-5 w-5 text-neom-gold" />
                                    {insightData.views} Syncs
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    {/* Featured Image */}
                    <div className="relative aspect-[21/9] w-full rounded-[3rem] overflow-hidden shadow-2xl -mt-10 mb-20 border-8 border-white">
                        <Image
                            src={insightData.image}
                            alt={insightData.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Article Content */}
                    <div className="article-content space-y-16">
                        {insightData.content.map((item, i) => (
                            <div key={i}>
                                {item.type === "paragraph" && (
                                    <p className="text-xl text-zinc-600 leading-relaxed font-medium">
                                        {item.text}
                                    </p>
                                )}
                                {item.type === "heading" && (
                                    <h2 className="text-3xl font-black text-neom-black pt-10 tracking-tight uppercase">
                                        {item.text}
                                    </h2>
                                )}
                                {item.type === "quote" && (
                                    <blockquote className="relative bg-[#FBFBFB] border-l-8 border-neom-gold px-12 py-14 rounded-[3rem] border border-zinc-100 shadow-sm">
                                        <div className="absolute top-6 left-6 opacity-10 text-neom-gold font-black text-8xl">"</div>
                                        <p className="text-2xl font-black italic text-neom-black leading-tight relative z-10">
                                            {item.text}
                                        </p>
                                    </blockquote>
                                )}
                                {item.type === "image" && (
                                    <figure className="space-y-6">
                                        <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
                                            <Image src={item.url!} alt={item.caption || "Insight Image"} fill className="object-cover" />
                                        </div>
                                        {item.caption && (
                                            <figcaption className="text-center text-sm text-zinc-400 italic font-medium">
                                                {item.caption}
                                            </figcaption>
                                        )}
                                    </figure>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-4 mt-24 pt-12 border-t border-zinc-100">
                        {insightData.tags.map(tag => (
                            <span key={tag} className="px-5 py-2.5 bg-zinc-50 text-zinc-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-zinc-100 hover:bg-neom-gold hover:text-white hover:border-neom-gold transition-all cursor-pointer">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Footer / Sharing */}
                    <div className="mt-20 p-12 bg-neom-black rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-12 text-white shadow-2xl">
                        <div className="text-center md:text-left">
                            <h4 className="text-3xl font-black mb-3 tracking-tight uppercase">Synchronize Insights</h4>
                            <p className="text-zinc-500 font-medium">Distribute these findings across your professional neural network.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-neom-gold hover:text-neom-black transition-all border border-white/5"><Linkedin className="h-7 w-7" /></button>
                            <button className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-neom-gold hover:text-neom-black transition-all border border-white/5"><Twitter className="h-7 w-7" /></button>
                            <button className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-neom-gold hover:text-neom-black transition-all border border-white/5"><Facebook className="h-7 w-7" /></button>
                            <button className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-neom-gold hover:text-neom-black transition-all border border-white/5"><MessageCircle className="h-7 w-7" /></button>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Publications */}
            <section className="bg-[#FBFBFB] py-24 border-t border-zinc-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-16">
                        <h3 className="text-3xl font-black text-neom-black tracking-tight uppercase">Neural Recommendations</h3>
                        <Link href="/insights" className="flex items-center gap-2 text-neom-gold font-black uppercase tracking-widest text-xs hover:underline">
                            All Insights <ChevronRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white rounded-[2.5rem] border border-zinc-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all h-full flex flex-col group">
                                <div className="h-56 bg-zinc-50 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    <div className="absolute inset-0 flex items-center justify-center text-zinc-200"><Eye className="h-12 w-12 opacity-20" /></div>
                                </div>
                                <div className="p-10">
                                    <div className="text-[10px] font-black uppercase text-neom-gold mb-3 tracking-widest">Sustainability</div>
                                    <h4 className="text-xl font-black text-neom-black mb-6 line-clamp-2 leading-tight uppercase group-hover:text-neom-gold transition-colors">OXAGON: Powering the circular economy via high-efficiency automation</h4>
                                    <div className="flex items-center gap-2 text-[10px] text-zinc-400 mt-auto pt-8 border-t border-zinc-50 font-black uppercase tracking-widest">
                                        <Clock className="h-4 w-4" />
                                        12 min read · Jan 10
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
