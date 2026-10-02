"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, ArrowRight, User, Target, AlertCircle, Plus } from "lucide-react";

interface AICopilotShowcaseProps {
  onOpenCopilotApp?: () => void;
}

export const AICopilotShowcase: React.FC<AICopilotShowcaseProps> = ({ onOpenCopilotApp }) => {
  const [showReasoning, setShowReasoning] = useState(false);
  const [taskCreated, setTaskCreated] = useState(false);

  return (
    <section className="bg-white py-14 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            An AI copilot that understands your entrepreneurial journey.
          </h2>
          <p className="text-slate-600 text-sm">
            Not a generic chat window. Contextual execution intelligence connected to your real builds and milestones.
          </p>
        </div>

        {/* Dashboard Showcase */}
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl p-5 sm:p-6 text-white shadow-md border border-slate-800">
          
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-white border border-slate-700">
                <Sparkles className="w-4 h-4 text-slate-300" />
              </div>
              <div>
                <div className="font-bold text-sm text-white">AgriSense AI</div>
                <div className="text-slate-400 text-[11px]">Aarav Sharma • Founder</div>
              </div>
            </div>

            <span className="text-xs text-emerald-400 font-mono bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-800">
              98% Context Sync
            </span>
          </div>

          <div className="pt-4 space-y-4">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase text-slate-400">YOUR NEXT RECOMMENDED ACTION</span>
              <h3 className="text-lg font-bold text-white leading-tight">"Validate your first customer segment."</h3>
              <p className="text-slate-300 text-xs leading-relaxed max-w-2xl">
                Based on your 142 logged builds and recent mentor feedback from Dr. K. V. Sundaram, your hardware sensor is stable. Next: Conduct 5 pricing validation calls using a seasonal subscription framework.
              </p>
            </div>

            {showReasoning && (
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-slate-300 space-y-1">
                <div className="font-bold text-white">Reasoning Synthesis:</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  1. Build #9821 verified telemetry accuracy at 98.4%.<br/>
                  2. Farm managers prefer seasonal revenue-share over upfront purchases.
                </p>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setShowReasoning(!showReasoning)}
                  className="bg-slate-800 hover:bg-slate-700 text-white text-xs px-3 py-1.5 rounded-lg border border-slate-700"
                >
                  {showReasoning ? "Hide Reasoning" : "View Reasoning"}
                </button>
                <button 
                  onClick={() => setTaskCreated(true)}
                  className="btn-primary text-xs py-1.5 px-3 bg-blue-600 hover:bg-blue-500"
                >
                  <Plus className="w-3.5 h-3.5" />
                  {taskCreated ? "Task Created!" : "Create Validation Task"}
                </button>
              </div>

              <button 
                onClick={onOpenCopilotApp}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition font-medium"
              >
                Open Full AI Copilot Console <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
