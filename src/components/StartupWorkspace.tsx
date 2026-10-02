"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  Target, 
  CheckSquare, 
  FolderKanban, 
  FileText, 
  Users, 
  Award, 
  Sparkles, 
  Plus, 
  CheckCircle2, 
  Clock, 
  Upload, 
  Download, 
  UserCheck, 
  ChevronRight,
  AlertCircle
} from "lucide-react";

export const StartupWorkspace: React.FC = () => {
  const [workspaceTab, setWorkspaceTab] = useState<"Overview" | "Projects" | "Tasks" | "Files" | "Team" | "Milestones" | "MentorFeedback">("Overview");

  // Interactive Task List State
  const [tasks, setTasks] = useState([
    { id: "t-1", title: "Conduct 5 pricing validation calls with Karnataka cooperatives", assignee: "Aarav Sharma", priority: "High", status: "In Progress", dueDate: "Oct 05, 2026" },
    { id: "t-2", title: "Stress-test low-power LoRa sleep duty cycles for sensor node V2", assignee: "Michael Zhang", priority: "High", status: "In Progress", dueDate: "Oct 08, 2026" },
    { id: "t-3", title: "Finalize audited Q4 financial model and unit economics sheet", assignee: "Priya Nair", priority: "Medium", status: "To Do", dueDate: "Oct 12, 2026" },
    { id: "t-4", title: "Deploy V2 soil probe telemetry endpoint to 5 trial farms", assignee: "Aarav Sharma", priority: "High", status: "Done", dueDate: "Sept 30, 2026" }
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskPriority, setNewTaskPriority] = useState("High");

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask = {
      id: `t-${Date.now()}`,
      title: newTaskTitle,
      assignee: "Aarav Sharma",
      priority: newTaskPriority,
      status: "To Do",
      dueDate: "Oct 15, 2026"
    };

    setTasks([newTask, ...tasks]);
    setNewTaskTitle("");
  };

  const toggleTaskStatus = (id: string) => {
    setTasks(tasks.map(t => {
      if (t.id === id) {
        const nextStatus = t.status === "Done" ? "In Progress" : "Done";
        return { ...t, status: nextStatus };
      }
      return t;
    }));
  };

  return (
    <div className="bg-slate-100 min-h-screen py-6 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Workspace Header */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                <Briefcase className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <h1 className="text-2xl font-extrabold text-slate-900">AgriSense AI — Startup Workspace</h1>
                <p className="text-xs text-slate-500 font-medium">Seed Stage • Precision AgTech & IoT • Verified Level 3 Audit</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Audit Score: 98/100
            </span>
          </div>
        </div>

        {/* Workspace Inner Navigation Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto bg-white p-2 rounded-2xl border border-slate-200 text-xs font-bold shadow-2xs">
          {[
            { id: "Overview", label: "Overview & Dashboard", icon: Briefcase },
            { id: "Projects", label: "Projects (3)", icon: FolderKanban },
            { id: "Tasks", label: "Tasks & Execution", icon: CheckSquare },
            { id: "Files", label: "Files & Pitch Deck", icon: FileText },
            { id: "Team", label: "Team Roster (3)", icon: Users },
            { id: "Milestones", label: "Milestones Roadmap", icon: Target },
            { id: "MentorFeedback", label: "Mentor Reviews", icon: UserCheck }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = workspaceTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setWorkspaceTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 whitespace-nowrap transition ${
                  isActive 
                    ? "bg-slate-900 text-white shadow-2xs" 
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-blue-400" : "text-slate-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: OVERVIEW & MAIN DASHBOARD */}
        {workspaceTab === "Overview" && (
          <div className="space-y-6">
            
            {/* Top Grid: Strategic Goal & Active Milestone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Strategic Goal Box */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-3 shadow-sm">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-blue-400 font-bold uppercase text-[10px] tracking-wider flex items-center gap-1">
                    <Target className="w-4 h-4 text-blue-400" /> PRIMARY STARTUP GOAL (Q4)
                  </span>
                  <span className="text-slate-400 text-[10px]">Target: Dec 31, 2026</span>
                </div>
                <h3 className="text-xl font-extrabold text-white">Reach $25,000 MRR & Deploy 500 Soil Probes</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Current MRR: <span className="font-bold text-emerald-400">$18,500 (+24% MoM)</span> • Deployed Field Probes: <span className="font-bold text-white">340 Nodes</span>.
                </p>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
                  <div className="bg-emerald-500 h-2 rounded-full w-[74%]"></div>
                </div>
              </div>

              {/* Active Milestone Box */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-semibold uppercase text-xs tracking-wider flex items-center gap-1">
                    CURRENT MILESTONE 03
                  </span>
                  <span className="text-amber-700 font-semibold text-xs">75% Complete</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Field Testing Telemetry v2 with Karnataka Cooperatives</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  LOI signed with 2 cooperatives representing 450 farm holdings. Hardware sensor telemetry payload is verified.
                </p>
              </div>

            </div>

            {/* Middle Grid: Tasks Execution & AI Copilot Action */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Tasks Board */}
              <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-blue-900" /> Active Workspace Tasks ({tasks.filter(t => t.status !== "Done").length} Remaining)
                  </h3>
                  <button onClick={() => setWorkspaceTab("Tasks")} className="text-xs font-semibold text-blue-900 hover:underline">
                    View Full Task Board →
                  </button>
                </div>

                {/* Add Quick Task Input */}
                <form onSubmit={handleAddTask} className="flex items-center gap-2 text-xs">
                  <input 
                    type="text" 
                    placeholder="Add a new task (e.g., Prepare investor pitch deck v4.2...)"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:outline-none focus:bg-white"
                  />
                  <select 
                    value={newTaskPriority}
                    onChange={(e) => setNewTaskPriority(e.target.value)}
                    className="bg-slate-100 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold"
                  >
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium</option>
                  </select>
                  <button type="submit" className="btn-primary text-xs py-2 px-4 shrink-0">
                    <Plus className="w-3.5 h-3.5" /> Add Task
                  </button>
                </form>

                {/* Task List */}
                <div className="space-y-2 text-xs">
                  {tasks.map((task) => (
                    <div 
                      key={task.id} 
                      className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 transition ${
                        task.status === "Done" ? "bg-slate-50 border-slate-200 text-slate-400 line-through" : "bg-white border-slate-200 text-slate-800"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => toggleTaskStatus(task.id)}
                          className={`w-5 h-5 rounded-md border flex items-center justify-center transition ${
                            task.status === "Done" ? "bg-emerald-600 border-emerald-600 text-white" : "border-slate-300 bg-white"
                          }`}
                        >
                          {task.status === "Done" && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </button>
                        <div>
                          <div className="font-bold text-xs text-slate-900">{task.title}</div>
                          <div className="text-[10px] text-slate-500 font-medium">Assignee: {task.assignee} • Due: {task.dueDate}</div>
                        </div>
                      </div>

                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        task.priority === "High" ? "bg-red-50 text-red-700 border border-red-200" : "bg-slate-100 text-slate-600"
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: AI Recommendations & Mentor Notes */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* AI Assistant Recommended Action */}
                <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 space-y-3 shadow-sm">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-400 font-bold uppercase text-[10px] flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> SUGGESTED NEXT STEP
                    </span>
                    <span className="text-slate-400 text-[10px]">Updated today</span>
                  </div>
                  <h4 className="font-bold text-sm text-white">Validate Pricing Model with 5 Beta Clients</h4>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Customer discovery completed (12 interviews). Next priority: Test seasonal subscription pricing with cooperative partners.
                  </p>
                  <button className="btn-primary w-full text-xs py-2 bg-blue-600 hover:bg-blue-500">
                    Open Validation Milestone
                  </button>
                </div>

                {/* Mentor Feedback Box */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 text-xs shadow-xs">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                      <UserCheck className="w-4 h-4 text-slate-700" /> Mentor Feedback
                    </h4>
                  </div>

                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-2">
                    <div className="flex items-center gap-2">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" 
                        alt="Mentor" 
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-bold text-slate-900 text-xs">Dr. K. V. Sundaram</div>
                        <div className="text-[10px] text-slate-400 font-medium">IIT Madras AgriTech Lead</div>
                      </div>
                    </div>
                    <p className="text-slate-700 text-xs leading-relaxed pt-1">
                      "Sensor payload tests look stable. Ensure low-power sleep cycles are thoroughly stress-tested before field trials."
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB 2: PROJECTS */}
        {workspaceTab === "Projects" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "IoT Soil Sensor Hardware Nodes V2", desc: "3D printed weather-proof casing with integrated solar harvesting circuit board for zero-grid field deployment.", status: "In Progress", buildsCount: 14 },
              { title: "Farm Manager Telemetry Mobile App", desc: "Flutter mobile application providing real-time soil moisture and nitrogen alert telemetry to farm managers.", status: "In Progress", buildsCount: 8 },
              { title: "Seasonal Revenue-Share Pricing Calculator", desc: "Financial calculator model testing seasonal subscription billing instead of upfront hardware sales.", status: "Planning", buildsCount: 4 }
            ].map((p, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-xs flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider">
                    {p.status}
                  </span>
                  <h3 className="font-extrabold text-base text-slate-900">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>{p.buildsCount} Builds Logged</span>
                  <button className="text-blue-900 font-bold hover:underline">Manage Project →</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: TASKS BOARD */}
        {workspaceTab === "Tasks" && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-xs text-xs">
            <h2 className="font-extrabold text-slate-900 text-base">Full Workspace Execution Tasks</h2>
            <div className="space-y-2">
              {tasks.map(t => (
                <div key={t.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.title}</div>
                    <div className="text-slate-500 text-xs">Assignee: {t.assignee} • Due: {t.dueDate}</div>
                  </div>
                  <span className="font-semibold text-xs text-slate-600">{t.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: FILES & PITCH DECK */}
        {workspaceTab === "Files" && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-xs text-xs">
            <h2 className="font-extrabold text-slate-900 text-base">Files & Pitch Deck Vault</h2>
            <div className="space-y-2">
              {[
                { name: "AgriSense_AI_Pitch_Deck_v4.2.pdf", size: "4.8 MB", date: "Sept 28, 2026", status: "Audited" },
                { name: "LOI_Karnataka_Cooperatives_Signed.pdf", size: "2.1 MB", date: "Sept 21, 2026", status: "Verified KYB" },
                { name: "Hardware_Telemetry_API_Schema_v2.json", size: "840 KB", date: "Sept 30, 2026", status: "Verified Build" }
              ].map((f, i) => (
                <div key={i} className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-800" />
                    <div>
                      <div className="font-bold text-slate-900">{f.name}</div>
                      <div className="text-slate-400 text-[11px]">{f.size} • Updated {f.date}</div>
                    </div>
                  </div>
                  <button className="btn-secondary text-xs py-1.5 px-3 flex items-center gap-1">
                    <Download className="w-3.5 h-3.5" /> Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: TEAM ROSTER */}
        {workspaceTab === "Team" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Aarav Sharma", role: "Founder & CEO", email: "aarav@agrisense.io", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
              { name: "Priya Nair", role: "Co-Founder & Product Lead", email: "priya@agrisense.io", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80" },
              { name: "Michael Zhang", role: "Hardware Engineering Lead", email: "michael@agrisense.io", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" }
            ].map((m, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <img src={m.avatar} alt={m.name} className="w-10 h-10 rounded-xl object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{m.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{m.role}</p>
                  </div>
                </div>
                <p className="text-xs font-mono text-slate-600">{m.email}</p>
              </div>
            ))}
          </div>
        )}

        {/* TAB 6: MILESTONES ROADMAP */}
        {workspaceTab === "Milestones" && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-xs text-xs">
            <h2 className="font-extrabold text-slate-900 text-base">Milestones Roadmap</h2>
            <div className="space-y-3">
              {[
                { number: "01", title: "Problem Validation & LOI Execution", status: "Completed ✓", detail: "Signed LOI with 2 agricultural cooperatives representing 450 farm holdings." },
                { number: "02", title: "Hardware Prototype V1 Field Trial", status: "Completed ✓", detail: "Deployed 5 IoT soil probes in Karnataka agricultural clusters." },
                { number: "03", title: "Field Telemetry V2 & Pricing Trial", status: "In Progress (75%)", detail: "Testing seasonal subscription revenue-share pricing model." },
                { number: "04", title: "Seed Round Syndicate Fundraising", status: "Upcoming", detail: "Present audited data vault to institutional syndicate seed funds." }
              ].map((m) => (
                <div key={m.number} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-slate-900 text-sm">Milestone {m.number}: {m.title}</span>
                    <span className="text-xs font-semibold text-emerald-700">{m.status}</span>
                  </div>
                  <p className="text-slate-600 text-xs">{m.detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
