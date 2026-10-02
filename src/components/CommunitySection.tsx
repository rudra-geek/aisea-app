"use client";

import React, { useState } from "react";
import { 
  SAMPLE_ENTREPRENEURS, 
  SAMPLE_BUILDS, 
  SAMPLE_CHAPTERS,
  BuildEntry 
} from "@/data/mockData";
import { 
  Search, 
  Flame, 
  Bell, 
  MessageSquare, 
  Users, 
  CheckCircle2, 
  Plus, 
  FileText, 
  Mic, 
  ThumbsUp, 
  Share2, 
  Send, 
  UserCheck, 
  MapPin,
  Filter,
  Sparkles,
  X,
  Globe,
  Compass,
  ShieldCheck,
  Home,
  ChevronDown
} from "lucide-react";

export const CommunitySection: React.FC = () => {
  const currentEtr = SAMPLE_ENTREPRENEURS[0]; // Rahul Sharma

  // Community Sub-Tab state
  const [communityTab, setCommunityTab] = useState<"Feed" | "MyNetwork" | "Chapters">("Feed");

  // Network Directory Sub-Tab state inside My Network
  const [networkDirectoryTab, setNetworkDirectoryTab] = useState("Founders");

  // Search and filter state
  const [peopleSearch, setPeopleSearch] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("All Skills");
  
  // Post Creator State
  const [posts, setPosts] = useState<BuildEntry[]>(SAMPLE_BUILDS);
  const [postText, setPostText] = useState("");
  const [postCategory, setPostCategory] = useState<BuildEntry["category"]>("MVP");
  const [postEvidence, setPostEvidence] = useState("");
  const [streakCount, setStreakCount] = useState(14);

  // Notifications drawer state
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Dr. K. V. Sundaram verified your hardware telemetry build #9821", time: "10m ago", read: false },
    { id: 2, text: "Elena Rostova (ClimateScale) sent you a connection request", time: "1h ago", read: false },
    { id: 3, text: "Sarah Jenkins endorsed your Customer Validation log", time: "3h ago", read: true }
  ]);

  // Private Messages drawer state
  const [showMessages, setShowMessages] = useState(false);
  const [activeChatUser, setActiveChatUser] = useState<string | null>("Dr. K. V. Sundaram");
  const [chatMessages, setChatMessages] = useState([
    { sender: "Dr. K. V. Sundaram", text: "Rahul, your soil sensor telemetry stream looks very stable. Did you run low-power sleep tests?", time: "09:42 AM" },
    { sender: "Me", text: "Yes Dr. Sundaram! Sleeping duty cycle is at 98.4%. Commit evidence #8f92a1 attached.", time: "09:45 AM" }
  ]);
  const [newMessageInput, setNewMessageInput] = useState("");

  // Connections state
  const [connectionsCount, setConnectionsCount] = useState(480);

  // Selected Profile Modal State
  const [selectedProfile, setSelectedProfile] = useState<{
    name: string;
    role: string;
    startup?: string;
    stage?: string;
    location?: string;
    avatar: string;
    bio: string;
    verified: boolean;
    buildsCount: number;
    skills: string[];
  } | null>(null);

  // Handle create build post
  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postText.trim()) return;

    const newPost: BuildEntry = {
      id: `post-${Date.now()}`,
      date: "Just Now",
      title: postText,
      category: postCategory,
      description: postText,
      evidence: postEvidence || "Logged in AISEA Community Feed.",
      mentorReviewStatus: "Pending Review",
      verificationBadge: `Build Post #${Math.floor(1000 + Math.random() * 9000)}`
    };

    setPosts([newPost, ...posts]);
    setPostText("");
    setPostEvidence("");
    setStreakCount(prev => prev + 1);
  };

  // Handle send message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessageInput.trim()) return;

    setChatMessages([...chatMessages, { sender: "Me", text: newMessageInput, time: "Just Now" }]);
    setNewMessageInput("");
  };

  const skillsList = ["All Skills", "Precision AgTech", "Hardware IoT", "Deep Learning", "Financial Planning", "SaaS", "CleanTech", "FinTech"];

  const filteredPosts = posts.filter(post => {
    return peopleSearch === "" || 
      post.title.toLowerCase().includes(peopleSearch.toLowerCase()) ||
      post.description.toLowerCase().includes(peopleSearch.toLowerCase());
  });

  const networkPeople = [
    {
      name: "Ankit Verma",
      role: "Founder & CEO, PayFlow",
      industry: "FinTech • B2B SaaS",
      location: "Bengaluru, India",
      skills: ["Payment APIs", "Financial Compliance"],
      verified: true,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Elena Rostova",
      role: "Co-Founder, ClimateScale",
      industry: "CleanTech • Carbon Accounting",
      location: "Singapore",
      skills: ["ESG Telemetry", "Supply Chain"],
      verified: true,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Dr. Marcus Vance",
      role: "Founder, BioMed Analytics",
      industry: "HealthTech • Genomics",
      location: "Cambridge, UK",
      skills: ["IP Licensing", "Clinical Validation"],
      verified: true,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-slate-100 min-h-screen py-6 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Professional LinkedIn-Style Top Navigation Bar */}
        <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* LEFT: Brand Logo + Pill Search Bar */}
          <div className="flex items-center gap-3 w-full md:w-auto flex-1 max-w-lg">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 text-slate-900 font-extrabold text-sm shrink-0 hover:opacity-80 transition">
              <div className="w-9 h-9 bg-blue-900 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-xs">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="font-extrabold text-slate-900 text-sm tracking-tight leading-none">
                  AISEA <span className="text-blue-900 font-semibold">Community</span>
                </div>
                <div className="text-[9px] text-slate-500 font-medium tracking-wider uppercase mt-0.5">
                  Professional Network
                </div>
              </div>
            </a>

            {/* Pill Search Bar */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="I'm looking for founders, skills, builds..."
                value={peopleSearch}
                onChange={(e) => setPeopleSearch(e.target.value)}
                className="w-full bg-slate-100/80 border border-slate-200/80 rounded-full pl-9 pr-4 py-1.5 text-xs text-slate-900 focus:outline-none focus:bg-white focus:border-slate-400 transition"
              />
            </div>
          </div>

          {/* RIGHT: Stacked Icon + Label Navigation Items (LinkedIn Style) */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs font-semibold text-slate-600 shrink-0 border-t md:border-t-0 border-slate-100 pt-2 md:pt-0 w-full md:w-auto justify-around md:justify-end">
            
            {/* 1. Home / Feed */}
            <button
              onClick={() => setCommunityTab("Feed")}
              className={`flex flex-col items-center gap-1 transition py-1 relative ${
                communityTab === "Feed" ? "text-blue-900 font-bold" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="text-[11px]">Home</span>
              {communityTab === "Feed" && (
                <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-blue-900 rounded-full"></span>
              )}
            </button>

            {/* 2. My Network */}
            <button
              onClick={() => setCommunityTab("MyNetwork")}
              className={`flex flex-col items-center gap-1 transition py-1 relative ${
                communityTab === "MyNetwork" ? "text-blue-900 font-bold" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <Users className="w-5 h-5" />
              <span className="text-[11px]">My Network</span>
              {communityTab === "MyNetwork" && (
                <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-blue-900 rounded-full"></span>
              )}
            </button>

            {/* 3. Chapters */}
            <button
              onClick={() => setCommunityTab("Chapters")}
              className={`flex flex-col items-center gap-1 transition py-1 relative ${
                communityTab === "Chapters" ? "text-blue-900 font-bold" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <Globe className="w-5 h-5" />
              <span className="text-[11px]">Chapters</span>
              {communityTab === "Chapters" && (
                <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-blue-900 rounded-full"></span>
              )}
            </button>

            {/* 4. Messaging */}
            <div className="relative">
              <button
                onClick={() => setShowMessages(!showMessages)}
                className={`flex flex-col items-center gap-1 transition py-1 relative ${
                  showMessages ? "text-blue-900 font-bold" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <MessageSquare className="w-5 h-5" />
                <span className="text-[11px]">Messaging</span>
                <span className="absolute top-0 right-1 w-2 h-2 rounded-full bg-blue-600"></span>
              </button>

              {/* Messaging Dropdown Popup */}
              {showMessages && (
                <div className="absolute right-0 mt-3 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl p-4 z-50 text-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <MessageSquare className="w-4 h-4 text-blue-900" /> Messaging
                    </span>
                    <button onClick={() => setShowMessages(false)} className="text-slate-400 font-bold hover:text-slate-600">✕</button>
                  </div>
                  
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900">{activeChatUser || "Dr. K. V. Sundaram"}</span>
                      <span className="text-[10px] text-emerald-600 font-semibold">• Online</span>
                    </div>
                    <div className="space-y-1 max-h-32 overflow-y-auto pt-1">
                      {chatMessages.map((msg, i) => (
                        <div key={i} className={`p-1.5 rounded-lg text-[11px] ${msg.sender === "Me" ? "bg-blue-900 text-white ml-4" : "bg-white border border-slate-200 text-slate-800 mr-4"}`}>
                          <p>{msg.text}</p>
                        </div>
                      ))}
                    </div>
                    <form onSubmit={handleSendMessage} className="flex items-center gap-1.5 pt-2">
                      <input 
                        type="text" 
                        placeholder="Type message..." 
                        value={newMessageInput}
                        onChange={(e) => setNewMessageInput(e.target.value)}
                        className="flex-1 bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-xs text-slate-900 focus:outline-none focus:border-slate-400"
                      />
                      <button type="submit" className="bg-blue-900 text-white p-1 rounded-lg">
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className={`flex flex-col items-center gap-1 transition py-1 relative ${
                  showNotifications ? "text-blue-900 font-bold" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <Bell className="w-5 h-5" />
                <span className="text-[11px]">Notifications</span>
                {notifications.some(n => !n.read) && (
                  <span className="absolute top-0 right-2 w-2 h-2 rounded-full bg-red-500"></span>
                )}
              </button>

              {/* Notifications Dropdown Drawer */}
              {showNotifications && (
                <div className="absolute right-0 mt-3 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl p-4 z-50 text-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="font-bold text-slate-900">Notifications</span>
                    <button onClick={() => setShowNotifications(false)} className="text-slate-400 font-bold hover:text-slate-600">✕</button>
                  </div>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {notifications.map(n => (
                      <div key={n.id} className={`p-2.5 rounded-xl border text-xs leading-tight space-y-1 ${n.read ? "bg-slate-50 border-slate-100 text-slate-600" : "bg-blue-50/60 border-blue-100 text-slate-900 font-medium"}`}>
                        <p>{n.text}</p>
                        <span className="text-[10px] text-slate-400">{n.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Streak Counter */}
            <div className="hidden lg:flex flex-col items-center gap-0.5 py-1 text-slate-600">
              <div className="flex items-center gap-1">
                <Flame className="w-4 h-4 text-amber-600 fill-amber-500" />
                <span className="font-bold text-slate-900 text-xs">{streakCount}d</span>
              </div>
              <span className="text-[10px] text-slate-400 font-semibold">Streak</span>
            </div>

            {/* 6. Me Avatar Dropdown */}
            <div 
              onClick={() => setSelectedProfile({
                name: currentEtr.name,
                role: currentEtr.role,
                startup: currentEtr.startup,
                stage: currentEtr.stage,
                location: currentEtr.location,
                avatar: currentEtr.avatar,
                bio: currentEtr.bio,
                verified: true,
                buildsCount: currentEtr.stats.builds,
                skills: currentEtr.skills
              })}
              className="flex flex-col items-center gap-0.5 cursor-pointer text-slate-500 hover:text-slate-900 transition"
            >
              <img 
                src={currentEtr.avatar} 
                alt={currentEtr.name} 
                className="w-5 h-5 rounded-full object-cover border border-slate-200" 
              />
              <span className="text-[10px] font-semibold flex items-center gap-0.5">
                Me <ChevronDown className="w-3 h-3 text-slate-400" />
              </span>
            </div>

          </div>

        </div>

        {/* SUB-VIEW 1: FEED & BUILDS (LinkedIn Style Feed) */}
        {communityTab === "Feed" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* LEFT COLUMN: User Profile Summary & Skill Filters */}
            <div className="lg:col-span-3 space-y-5">
              
              {/* User Profile Card */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="h-16 bg-slate-900"></div>
                <div className="p-4 relative pt-0 text-center space-y-2 border-b border-slate-100">
                  <img 
                    src={currentEtr.avatar} 
                    alt={currentEtr.name} 
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-sm mx-auto -mt-8"
                  />
                  <div>
                    <h3 className="font-extrabold text-sm text-slate-900">{currentEtr.name}</h3>
                    <p className="text-[11px] text-slate-500 font-medium">{currentEtr.role}</p>
                  </div>
                  <span className="verified-pill inline-flex">
                    <CheckCircle2 className="w-3 h-3" /> Etr. Level 3 Certified
                  </span>
                </div>

                <div className="p-4 text-xs space-y-2.5">
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-slate-400" /> Connections</span>
                    <span className="font-bold text-slate-900">{connectionsCount}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="flex items-center gap-1"><Flame className="w-3.5 h-3.5 text-amber-500" /> Building Streak</span>
                    <span className="font-bold text-amber-700">{streakCount} Days</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Verified Builds</span>
                    <span className="font-bold text-slate-900">{posts.length} Posts</span>
                  </div>
                </div>
              </div>

              {/* Skill Filters Box */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5 text-blue-800" /> Skill Feed Filters
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {skillsList.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => setSelectedSkill(skill)}
                      className={`px-2.5 py-1 rounded-lg transition font-medium text-[11px] ${
                        selectedSkill === skill
                          ? "bg-slate-900 text-white font-bold"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* MIDDLE COLUMN: Post Creator & Community Activity Feed */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* TODAY'S BUILD POST CREATOR BOX */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
                <div className="flex items-center gap-3">
                  <img src={currentEtr.avatar} alt="User" className="w-10 h-10 rounded-xl object-cover" />
                  <div className="flex-1">
                    <div className="font-bold text-xs text-slate-900 flex items-center gap-2">
                      Post Today's Build Update
                      <span className="text-xs text-amber-700 font-semibold flex items-center gap-1">
                        <Flame className="w-3 h-3 text-amber-500" /> Streak Active
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400">Share customer interviews, hardware tests, or code releases</div>
                  </div>
                </div>

                <form onSubmit={handleCreatePost} className="space-y-3 text-xs">
                  <textarea 
                    rows={3}
                    placeholder="What did you build or validate today? (e.g., Deployed soil sensor telemetry pipeline v2.4...)"
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:bg-white focus:border-slate-400"
                  />

                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3">
                    <div className="flex items-center gap-2">
                      <select 
                        value={postCategory}
                        onChange={(e) => setPostCategory(e.target.value as BuildEntry["category"])}
                        className="bg-slate-100 border border-slate-200 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-800"
                      >
                        <option value="MVP">MVP Release</option>
                        <option value="Customer Research">Customer Research</option>
                        <option value="Prototype">Prototype Hardware</option>
                        <option value="Validation">Market Validation</option>
                      </select>

                      <input 
                        type="text"
                        placeholder="Attach link or PDF..."
                        value={postEvidence}
                        onChange={(e) => setPostEvidence(e.target.value)}
                        className="bg-slate-100 border border-slate-200 rounded-lg px-2.5 py-1 text-xs w-36 focus:outline-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary text-xs py-1.5 px-4">
                      Post Build Update
                    </button>
                  </div>
                </form>
              </div>

              {/* COMMUNITY FEED POSTS */}
              <div className="space-y-4">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <img src={currentEtr.avatar} alt={currentEtr.name} className="w-11 h-11 rounded-xl object-cover" />
                        <div>
                          <div className="font-extrabold text-sm text-slate-900 flex items-center gap-1.5">
                            {currentEtr.name}
                            <span className="verified-pill text-[10px]">
                              <CheckCircle2 className="w-3 h-3" /> Level 3
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-500 font-medium">{currentEtr.role} • {post.date}</div>
                        </div>
                      </div>

                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {post.category}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-800">
                      <h4 className="font-extrabold text-sm text-slate-900">{post.title}</h4>
                      <p className="text-slate-700 leading-relaxed">{post.description}</p>
                    </div>

                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-xs space-y-1">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5 text-[11px]">
                        <FileText className="w-3.5 h-3.5 text-blue-800" /> Verified Evidence Attachment:
                      </div>
                      <p className="text-slate-600 font-mono text-[11px]">{post.evidence}</p>
                    </div>

                    <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span className="text-emerald-700 font-bold text-[11px] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {post.mentorReviewStatus}
                      </span>

                      <div className="flex items-center gap-4 text-slate-600">
                        <button className="flex items-center gap-1 hover:text-slate-900 font-semibold">
                          <ThumbsUp className="w-3.5 h-3.5 text-slate-400" /> Endorse (32)
                        </button>
                        <button className="flex items-center gap-1 hover:text-slate-900 font-semibold">
                          <MessageSquare className="w-3.5 h-3.5 text-slate-400" /> Comment (8)
                        </button>
                        <button className="flex items-center gap-1 hover:text-slate-900 font-semibold">
                          <Share2 className="w-3.5 h-3.5 text-slate-400" /> Share
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT COLUMN: Private Messaging & Connection Suggestions */}
            <div className="lg:col-span-3 space-y-5">
              
              {/* PRIVATE MESSAGING WIDGET */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-3">
                <div className="p-4 bg-slate-900 text-white flex items-center justify-between text-xs">
                  <div className="font-bold flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-blue-400" /> Direct Encrypted Messages
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">Live</span>
                </div>

                <div className="p-3 text-xs space-y-3 max-h-56 overflow-y-auto">
                  {chatMessages.map((msg, idx) => (
                    <div key={idx} className={`p-2.5 rounded-xl border text-[11px] space-y-1 ${msg.sender === "Me" ? "bg-blue-50 border-blue-200 text-slate-900 ml-4" : "bg-slate-50 border-slate-200 text-slate-800 mr-4"}`}>
                      <div className="font-bold text-[10px] text-slate-500 flex items-center justify-between">
                        <span>{msg.sender}</span>
                        <span>{msg.time}</span>
                      </div>
                      <p>{msg.text}</p>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-100 flex items-center gap-2">
                  <input 
                    type="text" 
                    placeholder="Message Dr. Sundaram..."
                    value={newMessageInput}
                    onChange={(e) => setNewMessageInput(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs focus:outline-none focus:bg-white"
                  />
                  <button type="submit" className="p-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800">
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

              {/* SUGGESTED CONNECTIONS */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-3 shadow-xs text-xs">
                <div className="font-extrabold text-slate-900 text-xs flex items-center justify-between">
                  <span>Suggested Connections</span>
                  <button onClick={() => setCommunityTab("MyNetwork")} className="text-[10px] text-blue-900 font-bold">View My Network</button>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "Elena Rostova", role: "Co-Founder, ClimateScale", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80" },
                    { name: "Dr. Marcus Vance", role: "Founder, BioMed Analytics", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" }
                  ].map((c, i) => (
                    <div key={i} className="flex items-center justify-between text-xs border-b border-slate-100 pb-2">
                      <div className="flex items-center gap-2.5">
                        <img src={c.avatar} alt={c.name} className="w-8 h-8 rounded-lg object-cover" />
                        <div>
                          <div className="font-bold text-slate-900 text-[11px]">{c.name}</div>
                          <div className="text-[10px] text-slate-500 line-clamp-1">{c.role}</div>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          setConnectionsCount(prev => prev + 1);
                          alert(`Connection request sent to ${c.name}`);
                        }}
                        className="btn-secondary text-[10px] py-1 px-2"
                      >
                        Connect
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* SUB-VIEW 2: MY NETWORK (DIRECTORY & AI FOUNDER MATCH) */}
        {communityTab === "MyNetwork" && (
          <div className="space-y-6">
            
            {/* Recommended Matches Section (3 Accounts, No AI Label) */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-5 shadow-md">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-blue-400" /> RECOMMENDED MATCHES
                  </h2>
                  <p className="text-slate-400 text-xs mt-0.5">Founders, mentors, and experts aligned with your stage and sector</p>
                </div>
                <span className="text-xs font-semibold text-slate-400 font-mono">3 Verified Matches</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  {
                    name: "Ankit Verma",
                    title: "FinTech Founder",
                    desc: "Building B2B payment orchestration infrastructure across South Asia.",
                    match: "98% Match",
                    reasons: ["FinTech Sector", "Early Stage Revenue"],
                    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
                  },
                  {
                    name: "Elena Rostova",
                    title: "CleanTech Co-Founder",
                    desc: "Automated carbon accounting telemetry for SEA manufacturing supply chains.",
                    match: "95% Match",
                    reasons: ["CleanTech & ESG", "Pilot Ready"],
                    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
                  },
                  {
                    name: "Dr. Vikram Sethi",
                    title: "Hardware & IoT Mentor",
                    desc: "Ex-VP Schneider Electric, advising on sensor fabrication & B2B sales.",
                    match: "92% Match",
                    reasons: ["Hardware Scaling", "Mentor Network"],
                    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
                  }
                ].map((rec, i) => (
                  <div key={i} className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img src={rec.avatar} alt={rec.name} className="w-8 h-8 rounded-full object-cover border border-slate-600" />
                          <div>
                            <h4 className="font-bold text-sm text-white">{rec.name}</h4>
                            <p className="text-[10px] text-blue-300 font-medium">{rec.title}</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                          {rec.match}
                        </span>
                      </div>

                      <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">{rec.desc}</p>

                      <div className="flex flex-wrap gap-1 pt-1">
                        {rec.reasons.map((r, idx) => (
                          <span key={idx} className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded font-mono">
                            ✓ {r}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button 
                      onClick={() => alert(`Connection request sent to ${rec.name}!`)}
                      className="btn-primary w-full text-xs py-1.5 bg-blue-600 hover:bg-blue-500 mt-2"
                    >
                      Connect & Message
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Network People Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {networkPeople.map((p, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-xs flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <img src={p.avatar} alt={p.name} className="w-12 h-12 rounded-xl object-cover border border-slate-200" />
                      <div>
                        <h3 className="font-bold text-sm text-slate-900">{p.name}</h3>
                        <p className="text-xs text-slate-600 font-medium">{p.role}</p>
                      </div>
                    </div>

                    <div className="text-xs text-slate-500 space-y-1">
                      <div className="font-semibold text-slate-800">{p.industry}</div>
                      <div className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {p.location}</div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="verified-pill text-[10px]"><CheckCircle2 className="w-3 h-3" /> Verified</span>
                    <button 
                      onClick={() => alert(`Connection request sent to ${p.name}!`)}
                      className="btn-primary text-xs py-1.5 px-3"
                    >
                      Connect
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* SUB-VIEW 3: REGIONAL CHAPTERS */}
        {communityTab === "Chapters" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAMPLE_CHAPTERS.map((ch) => (
              <div key={ch.id} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-800" />
                    <h3 className="font-bold text-sm text-slate-900">{ch.name}</h3>
                  </div>
                  <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider">
                    {ch.region}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <div className="text-slate-400 text-[9px] uppercase font-bold">MEMBERS</div>
                    <div className="font-extrabold text-slate-900 text-sm mt-0.5">{ch.membersCount}</div>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <div className="text-slate-400 text-[9px] uppercase font-bold">MENTORS</div>
                    <div className="font-extrabold text-slate-900 text-sm mt-0.5">{ch.mentorsCount}</div>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <div className="text-slate-400 text-[9px] uppercase font-bold">STARTUPS</div>
                    <div className="font-extrabold text-slate-900 text-sm mt-0.5">{ch.activeStartups}</div>
                  </div>
                </div>

                <button 
                  onClick={() => alert(`Joined ${ch.name} Chapter!`)}
                  className="btn-secondary w-full text-xs py-1.5"
                >
                  Join Chapter Network
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Selected Profile Detail Modal Popup */}
        {selectedProfile && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-up">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-5 relative">
              
              <button 
                onClick={() => setSelectedProfile(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 font-bold text-sm bg-slate-100 w-7 h-7 rounded-full flex items-center justify-center transition"
              >
                ✕
              </button>

              {/* Profile Header */}
              <div className="flex items-start gap-4">
                <img 
                  src={selectedProfile.avatar} 
                  alt={selectedProfile.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-200 shadow-xs"
                />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-extrabold text-slate-900">{selectedProfile.name}</h3>
                    {selectedProfile.verified && (
                      <span className="verified-pill text-xs">
                        <CheckCircle2 className="w-4 h-4" /> Verified
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-slate-700">{selectedProfile.role}</p>
                  {selectedProfile.startup && (
                    <p className="text-[11px] font-mono text-blue-900">{selectedProfile.startup} • {selectedProfile.stage}</p>
                  )}
                  {selectedProfile.location && (
                    <p className="text-[11px] text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" /> {selectedProfile.location}
                    </p>
                  )}
                </div>
              </div>

              {/* Bio */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs text-slate-700 leading-relaxed">
                {selectedProfile.bio}
              </div>

              {/* Stats & Skills */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Verified Build Logs:</span>
                  <span className="font-extrabold text-slate-900">{selectedProfile.buildsCount} Builds</span>
                </div>
                <div className="space-y-1 pt-1">
                  <span className="text-[10px] font-bold uppercase text-slate-400">VERIFIED SKILLS:</span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {selectedProfile.skills.map((s, idx) => (
                      <span key={idx} className="bg-slate-100 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-slate-800 border border-slate-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button 
                  onClick={() => {
                    alert(`Message sent to ${selectedProfile.name}`);
                    setSelectedProfile(null);
                    setShowMessages(true);
                  }}
                  className="btn-primary flex-1 text-xs py-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Direct Message
                </button>
                <button 
                  onClick={() => {
                    alert(`Connection request sent to ${selectedProfile.name}`);
                    setSelectedProfile(null);
                  }}
                  className="btn-secondary flex-1 text-xs py-2"
                >
                  Connect
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
