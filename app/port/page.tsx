"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Anchor, 
  Ship, 
  Container, 
  Globe, 
  Zap, 
  ShieldCheck, 
  TrendingUp,
  Users,
  Clock,
  Waves,
  Compass,
  Radio,
  BarChart3,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

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

export default function PortOfNeom() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useSpring(heroY, { stiffness: 100, damping: 20 });

  const stats = [
    { label: "Annual Capacity", value: "20M", unit: "TEU", icon: Container },
    { label: "Vessels Daily", value: "50+", unit: "Ships", icon: Ship },
    { label: "Automation Level", value: "100%", unit: "Smart", icon: Zap },
    { label: "Global Reach", value: "200+", unit: "Ports", icon: Globe }
  ];

  const features = [
    {
      icon: Radio,
      title: "AI-Powered Operations",
      desc: "Fully automated port management with predictive analytics and real-time optimization.",
      color: "bg-neom-gold/10 text-neom-gold border-neom-gold/20"
    },
    {
      icon: ShieldCheck,
      title: "Green Port Technology",
      desc: "Zero-emission operations with renewable energy and sustainable cargo handling.",
      color: "bg-neom-gold/10 text-neom-gold border-neom-gold/20"
    },
    {
      icon: Waves,
      title: "Deep Water Access",
      desc: "Natural deep-water harbor accommodating the world's largest container vessels.",
      color: "bg-neom-gold/10 text-neom-gold border-neom-gold/20"
    },
    {
      icon: Compass,
      title: "Smart Navigation",
      desc: "Advanced autonomous vessel guidance and docking systems with AI precision.",
      color: "bg-neom-gold/10 text-neom-gold border-neom-gold/20"
    }
  ];

  const services = [
    {
      title: "Container Terminal",
      desc: "Automated container handling with 24/7 operations",
      capacity: "10M TEU annually",
      tech: ["AI Cranes", "Auto-Guided Vehicles", "Smart Stacking"]
    },
    {
      title: "Bulk Cargo Terminal",
      desc: "Efficient bulk material handling with minimal environmental impact",
      capacity: "50M tons annually",
      tech: ["Conveyor Systems", "Dust Control", "Auto-Loading"]
    },
    {
      title: "Cruise Terminal",
      desc: "Luxury cruise port with sustainable hospitality infrastructure",
      capacity: "2M passengers annually",
      tech: ["Smart Check-in", "Green Energy", "Digital Services"]
    },
    {
      title: "Logistics Hub",
      desc: "Integrated logistics and distribution center with global connectivity",
      capacity: "1M packages daily",
      tech: ["Robotics", "IoT Tracking", "AI Routing"]
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <motion.div 
          style={{ y: scale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=2000"
            alt="Port of NEOM"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/70 to-white" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/60" />
        </motion.div>

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
                <Anchor className="h-5 w-5 text-neom-gold" />
                <span className="text-sm font-black uppercase tracking-widest text-neom-gold">Maritime Innovation Hub</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6"
              >
                The Future of
                <span className="block text-transparent bg-clip-text neom-text-gradient">
                  Global Trade
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-xl sm:text-2xl text-zinc-700 mb-12 max-w-3xl leading-relaxed"
              >
                Welcome to the Port of NEOM – the world's most advanced, sustainable, and automated maritime gateway. 
                Where AI meets ocean to redefine global commerce.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="#services"
                  className="inline-flex items-center gap-3 rounded-full neom-gradient px-10 py-5 text-lg font-black text-neom-black transition-all hover:scale-105 hover:shadow-2xl hover:shadow-neom-gold/25 uppercase tracking-widest"
                >
                  Explore Services <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center gap-3 rounded-full border-2 border-neom-gold/40 bg-neom-gold/10 px-10 py-5 text-lg font-black text-neom-gold backdrop-blur-sm transition-all hover:bg-neom-gold/20 hover:border-neom-gold uppercase tracking-widest"
                >
                  View Technology
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronRight className="h-6 w-6 text-white/50 rotate-90" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-zinc-200">
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
                <div className="text-lg font-black text-zinc-600 uppercase tracking-widest mb-2">
                  {stat.unit}
                </div>
                <div className="text-sm text-zinc-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
              Revolutionary Port
              <span className="block text-transparent bg-clip-text neom-text-gradient">
                Technology
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge innovations that make the Port of NEOM the most efficient and sustainable maritime hub in the world.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 rounded-[2.5rem] border border-zinc-200 bg-white/50 backdrop-blur-sm transition-all hover:border-neom-gold/50 hover:bg-zinc-100"
              >
                <div className={cn(
                  "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border transition-all group-hover:scale-110",
                  feature.color
                )}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-black text-zinc-900 uppercase tracking-widest mb-4 group-hover:text-neom-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
              World-Class
              <span className="block text-transparent bg-clip-text neom-text-gradient">
                Maritime Services
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive port facilities designed for maximum efficiency, sustainability, and global connectivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="p-8 rounded-[2.5rem] border border-zinc-200 bg-white/50 backdrop-blur-sm transition-all hover:border-neom-gold/50 hover:bg-zinc-100">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-black text-zinc-900 uppercase tracking-widest mb-2 group-hover:text-neom-gold transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-zinc-600 leading-relaxed mb-4">
                        {service.desc}
                      </p>
                      <div className="flex items-center gap-4 text-neom-gold font-black text-sm uppercase tracking-widest">
                        <BarChart3 className="h-4 w-4" />
                        <span>{service.capacity}</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl neom-gradient border border-neom-gold/30">
                      <Container className="h-6 w-6 text-neom-gold" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {service.tech.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-neom-gold" />
                        <span className="text-sm text-zinc-600 font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Shape the
              <span className="block text-transparent bg-clip-text neom-text-gradient">
                Future of Maritime Trade?
              </span>
            </h2>
            <p className="text-xl text-zinc-700 mb-12 leading-relaxed">
              Join us in building the world's most advanced port infrastructure. 
              Partner with NEOM to redefine global commerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full neom-gradient px-10 py-5 text-lg font-black text-neom-black transition-all hover:scale-105 hover:shadow-2xl hover:shadow-neom-gold/25 uppercase tracking-widest"
              >
                Become a Partner <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/invest"
                className="inline-flex items-center gap-3 rounded-full border-2 border-neom-gold/50 bg-neom-gold/10 px-10 py-5 text-lg font-black text-neom-gold transition-all hover:bg-neom-gold/20 hover:border-neom-gold uppercase tracking-widest"
              >
                Investment Opportunities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
