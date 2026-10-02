"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  CheckCircle2, 
  BookOpen, 
  FileText, 
  PlayCircle, 
  CheckSquare, 
  Award, 
  QrCode, 
  Lock, 
  ChevronRight, 
  ChevronDown,
  Sparkles,
  Upload,
  ArrowRight
} from "lucide-react";

export const EtrCertification: React.FC = () => {
  const [activeModuleId, setActiveModuleId] = useState<number | null>(1);
  const [selectedLesson, setSelectedLesson] = useState<string | null>("l-1.1");
  const [showQrModal, setShowQrModal] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [evidenceSubmitted, setEvidenceSubmitted] = useState(false);

  // 6 Structured Certification Modules
  const certificationModules = [
    {
      id: 1,
      number: "01",
      title: "Module 01: Entrepreneur Operating System & Problem Validation",
      status: "Completed",
      progress: 100,
      credits: "20 Etr Credits",
      description: "Master the core Proof-of-Building methodology, problem validation frameworks, and verified identity standards.",
      lessons: [
        { id: "l-1.1", title: "1.1 Verified Entrepreneur Identity Standard", duration: "15 mins", type: "Video & Reading", status: "Completed" },
        { id: "l-1.2", title: "1.2 Problem Statement & Customer Friction Framework", duration: "25 mins", type: "Reading", status: "Completed" },
        { id: "l-1.3", title: "Practical Assignment: Problem Validation Record", duration: "1 hour", type: "Assignment", status: "Completed" }
      ]
    },
    {
      id: 2,
      number: "02",
      title: "Module 02: Customer Discovery & Qualitative Evidence Auditing",
      status: "Completed",
      progress: 100,
      credits: "25 Etr Credits",
      description: "Conduct structured 45-minute qualitative customer interviews and log verifiable transcripts into the AISEA vault.",
      lessons: [
        { id: "l-2.1", title: "2.1 Structured Qualitative Interview Design", duration: "20 mins", type: "Video", status: "Completed" },
        { id: "l-2.2", title: "2.2 Synthesizing Customer Pain Points", duration: "30 mins", type: "Case Study", status: "Completed" },
        { id: "l-2.3", title: "Practical Assignment: Submit 5 Verified Interview Transcripts", duration: "2 hours", type: "Evidence Upload", status: "Completed" }
      ]
    },
    {
      id: 3,
      number: "03",
      title: "Module 03: Proof-of-Building & Hardware/Software Architecture",
      status: "In Progress",
      progress: 75,
      credits: "30 Etr Credits",
      description: "Build functional prototypes (software MVP releases or IoT hardware sensor schematics) and log daily commits.",
      lessons: [
        { id: "l-3.1", title: "3.1 Immutable Proof-of-Building Commit Logs", duration: "20 mins", type: "Video", status: "Completed" },
        { id: "l-3.2", title: "3.2 Telemetry & Data Schema Standards", duration: "35 mins", type: "Reading", status: "Completed" },
        { id: "l-3.3", title: "Practical Challenge: Submit MVP Code/Hardware Spec", duration: "3 hours", type: "Practical Challenge", status: "In Progress" }
      ]
    },
    {
      id: 4,
      number: "04",
      title: "Module 04: Financial Modeling & Corporate KYB Preparedness",
      status: "Locked",
      progress: 0,
      credits: "25 Etr Credits",
      description: "Unit economics, seasonal revenue models, incorporation documentation, and audited cap table preparation.",
      lessons: [
        { id: "l-4.1", title: "4.1 B2B SaaS & Hardware Unit Economics", duration: "25 mins", type: "Video", status: "Locked" },
        { id: "l-4.2", title: "4.2 KYB Business Verification & Cap Table Audit", duration: "40 mins", type: "Reading", status: "Locked" },
        { id: "l-4.3", title: "Quiz: Governance & Financial Audit Exam", duration: "45 mins", type: "Exam", status: "Locked" }
      ]
    },
    {
      id: 5,
      number: "05",
      title: "Module 05: Practical Milestone Defense & Accredited Peer Review",
      status: "Locked",
      progress: 0,
      credits: "35 Etr Credits",
      description: "Present your verified build portfolio before accredited domain mentors and pass defense examination.",
      lessons: [
        { id: "l-5.1", title: "5.1 Preparing Portfolio Evidence for Mentor Audit", duration: "30 mins", type: "Video", status: "Locked" },
        { id: "l-5.2", title: "Practical Defense: 30-min Session with Accredited Mentor", duration: "1 hour", type: "Live Defense", status: "Locked" }
      ]
    },
    {
      id: 6,
      number: "06",
      title: "Module 06: Final AI & Human Accreditation Audit (Credential Issuance)",
      status: "Locked",
      progress: 0,
      credits: "Master Badge",
      description: "Dual AI OCR document check and final AISEA Certification Board sign-off for cryptographic Etr issuance.",
      lessons: [
        { id: "l-6.1", title: "6.1 Dual AI & Human Verification Review", duration: "Automated", type: "System Audit", status: "Locked" },
        { id: "l-6.2", title: "Final Certification: Issue Cryptographic Etr. Badge", duration: "Instant", type: "Certificate", status: "Locked" }
      ]
    }
  ];

  return (
    <div className="bg-slate-100 min-h-screen py-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Course-Style Header Banner */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950 px-3 py-1 rounded border border-blue-800">
                  OFFICIAL ACCREDITED COURSE PATHWAY
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-0.5 rounded font-semibold">
                  Overall Progress: 72%
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                Etr. Professional Certification Pathway
              </h1>
              <p className="text-xs text-slate-300 max-w-2xl">
                A 6-module course-based certification standard. Complete lessons, pass validation exams, and submit audited build evidence to earn your cryptographic Etr. Credential.
              </p>
            </div>

            <button 
              onClick={() => setShowQrModal(true)}
              className="btn-primary text-xs bg-emerald-700 hover:bg-emerald-600 shrink-0 py-2.5 px-4"
            >
              <QrCode className="w-4 h-4" /> Preview Etr. Credential Card
            </button>
          </div>

          {/* Overall Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-300">Course Progress (4/6 Modules Completed)</span>
              <span className="text-emerald-400 font-bold">135 Etr Credits Earned</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-700">
              <div className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500 w-[72%]"></div>
            </div>
          </div>
        </div>

        {/* Main 2-Column Course Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Module-by-Module Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            <div className="font-extrabold text-slate-900 text-sm uppercase tracking-wider">
              Course Modules (6 Modules)
            </div>

            <div className="space-y-3">
              {certificationModules.map((mod) => {
                const isOpen = activeModuleId === mod.id;
                const isLocked = mod.status === "Locked";

                return (
                  <div 
                    key={mod.id}
                    className={`bg-white border rounded-2xl overflow-hidden transition shadow-xs ${
                      isOpen ? "border-slate-900 ring-1 ring-slate-900/10" : "border-slate-200"
                    }`}
                  >
                    {/* Module Header Button */}
                    <button
                      onClick={() => setActiveModuleId(isOpen ? null : mod.id)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-9 h-9 rounded-xl font-extrabold text-xs flex items-center justify-center shrink-0 ${
                          mod.status === "Completed" 
                            ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                            : mod.status === "In Progress"
                            ? "bg-blue-900 text-white"
                            : "bg-slate-100 text-slate-400 border border-slate-200"
                        }`}>
                          {mod.status === "Completed" ? <CheckCircle2 className="w-5 h-5 text-emerald-700" /> : mod.number}
                        </span>

                        <div>
                          <h3 className="font-bold text-sm text-slate-900">{mod.title}</h3>
                          <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-0.5">
                            <span>{mod.lessons.length} Lessons</span>
                            <span>•</span>
                            <span className="font-semibold text-blue-900">{mod.credits}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-semibold ${
                          mod.status === "Completed"
                            ? "text-emerald-700"
                            : mod.status === "In Progress"
                            ? "text-blue-900 font-bold"
                            : "text-slate-400"
                        }`}>
                          {mod.status}
                        </span>

                        {isLocked ? (
                          <Lock className="w-4 h-4 text-slate-300" />
                        ) : isOpen ? (
                          <ChevronDown className="w-4 h-4 text-slate-900" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                    </button>

                    {/* Module Lessons Drawer */}
                    {isOpen && (
                      <div className="p-5 bg-slate-50 border-t border-slate-100 space-y-4 text-xs">
                        <p className="text-slate-600 leading-relaxed">{mod.description}</p>

                        <div className="space-y-2">
                          <div className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">Lessons & Practical Assignments:</div>
                          
                          {mod.lessons.map((lesson) => (
                            <div 
                              key={lesson.id}
                              onClick={() => setSelectedLesson(lesson.id)}
                              className={`p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition ${
                                selectedLesson === lesson.id 
                                  ? "bg-white border-blue-900 shadow-xs font-semibold text-slate-900" 
                                  : "bg-white/80 border-slate-200 text-slate-700 hover:border-slate-300"
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                {lesson.type.includes("Assignment") || lesson.type.includes("Challenge") ? (
                                  <FileText className="w-4 h-4 text-amber-600 shrink-0" />
                                ) : (
                                  <PlayCircle className="w-4 h-4 text-blue-800 shrink-0" />
                                )}
                                <div>
                                  <div className="font-bold text-slate-900">{lesson.title}</div>
                                  <div className="text-[10px] text-slate-400 font-medium">{lesson.type} • {lesson.duration}</div>
                                </div>
                              </div>

                              <span className={`text-xs font-semibold ${
                                lesson.status === "Completed"
                                  ? "text-emerald-700"
                                  : lesson.status === "In Progress"
                                  ? "text-amber-700 font-bold"
                                  : "text-slate-400"
                              }`}>
                                {lesson.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Lesson / Assignment Player & Quiz Console */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-5 shadow-xs sticky top-20 text-xs">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  ACTIVE LESSON CONSOLE
                </span>
                <span className="text-slate-400 text-[11px] font-mono">ID: {selectedLesson || "l-3.3"}</span>
              </div>

              {/* Lesson Details */}
              <div className="space-y-3">
                <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                  {selectedLesson === "l-3.3" 
                    ? "Module 03 Practical Challenge: Submit MVP Code/Hardware Spec" 
                    : "Lesson 3.2: Telemetry & Data Schema Standards"}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  Submit functional code repository commit or hardware CAD schematic for AI sensor validation check.
                </p>

                {/* Practical Evidence Submission Box */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Upload className="w-4 h-4 text-blue-800" /> Evidence Submission Input:
                  </div>

                  <textarea 
                    rows={3}
                    placeholder="Paste GitHub commit hash, sensor telemetry URL, or upload PDF evidence..."
                    className="w-full p-3 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-slate-400"
                  />

                  <button 
                    onClick={() => setEvidenceSubmitted(true)}
                    className="btn-primary w-full text-xs py-2"
                  >
                    Submit Evidence for AI & Mentor Audit
                  </button>

                  {evidenceSubmitted && (
                    <div className="bg-emerald-50 text-emerald-800 p-2.5 rounded-lg border border-emerald-200 font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Evidence submitted to Module 03 audit pipeline!
                    </div>
                  )}
                </div>
              </div>

              {/* Quiz Module Test */}
              <div className="pt-3 border-t border-slate-100 space-y-3">
                <div className="font-extrabold text-slate-900 text-xs flex items-center justify-between">
                  <span>Module 03 Knowledge Assessment</span>
                  <span className="text-[10px] text-blue-900 font-mono">3 Questions</span>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-slate-700">
                  <p className="font-bold text-slate-900">Q: What is the primary requirement for verified hardware telemetry logs?</p>
                  <div className="space-y-1.5 pt-1 text-[11px]">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="quiz" className="accent-slate-900" defaultChecked />
                      <span>Cryptographic timestamping & verified LoRa sleep duty cycles.</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="quiz" className="accent-slate-900" />
                      <span>Unverified self-reported hardware battery voltage.</span>
                    </label>
                  </div>
                </div>

                <button 
                  onClick={() => setQuizSubmitted(true)}
                  className="btn-secondary w-full text-xs py-2"
                >
                  {quizSubmitted ? "Quiz Score: 100% Passed!" : "Submit Module Quiz"}
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* QR Certificate Preview Modal */}
      {showQrModal && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 text-center space-y-4 shadow-2xl border border-slate-200 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-bold text-slate-900">Etr. Course Credential Standard</span>
              <button onClick={() => setShowQrModal(false)} className="text-slate-400 font-bold">✕</button>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl inline-block mx-auto">
              <div className="w-40 h-40 bg-slate-900 rounded-lg p-2 flex flex-col justify-between items-center text-white">
                <QrCode className="w-32 h-32 text-white" />
                <span className="text-[9px] font-mono text-emerald-400">VERIFIED #ETR-9821</span>
              </div>
            </div>

            <p className="text-slate-600 text-[11px]">
              Module-wise course certificate issued upon 100% course completion & mentor defense.
            </p>

            <button onClick={() => setShowQrModal(false)} className="btn-secondary w-full text-xs">
              Close Preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
