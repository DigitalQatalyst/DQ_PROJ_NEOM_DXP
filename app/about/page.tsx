"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Globe,
    Users,
    TrendingUp,
    Award,
    Leaf,
    Lightbulb,
    CheckCircle2,
    Target,
    Rocket,
    Zap,
    ShieldCheck,
    Smartphone
} from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";

export default function AboutPage() {
    return (
        <div className="bg-white text-neom-black pt-20">
            {/* Hero Section */}
            <section className="relative h-[70vh] w-full overflow-hidden bg-[#FBFBFB] border-b border-zinc-100">
                <div className="absolute inset-0 bg-gradient-to-br from-neom-gold/5 to-transparent" />
                <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="https://neom.scene7.com/is/image/neom/logo-neom-en-spaced?fmt=png-alpha&scl=1"
                            alt="NEOM"
                            className="mb-12 mx-auto h-24 w-auto object-contain"
                        />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl font-black sm:text-8xl tracking-tighter uppercase leading-none text-neom-black"
                    >
                        A New <span className="text-neom-gold">Future</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-10 max-w-3xl text-xl text-zinc-500 font-medium leading-relaxed"
                    >
                        NEOM is a vision of what a new future might look like. It's an attempt to do something that's never been done before and it's coming at a time when the world needs fresh thinking and new solutions.
                    </motion.p>
                </div>
            </section>

            {/* Core Values & Vision */}
            <section className="py-32 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-24 lg:grid-cols-2 lg:items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 text-neom-gold font-black text-[10px] mb-8 border border-zinc-100 uppercase tracking-widest">
                                <Target className="h-4 w-4" />
                                <span>Vision & Ambition</span>
                            </div>
                            <h2 className="text-4xl font-black tracking-tight text-neom-black sm:text-6xl uppercase leading-none mb-12">
                                Redefining <br /> Humans Progress
                            </h2>
                            <div className="space-y-12">
                                <div>
                                    <h3 className="text-2xl font-black text-neom-black flex items-center gap-4 uppercase tracking-tight">
                                        <div className="h-10 w-1 bg-neom-gold rounded-full" />
                                        Our Vision
                                    </h3>
                                    <p className="mt-6 text-xl leading-relaxed text-zinc-500 font-medium">
                                        To be a global hub for innovation, where the greatest minds and best talents are empowered to embody pioneering ideas and exceed boundaries in a world inspired by imagination.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-neom-black flex items-center gap-4 uppercase tracking-tight">
                                        <div className="h-10 w-1 bg-zinc-200 rounded-full" />
                                        Sustainability
                                    </h3>
                                    <p className="mt-6 text-xl leading-relaxed text-zinc-500 font-medium">
                                        NEOM will be 100% powered by renewable energy. We are committed to preserving 95% of our land for nature, creating a harmonious balance between human development and the environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { icon: Leaf, label: "Eco-Active", desc: "100% renewable energy & preservation", color: "text-neom-gold", bg: "bg-zinc-50" },
                                { icon: Lightbulb, label: "Cognitive", desc: "AI-driven city learning and adapting", color: "text-neom-gold", bg: "bg-zinc-50" },
                                { icon: TrendingUp, label: "Innovation", desc: "Global hub for future industries", color: "text-neom-gold", bg: "bg-zinc-50" },
                                { icon: Award, label: "Livable", desc: "Unmatched quality of life and health", color: "text-neom-gold", bg: "bg-zinc-50" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className={cn("flex flex-col p-10 rounded-[3rem] transition-all border border-zinc-100 shadow-sm hover:shadow-2xl hover:bg-white", item.bg)}
                                >
                                    <div className={cn("mb-8 rounded-2xl bg-white p-4 shadow-sm w-fit border border-zinc-50", item.color)}>
                                        <item.icon className="h-8 w-8" />
                                    </div>
                                    <h4 className="font-black text-xl text-neom-black mb-4 uppercase tracking-tight">{item.label}</h4>
                                    <p className="text-sm text-zinc-500 leading-relaxed font-medium">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Context Section */}
            <section className="bg-[#FBFBFB] py-32 border-y border-zinc-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-24">
                        <h2 className="text-4xl font-black text-neom-black tracking-tight sm:text-6xl uppercase mb-10 leading-none">
                            A Living <span className="text-neom-gold">Laboratory</span>
                        </h2>
                        <div className="text-xl text-zinc-500 space-y-8 font-medium leading-relaxed">
                            <p>
                                NEOM is being built in the Tabuk Province of northwestern Saudi Arabia. It's a land of the future, where the greatest minds and best talents are empowered to embody pioneering ideas and exceed boundaries.
                            </p>
                            <p>
                                Across 15 sectors, from Biotech to Energy, Digital to Media, NEOM is creating a new economy for a new future. It's a place where we can reinvent how we live, work and play.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: "THE LINE", desc: "A cognitive city stretching 170km, with no roads, cars or emissions.", icon: Zap },
                            { title: "OXAGON", desc: "A new model for cognitive industries and the world's largest floating port.", icon: ShieldCheck },
                            { title: "TROJENA", desc: "The first major outdoor skiing destination in the Arabian Peninsula.", icon: Smartphone }
                        ].map((region, i) => (
                            <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-zinc-100 hover:shadow-2xl transition-all group">
                                <div className="h-14 w-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-neom-gold mb-10 group-hover:scale-110 transition-transform">
                                    <region.icon className="h-7 w-7" />
                                </div>
                                <h4 className="text-2xl font-black mb-6 text-neom-black uppercase tracking-tight">{region.title}</h4>
                                <p className="text-zinc-500 text-lg font-medium leading-relaxed">{region.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transformation Journey */}
            <section className="py-32 bg-white">
                <div className="mx-auto max-w-5xl px-4">
                    <div className="flex flex-col items-center text-center mb-24">
                        <Rocket className="h-14 w-14 text-neom-gold mb-6" />
                        <h2 className="text-4xl font-black text-neom-black tracking-tight uppercase sm:text-6xl leading-none">Our Genesis</h2>
                        <p className="mt-6 text-xl text-zinc-400 font-medium">Following the progress of the world's most ambitious project.</p>
                    </div>

                    <div className="space-y-20">
                        {[
                            {
                                year: "2017",
                                title: "NEOM Announced",
                                desc: "His Royal Highness Prince Mohammed bin Salman announces the vision for NEOM at the Future Investment Initiative.",
                                icon: Target
                            },
                            {
                                year: "2021",
                                title: "THE LINE",
                                desc: "A revolution in urban living is announced with THE LINE, a cognitive city that prioritizes people and nature.",
                                icon: Zap
                            },
                            {
                                year: "2022",
                                title: "OXAGON & TROJENA",
                                desc: "Announcing the future of manufacturing with OXAGON and the future of mountain tourism with TROJENA.",
                                icon: Globe
                            },
                            {
                                year: "2023",
                                title: "SINDALAH",
                                desc: "The first luxury island destination in NEOM, set to open its doors to the world in 2024.",
                                icon: Award
                            }
                        ].map((milestone, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex gap-12 group"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="h-20 w-20 rounded-[2rem] bg-zinc-50 border border-zinc-100 flex items-center justify-center text-neom-gold group-hover:bg-neom-black group-hover:text-white transition-all shadow-sm">
                                        <milestone.icon className="h-10 w-10" />
                                    </div>
                                    {idx !== 3 && <div className="w-1 h-full bg-zinc-100 my-6 rounded-full" />}
                                </div>
                                <div className="pb-12">
                                    <span className="text-neom-gold font-black text-3xl tracking-tighter">{milestone.year}</span>
                                    <h4 className="text-3xl font-black text-neom-black mt-4 uppercase tracking-tight">{milestone.title}</h4>
                                    <p className="mt-6 text-zinc-500 leading-relaxed text-xl max-w-2xl font-medium">
                                        {milestone.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA for About */}
            <section className="bg-neom-black py-24 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-black mb-8 uppercase tracking-tight">Part of the Vision?</h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto mb-12 text-xl font-medium leading-relaxed">
                        Join the world's brightest minds in northwest Saudi Arabia and help us build a new future for humanity.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/onboarding" className="w-full sm:w-auto px-12 py-5 bg-neom-gold text-neom-black rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-2xl shadow-neom-gold/20">
                            Join Ecosystem
                        </Link>
                        <Link href="/marketplace" className="w-full sm:w-auto px-12 py-5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all">
                            Explore Sectors
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
