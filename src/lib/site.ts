/**
 * Single source of truth for every piece of copy, link and data on the site.
 * Change the brand, services, work or academy tracks here — the page follows.
 */

export const site = {
  name: "Quadilateral IT",
  shortName: "Quadilateral",
  legalName: "Quadilateral IT Solutions",
  tagline: "We turn ambitious ideas into software that ships.",
  description:
    "Quadilateral IT is a product-led consultancy building software, AI automation and data platforms for founders, startups and enterprises — plus an academy training the next generation of engineers.",
  url: "https://quadilateral.org",
  email: "hello@quadilateral.org",
  phone: "+234 000 000 0000",
  location: "Lagos, Nigeria — working with teams worldwide",
  timezone: "WAT (GMT+1) · overlapping hours with EU & US East",
  founded: "2021",
  socials: {
    linkedin: "https://linkedin.com/company/quadilateral-it",
    x: "https://x.com/quadilateralit",
    github: "https://github.com/quadilateral-it",
    instagram: "https://instagram.com/quadilateralit",
  },
  booking: "https://cal.com/quadilateral/intro",
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Founders", href: "#founders" },
  { label: "Academy", href: "#academy" },
  { label: "FAQ", href: "#faq" },
] as const;

export type Stat = {
  value: number;
  suffix: string;
  label: string;
  hint: string;
  decimals?: number;
};

export const stats: Stat[] = [
  { value: 120, suffix: "+", label: "Products shipped", hint: "Web, mobile, data & AI" },
  { value: 40, suffix: "+", label: "Clients served", hint: "Startups to enterprise" },
  { value: 300, suffix: "+", label: "Engineers trained", hint: "Through the Academy" },
  { value: 99.9, suffix: "%", label: "Uptime maintained", hint: "On managed products", decimals: 1 },
];

export type Service = {
  slug: string;
  icon: string;
  title: string;
  blurb: string;
  bullets: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "software-engineering",
    icon: "Code2",
    title: "Software Engineering",
    blurb:
      "Web, mobile and platform engineering from first commit to production scale — built to be handed over, not held hostage.",
    bullets: [
      "Web apps in Next.js, React & TypeScript",
      "Mobile apps in React Native & Flutter",
      "APIs, microservices and integrations",
      "Cloud architecture on AWS, GCP & Azure",
    ],
    featured: true,
  },
  {
    slug: "ai-engineering",
    icon: "BrainCircuit",
    title: "AI Engineering",
    blurb:
      "Production-grade AI: retrieval systems, agents and copilots wired into your real data, with evaluation and guardrails.",
    bullets: [
      "RAG and knowledge assistants",
      "Custom agents and copilots",
      "Model selection, evals and fine-tuning",
      "Vector search and LLM observability",
    ],
    featured: true,
  },
  {
    slug: "ai-automation",
    icon: "Workflow",
    title: "AI Automation",
    blurb:
      "We find the manual work eating your week and automate it — quotes, onboarding, reporting, support triage, back office.",
    bullets: [
      "Workflow audits and automation roadmaps",
      "Document, invoice and KYC processing",
      "CRM, ERP and helpdesk automations",
      "Human-in-the-loop approval flows",
    ],
    featured: true,
  },
  {
    slug: "data-analytics",
    icon: "BarChart3",
    title: "Data & Analytics",
    blurb:
      "Turn scattered spreadsheets and app logs into one trusted number your whole team acts on.",
    bullets: [
      "Data warehousing and ELT pipelines",
      "Executive dashboards and KPI design",
      "Product and growth analytics",
      "Forecasting and predictive models",
    ],
  },
  {
    slug: "email-marketing",
    icon: "MailCheck",
    title: "Email Marketing",
    blurb:
      "Lifecycle email that earns the inbox: deliverability, segmentation, automation and copy that converts.",
    bullets: [
      "Domain warm-up and deliverability fixes",
      "Lifecycle and drip automations",
      "Newsletter design and build",
      "A/B testing and revenue reporting",
    ],
  },
  {
    slug: "maintenance",
    icon: "ShieldCheck",
    title: "Maintenance & Support",
    blurb:
      "Inherit, stabilise and care for the software you already own — including code somebody else wrote.",
    bullets: [
      "Legacy rescue and code audits",
      "24/7 monitoring and on-call",
      "Security patching and dependency hygiene",
      "Performance and cloud cost optimisation",
    ],
  },
  {
    slug: "product-management",
    icon: "Compass",
    title: "Product & Project Management",
    blurb:
      "Senior delivery leadership so scope, budget and timeline stay honest — and your team stays unblocked.",
    bullets: [
      "Discovery, scoping and roadmapping",
      "Agile delivery and sprint management",
      "Vendor and stakeholder coordination",
      "Launch planning and go-to-market",
    ],
  },
  {
    slug: "product-marketing",
    icon: "Megaphone",
    title: "Product Marketing",
    blurb:
      "Positioning, messaging and launches that make the product land — so the thing you built is the thing the market understands.",
    bullets: [
      "Positioning, messaging and pricing narrative",
      "Launch and go-to-market campaigns",
      "Landing pages, demos and sales collateral",
      "Onboarding, activation and retention loops",
    ],
  },
  {
    slug: "design",
    icon: "Palette",
    title: "Product Design",
    blurb:
      "Interfaces people trust on first sight — research, systems and prototypes, not just pretty screens.",
    bullets: [
      "UX research and user flows",
      "UI design and design systems",
      "Brand identity and marketing sites",
      "Interactive prototypes",
    ],
  },
];

export type LeaderCard = {
  title: string;
  subtitle: string;
  detail: string;
};

export type Leader = {
  slug: string;
  name: string;
  credential?: string;
  role: string;
  location: string;
  photo: string;
  photoWidth: number;
  photoHeight: number;
  hats: string[];
  bio: string[];
  focusLabel: string;
  focus: string[];
  cardsLabel: string;
  cards: LeaderCard[];
};

export const founder: Leader = {
  slug: "ayinde-abiodun",
  name: "Dr. Ayinde Abiodun",
  credential: "PhD",
  role: "Founder & Chief Executive Officer",
  location: "United States",
  photo: "/founder-ayinde-abiodun.jpg",
  photoWidth: 2316,
  photoHeight: 3088,
  hats: ["Researcher", "Lecturer", "Entrepreneur"],
  bio: [
    "Dr. Ayinde Abiodun founded Quadilateral IT on a simple conviction: the gap between what enterprises know about their data and what they can actually do with it is an engineering problem, not a reporting one. He holds a PhD and works at the intersection of research, teaching and building — a combination that shapes how every engagement here is scoped.",
    "He works in the United States as a senior secured data specialist, and that is not a side note — it is the standard the consultancy is held to. Enterprise data migration, platform administration, data governance and process automation are his daily work. He has led the move of analytics platforms from desktop to cloud, run server upgrades against strict compliance and uptime requirements, and driven the adoption of analytics tooling across organisations that had never standardised on any.",
    "Alongside the consultancy he founded Kudi9ja Technologies and La Marida Hotels, so he has sat on the client side of a build as often as the delivery side. As a lecturer and community trainer he also leads the Academy's curriculum, which is why the teaching here looks like the work rather than a syllabus.",
  ],
  focusLabel: "Areas of focus",
  focus: [
    "Data governance and compliance",
    "Enterprise data migration",
    "Cloud migration and infrastructure optimisation",
    "Process automation and workflow design",
    "Interactive analytics and dashboard development",
    "Application integration and data quality",
  ],
  cardsLabel: "Ventures he founded",
  cards: [
    {
      title: "Quadilateral IT",
      subtitle: "Founder & CEO",
      detail:
        "The consultancy and academy — software, AI, data and the training pipeline behind them.",
    },
    {
      title: "Kudi9ja Technologies",
      subtitle: "Founder",
      detail:
        "Consumer fintech for the Nigerian market: payments, savings and bill management at scale.",
    },
    {
      title: "La Marida Hotels",
      subtitle: "Founder",
      detail:
        "Hospitality group — the operations side of the business, and a live testbed for what we automate.",
    },
  ],
};

export const coFounder: Leader = {
  slug: "emmanuel-adeyemo",
  name: "Emmanuel Iyanuoluwa Adeyemo",
  role: "Co-Founder & Chief Technology Officer",
  location: "Nigeria",
  photo: "/cofounder-emmanuel-adeyemo.jpg",
  photoWidth: 978,
  photoHeight: 1280,
  hats: ["Senior Software Engineer", "Cybersecurity Analyst", "Mentor"],
  bio: [
    "Emmanuel Iyanuoluwa Adeyemo has spent more than a decade in the tech industry, and it shows in the unglamorous places: how a system fails, how a migration is sequenced, how much of a codebase a new engineer can safely touch in their first week. He is the co-founder who owns how Quadilateral IT actually builds.",
    "He is a senior software engineer with a long shipping record across web, mobile and platform work — products that went to real users and then had to be kept alive. Trained at Curtin University in Australia, he pairs that engineering practice with work as a cybersecurity analyst, so threat modelling, access control and secure defaults are part of the first architecture conversation rather than a pre-launch audit.",
    "Based in Nigeria, he runs delivery on the ground with the engineering team. He has also tutored over fifty women into technology careers — a teaching instinct that runs straight through the Academy and through the way our engineers hand a product over: documented, reviewed and genuinely owned by your team at the end.",
  ],
  focusLabel: "Where he goes deep",
  focus: [
    "Web, mobile and platform engineering",
    "Secure architecture and threat modelling",
    "Application security and access control",
    "Code review and engineering standards",
    "Technical mentoring and team growth",
    "Product delivery from zero to scale",
  ],
  cardsLabel: "The short version",
  cards: [
    {
      title: "10+ years",
      subtitle: "In the tech space",
      detail:
        "A decade of shipping and maintaining production software across startups and enterprise teams.",
    },
    {
      title: "50+ women tutored",
      subtitle: "Into tech careers",
      detail:
        "Mentorship that became a pipeline — and the model the Quadilateral Academy is built on.",
    },
    {
      title: "Curtin University",
      subtitle: "Australia",
      detail:
        "Formal engineering foundations, paired with cybersecurity practice he applies on every build.",
    },
  ],
};

export const leadership: Leader[] = [founder, coFounder];

export type Project = {
  name: string;
  category: string;
  year: string;
  summary: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  accent: string;
};

export const projects: Project[] = [
  {
    name: "Kudi9ja",
    category: "Fintech · Mobile",
    year: "2026",
    summary:
      "A Nigerian consumer finance app for payments, savings and bill management — designed, built and maintained end to end, from onboarding and KYC through to a fraud-aware transaction engine.",
    tags: ["Flutter", "Java", "PostgreSQL", "Neon", "Paystack", "KYC"],
    metrics: [
      { value: "4.7★", label: "Store rating" },
      { value: "<1.2s", label: "Cold start" },
      { value: "99.9%", label: "Uptime" },
    ],
    accent: "from-emerald-400 to-teal-500",
  },
  {
    name: "Estate Atlas",
    category: "Real Estate · Web Platform",
    year: "2025",
    summary:
      "A property sales and management platform with virtual tours, instalment payment plans, agent commissions and an allocation engine that replaced a wall of spreadsheets.",
    tags: ["Next.js", "TypeScript", "Mapbox", "Stripe", "Prisma"],
    metrics: [
      { value: "3.4×", label: "Qualified leads" },
      { value: "−62%", label: "Admin hours" },
      { value: "1.8k", label: "Units managed" },
    ],
    accent: "from-sky-400 to-indigo-500",
  },
  {
    name: "Nimbus Support AI",
    category: "AI Automation",
    year: "2026",
    summary:
      "A retrieval-augmented support agent trained on a help centre and years of ticket history, triaging conversations and drafting replies with a human approval step before anything reaches a customer.",
    tags: ["RAG", "Claude + OpenAI", "pgvector", "Zendesk"],
    metrics: [
      { value: "71%", label: "Auto-resolved" },
      { value: "−48%", label: "First response" },
      { value: "24/7", label: "Coverage" },
    ],
    accent: "from-violet-400 to-fuchsia-500",
  },
  {
    name: "Pulse Analytics",
    category: "Data Platform",
    year: "2025",
    summary:
      "A warehouse and executive dashboard suite unifying eleven data sources into one daily source of truth, with automated anomaly alerts pushed straight to Slack.",
    tags: ["BigQuery", "dbt", "Airflow", "Looker Studio"],
    metrics: [
      { value: "11", label: "Sources unified" },
      { value: "6 min", label: "Daily refresh" },
      { value: "40+", label: "Live KPIs" },
    ],
    accent: "from-amber-400 to-orange-500",
  },
  {
    name: "Ledgerly",
    category: "SaaS · B2B",
    year: "2025",
    summary:
      "Multi-tenant accounting and invoicing SaaS for African SMEs, with offline-first sync, role-based access and an audit trail regulators actually accept.",
    tags: ["Next.js", "NestJS", "Redis", "Stripe Billing"],
    metrics: [
      { value: "5k+", label: "Businesses" },
      { value: "SOC 2", label: "Ready" },
      { value: "−35%", label: "Cloud spend" },
    ],
    accent: "from-rose-400 to-pink-500",
  },
  {
    name: "CampusFlow",
    category: "EdTech",
    year: "2024",
    summary:
      "A student information and learning platform for a private university group — admissions, results, fees and a live class portal serving thousands of concurrent users.",
    tags: ["Laravel", "React", "AWS", "WebRTC"],
    metrics: [
      { value: "12k", label: "Students" },
      { value: "3", label: "Campuses" },
      { value: "0", label: "Exam outages" },
    ],
    accent: "from-cyan-400 to-blue-500",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  duration: string;
  body: string;
  deliverables: string[];
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    duration: "Week 1",
    body: "A paid discovery sprint: we interview stakeholders, audit what already exists, map the real workflow and agree what success looks like before a line of code is written.",
    deliverables: ["Scope and success metrics", "Technical audit", "Fixed-price proposal"],
  },
  {
    step: "02",
    title: "Design",
    duration: "Weeks 2–3",
    body: "Flows, wireframes and a clickable prototype you can put in front of real users. Architecture decisions get written down, with the trade-offs in plain language.",
    deliverables: ["Clickable prototype", "Design system", "Architecture decision record"],
  },
  {
    step: "03",
    title: "Build",
    duration: "Weeks 4+",
    body: "Two-week sprints, a demo every Friday and a staging link that is always live. You see progress continuously — no six-week silences, no surprise invoices.",
    deliverables: ["Weekly demos", "Always-on staging", "Tests and CI coverage"],
  },
  {
    step: "04",
    title: "Launch",
    duration: "Go-live",
    body: "Load testing, security review, monitoring, analytics and a rollback plan. We ship behind feature flags and watch the graphs with you through the first two weeks.",
    deliverables: ["Launch checklist", "Monitoring and alerts", "Operational runbooks"],
  },
  {
    step: "05",
    title: "Scale & Care",
    duration: "Ongoing",
    body: "A retainer for iteration, maintenance and cost control — or a full handover with documentation and training if you are taking it in-house. Your code is always yours.",
    deliverables: ["SLA-backed support", "Roadmap reviews", "Team enablement"],
  },
];

export type Track = {
  title: string;
  icon: string;
  duration: string;
  level: string;
  blurb: string;
  syllabus: string[];
};

export const tracks: Track[] = [
  {
    title: "Frontend Engineering",
    icon: "MonitorSmartphone",
    duration: "12 weeks",
    level: "Beginner → Job-ready",
    blurb: "HTML, CSS and JavaScript foundations through to production React and TypeScript.",
    syllabus: [
      "HTML, CSS and responsive design",
      "JavaScript and TypeScript",
      "React and Next.js",
      "Testing, accessibility, performance",
    ],
  },
  {
    title: "Backend Engineering",
    icon: "Server",
    duration: "14 weeks",
    level: "Beginner → Job-ready",
    blurb: "APIs, databases and the systems thinking that keeps them upright under load.",
    syllabus: [
      "Node.js and Python fundamentals",
      "REST and GraphQL API design",
      "SQL, NoSQL and caching",
      "Auth, queues and system design",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "Container",
    duration: "10 weeks",
    level: "Intermediate",
    blurb: "Ship, observe and recover — containers, pipelines and infrastructure as code.",
    syllabus: [
      "Linux and networking",
      "Docker and Kubernetes",
      "CI/CD pipelines",
      "Terraform, monitoring, on-call",
    ],
  },
  {
    title: "AI & Automation",
    icon: "Sparkles",
    duration: "8 weeks",
    level: "Intermediate",
    blurb: "Build real AI features — retrieval, agents and evaluation — not toy demos.",
    syllabus: [
      "Prompt and context engineering",
      "RAG and vector databases",
      "Agents and tool use",
      "Evals, safety and cost control",
    ],
  },
  {
    title: "Product & Project Management",
    icon: "ClipboardList",
    duration: "8 weeks",
    level: "Beginner → Intermediate",
    blurb: "Discovery, roadmaps, delivery rituals and the metrics that prove impact.",
    syllabus: [
      "Discovery and user research",
      "Roadmapping and prioritisation",
      "Agile and Scrum delivery",
      "Analytics and stakeholder comms",
    ],
  },
  {
    title: "Product Design (UI/UX)",
    icon: "PenTool",
    duration: "10 weeks",
    level: "Beginner → Job-ready",
    blurb: "Research through to high-fidelity systems, with a portfolio that gets replies.",
    syllabus: [
      "Design thinking and research",
      "Figma mastery",
      "Design systems",
      "Portfolio and case studies",
    ],
  },
];

export const academyPerks = [
  "Live cohort classes plus lifetime recordings",
  "1:1 mentorship with working engineers",
  "Real, client-shaped capstone projects",
  "CV, portfolio and interview preparation",
  "Private community and job board",
  "Certificate of completion",
] as const;

export const industries = [
  "Fintech & Payments",
  "Real Estate & PropTech",
  "Healthcare",
  "E-commerce & Retail",
  "Education",
  "Logistics",
  "Media & Entertainment",
  "Energy & Utilities",
  "Non-profit & NGO",
  "Professional Services",
] as const;

export const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "NestJS",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "GraphQL",
  "AWS",
  "Google Cloud",
  "Azure",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Supabase",
  "Prisma",
  "dbt",
  "BigQuery",
  "Anthropic",
  "OpenAI",
  "LangChain",
  "pgvector",
  "Stripe",
  "Paystack",
  "Figma",
  "Tailwind CSS",
] as const;

export type Testimonial = { quote: string; name: string; role: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "They took a half-finished app we had already paid for twice, rebuilt the core in six weeks and got us into the store. The difference was how much they pushed back before building anything.",
    name: "Adaeze O.",
    role: "Founder, consumer fintech",
  },
  {
    quote:
      "Our reporting used to take three people two days a month. It now runs itself before we get to the office, and the numbers finally agree with each other.",
    name: "Michael T.",
    role: "COO, logistics group",
  },
  {
    quote:
      "The AI support agent handles the boring 70% and escalates the rest with context attached. Our team stopped dreading Monday mornings.",
    name: "Sarah L.",
    role: "Head of Customer Success",
  },
  {
    quote:
      "I came in from a non-technical background. Nine months later I am a frontend engineer on a remote contract. The mentorship is what made it stick.",
    name: "Ibrahim K.",
    role: "Academy graduate, Frontend track",
  },
  {
    quote:
      "They inherited a codebase three agencies had touched, documented it, cut our cloud bill by a third and have kept it running ever since. No drama.",
    name: "Chinedu A.",
    role: "CTO, real estate group",
  },
];

export const faqs = [
  {
    q: "How quickly can you start?",
    a: "Discovery sprints usually start within a week. Full build squads typically kick off in two to three weeks depending on current capacity — tell us your deadline and we will be straight with you about whether we can hit it.",
  },
  {
    q: "Do you work with non-technical founders?",
    a: "Constantly. A large part of our work is translating a business idea into scope, budget and a shipped product. You will never be handed a document you cannot read, and you will always know what the next two weeks cost.",
  },
  {
    q: "Who owns the code and the IP?",
    a: "You do, completely, from day one. Everything lives in your repositories and your cloud accounts. If you ever want to take it in-house or move to another partner, we hand over the documentation and run the training session ourselves.",
  },
  {
    q: "Can you take over a project someone else started?",
    a: "Yes. Legacy rescue is one of our most requested services. We start with a code and infrastructure audit, give you an honest fix-or-rebuild recommendation, then stabilise the product before adding anything new.",
  },
  {
    q: "How do you price work?",
    a: "Fixed price for defined scope, a monthly retainer for ongoing squads, and a flat fee for discovery. No hourly billing surprises — any change in scope is quoted and approved before we build it.",
  },
  {
    q: "Is the Academy for complete beginners?",
    a: "Most tracks start from zero and take you to job-ready; DevOps and AI assume some programming experience. Every cohort is live, capped in size, and built around a real project you can show an employer.",
  },
  {
    q: "Do you offer corporate training?",
    a: "Yes — private cohorts for your team, tailored to your stack and delivered on your schedule. We also run one-week intensives on AI adoption, cloud cost control and modern frontend practice.",
  },
  {
    q: "What if we already have an in-house team?",
    a: "Then we augment rather than replace. Our engineers join your stand-ups, follow your conventions and review code alongside your team. Many clients start this way and keep a squad for years.",
  },
];
