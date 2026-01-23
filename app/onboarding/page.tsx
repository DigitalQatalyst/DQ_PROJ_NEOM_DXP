"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronRight,
    ArrowLeft,
    Building2,
    User,
    Truck,
    Handshake,
    CheckCircle2,
    ShieldCheck,
    Globe,
    Briefcase
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const types = [
    { id: "customer", title: "Resident", icon: User, desc: "Individual or Business seeking services", color: "bg-neom-gold" },
    { id: "partner", title: "Strategic Partner", icon: Handshake, desc: "Innovating and co-creating with NEOM", color: "bg-neom-gold" },
    { id: "supplier", title: "Supplier/Vendor", icon: Truck, desc: "Providing goods and technical services", color: "bg-zinc-100" }
];

export default function OnboardingPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const typeFromUrl = searchParams.get("type");

    const [step, setStep] = useState(1);
    const [selectedType, setSelectedType] = useState(typeFromUrl || "");
    const [formData, setFormData] = useState({
        name: "",
        orgName: "",
        email: "",
        tradeLicense: "",
        industry: "",
        website: ""
    });

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
        else {
            // Simulate completion
            router.push(`/dashboard?type=${selectedType}&onboarded=true`);
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col text-neom-black">
            {/* Simple Header */}
            <div className="bg-white border-b border-zinc-100 py-6">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <img
                            src="https://neom.scene7.com/is/image/neom/logo-neom-en-spaced?fmt=png-alpha&scl=1"
                            alt="NEOM"
                            className="h-8 w-auto object-contain"
                        />
                    </Link>
                    <div className="flex items-center gap-2">
                        {[1, 2, 3].map((s) => (
                            <div
                                key={s}
                                className={cn(
                                    "h-2 w-12 rounded-full transition-all duration-500",
                                    step >= s ? "bg-neom-gold" : "bg-zinc-100"
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex-1 flex items-center justify-center p-4 py-20">
                <div className="w-full max-w-2xl">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="text-center">
                                    <h1 className="text-4xl font-black text-neom-black mb-4 uppercase tracking-tight">Choose your journey</h1>
                                    <p className="text-zinc-500 text-lg font-medium">Select the persona that best describes your interaction with NEOM.</p>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    {types.map((t) => (
                                        <button
                                            key={t.id}
                                            onClick={() => setSelectedType(t.id)}
                                            className={cn(
                                                "relative flex items-center gap-6 p-6 rounded-[2rem] border-2 transition-all text-left group",
                                                selectedType === t.id
                                                    ? "border-neom-gold bg-zinc-50 shadow-xl shadow-neom-gold/5"
                                                    : "border-zinc-100 bg-white hover:border-neom-gold/30"
                                            )}
                                        >
                                            <div className={cn("h-16 w-16 rounded-2xl flex items-center justify-center text-neom-black shrink-0 shadow-lg", t.color)}>
                                                <t.icon className="h-8 w-8" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-black text-neom-black uppercase tracking-tight">{t.title}</h3>
                                                <p className="text-zinc-500 font-medium">{t.desc}</p>
                                            </div>
                                            {selectedType === t.id && (
                                                <CheckCircle2 className="h-6 w-6 text-neom-gold" />
                                            )}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex justify-end pt-8">
                                    <button
                                        disabled={!selectedType}
                                        onClick={handleNext}
                                        className="inline-flex items-center gap-2 rounded-full bg-neom-gold px-10 py-4 text-lg font-black text-neom-black transition-all hover:bg-neom-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-neom-gold/20 uppercase tracking-widest"
                                    >
                                        Continue <ChevronRight className="h-5 w-5" />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <button onClick={() => setStep(1)} className="flex items-center gap-2 text-sm font-black text-zinc-400 hover:text-neom-gold uppercase tracking-widest transition-all">
                                    <ArrowLeft className="h-4 w-4" /> Back to personas
                                </button>
                                <div>
                                    <h1 className="text-4xl font-black text-neom-black mb-4 uppercase tracking-tight">Identity Details</h1>
                                    <p className="text-zinc-500 text-lg font-medium">Tell us more about your {selectedType} profile.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-2">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-neom-gold focus:outline-none text-neom-black font-medium"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-2">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-neom-gold focus:outline-none text-neom-black font-medium"
                                            placeholder="you@company.com"
                                        />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-2">Organization Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-neom-gold focus:outline-none text-neom-black font-medium"
                                            placeholder="Enter registered entity name"
                                        />
                                    </div>
                                    {selectedType !== "customer" && (
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-2">Entity ID / License</label>
                                            <input
                                                type="text"
                                                className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-neom-gold focus:outline-none text-neom-black font-medium"
                                                placeholder="e.g. NEOM-INV-2024"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className="flex justify-end pt-8">
                                    <button
                                        onClick={handleNext}
                                        className="inline-flex items-center gap-2 rounded-full bg-neom-gold px-10 py-4 text-lg font-black text-neom-black transition-all hover:bg-neom-black hover:text-white shadow-xl shadow-neom-gold/20 uppercase tracking-widest"
                                    >
                                        Next Step <ChevronRight className="h-5 w-5" />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8 text-center"
                            >
                                <div className="h-32 w-32 rounded-full bg-neom-gold/10 flex items-center justify-center mx-auto mb-8">
                                    <ShieldCheck className="h-16 w-16 text-neom-gold animate-pulse" />
                                </div>
                                <div>
                                    <h1 className="text-4xl font-black text-neom-black mb-4 uppercase tracking-tight">Complete Onboarding</h1>
                                    <p className="text-zinc-500 text-lg max-w-md mx-auto font-medium">
                                        By clicking finish, you agree to the NEOM digital terms and ecosystem policies.
                                    </p>
                                </div>

                                <div className="bg-zinc-50 border border-zinc-100 rounded-[2rem] p-8 text-left space-y-4 max-w-md mx-auto">
                                    <div className="flex items-start gap-4">
                                        <div className="h-6 w-6 rounded-full bg-neom-gold flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle2 className="h-4 w-4 text-neom-black" />
                                        </div>
                                        <p className="text-sm text-zinc-600 font-bold uppercase tracking-wide">Verify your identity via NEOM ID integration</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="h-6 w-6 rounded-full bg-neom-gold flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle2 className="h-4 w-4 text-neom-black" />
                                        </div>
                                        <p className="text-sm text-zinc-600 font-bold uppercase tracking-wide">Link your sector-specific credentials</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="h-6 w-6 rounded-full bg-neom-gold flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle2 className="h-4 w-4 text-neom-black" />
                                        </div>
                                        <p className="text-sm text-zinc-600 font-bold uppercase tracking-wide">Accept cognitive city service charter</p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-4 pt-8">
                                    <button
                                        onClick={handleNext}
                                        className="w-full max-w-sm inline-flex items-center justify-center gap-2 rounded-full bg-neom-gold px-10 py-5 text-xl font-black text-neom-black transition-all hover:bg-neom-black hover:text-white shadow-2xl shadow-neom-gold/30 uppercase tracking-widest"
                                    >
                                        Finish & Enter Dashboard
                                    </button>
                                    <p className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.2em]">Powered by NEOM Cognitive Identity</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
