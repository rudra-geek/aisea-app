"use client";

import React, { useState } from "react";
import { SAMPLE_MATCHES } from "@/data/mockData";
import { Sparkles, MapPin, Calendar, CheckCircle2, ArrowRight } from "lucide-react";

interface MatchingSectionProps {
  onOpenMatchApp?: () => void;
}

export const MatchingSection: React.FC<MatchingSectionProps> = ({ onOpenMatchApp }) => {
  const [selectedMatch, setSelectedMatch] = useState(SAMPLE_MATCHES[0]);

  return (
    <section className="bg-slate-50 py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900">
            INTELLIGENT MATCHING ENGINE
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The right people. The right opportunity. The right time.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Verified evidence matching algorithm connects founders with exact advisors, corporate pilots, and investors.
          </p>
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SAMPLE_MATCHES.map((match) => {
            const isSelected = selectedMatch.id === match.id;
            return (
              <div 
                key={match.id}
                onClick={() => setSelectedMatch(match)}
                className={`aisea-card p-6 cursor-pointer space-y-4 flex flex-col justify-between transition ${
                  isSelected ? "border-blue-900 shadow-md ring-1 ring-blue-900/20 bg-white" : ""
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {match.type}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-emerald-600" /> {match.matchPercentage}% Match
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900">{match.name}</h3>
                    <p className="text-xs text-slate-500 font-medium">{match.role} • {match.company}</p>
                  </div>

                  <div className="space-y-1.5 pt-1 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-500">Expertise:</span>
                      <span className="text-slate-800 font-medium">{match.expertise}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-500">Industry & Stage:</span>
                      <span>{match.industry} ({match.stage})</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs text-slate-600 leading-relaxed">
                    <span className="font-semibold text-slate-900">Reason for match: </span>
                    {match.reason}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {match.location}</span>
                  <span className="flex items-center gap-1 text-blue-900 font-medium"><Calendar className="w-3.5 h-3.5" /> {match.availability}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <button 
            onClick={onOpenMatchApp}
            className="btn-secondary"
          >
            <span>Explore Full AI Matching Radar</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
