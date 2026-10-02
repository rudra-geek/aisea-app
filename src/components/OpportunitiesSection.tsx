"use client";

import React, { useState } from "react";
import { CheckCircle2, Building } from "lucide-react";

export const OpportunitiesSection: React.FC = () => {
  const tabs = ["All", "Jobs", "Internships", "Gigs", "Incubation", "Grants", "Challenges", "Competitions", "Partnerships"];
  const [activeTab, setActiveTab] = useState("All");

  const cardsData = [
    {
      number: "01",
      title: "Startup Incubation Program 2026",
      org: "Entrepreneurs Association of India",
      type: "Incubation • Early Stage",
      meta: "India • Applications Open",
      verified: "Verified Organization"
    },
    {
      number: "02",
      title: "Global CleanTech Scale Up Grant",
      org: "Enterprise Singapore & Temasek Foundation",
      type: "Grant • $150,000 Equity-free",
      meta: "Singapore / SEA Remote • Open",
      verified: "Verified Organization"
    },
    {
      number: "03",
      title: "Smart Logistics Innovation Challenge",
      org: "DP World & Dubai Future Foundation",
      type: "Challenge • Commercial Pilot",
      meta: "Dubai, UAE • Deadline Nov 15",
      verified: "Verified Organization"
    },
    {
      number: "04",
      title: "AISEA NextGen Student Engineering Fellowship",
      org: "AISEA Global Foundation",
      type: "Gigs • Stipend + Micro-grant",
      meta: "Global Remote • Rolling Admission",
      verified: "Verified Organization"
    }
  ];

  return (
    <section className="bg-white py-14 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Marketplace
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Opportunities
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mt-1">
              Search grants, corporate innovation challenges, student gigs, and incubator programs.
            </p>
          </div>
        </div>

        {/* Top Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto border-b border-slate-200 pb-3 text-xs font-semibold text-slate-600">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-3.5 py-2 rounded-lg whitespace-nowrap transition ${
                activeTab === t ? "bg-slate-900 text-white font-bold" : "hover:bg-slate-100 text-slate-700"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardsData.map((item) => (
            <div 
              key={item.number}
              className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-xs hover:border-slate-400 transition flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                    <Building className="w-4 h-4 text-slate-200" />
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-400">
                    {item.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{item.title}</h3>
                  <p className="text-xs text-slate-500 font-semibold mt-1">{item.org}</p>
                </div>

                <div className="space-y-1 text-xs text-slate-600">
                  <div className="font-semibold text-slate-800">{item.type}</div>
                  <div className="text-slate-500">{item.meta}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                {/* Clean plain text label without background box or rounded pill border */}
                <span className="verified-pill">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {item.verified}
                </span>

                <button 
                  onClick={() => alert(`Viewing details for ${item.title}`)}
                  className="font-bold text-slate-900 hover:underline flex items-center gap-1"
                >
                  View Opportunity →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
