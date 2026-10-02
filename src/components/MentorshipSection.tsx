"use client";

import React, { useState } from "react";
import { Search, Filter, CheckCircle2, UserCheck, Star, MapPin, Globe, ArrowRight } from "lucide-react";

export const MentorshipSection: React.FC = () => {
  const [selectedMentor, setSelectedMentor] = useState<any | null>(null);
  const [filterIndustry, setFilterIndustry] = useState("All");

  const mentors = [
    {
      id: "m-1",
      number: "01",
      name: "Ananya Mehta",
      role: "Startup & Growth Mentor",
      tags: "SaaS • GTM • Fundraising",
      experience: "12+ Years Experience",
      menteesCount: 48,
      verified: true,
      country: "India",
      language: "English, Hindi",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      bio: "Guided 48+ early-stage SaaS and B2B startups from problem validation to Seed/Series A fundraising.",
      focus: "Market Entry, Unit Economics, Syndicate Pitches"
    },
    {
      id: "m-2",
      number: "02",
      name: "Dr. Vikram Sethi",
      role: "Industrial Hardware Advisor",
      tags: "IoT • Hardware • Agritech",
      experience: "18+ Years Experience",
      menteesCount: 62,
      verified: true,
      country: "Singapore / India",
      language: "English",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      bio: "Former VP of Engineering. Specializing in low-power LoRaWAN sensor hardware and supply chain manufacturing.",
      focus: "Hardware Prototyping, PCB Layout, Field Telemetry"
    },
    {
      id: "m-3",
      number: "03",
      name: "Sarah Jenkins",
      role: "CleanTech & ESG Accelerator Director",
      tags: "CleanTech • Carbon Accounting • ESG",
      experience: "15+ Years Experience",
      menteesCount: 35,
      verified: true,
      country: "UK / SEA",
      language: "English",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
      bio: "Director of SEA CleanTech Hub. Mentoring startups on corporate pilot execution and enterprise procurement.",
      focus: "Corporate Pilots, Regulatory Compliance, ESG Metrics"
    }
  ];

  return (
    <section className="bg-white py-14 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900">
            VERIFIED MENTOR NETWORK
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Find the right mentor for your journey.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Connect with experienced founders, domain experts, and institutional advisors. No vanity advice.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-medium">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-500" />
            <span className="font-semibold text-slate-900">Filter By:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <select className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 font-semibold focus:outline-none">
              <option>Industry: All</option>
              <option>SaaS & AI</option>
              <option>Hardware & IoT</option>
              <option>CleanTech & ESG</option>
              <option>FinTech</option>
            </select>

            <select className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 font-semibold focus:outline-none">
              <option>Stage: All</option>
              <option>Idea / Problem</option>
              <option>MVP Build</option>
              <option>First Customers</option>
              <option>Seed Scaling</option>
            </select>

            <select className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 font-semibold focus:outline-none">
              <option>Country: Global</option>
              <option>India</option>
              <option>Singapore</option>
              <option>UK</option>
              <option>UAE</option>
            </select>
          </div>
        </div>

        {/* Mentor Cards Grid (Clean rectangular cards with simple icons & numbering) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mentors.map((m) => (
            <div key={m.id} className="aisea-card p-6 bg-white border border-slate-200 rounded-xl space-y-4 shadow-xs flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex items-start justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-3">
                    <img src={m.avatar} alt={m.name} className="w-12 h-12 rounded-xl object-cover border border-slate-200" />
                    <div>
                      <h3 className="font-bold text-base text-slate-900">{m.name}</h3>
                      <p className="text-xs text-slate-600 font-medium">{m.role}</p>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-400">{m.number}</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {m.tags}
                  </div>

                  <div className="flex items-center justify-between text-slate-500 pt-1">
                    <span>{m.experience}</span>
                    <span className="font-bold text-slate-800">{m.menteesCount} Mentees</span>
                  </div>

                  <p className="text-slate-600 leading-relaxed text-xs">{m.bio}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="verified-pill text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Mentor
                </span>

                <button 
                  onClick={() => setSelectedMentor(m)}
                  className="btn-primary text-xs py-1.5 px-3"
                >
                  Request Mentorship
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Mentor Profile Modal */}
      {selectedMentor && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200 text-xs">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <img src={selectedMentor.avatar} alt="Mentor" className="w-12 h-12 rounded-xl object-cover" />
                <div>
                  <h3 className="text-base font-bold text-slate-900">{selectedMentor.name}</h3>
                  <p className="text-slate-500">{selectedMentor.role}</p>
                </div>
              </div>
              <button onClick={() => setSelectedMentor(null)} className="text-slate-400 font-bold">✕</button>
            </div>

            <div className="space-y-2 text-slate-700">
              <div className="font-bold text-slate-900">Mentorship Focus:</div>
              <p>{selectedMentor.focus}</p>

              <div className="font-bold text-slate-900 pt-2">Languages & Location:</div>
              <p>{selectedMentor.language} • {selectedMentor.country}</p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
              <button onClick={() => setSelectedMentor(null)} className="btn-secondary text-xs">Close</button>
              <button 
                onClick={() => {
                  alert(`Mentorship session requested with ${selectedMentor.name}!`);
                  setSelectedMentor(null);
                }} 
                className="btn-primary text-xs"
              >
                Confirm Request
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
