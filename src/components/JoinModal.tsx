"use client";

import React, { useState } from "react";
import { ShieldCheck, CheckCircle2, ArrowRight, User, Building, GraduationCap, X, FileText, Upload } from "lucide-react";

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCompleteProfile: (profileData: any) => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  onCompleteProfile
}) => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("Entrepreneur");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [industry, setIndustry] = useState("Technology • SaaS");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [idSubmitted, setIdSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const profile = {
      name: name || "Rahul Sharma",
      role: title || "Founder & CEO",
      organization: organization || "AgriSense AI",
      industry,
      location: location || "Bengaluru, India",
      bio: bio || "Building verified precision agriculture sensors and telemetry models for smallholder farmers.",
      roleCategory: role
    };
    onCompleteProfile(profile);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 text-xs relative">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-slate-900">Join AISEA Global</h2>
              <p className="text-slate-500 font-medium text-[11px]">Create your verified professional identity & portfolio</p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 font-bold p-1 text-base"
          >
            ✕
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-slate-500 font-semibold">
          <div className={`flex items-center gap-1.5 ${step >= 1 ? "text-slate-900 font-bold" : ""}`}>
            <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center font-bold">1</span>
            <span>Select Role</span>
          </div>
          <span className="text-slate-300">→</span>
          <div className={`flex items-center gap-1.5 ${step >= 2 ? "text-slate-900 font-bold" : ""}`}>
            <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${step >= 2 ? "bg-slate-900 text-white" : "bg-slate-200 text-slate-600"}`}>2</span>
            <span>Profile Details</span>
          </div>
          <span className="text-slate-300">→</span>
          <div className={`flex items-center gap-1.5 ${step >= 3 ? "text-slate-900 font-bold" : ""}`}>
            <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${step >= 3 ? "bg-slate-900 text-white" : "bg-slate-200 text-slate-600"}`}>3</span>
            <span>Verification</span>
          </div>
        </div>

        {/* STEP 1: SELECT STAKEHOLDER ROLE */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="font-bold text-sm text-slate-900">Choose your primary ecosystem role:</h3>
            
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: "Entrepreneur", title: "Entrepreneur / Founder", desc: "Build startup, log builds, access deal flow" },
                { id: "Student", title: "Student (AISEA NextGen)", desc: "Learn, build projects, apply for gigs" },
                { id: "Mentor", title: "Mentor / Advisor", desc: "Guide founders, review build logs" },
                { id: "Expert", title: "Domain Expert", desc: "Provide specialized legal/tech advisory" },
                { id: "Corporate", title: "Corporate Partner", desc: "Post challenges, discover startup pilots" },
                { id: "Institution", title: "University Incubator", desc: "Manage campus startups & placements" }
              ].map((r) => (
                <div 
                  key={r.id}
                  onClick={() => setRole(r.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer space-y-1 transition ${
                    role === r.id ? "bg-slate-900 text-white border-slate-900 shadow-sm" : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <div className="font-bold text-xs flex items-center justify-between">
                    <span>{r.title}</span>
                    {role === r.id && <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />}
                  </div>
                  <p className={`text-[10px] leading-tight ${role === r.id ? "text-slate-300" : "text-slate-500"}`}>{r.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <button onClick={() => setStep(2)} className="btn-primary text-xs py-2 px-5">
                Next: Profile Details <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: PROFILE DETAILS */}
        {step === 2 && (
          <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="space-y-4">
            <h3 className="font-bold text-sm text-slate-900">Enter your professional information:</h3>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-800 block mb-1">Full Name:</label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none focus:bg-white focus:border-slate-400"
                />
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Role / Title:</label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Founder & CEO"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none focus:bg-white focus:border-slate-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-800 block mb-1">Startup / Organization:</label>
                <input 
                  type="text"
                  placeholder="e.g. AgriSense AI"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none focus:bg-white focus:border-slate-400"
                />
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Location:</label>
                <input 
                  type="text"
                  placeholder="e.g. Bengaluru, India"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none focus:bg-white focus:border-slate-400"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-800 block mb-1">Executive Bio:</label>
              <textarea 
                rows={2}
                placeholder="Short bio describing your background, venture focus, and technical building experience..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none focus:bg-white focus:border-slate-400"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button type="button" onClick={() => setStep(1)} className="btn-secondary text-xs">Back</button>
              <button type="submit" className="btn-primary text-xs py-2 px-5">
                Next: Identity Verification <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: IDENTITY VERIFICATION & SUBMIT */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="font-bold text-sm text-slate-900">Initialize Identity Verification:</h3>
            <p className="text-slate-600 text-xs">
              AISEA Global requires government ID and optional business incorporation verification for complete Etr Level 3 badge issuance.
            </p>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-blue-800" /> Government Passport / National ID:
                </span>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${idSubmitted ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-slate-200 text-slate-600"}`}>
                  {idSubmitted ? "Document Attached" : "Pending Upload"}
                </span>
              </div>

              <button 
                type="button"
                onClick={() => setIdSubmitted(true)}
                className="btn-secondary w-full text-xs py-2 flex items-center justify-center gap-1.5"
              >
                <Upload className="w-3.5 h-3.5" /> {idSubmitted ? "Document Re-attached (Verified Encryption)" : "Upload ID Document / Selfie Verification"}
              </button>
            </div>

            <div className="bg-blue-50 text-blue-900 p-3 rounded-xl border border-blue-200 text-[11px] space-y-1">
              <div className="font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-700" /> Etr. Cryptographic Handle Initialization:
              </div>
              <p className="text-blue-800 font-mono text-[10px]">
                etr.aisea.global/{name ? name.toLowerCase().replace(/[^a-z]/g, "-") : "new-founder"}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button type="button" onClick={() => setStep(2)} className="btn-secondary text-xs">Back</button>
              <button type="submit" className="btn-primary text-xs py-2.5 px-6">
                Complete Registration & View Portfolio
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
