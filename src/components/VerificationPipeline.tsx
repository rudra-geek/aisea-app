"use client";

import React from "react";
import { FileText, Cpu, ShieldAlert, UserCheck, CheckCircle2, FileCheck } from "lucide-react";

export const VerificationPipeline: React.FC = () => {
  const steps = [
    { title: "DOCUMENT", sub: "Upload KYB/KYC & Evidence", icon: FileText, desc: "Legal incorporation, passports, code commits & transcripts." },
    { title: "AI CHECK", sub: "Automated Fraud & Spec Parsing", icon: Cpu, desc: "OCR document validation, syntax check & timestamping." },
    { title: "RISK SCREENING", sub: "Global Sanctions & Registry", icon: ShieldAlert, desc: "Cross-checked against government business registries." },
    { title: "HUMAN REVIEW", sub: "Domain Expert Evaluation", icon: UserCheck, desc: "Accredited mentors inspect validation claims & prototypes." },
    { title: "VERIFIED", sub: "Issue Etr. Credential Badge", icon: CheckCircle2, desc: "Cryptographic signature attached to profile & deal vault." },
    { title: "AUDIT RECORD", sub: "Immutable History Vault", icon: FileCheck, desc: "Auditable by institutional syndicates, banks & universities." }
  ];

  return (
    <section className="bg-slate-900 text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Trust is built on evidence.
          </h2>
          <p className="text-slate-400 text-sm">
            Every credential and milestone claim undergoes a multi-layer verification pipeline combining AI analysis with expert human oversight.
          </p>
        </div>

        {/* Pipeline Nodes Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 text-slate-300 flex items-center justify-center border border-slate-700">
                    <Icon className="w-4 h-4 text-slate-300" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500">0{idx + 1}</span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-bold text-slate-200">{step.title}</div>
                  <div className="text-[11px] font-semibold text-slate-300 leading-tight">{step.sub}</div>
                  <p className="text-[10px] text-slate-400 leading-normal pt-1">{step.desc}</p>
                </div>

                <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Ready
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
