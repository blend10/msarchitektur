"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: 1,
    image: "/images/projektstrategie.jpeg",
    title: "Projektstudie und Machbarkeitsanalyse",
    description:
      "Wir analysieren Ihr Bauvorhaben, prüfen baurechtliche Rahmenbedingungen und erarbeiten eine fundierte Projektstudie als Entscheidungsgrundlage.",
  },
  {
    id: 2,
    image: "/images/projektstrategie2.jpeg",
    title: "Individuelle Projektstrategie",
    description:
      "Wir entwickeln gemeinsam mit Ihnen einen klaren Projektablauf und begleiten Sie Schritt für Schritt durch alle Projektphasen.",
  },
  {
    id: 3,
    image: "/images/projektstrategie3.jpeg",
    title: "Architekturprojekt und Baugesuch",
    description:
      "Wir entwerfen das Architekturprojekt und erstellen sämtliche Planunterlagen für die Einreichung des Baugesuchs.",
  },
  {
    id: 4,
    image: "/images/projektstrategie4.jpeg",
    title: "Behördenkoordination und Baubewilligung",
    description:
      "Wir übernehmen die Einreichung des Baugesuchs und begleiten den gesamten Bewilligungsprozess bis zur Baufreigabe.",
  },
  {
    id: 5,
    image: "/images/projektstrategie5.jpeg",
    title: "Finanzierung und notarielle Koordination",
    description:
      "Wir koordinieren bei der Kommunikation mit Behörden und koordinieren notwendige notarielle Prozesse.",
  },
  {
    id: 6,
    image: "/images/projektstrategie6.jpeg",
    title: "Kommunikation mit der Nachbarschaft",
    description:
      "Wir informieren die Nachbarschaft über das Projekt und koordinieren oder transparente Kommunikation während der Bewilligungsphase.",
  },
  {
    id: 7,
    image: "/images/projektstrategie7.jpeg",
    title: "Bauvorbereitung und Ausführungsplanung",
    description:
      "Wir erstellen detaillierte Ausführungspläne und bereiten alle technischen Grundlagen für eine präzise Bauausführung vor.",
  },
  {
    id: 8,
    image: "/images/projektstrategie8.jpeg",
    title: "Fachplanerkoordination",
    description:
      "Wir koordinieren sämtliche Fachplaner wie Statik, Haustechnik und Elektroplanung.",
  },
  {
    id: 9,
    image: "/images/projektstrategie9.jpeg",
    title: "Kostenplanung und Kostenkontrolle",
    description:
      "Wir erstellen Kostenschätzungen und überwachen die Kostenentwicklung während Planung und Bau.",
  },
  {
    id: 10,
    image: "/images/projektstrategie10.jpeg",
    title: "Bauversicherungen",
    description:
      "Wir organisieren notwendige Bauversicherungen wie Bauherrenhaftpflicht und Bauwesensversicherung.",
  },
  {
    id: 11,
    image: "/images/projektstrategie11.jpeg",
    title: "Baukontrollen",
    description:
      "Wir führen regelmässige Besuche auf der Baustelle durch und überwachen Qualität, Termine und Ausführung.",
  },
  {
    id: 12,
    image: "/images/projektstrategie12.jpeg",
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

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [visibleCount, maxIndex, currentIndex]);

  return (
    <section className="w-full container mx-auto px-6 md:px-0 py-20 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div className="">
          <h1 className="text-xl text-black lg:text-2xl xl:text-[47px] font-light leading-tight pb-10">
            Leistungen in denen Architektur, Strategie und Umsetzung
            zusammenfinden.
          </h1>
          <p className="text-black leading-relaxed text-[18px] max-w-2xl">
            Wir begleiten Bauherren und Projektentwickler bei der Planung,
            Entwicklung und Umsetzung von Immobilienprojekten – strukturiert,
            wirtschaftlich und mit klarem Fokus auf Qualität und
            Bewilligungsstrategie.
          </p>
        </div>

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
              <div className="group h-full bg-gray-50 rounded-sm p-0 flex flex-col min-h-[400px] border border-transparent hover:border-gray-100 hover:bg-white transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden">
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
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

      <Link href="/service">
        <div className="md:mt-22 mt-10">
          <button className="border border-gray-800 text-gray-800 text-sm px-8 py-3 hover:bg-gray-800 hover:text-white transition-all duration-300 uppercase tracking-widest font-medium">
            Alle Leistungen
          </button>
        </div>
      </Link>
    </section>
  );
}
