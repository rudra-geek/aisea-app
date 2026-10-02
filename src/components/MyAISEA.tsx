"use client";

import React, { useState } from "react";
import { SAMPLE_ENTREPRENEURS, SAMPLE_BUILDS, SAMPLE_MATCHES } from "@/data/mockData";
import { CheckCircle2, MapPin, Share2, Edit3, Award, Layers, Users, BookOpen, QrCode, FileText } from "lucide-react";

export const MyAISEA: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Overview" | "Journey" | "Projects" | "Proof" | "Skills" | "Achievements" | "Experience" | "Mentorship" | "Verification">("Overview");

  const etr = SAMPLE_ENTREPRENEURS[0];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Profile Header Card */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        
        {/* Cover Strip */}
        <div className="h-32 bg-slate-900 p-4 flex items-end justify-between">
          <span className="text-xs font-semibold text-slate-300 bg-slate-800/80 px-3 py-1 rounded border border-slate-700">
            MY AISEA — Professional Entrepreneur Portfolio
          </span>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950 border border-emerald-800 px-3 py-1 rounded font-medium">
            Cryptographic ID: #ETR-9821
          </span>
        </div>

        {/* Info Block */}
        <div className="p-6 relative pt-0 border-b border-slate-100 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-10">
            <div className="flex items-end gap-4">
              <img 
                src={etr.avatar} 
                alt={etr.name}
                className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-md"
              />
              <div className="space-y-1 pb-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-extrabold text-slate-900">{etr.name}</h1>
                </div>
                <p className="text-xs text-slate-600 font-semibold">{etr.role}</p>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> {etr.location} • <span className="font-semibold text-slate-700">Technology • AgTech / SaaS</span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button className="btn-secondary text-xs py-2 px-3.5">
                <Edit3 className="w-3.5 h-3.5" /> Edit Profile
              </button>
              <button className="btn-primary text-xs py-2 px-4">
                <Share2 className="w-3.5 h-3.5" /> Share Portfolio
              </button>
            </div>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed max-w-3xl pt-2">
            {etr.bio}
          </p>

          {/* Verification Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-semibold">
            <span className="verified-pill">
              <CheckCircle2 className="w-3.5 h-3.5" /> Identity Verified
            </span>
            <span className="verified-pill">
              <CheckCircle2 className="w-3.5 h-3.5" /> Business Verified
            </span>
            <span className="verified-pill">
              <CheckCircle2 className="w-3.5 h-3.5" /> Skills Verified
            </span>
            <span className="verified-pill">
              <CheckCircle2 className="w-3.5 h-3.5" /> Etr. Certified
            </span>
          </div>
        </div>

        {/* Evidence Stats Strip (Show what the entrepreneur has actually built, not just followers) */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 grid grid-cols-2 sm:grid-cols-7 gap-2 text-center text-xs">
          <div className="p-2">
            <div className="text-[10px] font-bold uppercase text-slate-400">BUILD LOGS</div>
            <div className="text-base font-extrabold text-slate-900 mt-0.5">24 Verified</div>
          </div>
          <div className="p-2">
            <div className="text-[10px] font-bold uppercase text-slate-400">PROJECTS</div>
            <div className="text-base font-extrabold text-slate-900 mt-0.5">8 Projects</div>
          </div>
          <div className="p-2">
            <div className="text-[10px] font-bold uppercase text-slate-400">MILESTONES</div>
            <div className="text-base font-extrabold text-slate-900 mt-0.5">12 Audited</div>
          </div>
          <div className="p-2">
            <div className="text-[10px] font-bold uppercase text-slate-400">CREDENTIALS</div>
            <div className="text-base font-extrabold text-slate-900 mt-0.5">6 Etr. Badges</div>
          </div>
          <div className="p-2">
            <div className="text-[10px] font-bold uppercase text-slate-400">MENTORSHIP</div>
            <div className="text-base font-extrabold text-slate-900 mt-0.5">18 Sessions</div>
          </div>
          <div className="p-2 col-span-2 sm:col-span-2">
            <div className="text-[10px] font-bold uppercase text-slate-400">COMMUNITIES</div>
            <div className="text-base font-extrabold text-blue-900 mt-0.5">7 Regional Chapters</div>
          </div>
        </div>

        {/* Tabs Bar */}
        <div className="flex items-center gap-1 p-3 overflow-x-auto text-xs font-semibold text-slate-600">
          {(["Overview", "Journey", "Projects", "Proof", "Skills", "Achievements", "Experience", "Mentorship", "Verification"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition ${
                activeTab === t ? "bg-slate-900 text-white font-bold" : "hover:bg-slate-100"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

      </div>

      {/* Tab Content Panels */}
      {activeTab === "Overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
            
            {/* Recent Verified Builds */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-900" /> Proof-of-Building Evidence Log
                </h3>
                <span className="text-[10px] text-slate-400 uppercase font-mono">Verified Activity</span>
              </div>

              <div className="space-y-3 text-xs">
                {SAMPLE_BUILDS.map((b) => (
                  <div key={b.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">{b.title}</span>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {b.category}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{b.description}</p>
                    <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="font-mono text-slate-700">{b.evidence}</span>
                      <span className="text-emerald-700 font-semibold">{b.mentorReviewStatus}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 text-xs shadow-sm">
              <h4 className="font-extrabold text-slate-900">Etr. Credential Standard</h4>
              <p className="text-slate-600">
                Official Level 3 Certified status verified by 2 accredited mentors and AI fraud check.
              </p>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 font-mono text-[11px] text-slate-800">
                Verify URL: etr.aisea.global/rahul-sharma
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
