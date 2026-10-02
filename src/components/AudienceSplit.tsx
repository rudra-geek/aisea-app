"use client";

import React, { useState } from "react";
import { 
  Rocket, 
  GraduationCap, 
  UserCheck, 
  Sparkles, 
  Building2, 
  Building,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

interface AudienceSplitProps {
  onSelectRole?: (role: string) => void;
}

export const AudienceSplit: React.FC<AudienceSplitProps> = ({ onSelectRole }) => {
  const audiences = [
    {
      id: "Entrepreneurs",
      title: "Entrepreneurs",
      subtitle: "Build your identity, work, network and startup.",
      icon: Rocket,
      points: [
        "Verified Etr. cryptographic identity handle",
        "Today's Build daily proof-of-building timeline",
        "AI-matched mentor and investor introductions",
        "Audited data vault for seed deal flow"
      ],
      cta: "Launch Entrepreneur Workspace"
    },
    {
      id: "Student",
      title: "Students",
      subtitle: "Learn, build projects, earn and launch ventures.",
      icon: GraduationCap,
      points: [
        "Access to AISEA NextGen & Student Venture Lab",
        "Earn stipends on real corporate student gigs",
        "Convert university capstone projects into ventures",
        "Verified practical project certificates"
      ],
      cta: "Explore Student NextGen"
    },
    {
      id: "Mentor",
      title: "Mentors",
      subtitle: "Guide founders and track measurable outcomes.",
      icon: UserCheck,
      points: [
        "Structured mentee scheduling & review queue",
        "Verify build logs and endorse milestone achievements",
        "Track founder progress metrics post-advisory",
        "Global mentor directory listing & reputation score"
      ],
      cta: "Join Mentor Network"
    },
    {
      id: "Expert",
      title: "Experts",
      subtitle: "Share specialised knowledge with verified entrepreneurs.",
      icon: Sparkles,
      points: [
        "Direct Q&A micro-consulting marketplace",
        "Domain expert verification in legal, IP, hardware, AI",
        "Monetize or donate advisory sessions",
        "Build institutional domain reputation"
      ],
      cta: "Become Verified Expert"
    },
    {
      id: "Corporate",
      title: "Corporates",
      subtitle: "Discover startups, talent and innovation opportunities.",
      icon: Building2,
      points: [
        "Launch corporate innovation challenges",
        "Direct pilot execution pipeline with verified startups",
        "Discover pre-screened student engineering talent",
        "Track pilot outcomes & ROI analytics"
      ],
      cta: "Access Corporate Portal"
    },
    {
      id: "Institution",
      title: "Institutions",
      subtitle: "Manage entrepreneurship programs, students and ecosystem activity.",
      icon: Building,
      points: [
        "Deploy Campus OS for university incubators",
        "Track active student startups, mentors & placements",
        "Generate accredited entrepreneurship reports",
        "Host regional global innovation challenges"
      ],
      cta: "Deploy Campus OS"
    }
  ];

  const [activeAudience, setActiveAudience] = useState("Entrepreneurs");

  const currentData = audiences.find(a => a.id === activeAudience) || audiences[0];
  const IconComponent = currentData.icon;

  return (
    <section className="bg-white py-14 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Designed for every pillar of the ecosystem.
          </h2>
          <p className="text-slate-600 text-sm">
            Tailored tools, workflows, and permissions for each role.
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-3">
          {audiences.map((aud) => (
            <button
              key={aud.id}
              onClick={() => setActiveAudience(aud.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeAudience === aud.id
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              <span>{aud.title}</span>
            </button>
          ))}
        </div>

        {/* Clean Split Layout for Active Audience */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column Description */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                <IconComponent className="w-5 h-5 text-slate-200" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase">For {currentData.title}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">{currentData.subtitle}</h3>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              {currentData.points.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button 
                onClick={() => onSelectRole?.(currentData.id)}
                className="btn-primary text-xs"
              >
                <span>{currentData.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column Preview Card */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-xs text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <span className="font-bold text-slate-900">{currentData.title} Console</span>
              <span className="verified-pill text-[10px]"><CheckCircle2 className="w-3 h-3" /> Verified Level 3</span>
            </div>

            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-1">
              <div className="text-[10px] text-slate-400 font-semibold uppercase">Primary Action</div>
              <div className="font-bold text-slate-900">
                {currentData.id === "Entrepreneurs" && "Log today's customer interviews & sensor builds"}
                {currentData.id === "Student" && "Apply for AgriTech micro-gig ($1,200 stipend)"}
                {currentData.id === "Mentor" && "Review pending proof-of-building entries"}
                {currentData.id === "Expert" && "Answer legal IP inquiry regarding PCT filing"}
                {currentData.id === "Corporate" && "Screen 8 early-stage clean energy startups"}
                {currentData.id === "Institution" && "Export quarterly incubator impact report"}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center text-xs pt-1">
              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                <div className="text-slate-400 text-[10px]">READINESS</div>
                <div className="font-bold text-slate-900 text-sm">96%</div>
              </div>
              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                <div className="text-slate-400 text-[10px]">AUDIT SCORE</div>
                <div className="font-bold text-slate-900 text-sm">98/100</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
