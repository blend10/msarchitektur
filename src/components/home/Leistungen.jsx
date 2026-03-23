"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Projektstudie und Machbarkeitsanalyse",
    description:
      "Wir analysieren Ihr Bauvorhaben, prüfen baurechtliche Rahmenbedingungen und erarbeiten eine fundierte Projektstudie als Entscheidungsgrundlage.",
  },
  {
    id: 2,
    title: "Individuelle Projektstrategie",
    description:
      "Wir entwickeln gemeinsam mit Ihnen einen klaren Projektablauf und begleiten Sie Schritt für Schritt durch alle Projektphasen.",
  },
  {
    id: 3,
    title: "Architekturprojekt und Baugesuch",
    description:
      "Wir entwerfen das Architekturprojekt und erstellen sämtliche Planunterlagen für die Einreichung des Baugesuchs.",
  },
  {
    id: 4,
    title: "Behördenkoordination und Baubewilligung",
    description:
      "Wir übernehmen die Einreichung des Baugesuchs und begleiten den gesamten Bewilligungsprozess bis zur Baufreigabe.",
  },
  {
    id: 5,
    title: "Finanzierung und notarielle Koordination",
    description:
      "Wir koordinieren bei der Kommunikation mit Behörden und koordinieren notwendige notarielle Prozesse.",
  },
  {
    id: 6,
    title: "Kommunikation mit der Nachbarschaft",
    description:
      "Wir informieren die Nachbarschaft über das Projekt und koordinieren oder transparente Kommunikation während der Bewilligungsphase.",
  },
  {
    id: 7,
    title: "Bauvorbereitung und Ausführungsplanung",
    description:
      "Wir erstellen detaillierte Ausführungspläne und bereiten alle technischen Grundlagen für eine präzise Bauausführung vor.",
  },
  {
    id: 8,
    title: "Fachplanerkoordination",
    description:
      "Wir koordinieren sämtliche Fachplaner wie Statik, Haustechnik und Elektroplanung.",
  },
  {
    id: 9,
    title: "Kostenplanung und Kostenkontrolle",
    description:
      "Wir erstellen Kostenschätzungen und überwachen die Kostenentwicklung während Planung und Bau.",
  },
  {
    id: 10,
    title: "Bauversicherungen",
    description:
      "Wir organisieren notwendige Bauversicherungen wie Bauherrenhaftpflicht und Bauwesensversicherung.",
  },
  {
    id: 11,
    title: "Baukontrollen",
    description:
      "Wir führen regelmässige Besuche auf der Baustelle durch und überwachen Qualität, Termine und Ausführung.",
  },
  {
    id: 12,
    title: "Bauabnahmen",
    description:
      "Wir erstellen Bauabnahmen mit Behörden und Fachleuten und begleiten die Übergabe des Bauwerks.",
  },
];

export default function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = services.length - visibleCount;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  // Adjust index if visibleCount changes to avoid empty space
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [visibleCount, maxIndex, currentIndex]);

  return (
    <section className="w-full container mx-auto px-6 md:px-0 py-20 overflow-hidden">
      {/* Header & Navigation Arrows "In Line" */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-4">
            Leistungen in denen Architektur, Strategie und Umsetzung
            zusammenfinden.
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-lg">
            Wir begleiten Bauherren und Projektentwickler bei der Planung,
            Entwicklung und Umsetzung von Immobilienprojekten – strukturiert,
            wirtschaftlich und mit klarem Fokus auf Qualität und
            Bewilligungsstrategie.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-800 disabled:opacity-20 hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-sm"
            aria-label="Previous"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-800 disabled:opacity-20 hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-sm"
            aria-label="Next"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="relative">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.3,1)]"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="px-2 flex-shrink-0"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="h-full bg-gray-50 rounded-sm p-8 flex flex-col justify-between min-h-[300px] border border-transparent hover:border-gray-100 hover:bg-white transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
                <div>
                  {/* <div className="text-[10px] text-gray-400 font-medium mb-6 tracking-widest uppercase">
                    Service {String(service.id).padStart(2, "0")}
                  </div> */}
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-4">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <Link href="/service">
        <div className="mt-12">
          <button className="border border-gray-800 text-gray-800 text-sm px-8 py-3 hover:bg-gray-800 hover:text-white transition-all duration-300 uppercase tracking-widest font-medium">
            Alle Leistungen
          </button>
        </div>
      </Link>
    </section>
  );
}
