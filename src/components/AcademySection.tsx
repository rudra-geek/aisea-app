"use client";

import React, { useState } from "react";
import { BookOpen, CheckCircle2, ArrowRight, Play, Award, GraduationCap } from "lucide-react";

export const AcademySection: React.FC = () => {
  const categories = ["All", "Entrepreneurship", "Business", "Marketing", "Finance", "Technology", "Leadership", "Startup Building"];
  const [activeCategory, setActiveCategory] = useState("All");

  const courses = [
    {
      title: "Startup Fundamentals & Customer Validation",
      org: "AISEA NextGen Academy",
      meta: "Beginner • 6 Modules",
      category: "Entrepreneurship",
      etrCredits: "+20 Etr Credits"
    },
    {
      title: "Proof-of-Building & Technical Architecture",
      org: "AISEA NextGen Academy",
      meta: "Intermediate • 8 Modules",
      category: "Startup Building",
      etrCredits: "+30 Etr Credits"
    },
    {
      title: "Financial Modeling & KYB Compliance",
      org: "AISEA NextGen Academy",
      meta: "Advanced • 5 Modules",
      category: "Finance",
      etrCredits: "+25 Etr Credits"
    },
    {
      title: "Go-to-Market & B2B Pilot Acquisition",
      org: "AISEA NextGen Academy",
      meta: "Intermediate • 6 Modules",
      category: "Marketing",
      etrCredits: "+20 Etr Credits"
    }
  ];

  return (
    <section className="bg-white py-14 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900">
            VENTURE CREATION EDUCATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            AISEA NextGen Academy
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mt-1">
            Practical entrepreneurship pathways connected directly with your Etr. certification audit.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-1 overflow-x-auto border-b border-slate-200 pb-3 text-xs font-semibold text-slate-600">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition ${
                activeCategory === c ? "bg-slate-900 text-white font-bold" : "hover:bg-slate-100 text-slate-700"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <div key={idx} className="aisea-card p-5 bg-white border border-slate-200 rounded-xl space-y-4 shadow-xs flex flex-col justify-between">
              
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5 text-blue-300" />
                </div>

                <div>
                  <h3 className="font-bold text-sm text-slate-900 leading-snug">{course.title}</h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">{course.org}</p>
                </div>

                <div className="text-xs text-slate-600 space-y-1">
                  <div>{course.meta}</div>
                  <div className="text-blue-900 font-bold text-[11px]">{course.etrCredits}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <button 
                  onClick={() => alert(`Starting course: ${course.title}`)}
                  className="btn-primary w-full text-xs py-1.5"
                >
                  Start Learning
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
