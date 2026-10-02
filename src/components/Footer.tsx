"use client";

import React, { useState } from "react";
import { ShieldCheck, Globe, ArrowUpRight, X } from "lucide-react";

interface FooterProps {
  onNavigateApp?: (moduleName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateApp }) => {
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <ShieldCheck className="w-6 h-6 text-blue-400" />
            <span>AISEA GLOBAL</span>
          </div>
          <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
            Make Entrepreneurship a Verified, Trusted, Connected and Scalable Professional Identity.
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-2 text-slate-300">
            <span className="flex items-center gap-1.5 text-xs bg-slate-800 px-2.5 py-1 rounded border border-slate-700">
              <Globe className="w-3.5 h-3.5 text-emerald-400" /> Global Verified Network
            </span>
            <span className="text-xs bg-slate-800 px-2.5 py-1 rounded border border-slate-700">
              Etr. Level 3 Governance
            </span>
          </div>
        </div>

        {/* Column 1: Ecosystem Infrastructure */}
        <div className="space-y-3">
          <h4 className="text-slate-200 font-semibold uppercase tracking-wider text-[11px]">Ecosystem Infrastructure</h4>
          <ul className="space-y-2 text-slate-400">
            <li><button onClick={() => onNavigateApp?.("identity")} className="hover:text-white transition flex items-center gap-1">Entrepreneur Identity <ArrowUpRight className="w-3 h-3 text-slate-600" /></button></li>
            <li><button onClick={() => onNavigateApp?.("proof")} className="hover:text-white transition">Proof-of-Building</button></li>
            <li><button onClick={() => onNavigateApp?.("workspace")} className="hover:text-white transition">Startup Workspace</button></li>
            <li><button onClick={() => onNavigateApp?.("copilot")} className="hover:text-white transition">AI Journey Copilot</button></li>
            <li><button onClick={() => onNavigateApp?.("certification")} className="hover:text-white transition">Etr. Credential Standard</button></li>
          </ul>
        </div>

        {/* Column 2: Stakeholder Solutions */}
        <div className="space-y-3">
          <h4 className="text-slate-200 font-semibold uppercase tracking-wider text-[11px]">Stakeholder Solutions</h4>
          <ul className="space-y-2 text-slate-400">
            <li><button onClick={() => onNavigateApp?.("student")} className="hover:text-white transition">Students & AISEA NextGen</button></li>
            <li><button onClick={() => onNavigateApp?.("mentorship")} className="hover:text-white transition">Mentors & Experts</button></li>
            <li><button onClick={() => onNavigateApp?.("campus")} className="hover:text-white transition">Universities (Campus OS)</button></li>
            <li><button onClick={() => onNavigateApp?.("corporate")} className="hover:text-white transition">Corporates & Pilots</button></li>
            <li><button onClick={() => onNavigateApp?.("dealflow")} className="hover:text-white transition">Investors & Deal Flow</button></li>
          </ul>
        </div>

        {/* Column 3: Trust & Governance */}
        <div className="space-y-3">
          <h4 className="text-slate-200 font-semibold uppercase tracking-wider text-[11px]">Trust & Governance</h4>
          <ul className="space-y-2 text-slate-400">
            <li><button onClick={() => onNavigateApp?.("trust")} className="hover:text-white transition">Trust & Safety Center</button></li>
            <li><button onClick={() => onNavigateApp?.("community")} className="hover:text-white transition">Global Chapters</button></li>
            <li><button onClick={() => onNavigateApp?.("honours")} className="hover:text-white transition">Global Honours</button></li>
            <li><button onClick={() => onNavigateApp?.("admin")} className="hover:text-white transition">Admin Audit Center</button></li>
            <li><button onClick={() => setShowTermsModal(true)} className="hover:text-white transition text-slate-400">Terms & Privacy ISO Compliance</button></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <div>
          © 2026 AISEA Global. All Rights Reserved. Institutional Entrepreneurship Infrastructure.
        </div>
        <div className="flex items-center gap-6">
          <span>Identity Security Standard</span>
          <span>Verified Audit Pipeline</span>
          <span>Zero Guaranteed Funding Claim Disclaimer</span>
        </div>
      </div>

      {/* Terms & Privacy Compliance Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-xs z-50 flex items-center justify-center p-4 text-slate-900">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="font-extrabold text-sm text-slate-900">Terms & Privacy ISO Compliance</span>
              <button onClick={() => setShowTermsModal(false)} className="text-slate-400 font-bold">✕</button>
            </div>

            <div className="space-y-2 text-slate-700 leading-relaxed max-h-60 overflow-y-auto">
              <h5 className="font-bold text-slate-900">1. Cryptographic Identity & Evidence Verification Standard</h5>
              <p>AISEA Global processes user identity verification documents using ISO-compliant encrypted storage. All evidence logs posted to Proof-of-Building undergo cryptographic timestamping.</p>

              <h5 className="font-bold text-slate-900 pt-2">2. Zero Guaranteed Funding Disclaimer</h5>
              <p>AISEA Global provides transparent metrics to accredited investors. AISEA does not guarantee funding or capital investments.</p>
            </div>

            <button onClick={() => setShowTermsModal(false)} className="btn-primary w-full text-xs py-2">
              Acknowledge & Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
