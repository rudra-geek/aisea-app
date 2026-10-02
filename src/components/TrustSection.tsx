"use client";

import React from "react";
import { ShieldCheck, CheckCircle2, UserCheck, Building, GraduationCap, Award, FileCheck2, GitCommit } from "lucide-react";

export const TrustSection: React.FC = () => {
  const trustSignals = [
    { title: "Verified Identity", desc: "Government ID & biometrics audit", icon: UserCheck },
    { title: "Verified Business", desc: "Corporate KYB, incorporation & tax registry", icon: Building },
    { title: "Verified Skills", desc: "Peer & mentor validated technical competencies", icon: GraduationCap },
    { title: "Verified Work", desc: "Code, prototype & customer research evidence logs", icon: GitCommit },
    { title: "Verified Achievements", desc: "Audited milestones & revenue milestones", icon: Award },
    { title: "Verified Contributions", desc: "Ecosystem mentoring, peer review & gig outcomes", icon: FileCheck2 }
  ];

  return (
    <section className="bg-slate-50 py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            One identity. One journey. One trusted ecosystem.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            AISEA replaces unverified claims with cryptographic proof and multi-layered human & institutional verification.
          </p>
        </div>

        {/* 6 Minimal Trust Signals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustSignals.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="aisea-card p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-900">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
