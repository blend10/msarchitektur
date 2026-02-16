"use client";

import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import React from "react";

interface Phase {
  id: number;
  title: string;
  color: string;
  glowColor: string;
  angle: number;
}

interface ProcessVisualizationProps {
  onPhaseClick: (phaseId: number) => void;
  selectedPhase: number | null;
}

const phases: Phase[] = [
  {
    id: 1,
    title: "Analysis & Strategy",
    color: "#FF6B35",
    glowColor: "rgba(255, 107, 53, 0.4)",
    angle: 0, // kept, but we will override with PHASE_ANGLE_BY_ID for stability
  },
  {
    id: 2,
    title: "Design & Planning",
    color: "#00B4D8",
    glowColor: "rgba(0, 180, 216, 0.4)",
    angle: 90,
  },
  {
    id: 3,
    title: "Documentation & Permits",
    color: "#06FFA5",
    glowColor: "rgba(6, 255, 165, 0.4)",
    angle: 180,
  },
  {
    id: 4,
    title: "Execution & Delivery",
    color: "#A78BFA",
    glowColor: "rgba(167, 139, 250, 0.4)",
    angle: 270,
  },
];

// Lock positions by phase id (requested layout)
const PHASE_ANGLE_BY_ID: Record<number, number> = {
  1: 0, // top
  2: 90, // right
  3: 180, // bottom
  4: 270, // left
} as const;

// Constants
const CONFIG = {
  radius: 200,
  centerX: 250,
  centerY: 250,
  outerRing: 220,
  labelRadius: 300,
  viewBox: 500,
} as const;

const TRANSITIONS = {
  spring: { type: "spring" as const, stiffness: 300, damping: 20 },
  glow: { duration: 1.5, repeat: Infinity, ease: "easeOut" as const },
} as const;

export function ProcessVisualization({
  onPhaseClick,
  selectedPhase,
}: ProcessVisualizationProps) {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  // Stable order: 1(top) -> 2(right) -> 3(bottom) -> 4(left)
  const orderedPhases = useMemo(() => {
    return [...phases].sort(
      (a, b) => (PHASE_ANGLE_BY_ID[a.id] ?? 0) - (PHASE_ANGLE_BY_ID[b.id] ?? 0),
    );
  }, []);

  const phasePositions = useMemo(() => {
    return orderedPhases.map((phase) => {
      const angle = PHASE_ANGLE_BY_ID[phase.id] ?? phase.angle ?? 0;
      const radian = (angle - 90) * (Math.PI / 180);

      return {
        id: phase.id,
        node: {
          x: CONFIG.centerX + CONFIG.radius * Math.cos(radian),
          y: CONFIG.centerY + CONFIG.radius * Math.sin(radian),
        },
        label: {
          x: CONFIG.centerX + CONFIG.labelRadius * Math.cos(radian),
          y: CONFIG.centerY + CONFIG.labelRadius * Math.sin(radian),
        },
      };
    });
  }, [orderedPhases]);

  const connections = useMemo(() => {
    return orderedPhases.map((phase, index) => {
      const nextIndex = (index + 1) % orderedPhases.length;
      const pos1 = phasePositions[index].node;
      const pos2 = phasePositions[nextIndex].node;

      return {
        id: phase.id,
        color: phase.color,
        path: `M ${pos1.x} ${pos1.y} L ${pos2.x} ${pos2.y}`,
      };
    });
  }, [orderedPhases, phasePositions]);

  return (
    <div className="relative w-full bg-transparent mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-30"
      >
        <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
          The <span className="font-normal">Process</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Four integrated phases that transform complexity into clarity
        </p>
      </motion.div>

      {/* Desktop Circular View */}
      <div className="hidden md:block relative w-full aspect-square max-w-[600px]  mx-auto">
        <svg
          className="w-full h-full p-16 overflow-visible"
          viewBox={`0 0 500 500`}
          overflow="visible"
        >
          <defs>
            <radialGradient id="centerGradient">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.02)" />
            </radialGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer rings */}
          <circle
            cx={CONFIG.centerX}
            cy={CONFIG.centerY}
            r={CONFIG.outerRing}
            fill="none"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="1"
          />

          <motion.circle
            cx={CONFIG.centerX}
            cy={CONFIG.centerY}
            r={CONFIG.outerRing}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2"
            strokeDasharray="1380"
            strokeDashoffset="1380"
            animate={{ strokeDashoffset: 0 }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Center circle */}
          <circle
            cx={CONFIG.centerX}
            cy={CONFIG.centerY}
            r="70"
            fill="url(#centerGradient)"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1"
          />

          {/* Connecting lines + flowing dot */}
          {connections.map((conn, index) => (
            <g key={`connection-${conn.id}`}>
              <path
                id={`path-${conn.id}`}
                d={conn.path}
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="2"
              />
              <circle r="3" fill={conn.color} filter="url(#glow)">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  begin={`${index}s`}
                >
                  <mpath href={`#path-${conn.id}`} />
                </animateMotion>
              </circle>
            </g>
          ))}

          {/* Phase nodes */}
          {orderedPhases.map((phase, index) => {
            const pos = phasePositions[index].node;
            const isActive =
              hoveredPhase === phase.id || selectedPhase === phase.id;

            return (
              <g key={`phase-${phase.id}`}>
                {isActive && (
                  <>
                    <motion.circle
                      cx={pos.x}
                      cy={pos.y}
                      r="60"
                      fill="none"
                      stroke={phase.color}
                      strokeWidth="2"
                      initial={{ r: 60, opacity: 0.5 }}
                      animate={{ r: 80, opacity: 0 }}
                      transition={TRANSITIONS.glow}
                    />
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r="55"
                      fill={phase.glowColor}
                      filter="blur(25px)"
                      opacity="0.8"
                    />
                  </>
                )}

                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="50"
                  fill="rgba(0, 0, 0, 0.9)"
                  stroke={isActive ? phase.color : "rgba(255, 255, 255, 0.2)"}
                  strokeWidth={isActive ? "3" : "1"}
                  className="cursor-pointer transition-all duration-300"
                  style={{
                    filter: isActive
                      ? `drop-shadow(0 0 20px ${phase.color})`
                      : "none",
                  }}
                  onMouseEnter={() => setHoveredPhase(phase.id)}
                  onMouseLeave={() => setHoveredPhase(null)}
                  onClick={() => onPhaseClick(phase.id)}
                />

                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="38"
                  fill="none"
                  stroke={isActive ? phase.color : "rgba(255, 255, 255, 0.1)"}
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity={isActive ? 0.6 : 0.3}
                  className="pointer-events-none transition-all duration-300"
                />

                <text
                  x={pos.x}
                  y={pos.y + 6}
                  textAnchor="middle"
                  fill={isActive ? phase.color : "white"}
                  fontSize="28"
                  fontWeight="300"
                  className="pointer-events-none transition-all duration-300"
                  style={{
                    filter: isActive
                      ? `drop-shadow(0 0 10px ${phase.color})`
                      : "none",
                  }}
                >
                  {phase.id}
                </text>
              </g>
            );
          })}

          {/* Center text */}
          <text
            x={CONFIG.centerX}
            y={CONFIG.centerY}
            textAnchor="middle"
            fill="white"
            fontSize="16"
            fontWeight="300"
            opacity="0.5"
          >
            <tspan x={CONFIG.centerX} dy="3">
              Projektzyklus
            </tspan>
          </text>
        </svg>

        {/* Phase labels */}
        {orderedPhases.map((phase, index) => {
          const labelPos = phasePositions[index].label;
          const isActive =
            hoveredPhase === phase.id || selectedPhase === phase.id;
          const leftPercent = (labelPos.x / CONFIG.viewBox) * 100;
          const topPercent = (labelPos.y / CONFIG.viewBox) * 100;

          return (
            <div
              key={`label-${phase.id}`}
              className="absolute cursor-pointer"
              style={{
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => setHoveredPhase(phase.id)}
              onMouseLeave={() => setHoveredPhase(null)}
              onClick={() => onPhaseClick(phase.id)}
            >
              <motion.div
                className="relative px-6 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 border"
                style={{
                  backgroundColor: isActive
                    ? `${phase.color}15`
                    : "rgba(0, 0, 0, 0.8)",
                  borderColor: isActive
                    ? phase.color
                    : "rgba(255, 255, 255, 0.1)",
                  boxShadow: isActive ? `0 0 30px ${phase.color}40` : "none",
                }}
                animate={{
                  scale: isActive ? 1.05 : 1,
                }}
                transition={TRANSITIONS.spring}
              >
                <div className="text-center whitespace-nowrap">
                  <div
                    className="text-base font-medium transition-all duration-300 mb-1"
                    style={{ color: isActive ? phase.color : "white" }}
                  >
                    {phase.title}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      height: isActive ? "auto" : 0,
                    }}
                    className="flex items-center justify-center gap-1 text-xs overflow-hidden"
                    style={{ color: phase.color }}
                  >
                    Click to explore
                    <ArrowRight className="w-3 h-3" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Mobile Vertical List View */}
      <div className="md:hidden flex flex-col gap-4">
        {orderedPhases.map((phase) => (
          <motion.div
            key={`mobile-phase-${phase.id}`}
            className="relative p-6 rounded-2xl border bg-black/50 backdrop-blur-sm overflow-hidden"
            style={{ borderColor: phase.color }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => onPhaseClick(phase.id)}
          >
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <span className="text-6xl font-black text-white">{phase.id}</span>
            </div>

            <div className="relative z-10">
              <h3
                className="text-xl font-medium mb-2"
                style={{ color: phase.color }}
              >
                {phase.title}
              </h3>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>Tap to explore details</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Glow effect */}
            <div
              className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: phase.color }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
