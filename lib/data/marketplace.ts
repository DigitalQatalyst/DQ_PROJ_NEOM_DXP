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
    Factory,
    Battery,
    Home,
    Bot,
    Lightbulb,
    Recycle,
    Boxes,
    Heart,
    Cpu,
    Wrench,
    Wind,
    Package,
    Users
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
            // Builder Ecosystem
            {
                id: "renewable-generation",
                name: "Renewable Energy Generation",
                desc: "Explore large-scale solar and wind farms, active renewable projects, and strategic partners.",
                category: "Builder Ecosystem",
                subCategory: "PRODUCTION",
                icon: Sun,
                status: "Available",
                popularity: 4.9,
                color: "bg-emerald-500",
                isPopular: true,
                details: {
                    overview: "Harnessing NEOM’s vast renewable resources, our utility-scale solar and wind projects provide clean, 24/7 power to fuel the future of sustainable living.",
                    features: [
                        "Utility-scale solar PV and onshore wind",
                        "Bankable PPAs with strategic partners",
                        "Grid-synchronized and forecast-optimized"
                    ],
                    howItWorks: [
                        "Browse NEOM’s renewable energy projects",
                        "Partner with us to optimize your energy solutions",
                        "Help shape a sustainable future for generations to come"
                    ],
                    requirements: {
                        documents: [
                            { title: "Company Profile", desc: "Valid corporate identity and portfolio summary." },
                            { title: "Technical Credentials", desc: "Track record in renewable EPC/O&M." }
                        ],
                        eligibility: "Qualified developers, EPCs, and institutional partners."
                    },
                    fees: {
                        structure: [],
                        note: "No fixed fees; commercial terms are defined per project engagement."
                    },
                    faqs: [
                        { q: "How long does it take to activate a solar/wind project?", a: "Timelines vary by scope and permitting; typical activation ranges from months to phased commissioning schedules." },
                        { q: "What are the requirements for partnering in renewable projects?", a: "A company profile and technical credentials demonstrating EPC/O&M capabilities are required." }
                    ],
                    resources: [
                        { label: "Renewables Prospectus (PDF)", href: "#" },
                        { label: "Partner Directory", href: "#" }
                    ],
                    heroImage: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop",
                    actionHref: "#"
                }
            },
            {
                id: "smart-grid-platforms",
                name: "Smart Grid & Digital Energy Platforms",
                desc: "Access cognitive grid tools, real-time load management, and AI-driven energy dashboards.",
                category: "Builder Ecosystem",
                subCategory: "GRID MGMT",
                icon: Zap,
                status: "Available",
                popularity: 4.8,
                color: "bg-blue-600",
                isPopular: true,
                details: {
                    overview: "NEOM’s smart grid systems enable AI-powered optimization of energy distribution, ensuring a seamless, future-proof power network.",
                    features: [
                        "Real-time SCADA overlays",
                        "AI-driven demand forecasting",
                        "Automated dispatch optimization"
                    ],
                    howItWorks: [
                        "Authenticate your assets",
                        "Configure telemetry",
                        "Access real-time energy intelligence through our digital platforms"
                    ],
                    requirements: {
                        documents: [
                            { title: "Access Agreement", desc: "Platform access and data policy acceptance." }
                        ],
                        eligibility: "Utilities, large consumers, and approved OEM partners."
                    },
                    fees: { structure: [], note: "No fixed fees; tiered licensing may apply for premium modules and integrations." },
                    faqs: [
                        { q: "How do I configure my assets?", a: "After access approval, register assets, enable telemetry, and map signals in the platform console or via API." },
                        { q: "What are the prerequisites for operating in the NEOM smart grid?", a: "An executed access agreement, compliant telemetry, and approved roles/permissions are required." }
                    ],
                    resources: [
                        { label: "Platform Guide", href: "#" },
                        { label: "API Reference", href: "#" }
                    ],
                    heroImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1600&auto=format&fit=crop",
                    actionHref: "#"
                }
            },
            {
                id: "energy-storage",
                name: "Energy Storage",
                desc: "Discover storage technologies and grid-scale buffering solutions for reliability and resilience.",
                category: "Builder Ecosystem",
                subCategory: "STORAGE",
                icon: Battery,
                status: "Available",
                popularity: 4.7,
                color: "bg-purple-600",
                isPopular: false,
                details: {
                    overview: "Our grid-scale energy storage solutions help NEOM’s sustainable energy infrastructure manage the balance between supply and demand, ensuring a reliable power grid.",
                    features: [
                        "Grid-scale BESS",
                        "Hybrid storage architectures",
                        "Lifecycle and safety analytics"
                    ],
                    howItWorks: [
                        "Evaluate storage solutions tailored to your use case",
                        "Access on-demand energy storage",
                        "Power the city of tomorrow"
                    ],
                    requirements: {
                        documents: [
                            { title: "Site Parameters", desc: "Interconnection and footprint details." }
                        ],
                        eligibility: "Developers and large consumers requiring storage."
                    },
                    fees: { structure: [], note: "No fixed fees; capex/opex are defined per deployment scope and use case." },
                    faqs: [
                        { q: "What is BESS and how does it contribute to grid stability?", a: "Battery Energy Storage Systems provide frequency response, peak shaving, and backup to stabilize the grid." },
                        { q: "How is energy storage sized for different use cases?", a: "Sizing depends on duty cycle, response time, and site constraints; our team provides tailored sizing studies." }
                    ],
                    resources: [ { label: "Storage Playbook", href: "#" } ],
                    heroImage: "https://images.unsplash.com/photo-1565715489087-97b3a75fd5f0?q=80&w=1600&auto=format&fit=crop",
                    actionHref: "#"
                }
            },
            {
                id: "green-hydrogen",
                name: "Green Hydrogen & Fuels",
                desc: "Hydrogen labs, partnerships, and sustainable fuel services across NEOM's value chain.",
                category: "Partners & Talent",
                subCategory: "INNOVATION",
                icon: Leaf,
                status: "Available",
                popularity: 4.8,
                color: "bg-emerald-400",
                isPopular: true,
                details: {
                    overview: "At the forefront of hydrogen innovation, NEOM develops end-to-end green hydrogen solutions for clean fuel production and logistics.",
                    features: [
                        "Electrolyzer pilots and scale-up",
                        "Safety and certification frameworks",
                        "Export logistics integration"
                    ],
                    howItWorks: [
                        "Propose a pilot",
                        "Align on safety standards",
                        "Work with NEOM to execute world-class hydrogen projects"
                    ],
                    requirements: {
                        documents: [ { title: "HSE Dossier", desc: "Safety and compliance documentation." } ],
                        eligibility: "Qualified research and industrial partners."
                    },
                    fees: { structure: [], note: "No fixed fees; terms are defined within collaboration MoUs or pilot agreements." },
                    faqs: [
                        { q: "How is hydrogen production scaled?", a: "Scale-up is achieved via modular electrolyzer capacity, phased infrastructure, and offtake alignment." },
                        { q: "What safety standards must be met for hydrogen initiatives?", a: "Compliance with international HSE standards and NEOM-specific safety protocols is mandatory." }
                    ],
                    resources: [ { label: "Hydrogen Program Overview", href: "#" } ],
                    heroImage: "https://images.unsplash.com/photo-1566161587928-7fbc2a65e8f5?q=80&w=1600&auto=format&fit=crop",
                    actionHref: "#"
                }
            },
            {
                id: "energy-infrastructure",
                name: "Energy Infrastructure",
                desc: "View transmission maps, substations, and collaborate with infrastructure partners.",
                category: "Builder Ecosystem",
                subCategory: "NETWORKS",
                icon: LayoutGrid,
                status: "Available",
                popularity: 4.8,
                color: "bg-blue-500",
                isPopular: false,
                details: {
                    overview: "Our transmission and distribution infrastructure enables a robust and scalable energy network, supporting NEOM’s expansive growth.",
                    features: [
                        "Interactive transmission maps",
                        "Planned substation capacity",
                        "Outage and maintenance windows"
                    ],
                    howItWorks: [
                        "Explore NEOM’s interactive grid maps",
                        "Coordinate energy interconnections",
                        "Build the foundation of the city"
                    ],
                    requirements: {
                        documents: [
                            { title: "Site Details", desc: "Location, interconnection point, and load/generation profile." },
                            { title: "Transmission Capacity Agreement", desc: "Preliminary agreement outlining capacity needs and constraints." }
                        ],
                        eligibility: "Infrastructure developers and utilities."
                    },
                    fees: { structure: [], note: "No fixed fees; terms are defined via interconnection agreements and studies." },
                    faqs: [
                        { q: "How do I submit interconnection interest?", a: "Submit a request with site details and capacity needs; our team will guide the next steps." },
                        { q: "What is the process for coordinating due diligence?", a: "Following interest, we coordinate technical studies, right-of-way reviews, and schedule integration milestones." }
                    ],
                    resources: [ { label: "Grid Maps (Preview)", href: "#" } ],
                    heroImage: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop",
                    actionHref: "#"
                }
            },
            {
                id: "industrial-commercial",
                name: "Industrial & Commercial Energy Solutions",
                desc: "B2B energy offerings for industry and commerce, including decarbonisation services.",
                category: "Partners & Talent",
                subCategory: "B2B",
                icon: Factory,
                status: "Available",
                popularity: 4.7,
                color: "bg-orange-500",
                isPopular: true,
                details: {
                    overview: "NEOM offers tailored B2B energy solutions that drive decarbonization, renewable integration, and electrification for industries and businesses.",
                    features: [
                        "Corporate PPAs and green tariffs",
                        "Process electrification",
                        "Decarbonisation roadmaps"
                    ],
                    howItWorks: [
                        "Work with NEOM to select corporate green tariffs",
                        "Implement smart electrification",
                        "Deploy decarbonization roadmaps"
                    ],
                    requirements: {
                        documents: [ { title: "Business Energy Target", desc: "Statement of load profile, sustainability goals, and operational constraints." } ],
                        eligibility: "Large businesses and corporations operating within NEOM."
                    },
                    fees: { structure: [], note: "No fixed fees; commercial terms are defined per engagement and bundle selection." },
                    faqs: [
                        { q: "What is the process for defining energy targets?", a: "We analyze your load and sustainability KPIs to shape achievable decarbonization milestones." },
                        { q: "How do I select an optimal energy bundle?", a: "Choose from curated bundles or request a custom mix of PPAs, electrification, and efficiency measures." }
                    ],
                    resources: [ { label: "B2B Solutions Guide", href: "#" } ],
                    heroImage: "https://images.unsplash.com/photo-1581093458791-9d09f27e2566?q=80&w=1600&auto=format&fit=crop",
                    actionHref: "#"
                }
            },
            {
                id: "consumer-community",
                name: "Consumer & Community Energy Services",
                desc: "Citizen dashboards, smart metering, and personalized insights for sustainable living.",
                category: "Consumer Ecosystem",
                subCategory: "CITIZEN",
                icon: Home,
                status: "Available",
                popularity: 4.9,
                color: "bg-emerald-600",
                isPopular: true,
                details: {
                    overview: "Our resident portals empower individuals to monitor energy use, track savings, and take actionable steps toward a greener lifestyle.",
                    features: [
                        "Smart metering and alerts",
                        "Personalized savings insights",
                        "Community benchmarks"
                    ],
                    howItWorks: [
                        "Sign in",
                        "Connect your meters",
                        "Track usage, get tips, and make your sustainable living choices"
                    ],
                    requirements: { documents: [], eligibility: "Residents and small businesses in NEOM." },
                    fees: { structure: [], note: "No fixed fees; basic access is free, activation or premium subscriptions may apply for advanced services." },
                    faqs: [
                        { q: "How do I connect my smart meter?", a: "Sign in with your NEOM ID, then follow the meter pairing steps in the portal to link your device." },
                        { q: "How can I track my energy savings?", a: "Use the dashboard to view usage trends, savings insights, and recommendations personalized to your profile." }
                    ],
                    resources: [ { label: "Resident Quick Start", href: "#" } ],
                    heroImage: "https://images.unsplash.com/photo-1581092335294-89ea9b274d9f?q=80&w=1600&auto=format&fit=crop",
                    actionHref: "#"
                }
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
    },
    "design-construction": {
        title: "Design & Construction",
        description: "Building the future with cognitive and sustainable design. NEOM pioneers robotics, clean industry, and worker-centric construction innovation.",
        categories: ["All", "Automation", "Engineering", "Sustainability", "Supply Chain", "Workforce"],
        services: [
            {
                id: "robotics-automation",
                name: "Robotics & Automation",
                desc: "Advanced robotics and automation driving efficiency, safety, and speed in construction.",
                category: "Automation",
                subCategory: "ROBOTICS",
                icon: Bot,
                status: "Available",
                popularity: 4.9,
                color: "bg-blue-600",
                isPopular: true,
                details: {
                    overview: "NEOM is revolutionizing construction through advanced robotics and automation systems that enhance precision, reduce waste, and accelerate project timelines while maintaining the highest safety standards.",
                    features: [
                        "Autonomous construction robots",
                        "AI-powered site monitoring",
                        "Robotic material handling systems",
                        "Automated quality control",
                        "Drone-based site surveying",
                        "Smart equipment coordination"
                    ],
                    howItWorks: [
                        "Submit your construction project requirements",
                        "Our team assesses automation opportunities",
                        "Deploy robotic systems tailored to your needs",
                        "Monitor progress through real-time dashboards",
                        "Achieve faster, safer, and more efficient construction"
                    ],
                    requirements: {
                        documents: [
                            { title: "Project Specifications", desc: "Detailed construction plans and technical requirements." },
                            { title: "Site Assessment", desc: "Current site conditions and access parameters." },
                            { title: "Safety Protocols", desc: "Compliance with NEOM construction safety standards." }
                        ],
                        eligibility: "Construction firms, developers, and contractors operating within NEOM."
                    },
                    fees: {
                        structure: [
                            { label: "Initial Assessment", value: "₪ 5,000", type: "One-time" },
                            { label: "System Deployment", value: "Custom Quote", type: "Project-based" },
                            { label: "Ongoing Support", value: "₪ 2,000/month", type: "Subscription" }
                        ],
                        note: "Pricing varies based on project scope and automation requirements."
                    },
                    faqs: [
                        { q: "What types of construction projects benefit most from robotics?", a: "Large-scale infrastructure, repetitive tasks, high-precision work, and projects requiring enhanced safety measures benefit significantly from robotic automation." },
                        { q: "How long does it take to deploy robotic systems?", a: "Deployment timelines vary from 2-8 weeks depending on project complexity and site readiness." },
                        { q: "Can robotics integrate with existing construction workflows?", a: "Yes, our systems are designed to seamlessly integrate with traditional construction methods and existing equipment." }
                    ],
                    resources: [
                        { label: "Robotics Capabilities Guide", href: "#" },
                        { label: "Case Studies", href: "#" },
                        { label: "Technical Specifications", href: "#" }
                    ]
                }
            },
            {
                id: "engineering-innovation",
                name: "Engineering Innovation",
                desc: "AI-driven design and sustainable materials shaping resilient, adaptable cities.",
                category: "Engineering",
                subCategory: "INNOVATION",
                icon: Lightbulb,
                status: "Available",
                popularity: 4.8,
                color: "bg-purple-600",
                isPopular: true,
                details: {
                    overview: "Our engineering innovation hub combines cutting-edge design methodologies, AI-driven simulations, and sustainable materials science to create infrastructure that adapts to future needs.",
                    features: [
                        "AI-powered structural design",
                        "Digital twin technology",
                        "Sustainable material selection",
                        "Parametric design tools",
                        "Climate-responsive architecture",
                        "Modular construction systems"
                    ],
                    howItWorks: [
                        "Define your engineering challenge",
                        "Access NEOM's innovation toolkit and expertise",
                        "Collaborate with our engineering teams",
                        "Prototype and test solutions",
                        "Implement validated innovations at scale"
                    ],
                    requirements: {
                        documents: [
                            { title: "Engineering Brief", desc: "Project objectives and technical constraints." },
                            { title: "Innovation Proposal", desc: "Description of the engineering challenge or opportunity." },
                            { title: "Credentials", desc: "Professional engineering qualifications and portfolio." }
                        ],
                        eligibility: "Licensed engineers, architects, and design firms partnering with NEOM."
                    },
                    fees: {
                        structure: [
                            { label: "Consultation", value: "₪ 3,000", type: "One-time" },
                            { label: "Innovation Lab Access", value: "₪ 8,000/month", type: "Subscription" },
                            { label: "Prototype Development", value: "Custom Quote", type: "Project-based" }
                        ],
                        note: "Grant funding available for breakthrough innovations aligned with NEOM's vision."
                    },
                    faqs: [
                        { q: "What engineering disciplines are supported?", a: "We support structural, civil, mechanical, electrical, and environmental engineering, plus interdisciplinary innovations." },
                        { q: "Can I access NEOM's engineering simulation tools?", a: "Yes, approved partners gain access to our advanced simulation and modeling platforms." },
                        { q: "How does NEOM protect intellectual property?", a: "We have robust IP frameworks that protect innovator rights while enabling collaborative development." }
                    ],
                    resources: [
                        { label: "Innovation Framework", href: "#" },
                        { label: "Engineering Standards", href: "#" },
                        { label: "Partner Portal", href: "#" }
                    ]
                }
            },
            {
                id: "clean-industry",
                name: "Clean Industry",
                desc: "Clean technologies reducing carbon footprints and promoting sustainable materials.",
                category: "Sustainability",
                subCategory: "CLEAN TECH",
                icon: Wind,
                status: "Available",
                popularity: 4.9,
                color: "bg-emerald-600",
                isPopular: true,
                details: {
                    overview: "NEOM's clean industry initiative sets new benchmarks for sustainable construction, eliminating harmful emissions and waste while delivering superior performance and durability.",
                    features: [
                        "Zero-emission construction equipment",
                        "Carbon-neutral material production",
                        "Circular economy practices",
                        "Waste-to-resource conversion",
                        "Green certification programs",
                        "Environmental impact monitoring"
                    ],
                    howItWorks: [
                        "Assess your current environmental footprint",
                        "Identify clean technology opportunities",
                        "Implement sustainable practices and materials",
                        "Track and verify carbon reduction",
                        "Achieve NEOM clean industry certification"
                    ],
                    requirements: {
                        documents: [
                            { title: "Environmental Baseline", desc: "Current emissions and waste metrics." },
                            { title: "Sustainability Plan", desc: "Proposed clean technology implementations." },
                            { title: "Compliance Certificate", desc: "Adherence to NEOM environmental standards." }
                        ],
                        eligibility: "Construction companies, material suppliers, and industrial partners committed to sustainability."
                    },
                    fees: {
                        structure: [
                            { label: "Environmental Assessment", value: "₪ 4,000", type: "One-time" },
                            { label: "Clean Tech Implementation", value: "Custom Quote", type: "Project-based" },
                            { label: "Certification Program", value: "₪ 6,000", type: "Annual" }
                        ],
                        note: "Incentives and subsidies available for early adopters of clean technologies."
                    },
                    faqs: [
                        { q: "What qualifies as 'clean industry' in construction?", a: "Clean industry encompasses zero-emission equipment, sustainable materials, waste elimination, and carbon-neutral operations." },
                        { q: "How does NEOM verify environmental claims?", a: "We use IoT sensors, third-party audits, and blockchain-verified tracking to ensure transparency and accountability." },
                        { q: "Are there financial benefits to clean industry adoption?", a: "Yes, including tax incentives, preferential contract terms, and access to green financing options." }
                    ],
                    resources: [
                        { label: "Clean Industry Playbook", href: "#" },
                        { label: "Sustainability Metrics", href: "#" },
                        { label: "Technology Catalog", href: "#" }
                    ]
                }
            },
            {
                id: "cementitious-supply-chain",
                name: "Cementitious Supply Chain",
                desc: "Low-carbon cement with alternative materials and recycled aggregates.",
                category: "Supply Chain",
                subCategory: "MATERIALS",
                icon: Package,
                status: "Available",
                popularity: 4.7,
                color: "bg-orange-600",
                isPopular: false,
                details: {
                    overview: "Our innovative cementitious supply chain transforms traditional cement production through low-carbon alternatives, recycled materials, and optimized logistics to deliver sustainable building materials at scale.",
                    features: [
                        "Low-carbon cement alternatives",
                        "Recycled aggregate integration",
                        "Carbon capture in production",
                        "Blockchain supply chain tracking",
                        "Quality-assured sustainable materials",
                        "Just-in-time delivery systems"
                    ],
                    howItWorks: [
                        "Specify your material requirements",
                        "Select from sustainable cement options",
                        "Place orders through our digital platform",
                        "Track delivery and quality certifications",
                        "Receive materials with full carbon accounting"
                    ],
                    requirements: {
                        documents: [
                            { title: "Material Specifications", desc: "Technical requirements and performance standards." },
                            { title: "Project Timeline", desc: "Delivery schedule and volume requirements." },
                            { title: "Quality Standards", desc: "Acceptance criteria and testing protocols." }
                        ],
                        eligibility: "Construction projects within NEOM requiring cementitious materials."
                    },
                    fees: {
                        structure: [
                            { label: "Standard Low-Carbon Cement", value: "₪ 450/ton", type: "Per Unit" },
                            { label: "Premium Recycled Blend", value: "₪ 520/ton", type: "Per Unit" },
                            { label: "Delivery & Logistics", value: "₪ 80/ton", type: "Per Unit" }
                        ],
                        note: "Volume discounts available for large projects. Prices include carbon offset credits."
                    },
                    faqs: [
                        { q: "How much carbon is reduced compared to traditional cement?", a: "Our low-carbon alternatives reduce emissions by 40-70% compared to conventional Portland cement." },
                        { q: "Does sustainable cement compromise structural performance?", a: "No, all materials meet or exceed international structural standards and are rigorously tested." },
                        { q: "Can I track the origin of materials?", a: "Yes, our blockchain-enabled system provides full traceability from production to delivery." }
                    ],
                    resources: [
                        { label: "Material Catalog", href: "#" },
                        { label: "Technical Data Sheets", href: "#" },
                        { label: "Supply Chain Dashboard", href: "#" }
                    ]
                }
            },
            {
                id: "worker-welfare",
                name: "Worker Welfare",
                desc: "Smart monitoring and robotics ensuring worker health, safety, and well-being.",
                category: "Workforce",
                subCategory: "SAFETY & WELLNESS",
                icon: Users,
                status: "Available",
                popularity: 4.8,
                color: "bg-rose-600",
                isPopular: true,
                details: {
                    overview: "NEOM's worker welfare program leverages technology and human-centered design to create the safest, healthiest, and most supportive construction work environment in the world.",
                    features: [
                        "Wearable health monitoring",
                        "AI-powered safety alerts",
                        "Ergonomic tool design",
                        "Mental health support programs",
                        "Skills development training",
                        "Worker feedback systems"
                    ],
                    howItWorks: [
                        "Enroll your workforce in the welfare program",
                        "Deploy wearable safety devices",
                        "Access training and wellness resources",
                        "Monitor safety metrics in real-time",
                        "Continuously improve worker conditions"
                    ],
                    requirements: {
                        documents: [
                            { title: "Workforce Registry", desc: "List of workers and their roles." },
                            { title: "Safety Compliance", desc: "Current safety protocols and incident history." },
                            { title: "Training Records", desc: "Worker qualifications and certifications." }
                        ],
                        eligibility: "All construction employers and contractors operating within NEOM."
                    },
                    fees: {
                        structure: [
                            { label: "Program Enrollment", value: "₪ 2,000", type: "One-time" },
                            { label: "Per Worker Monthly", value: "₪ 150/worker", type: "Subscription" },
                            { label: "Training Modules", value: "₪ 500/course", type: "Per Course" }
                        ],
                        note: "Subsidies available for small contractors. Mandatory for all NEOM construction projects."
                    },
                    faqs: [
                        { q: "What health metrics are monitored?", a: "We track vital signs, fatigue levels, environmental exposure, and ergonomic stress while respecting worker privacy." },
                        { q: "How does NEOM respond to safety alerts?", a: "Automated alerts trigger immediate supervisor notification and, if needed, emergency response protocols." },
                        { q: "Are workers involved in program design?", a: "Yes, we maintain active worker councils that provide input on welfare initiatives and safety improvements." }
                    ],
                    resources: [
                        { label: "Worker Welfare Handbook", href: "#" },
                        { label: "Safety Training Portal", href: "#" },
                        { label: "Wellness Resources", href: "#" }
                    ]
                }
            }
        ]
    }
};
