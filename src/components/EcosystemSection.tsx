"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  Layers, 
  BookOpen, 
  Users, 
  Briefcase, 
  Building2, 
  BrainCircuit, 
  Sliders,
  CheckCircle
} from "lucide-react";

interface EcosystemSectionProps {
  onSelectCategory?: (category: string) => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: "identity",
      title: "Identity & Trust",
      icon: ShieldCheck,
      description: "Verifiable professional identity, legal business credentials, and reputation scoring.",
      modules: ["Entrepreneur Identity", "KYC Verification", "KYB Business Check", "Etr. Credential", "Reputation Ledger"]
    },
    {
      id: "build",
      title: "Build & Execute",
      icon: Layers,
      description: "Operational tools to structure daily progress, validate customer demand, and build.",
      modules: ["Startup Workspace", "Today's Build Logger", "Proof-of-Building", "AI Journey Copilot"]
    },
    {
      id: "learn",
      title: "Learn",
      icon: BookOpen,
      description: "Practical venture creation education, student incubators, and masterclasses.",
      modules: ["AISEA NextGen Academy", "AISEA NextGen", "Student Venture Lab", "Practical Challenges"]
    },
    {
      id: "connect",
      title: "Connect",
      icon: Users,
      description: "Targeted relationship matching across mentors, experts, co-founders, and partners.",
      modules: ["AI Founder Match", "Mentor Network", "Expert Q&A Hub", "Encrypted Private Chat"]
    },
    {
      id: "opportunities",
      title: "Opportunities",
      icon: Briefcase,
      description: "Real-time market radar for grants, corporate challenges, student gigs, and deals.",
      modules: ["Opportunity Radar", "Deal Flow Vault", "Corporate Network", "Student Gig Marketplace"]
    },
    {
      id: "institutions",
      title: "Institutions",
      icon: Building2,
      description: "Infrastructure for universities, government agencies, and regional innovation hubs.",
      modules: ["Campus OS", "Global Innovation Challenges", "Global Chapters Directory"]
    },
    {
      id: "intelligence",
      title: "Intelligence",
      icon: BrainCircuit,
      description: "Market telemetry, venture benchmarks, and AI-driven growth insights.",
      modules: ["Daily Business Pulse", "AISEA Global Intelligence", "Benchmark Analytics"]
    },
    {
      id: "operations",
      title: "Operations",
      icon: Sliders,
      description: "Enterprise compliance, audit trails, payment processing, and safety governance.",
      modules: ["Admin Control Center", "Trust & Safety Hub", "AI + Human Review Pipeline", "Unified Payments"]
    }
  ];

  const [activeTab, setActiveTab] = useState("identity");

  return (
    <section className="bg-white py-14 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Everything an entrepreneur needs, connected.
          </h2>
          <p className="text-slate-600 text-sm">
            Structured into 8 connected ecosystem pillars. Clean, modular, and evidence-driven.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeTab === cat.id;

            return (
              <div 
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  onSelectCategory?.(cat.id);
                }}
                className={`aisea-card hover-lift p-5 cursor-pointer flex flex-col justify-between space-y-4 transition ${
                  isSelected ? "border-slate-900 bg-slate-50/50 shadow-sm" : ""
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                      <Icon className="w-4 h-4 text-slate-200" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400">
                      {cat.modules.length} Modules
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{cat.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{cat.description}</p>
                  </div>
                </div>

                {/* Module Tags */}
                <div className="border-t border-slate-100 pt-3 space-y-1.5">
                  {cat.modules.map((mod, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium">
                      <CheckCircle className="w-3 h-3 text-slate-400 shrink-0" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
