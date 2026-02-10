"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Plane, 
  Globe, 
  Clock, 
  Users, 
  Zap, 
  ShieldCheck, 
  Wifi,
  MapPin,
  Luggage,
  Coffee,
  ShoppingBag,
  Hotel,
  Car,
  Train,
  Wind,
  Cloud,
  Sun,
  Star,
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

export default function NeomBayAirport() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useSpring(heroY, { stiffness: 100, damping: 20 });

  const stats = [
    { label: "Annual Passengers", value: "100M", unit: "Travelers", icon: Users },
    { label: "Destinations", value: "250+", unit: "Cities", icon: Globe },
    { label: "Flight Frequency", value: "1/min", unit: "Takeoffs", icon: Plane },
    { label: "Sustainability", value: "100%", unit: "Green", icon: Wind }
  ];

  const features = [
    {
      icon: Zap,
      title: "Quantum Computing",
      desc: "AI-powered air traffic control with quantum processing for optimal routing and zero delays.",
      color: "bg-neom-gold/10 text-neom-gold border-neom-gold/20"
    },
    {
      icon: ShieldCheck,
      title: "Bio-Security",
      desc: "Advanced biometric screening and health monitoring for seamless, secure travel.",
      color: "bg-neom-gold/10 text-neom-gold border-neom-gold/20"
    },
    {
      icon: Wind,
      title: "Carbon Negative",
      desc: "World's first carbon-negative airport with atmospheric carbon capture systems.",
      color: "bg-neom-gold/10 text-neom-gold border-neom-gold/20"
    },
    {
      icon: Wifi,
      title: "6G Connectivity",
      desc: "Ultra-high-speed wireless connectivity throughout the airport with holographic interfaces.",
      color: "bg-neom-gold/10 text-neom-gold border-neom-gold/20"
    }
  ];

  const services = [
    {
      title: "Quantum Terminal",
      desc: "Next-generation terminal with AI assistance and biometric processing",
      capacity: "50M passengers annually",
      tech: ["Face Recognition", "AI Concierge", "Smart Luggage", "Holographic Guides"]
    },
    {
      title: "Sky Lounge Network",
      desc: "Luxury lounges with panoramic views and personalized services",
      capacity: "10,000 guests daily",
      tech: ["Virtual Reality", "Gourmet Dining", "Sleep Pods", "Work Spaces"]
    },
    {
      title: "Cargo Hub",
      desc: "Automated cargo handling with drone delivery integration",
      capacity: "5M tons annually",
      tech: ["Robotics", "AI Sorting", "Drone Fleet", "Smart Tracking"]
    },
    {
      title: "Transit Center",
      desc: "Seamless connection to NEOM's hyperloop and transport networks",
      capacity: "1M transfers daily",
      tech: ["Hyperloop", "Autonomous Pods", "Magnetic Levitation", "Smart Routing"]
    }
  ];

  const amenities = [
    { icon: Coffee, title: "Quantum Cafes", desc: "AI-powered dining with personalized nutrition" },
    { icon: ShoppingBag, title: "Retail Paradise", desc: "Holographic shopping with instant delivery" },
    { icon: Hotel, title: "Sky Hotels", desc: "Luxury accommodation within terminal buildings" },
    { icon: Car, title: "Fleet Services", desc: "Electric and autonomous vehicle rentals" },
    { icon: Train, title: "Rail Connection", desc: "Direct high-speed rail to all NEOM regions" },
    { icon: Luggage, title: "Smart Baggage", desc: "AI-tracked luggage with door-to-door delivery" }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <motion.div 
          style={{ y: scale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1544620347-cbbfd785c9a8?auto=format&fit=crop&q=80&w=2000"
            alt="NEOM Bay Airport"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-cyan-900/10" />
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
                <Plane className="h-5 w-5 text-neom-gold" />
                <span className="text-sm font-black uppercase tracking-widest text-neom-gold">Aviation Revolution</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6"
              >
                The Future of
                <span className="block text-transparent bg-clip-text neom-text-gradient">
                  Air Travel
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-xl sm:text-2xl text-zinc-300 mb-12 max-w-3xl leading-relaxed"
              >
                Welcome to NEOM Bay Airport – the world's most advanced, sustainable, and intelligent aviation hub. 
                Where quantum technology meets human-centric design to redefine the flying experience.
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
                  Explore Terminal <ArrowRight className="h-5 w-5" />
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

        {/* Animated Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 right-20"
        >
          <Plane className="h-8 w-8 text-neom-gold opacity-60" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute top-32 right-40"
        >
          <Cloud className="h-6 w-6 text-white opacity-40" />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20"
        >
          <Sun className="h-12 w-12 text-neom-gold opacity-30" />
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
              Revolutionary
              <span className="block text-transparent bg-clip-text neom-text-gradient">
                Airport Technology
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge innovations that make NEOM Bay Airport the most advanced aviation hub in the world.
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
                className="group relative p-8 rounded-[2.5rem] border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-neom-gold/50 hover:bg-zinc-900/80"
              >
                <div className={cn(
                  "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border transition-all group-hover:scale-110",
                  feature.color
                )}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-widest mb-4 group-hover:text-neom-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
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
                Airport Services
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive airport facilities designed for maximum efficiency, comfort, and sustainability.
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
                <div className="p-8 rounded-[2.5rem] border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-neom-gold/50 hover:bg-zinc-900/80">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-2 group-hover:text-neom-gold transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed mb-4">
                        {service.desc}
                      </p>
                      <div className="flex items-center gap-4 text-neom-gold font-black text-sm uppercase tracking-widest">
                        <Users className="h-4 w-4" />
                        <span>{service.capacity}</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl neom-gradient border border-neom-gold/30">
                      <Plane className="h-6 w-6 text-neom-gold" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {service.tech.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-neom-gold" />
                        <span className="text-sm text-zinc-300 font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
              Premium
              <span className="block text-transparent bg-clip-text neom-text-gradient">
                Passenger Experience
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Unparalleled amenities and services designed for the modern traveler.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {amenities.map((amenity, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-neom-gold/50 hover:bg-zinc-900/80"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl neom-gradient border border-neom-gold/30">
                    <amenity.icon className="h-6 w-6 text-neom-gold" />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-widest group-hover:text-neom-gold transition-colors">
                    {amenity.title}
                  </h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  {amenity.desc}
                </p>
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
              Ready to Experience the
              <span className="block text-transparent bg-clip-text neom-text-gradient">
                Future of Aviation?
              </span>
            </h2>
            <p className="text-xl text-zinc-300 mb-12 leading-relaxed">
              Join us in building the world's most advanced airport. 
              Partner with NEOM to redefine air travel for generations to come.
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
