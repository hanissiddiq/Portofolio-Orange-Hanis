/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  profile: {
    fullName: "Hanis Siddiq",
    firstName: "Hanis",
    lastName: "Siddiq",
    title: "Senior Full-Stack Architect",
    introduction: "Crafting flawless web products with Apple-inspired precision, performance-first architectures, and modern aesthetics.",
    bio: "I am a Senior Full-Stack Engineer with over 8 years of experience building scalable SaaS products, high-performance web systems, and mobile applications. Specializing in React, Next.js, TypeScript, and cloud-native backend engines. I focus on creating high-end user experiences paired with highly-optimized server systems that scale seamlessly. I thrive on clean design, fluid micro-interactions, and visual polish.",
    yearsOfExperience: 8,
    currentPosition: "Lead Full-Stack Engineer at Stripe-Scale Fintech",
    location: "Bireuen - Aceh, Indonesia",
    email: "hanissiddiq10@gmail.com",
    phone: "+62 822-1188-7735",
    whatsappNumber: "6282211887735", // International format without '+' or spaces
    values: [
      "Apple-Grade Visual Craftsmanship",
      "Performance-First Software Architectures",
      "Strict Accessibility & Semantic Standards",
      "Developer Experience & Clean Abstractions"
    ],
    languages: ["English (Professional)", "Indonesian (Native)", "Japanese (Conversational)"],
    profilePhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600&h=600"
  },
  education: [
    {
      institution: "Almuslim University",
      degree: "Bachelor of Science",
      fieldOfStudy: "Computer Science & Software Engineering",
      startDate: "2017",
      endDate: "2021",
      location: "Bireuen, Indonesia",
      description: "Graduated with Summa Cum Laude. Specialized in Advanced Algorithms, Database Systems, and Human-Computer Interaction."
    }
  ],
  certificates: [
    {
      id: "cert-01",
      name: "AWS Certified Solutions Architect – Professional",
      issuer: "Amazon Web Services (AWS)",
      year: "2025",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400&h=250",
      verifyUrl: "https://aws.amazon.com/verification"
    },
    {
      id: "cert-02",
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      year: "2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&h=250",
      verifyUrl: "https://cloud.google.com/certification"
    },
    {
      id: "cert-03",
      name: "Next.js Production Specialist Certificate",
      issuer: "Vercel",
      year: "2023",
      image: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&q=80&w=400&h=250",
      verifyUrl: "https://vercel.com"
    }
  ],
  experience: [
    {
      id: "exp-01",
      companyName: "Stripe-Scale Fintech Solutions",
      companyLogo: "CreditCard",
      position: "Lead Full-Stack Engineer",
      employmentType: "Full-time",
      startDate: "2024",
      endDate: "Present",
      location: "Jakarta, Indonesia",
      responsibilities: [
        "Architected and deployed high-frequency financial transaction dashboards supporting 10M+ daily events.",
        "Led a multidisciplinary engineering squad of 8 frontend, backend, and DevOps engineers using Next.js 15, NestJS, and AWS.",
        "Refactored state hydration cycles and API caching headers, reducing client bundle sizes by 42% and time-to-interactive by 1.2s."
      ],
      achievements: [
        "Boosted core web vitals performance score from 68 to 99, achieving direct retention gains of 14% across the checkout funnel.",
        "Engineered an automated end-to-end sandbox simulator which cut quality assurance integration bottlenecks from 4 days to under 12 minutes."
      ],
      technologies: ["Next.js", "TypeScript", "React 19", "NestJS", "PostgreSQL", "Docker", "AWS", "Tailwind CSS"]
    },
    {
      id: "exp-02",
      companyName: "PT ABC Indonesia",
      companyLogo: "Layers",
      position: "Senior Full-Stack Developer",
      employmentType: "Full-time",
      startDate: "2021",
      endDate: "2024",
      location: "Jakarta, Indonesia",
      responsibilities: [
        "Designed and maintained highly dynamic web architectures using Vue.js, Laravel, and PostgreSQL.",
        "Established unified RESTful and GraphQL APIs for various internal administrative applications.",
        "Dockerized the entire local development workflow and streamlined deployment pipelines via GitHub Actions."
      ],
      achievements: [
        "Reduced database query latency by 75% by re-indexing PostgreSQL tables and implementing highly optimized Redis queries.",
        "Spearheaded the migration of the core Enterprise Resource Planning (ERP) suite to Supabase, saving $40,000 in monthly database operational costs."
      ],
      technologies: ["Vue", "Laravel", "PHP", "PostgreSQL", "Redis", "Docker", "Supabase", "Git"]
    },
    {
      id: "exp-03",
      companyName: "Vercel-Inspired Digital Agency",
      companyLogo: "Briefcase",
      position: "Senior Frontend Engineer",
      employmentType: "Contract",
      startDate: "2018",
      endDate: "2021",
      location: "Remote / Singapore",
      responsibilities: [
        "Delivered ultra-premium marketing sites and responsive web platforms for tier-1 global clients.",
        "Crafted custom interactive elements, custom interactive dashboards, and fluid page transitions using Framer Motion.",
        "Implemented rigorous component library standards with complete screen reader accessibility and ARIA compatibility."
      ],
      achievements: [
        "Completed 18 separate high-end product launches with consistent Lighthouse performance scores averaging 98+.",
        "Designed a reusable custom component system that reduced design-to-production times by 60% for subsequent clients."
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma", "Vercel", "Cloudflare"]
    }
  ],
  projects: [
    {
      id: "proj-01",
      name: "Nexus School Information System",
      description: "A comprehensive academic management system coordinating grades, course plans, attendance sheets, automated parents notification channels, and dynamic financial ledgers.",
      category: "Government Application",
      role: "Lead Systems Architect",
      client: "Indonesian Ministry of Education",
      duration: "12 Months (2024)",
      features: [
        "Automated grading reports generation with downloadable encrypted PDFs.",
        "Real-time attendance logs synchronized directly with student IoT RFID cards.",
        "High-performance dashboard tracking administrative actions, system health, and student statistics.",
        "Integrated parental SMS and WhatsApp alerts powered by Twilio gateways."
      ],
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Express", "Docker", "Nginx"],
      liveDemoUrl: "https://nexus-school.example.com",
      githubUrl: "https://github.com/hanissiddiq/nexus-school-system",
      imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800&h=500",
      gallery: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800&h=500",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800&h=500"
      ],
      status: "Completed"
    },
    {
      id: "proj-02",
      name: "Apex Asset Management System",
      description: "An enterprise-grade physical asset tracking tool utilizing QR/barcode scanners, automated depreciation calculators, lifecycle alerts, and maintenance schedule trackers.",
      category: "Asset Management System",
      role: "Principal Developer",
      client: "Apex Logistical Corp",
      duration: "8 Months (2023)",
      features: [
        "Mobile-responsive progressive web app layout with direct camera-based barcode scanning.",
        "Interactive analytics dashboards charting asset depreciation across multi-year lifecycles.",
        "Automated PDF work order sheets generated on maintenance triggers.",
        "Multi-tenant authorization schemas with precise row-level security."
      ],
      technologies: ["React", "TypeScript", "Supabase", "Node.js", "Tailwind CSS", "Framer Motion"],
      liveDemoUrl: "https://apex-assets.example.com",
      githubUrl: "https://github.com/hanissiddiq/apex-asset-management",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=500",
      gallery: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500"
      ],
      status: "Completed"
    },
    {
      id: "proj-03",
      name: "FleetOptima Tracker",
      description: "A real-time geospatial vehicle coordination platform displaying telemetry data, route efficiency ratings, driver alerts, fuel consumption graphs, and immediate emergency dispatches.",
      category: "Fleet Management",
      role: "Senior Backend Engineer",
      client: "Express Cargo Indonesia",
      duration: "10 Months (2023)",
      features: [
        "Real-time geographical tracking powered by customized leaflet mapping.",
        "Robust geofencing rules with SMS notifications for off-route events.",
        "High-performance telemetry datastores handling 5,000 GPS ticks per second with Redis.",
        "Historical playback tools displaying route anomalies with elegant chart overlays."
      ],
      technologies: ["Vue.js", "Node.js", "Redis", "PostgreSQL", "Google Maps Platform", "AWS"],
      liveDemoUrl: "https://fleet-optima.example.com",
      githubUrl: "https://github.com/hanissiddiq/fleet-optima-tracker",
      imageUrl: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=800&h=500",
      gallery: [
        "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=800&h=500"
      ],
      status: "Completed"
    },
    {
      id: "proj-04",
      name: "Warehouse Core System",
      description: "High-capacity inventory management engine controlling incoming batches, smart bin assignment algorithms, pick-pack-ship sequences, and integration with dynamic barcode printers.",
      category: "Warehouse Management",
      role: "Lead Full-Stack Architect",
      client: "Sinar Distribusi Utama",
      duration: "14 Months (2022)",
      features: [
        "Smart shelf space allocation using bin-packing heuristic calculations.",
        "Instant inventory auditing interfaces with offline-mode data synchronization.",
        "Websocket channels managing pickers lists in real time across 4 massive fulfillment depots.",
        "API connectors syncing instantly with Shopify, Tokopedia, and Amazon platforms."
      ],
      technologies: ["React", "NestJS", "MongoDB", "Tailwind CSS", "Redis", "Docker", "Kubernetes"],
      liveDemoUrl: "https://warehouse-core.example.com",
      githubUrl: "https://github.com/hanissiddiq/warehouse-core-system",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800&h=500",
      gallery: [
        "https://images.unsplash.com/photo-1553413719-875871274712?auto=format&fit=crop&q=80&w=800&h=500"
      ],
      status: "Completed"
    },
    {
      id: "proj-05",
      name: "GovPortal Digital Citizen Suite",
      description: "An official provincial administrative portal managing residency certificates registration, land use permits filings, dynamic tax statements, and verified feedback channels.",
      category: "Government Application",
      role: "Lead Systems Architect",
      client: "DKI Jakarta Regional Government",
      duration: "18 Months (2021-2022)",
      features: [
        "Verified digital signatures validation matching provincial cryptographic registries.",
        "Integrated secure citizen document vault using military-grade AES-256 server encryption.",
        "Accessible, high-contrast layouts tailored for visual and auditory impairments.",
        "Comprehensive audit trials logging administrator access securely and indelibly."
      ],
      technologies: ["Next.js", "Laravel", "MySQL", "Tailwind CSS", "Linux", "GitLab"],
      liveDemoUrl: "https://jakarta-govportal.example.com",
      githubUrl: "https://github.com/hanissiddiq/govportal-citizen-suite",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=800&h=500",
      gallery: [
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800&h=500"
      ],
      status: "Completed"
    },
    {
      id: "proj-06",
      name: "Aura E-Commerce Engine",
      description: "A highly stylized, ultra-minimalist lifestyle store showcasing high-end wellness items, with animated grid overlays, customizable cart dynamics, and one-click Google Pay integrations.",
      category: "E-Commerce",
      role: "Frontend Designer",
      client: "Aura Lifestyle Ltd",
      duration: "6 Months (2022)",
      features: [
        "Apple-inspired web visuals with rich CSS hover canvas animations.",
        "Persistent cart system synchronized seamlessly with cloud databases and localStorage.",
        "Smart search filters sorting through 5,000 SKUs in under 5ms with local indexing.",
        "Full support for dark mode, localized pricing tiers, and international shipments."
      ],
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Supabase", "Cloudflare"],
      liveDemoUrl: "https://aura-store.example.com",
      githubUrl: "https://github.com/hanissiddiq/aura-ecommerce",
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800&h=500",
      gallery: [
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800&h=500"
      ],
      status: "Completed"
    }
  ],
  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "React (18/19)", level: 98 },
        { name: "Next.js (App/Pages)", level: 95 },
        { name: "TypeScript", level: 96 },
        { name: "Tailwind CSS", level: 99 },
        { name: "Vue.js", level: 85 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js (Express/NestJS)", level: 92 },
        { name: "Laravel (PHP)", level: 90 },
        { name: "REST / GraphQL APIs", level: 94 },
        { name: "Microservices", level: 82 }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 92 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 88 },
        { name: "Supabase / Firebase", level: 94 }
      ]
    },
    {
      category: "Mobile",
      skills: [
        { name: "Flutter", level: 80 },
        { name: "Dart", level: 82 },
        { name: "React Native", level: 75 }
      ]
    },
    {
      category: "DevOps",
      skills: [
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 72 },
        { name: "CI/CD (GitHub Actions / GitLab CI)", level: 90 },
        { name: "Linux / Shell Scripting", level: 85 }
      ]
    },
    {
      category: "Cloud",
      skills: [
        { name: "AWS (EC2, S3, RDS, Lambda)", level: 88 },
        { name: "Google Cloud Platform (GCP)", level: 82 },
        { name: "Vercel / Netlify", level: 96 },
        { name: "Cloudflare (Pages/Workers)", level: 90 }
      ]
    },
    {
      category: "UI/UX",
      skills: [
        { name: "Figma (Auto Layout & Variables)", level: 92 },
        { name: "Wireframing & Typography Pairing", level: 90 },
        { name: "Prototyping & Motion Design", level: 88 },
        { name: "Design Systems Construction", level: 90 }
      ]
    }
  ],
  techStack: [
    { name: "HTML", category: "Frontend", experienceLevel: "Expert", years: 8, logo: "Code2" },
    { name: "CSS", category: "Frontend", experienceLevel: "Expert", years: 8, logo: "Palette" },
    { name: "JavaScript", category: "Language", experienceLevel: "Expert", years: 8, logo: "FileCode" },
    { name: "TypeScript", category: "Language", experienceLevel: "Expert", years: 6, logo: "FileSignature" },
    { name: "React", category: "Frontend", experienceLevel: "Expert", years: 6, logo: "Atom" },
    { name: "Next.js", category: "Frontend", experienceLevel: "Expert", years: 4, logo: "Layers" },
    { name: "Vue", category: "Frontend", experienceLevel: "Advanced", years: 3, logo: "Hexagon" },
    { name: "Laravel", category: "Backend", experienceLevel: "Expert", years: 5, logo: "Terminal" },
    { name: "PHP", category: "Language", experienceLevel: "Expert", years: 6, logo: "Binary" },
    { name: "Node.js", category: "Backend", experienceLevel: "Expert", years: 5, logo: "Cpu" },
    { name: "Express", category: "Backend", experienceLevel: "Expert", years: 5, logo: "Workflow" },
    { name: "NestJS", category: "Backend", experienceLevel: "Advanced", years: 2, logo: "ShieldCheck" },
    { name: "Flutter", category: "Mobile", experienceLevel: "Advanced", years: 3, logo: "Smartphone" },
    { name: "Dart", category: "Language", experienceLevel: "Advanced", years: 3, logo: "Component" },
    { name: "MySQL", category: "Database", experienceLevel: "Expert", years: 7, logo: "Database" },
    { name: "PostgreSQL", category: "Database", experienceLevel: "Expert", years: 5, logo: "DatabaseBackup" },
    { name: "Supabase", category: "Database", experienceLevel: "Expert", years: 3, logo: "CloudLightning" },
    { name: "Firebase", category: "Database", experienceLevel: "Expert", years: 4, logo: "Flame" },
    { name: "MongoDB", category: "Database", experienceLevel: "Advanced", years: 4, logo: "FolderGit2" },
    { name: "Redis", category: "Database", experienceLevel: "Advanced", years: 3, logo: "Zap" },
    { name: "Docker", category: "DevOps", experienceLevel: "Advanced", years: 4, logo: "Container" },
    { name: "Nginx", category: "DevOps", experienceLevel: "Advanced", years: 4, logo: "Network" },
    { name: "Linux", category: "DevOps", experienceLevel: "Expert", years: 6, logo: "MonitorPlay" },
    { name: "Git", category: "Tools", experienceLevel: "Expert", years: 8, logo: "GitBranch" },
    { name: "Github", category: "Tools", experienceLevel: "Expert", years: 8, logo: "Github" },
    { name: "Figma", category: "Tools", experienceLevel: "Expert", years: 5, logo: "PenTool" },
    { name: "Vercel", category: "DevOps", experienceLevel: "Expert", years: 4, logo: "Compass" },
    { name: "Cloudflare", category: "DevOps", experienceLevel: "Advanced", years: 3, logo: "Globe" },
    { name: "AWS", category: "Cloud", experienceLevel: "Advanced", years: 4, logo: "Cloud" }
  ],
  testimonials: [
    {
      id: "test-01",
      clientName: "Amanda Wijaya",
      role: "VP of Engineering",
      company: "Apex Logistical Corp",
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
      review: "Website Binapedia yang dibangun oleh Hanis sangat informatif dan mudah digunakan. Saya dapat dengan mudah menemukan informasi mengenai program Bahasa Inggris, Bahasa Arab, Komputer, hingga IPA. Proses pendaftaran juga cepat melalui WhatsApp, dan respon admin sangat ramah. Setelah mengikuti kelas, saya merasa kemampuan saya meningkat berkat metode pembelajaran yang interaktif dan pengajar yang berpengalaman. Binapedia menjadi pilihan yang tepat bagi siapa saja yang ingin belajar dengan nyaman dan berkualitas.",
      rating: 5
    },
    {
      id: "test-02",
      clientName: "Budi Santoso",
      role: "General Manager",
      company: "Sinar Distribusi Utama",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
      review: "Aplikasi Hotel buatan hanis sangat membantu saat saya mencari dan memesan hotel untuk liburan. Antarmukanya sederhana dan mudah digunakan, pilihan hotelnya lengkap, serta proses booking sangat cepat. Informasi mengenai harga, fasilitas, dan ulasan hotel ditampilkan dengan jelas sehingga memudahkan saya dalam menentukan pilihan. Konfirmasi pemesanan juga langsung diterima setelah pembayaran berhasil. Sangat praktis dan saya pasti akan menggunakan aplikasi ini lagi untuk perjalanan berikutnya.",
      rating: 5
    },
    {
      id: "test-03",
      clientName: "Rizki Maulana",
      role: "Web Developer",
      company: "Samudera News",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
      review: "Portal berita yang dikembangkan oleh Hanis memiliki tampilan yang modern, ringan, dan sangat nyaman digunakan. Informasi disajikan secara rapi sehingga berita mudah ditemukan berdasarkan kategori. Kecepatan akses halaman juga sangat baik, bahkan saat dibuka melalui perangkat mobile. Fitur pencarian, artikel terbaru, dan berita populer bekerja dengan optimal, memberikan pengalaman membaca yang menyenangkan. Secara keseluruhan, aplikasi ini sangat layak dijadikan sebagai media informasi digital yang profesional dan terpercaya",
      rating: 5
    }
  ]
};
