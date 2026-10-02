"use client";

import React, { useState } from "react";
import { 
  SAMPLE_ENTREPRENEURS, 
  SAMPLE_BUILDS, 
  SAMPLE_OPPORTUNITIES, 
  SAMPLE_MATCHES, 
  SAMPLE_CHAPTERS, 
  SAMPLE_DEALS,
  BuildEntry,
  Opportunity
} from "@/data/mockData";
import { EtrCertification } from "./EtrCertification";

import { 
  LayoutDashboard, 
  UserCheck, 
  Briefcase, 
  Layers, 
  Sparkles, 
  Users, 
  MessageSquare, 
  Search, 
  Award, 
  BookOpen, 
  Building2, 
  Building, 
  ShieldCheck, 
  Sliders, 
  Plus, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Mic, 
  Upload, 
  Calendar, 
  MapPin, 
  Globe, 
  ArrowUpRight, 
  ChevronRight,
  Filter,
  BarChart3,
  QrCode,
  AlertTriangle,
  GraduationCap,
  ShieldAlert,
  FileCheck,
  CheckSquare
} from "lucide-react";

interface RoleDashboardProps {
  userRole: string;
  setUserRole: (role: string) => void;
  activeModule: string;
  setActiveModule: (mod: string) => void;
  onReturnPublic?: () => void;
}

export const RoleDashboard: React.FC<RoleDashboardProps> = ({
  userRole,
  setUserRole,
  activeModule,
  setActiveModule,
  onReturnPublic
}) => {
  const [buildLogs, setBuildLogs] = useState<BuildEntry[]>(SAMPLE_BUILDS);
  const [newBuildText, setNewBuildText] = useState("");
  const [newBuildCategory, setNewBuildCategory] = useState<BuildEntry["category"]>("MVP");
  const [newBuildEvidence, setNewBuildEvidence] = useState("");
  const [buildAddedToast, setBuildAddedToast] = useState(false);

  // Modals state
  const [selectedOpp, setSelectedOpp] = useState<Opportunity | null>(null);
  const [profileTab, setProfileTab] = useState<"Overview" | "Journey" | "Projects" | "Proof" | "Skills" | "Verification">("Overview");
  const [showQrModal, setShowQrModal] = useState(false);

  // Handle adding new build
  const handleAddBuild = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBuildText.trim()) return;

    const newEntry: BuildEntry = {
      id: `b-${Date.now()}`,
      date: "October 02, 2026",
      title: newBuildText,
      category: newBuildCategory,
      description: newBuildText,
      evidence: newBuildEvidence || "Uploaded via Today's Build console.",
      mentorReviewStatus: "Pending Review",
      verificationBadge: `Pending Verification #${Math.floor(1000 + Math.random() * 9000)}`
    };

    setBuildLogs([newEntry, ...buildLogs]);
    setNewBuildText("");
    setNewBuildEvidence("");
    setBuildAddedToast(true);
    setTimeout(() => setBuildAddedToast(false), 4000);
  };

  const currentEtr = SAMPLE_ENTREPRENEURS[0];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      <div className="flex-1 flex overflow-hidden">
        
        {/* Module Content */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto max-w-7xl mx-auto w-full space-y-6">
          
          {/* 1. STARTUP WORKSPACE & OVERVIEW */}
          {(activeModule === "overview" || activeModule === "workspace") && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-extrabold text-slate-900">
                      Startup Workspace — {currentEtr.startup}
                    </h1>
                    <span className="verified-pill">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified Level 3
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Founder: <span className="font-semibold text-slate-800">{currentEtr.name}</span> • {currentEtr.stage}
                  </p>
                </div>

                <button 
                  onClick={() => setActiveModule("todays-build")}
                  className="btn-primary text-xs"
                >
                  <Plus className="w-4 h-4" /> Log Today's Build
                </button>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Total Builds</div>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1">{currentEtr.stats.builds}</div>
                  <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">+4 this week</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Verified Projects</div>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1">{currentEtr.stats.projects}</div>
                  <div className="text-[10px] text-slate-500 font-medium mt-0.5">Audited</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Achievements</div>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1">{currentEtr.stats.achievements}</div>
                  <div className="text-[10px] text-amber-600 font-semibold mt-0.5">Verified Badges</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Mentor Hours</div>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1">{currentEtr.stats.mentorshipHours}h</div>
                  <div className="text-[10px] text-blue-900 font-semibold mt-0.5">Dr. Sundaram</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center col-span-2 sm:col-span-1">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Audit Score</div>
                  <div className="text-2xl font-extrabold text-emerald-600 mt-1">98/100</div>
                  <div className="text-[10px] text-emerald-700 font-bold mt-0.5">High Trust</div>
                </div>
              </div>

            </div>
          )}

          {/* 2. ENTREPRENEUR IDENTITY PROFILE */}
          {activeModule === "identity" && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="h-32 bg-slate-900 p-6 flex items-end justify-between">
                  <span className="text-white text-xs font-semibold bg-slate-800 px-3 py-1 rounded border border-slate-700">
                    Entrepreneur Identity Standard
                  </span>
                  <button 
                    onClick={() => setShowQrModal(true)}
                    className="btn-primary text-xs bg-emerald-700 hover:bg-emerald-600"
                  >
                    <QrCode className="w-3.5 h-3.5" /> Show Etr. QR Code
                  </button>
                </div>

                <div className="p-6 relative pt-0 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-slate-100">
                  <div className="flex items-end gap-4 -mt-10">
                    <img src={currentEtr.avatar} alt={currentEtr.name} className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-sm" />
                    <div className="space-y-1 pb-1">
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl font-bold text-slate-900">{currentEtr.name}</h2>
                        <span className="verified-pill"><CheckCircle2 className="w-3.5 h-3.5" /> Verified</span>
                      </div>
                      <p className="text-xs text-slate-600 font-semibold">{currentEtr.role}</p>
                      <p className="text-[11px] text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {currentEtr.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. TODAY'S BUILD LOGGER */}
          {activeModule === "todays-build" && (
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <h1 className="text-2xl font-extrabold text-slate-900">What did you build today?</h1>
                <p className="text-xs text-slate-500">Document your daily progress to build an immutable, verified Proof-of-Building activity record.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <form onSubmit={handleAddBuild} className="space-y-4 text-xs">
                  <div>
                    <label className="font-bold text-slate-900 block mb-1">Today's Build Entry:</label>
                    <textarea 
                      rows={4}
                      placeholder="Write what you worked on today..."
                      value={newBuildText}
                      onChange={(e) => setNewBuildText(e.target.value)}
                      className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-slate-900 block mb-1">Category Tag:</label>
                      <select 
                        value={newBuildCategory}
                        onChange={(e) => setNewBuildCategory(e.target.value as BuildEntry["category"])}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs font-semibold text-slate-800"
                      >
                        <option value="MVP">MVP Release</option>
                        <option value="Customer Research">Customer Research</option>
                        <option value="Prototype">Prototype Hardware</option>
                        <option value="Validation">Market Validation</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-bold text-slate-900 block mb-1">Evidence URL / Attachment:</label>
                      <input 
                        type="text" 
                        placeholder="Link to commit or PDF spec..."
                        value={newBuildEvidence}
                        onChange={(e) => setNewBuildEvidence(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-900"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary text-xs py-2 px-6">
                    Add to Journey
                  </button>

                  {buildAddedToast && (
                    <div className="bg-emerald-50 text-emerald-800 p-2.5 rounded-lg border border-emerald-200 font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Build logged successfully!
                    </div>
                  )}
                </form>
              </div>
            </div>
          )}

          {/* 4. PROOF OF BUILDING TIMELINE */}
          {activeModule === "proof" && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <h1 className="text-2xl font-extrabold text-slate-900">Proof-of-Building Timeline</h1>
                <p className="text-xs text-slate-500">Audit record of your daily entrepreneurship journey & verified mentor endorsements.</p>
              </div>

              <div className="space-y-4">
                {buildLogs.map((item) => (
                  <div key={item.id} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <span className="text-xs font-bold text-slate-500">{item.date}</span>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-700 leading-relaxed">{item.description}</p>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs font-mono text-[11px] text-slate-600">
                      Evidence: {item.evidence}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. AI COPILOT */}
          {activeModule === "copilot" && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-blue-400 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-blue-400" /> AI VENTURE ASSISTANT
                  </span>
                  <span className="text-xs text-emerald-400 font-mono bg-emerald-950 border border-emerald-800 px-2.5 py-0.5 rounded">
                    Context Synced
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-extrabold text-white">Recommended Priority Action:</h2>
                  <h3 className="text-2xl font-extrabold text-blue-300">Validate pricing structure with early adopters</h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                    12 customer discovery interviews completed. Field sensor test data is verified. Next milestone is testing seasonal revenue-share pricing with 5 partner cooperatives.
                  </p>
                </div>

                <button className="btn-primary text-xs py-2.5 px-6 bg-blue-600 hover:bg-blue-500">
                  Open Customer Validation Workflow
                </button>
              </div>
            </div>
          )}

          {/* 6. STUDENTS & AISEA NEXTGEN */}
          {activeModule === "student" && (
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-blue-900" />
                  <h1 className="text-2xl font-extrabold text-slate-900">AISEA NextGen — Student Venture Lab & Learning</h1>
                </div>
                <p className="text-xs text-slate-500">Learn practical venture building module-by-module, apply for micro-gigs with corporate partners, and convert university projects into verified ventures.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
                  <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Micro-Gig</span>
                  <h3 className="font-bold text-sm text-slate-900">AgriTech Sensor Data Analysis</h3>
                  <p className="text-xs text-slate-600">Stipend: $1,200 • Duration: 3 weeks</p>
                  <button className="btn-primary w-full text-xs py-1.5">Apply for Student Gig</button>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
                  <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Venture Fellowship</span>
                  <h3 className="font-bold text-sm text-slate-900">Campus Incubator Micro-Grant</h3>
                  <p className="text-xs text-slate-600">Equity-free: $5,000 + Mentor</p>
                  <button className="btn-primary w-full text-xs py-1.5">Apply for Fellowship</button>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
                  <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Course Credit</span>
                  <h3 className="font-bold text-sm text-slate-900">Practical Venture Capstone</h3>
                  <p className="text-xs text-slate-600">+25 Etr Credits • Verified Certificate</p>
                  <button className="btn-primary w-full text-xs py-1.5">Start Capstone</button>
                </div>
              </div>

              {/* Module-wise Learning Section */}
              <div className="pt-4 border-t border-slate-200">
                <EtrCertification />
              </div>
            </div>
          )}

          {/* 7. UNIVERSITIES (CAMPUS OS) */}
          {activeModule === "campus" && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-center gap-2">
                  <Building className="w-6 h-6 text-blue-900" />
                  <h1 className="text-2xl font-extrabold text-slate-900">Campus OS — University Incubator Console</h1>
                </div>
                <p className="text-xs text-slate-500">Manage student entrepreneurship programs, active campus startups, mentor hours, and placement metrics.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-slate-400 text-[10px] uppercase font-bold">ACTIVE STUDENTS</div>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1">1,420</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-slate-400 text-[10px] uppercase font-bold">INCUBATED STARTUPS</div>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1">42 Startups</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-slate-400 text-[10px] uppercase font-bold">MENTOR HOURS</div>
                  <div className="text-2xl font-extrabold text-blue-900 mt-1">380 hrs</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-slate-400 text-[10px] uppercase font-bold">VENTURES LAUNCHED</div>
                  <div className="text-2xl font-extrabold text-emerald-600 mt-1">18 Ventures</div>
                </div>
              </div>
            </div>
          )}

          {/* 8. CORPORATES & PILOTS */}
          {activeModule === "corporate" && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-blue-900" />
                  <h1 className="text-2xl font-extrabold text-slate-900">Corporate Innovation & Pilots Portal</h1>
                </div>
                <p className="text-xs text-slate-500">Launch corporate innovation challenges, test commercial pilots with verified startups, and discover talent.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
                <h3 className="font-bold text-sm text-slate-900">Active Commercial Pilots (DP World & Bosch Global)</h3>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900">Smart Logistics Port Sensors Pilot</div>
                    <div className="text-slate-500 text-[11px]">DP World • Budget: \$50,000 Commercial Contract</div>
                  </div>
                  <span className="verified-pill text-[10px]"><CheckCircle2 className="w-3.5 h-3.5" /> 8 Startups Shortlisted</span>
                </div>
              </div>
            </div>
          )}

          {/* 9. INVESTORS & DEAL FLOW */}
          {activeModule === "dealflow" && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
                <h1 className="text-2xl font-extrabold text-slate-900">Institutional Deal Flow Vault</h1>
                <p className="text-xs text-slate-500 max-w-2xl">
                  Audited startup metrics, traction logs, cap tables, and verified data for syndicate institutional investors. (No guaranteed funding claims).
                </p>
              </div>

              <div className="space-y-4">
                {SAMPLE_DEALS.map((deal) => (
                  <div key={deal.id} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-slate-400">Stage: {deal.stage}</span>
                        <h3 className="text-lg font-bold text-slate-900">{deal.companyName}</h3>
                        <p className="text-xs text-slate-500">{deal.tagline}</p>
                      </div>
                      <span className="text-xs font-semibold text-emerald-700">
                        Data Audit Score: {deal.verifiedDataScore}%
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <div className="text-slate-400 text-[10px]">MRR REVENUE</div>
                        <div className="font-bold text-slate-900 text-sm mt-0.5">{deal.revenueMRR}</div>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <div className="text-slate-400 text-[10px]">GROWTH MOM</div>
                        <div className="font-bold text-emerald-600 text-sm mt-0.5">{deal.growthMoM}</div>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <div className="text-slate-400 text-[10px]">LOCATION & TEAM</div>
                        <div className="font-semibold text-slate-800 mt-0.5">{deal.location} ({deal.teamSize} people)</div>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <div className="text-slate-400 text-[10px]">INVESTOR MATCHES</div>
                        <div className="font-bold text-blue-900 text-sm mt-0.5">{deal.matchedInvestorsCount} Institutional Syndicate</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 10. TRUST & SAFETY CENTER */}
          {activeModule === "trust" && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-6 h-6 text-blue-900" />
                  <h1 className="text-2xl font-extrabold text-slate-900">Trust & Safety Governance Center</h1>
                </div>
                <p className="text-xs text-slate-500">Transparent identity audit trails, fraud prevention logs, credential revocation checks, and human review queues.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
                  <div className="font-bold text-slate-900">Automated AI OCR Check</div>
                  <p className="text-slate-600 text-[11px]">Passport & KYB registration document authenticity verified against global databases.</p>
                  <span className="verified-pill text-[10px]"><CheckCircle2 className="w-3 h-3" /> 99.94% Accuracy</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
                  <div className="font-bold text-slate-900">Human Mentor Audit Queue</div>
                  <p className="text-slate-600 text-[11px]">420 accredited domain mentors verify technical build evidence & customer interviews.</p>
                  <span className="verified-pill text-[10px]"><CheckCircle2 className="w-3 h-3" /> Zero Vanity Claims</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
                  <div className="font-bold text-slate-900">Immutable Audit Trail</div>
                  <p className="text-slate-600 text-[11px]">Cryptographic hashes attached to Etr. Level 3 credentials for syndicate audit.</p>
                  <span className="verified-pill text-[10px]"><CheckCircle2 className="w-3 h-3" /> Cryptographic Integrity</span>
                </div>
              </div>
            </div>
          )}

          {/* 11. GLOBAL HONOURS */}
          {activeModule === "honours" && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-amber-600" />
                  <h1 className="text-2xl font-extrabold text-slate-900">AISEA Global Honours Program</h1>
                </div>
                <p className="text-xs text-slate-500">Prestigious evidence-backed recognition for outstanding entrepreneurs, mentors, experts, and institutions.</p>
              </div>

              <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-4 shadow-md max-w-3xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
                  <span className="text-amber-400 font-bold uppercase text-[10px]">ANNUAL HONOUR RECOGNITION 2026</span>
                  <span className="text-slate-400 font-mono">Jury Review Active</span>
                </div>
                <h3 className="text-xl font-bold text-white">Global Entrepreneur of the Year</h3>
                <p className="text-xs text-slate-300">Nomination Process: Nomination → Evidence Review → Conflict Check → Jury Approval → Award Presentation.</p>
                <button className="btn-primary text-xs py-2 px-4 bg-amber-600 hover:bg-amber-500">Nominate Builder</button>
              </div>
            </div>
          )}

          {/* 12. ADMIN CONTROL CENTER */}
          {activeModule === "admin" && (
            <div className="space-y-6">
              <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-2 shadow-xs">
                <h1 className="text-2xl font-extrabold">Enterprise Admin Control Center</h1>
                <p className="text-xs text-slate-400">Dense administrative data tables for user moderation, KYB reviews, payments, and global chapter governance.</p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-800">
                  <span>User & Business Verification Queue (5 Pending Audit)</span>
                  <span className="text-slate-500 font-normal">Audit Trail Log: #AD-8841</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-700">
                    <thead className="bg-slate-100 text-slate-800 font-bold uppercase tracking-wider text-[10px] border-b border-slate-200">
                      <tr>
                        <th className="p-3">Entity Name</th>
                        <th className="p-3">Role</th>
                        <th className="p-3">Verification Step</th>
                        <th className="p-3">KYC/KYB Status</th>
                        <th className="p-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 font-medium">
                      <tr>
                        <td className="p-3 font-bold text-slate-900">AgriSense AI (Aarav Sharma)</td>
                        <td className="p-3">Entrepreneur</td>
                        <td className="p-3 text-blue-900 font-semibold">Human Review Completed</td>
                        <td className="p-3"><span className="verified-pill"><CheckCircle2 className="w-3 h-3" /> KYB Verified</span></td>
                        <td className="p-3 text-right"><button className="btn-secondary text-[11px] py-1 px-2.5">Audit Log</button></td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">ClimateScale (Elena Rostova)</td>
                        <td className="p-3">Entrepreneur</td>
                        <td className="p-3 text-blue-900 font-semibold">Etr. Level 3 Review</td>
                        <td className="p-3"><span className="verified-pill"><CheckCircle2 className="w-3 h-3" /> KYB Verified</span></td>
                        <td className="p-3 text-right"><button className="btn-secondary text-[11px] py-1 px-2.5">Audit Log</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* QR Modal */}
      {showQrModal && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 text-center space-y-4 shadow-2xl border border-slate-200 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-bold text-slate-900">Etr. Cryptographic Verification</span>
              <button onClick={() => setShowQrModal(false)} className="text-slate-400 font-bold">✕</button>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl inline-block mx-auto">
              <div className="w-40 h-40 bg-slate-900 rounded-lg p-2 flex flex-col justify-between items-center text-white">
                <QrCode className="w-32 h-32 text-white" />
                <span className="text-[9px] font-mono text-emerald-400">VERIFIED #ETR-9821</span>
              </div>
            </div>
            <button onClick={() => setShowQrModal(false)} className="btn-secondary w-full text-xs">Close Preview</button>
          </div>
        </div>
      )}
    </div>
  );
};
