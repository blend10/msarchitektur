import { motion, AnimatePresence } from "motion/react";
import {
  X,
  CheckCircle2,
  Clock,
  DollarSign,
  Users,
  ChevronRight,
} from "lucide-react";
import React from "react";

// --- Interfaces ---
interface PhaseDetail {
  id: number;
  title: string;
  color: string;
  description: string;
  why: string;
  keyDecisions: { icon: any; title: string; description: string }[];
  subSteps: string[];
  clientBenefit: string;
}

interface PhaseDetailPanelProps {
  phase: PhaseDetail | null;
  onClose: () => void;
  clientType: "private" | "investor";
}

// --- Data (Unchanged) ---
const phaseData: Record<
  number,
  { private: PhaseDetail; investor: PhaseDetail }
> = {
  1: {
    private: {
      id: 1,
      title: "Analyse  & Strategie",
      color: "#FF6B35",
      description:
        "Wir beginnen damit, Ihren Lebensstil, Ihre Vorlieben und räumlichen Bedürfnisse genau zu verstehen. Diese Phase schafft die Grundlage für alle weiteren Schritte.",
      why: "Strategische Analysen verhindern kostspielige Änderungen zu einem späteren Zeitpunkt. Durch gezielte Investitionen zu Beginn stellen wir sicher, dass das Design Ihre Vision und Bedürfnisse präzise widerspiegelt.",
      keyDecisions: [
        {
          icon: Clock,
          title: "Zeitplan",
          description:
            "Wir definieren früh einen klaren Zeitplan mit verbindlichen Meilensteinen für Planungssicherheit und Kontrolle.",
        },
        {
          icon: DollarSign,
          title: "Budget",
          description:
            "Realistische Budgetparameter und Prioritäten werden früh festgelegt, um Designentscheidungen mit finanzieller Klarheit und Kontrolle in Einklang zu bringen.",
        },
        {
          icon: Users,
          title: "Kundeninput",
          description:
            "Wir sammeln frühzeitig relevante Erkenntnisse, um fundierte Entscheidungen zu treffen und das Projekt gezielt an Ihren Bedürfnissen auszurichten.",
        },
      ],
      subSteps: [
        "Strategische Ziele",
        "Standort- & Marktanalyse",
        "Kostenrahmen & Machbarkeit",
        "Entscheidungsgrundlage",
      ],
      clientBenefit:
        "Klarheit und Sicherheit vor Projektstart – keine Überraschungen, keine unnötigen Kosten oder Umwege.",
    },
    investor: {
      id: 1,
      title: "Market Analysis & Strategy",
      color: "#FF6B35",
      description:
        "Data-driven analysis of market positioning, competitive landscape, and financial feasibility. We identify opportunities and mitigate risks.",
      why: "Strategic positioning determines profitability. We analyze market demand and competitive advantages to maximize ROI from day one.",
      keyDecisions: [
        {
          icon: Clock,
          title: "Timeline",
          description: "3-4 weeks including market research",
        },
        {
          icon: DollarSign,
          title: "Financial Model",
          description: "ROI projections and exit strategies",
        },
        {
          icon: Users,
          title: "Stakeholders",
          description: "Investor alignment and partner coordination",
        },
      ],
      subSteps: [
        "Market analysis",
        "Financial feasibility",
        "Zoning analysis",
        "Risk assessment",
        "Investment thesis",
      ],
      clientBenefit:
        "Confident investment decisions backed by data. Clear path to profitability with quantified risks.",
    },
  },
  2: {
    private: {
      id: 2,
      title: "Design & Planning",
      color: "#00B4D8",
      description:
        "Creative exploration within strategic parameters. We develop design solutions that balance aesthetics, function, and budget.",
      why: "Structured creativity ensures beautiful spaces that actually work. We iterate intelligently to refine every detail.",
      keyDecisions: [
        {
          icon: Clock,
          title: "Timeline",
          description: "6-8 weeks for design development",
        },
        {
          icon: DollarSign,
          title: "Budget",
          description: "Material selections and cost validation",
        },
        {
          icon: Users,
          title: "Client Input",
          description: "Regular design reviews and refinements",
        },
      ],
      subSteps: [
        "Concept design",
        "Material selection",
        "Technical detailing",
        "Design refinement",
        "Final approval",
      ],
      clientBenefit:
        "A home that reflects your vision, backed by technical precision and budget control.",
    },
    investor: {
      id: 2,
      title: "Value Engineering",
      color: "#00B4D8",
      description:
        "Market-responsive design optimized for construction efficiency. Every decision is evaluated against cost impact.",
      why: "Design directly impacts costs and sale prices. We engineer value at every level to minimize field changes.",
      keyDecisions: [
        {
          icon: Clock,
          title: "Fast-Track",
          description: "4-6 weeks with overlapping permits",
        },
        {
          icon: DollarSign,
          title: "Cost Control",
          description: "Target cost per SF with variance tracking",
        },
        {
          icon: Users,
          title: "Team Sync",
          description: "Contractor and sales team alignment",
        },
      ],
      subSteps: [
        "Market-driven design",
        "Value engineering",
        "Unit mix optimization",
        "Phasing strategy",
        "Contractor engagement",
      ],
      clientBenefit:
        "Designs that sell fast at premium prices, built efficiently within budget.",
    },
  },
  3: {
    private: {
      id: 3,
      title: "Documentation & Permits",
      color: "#06FFA5",
      description:
        "Technical drawings and permit applications are prepared with precision. We navigate regulations so you don't have to.",
      why: "Complete documentation prevents construction delays and ensures legal compliance.",
      keyDecisions: [
        {
          icon: Clock,
          title: "Timeline",
          description: "4-6 weeks plus permit approval time",
        },
        {
          icon: DollarSign,
          title: "Budget",
          description: "Permit fees and consultant coordination",
        },
        {
          icon: Users,
          title: "Client Input",
          description: "Final approvals before submission",
        },
      ],
      subSteps: [
        "Construction docs",
        "MEP coordination",
        "Permit application",
        "Authority review",
        "Permit approval",
      ],
      clientBenefit:
        "Legal protection and construction clarity. Your contractor has everything needed.",
    },
    investor: {
      id: 3,
      title: "Permit Acceleration",
      color: "#06FFA5",
      description:
        "Expedited permit processing through strategic authority engagement and comprehensive documents.",
      why: "Every week in permitting costs money in holding costs. Our systematic approach accelerates approvals.",
      keyDecisions: [
        {
          icon: Clock,
          title: "Expedited Track",
          description: "3-5 weeks documentation + priority",
        },
        {
          icon: DollarSign,
          title: "Cost Impact",
          description: "Reduced holding costs vs. time value",
        },
        {
          icon: Users,
          title: "Coordination",
          description: "Plan check and expediter management",
        },
      ],
      subSteps: [
        "Comprehensive docs",
        "Clash detection",
        "Expedited strategy",
        "Parallel processing",
        "Lender packages",
      ],
      clientBenefit:
        "Faster permits = lower holding costs and earlier revenue.",
    },
  },
  4: {
    private: {
      id: 4,
      title: "Execution & Delivery",
      color: "#A78BFA",
      description:
        "We oversee construction to ensure design intent is realized. Quality control keeps the project on track.",
      why: "Design vision must translate to built reality. Active oversight prevents expensive mistakes.",
      keyDecisions: [
        {
          icon: Clock,
          title: "Timeline",
          description: "Duration varies by project scope",
        },
        {
          icon: DollarSign,
          title: "Budget",
          description: "Change order review and cost control",
        },
        {
          icon: Users,
          title: "Client Input",
          description: "Regular site meetings and updates",
        },
      ],
      subSteps: [
        "Contractor selection",
        "Construction admin",
        "Site visits",
        "Problem solving",
        "Final walkthrough",
      ],
      clientBenefit:
        "Peace of mind. Your architect ensures the vision becomes reality, exactly as designed.",
    },
    investor: {
      id: 4,
      title: "Construction Mgmt",
      color: "#A78BFA",
      description:
        "Schedule-driven construction oversight protecting quality while maximizing efficiency.",
      why: "Construction delays directly impact returns. Our proactive oversight identifies issues early.",
      keyDecisions: [
        {
          icon: Clock,
          title: "Schedule Control",
          description: "Critical path monitoring and tracking",
        },
        {
          icon: DollarSign,
          title: "Budget Protection",
          description: "Contingency management and tracking",
        },
        {
          icon: Users,
          title: "Coordination",
          description: "Weekly OAC meetings and management",
        },
      ],
      subSteps: [
        "Pre-construction",
        "Fast-track coordination",
        "Progress monitoring",
        "Quality control",
        "Punch list mgmt",
      ],
      clientBenefit:
        "On-time, on-budget delivery maximizes ROI. Reduced financing costs.",
    },
  },
};

// --- StepTimer Component ---

function StepTimer({ steps, color }: { steps: string[]; color: string }) {
  const [activeStep, setActiveStep] = React.useState(-1);

  React.useEffect(() => {
    // Reset when steps/color change (e.g. switching clientType)
    setActiveStep(-1);

    const timers: ReturnType<typeof setTimeout>[] = [];

    steps.forEach((_, idx) => {
      timers.push(
        setTimeout(
          () => {
            setActiveStep(idx);
          },
          600 + idx * 800,
        ),
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [steps, color]);

  // Progress line width: tracks from first circle center to active circle center
  const progressPercent =
    activeStep < 0
      ? 0
      : activeStep >= steps.length - 1
        ? 100
        : (activeStep / (steps.length - 1)) * 100;

  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-6 h-[1px]" style={{ backgroundColor: color }} />
        <h3 className="text-lg font-medium text-gray-200">
          Kernschritte dieser Phase
        </h3>
      </div>

      {/* Desktop: Horizontal Stepper / Mobile: Vertical List */}
      <div className="relative">
        {/* Background Line (Desktop) */}
        <div className="hidden md:block absolute top-[15px] left-0 right-0 h-[1px] bg-white/10 -z-10" />

        {/* Animated Progress Line */}
        <div
          className="hidden md:block absolute top-[15px] left-0 h-[1px] -z-10"
          style={{
            backgroundColor: color,
            width: `${progressPercent}%`,
            transition: "width 0.6s ease",
          }}
        />

        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-4">
          {steps.map((step, idx) => {
            const isActive = idx <= activeStep;
            const isCurrent = idx === activeStep;

            return (
              <div
                key={idx}
                className="flex md:flex-col items-center gap-4 md:gap-0 md:text-center flex-1"
              >
                {/* Circle Indicator */}
                <div
                  className="w-8 h-8 rounded-full border bg-[#09090b] flex items-center justify-center text-xs font-medium z-10 shrink-0"
                  style={{
                    borderColor: isActive ? color : "rgba(255,255,255,0.2)",
                    color: isActive ? color : "gray",
                    transform: isCurrent ? "scale(1.25)" : "scale(1)",
                    boxShadow: isCurrent ? `0 0 12px ${color}80` : "none",
                    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  {idx + 1}
                </div>

                {/* Text */}
                <span
                  className="text-sm md:mt-4"
                  style={{
                    color: isActive ? "#e5e7eb" : "#9ca3af",
                    transition: "color 0.4s ease",
                  }}
                >
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// --- Component ---

export function PhaseDetailPanel({
  phase,
  onClose,
  clientType,
}: PhaseDetailPanelProps) {
  // Always render the hook, but conditionally use data
  const phaseDetail = phase ? phaseData[phase.id][clientType] : null;

  return (
    <AnimatePresence>
      {phase && phaseDetail && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black "
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Main Card */}
          <motion.div
            layoutId={`phase-card-${phase.id}`}
            className="relative w-full max-w-5xl bg-black rounded-t-2xl md:rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[85vh] md:max-h-[80vh]"
            style={{ border: `2px solid ${phaseDetail.color}` }}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          >
            {/* Fixed Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 rounded-full bg-black/50 hover:bg-white/10 transition-colors text-gray-400 hover:text-white backdrop-blur-sm border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1 p-6 md:p-12 no-scrollbar relative">
              {/* 1. Header Section */}
              <div className="flex justify-between items-start mb-12">
                <div className="flex gap-4 md:gap-6 pr-8 md:pr-16">
                  {/* Number Box */}
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center border text-3xl md:text-4xl font-light"
                    style={{
                      borderColor: phaseDetail.color,
                      color: phaseDetail.color,
                      backgroundColor: `${phaseDetail.color}10`,
                    }}
                  >
                    {phaseDetail.id}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex flex-col justify-center">
                    <h2 className="text-2xl md:text-4xl text-white font-light tracking-tight mb-2">
                      {phaseDetail.title}
                    </h2>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-[1px]"
                        style={{ backgroundColor: phaseDetail.color }}
                      />
                      <span className="text-xs md:text-sm uppercase tracking-widest text-gray-500 font-medium">
                        Phase {phaseDetail.id} von 4
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-12">
                {phaseDetail.description}
              </p>

              {/* Divider */}
              <div
                className="w-full h-[1px] "
                style={{ backgroundColor: phaseDetail.color }}
              />

              {/* 2. "Why this phase matters" */}
              <div className="mb-12 pt-10">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-6 h-[1px]"
                    style={{ backgroundColor: phaseDetail.color }}
                  />
                  <h3 className="text-lg font-medium text-gray-200">
                    Warum diese Phase wichtig ist
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-4xl pl-9">
                  {phaseDetail.why}
                </p>
              </div>

              {/* 3. Key Decisions (Grid) */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-6 h-[1px]"
                    style={{ backgroundColor: phaseDetail.color }}
                  />
                  <h3 className="text-lg font-medium text-gray-200">
                    Wichtige Entscheidungen
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {phaseDetail.keyDecisions.map((decision, idx) => {
                    const Icon = decision.icon;
                    return (
                      <div
                        key={idx}
                        className="border border-white/80 rounded-sm p-6 hover:border-white/20 transition-colors "
                      >
                        <div
                          className="w-10 h-10 rounded-xs flex bg-white/15 items-center justify-center mb-4 text-white"
                          style={{
                            color: phaseDetail.color,
                          }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-white font-medium mb-2">
                          {decision.title}
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {decision.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 4. Core Steps (Timeline/Stepper look) */}
              <StepTimer
                steps={phaseDetail.subSteps}
                color={phaseDetail.color}
              />

              <div
                className="border rounded-xl p-6 md:p-8"
                style={{ borderColor: "rgba(255,255,255,0.15)" }}
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-medium text-white mb-1">
                    Ihr Vorteil
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {phaseDetail.clientBenefit}
                  </p>
                </div>
              </div>

              {/* Bottom Spacer for Scroll Hint */}
              <div className="h-24" />
            </div>

            {/* Fixed Scroll Hint Overlay */}
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-40">
              {/* Gradient Fade */}
              <div className="h-32 bg-gradient-to-t from-black via-black/80 to-transparent w-full" />

              {/* Animated Content */}
              <motion.div
                className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex flex-col items-center gap-1"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
                    Mehr Details
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
