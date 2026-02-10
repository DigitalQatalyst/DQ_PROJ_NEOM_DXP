"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    Zap,
    FileText,
    Wallet,
    HelpCircle,
    Info,
    CheckCircle2,
    ExternalLink,
    ChevronRight,
    Star,
    Clock,
    ShieldCheck,
    MessageSquare,
    Phone,
    Mail,
    Smartphone
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { servicesData } from "@/lib/data/marketplace";

// Base tabs for details layout
const baseTabs = [
    { id: "overview", label: "Overview", icon: Info },
    { id: "requirements", label: "Requirements", icon: FileText },
    { id: "fees", label: "Fees", icon: Wallet },
    { id: "faqs", label: "FAQs", icon: HelpCircle },
];

export default function ServiceDetailPage() {
    const params = useParams();
    const { slug, serviceId } = params;

    const [activeTab, setActiveTab] = useState("overview");

    // Resolve service from dataset
    const sector = servicesData[(slug as string) || "future-living"] as any;
    const svc = sector?.services?.find((s: any) => s.id === serviceId) as any;
    const serviceDetail = {
        id: svc?.id || "",
        name: svc?.name || "Service",
        category: svc?.subCategory || svc?.category || "",
        shortDesc: svc?.desc || "",
        status: svc?.status || "Available",
        popularity: svc?.popularity || 0,
        reviews: svc?.reviews || 0,
        processingTime: svc?.processingTime || "Instant",
        color: svc?.color || "bg-neom-gold",
        icon: svc?.icon || Zap,
        tabs: baseTabs,
        content: {
            overview: {
                summary: svc?.details?.overview || svc?.desc || "",
                benefits: svc?.details?.features || [],
                howItWorks: (svc?.details?.howItWorks || []).map((t: string, i: number) => ({ step: i + 1, text: t }))
            },
            requirements: {
                documents: svc?.details?.requirements?.documents || [],
                eligibility: svc?.details?.requirements?.eligibility || ""
            },
            fees: {
                structure: svc?.details?.fees?.structure || [],
                note: svc?.details?.fees?.note || ""
            },
            faqs: svc?.details?.faqs || []
        },
        resources: svc?.details?.resources || []
    };

    return (
        <div className="bg-white min-h-screen text-neom-black pt-20">
            {/* Top Bar / Breadcrumbs */}
            <div className="bg-white border-b border-zinc-100 py-6 sticky top-20 z-40">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-[10px] text-zinc-400 mb-2 font-black uppercase tracking-widest">
                        <Link href="/marketplace" className="hover:text-neom-gold">Sectors</Link>
                        <ChevronRight className="h-3 w-3" />
                        <Link href={`/marketplace/${slug}`} className="hover:text-neom-gold capitalize">{slug?.toString().replace("-", " ")}</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-neom-black truncate">{serviceDetail.name}</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="bg-white border-b border-zinc-100">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
                        <div className="flex items-start gap-8">
                            <div className={cn(
                                "p-6 rounded-[2rem] text-white shadow-2xl flex-shrink-0 bg-neom-black"
                            )}>
                                <serviceDetail.icon className="h-10 w-10 text-neom-gold" />
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-zinc-50 text-[10px] font-black text-zinc-400 uppercase tracking-widest border border-zinc-100">
                                        {serviceDetail.category}
                                    </span>
                                    <div className="flex items-center text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                                        <Star className="h-3.5 w-3.5 mr-1.5 fill-neom-gold text-neom-gold" />
                                        {serviceDetail.popularity} ({serviceDetail.reviews} reviews)
                                    </div>
                                </div>
                                <h1 className="text-4xl sm:text-5xl font-black text-neom-black mb-4 tracking-tight uppercase">{serviceDetail.name}</h1>
                                <p className="text-xl text-zinc-500 max-w-2xl font-medium leading-relaxed">{serviceDetail.shortDesc}</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button className="w-full sm:w-auto px-10 py-5 bg-neom-black text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-neom-gold hover:text-neom-black transition-all shadow-2xl shadow-neom-black/10 flex items-center justify-center gap-3">
                                Instant Access <ExternalLink className="h-4 w-4" />
                            </button>
                            <button className="w-full sm:w-auto px-10 py-5 border-2 border-zinc-100 text-neom-black rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-zinc-50 transition-all flex items-center justify-center gap-3">
                                Monitor Process
                            </button>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 bg-zinc-50 rounded-[2.5rem] p-8 border border-zinc-100 font-black uppercase tracking-[0.2em] text-[10px]">
                        <div className="flex items-center gap-4 py-4 md:py-0">
                            <div className="h-12 w-12 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-neom-gold shadow-sm">
                                <Clock className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="text-zinc-400">Verification</div>
                                <div className="text-sm text-neom-black mt-1">{serviceDetail.processingTime}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 border-l border-zinc-200 px-6 py-4 md:py-0">
                            <div className="h-12 w-12 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-neom-gold shadow-sm">
                                <ShieldCheck className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="text-zinc-400">Security</div>
                                <div className="text-sm text-neom-black mt-1">Quantum</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 border-l border-zinc-200 px-6 py-4 md:py-0">
                            <div className="h-12 w-12 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-neom-gold shadow-sm">
                                <Zap className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="text-zinc-400">Channel</div>
                                <div className="text-sm text-neom-black mt-1">Cognitive</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 border-l border-zinc-200 px-6 py-4 md:py-0">
                            <div className="h-12 w-12 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-neom-gold shadow-sm">
                                <Wallet className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="text-zinc-400">Credit Start</div>
                                <div className="text-sm text-neom-black mt-1">₪ 130 +</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="bg-white border-b border-zinc-100 sticky top-[148px] z-30 shadow-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-12 overflow-x-auto scrollbar-hide no-scrollbar">
                        {serviceDetail.tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "flex items-center gap-3 py-8 text-xs font-black uppercase tracking-[0.2em] border-b-2 transition-all whitespace-nowrap",
                                    activeTab === tab.id
                                        ? "border-neom-gold text-neom-black"
                                        : "border-transparent text-zinc-400 hover:text-neom-black"
                                )}
                            >
                                <tab.icon className={cn("h-4 w-4", activeTab === tab.id ? "text-neom-gold" : "text-zinc-300")} />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 font-medium">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {activeTab === "overview" && (
                                    <div className="space-y-12">
                                        <section>
                                            <h2 className="text-3xl font-black text-neom-black mb-6 tracking-tight uppercase">Service Overview</h2>
                                            <p className="text-zinc-500 leading-relaxed text-xl">{serviceDetail.content.overview.summary}</p>
                                        </section>

                                        <section>
                                            <h2 className="text-3xl font-black text-neom-black mb-8 tracking-tight uppercase">Key Features</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {serviceDetail.content.overview.benefits.map((benefit: string, i: number) => (
                                                    <div key={i} className="flex items-center gap-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-100 shadow-sm group hover:border-neom-gold transition-colors">
                                                        <CheckCircle2 className="h-6 w-6 text-neom-gold flex-shrink-0" />
                                                        <span className="text-sm font-black text-neom-black uppercase tracking-tight">{benefit}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <section className="bg-neom-black rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
                                            <h2 className="text-3xl font-black mb-12 relative z-10 tracking-tight uppercase">How It Works</h2>
                                            <div className="space-y-8 relative z-10">
                                                {serviceDetail.content.overview.howItWorks.map((step: { step: number; text: string }) => (
                                                    <div key={step.step} className="flex gap-6 group">
                                                        <div className="h-10 w-10 rounded-full bg-neom-gold flex items-center justify-center font-black text-sm text-neom-black shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                                            {step.step}
                                                        </div>
                                                        <p className="text-zinc-400 pt-1 text-lg font-medium">{step.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        {serviceDetail.resources?.length > 0 && (
                                            <section>
                                                <h2 className="text-3xl font-black text-neom-black mb-8 tracking-tight uppercase">Resources</h2>
                                                <div className="space-y-3">
                                                    {serviceDetail.resources.map((r: any, i: number) => (
                                                        <Link key={i} href={r.href} target="_blank" className="flex items-center justify-between p-6 bg-zinc-50 hover:bg-white border border-transparent hover:border-zinc-100 hover:shadow-xl rounded-[2rem] transition-all group">
                                                            <span className="text-[10px] font-black text-neom-black uppercase tracking-widest">{r.label}</span>
                                                            <ExternalLink className="h-4 w-4 text-zinc-300 group-hover:text-neom-gold transition-colors" />
                                                        </Link>
                                                    ))}
                                                </div>
                                            </section>
                                        )}
                                    </div>
                                )}

                                {activeTab === "requirements" && (
                                    <div className="space-y-12">
                                        <section>
                                            <h2 className="text-3xl font-black text-neom-black mb-8 tracking-tight uppercase">Neural Verification Requirements</h2>
                                            <div className="space-y-4">
                                                {serviceDetail.content.requirements.documents.map((doc: { title: string; desc: string }, i: number) => (
                                                    <div key={i} className="flex items-start gap-6 p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100 hover:border-neom-gold transition-colors">
                                                        <div className="h-12 w-12 rounded-2xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center text-neom-gold shrink-0">
                                                            <FileText className="h-6 w-6" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-black text-neom-black uppercase tracking-tight text-xl mb-1">{doc.title}</h4>
                                                            <p className="text-base text-zinc-500 font-medium">{doc.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <section className="p-8 bg-neom-gold/5 rounded-[2rem] border border-neom-gold/10 flex gap-6">
                                            <Info className="h-7 w-7 text-neom-gold shrink-0" />
                                            <div>
                                                <h4 className="font-black text-neom-black uppercase tracking-widest text-[10px] mb-2">Citizen Compatibility</h4>
                                                <p className="text-lg text-zinc-600 font-medium">{serviceDetail.content.requirements.eligibility}</p>
                                            </div>
                                        </section>
                                    </div>
                                )}

                                {activeTab === "fees" && (
                                    <div className="space-y-12">
                                        <section>
                                            <h2 className="text-3xl font-black text-neom-black mb-10 tracking-tight uppercase">Fees</h2>
                                            <div className="overflow-hidden rounded-[2.5rem] border border-zinc-100 shadow-sm">
                                                <table className="w-full text-left bg-white">
                                                    <thead>
                                                        <tr className="bg-zinc-50 border-b border-zinc-100">
                                                            <th className="px-10 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Protocol Type</th>
                                                            <th className="px-10 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Magnitude</th>
                                                            <th className="px-10 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-zinc-50">
                                                        {serviceDetail.content.fees.structure.map((fee: any, i: number) => (
                                                            <tr key={i} className="hover:bg-zinc-50/50 transition-colors">
                                                                <td className="px-10 py-6 text-base text-zinc-500 font-medium">{fee.label}</td>
                                                                <td className="px-10 py-6 text-base text-neom-black font-black uppercase tracking-tight">{fee.value}</td>
                                                                <td className="px-10 py-6LineContent">
                                                                    <span className={cn(
                                                                        "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border",
                                                                        fee.type === "Refundable" ? "bg-neom-gold/10 text-neom-gold border-neom-gold/20" : "bg-zinc-100 text-zinc-400 border-zinc-200"
                                                                    )}>
                                                                        {fee.type}
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <p className="mt-8 text-sm text-zinc-400 font-black uppercase tracking-widest flex items-center gap-2">
                                                <Info className="h-4 w-4 text-neom-gold" />
                                                {serviceDetail.content.fees.note}
                                            </p>
                                        </section>
                                    </div>
                                )}

                                {activeTab === "faqs" && (
                                    <div className="space-y-8">
                                        <h2 className="text-3xl font-black text-neom-black mb-12 tracking-tight uppercase">Cognitive Inquiries</h2>
                                        {serviceDetail.content.faqs.map((faq: { q: string; a: string }, i: number) => (
                                            <div key={i} className="p-10 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:border-neom-gold transition-all shadow-sm group">
                                                <div className="flex gap-6">
                                                    <div className="h-10 w-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center font-black text-zinc-300 shrink-0 group-hover:text-neom-gold group-hover:border-neom-gold transition-colors">?</div>
                                                    <div>
                                                        <h4 className="font-black text-neom-black text-xl mb-3 tracking-tight uppercase">{faq.q}</h4>
                                                        <p className="text-zinc-500 leading-relaxed text-lg font-medium">{faq.a}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Sidebar Area */}
                    <div className="space-y-12">
                        {/* Help Desk */}
                        <div className="bg-neom-black rounded-[3rem] p-10 text-white shadow-2xl border border-white/5 relative overflow-hidden">
                            <h3 className="text-2xl font-black text-white mb-10 tracking-tight uppercase relative z-10">Need Support?</h3>
                            <div className="space-y-8 font-black uppercase tracking-widest text-[10px] relative z-10">
                                <div className="flex items-center gap-5 group cursor-pointer">
                                    <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-500 group-hover:bg-neom-gold group-hover:text-neom-black transition-all border border-white/5">
                                        <MessageSquare className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-zinc-600">Cognitive Hub</div>
                                        <div className="text-sm text-white group-hover:text-neom-gold transition-colors mt-0.5">Assistant</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 group cursor-pointer">
                                    <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-500 group-hover:bg-neom-gold group-hover:text-neom-black transition-all border border-white/5">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-zinc-600">Direct Link</div>
                                        <div className="text-sm text-white group-hover:text-neom-gold transition-colors mt-0.5">+966 11 000</div>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-12 py-5 bg-neom-gold text-neom-black rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-neom-gold/20 relative z-10">
                                Request Neural Sync
                            </button>
                        </div>

                        {/* Related Services */}
                        <div className="space-y-6">
                            <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] px-4">Related Protocols</h3>
                            <div className="space-y-3">
                                <Link href="#" className="flex items-center justify-between p-6 bg-zinc-50 hover:bg-white border border-transparent hover:border-zinc-100 hover:shadow-xl rounded-[2rem] transition-all group">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-white border border-zinc-100 flex items-center justify-center text-neom-gold"><Zap className="h-5 w-5" /></div>
                                        <span className="text-[10px] font-black text-neom-black uppercase tracking-widest">ENOWA Nexus</span>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-zinc-300 group-hover:text-neom-gold transition-colors" />
                                </Link>
                                <Link href="#" className="flex items-center justify-between p-6 bg-zinc-50 hover:bg-white border border-transparent hover:border-zinc-100 hover:shadow-xl rounded-[2rem] transition-all group">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-white border border-zinc-100 flex items-center justify-center text-neom-gold"><Smartphone className="h-5 w-5" /></div>
                                        <span className="text-[10px] font-black text-neom-black uppercase tracking-widest">Cognitive Mob</span>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-zinc-300 group-hover:text-neom-gold transition-colors" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
