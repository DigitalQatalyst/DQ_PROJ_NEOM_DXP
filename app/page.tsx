"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  Droplets,
  ShieldCheck,
  Smartphone,
  Globe,
  ArrowRight,
  PlusCircle,
  Users,
  Search,
  ChevronRight,
  Accessibility,
  Building2,
  Handshake,
  Truck,
  User,
  Hammer,
  ClipboardCheck,
  Landmark,
  Factory,
  GraduationCap,
  Lock,
  Clock,
  Utensils
} from "lucide-react";
import { cn } from "@/lib/utils";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
          alt="NEOM Future City"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neom-black/60 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl uppercase">
              The Future of <br />
              <span className="neom-text-gradient bg-clip-text text-transparent">Cognitive Living</span>
            </h1>
            <p className="mt-6 text-xl text-zinc-300 font-medium">
              Welcome to NEOM. A land of the future, where the greatest minds and best talents are empowered to embody pioneering ideas and exceed boundaries in a world inspired by imagination.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/marketplace"
                className="inline-flex items-center gap-2 rounded-full bg-neom-gold px-10 py-5 text-lg font-black text-neom-black transition-all hover:bg-white hover:scale-105 uppercase tracking-widest"
              >
                Explore Sectors <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-10 py-5 text-lg font-black text-white backdrop-blur-sm transition-all hover:bg-white/20 uppercase tracking-widest"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Platform Overview */}
      <section className="bg-white py-24 border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <motion.h2
              {...fadeIn}
              className="text-3xl font-black tracking-tight text-neom-black sm:text-5xl uppercase"
            >
              Building a Land of Future
            </motion.h2>
            <motion.p
              {...fadeIn}
              className="mt-6 max-w-3xl text-xl text-zinc-500 font-medium"
            >
              NEOM is more than a place. It's a mindset. It's a living laboratory where entrepreneurship will chart the course for a New Future.
            </motion.p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Cognitive City",
                desc: "Powered by AI and data to enhance the lives of residents and visitors."
              },
              {
                icon: Droplets,
                title: "Nature-First",
                desc: "95% of NEOM's land will be preserved for nature, prioritizing conservation."
              },
              {
                icon: ShieldCheck,
                title: "100% Renewable",
                desc: "Fully powered by solar, wind, and hydrogen-based clean energy."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center rounded-[2.5rem] border border-zinc-100 bg-[#FBFBFB] p-10 shadow-sm transition-all hover:shadow-xl group"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-neom-gold/10 text-neom-gold group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-black text-neom-black uppercase tracking-widest">{feature.title}</h3>
                <p className="mt-4 text-center text-zinc-500 font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works (Ecosystem) */}
      <section className="bg-[#F6F6F6] py-24 border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black tracking-tight text-neom-black sm:text-5xl uppercase">
                A Global Innovation Hub
              </h2>
              <p className="mt-6 text-xl text-zinc-500 font-medium leading-relaxed">
                NEOM is built from the ground up to be a global hub for innovation. Across 15 sectors, we are redefining how we live, work, and play in a cognitive and sustainable environment.
              </p>

              <div className="mt-12 space-y-10">
                <div className="flex gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl neom-gradient text-neom-black shadow-lg">
                    <PlusCircle className="h-7 w-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-neom-black uppercase tracking-widest">For Innovators</h4>
                    <p className="mt-2 text-zinc-500 font-medium">Join a community of the world's brightest minds and scale your pioneering ideas in a living laboratory.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl neom-gradient text-neom-black shadow-lg">
                    <Users className="h-7 w-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-neom-black uppercase tracking-widest">For Residents</h4>
                    <p className="mt-2 text-zinc-500 font-medium">Experience a higher quality of life in a cognitive city that learns from you and adapts to your needs.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white p-2"
            >
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
                alt="NEOM Sector Interface"
                fill
                className="object-cover rounded-[2.5rem]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Stats / Impact Section */}
      <section className="bg-neom-black py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            {[
              { label: "Sectors", value: "15" },
              { label: "Renewable Energy", value: "100%" },
              { label: "Preserved Land", value: "95%" },
              { label: "Cognitive Scale", value: "AI-First" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-black sm:text-7xl tracking-tighter text-neom-gold">{stat.value}</div>
                <div className="mt-4 text-zinc-500 font-black uppercase tracking-[0.2em] text-[10px]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Sectors Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black tracking-tight text-neom-black sm:text-6xl uppercase">15 Sectors of NEOM</h2>
            <p className="mt-6 text-xl text-zinc-500 max-w-3xl mx-auto leading-relaxed font-medium">
              NEOM is being built to redefine how we live and work across 15 specialized sectors, creating a new destination for the world's greatest minds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Energy", icon: Zap, desc: "Powered by 100% renewable energy for a sustainable future.", active: true, color: "bg-white border-zinc-100 text-neom-black", href: "/marketplace/energy" },
              { title: "Water", icon: Droplets, desc: "Innovative water desalination and conservation technologies.", active: true, color: "bg-white border-zinc-100 text-neom-black" },
              { title: "Mobility", icon: Truck, desc: "Autonomous and seamless transport solutions across NEOM.", active: true, color: "bg-white border-zinc-100 text-neom-black" },
              { title: "Biotech", icon: ShieldCheck, desc: "Pioneering the future of medicine and genetic research.", active: true, color: "bg-white border-zinc-100 text-neom-black" },
              { title: "Food", icon: Utensils, desc: "Sustainable agriculture and innovative food production.", active: true, color: "bg-white border-zinc-100 text-neom-black" },
              { title: "Manufacturing", icon: Factory, desc: "Next-generation advanced and clean manufacturing.", active: true, color: "bg-white border-zinc-100 text-neom-black" }
            ].map((item, i) => (
              <MarketplaceCard key={i} {...item} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-3 rounded-full border-2 border-neom-black px-10 py-4 text-lg font-black text-neom-black hover:bg-neom-black hover:text-white transition-all uppercase tracking-widest"
            >
              View All 15 Sectors <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 overflow-hidden bg-white border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-neom-gold mb-4">Ecosystem Hub</h2>
            <p className="text-5xl font-black text-neom-black tracking-tight uppercase">Strategic Global Synthesis</p>
          </div>

          <div className="relative">
            <div className="flex animate-scroll gap-20 items-center whitespace-nowrap">
              {[
                { name: "SAP SE", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
                { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
                { name: "Siemens", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg" },
                { name: "Huawei", logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Huawei_Logo.svg" },
                { name: "ABB", logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/ABB_logo.svg" },
                { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" }
              ].map((p, i) => (
                <div key={i} className="flex flex-col items-center gap-4 grayscale group-hover:grayscale-0 opacity-40 hover:opacity-100 transition-all cursor-pointer">
                  <div className="relative h-12 w-40">
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="h-full w-full object-contain transition-all group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate for infinite effect */}
              {[
                { name: "SAP SE", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
                { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
                { name: "Siemens", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg" },
                { name: "Huawei", logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Huawei_Logo.svg" },
                { name: "ABB", logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/ABB_logo.svg" },
                { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" }
              ].map((p, i) => (
                <div key={`dup-${i}`} className="flex flex-col items-center gap-4 grayscale group-hover:grayscale-0 opacity-40 hover:opacity-100 transition-all cursor-pointer">
                  <div className="relative h-12 w-40">
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="h-full w-full object-contain transition-all group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Newsletter / CTA */}
      <section className="bg-neom-black py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[4rem] bg-white/5 px-8 py-24 text-center border border-white/5">
            <div className="relative z-10">
              <h2 className="text-4xl font-black sm:text-6xl tracking-tight uppercase">Neural Synchronization</h2>
              <p className="mt-8 mx-auto max-w-xl text-xl text-zinc-500 font-medium">
                Subscribe to our neural feed for real-time updates on sector development and cognitive initiatives across NEOM.
              </p>
              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Neural Signature (Email)"
                  className="w-full max-w-sm rounded-2xl bg-white/5 border border-white/10 px-8 py-5 text-white focus:outline-none focus:ring-2 focus:ring-neom-gold sm:w-96 transition-all font-bold"
                />
                <button className="w-full rounded-2xl bg-neom-gold px-12 py-5 font-black text-neom-black transition-all hover:bg-white hover:scale-105 sm:w-auto shadow-2xl shadow-neom-gold/20 uppercase tracking-widest text-sm">
                  Initialize Feed
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MarketplaceCard({ title, icon: Icon, desc, active, color, href }: any) {
  return (
    <motion.div
      whileHover={active ? { scale: 1.02, y: -5 } : {}}
      className={cn(
        "relative group flex flex-col rounded-[2.5rem] p-10 transition-all h-full border",
        active ? (cn("shadow-2xl", color)) : "bg-zinc-50 border-zinc-100"
      )}
    >
      {active && (
        <div className="absolute top-8 right-8 flex items-center gap-2 bg-neom-gold/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-neom-gold/20">
          <div className="h-2 w-2 rounded-full bg-neom-gold animate-pulse" />
          <span className="text-[10px] font-black text-neom-black uppercase tracking-[0.2em]">Active</span>
        </div>
      )}
      {!active && (
        <div className="absolute top-8 right-8 flex items-center gap-2 bg-zinc-50 px-4 py-1.5 rounded-full border border-zinc-100">
          <Clock className="h-3.5 w-3.5 text-zinc-400" />
          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Planned</span>
        </div>
      )}

      <div className="flex flex-col gap-8">
        <div className={cn(
          "flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm transform group-hover:rotate-6 transition-transform",
          active ? "bg-neom-gold/10 text-neom-gold border border-neom-gold/10" : "bg-zinc-50 text-zinc-400 border border-zinc-100"
        )}>
          <Icon className="h-8 w-8" strokeWidth={2.5} />
        </div>

        <div className="flex-grow">
          <h4 className={cn("text-2xl font-black uppercase tracking-tight", active ? "text-neom-black" : "text-zinc-400")}>{title}</h4>
          <p className={cn("mt-3 text-sm leading-relaxed font-medium", active ? "text-zinc-500" : "text-zinc-500")}>
            {desc}
          </p>
        </div>

        {active ? (
          <Link
            href={href || "/marketplace"}
            className="flex items-center justify-center gap-2 rounded-2xl bg-neom-gold px-8 py-4 text-sm font-black text-neom-black transition-all hover:bg-neom-black hover:text-white hover:shadow-xl uppercase tracking-widest"
          >
            Explore <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <div className="flex items-center justify-center gap-2 rounded-2xl bg-zinc-50 px-8 py-4 text-sm font-black text-zinc-300 border border-zinc-100 cursor-not-allowed uppercase tracking-widest">
            <Lock className="h-4 w-4" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
