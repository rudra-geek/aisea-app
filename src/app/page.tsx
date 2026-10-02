"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroJourney } from "@/components/HeroJourney";
import { TrustSection } from "@/components/TrustSection";
import { EcosystemSection } from "@/components/EcosystemSection";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { AudienceSplit } from "@/components/AudienceSplit";
import { VerificationPipeline } from "@/components/VerificationPipeline";
import { AICopilotShowcase } from "@/components/AICopilotShowcase";
import { MentorshipSection } from "@/components/MentorshipSection";
import { OpportunitiesSection } from "@/components/OpportunitiesSection";
import { AcademySection } from "@/components/AcademySection";
import { CommunitySection } from "@/components/CommunitySection";
import { NetworkSection } from "@/components/NetworkSection";
import { MyAISEA } from "@/components/MyAISEA";
import { UserDashboard } from "@/components/UserDashboard";
import { RoleDashboard } from "@/components/RoleDashboard";
import { EtrCertification } from "@/components/EtrCertification";
import { StartupWorkspace } from "@/components/StartupWorkspace";
import { FinalCTA } from "@/components/FinalCTA";
import { JoinModal } from "@/components/JoinModal";
import { SignInModal } from "@/components/SignInModal";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [userRole, setUserRole] = useState<string>("Entrepreneur");
  
  // Modal states
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab");
      if (tabParam) {
        setActiveTab(tabParam);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (activeTab === "community") {
        document.title = "AISEA Community";
      } else {
        document.title = "AISEA Global — Verified Entrepreneur Network";
      }
    }
  }, [activeTab]);

  const handleProfileComplete = (profileData: any) => {
    setUserRole(profileData.roleCategory || "Entrepreneur");
    setActiveTab("my-aisea");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Clean Navbar (Hidden on Community page) */}
      {activeTab !== "community" && (
        <Navbar 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenJoinModal={() => setIsJoinModalOpen(true)}
          onOpenSignInModal={() => setIsSignInModalOpen(true)}
        />
      )}

      <main className="flex-1">
        {/* TAB 1: HOME */}
        {activeTab === "home" && (
          <>
            <HeroJourney 
              onJoin={() => setIsJoinModalOpen(true)}
              onExplore={() => setActiveTab("opportunities")}
              onOpenCommunity={() => window.open("/?tab=community", "_blank")}
            />
            <TrustSection />
            <EcosystemSection 
              onSelectCategory={(catId) => setActiveTab(catId === "connect" ? "community" : catId)}
            />
            <JourneyTimeline 
              onJoin={() => setIsJoinModalOpen(true)}
            />
            <AudienceSplit 
              onSelectRole={(r) => { setUserRole(r); setActiveTab("workspace"); }}
            />
            <VerificationPipeline />
            <AICopilotShowcase 
              onOpenCopilotApp={() => setActiveTab("workspace")}
            />
            <FinalCTA 
              onJoin={() => setIsJoinModalOpen(true)}
              onExplore={() => setActiveTab("opportunities")}
            />
          </>
        )}

        {/* TAB 2: COMMUNITY (Includes My Network & Feed) */}
        {activeTab === "community" && <CommunitySection />}

        {/* TAB 3: LEARN (ACADEMY) */}
        {activeTab === "learn" && <AcademySection />}

        {/* TAB 4: MENTORSHIP */}
        {activeTab === "mentorship" && <MentorshipSection />}

        {/* TAB 5: OPPORTUNITIES */}
        {activeTab === "opportunities" && <OpportunitiesSection />}

        {/* TAB 6: MY AISEA (PORTFOLIO) */}
        {activeTab === "my-aisea" && (
          <div className="py-8 bg-slate-50 min-h-screen">
            <MyAISEA />
          </div>
        )}

        {/* TAB 7: WORKSPACE (Dedicated Clear Startup Workspace) */}
        {activeTab === "workspace" && <StartupWorkspace />}

        {/* TAB 8: ETR CERTIFICATION */}
        {activeTab === "certification" && <EtrCertification />}

        {/* TAB 9: USER DASHBOARD */}
        {activeTab === "dashboard" && (
          <div className="py-8 bg-slate-50 min-h-screen">
            <UserDashboard onNavigateModule={(mod) => setActiveTab(mod)} />
          </div>
        )}

        {/* TAB 10: ALL OTHER ROLE DASHBOARD MODULES */}
        {["todays-build", "proof", "dealflow", "campus", "corporate", "student", "trust", "honours", "admin", "identity", "copilot"].includes(activeTab) && (
          <RoleDashboard 
            userRole={userRole}
            setUserRole={setUserRole}
            activeModule={activeTab}
            setActiveModule={setActiveTab}
          />
        )}
      </main>

      {/* Join AISEA Profile Creation Modal */}
      <JoinModal 
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        onCompleteProfile={handleProfileComplete}
      />

      {/* Sign In Modal */}
      <SignInModal 
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
        onSignInSuccess={() => setActiveTab("dashboard")}
      />

      {/* Institutional Footer */}
      <Footer 
        onNavigateApp={(mod) => setActiveTab(mod)}
      />
    </div>
  );
}
