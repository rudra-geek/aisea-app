"use client";

import React, { useState } from "react";
import { ShieldCheck, Search } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenJoinModal: () => void;
  onOpenSignInModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenJoinModal,
  onOpenSignInModal
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const mainNavLinks = [
    { id: "home", label: "Home" },
    { id: "learn", label: "Learn" },
    { id: "mentorship", label: "Mentorship" },
    { id: "opportunities", label: "Opportunities" },
    { id: "my-aisea", label: "My AISEA" },
    { id: "workspace", label: "Workspace" },
    { id: "certification", label: "Etr. Certification" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* LEFT: AISEA GLOBAL Logo */}
        <div 
          className="flex items-center gap-2.5 cursor-pointer shrink-0" 
          onClick={() => setActiveTab("home")}
        >
          <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-xs border border-slate-800">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <div className="font-extrabold text-slate-900 text-lg tracking-tight leading-none">
              AISEA <span className="text-blue-900 font-semibold">GLOBAL</span>
            </div>
            <div className="text-[9px] text-slate-500 font-medium tracking-wider uppercase mt-0.5">
              Verified Entrepreneur Network
            </div>
          </div>
        </div>

        {/* CENTER: Main Seamless Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-700">
          {mainNavLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`transition py-5 border-b-2 whitespace-nowrap ${
                  isActive 
                    ? "text-slate-900 border-slate-900 font-bold" 
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* RIGHT: Search, Sign In, Join AISEA */}
        <div className="flex items-center gap-3 shrink-0">
          
          <div className="relative hidden md:block w-44">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 border border-slate-200 rounded-lg pl-8 pr-2 py-1.5 text-xs focus:bg-white focus:outline-none focus:border-slate-400 transition"
            />
          </div>

          <button 
            onClick={onOpenSignInModal}
            className="text-xs font-semibold text-slate-700 hover:text-slate-900 px-2.5 py-1.5"
          >
            Sign In
          </button>

          <button 
            onClick={onOpenJoinModal}
            className="btn-primary text-xs py-1.5 px-4 shadow-xs"
          >
            Join AISEA
          </button>
        </div>

      </div>
    </header>
  );
};
