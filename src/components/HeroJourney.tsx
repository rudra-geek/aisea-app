"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";

interface HeroJourneyProps {
  onJoin: () => void;
  onExplore: () => void;
  onOpenCommunity?: () => void;
}

export const HeroJourney: React.FC<HeroJourneyProps> = ({ onJoin, onExplore, onOpenCommunity }) => {
  return (
    <section className="bg-white py-14 sm:py-16 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left animate-fade-up">
            
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-live-dot"></span>
              <span>The Platform for Builders & Founders</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Build. Prove. Connect. Grow.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              AISEA Global connects founders, students, mentors, corporate partners, and investors through verified proof of building.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button 
                onClick={onJoin}
                className="btn-primary hover-lift shadow-xs"
              >
                <span>Join AISEA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button 
                onClick={onExplore}
                className="btn-secondary hover-lift"
              >
                <span>Explore Ecosystem</span>
              </button>

              {onOpenCommunity && (
                <button 
                  onClick={onOpenCommunity}
                  className="btn-secondary hover-lift border-blue-200 bg-blue-50/50 hover:bg-blue-50 text-blue-900 flex items-center gap-1.5"
                >
                  <Users className="w-4 h-4 text-blue-800" />
                  <span>Community</span>
                </button>
              )}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5 transition-transform hover:scale-105">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Verified Identity
              </span>
              <span className="flex items-center gap-1.5 transition-transform hover:scale-105">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Proof-of-Building
              </span>
              <span className="flex items-center gap-1.5 transition-transform hover:scale-105">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Etr. Governance Standard
              </span>
            </div>

          </div>

          {/* Right Column: Realistic AISEA Entrepreneur Profile Card with Float & Hover Animation */}
          <div className="lg:col-span-5 animate-fade-up animate-delay-1">
            <div className="aisea-card hover-lift p-6 bg-white border border-slate-200 rounded-xl space-y-4 shadow-sm animate-float">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-[11px] font-semibold uppercase text-slate-500">
                  AISEA Profile
                </span>
                <span className="verified-pill text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" 
                  alt="Rahul Sharma"
                  className="w-12 h-12 rounded-lg object-cover border border-slate-200 transition-transform hover:scale-110"
                />
                <div>
                  <h3 className="font-bold text-base text-slate-900 leading-snug">Rahul Sharma</h3>
                  <p className="text-xs text-slate-600 font-medium">Founder • Entrepreneur</p>
                  <p className="text-[11px] text-slate-500 font-medium">Technology • SaaS</p>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-1.5 text-xs font-medium">
                <div className="flex items-center gap-2 text-slate-700">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Identity Verified</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Skills Verified</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Business Verified</span>
                </div>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-semibold uppercase text-slate-500">
                  ENTREPRENEUR JOURNEY
                </div>

                <div className="bg-slate-100/80 p-2.5 rounded-lg border border-slate-200/80 flex items-center justify-between text-[11px] font-semibold text-slate-800">
                  <span>Problem</span>
                  <span className="text-slate-400">→</span>
                  <span>Research</span>
                  <span className="text-slate-400">→</span>
                  <span>MVP</span>
                  <span className="text-slate-400">→</span>
                  <span>First Users</span>
                  <span className="text-slate-400">→</span>
                  <span className="text-emerald-700 font-bold">Revenue</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="text-[10px] uppercase text-slate-400 font-medium">Etr. Credential Standard</div>
                  <div className="font-bold text-slate-900">AISEA Certified Entrepreneur</div>
                </div>
                <span className="text-xs font-semibold text-slate-800 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                  #9821
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
