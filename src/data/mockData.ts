export interface Entrepreneur {
  id: string;
  name: string;
  role: string;
  avatar: string;
  location: string;
  country: string;
  isVerified: boolean;
  etrStatus: "Certified" | "Candidate" | "Verified Level 3";
  bio: string;
  startup: string;
  stage: string;
  stats: {
    builds: number;
    projects: number;
    achievements: number;
    mentorshipHours: number;
    connections: number;
  };
  skills: string[];
}

export interface BuildEntry {
  id: string;
  date: string;
  title: string;
  category: "MVP" | "Customer Research" | "Prototype" | "Validation" | "Financials" | "Legal";
  description: string;
  evidence: string;
  mentorReviewStatus: "Verified by Mentor" | "Pending Review" | "Self-Reported";
  mentorName?: string;
  verificationBadge: string;
}

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  logo: string;
  type: "Funding" | "Government Scheme" | "Grant" | "Corporate Challenge" | "Competition" | "Mentorship" | "Student Gig" | "Partnership";
  deadline: string;
  eligibility: string;
  matchScore: number;
  isVerified: boolean;
  fundingAmount?: string;
  location: string;
  description: string;
  requirements: string[];
}

export interface MatchPair {
  id: string;
  type: "Founder ↔ Mentor" | "Founder ↔ Expert" | "Startup ↔ Corporate" | "Startup ↔ Investor" | "Student ↔ Client" | "Founder ↔ Co-founder";
  matchPercentage: number;
  name: string;
  role: string;
  company: string;
  expertise: string;
  industry: string;
  stage: string;
  location: string;
  availability: string;
  reason: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  instructor: string;
  duration: string;
  lessonsCount: number;
  practicalProjects: number;
  enrolledStudents: number;
  progress: number;
  etrCredits: number;
}

export interface Chapter {
  id: string;
  name: string;
  region: string;
  country: string;
  city: string;
  membersCount: number;
  mentorsCount: number;
  activeStartups: number;
  leadName: string;
}

export interface StartupDeal {
  id: string;
  companyName: string;
  tagline: string;
  industry: string;
  stage: "Pre-Seed" | "Seed" | "Series A" | "Bootstrapped";
  location: string;
  teamSize: number;
  revenueMRR: string;
  growthMoM: string;
  verifiedDataScore: number;
  pitchDeckAvailable: boolean;
  matchedInvestorsCount: number;
}

export const SAMPLE_ENTREPRENEURS: Entrepreneur[] = [
  {
    id: "etr-1",
    name: "Aarav Sharma",
    role: "Founder & CEO, AgriSense AI",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    location: "Bengaluru, India",
    country: "India",
    isVerified: true,
    etrStatus: "Certified",
    bio: "Building precision IoT sensor nodes and machine learning models for smallholder farmers across South Asia.",
    startup: "AgriSense AI",
    stage: "Early Traction (Revenue \$18k MRR)",
    stats: { builds: 142, projects: 4, achievements: 9, mentorshipHours: 36, connections: 480 },
    skills: ["Precision AgTech", "Hardware IoT", "Deep Learning", "Financial Planning"]
  },
  {
    id: "etr-2",
    name: "Elena Rostova",
    role: "Co-Founder, ClimateScale",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    location: "Singapore",
    country: "Singapore",
    isVerified: true,
    etrStatus: "Verified Level 3",
    bio: "Carbon credit accounting platform for supply chains across SEA & East Asia.",
    startup: "ClimateScale",
    stage: "Seed Stage (\$1.2M Raised)",
    stats: { builds: 98, projects: 3, achievements: 12, mentorshipHours: 50, connections: 620 },
    skills: ["Carbon Accounting", "ESG Compliance", "Enterprise SaaS", "Regulatory Strategy"]
  },
  {
    id: "etr-3",
    name: "Dr. Marcus Vance",
    role: "Founder, BioMed Analytics",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    location: "Cambridge, UK",
    country: "UK",
    isVerified: true,
    etrStatus: "Certified",
    bio: "Translating computational genomics into rapid diagnostic assays for remote clinic deployment.",
    startup: "BioMed Analytics",
    stage: "Clinical Validation",
    stats: { builds: 210, projects: 6, achievements: 15, mentorshipHours: 85, connections: 890 },
    skills: ["Genomics", "FDA Regulations", "IP Licensing", "Clinical Trials"]
  }
];

export const SAMPLE_BUILDS: BuildEntry[] = [
  {
    id: "b-1",
    date: "September 30, 2026",
    title: "Shipped v1.2 onboarding flow & integrated Stripe checkout",
    category: "MVP",
    description: "Deployed updated user onboarding flow with automated account provisioning and integrated Stripe subscription payments.",
    evidence: "GitHub commit #8f92a1 & live production deployment verified.",
    mentorReviewStatus: "Verified by Mentor",
    mentorName: "Dr. K. V. Sundaram (AgriTech Lead, IIT Madras)",
    verificationBadge: "Verified Build #9821"
  },
  {
    id: "b-2",
    date: "September 28, 2026",
    title: "Interviewed 12 customer farm managers & logged key insights",
    category: "Customer Research",
    description: "Conducted structured 45-min qualitative interviews across regional farms. Documented 3 key operational bottlenecks in irrigation planning.",
    evidence: "Interview transcripts & feedback log uploaded to vault.",
    mentorReviewStatus: "Verified by Mentor",
    mentorName: "Sarah Jenkins (Program Director, Agritech Accelerator)",
    verificationBadge: "Verified Evidence #9744"
  },
  {
    id: "b-3",
    date: "September 25, 2026",
    title: "Designed and fabricated V2 hardware enclosures",
    category: "Prototype",
    description: "3D printed weather-proof casing with integrated solar harvesting circuit board for zero-grid field deployment.",
    evidence: "CAD schematics & bench test results verified.",
    mentorReviewStatus: "Verified by Mentor",
    mentorName: "Michael Zhang (Senior Hardware Lead)",
    verificationBadge: "Verified Prototype #9601"
  },
  {
    id: "b-4",
    date: "September 21, 2026",
    title: "Validated problem statement with regional cooperative",
    category: "Validation",
    description: "Secured signed Letter of Intent (LOI) from 2 agricultural cooperatives representing 450 farm holdings.",
    evidence: "Executed LOI document uploaded & verified via KYB legal check.",
    mentorReviewStatus: "Verified by Mentor",
    mentorName: "Sarah Jenkins (Program Director)",
    verificationBadge: "Verified LOI #9420"
  }
];

export const SAMPLE_OPPORTUNITIES: Opportunity[] = [
  {
    id: "opp-1",
    title: "Global CleanTech Scale Up Grant 2026",
    organization: "Singapore Enterprise Board & Temasek Foundation",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&auto=format&fit=crop&q=80",
    type: "Grant",
    deadline: "October 30, 2026",
    eligibility: "Early-stage CleanTech startups with prototype verified on AISEA",
    matchScore: 96,
    isVerified: true,
    fundingAmount: "\$150,000 Equity-free",
    location: "Singapore / Remote SEA",
    description: "Non-dilutive grant funding for sustainable energy, carbon capture, and agricultural resource optimization startups.",
    requirements: ["Verified Etr. Profile", "Proof-of-Building V2 Logged", "Minimum 2 Mentor Endorsements"]
  },
  {
    id: "opp-2",
    title: "Smart Logistics Innovation Challenge",
    organization: "DP World & Dubai Future Foundation",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&auto=format&fit=crop&q=80",
    type: "Corporate Challenge",
    deadline: "November 15, 2026",
    eligibility: "AI & IoT startups operating in supply chain tracking",
    matchScore: 92,
    isVerified: true,
    fundingAmount: "\$50,000 Commercial Pilot",
    location: "Dubai, UAE",
    description: "Direct pilot program with DP World ports to test autonomous tracking sensors across container terminals.",
    requirements: ["Verified KYB Business", "Functional Prototype Evidence"]
  },
  {
    id: "opp-3",
    title: "AISEA NextGen Student Venture Fellowship",
    organization: "AISEA Global Foundation",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&auto=format&fit=crop&q=80",
    type: "Student Gig",
    deadline: "Open Rolling",
    eligibility: "Enrolled university students with active project builds",
    matchScore: 89,
    isVerified: true,
    fundingAmount: "\$5,000 Micro-Grant + Stipend",
    location: "Global Remote",
    description: "Work on real corporate innovation challenges, earn verified practical project credits and launch your campus startup.",
    requirements: ["Student Identity Verification", "Completion of AISEA Academy Module 1"]
  },
  {
    id: "opp-4",
    title: "DeepTech Seed Horizon Fund",
    organization: "Apex Global Capital",
    logo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&auto=format&fit=crop&q=80",
    type: "Funding",
    deadline: "December 01, 2026",
    eligibility: "Post-revenue startups with Etr Level 3 Verification",
    matchScore: 94,
    isVerified: true,
    fundingAmount: "\$500,000 Seed Round",
    location: "USA / Europe / Asia",
    description: "Targeted co-investment alongside top institutional syndicate leaders for verified high-growth deeptech startups.",
    requirements: ["Complete Deal Flow Vault", "Audited Financial Logs", "Etr. Certification"]
  }
];

export const SAMPLE_MATCHES: MatchPair[] = [
  {
    id: "m-1",
    type: "Founder ↔ Mentor",
    matchPercentage: 97,
    name: "Dr. Vikram Sethi",
    role: "Former VP of Hardware, Schneider Electric",
    company: "Global Tech Advisors",
    expertise: "Industrial IoT & Hardware Scaling",
    industry: "Agritech / Cleantech",
    stage: "Early Traction",
    location: "Bengaluru, India",
    availability: "4 hrs / month",
    reason: "Matched based on background in IoT hardware scaling and B2B channel distribution."
  },
  {
    id: "m-2",
    type: "Startup ↔ Corporate",
    matchPercentage: 94,
    name: "Bosch Smart Farming Hub",
    role: "Head of Open Innovation",
    company: "Bosch Global",
    expertise: "Precision Ag Sensors & OEM Integration",
    industry: "AgTech & Robotics",
    stage: "Pilot Ready",
    location: "Stuttgart, Germany / India",
    availability: "Pilot Program Q4",
    reason: "Your sensor payload schema aligns with Bosch open API standards for joint pilot testing."
  },
  {
    id: "m-3",
    type: "Founder ↔ Expert",
    matchPercentage: 91,
    name: "Ananya Deshmukh, Esq.",
    role: "Partner, Tech IP Practice",
    company: "CrossBorder Legal LLP",
    expertise: "International Patent Filings & Hardware Licensing",
    industry: "DeepTech & IP",
    stage: "Pre-Patent",
    location: "Singapore",
    availability: "Advisory sessions available",
    reason: "Direct match for hardware patent filing and international IP protection strategy."
  }
];

export const SAMPLE_COURSES: Course[] = [
  {
    id: "c-1",
    title: "Etr. Foundation: Proof-of-Building Methodology",
    category: "Entrepreneur Operating System",
    instructor: "Prof. Elena Vance & AISEA Master Practitioners",
    duration: "4 Weeks",
    lessonsCount: 16,
    practicalProjects: 4,
    enrolledStudents: 3420,
    progress: 75,
    etrCredits: 20
  },
  {
    id: "c-2",
    title: "Customer Discovery & Problem Validation Architecture",
    category: "Market Research",
    instructor: "David Miller, Startup Accelerator Lead",
    duration: "3 Weeks",
    lessonsCount: 12,
    practicalProjects: 3,
    enrolledStudents: 2150,
    progress: 40,
    etrCredits: 15
  },
  {
    id: "c-3",
    title: "Financial Modeling & KYB Audit Preparedness",
    category: "Corporate Governance",
    instructor: "Siddharth Nambiar, Venture CFO",
    duration: "5 Weeks",
    lessonsCount: 20,
    practicalProjects: 5,
    enrolledStudents: 1890,
    progress: 10,
    etrCredits: 25
  }
];

export const SAMPLE_CHAPTERS: Chapter[] = [
  { id: "ch-1", name: "Bengaluru Innovation Chapter", region: "South Asia", country: "India", city: "Bengaluru", membersCount: 1420, mentorsCount: 85, activeStartups: 140, leadName: "Rahul Hegde" },
  { id: "ch-2", name: "Singapore ASEAN Hub", region: "Southeast Asia", country: "Singapore", city: "Singapore", membersCount: 980, mentorsCount: 62, activeStartups: 95, leadName: "Tan Wei Ling" },
  { id: "ch-3", name: "Dubai Future Chapter", region: "Middle East", country: "UAE", city: "Dubai", membersCount: 750, mentorsCount: 45, activeStartups: 70, leadName: "Tariq Al-Mansoori" },
  { id: "ch-4", name: "London DeepTech Chapter", region: "Europe", country: "UK", city: "London", membersCount: 1100, mentorsCount: 78, activeStartups: 115, leadName: "Claire Pembroke" },
  { id: "ch-5", name: "Silicon Valley Gateway", region: "North America", country: "USA", city: "Palo Alto", membersCount: 2100, mentorsCount: 140, activeStartups: 260, leadName: "Jason Vance" }
];

export const SAMPLE_DEALS: StartupDeal[] = [
  {
    id: "d-1",
    companyName: "AgriSense AI",
    tagline: "AI & IoT precision soil monitoring for smallholder farming clusters.",
    industry: "Agritech & AI",
    stage: "Seed",
    location: "Bengaluru, India",
    teamSize: 8,
    revenueMRR: "\$18,500 MRR",
    growthMoM: "+24% MoM",
    verifiedDataScore: 98,
    pitchDeckAvailable: true,
    matchedInvestorsCount: 14
  },
  {
    id: "d-2",
    companyName: "ClimateScale",
    tagline: "Automated carbon accounting telemetry for SEA manufacturing supply chains.",
    industry: "CleanTech & ESG",
    stage: "Seed",
    location: "Singapore",
    teamSize: 12,
    revenueMRR: "\$42,000 MRR",
    growthMoM: "+31% MoM",
    verifiedDataScore: 96,
    pitchDeckAvailable: true,
    matchedInvestorsCount: 22
  },
  {
    id: "d-3",
    companyName: "MedFlow Systems",
    tagline: "Decentralized cold-chain sensor tracking for vaccine distribution.",
    industry: "HealthTech & Logistics",
    stage: "Pre-Seed",
    location: "Dubai, UAE",
    teamSize: 5,
    revenueMRR: "\$6,000 MRR",
    growthMoM: "+18% MoM",
    verifiedDataScore: 94,
    pitchDeckAvailable: true,
    matchedInvestorsCount: 9
  }
];
