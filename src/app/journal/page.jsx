"use client";
import React from "react";
import Image from "next/image";
import Gestalten from "@/components/home/Gestalten";

const JournalPage = () => {
  const projects = [
    {
      id: 1,
      year: "März 2026",
      title: "Pura, Oftringen – Baubeginn im Juli geplant",
      image: "/images/plan1.jpg",
      alt: "Modern villa with pool",
      description:
        "Der Baustart des Projekts Pura ist für Juli 2026 vorgesehen. Die Umsetzung des Projekts tritt damit in die nächste Phase ein.",
    },
    {
      id: 2,
      year: "März 2026",
      title: "Halden, Wohlenschwil – Baubeginn im Juni geplant",
      image: "/images/plan2.jpg",
      alt: "Residential complex with gardens",
      description:
        "Das Projekt Halden geht in die Realisierung. Der Baubeginn ist für Juni 2026 terminiert.",
    },
    {
      id: 3,
      year: "März 2026",
      title: "CasaFive, Unterengstringen – Baubeginn im Juni geplant",
      image: "/images/plan3.jpg",
      alt: "Architectural sketch of building",
      description:
        "Der Baustart für das Projekt CasaFive ist auf Juni 2026 angesetzt. Die Umsetzung der fünf Einheiten beginnt planmässig.",
    },
    {
      id: 4,
      year: "23. März 2026",
      title: "Neue Website online",
      image: "/images/plan4.png",
      alt: "Architectural sketch of villa",
      description:
        "Die neue Website der MS Architektur AG ist seit dem 23. März 2026 online und präsentiert Projekte, Methodik und Leistungen in neuer Form.",
    },
    {
      id: 5,
      year: "14. März 2026",
      title: "Yakin Arena, Oberengstringen – Projekt erfolgreich abgeschlossen",
      image: "/images/plan5.jpg",
      alt: "Architectural sketch of commercial building",
      description:
        "Sämtliche Auflagen für die Schlussabnahme wurden am 14. März 2026 bereinigt und genehmigt. Das Projekt Yakin Arena ist damit abgeschlossen.",
    },
    {
      id: 6,
      year: "Februar 2026",
      title: "Vista, Spreitenbach – Projekt geht in die Baueingabe",
      image: "/images/plan6.png",
      alt: "Construction site meeting",
      description:
        "Das Projekt Vista wurde im Februar 2026 mit der Gemeinde vorbesprochen und wird nun zur Baueingabe eingereicht.",
    },
    {
      id: 7,
      year: "12. Februar 2026",
      title: "Riet, Unterengstringen – Baubewilligung erhalten",
      image: "/images/plan7.png",
      alt: "Contemporary building design",
      description:
        "Am 12. Februar 2026 wurde für das Projekt Riet die Baubewilligung erteilt.",
    },
    {
      id: 8,
      year: "Januar 2026",
      title: "CasaFive, Unterengstringen – Vermarktung gestartet",
      image: "/images/plan8.jpg",
      alt: "Construction team discussion",
      description:
        "Im Januar 2026 startet die Vermarktung des Projekts CasaFive. Es werden fünf Einheiten angeboten, Preise ab CHF 3.5 Mio.",
    },
    {
      id: 9,
      year: "November 2025",
      title: "Halden, Wohlenschwil – Vermarktung gestartet",
      image: "/images/plan9.jpg",
      alt: "Modern residence design",
      description:
        "Seit November 2025 befindet sich das Projekt Halden in der Vermarktung. Es werden vier Doppeleinfamilienhäuser ab CHF 1.3 Mio. angeboten.",
    },
    {
      id: 10,
      year: "November 2025",
      title: "Pura, Oftringen – Vermarktung gestartet",
      image: "/images/plan10.jpg",
      alt: "Modern residence design",
      description:
        "Das Projekt Pura ist seit November 2025 in der Vermarktung. Es werden vier Eigentumswohnungen ab CHF 830’000 angeboten.",
    },
    {
      id: 11,
      year: "6. Oktober 2025",
      title: "Halden, Wohlenschwil – Baubewilligung erhalten",
      image: "/images/plan11.jpg",
      alt: "Modern residence design",
      description:
        "Am 6. Oktober 2025 wurde für das Projekt Halden die Baubewilligung erteilt.",
    },
    {
      id: 12,
      year: "29. September 2025",
      title: "CasaFive, Unterengstringen – Baubewilligung erhalten",
      image: "/images/plan12.jpg",
      alt: "Modern residence design",
      description:
        "Am 29. September 2025 wurde das Projekt CasaFive bewilligt.",
    },
    {
      id: 13,
      year: "9. Juli 2025",
      title: "Pura, Oftringen – Baubewilligung erhalten",
      image: "/images/plan13.jpg",
      alt: "Am 9. Juli 2025 wurde für das Projekt Pura die Baubewilligung erteilt.",
      description:
        "Am 9. Juli 2025 wurde für das Projekt Pura die Baubewilligung erteilt.",
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-6 md:px-8 py-24 md:py-40">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-[60px] text-[#21201B] font-light tracking-tight leading-tight mb-8">
            Unser Journal zeigt Projekte, Skizzen und <br className="hidden md:block" />
            Einblicke ehrlich und nah am Prozess.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.slice(0, 13).map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer overflow-hidden"
            >
              <div className="relative h-[300px] md:h-[450px] overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className=" w-full flex gap-1 text-black/50 text-[14px] py-1 uppercase ">
                <p>{project.year}</p>
              </div>
              <p className="text-[#21201B] font-semibold mb-1">
                {project.title}
              </p>
              <p className="text-[#21201B] text-[14px] leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Gestalten src="/images/footerBg.png" />
    </div>
  );
};

export default JournalPage;
