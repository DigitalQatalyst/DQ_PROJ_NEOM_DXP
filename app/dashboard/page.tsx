"use client";

import { useState, Suspense } from "react";
import {
    LayoutDashboard,
    User,
    Handshake,
    Truck,
    Settings,
    LogOut,
    Bell,
    MessageSquare,
    Search,
    ChevronRight,
    Lock,
    AlertCircle,
    Activity,
    FileText,
    Zap,
    TrendingUp,
    ShieldCheck,
    GraduationCap,
    Package
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const dashboardConfigs = {
    partner: {
        name: "Strategic Partner",
        role: "Innovation Provider",
        icon: Handshake,
        color: "text-neom-gold",
        bg: "bg-neom-gold/10",
        stats: [
            { label: "Sector Projects", value: "4", icon: Activity },
            { label: "Innovation Index", value: "95", icon: TrendingUp },
            { label: "Pending Reviews", value: "2", icon: FileText }
        ],
        menu: [
            { label: "Partner Overview", icon: LayoutDashboard },
            { label: "Sector Programs", icon: Zap },
            { label: "Compliance", icon: ShieldCheck },
            { label: "Ecosystem Docs", icon: FileText },
        ]
    },
    customer: {
        name: "Resident Account",
        role: "Cognitive City Resident",
        icon: User,
        color: "text-neom-gold",
        bg: "bg-neom-gold/10",
        stats: [
            { label: "Daily Footprint", value: "Low", icon: Zap },
            { label: "Wallet Balance", value: "₪ 1,240", icon: FileText },
            { label: "Active Services", value: "5", icon: Package }
        ],
        menu: [
            { label: "Home Overview", icon: LayoutDashboard },
            { label: "Living Services", icon: Package },
            { label: "Usage & Impact", icon: Zap },
            { label: "Governance", icon: ShieldCheck },
        ]
    },
    supplier: {
        name: "Supplier Portal",
        role: "Registered Vendor",
        icon: Truck,
        color: "text-neom-gold",
        bg: "bg-neom-gold/10",
        stats: [
            { label: "Active Bids", value: "12", icon: FileText },
            { label: "Shipments", value: "156", icon: Package },
            { label: "Performance", value: "9.8/10", icon: TrendingUp }
        ],
        menu: [
            { label: "Supply Overview", icon: LayoutDashboard },
            { label: "Open Tenders", icon: FileText },
            { label: "Procurement", icon: Package },
            { label: "Audits", icon: ShieldCheck },
        ]
    }
};

const mockBilling = [
    { id: "NEOM-2026-001", amount: "₪ 840.00", date: "Jan 15, 2026", status: "Processed", type: "Energy" },
    { id: "NEOM-2026-002", amount: "₪ 400.00", date: "Jan 12, 2026", status: "Processed", type: "Water" },
    { id: "NEOM-2025-112", amount: "₪ 1,120.50", date: "Dec 15, 2025", status: "Processed", type: "Transport" },
];

const mockTenders = [
    { id: "TND-NEOM-992", title: "OXAGON Modular Housing - Phase 1", closing: "Feb 20, 2026", value: "Critical", status: "Open" },
    { id: "TND-NEOM-105", title: "Renewable Grid Infrastructure", closing: "Mar 05, 2026", value: "High", status: "In Review" },
];

const mockPrograms = [
    { id: "PRG-01", title: "AI-First Urban Mobility", stage: "Scaling", partners: ["NEOM AI", "NVIDIA"], health: "Stable" },
    { id: "PRG-02", title: "Deep Sea Desalination", stage: "Pilot", partners: ["ENOWA"], health: "Optimized" },
];

export default function DashboardPage() {
    return (
        <Suspense fallback={<DashboardLoading />}>
            <DashboardContent />
        </Suspense>
    );
}

function DashboardLoading() {
    return (
        <div className="flex h-screen bg-white items-center justify-center">
            <div className="text-center">
                <div className="h-16 w-16 bg-neom-gold rounded-3xl flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <LayoutDashboard className="h-8 w-8 text-neom-black" />
                </div>
                <p className="text-sm font-black text-zinc-400 uppercase tracking-widest">Loading Dashboard...</p>
            </div>
        </div>
    );
}

function DashboardContent() {
    const searchParams = useSearchParams();
    const type = (searchParams.get("type") as "partner" | "customer" | "supplier") || "customer";
    const isOnboarded = searchParams.get("onboarded") === "true";
    const config = dashboardConfigs[type];

    const [activeTab, setActiveTab] = useState(config.menu[0].label);

    const renderContent = () => {
        if (!isOnboarded) {
            return (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl space-y-8"
                >
                    <div className="bg-neom-gold/5 border-2 border-neom-gold/10 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-10 shadow-sm">
                        <div className="h-24 w-24 rounded-3xl bg-neom-gold flex items-center justify-center text-neom-black shrink-0 shadow-2xl shadow-neom-gold/30">
                            <AlertCircle className="h-12 w-12" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-black text-neom-black leading-tight uppercase tracking-tight">Complete your profile</h3>
                            <p className="text-zinc-500 text-lg font-medium mt-2 leading-relaxed">
                                Your access is currently in demo mode. Finalize your onboarding to access active {type} sectors within the NEOM ecosystem.
                            </p>
                        </div>
                        <Link
                            href={`/onboarding?type=${type}`}
                            className="inline-flex items-center gap-2 bg-neom-black text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-neom-gold hover:text-neom-black transition-all shadow-xl"
                        >
                            Complete Now <ChevronRight className="h-5 w-5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {config.stats.map((stat, i) => (
                            <div key={i} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[2rem] opacity-60 relative overflow-hidden group">
                                <div className="absolute top-4 right-4"><Lock className="h-4 w-4 text-zinc-300" /></div>
                                <div className="h-12 w-12 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-zinc-300 mb-6">
                                    <stat.icon className="h-6 w-6" />
                                </div>
                                <div className="text-3xl font-black text-zinc-200 tracking-tighter">--</div>
                                <p className="text-sm font-black text-zinc-300 uppercase tracking-widest mt-2">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            );
        }

        switch (activeTab) {
            case "Home Overview":
            case "Partner Overview":
            case "Supply Overview":
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-12"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {config.stats.map((stat, i) => (
                                <div key={i} className="bg-white border border-zinc-100 p-8 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all relative overflow-hidden group">
                                    <div className="h-14 w-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-neom-gold mb-6 group-hover:scale-110 transition-transform">
                                        <stat.icon className="h-8 w-8" />
                                    </div>
                                    <div className="text-4xl font-black text-neom-black tracking-tighter">{stat.value}</div>
                                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mt-2">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-neom-black text-white p-10 rounded-[3rem] relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-neom-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                                <h3 className="text-3xl font-black tracking-tight mb-8 uppercase">Neural Fleet</h3>
                                <div className="space-y-4">
                                    {[
                                        { label: "Review quantum alerts", color: "text-neom-gold" },
                                        { label: "Analyze sector growth", color: "text-zinc-400" },
                                        { label: "Update neural profile", color: "text-zinc-400" }
                                    ].map((action, i) => (
                                        <button key={i} className="w-full flex items-center justify-between p-5 bg-white/5 border border-white/5 rounded-[1.5rem] hover:bg-white/10 transition-all group">
                                            <span className="font-black text-sm uppercase tracking-wider">{action.label}</span>
                                            <ChevronRight className={cn("h-4 w-4", action.color)} />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white border border-zinc-100 p-10 rounded-[3rem] shadow-sm">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-2xl font-black text-neom-black tracking-tight uppercase">Intelligence</h3>
                                    <span className="px-3 py-1 bg-neom-gold/10 border border-neom-gold/20 rounded-full text-[10px] font-black uppercase tracking-widest text-neom-black">Live Sync</span>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="h-1.5 w-1.5 bg-neom-gold rounded-full mt-2 shrink-0 animate-pulse" />
                                        <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                                            New sector guidelines released for {type === 'partner' ? 'innovation' : 'cognitive'} operations within the circular economy.
                                        </p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="h-1.5 w-1.5 bg-zinc-200 rounded-full mt-2 shrink-0" />
                                        <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                                            Oxagon Tier 2 manufacturing permits now being synchronized across the network.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );

            case "Usage & Impact":
            case "Procurement":
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                        <div className="bg-white rounded-[2.5rem] border border-zinc-100 overflow-hidden shadow-sm">
                            <table className="w-full text-left">
                                <thead className="bg-[#FBFBFB] border-b border-zinc-100">
                                    <tr>
                                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Log ID</th>
                                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Magnitude</th>
                                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Timestamp</th>
                                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Verification</th>
                                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-50">
                                    {mockBilling.map((bill) => (
                                        <tr key={bill.id} className="hover:bg-zinc-50 transition-all text-neom-black font-medium">
                                            <td className="px-8 py-6 font-black text-sm">{bill.id}</td>
                                            <td className="px-8 py-6 font-black text-neom-gold">{bill.amount}</td>
                                            <td className="px-8 py-6 text-zinc-500 text-sm">{bill.date}</td>
                                            <td className="px-8 py-6">
                                                <span className="px-3 py-1 bg-zinc-100 text-zinc-500 border border-zinc-200 rounded-full text-[10px] font-black uppercase tracking-widest">
                                                    {bill.status}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6">
                                                <button className="text-neom-black font-black text-[10px] uppercase tracking-widest hover:text-neom-gold transition-colors">Access Log</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                );

            case "Sector Programs":
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {mockPrograms.map(p => (
                            <div key={p.id} className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-sm hover:shadow-2xl transition-all group">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="h-12 w-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-neom-gold">
                                        <Zap className="h-6 w-6" />
                                    </div>
                                    <span className={cn(
                                        "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest",
                                        p.health === 'Stable' || p.health === 'Optimized' ? 'bg-neom-gold/10 text-neom-black border border-neom-gold/20' : 'bg-red-50 text-red-500'
                                    )}>{p.health}</span>
                                </div>
                                <h4 className="text-xl font-black text-neom-black mb-2 uppercase tracking-tight">{p.title}</h4>
                                <p className="text-xs text-zinc-400 mb-6 font-black uppercase tracking-widest">Stage: {p.stage}</p>
                                <div className="flex items-center gap-2 pt-6 border-t border-zinc-50">
                                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Stakeholders</span>
                                    <div className="flex -space-x-2">
                                        {p.partners.map(partner => (
                                            <div key={partner} className="h-8 w-8 rounded-full bg-zinc-100 border-2 border-white flex items-center justify-center text-[10px] font-black text-zinc-500">
                                                {partner[0]}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                );

            case "Open Tenders":
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                        {mockTenders.map(t => (
                            <div key={t.id} className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 flex items-center justify-between group hover:border-neom-gold transition-all shadow-sm hover:shadow-2xl">
                                <div className="flex items-center gap-6">
                                    <div className="h-14 w-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-300 group-hover:bg-neom-gold group-hover:text-neom-black group-hover:border-neom-gold transition-all">
                                        <FileText className="h-7 w-7" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black text-neom-black group-hover:text-neom-gold transition-all uppercase tracking-tight">{t.title}</h4>
                                        <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1">Closes on {t.closing} · ID: {t.id}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8">
                                    <div className="text-right">
                                        <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Priority</div>
                                        <div className="font-black text-neom-black uppercase tracking-widest text-sm">{t.value}</div>
                                    </div>
                                    <button className="h-12 px-8 bg-neom-black text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-neom-gold hover:text-neom-black transition-all">Submit Bid</button>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                );

            default:
                return (
                    <div className="h-96 bg-zinc-50 rounded-[3rem] border-2 border-dashed border-zinc-100 flex flex-col items-center justify-center text-center p-10">
                        <div className="h-20 w-20 bg-white border border-zinc-100 rounded-3xl flex items-center justify-center text-zinc-200 mb-6 shadow-sm">
                            <Package className="h-10 w-10" />
                        </div>
                        <h3 className="text-xl font-black text-neom-black uppercase tracking-tight">Module Under Synthesis</h3>
                        <p className="text-zinc-500 max-w-sm font-medium mt-2 leading-relaxed">
                            The {activeTab} framework is currently being synthesized for your sector within THE LINE. Explore other modules in the meantime.
                        </p>
                    </div>
                );
        }
    };

    return (
        <div className="flex h-screen bg-white overflow-hidden subpixel-antialiased">
            {/* Sidebar */}
            <aside className="w-80 bg-[#FBFBFB] border-r border-zinc-100 flex flex-col shrink-0">
                <div className="p-8 pb-10">
                    <Link href="/">
                        <img
                            src="https://neom.scene7.com/is/image/neom/logo-neom-en-spaced?fmt=png-alpha&scl=1"
                            alt="NEOM"
                            className="h-10 w-auto object-contain"
                        />
                    </Link>
                </div>

                <div className="px-6 mb-8">
                    <div className="bg-white rounded-[2rem] p-5 text-neom-black flex items-center gap-4 border border-zinc-100 shadow-sm">
                        <div className="h-12 w-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-neom-gold font-black shadow-inner">
                            {config.name === 'Resident Account' ? 'JD' : 'NC'}
                        </div>
                        <div className="overflow-hidden">
                            <p className="font-black text-sm text-neom-black truncate uppercase tracking-tight">{config.name === 'Resident Account' ? 'John Doe' : 'NEOM Corp.'}</p>
                            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest truncate">{config.role}</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300 px-4 mb-4">Core Ecosystem</p>
                    {config.menu.map((item) => (
                        <button
                            key={item.label}
                            disabled={!isOnboarded && item.label !== "Home Overview" && item.label !== "Partner Overview" && item.label !== "Supply Overview"}
                            onClick={() => setActiveTab(item.label)}
                            className={cn(
                                "w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all group",
                                activeTab === item.label
                                    ? "bg-white text-neom-black border border-zinc-100 shadow-xl"
                                    : "text-zinc-400 hover:text-neom-black hover:bg-zinc-50",
                                !isOnboarded && item.label !== "Home Overview" && item.label !== "Partner Overview" && item.label !== "Supply Overview" && "opacity-30 cursor-not-allowed"
                            )}
                        >
                            <div className="flex items-center gap-3">
                                <item.icon className={cn("h-5 w-5", activeTab === item.label ? "text-neom-gold" : "text-zinc-300 group-hover:text-zinc-500")} />
                                <span className="font-black text-sm tracking-tight uppercase">{item.label}</span>
                            </div>
                            {!isOnboarded && (item.label !== "Home Overview" && item.label !== "Partner Overview" && item.label !== "Supply Overview") && (
                                <Lock className="h-3.5 w-3.5 text-zinc-200" />
                            )}
                            {activeTab === item.label && (
                                <div className="h-1.5 w-1.5 bg-neom-gold rounded-full" />
                            )}
                        </button>
                    ))}

                    <div className="pt-8">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300 px-4 mb-4">Neural Support</p>
                        <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-zinc-400 hover:text-neom-black hover:bg-zinc-50 transition-all font-black text-sm uppercase tracking-tight">
                            <Settings className="h-5 w-5" /> Settings
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-zinc-400 hover:text-neom-black hover:bg-zinc-50 transition-all font-black text-sm uppercase tracking-tight">
                            <MessageSquare className="h-5 w-5" /> Support
                        </button>
                    </div>
                </nav>

                <div className="p-4 border-t border-zinc-100">
                    <Link
                        href="/"
                        className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl bg-zinc-50 text-zinc-400 hover:bg-red-50 hover:text-red-500 transition-all font-black text-[10px] uppercase tracking-[0.2em]"
                    >
                        <LogOut className="h-5 w-5" /> Disconnect
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden bg-white">
                {/* Dashboard Header */}
                <header className="h-24 bg-white border-b border-zinc-100 flex items-center justify-between px-10 shrink-0">
                    <div className="flex items-center gap-4">
                        <div className={cn("h-12 w-12 rounded-2xl flex items-center justify-center shadow-sm bg-zinc-50 border border-zinc-100")}>
                            <config.icon className={cn("h-6 w-6 text-neom-gold")} />
                        </div>
                        <div>
                            <h2 className="text-xl font-black text-neom-black tracking-tight leading-none mb-1 uppercase">{activeTab}</h2>
                            <p className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.2em]">{config.name} Platform</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-300" />
                            <input
                                type="text"
                                placeholder="Search cognitive network..."
                                className="pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-neom-gold w-64 text-sm font-bold text-neom-black placeholder:text-zinc-300"
                            />
                        </div>
                        <button className="relative p-2.5 bg-zinc-50 rounded-xl hover:bg-zinc-100 transition-all border border-zinc-100">
                            <Bell className="h-5 w-5 text-zinc-400" />
                            <span className="absolute top-2.5 right-2.5 h-2 w-2 bg-neom-gold rounded-full border-2 border-white" />
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-10 custom-scrollbar">
                    <AnimatePresence mode="wait">
                        <div key={activeTab}>
                            {renderContent()}
                        </div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}

function Globe(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" x2="22" y1="12" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    )
}
