"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";

interface JourneyTimelineProps {
  onJoin?: () => void;
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ onJoin }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(2);

  const journeySteps = [
    { number: "01", title: "Join", short: "Create account & set primary stakeholder role.", detail: "Choose whether you are an Entrepreneur, Student, Mentor, Expert, Corporate, or University Partner." },
    { number: "02", title: "Identity", short: "Complete KYC & business verification.", detail: "Submit identity documents and business incorporation details for legal verification." },
    { number: "03", title: "Learn", short: "Complete AISEA NextGen Academy courses & practical challenges.", detail: "Master the Proof-of-Building methodology. Complete practical milestone assignments." },
    { number: "04", title: "Build", short: "Log daily work & customer validation in Today's Build.", detail: "Document your daily progress, customer discovery interviews, and software/hardware releases." },
    { number: "05", title: "Prove", short: "Gather mentor feedback & evidence badges.", detail: "Submit milestone evidence for review by accredited domain mentors." },
    { number: "06", title: "Connect", short: "AI-matched co-founders, mentors & corporate partners.", detail: "Algorithmic matching pairs your exact stage, industry, and hardware/software needs with verified mentors." },
    { number: "07", title: "Earn", short: "Take on student gigs, paid micro-projects & corporate pilots.", detail: "Students earn stipends and build real portfolios; startups secure paid commercial pilot contracts." },
    { number: "08", title: "Grow", short: "Execute milestones in Startup Workspace.", detail: "Track key metrics, team roles, board updates, and customer acquisition inside your workspace." },
    { number: "09", title: "Verify", short: "Dual AI & Human review pipeline issues audit certificate.", detail: "Pass formal audit verification for financial logs, traction metrics, and technical IP." },
    { number: "10", title: "Fund", short: "Present audited data vault to verified syndicate investors.", detail: "Grant institutional investors direct access to your verified traction vault and mentor endorsements." },
    { number: "11", title: "Scale", short: "Expand into international regional chapters & global markets.", detail: "Tap into AISEA Global Chapters across India, Singapore, Dubai, London, and Silicon Valley." }
  ];

  return (
    <section className="bg-slate-50 py-14 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Your entrepreneurial journey, connected.
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            From initial registration to international expansion, every stage builds verifiable evidence and trust.
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-2.5 pt-2">
          {journeySteps.map((step, idx) => {
            const isOpen = expandedIndex === idx;
            return (
              <div 
                key={step.number}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition"
              >
                <button
                  onClick={() => setExpandedIndex(isOpen ? null : idx)}
                  className="w-full p-3.5 flex items-center justify-between text-left hover:bg-slate-50 transition"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-7 h-7 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        {step.title}
                        {isOpen && <span className="text-[10px] bg-slate-100 text-slate-700 font-semibold px-2 py-0.5 rounded border border-slate-200">Active</span>}
                      </h3>
                      <p className="text-xs text-slate-500 font-normal">{step.short}</p>
                    </div>
                  </div>

                  <div className="text-slate-400">
                    {isOpen ? <ChevronDown className="w-4 h-4 text-slate-900" /> : <ChevronRight className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 bg-slate-50 border-t border-slate-100 text-xs text-slate-700 leading-relaxed space-y-2">
                    <p className="text-slate-600">{step.detail}</p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Verifiable Outcome Required
                      </span>
                      <button 
                        onClick={onJoin}
                        className="text-xs font-semibold text-slate-900 hover:underline flex items-center gap-1"
                      >
                        Execute Stage {step.number} <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
