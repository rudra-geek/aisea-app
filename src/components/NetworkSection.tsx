"use client";

import React, { useState } from "react";
import { Search, MapPin, CheckCircle2, Sparkles, UserCheck } from "lucide-react";

export const NetworkSection: React.FC = () => {
  const tabs = ["People", "Founders", "Mentors", "Experts", "Startups", "Institutions"];
  const [activeTab, setActiveTab] = useState("People");

  const people = [
    {
      name: "Ankit Verma",
      role: "Founder & CEO, PayFlow",
      industry: "FinTech • B2B SaaS",
      location: "Bengaluru, India",
      skills: ["Payment APIs", "Financial Compliance", "Seed Scaling"],
      verified: true,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Elena Rostova",
      role: "Co-Founder, ClimateScale",
      industry: "CleanTech • Carbon Accounting",
      location: "Singapore",
      skills: ["ESG Telemetry", "Supply Chain", "Enterprise Sales"],
      verified: true,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="bg-white py-14 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900">
            VERIFIED PROFESSIONAL DIRECTORY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Network
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mt-1">
            Find pre-screened founders, verified domain experts, investors, and startup partners.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto border-b border-slate-200 pb-3 text-xs font-semibold text-slate-600">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition ${
                activeTab === t ? "bg-slate-900 text-white font-bold" : "hover:bg-slate-100 text-slate-700"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* AI Founder Match Highlight Card */}
        <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-4 shadow-md max-w-4xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-blue-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-400" /> AI FOUNDER MATCH RECOMMENDATION
            </span>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-800">
              98% Match Score
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-7 space-y-2">
              <h3 className="text-xl font-bold text-white">Ankit Verma — FinTech Founder</h3>
              <p className="text-slate-300 text-xs">Building B2B payment orchestration infrastructure across South Asia.</p>

              <div className="pt-2 text-xs text-slate-300 space-y-1">
                <div className="font-bold text-blue-300 text-[11px] uppercase">Why this match?</div>
                <div className="grid grid-cols-2 gap-1 text-[11px]">
                  <span>✓ FinTech Sector</span>
                  <span>✓ B2B SaaS Business Model</span>
                  <span>✓ Early Stage Revenue</span>
                  <span>✓ India / SEA Jurisdiction</span>
                </div>
              </div>
            </div>

            <div className="sm:col-span-5 flex flex-col items-end gap-3">
              <button 
                onClick={() => alert("Connection request sent to Ankit Verma!")}
                className="btn-primary w-full text-xs py-2 bg-blue-600 hover:bg-blue-500"
              >
                Connect & Initiate Dialogue
              </button>
            </div>
          </div>
        </div>

        {/* People Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {people.map((p, idx) => (
            <div key={idx} className="aisea-card p-5 bg-white border border-slate-200 rounded-xl space-y-3 flex items-start justify-between shadow-xs">
              <div className="flex items-start gap-4">
                <img src={p.avatar} alt={p.name} className="w-12 h-12 rounded-xl object-cover border border-slate-200" />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base text-slate-900">{p.name}</h3>
                    <span className="verified-pill text-[10px]">
                      <CheckCircle2 className="w-3 h-3" /> Verified
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 font-semibold">{p.role}</p>
                  <p className="text-[11px] text-slate-400">{p.industry} • {p.location}</p>
                </div>
              </div>

              <button className="btn-secondary text-xs py-1.5 px-3 shrink-0">
                Connect
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
