"use client";

import React, { useState } from "react";
import { CheckCircle2, Sparkles, Plus, BookOpen, Layers, Users, Search, QrCode } from "lucide-react";

interface UserDashboardProps {
  onNavigateModule: (mod: string) => void;
}

export const UserDashboard: React.FC<UserDashboardProps> = ({ onNavigateModule }) => {
  const [taskCreated, setTaskCreated] = useState(false);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Title */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Good morning, Rahul.</h1>
          <p className="text-xs text-slate-500 mt-0.5">Here is your entrepreneurial progress, verified evidence summary, and next recommended actions.</p>
        </div>

        <button 
          onClick={() => onNavigateModule("todays-build")}
          className="btn-primary text-xs"
        >
          <Plus className="w-4 h-4" /> Log Today's Build
        </button>
      </div>

      {/* Grid Summary (Exact spec) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        
        {/* IDENTITY */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 text-center space-y-1 shadow-xs">
          <div className="text-[10px] font-bold uppercase text-slate-400">IDENTITY</div>
          <div className="text-sm font-extrabold text-emerald-700 flex items-center justify-center gap-1 mt-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Verified
          </div>
          <div className="text-[9px] text-slate-400 font-mono">KYB Level 3</div>
        </div>

        {/* LEARNING */}
        <div 
          onClick={() => onNavigateModule("academy")}
          className="bg-white p-4 rounded-xl border border-slate-200 text-center space-y-1 shadow-xs cursor-pointer hover:border-slate-400 transition"
        >
          <div className="text-[10px] font-bold uppercase text-slate-400">LEARNING</div>
          <div className="text-lg font-extrabold text-slate-900 mt-1">68%</div>
          <div className="text-[9px] text-blue-900 font-semibold">Academy Progress</div>
        </div>

        {/* BUILDING */}
        <div 
          onClick={() => onNavigateModule("proof")}
          className="bg-white p-4 rounded-xl border border-slate-200 text-center space-y-1 shadow-xs cursor-pointer hover:border-slate-400 transition"
        >
          <div className="text-[10px] font-bold uppercase text-slate-400">BUILDING</div>
          <div className="text-lg font-extrabold text-slate-900 mt-1">12 Builds</div>
          <div className="text-[9px] text-emerald-600 font-semibold">Audited Evidence</div>
        </div>

        {/* MENTORSHIP */}
        <div 
          onClick={() => onNavigateModule("mentorship-hub")}
          className="bg-white p-4 rounded-xl border border-slate-200 text-center space-y-1 shadow-xs cursor-pointer hover:border-slate-400 transition"
        >
          <div className="text-[10px] font-bold uppercase text-slate-400">MENTORSHIP</div>
          <div className="text-lg font-extrabold text-slate-900 mt-1">2 Active Goals</div>
          <div className="text-[9px] text-slate-500 font-medium">Dr. K. V. Sundaram</div>
        </div>

        {/* OPPORTUNITIES */}
        <div 
          onClick={() => onNavigateModule("opportunities")}
          className="bg-white p-4 rounded-xl border border-slate-200 text-center space-y-1 shadow-xs cursor-pointer hover:border-slate-400 transition"
        >
          <div className="text-[10px] font-bold uppercase text-slate-400">OPPORTUNITIES</div>
          <div className="text-lg font-extrabold text-slate-900 mt-1">8 Matches</div>
          <div className="text-[9px] text-emerald-700 font-semibold">Grants & Challenges</div>
        </div>

        {/* ETR */}
        <div 
          onClick={() => onNavigateModule("certification")}
          className="bg-white p-4 rounded-xl border border-slate-200 text-center space-y-1 shadow-xs cursor-pointer hover:border-slate-400 transition"
        >
          <div className="text-[10px] font-bold uppercase text-slate-400">ETR. PROGRESS</div>
          <div className="text-lg font-extrabold text-blue-900 mt-1">72% Complete</div>
          <div className="text-[9px] text-emerald-700 font-semibold">Level 3 Audit</div>
        </div>

      </div>

      {/* RECOMMENDED NEXT ACTION (Exact spec) */}
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-4 shadow-md">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-blue-400" /> RECOMMENDED NEXT ACTION
          </span>
          <span className="text-slate-400 text-xs">Updated 5m ago</span>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white">Validate your next customer segment.</h3>
          <p className="text-slate-300 text-xs leading-relaxed max-w-2xl">
            Based on your 12 logged builds and recent feedback from Dr. K. V. Sundaram, your primary hardware prototype is verified. The next milestone is conducting 5 pricing validation calls using a seasonal subscription framework.
          </p>
        </div>

        <div className="pt-2 flex items-center gap-3">
          <button 
            onClick={() => setTaskCreated(true)}
            className="btn-primary text-xs py-2 px-5 bg-blue-600 hover:bg-blue-500"
          >
            {taskCreated ? "Task Added to Workspace!" : "Create Task"}
          </button>
        </div>
      </div>

    </div>
  );
};
