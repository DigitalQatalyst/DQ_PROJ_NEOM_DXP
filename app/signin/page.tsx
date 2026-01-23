"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LogIn, ArrowRight, UserCircle2, Building, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function SignInPage() {
    const [selectedRole, setSelectedRole] = useState<string | null>(null);
    const [isOnboarded, setIsOnboarded] = useState(true);

    const roles = [
        { id: "customer", title: "Resident", icon: UserCircle2, desc: "Individual or business utility user" },
        { id: "partner", title: "Strategic Partner", icon: Building, desc: "Innovating and co-creating with NEOM" },
        { id: "supplier", title: "Supplier/Vendor", icon: Truck, desc: "Material suppliers and manufacturers" },
    ];

    return (
        <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-white py-20 px-4">
            <div className="w-full max-w-4xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl flex flex-col md:flex-row border border-zinc-100">
                {/* Left Side - Visual */}
                <div className="relative hidden w-2/5 bg-neom-black md:block p-12 text-white">
                    <div className="absolute inset-0 bg-white/5" />
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                            <h2 className="text-3xl font-black uppercase tracking-tight">NEOM Portal</h2>
                            <p className="mt-8 text-zinc-400 leading-relaxed font-bold">Access your cognitive dashboard and manage your sector interactions through our unified digital gateway.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-neom-gold">
                                <div className="h-1.5 w-1.5 rounded-full bg-neom-gold animate-pulse" />
                                <span>Quantum Encryption</span>
                            </div>
                            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-neom-gold">
                                <div className="h-1.5 w-1.5 rounded-full bg-neom-gold animate-pulse" />
                                <span>Cognitive ID Verified</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="flex-1 p-8 md:p-16">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-3xl font-black text-neom-black text-center md:text-left tracking-tight uppercase">Sign In</h1>
                        <p className="mt-2 text-zinc-500 text-center md:text-left font-medium">Select your account type to proceed to the dashboard.</p>

                        <div className="mt-10 space-y-4">
                            {roles.map((role) => (
                                <button
                                    key={role.id}
                                    onClick={() => setSelectedRole(role.id)}
                                    className={cn(
                                        "flex w-full items-center gap-4 rounded-3xl border-2 p-5 text-left transition-all",
                                        selectedRole === role.id
                                            ? "border-neom-gold bg-zinc-50 ring-4 ring-neom-gold/5"
                                            : "border-zinc-100 bg-white hover:border-neom-gold/30"
                                    )}
                                >
                                    <div className={cn(
                                        "flex h-14 w-14 items-center justify-center rounded-2xl",
                                        selectedRole === role.id ? "bg-neom-gold text-neom-black shadow-lg shadow-neom-gold/30" : "bg-zinc-50 text-zinc-400"
                                    )}>
                                        <role.icon className="h-7 w-7" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-black text-neom-black uppercase tracking-tight">{role.title}</h3>
                                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{role.desc}</p>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Demo Toggle for Onboarding State */}
                        <div className="mt-8 flex items-center justify-between p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                            <div className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Simulation: Onboarded</div>
                            <button
                                onClick={() => setIsOnboarded(!isOnboarded)}
                                className={cn(
                                    "px-4 py-1.5 rounded-full text-[10px] font-black uppercase transition-all",
                                    isOnboarded ? "bg-neom-gold text-neom-black shadow-lg" : "bg-zinc-200 text-zinc-500"
                                )}
                            >
                                {isOnboarded ? "Enabled" : "Disabled"}
                            </button>
                        </div>

                        <div className="mt-8 space-y-4">
                            <Link
                                href={selectedRole ? `/dashboard?type=${selectedRole}&onboarded=${isOnboarded}` : "#"}
                                className={cn(
                                    "flex w-full items-center justify-center gap-2 rounded-full py-5 text-lg font-black text-neom-black transition-all shadow-xl",
                                    selectedRole
                                        ? "bg-neom-gold hover:bg-neom-black hover:text-white shadow-neom-gold/20 uppercase tracking-widest"
                                        : "bg-zinc-100 text-zinc-300 cursor-not-allowed pointer-events-none uppercase tracking-widest"
                                )}
                            >
                                Continue <ArrowRight className="h-5 w-5" />
                            </Link>

                            <div className="text-center">
                                <Link href="#" className="text-[10px] font-black text-neom-gold hover:underline uppercase tracking-widest">
                                    Unlock with NEOM Identity
                                </Link>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-zinc-100 text-center">
                            <p className="text-sm text-zinc-500 font-medium">
                                Joining the ecosystem?{" "}
                                <Link href="/onboarding?type=partner" className="font-black text-neom-gold hover:underline uppercase tracking-widest">
                                    Become a Partner
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
