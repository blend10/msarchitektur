// Leistungen.jsx
"use client";
import { useState } from "react";
import Image from "next/image";

const bauherrenServices = [
  {
    image: "/images/projektstrategie.jpeg",
    title: "Projektstudie und Machbarkeitsanalyse",
    description:
      "Wir analysieren Ihr Bauvorhaben, prüfen baurechtliche Rahmenbedingungen und erarbeiten eine fundierte Projektstudie als Entscheidungsgrundlage.",
  },
  {
    image: "/images/projektstrategie2.jpeg",
    title: "Individuelle Projektstrategie",
    description:
      "Wir entwickeln gemeinsam mit Ihnen einen klaren Projektablauf und begleiten Sie Schritt für Schritt durch alle Projektphasen.",
  },
  {
    image: "/images/projektstrategie3.jpeg",
    title: "Architekturprojekt und Baugesuch",
    description:
      "Wir entwerfen das Architekturprojekt und erstellen sämtliche Planunterlagen für die Einreichung des Baugesuchs.",
  },
  {
    image: "/images/projektstrategie4.jpeg",
    title: "Behördenkoordination und Baubewilligung",
    description:
      "Wir übernehmen die Einreichung des Baugesuchs und begleiten den gesamten Bewilligungsprozess bis zur Baufreigabe.",
  },
  {
    image: "/images/projektstrategie5.jpeg",
    title: "Finanzierung und notarielle Koordination",
    description:
      "Wir koordinieren bei der Kommunikation mit Behörden und koordinieren notwendige notarielle Prozesse.",
  },
  {
    image: "/images/projektstrategie6.jpeg",
    title: "Kommunikation mit der Nachbarschaft",
    description:
      "Wir informieren die Nachbarschaft über das Projekt und koordinieren oder transparente Kommunikation während der Bewilligungsphase.",
  },
  {
    image: "/images/projektstrategie7.jpeg",
    title: "Bauvorbereitung und Ausführungsplanung",
    description:
      "Wir erstellen detaillierte Ausführungspläne und bereiten alle technischen Grundlagen für eine präzise Bauausführung vor.",
  },
  {
    image: "/images/projektstrategie8.jpeg",
    title: "Fachplanerkoordination",
    description:
      "Wir koordinieren sämtliche Fachplaner wie Statik, Haustechnik und Elektroplanung.",
  },
  {
    image: "/images/projektstrategie9.jpeg",
    title: "Kostenplanung und Kostenkontrolle",
    description:
      "Wir erstellen Kostenschätzungen und überwachen die Kostenentwicklung während Planung und Bau.",
  },
  {
    image: "/images/projektstrategie10.jpeg",
    title: "Bauversicherungen",
    description:
      "Wir organisieren notwendige Bauversicherungen wie Bauherrenhaftpflicht und Bauwesensversicherung.",
  },
  {
    image: "/images/projektstrategie11.jpeg",
    title: "Baukontrollen",
    description:
      "Wir führen regelmässige Besuche auf der Baustelle durch und überwachen Qualität, Termine und Ausführung.",
  },
  {
    image: "/images/projektstrategie12.jpeg",
    title: "Bauabnahmen",
    description:
      "Wir erstellen Bauabnahmen mit Behörden und Fachleuten und begleiten die Übergabe des Bauwerks.",
  },
];

const projektentwicklerServices = [
  {
    image: "/images/projektstrategie12.jpeg",
    title: "Grundstücks- und Projektanalyse",
    description:
      "Wir analysieren Entwicklungspotenziale von Grundstücken und prüfen baurechtliche sowie planerische Rahmenbedingungen.",
  },
  {
    image: "/images/marktanalyse2.jpeg",
    title: "Projektstrategie und Entwicklungskonzept",
    description:
      "Wir entwickeln eine klare Strategie für Nutzung, Positionierung und Struktur des Projekts.",
  },
  {
    image: "/images/marktanalyse3.jpeg",
    title: "Projekt-Businessplan mit Exit-Strategie",
    description:
      "Wir erstellen einen strukturierten Businessplan inklusive Investitionsstrategie, Vermarktungskonzept und möglicher Exit-Szenarien.",
  },
  {
    image: "/images/marktanalyse4.jpeg",
    title: "Wirtschaftlichkeitsberechnung",
    description:
      "Wir erstellen detaillierte Kosten-, Ertrags- und Renditeanalysen als Entscheidungsgrundlage für Investoren und Banken.",
  },
  {
    image: "/images/marktanalyse5.jpeg",
    title: "Risikoanalyse",
    description:
      "Wir identifizieren projektspezifische Risiken in Planung, Bewilligung und Umsetzung und entwickeln Strategien zur Risikominimierung.",
  },
  {
    image: "/images/marktanalyse6.jpeg",
    title: "Architektur und Baugesuchsplanung",
    description:
      "Wir entwickeln das Architekturprojekt und erstellen sämtliche Planunterlagen für die Baueingabe.",
  },
  {
    image: "/images/marktanalyse7.jpeg",
    title: "Behördenmanagement und Baubewilligung",
    description:
      "Wir koordinieren den gesamten Bewilligungsprozess und begleiten das Projekt bis zur rechtskräftigen Baubewilligung.",
  },
  {
    image: "/images/marktanalyse8.jpeg",
    title: "Zeitmanagement und Projektsteuerung",
    description:
      "Wir strukturieren den Projektablauf, koordinieren Termine und sorgen für eine effiziente Umsetzung.",
  },
  {
    image: "/images/marktanalyse9.jpeg",
    title: "Fachplanerkoordination",
    description:
      "Wir koordinieren sämtliche Fachplaner und führen alle Planungsdisziplinen zusammen.",
  },
  {
    image: "/images/marktanalyse10.jpeg",
    title: "Kostenmanagement",
    description:
      "Wir überwachen die Projektkosten und sorgen für eine wirtschaftliche Projektentwicklung.",
  },
  {
    image: "/images/marktanalyse11.jpeg",
    title: "Käuferbegleitung",
    description:
      "Wir überwachen die Bauausführung und stellen Qualität, Termine und Kosten sicher.",
  },
  {
    image: "/images/marktanalyse12.jpeg",
    title: "Baukoordination und Qualitätskontrolle",
    description:
      "Wir koordinieren die Bauabnahmen und begleiten den Abschluss des Projekts bis zur Übergabe.",
  },
  {
    image: "/images/marktanalyse13.jpeg",
    title: "Bauabnahmen und Projektabschluss",
    description:
      "Wir koordinieren die Bauabnahmen und begleiten den Abschluss des Projekts bis zur Übergabe.",
  },
  {
    image: "/images/marktanalyse14.jpeg",
    title: "Expertise für externe Projekte",
    description:
      "Wir unterstützen Projektentwickler und Bauherren auch beratend bei bestehenden Projekten, beispielsweise bei strategischen, planerischen oder wirtschaftlichen Fragestellungen.",
  },
];

export default function Leistungen() {
  const [activeTab, setActiveTab] = useState("privatkunden");

  const services =
    activeTab === "privatkunden"
      ? bauherrenServices
      : projektentwicklerServices;

  return (
    <section className="container mx-auto px-6 md:px-0 py-20 md:py-40">
      {/* Heading */}
      <h1 className="text-2xl md:text-5xl lg:text-[70px] font-light text-gray-900 leading-tight md:leading-[1.1] mb-6">
        Leistungen, in denen Architektur,
        <br className="hidden md:block" />
        Strategie und Umsetzung
        <br className="hidden md:block" />
        zusammenfinden.
      </h1>

      {/* Subtext */}
      <p className="text-sm text-gray-500 mb-8 max-w-xl">
        Wir begleiten Bauherren und Projektentwickler bei der Planung,
        Entwicklung und Umsetzung von Immobilienprojekten – strukturiert,
        wirtschaftlich und mit klarem Fokus auf Qualität und
        Bewilligungsstrategie.
      </p>

      {/* Tab Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <button
          onClick={() => setActiveTab("privatkunden")}
          className={`flex-1 sm:flex-none px-6 sm:px-12 py-4 text-[10px] sm:text-xs uppercase tracking-widest border ${
            activeTab === "privatkunden"
              ? "bg-black text-white border-black"
              : "bg-white text-black border-black"
          }`}
        >
          Privatkunden
        </button>
        <button
          onClick={() => setActiveTab("projektentwickler")}
          className={`flex-1 sm:flex-none px-6 sm:px-12 py-4 text-[10px] sm:text-xs uppercase tracking-widest border ${
            activeTab === "projektentwickler"
              ? "bg-black text-white border-black"
              : "bg-white text-black border-black"
          }`}
        >
          Projektentwickler
        </button>
      </div>

      {/* Intro line */}
      <p className="text-base text-gray-700 mb-10 max-w-2xl">
        Wir begleiten Ihr Bauprojekt von der ersten Idee bis zur
        <br className="hidden md:block" />
        Schlüsselübergabe – strukturiert, transparent und aus einer Hand.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col group">
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">{service.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
