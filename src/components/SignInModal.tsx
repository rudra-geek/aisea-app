"use client";

import React, { useState } from "react";
import { ShieldCheck, ArrowRight, User } from "lucide-react";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignInSuccess: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({
  isOpen,
  onClose,
  onSignInSuccess
}) => {
  const [email, setEmail] = useState("rahul.sharma@agrisense.io");
  const [password, setPassword] = useState("••••••••••••");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignInSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-5 shadow-2xl border border-slate-200 text-xs relative">
        
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-900" />
            <span className="font-extrabold text-slate-900 text-sm">Sign In to AISEA Global</span>
          </div>
          <button onClick={onClose} className="text-slate-400 font-bold text-sm">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-bold text-slate-800 block mb-1">Email / Etr Handle:</label>
            <input 
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:bg-white focus:border-slate-400"
            />
          </div>

          <div>
            <label className="font-bold text-slate-800 block mb-1">Password:</label>
            <input 
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:bg-white focus:border-slate-400"
            />
          </div>

          <button type="submit" className="btn-primary w-full text-xs py-2.5">
            Sign In to Console <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
};
