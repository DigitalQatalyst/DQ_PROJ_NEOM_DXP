import {
    Zap,
    CreditCard,
    Car,
    Sun,
    Leaf,
    ShieldCheck,
    TrendingDown,
    Droplets,
    FileCheck,
    LayoutGrid,
    Ruler,
    User,
    Handshake,
    GraduationCap,
    Factory
} from "lucide-react";

export const servicesData: Record<string, {
    title: string;
    description: string;
    services: any[];
    categories: string[];
}> = {
    "future-living": {
        title: "Future Living Sector",
        description: "Experience THE LINE and our specialized residential services, focusing on 100% renewable energy and an urban design that prioritizes human health.",
        categories: ["All", "Connectivity", "Resources", "Wellness", "Smart Spaces", "Residency"],
        services: [
            {
                id: "activate-home",
                name: "Cognitive Onboarding",
                desc: "Initialize your living space within THE LINE with instant identity-linked service activation.",
                category: "Connectivity",
                icon: Zap,
                status: "Available",
                popularity: 4.9,
                color: "bg-neom-gold",
                isPopular: true
            },
            {
                id: "enowa-billing",
                name: "ENOWA Nexus Pay",
                desc: "Seamless, automated billing for your energy and water consumption through NEOM's circular system.",
                category: "Resources",
                icon: CreditCard,
                status: "Available",
                popularity: 4.8,
                color: "bg-zinc-100",
                isPopular: true
            },
            {
                id: "automated-transit",
                name: "Hyper-Mobility Access",
                desc: "Manage your access to NEOM's high-speed underground transit and last-mile autonomous shuttles.",
                category: "Wellness",
                icon: Car,
                status: "Available",
                popularity: 4.7,
                color: "bg-neom-gold"
            },
            {
                id: "energy-positive",
                name: "Energy Positive Management",
                desc: "Monitor your home's contribution to the grid and receive surplus energy credits.",
                category: "Resources",
                icon: Sun,
                status: "Available",
                popularity: 4.6,
                color: "bg-neom-gold"
            }
        ]
    },
    "energy-water": {
        title: "Energy & Water Sector",
        description: "Managing the world's most sustainable utility ecosystem. Powered by 100% renewable energy and zero-liquid discharge desalination.",
        categories: ["All", "Production", "Grid Management", "Innovation", "Circular Economy"],
        services: [
            {
                id: "solar-hydrogen",
                name: "Green Hydrogen Portal",
                desc: "Monitor industrial-scale green hydrogen production and distribution across NEOM's logistics network.",
                category: "Production",
                icon: Leaf,
                status: "Available",
                popularity: 4.9,
                color: "bg-neom-gold",
                isPopular: true
            },
            {
                id: "enowa-smart-grid",
                name: "Cognitive Grid Network",
                desc: "Advanced AI-driven load balancing for 100% renewable energy distribution to all sectors.",
                category: "Grid Management",
                icon: Zap,
                status: "Available",
                popularity: 4.7,
                color: "bg-zinc-100"
            }
        ]
    },
    "biotech": {
        title: "Biotech Sector",
        description: "Leading the future of personalized medicine, genomics, and bio-industrial innovation within the NEOM ecosystem.",
        categories: ["All", "Research", "Genomics", "Healthcare", "Bio-Innovation"],
        services: [
            {
                id: "neural-mapping",
                name: "Neural Health Mapping",
                desc: "Advanced cognitive health monitoring using integrated biometric sensors and neural feedback.",
                category: "Healthcare",
                icon: ShieldCheck,
                status: "Available",
                popularity: 4.9,
                color: "bg-neom-gold",
                isPopular: true
            },
            {
                id: "genetic-synthesis",
                name: "Genomic Synthesis Lab",
                desc: "Access localized genetic research tools and personalized medicine formulation services.",
                category: "Research",
                icon: Zap,
                status: "Available",
                popularity: 4.8,
                color: "bg-zinc-100"
            }
        ]
    },
    "energy": {
        title: "Energy & Utilities",
        description: "Comprehensive management of NEOM's sustainable energy and water infrastructure, serving consumers, builders, and partners.",
        categories: ["All", "Consumer Ecosystem", "Builder Ecosystem", "Partners & Talent"],
        services: [
            // Consumer Ecosystem
            {
                id: "move-in-activation",
                name: "Move-in (Activation)",
                desc: "Activate electricity and water services for your new home instantly with your Ejari or Title Deed.",
                category: "Consumer Ecosystem",
                subCategory: "CONNECTIONS",
                icon: Zap,
                status: "Available",
                popularity: 4.9,
                color: "bg-emerald-500",
                isPopular: true
            },
            {
                id: "quick-pay",
                name: "Quick Pay",
                desc: "Pay your utility bills securely and instantly using various payment methods.",
                category: "Consumer Ecosystem",
                subCategory: "BILLING",
                icon: CreditCard,
                status: "Available",
                popularity: 4.8,
                color: "bg-blue-600",
                isPopular: true
            },
            {
                id: "sustainable-living",
                name: "My Sustainable Living",
                desc: "Monitor your consumption, compare with similar homes, and get tips to save energy and water.",
                category: "Consumer Ecosystem",
                subCategory: "SUSTAINABILITY",
                icon: TrendingDown,
                status: "Available",
                popularity: 4.7,
                color: "bg-emerald-400",
                isPopular: false
            },
            {
                id: "view-pay-bills",
                name: "View/Pay Bills",
                desc: "Access your billing history, download invoices, and manage your automated payments.",
                category: "Consumer Ecosystem",
                subCategory: "BILLING",
                icon: Droplets,
                status: "Available",
                popularity: 4.9,
                color: "bg-blue-500",
                isPopular: true
            },
            // Builder Ecosystem
            {
                id: "noc-building",
                name: "Building NOC",
                desc: "Obtain No Objection Certificates for building and construction projects.",
                category: "Builder Ecosystem",
                subCategory: "PERMITS",
                icon: FileCheck,
                status: "Available",
                popularity: 4.9,
                color: "bg-emerald-600",
                isPopular: true
            },
            {
                id: "infrastructure-conn",
                name: "Infrastructure Connection",
                desc: "Request permanent or temporary utility connections for your development site.",
                category: "Builder Ecosystem",
                subCategory: "CONNECTIONS",
                icon: LayoutGrid,
                status: "Available",
                popularity: 4.8,
                color: "bg-blue-600",
                isPopular: false
            },
            {
                id: "design-approval",
                name: "Design Approval",
                desc: "Submit utility network designs for technical review and approval.",
                category: "Builder Ecosystem",
                subCategory: "ENGINEERING",
                icon: Ruler,
                status: "Coming Soon",
                popularity: 0,
                color: "bg-zinc-100",
                isPopular: false
            },
            // Partners & Talent
            {
                id: "supplier-reg",
                name: "Supplier Registration",
                desc: "Register your company as an authorized supplier for NEOM's energy sector.",
                category: "Partners & Talent",
                subCategory: "ONBOARDING",
                icon: User,
                status: "Available",
                popularity: 4.9,
                color: "bg-purple-600",
                isPopular: true
            },
            {
                id: "tender-portal",
                name: "Open Tenders",
                desc: "View and bid on active procurement opportunities for infrastructure projects.",
                category: "Partners & Talent",
                subCategory: "PROCUREMENT",
                icon: Handshake,
                status: "Available",
                popularity: 4.8,
                color: "bg-orange-500",
                isPopular: true
            },
            {
                id: "research-collab",
                name: "Research Collaboration",
                desc: "Apply for joint research projects in renewable energy and water technology.",
                category: "Partners & Talent",
                subCategory: "INNOVATION",
                icon: GraduationCap,
                status: "Available",
                popularity: 4.7,
                color: "bg-blue-400",
                isPopular: false
            }
        ]
    },
    "water": {
        title: "Water & Biosystems",
        description: "Advancing zero-liquid discharge desalination and circular water management to power a sustainable future in the desert.",
        categories: ["All", "Consumer Ecosystem", "Builder Ecosystem", "Partners & Talent"],
        services: [
            // Consumer Ecosystem
            {
                id: "water-activation",
                name: "New Connection (Water)",
                desc: "Activate potable and recycled water supply for your residence or business premises.",
                category: "Consumer Ecosystem",
                subCategory: "CONNECTIONS",
                icon: Droplets,
                status: "Available",
                popularity: 4.9,
                color: "bg-blue-500",
                isPopular: true
            },
            {
                id: "quality-dashboard",
                name: "Water Quality Nexus",
                desc: "Real-time visibility into water purity, mineral content, and safety standards at your tap.",
                category: "Consumer Ecosystem",
                subCategory: "QUALITY",
                icon: ShieldCheck,
                status: "Available",
                popularity: 4.8,
                color: "bg-emerald-500",
                isPopular: true
            },
            {
                id: "smart-water-billing",
                name: "Smart Usage Hub",
                desc: "Manage your prepaid water balance and set automated consumption alerts.",
                category: "Consumer Ecosystem",
                subCategory: "BILLING",
                icon: CreditCard,
                status: "Available",
                popularity: 4.7,
                color: "bg-blue-600",
                isPopular: false
            },
            {
                id: "circular-coach",
                name: "Circular Living Coach",
                desc: "AI-driven insights to help you reduce water footprint and maximize recycling within the home.",
                category: "Consumer Ecosystem",
                subCategory: "SUSTAINABILITY",
                icon: Leaf,
                status: "Available",
                popularity: 4.6,
                color: "bg-emerald-400",
                isPopular: false
            },
            // Builder Ecosystem
            {
                id: "sewerage-connection",
                name: "Sewerage Connection",
                desc: "Planning and technical coordination for wastewater and stormwater network integration.",
                category: "Builder Ecosystem",
                subCategory: "CONNECTIONS",
                icon: LayoutGrid,
                status: "Available",
                popularity: 4.9,
                color: "bg-indigo-600",
                isPopular: true
            },
            {
                id: "zld-specs",
                name: "ZLD Infrastructure",
                desc: "Technical specifications for Zero Liquid Discharge compliant on-site water systems.",
                category: "Builder Ecosystem",
                subCategory: "ENGINEERING",
                icon: Ruler,
                status: "Available",
                popularity: 4.8,
                color: "bg-zinc-600",
                isPopular: false
            },
            {
                id: "water-permits",
                name: "Excavation Permits",
                desc: "Official authorization for works near critical water mains and desalination infrastructure.",
                category: "Builder Ecosystem",
                subCategory: "PERMITS",
                icon: FileCheck,
                status: "Coming Soon",
                popularity: 0,
                color: "bg-zinc-100",
                isPopular: false
            },
            // Partners & Talent
            {
                id: "desal-innovation",
                name: "Desal R&D Portal",
                desc: "Grants and collaborative testing for next-gen membrane and brine mining technologies.",
                category: "Partners & Talent",
                subCategory: "INNOVATION",
                icon: Factory,
                status: "Available",
                popularity: 4.9,
                color: "bg-blue-400",
                isPopular: true
            },
            {
                id: "zld-academy",
                name: "Circular Water Academy",
                desc: "Specialized training for industrial partners on Zero Liquid Discharge compliance and tech.",
                category: "Partners & Talent",
                subCategory: "ACADEMY",
                icon: GraduationCap,
                status: "Available",
                popularity: 4.8,
                color: "bg-orange-500",
                isPopular: true
            },
            {
                id: "biosystems-tender",
                name: "Biosystems Tenders",
                desc: "Procurement opportunities for desert agriculture and greening water projects.",
                category: "Partners & Talent",
                subCategory: "PROCUREMENT",
                icon: Handshake,
                status: "Coming Soon",
                popularity: 0,
                color: "bg-zinc-100",
                isPopular: false
            }
        ]
    }
};
