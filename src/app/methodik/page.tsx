"use client";

import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { CaseExample } from "@/components/methodik/CaseExample";
import InvestorMethodology from "@/components/methodik/InvestorMethodology";
import { MethodologyCTA } from "@/components/methodik/MethodologyCTA";
import { MethodologyHero } from "@/components/methodik/MethodologyHero";
import { PhaseDetailPanel } from "@/components/methodik/PhaseDetailPanel";
import ProcessHeroSection from "@/components/methodik/ProcessHeroSection";
import { ProcessVisualization } from "@/components/methodik/ProcessVisualization";
import React, { useState } from "react";

const page = () => {
  const [clientType, setClientType] = useState<"private" | "investor">(
    "private",
  );
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);

  const handlePhaseClick = (phaseId: number) => {
    setSelectedPhase(phaseId);
  };

  const handleClosePanel = () => {
    setSelectedPhase(null);
  };

  return (
    <div className="bg-black">
      <div className="fixed inset-0 z-0">
        <StarsBackground className="h-full w-full absolute inset-0" />
      </div>
      <div className="relative z-10">
        <MethodologyHero
          clientType={clientType}
          onClientTypeChange={setClientType}
        />
        <ProcessHeroSection />
        <ProcessVisualization
          onPhaseClick={handlePhaseClick}
          selectedPhase={selectedPhase}
        />
        <PhaseDetailPanel
          phase={
            selectedPhase
              ? {
                  id: selectedPhase,
                  title: "",
                  color: "",
                  description: "",
                  why: "",
                  keyDecisions: [],
                  subSteps: [],
                  clientBenefit: "",
                }
              : null
          }
          onClose={handleClosePanel}
          clientType={clientType}
        />
        <InvestorMethodology />
        <CaseExample />

        <MethodologyCTA />
      </div>
    </div>
  );
};

export default page;
