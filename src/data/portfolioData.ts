import {
  ContactInfo,
  ExperienceItem,
  NavItem,
  ProjectItem,
  SkillCategory,
  CertificationItem,
  StatItem,
} from "@/types";

export const PERSONAL_INFO: ContactInfo = {
  name: "Zeshan Akram",
  title: "MERN Stack Developer",
  tagline: "Frontend-Focused Engineer Crafting Dynamic, High-Performance Web Apps",
  email: "zeeshan.akram5912@gmail.com",
  phone: "+92 300 3855912",
  whatsapp: "923003855912",
  location: "Lahore, Pakistan",
  availableForHire: true,
  linkedin: "https://www.linkedin.com/in/ch-zeeshan-akram",
  github: "https://github.com/zeeshan5912",
  summary:
    "Frontend-focused MERN Stack Developer with 1+ year of professional experience building responsive, high-performance web applications using React.js and Next.js. Skilled in Redux state management, RESTful API integration, and Server-Side Rendering (SSR). Passionate about clean UI, reusable component architectures, and silky smooth micro-interactions.",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const STATS: StatItem[] = [
  {
    label: "Experience",
    value: "1+",
    suffix: "Years",
    description: "Building production web apps",
  },
  {
    label: "Projects Built",
    value: "10+",
    suffix: "Shipped",
    description: "Full-stack & responsive frontends",
  },
  {
    label: "Tech Mastery",
    value: "15+",
    suffix: "Tools",
    description: "React, Next.js, Node, MongoDB",
  },
  {
    label: "Code Quality",
    value: "100%",
    suffix: "Commitment",
    description: "Component modularity & clean architecture",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    subtitle: "Modern, reactive, and responsive interfaces",
    iconName: "Layout",
    skills: [
      { name: "React.js", level: 95, iconName: "Atom", highlight: true },
      { name: "Next.js (App Router & SSR)", level: 92, iconName: "Globe", highlight: true },
      { name: "JavaScript (ES6+)", level: 90, iconName: "Code2", highlight: true },
      { name: "Redux & State Management", level: 88, iconName: "Layers" },
      { name: "Tailwind CSS & Styling", level: 94, iconName: "Palette", highlight: true },
      { name: "Framer Motion & Animations", level: 86, iconName: "Sparkles" },
      { name: "Responsive UI & Mobile First", level: 96, iconName: "Smartphone" },
      { name: "Form Validation & UX", level: 90, iconName: "CheckCircle2" },
    ],
  },
  {
    title: "Backend & Database",
    subtitle: "Scalable APIs and robust data management",
    iconName: "Server",
    skills: [
      { name: "Node.js", level: 85, iconName: "ServerCog", highlight: true },
      { name: "Express.js", level: 85, iconName: "Cpu" },
      { name: "MongoDB & Mongoose", level: 84, iconName: "Database", highlight: true },
      { name: "RESTful API Development", level: 90, iconName: "Network" },
      { name: "Authentication & JWT", level: 82, iconName: "ShieldCheck" },
      { name: "CRUD & Aggregations", level: 85, iconName: "FolderKanban" },
    ],
  },
  {
    title: "Tools, Architecture & Workflows",
    subtitle: "Modern developer tooling & deployment pipelines",
    iconName: "Wrench",
    skills: [
      { name: "Server-Side Rendering (SSR)", level: 90, iconName: "Zap", highlight: true },
      { name: "Git & Version Control", level: 92, iconName: "GitBranch" },
      { name: "API Integration & Axios", level: 95, iconName: "ArrowRightLeft" },
      { name: "Postman & API Testing", level: 88, iconName: "Send" },
      { name: "Vercel & Cloud Deployment", level: 90, iconName: "Cloud" },
      { name: "Component-Driven Architecture", level: 94, iconName: "Boxes" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "crescent-webs",
    role: "Junior MERN Stack Developer",
    company: "Crescent Webs",
    location: "Gulshan-e-Ravi, Lahore, Pakistan",
    period: "Oct 2025 - Present",
    isCurrent: true,
    type: "Full-Time",
    achievements: [
      "Developed full-stack web applications using React.js for client-side interfaces and Node.js/Express.js for backend services.",
      "Built scalable RESTful APIs integrated with MongoDB for efficient data persistence and fast query handling.",
      "Implemented modular, reusable, and highly responsive UI components adhering to modern component-based best practices.",
      "Collaborated cross-functionally with designers and backend leads to deliver production-ready client applications on tight schedules.",
    ],
    technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Redux", "Tailwind CSS", "REST APIs"],
  },
  {
    id: "keydevs-technologies",
    role: "React Developer",
    company: "Keydevs Technologies Pvt. Ltd",
    location: "B Block Johar Town, Lahore, Pakistan",
    period: "Aug 2024 - Aug 2025",
    isCurrent: false,
    type: "Full-Time",
    achievements: [
      "Built responsive, high-performance user interfaces from scratch using modern React.js and styling frameworks.",
      "Optimized front-end codebase performance through deep component refactoring, lazy loading, and memoization tuning.",
      "Collaborated closely with UI/UX designers and backend teams to deliver polished, cross-browser compatible web products.",
      "Ensured strict code quality through thorough peer reviews and robust state management implementations.",
    ],
    technologies: ["React.js", "JavaScript (ES6+)", "Redux Toolkit", "Tailwind CSS", "RESTful APIs", "Git"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "pos-system-ui",
    title: "POS System UI",
    description: "A fast, intuitive Point of Sale interface designed for modern retail and checkout workflows.",
    longDescription:
      "A comprehensive, enterprise-grade Point of Sale (POS) frontend architecture designed with Next.js and Tailwind CSS. Features real-time cart calculations, lightning-fast product search & filtering, keyboard shortcuts for cashier speed, transaction receipt preview, and fluid animations for order management.",
    category: "Next.js",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    highlights: ["Sub-second product lookup", "Keyboard-accessible cashier controls", "Dynamic invoice generator"],
    features: [
      "Real-time cart and tax computations with item discounts",
      "Categorized inventory grid with live stock status indicators",
      "Instant printable receipt & invoice preview modals",
      "Adaptive touch & desktop layout optimized for high transaction velocity",
    ],
    githubUrl: "https://github.com/ch-zeeshan-akram",
    liveUrl: "https://pos-system-demo.vercel.app",
    featured: true,
    gradient: "from-blue-600/30 via-indigo-600/20 to-cyan-500/30",
  },
  {
    id: "influencer-hub",
    title: "Influencer Hub Admin Panel",
    description: "Data-dense management dashboard for tracking creator campaigns, analytics, and payouts.",
    longDescription:
      "A sophisticated analytics and operations dashboard built for influencer marketing agencies. Provides real-time metric visualization, influencer discovery tables, campaign tracking workflows, multi-tier permission controls, and automated reporting.",
    category: "UI & Admin",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "RESTful APIs", "Recharts", "Redux"],
    highlights: ["Interactive metric analytics", "Creator directory with filters", "Campaign progress trackers"],
    features: [
      "Dynamic data tables with column sorting, pagination, and multi-filter queries",
      "Visual performance charts tracking engagement rates and ROI",
      "Contract status and payout milestone management",
      "Sleek dark mode interface tailored for power users",
    ],
    githubUrl: "https://github.com/ch-zeeshan-akram",
    liveUrl: "https://influencer-hub-admin.vercel.app",
    featured: true,
    gradient: "from-purple-600/30 via-fuchsia-600/20 to-pink-500/30",
  },
  {
    id: "pak-booking-landing",
    title: "Pak Booking Landing Page",
    description: "High-converting tourism & booking landing page with fluid transitions and search UX.",
    longDescription:
      "A visually captivating, conversion-optimized landing page for Pakistan's premier travel and hotel booking ecosystem. Engineered using Next.js SSR for maximum SEO performance and Framer Motion for immersive hero reveals, destination carousels, and interactive booking widgets.",
    category: "Next.js",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "SSR", "SEO Optimization"],
    highlights: ["100/100 Lighthouse SEO Score", "Smooth Framer Motion hero transitions", "Interactive date & location picker"],
    features: [
      "Server-Side Rendered (SSR) destination pages for optimal search ranking",
      "Interactive multi-city stay and tour package discovery search bar",
      "Customer testimonials slider and verified partner trust badges",
      "Fully responsive mobile experience with gesture navigation",
    ],
    githubUrl: "https://github.com/ch-zeeshan-akram",
    liveUrl: "https://pak-booking.vercel.app",
    featured: true,
    gradient: "from-emerald-600/30 via-teal-600/20 to-cyan-500/30",
  },
  {
    id: "ecommerce-platform",
    title: "Full-Featured E-Commerce Platform",
    description: "Complete shopping experience with global state, cart drawer, and backend API integration.",
    longDescription:
      "An end-to-end e-commerce solution featuring product catalogs, multi-variant selections, Redux-powered persistent cart, secure checkout flows, product review submission, and order history tracking.",
    category: "Full Stack",
    technologies: ["React.js", "Next.js", "Redux Toolkit", "Node.js", "MongoDB", "Tailwind CSS"],
    highlights: ["Redux persistent shopping cart", "Full MERN stack backend integration", "Instant checkout flow"],
    features: [
      "Centralized Redux state management for seamless cart & wishlist persistence",
      "Product filtering by category, price ranges, brand, and customer ratings",
      "RESTful API integration for user auth, orders, and payment verification",
      "Optimistic UI updates for snappy user interactions",
    ],
    githubUrl: "https://github.com/ch-zeeshan-akram",
    liveUrl: "https://ecommerce-store-mern.vercel.app",
    featured: true,
    gradient: "from-amber-600/30 via-orange-600/20 to-rose-500/30",
  },
  {
    id: "pak-booking-admin",
    title: "Pak Booking Admin Panel",
    description: "Control center for managing hotel listings, reservations, guest bookings, and payouts.",
    longDescription:
      "The administrative backbone for the Pak Booking network. Enables staff to verify host properties, manage incoming reservations in real time, generate revenue reports, and resolve guest support tickets.",
    category: "Full Stack",
    technologies: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    highlights: ["Live reservation calendar", "Role-based authorization", "MongoDB data pipeline"],
    features: [
      "Full CRUD interface for managing hotel properties, rooms, and seasonal pricing",
      "Live calendar timeline for room availability and reservation scheduling",
      "Role-based access control for administrative staff and hotel managers",
      "Exportable financial summaries and booking audits",
    ],
    githubUrl: "https://github.com/ch-zeeshan-akram",
    liveUrl: "https://pak-booking-admin.vercel.app",
    featured: false,
    gradient: "from-cyan-600/30 via-blue-600/20 to-indigo-500/30",
  },
  {
    id: "react-invoice-generator",
    title: "React Invoice Generator",
    description: "Browser-based client billing tool with instant calculation, customized templates, and PDF export.",
    longDescription:
      "A streamlined, client-side invoice and receipt generator for freelancers and small businesses. Allows rapid creation of line items, dynamic tax/discount calculations, brand logo customization, currency selection, and one-click PDF downloading.",
    category: "React.js",
    technologies: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "PDF Generation", "LocalStorage"],
    highlights: ["Zero server latency", "Instant PDF export", "Custom branding support"],
    features: [
      "Dynamic row addition/removal with automatic subtotal and tax computations",
      "Client profile and company information persistence via LocalStorage",
      "Live invoice preview with selectable color palettes and layout templates",
      "Clean, printer-friendly PDF export ready for client delivery",
    ],
    githubUrl: "https://github.com/ch-zeeshan-akram",
    liveUrl: "https://react-invoice-generator.vercel.app",
    featured: false,
    gradient: "from-violet-600/30 via-indigo-600/20 to-sky-500/30",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "linkedin-react-components",
    title: "React: Components, Context, and Accessibility",
    issuer: "LinkedIn Learning",
    date: "Sep 2025",
    image: "/linkedin.png",
    skills: ["React.js", "Context API", "Digital Accessibility", "Component Design"],
    badgeColor: "border-blue-500/30 text-blue-700 bg-blue-50",
  },
  {
    id: "freecodecamp-rwd",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Sep 2025",
    link: "https://freecodecamp.org/certification/fcc52a6b817-f967-43f8-985e-6f0aeb759ac3/responsive-web-design",
    image: "/freecodecamp.png",
    skills: ["Responsive Web Design", "HTML5 & CSS3", "Flexbox & Grid", "Accessibility"],
    badgeColor: "border-emerald-500/30 text-emerald-800 bg-emerald-50",
  },
  {
    id: "mindluster-web-design",
    title: "Web Design Using HTML & CSS",
    issuer: "MindLuster",
    date: "Sep 2023",
    credentialId: "9006401046",
    image: "/mindluster.png",
    skills: ["Semantic HTML5", "Modern CSS", "UI Foundations", "Responsive Design"],
    badgeColor: "border-purple-500/30 text-purple-800 bg-purple-50",
  },
  {
    id: "sololearn-css",
    title: "Introduction to CSS",
    issuer: "Sololearn",
    date: "Oct 2023",
    credentialId: "CC-MHUYG4QN",
    image: "/sololearn.png",
    skills: ["CSS Selectors", "Box Model", "Transitions", "Keyframe Animations"],
    badgeColor: "border-amber-500/30 text-amber-800 bg-amber-50",
  },
];
