"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Clock, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  capacity: string;
  icon: React.ElementType;
  features: {
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
  }[];
  technologies: string[];
  stats: {
    label: string;
    value: string;
    unit: string;
    icon: React.ElementType;
  }[];
  ctaText?: string;
  ctaHref?: string;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ServicePageTemplate({
  title,
  subtitle,
  heroImage,
  description,
  capacity,
  icon: ServiceIcon,
  features,
  technologies,
  stats,
  ctaText = "Learn More",
  ctaHref = "/contact"
}: ServicePageTemplateProps) {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 h-full flex items-center"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full border border-neom-gold/40 bg-neom-gold/10 backdrop-blur-sm"
              >
                <ServiceIcon className="h-5 w-5 text-neom-gold" />
                <span className="text-sm font-black uppercase tracking-widest text-neom-gold">{subtitle}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6"
              >
                {title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-xl sm:text-2xl text-zinc-300 mb-12 max-w-3xl leading-relaxed"
              >
                {description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="flex items-center gap-6 mb-8"
              >
                <div className="flex items-center gap-3 text-neom-gold font-black text-sm uppercase tracking-widest">
                  <Users className="h-4 w-4" />
                  <span>{capacity}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="#features"
                  className="inline-flex items-center gap-3 rounded-full neom-gradient px-10 py-5 text-lg font-black text-neom-black transition-all hover:scale-105 hover:shadow-2xl hover:shadow-neom-gold/25 uppercase tracking-widest"
                >
                  Explore Features <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-3 rounded-full border-2 border-neom-gold/40 bg-neom-gold/10 px-10 py-5 text-lg font-black text-neom-gold backdrop-blur-sm transition-all hover:bg-neom-gold/20 hover:border-neom-gold uppercase tracking-widest"
                >
                  {ctaText}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl neom-gradient border border-neom-gold/30"
                >
                  <stat.icon className="h-8 w-8 text-neom-gold" />
                </motion.div>
                <div className="text-4xl sm:text-5xl font-black tracking-tighter text-neom-gold">
                  {stat.value}
                </div>
                <div className="text-lg font-black text-zinc-400 uppercase tracking-widest mb-2">
                  {stat.unit}
                </div>
                <div className="text-sm text-zinc-500 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
              Advanced
              <span className="block text-transparent bg-clip-text neom-text-gradient">
                Features
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge capabilities that make this service revolutionary.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 rounded-[2.5rem] border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-neom-gold/50 hover:bg-zinc-900/80"
              >
                <div className="flex items-start gap-6">
                  <div className={cn(
                    "flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl border transition-all group-hover:scale-110",
                    feature.color
                  )}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white uppercase tracking-widest mb-4 group-hover:text-neom-gold transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
              Technology
              <span className="block text-transparent bg-clip-text neom-text-gradient">
                Stack
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Advanced technologies powering this revolutionary service.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-neom-gold/50 hover:bg-zinc-900/80"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-2 w-2 rounded-full bg-neom-gold" />
                  <span className="text-sm text-zinc-300 font-medium">{tech}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neom-gold/10 border-y border-neom-gold/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
              Ready to Experience
              <span className="block text-transparent bg-clip-text neom-text-gradient">
                {title}?
              </span>
            </h2>
            <p className="text-xl text-zinc-300 mb-12 leading-relaxed">
              Discover how this revolutionary service can transform your travel experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full neom-gradient px-10 py-5 text-lg font-black text-neom-black transition-all hover:scale-105 hover:shadow-2xl hover:shadow-neom-gold/25 uppercase tracking-widest"
              >
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/airport"
                className="inline-flex items-center gap-3 rounded-full border-2 border-neom-gold/50 bg-neom-gold/10 px-10 py-5 text-lg font-black text-neom-gold transition-all hover:bg-neom-gold/20 hover:border-neom-gold uppercase tracking-widest"
              >
                Back to Airport
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
