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
import LiquidEther from "@/components/methodik/LiquidEther";

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
        <div style={{ width: "100%", height: 1200, position: "relative" }}>
          <LiquidEther
            colors={["#222222", "#777777", "#bbbbbb", "#ffffff"]}
            mouseForce={20}
            cursorSize={100}
            isViscous
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
      </div>
      <div className="relative z-10">
        <MethodologyHero
          clientType={clientType}
          onClientTypeChange={setClientType}
        />
        <ProcessHeroSection clientType={clientType} />
        <ProcessVisualization
          onPhaseClick={handlePhaseClick}
          selectedPhase={selectedPhase}
          clientType={clientType}
        />
        <InvestorMethodology />
        <CaseExample />
        <MethodologyCTA />
      </div>
      <PhaseDetailPanel
        phase={
          selectedPhase
            ? {
                id: selectedPhase,
                title: "",
                color:
                  selectedPhase === 1
                    ? "#FF6B35"
                    : selectedPhase === 2
                      ? "#00B4D8"
                      : "#06FFA5",
                descriptionLines: [],
                footerNote: "",
                steps: [],
                totalPhases: 3,
              }
            : null
        }
        onClose={handleClosePanel}
        clientType={clientType}
      />
    </div>
  );
};

export default page;
