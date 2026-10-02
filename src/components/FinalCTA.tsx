"use client";

import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface FinalCTAProps {
  onJoin: () => void;
  onExplore: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onJoin, onExplore }) => {
  return (
    <section className="bg-white py-20 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mx-auto shadow-sm">
          <ShieldCheck className="w-6 h-6 text-blue-400" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Build your entrepreneurial identity with AISEA Global.
        </h2>

        <p className="text-slate-600 text-base sm:text-xl font-medium tracking-wide uppercase">
          Learn. Build. Prove. Connect. Grow.
        </p>

        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
          Make entrepreneurship a verified, trusted, connected and scalable professional identity. Join thousands of founders, students, mentors and institutions.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button 
            onClick={onJoin}
            className="btn-primary text-base px-8 py-3.5 shadow-sm"
          >
            <span>Join AISEA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button 
            onClick={onExplore}
            className="btn-secondary text-base px-8 py-3.5"
          >
            <span>Explore the Ecosystem</span>
          </button>
        </div>

      </div>
    </section>
  );
};
