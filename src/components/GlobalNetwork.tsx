"use client";

import React, { useState } from "react";
import { Globe, MapPin, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export const GlobalNetwork: React.FC = () => {
  const regions = [
    { name: "India Hub", city: "Bengaluru / Delhi", stats: "4,820 Founders • 310 Mentors", detail: "Agritech, DeepTech & SaaS innovation nodes." },
    { name: "Singapore ASEAN", city: "Singapore", stats: "2,150 Founders • 180 Mentors", detail: "CleanTech & FinTech international gateway." },
    { name: "UAE & Middle East", city: "Dubai Hub", stats: "1,450 Founders • 120 Mentors", detail: "Smart logistics, energy & Web3 governance." },
    { name: "UK & Europe", city: "London Hub", stats: "3,100 Founders • 240 Mentors", detail: "Biomedical analytics, IP & venture syndicates." },
    { name: "North America", city: "Palo Alto / NYC", stats: "5,400 Founders • 420 Mentors", detail: "Enterprise AI, deeptech & institutional series funding." },
    { name: "Africa & SE Asia", city: "Nairobi / Jakarta", stats: "1,890 Founders • 150 Mentors", detail: "Financial inclusion, IoT & micro-enterprise labs." }
  ];

  const [activeRegion, setActiveRegion] = useState(0);

  return (
    <section className="bg-slate-50 py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900">
            GLOBAL ECOSYSTEM NODES
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            A global entrepreneurial network, built on verified connections.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Interconnected institutional chapters bridging cross-border capital, mentor advisory, and pilot expansion.
          </p>
        </div>

        {/* Network Hub Visualization Panel */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {regions.map((reg, idx) => {
              const isSelected = activeRegion === idx;
              return (
                <button
                  key={reg.name}
                  onClick={() => setActiveRegion(idx)}
                  className={`p-3 rounded-xl border text-left transition ${
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900 shadow-md"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <MapPin className={`w-4 h-4 ${isSelected ? "text-blue-400" : "text-slate-400"}`} />
                    <span className="text-[10px] font-bold opacity-60">0{idx + 1}</span>
                  </div>
                  <div className="font-bold text-xs">{reg.name}</div>
                  <div className="text-[10px] opacity-75 mt-0.5">{reg.city}</div>
                </button>
              );
            })}
          </div>

          {/* Active Node Detail */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Active Hub Node: {regions[activeRegion].name}
                </span>
                <span className="verified-pill text-[10px]">
                  <CheckCircle2 className="w-3 h-3" /> Live Chapter Network
                </span>
              </div>
              <p className="text-xs text-slate-700 font-medium">
                {regions[activeRegion].stats} — {regions[activeRegion].detail}
              </p>
            </div>

            <div className="text-xs text-slate-500 font-mono">
              IP Protocol: encrypted.aisea.global/{regions[activeRegion].city.toLowerCase().replace(/[^a-z]/g, "")}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
