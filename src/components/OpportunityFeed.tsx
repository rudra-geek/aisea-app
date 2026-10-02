"use client";

import React, { useState } from "react";
import { SAMPLE_OPPORTUNITIES } from "@/data/mockData";
import { Calendar, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

interface OpportunityFeedProps {
  onOpenOpportunityApp?: (oppId?: string) => void;
}

export const OpportunityFeed: React.FC<OpportunityFeedProps> = ({ onOpenOpportunityApp }) => {
  const categories = ["All", "Grant", "Corporate Challenge", "Student Gig", "Funding", "Government Scheme"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredOpportunities = activeCategory === "All"
    ? SAMPLE_OPPORTUNITIES
    : SAMPLE_OPPORTUNITIES.filter(o => o.type === activeCategory);

  return (
    <section className="bg-white py-14 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Opportunity Radar
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl">
              Curated grants, corporate challenges, student gigs, and institutional syndicate funds matched to your profile.
            </p>
          </div>

          <button 
            onClick={() => onOpenOpportunityApp?.()}
            className="btn-primary text-xs shrink-0"
          >
            <span>View All Opportunities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3 text-xs font-medium">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg transition ${
                activeCategory === cat
                  ? "bg-slate-900 text-white font-semibold"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Opportunities Feed List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredOpportunities.map((opp) => (
            <div 
              key={opp.id} 
              className="aisea-card p-6 space-y-4 flex flex-col justify-between hover:border-slate-400 transition"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img 
                      src={opp.logo} 
                      alt={opp.organization}
                      className="w-10 h-10 rounded-lg object-cover border border-slate-200"
                    />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                        {opp.type}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mt-0.5 leading-snug">{opp.title}</h3>
                      <p className="text-xs text-slate-500 font-medium">{opp.organization}</p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-slate-900">
                    {opp.matchScore}% Match
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {opp.description}
                </p>

                {opp.fundingAmount && (
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs font-semibold text-slate-900 flex items-center justify-between">
                    <span className="text-slate-500 font-normal">Award / Benefit:</span>
                    <span className="text-emerald-700 font-bold">{opp.fundingAmount}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3 text-slate-500 text-[11px]">
                  <span>Deadline: {opp.deadline}</span>
                  <span>•</span>
                  <span>{opp.location}</span>
                </div>

                <button 
                  onClick={() => onOpenOpportunityApp?.(opp.id)}
                  className="btn-secondary text-xs py-1 px-2.5"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
