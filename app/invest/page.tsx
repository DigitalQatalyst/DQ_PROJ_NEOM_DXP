"use client";

import Image from "next/image";
import { Building2, ShieldCheck, Handshake, Landmark } from "lucide-react";

export default function InvestLandingPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=2000"
            alt="Future investment city skyline"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-neom-gold/40 bg-neom-gold/10 px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-neom-gold">
              <span>Coming Soon</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase">
              <span className="block text-zinc-900">The Future of</span>
              <span className="mt-2 block text-neom-gold">Investment</span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-700 max-w-xl font-medium">
              Discover groundbreaking investment opportunities that shape tomorrow. Be the first to access exclusive projects and visionary developments across NEOM.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-md rounded-2xl border border-zinc-200 bg-zinc-50 px-6 py-4 text-sm font-medium text-black placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-neom-gold/70"
              />
              <button className="inline-flex items-center justify-center rounded-2xl bg-neom-gold px-10 py-4 text-sm font-black uppercase tracking-[0.2em] text-neom-black transition-all hover:bg-zinc-100 hover:shadow-2xl">
                Get Notified
              </button>
            </div>

            <p className="text-xs text-zinc-500">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>

          <div className="mt-16 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="border border-white/10 bg-white/5 px-6 py-6 rounded-2xl">
              <div className="text-3xl sm:text-4xl font-black text-neom-gold">$50B+</div>
              <div className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                Investment Pipeline
              </div>
            </div>
            <div className="border border-white/10 bg-white/5 px-6 py-6 rounded-2xl">
              <div className="text-3xl sm:text-4xl font-black text-neom-gold">100+</div>
              <div className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                Project Sectors
              </div>
            </div>
            <div className="border border-white/10 bg-white/5 px-6 py-6 rounded-2xl">
              <div className="text-3xl sm:text-4xl font-black text-neom-gold">2026</div>
              <div className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                Launch Year
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neom-gold">
              Our Vision
            </p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-50 uppercase">
              <span className="block">Building Tomorrow&apos;s</span>
              <span className="mt-2 block text-neom-gold">Investment Landscape</span>
            </h2>
            <p className="text-lg text-zinc-400 font-medium max-w-xl">
              We envision a world where exceptional investment opportunities are accessible to all. Our platform connects ambitious projects with forward-thinking investors, creating value that transcends traditional boundaries.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neom-gold/10 text-neom-gold">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-100">
                    Our Mission
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    To democratize access to world-class investment opportunities, empowering investors of all sizes to participate in transformative projects across NEOM.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neom-gold/10 text-neom-gold">
                  <Handshake className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-100">
                    Our Community
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Join a network of visionary investors and partners who share a commitment to sustainable growth, innovation, and long-term impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1400"
                alt="NEOM investment skyline at night"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute right-6 top-6 rounded-2xl border border-white/10 bg-black/80 px-6 py-3 text-right shadow-lg">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neom-gold">24/7</p>
              <p className="mt-1 text-xs font-semibold text-zinc-200">Platform Access</p>
            </div>

            <div className="absolute bottom-8 left-8 rounded-2xl border border-white/10 bg-black/80 px-6 py-3 shadow-lg">
              <p className="text-2xl font-black text-neom-gold">15+</p>
              <p className="mt-1 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
                Countries Targeted
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neom-gold">
              What We Offer
            </p>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-zinc-50 uppercase">
              Investment <span className="text-neom-gold">Excellence</span>
            </h2>
            <p className="mt-6 text-lg text-zinc-400 font-medium">
              We&apos;re building a platform that connects visionary investors with transformative opportunities across the globe.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-neom-gold/10 text-neom-gold">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-100">
                Premium Real Estate
              </h3>
              <p className="mt-3 text-sm text-zinc-400">
                Access exclusive developments in emerging markets and prime locations across NEOM.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-neom-gold/10 text-neom-gold">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-100">
                Global Opportunities
              </h3>
              <p className="mt-3 text-sm text-zinc-400">
                Diversify your portfolio with international investment options across multiple sectors.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-neom-gold/10 text-neom-gold">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-100">
                Secure Investments
              </h3>
              <p className="mt-3 text-sm text-zinc-400">
                Bank-grade security and transparent processes designed to protect your capital.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-neom-gold/10 text-neom-gold">
                <Handshake className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-100">
                Exclusive Access
              </h3>
              <p className="mt-3 text-sm text-zinc-400">
                Early access to curated opportunities and strategic partnerships not available elsewhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-50 uppercase">
            Ready to <span className="text-neom-gold">Invest</span> in the Future?
          </h2>
          <p className="mt-6 text-lg text-zinc-400 font-medium max-w-2xl mx-auto">
            Join our exclusive waitlist and be among the first to access groundbreaking investment opportunities when we launch.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-md rounded-2xl border border-white/10 bg-black/40 px-6 py-4 text-sm font-medium text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-neom-gold/70"
            />
            <button className="inline-flex items-center justify-center rounded-2xl bg-neom-gold px-10 py-4 text-sm font-black uppercase tracking-[0.2em] text-neom-black transition-all hover:bg-white hover:shadow-2xl">
              Join Waitlist
            </button>
          </div>

          <p className="mt-4 text-xs text-zinc-500">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}
