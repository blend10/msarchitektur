"use client";
import React, { useState } from "react";
import Image from "next/image";
import Gestalten from "@/components/home/Gestalten";

const JournalPage = () => {
  const [activeFilter, setActiveFilter] = useState("ALLE");

  const projects = [
    {
      id: 1,
      category: "NEUE PROJEKTE",
      year: "05.12.2025",
      title: "Aktuelle Projekte in Planung, Ausführung oder Visualisierung",
      image: "/images/plan1.png",
      alt: "Modern villa with pool",
    },
    {
      id: 2,
      category: "NEUE PROJEKTE",
      year: "25.10.2025",
      title: "Aktuelle Projekte in Planung, Ausführung oder Visualisierung",
      image: "/images/plan2.png",
      alt: "Residential complex with gardens",
    },
    {
      id: 3,
      category: "ENTWURFSSKIZZEN",
      year: "17.12.2025",
      title:
        "Erste Skizzen und konzeptionelle Studien als Grundlage unserer Architektur",
      image: "/images/plan3.png",
      alt: "Architectural sketch of building",
    },
    {
      id: 4,
      category: "ENTWURFSSKIZZEN",
      year: "12.06.2025",
      title:
        "Erste Skizzen und konzeptionelle Studien als Grundlage unserer Architektur",
      image: "/images/plan4.png",
      alt: "Architectural sketch of villa",
    },
    {
      id: 5,
      category: "ENTWURFSSKIZZEN",
      year: "01.07.2025",
      title:
        "Erste Skizzen und konzeptionelle Studien als Grundlage unserer Architektur",
      image: "/images/plan5.png",
      alt: "Architectural sketch of commercial building",
    },
    {
      id: 6,
      category: "NEUE PROJEKTE",
      year: "05.12.2025",
      title: "Baustellenmomente während der Realisierung unserer Projekte.",
      image: "/images/plan6.jpg",
      alt: "Construction site meeting",
    },
    {
      id: 7,
      category: "NEUE PROJEKTE",
      year: "22.08.2025",
      title: "Aktuelle Projekte in Planung, Ausführung oder Visualisierung",
      image: "/images/plan7.png",
      alt: "Contemporary building design",
    },
    {
      id: 8,
      category: "NEUE PROJEKTE",
      year: "14.07.2025",
      title: "Baustellenmomente während der Realisierung unserer Projekte.",
      image: "/images/plan8.jpg",
      alt: "Construction team discussion",
    },
    {
      id: 9,
      category: "NEUE PROJEKTE",
      year: "16.04.2025",
      title: "Aktuelle Projekte in Planung, Ausführung oder Visualisierung",
      image: "/images/plan9.png",
      alt: "Modern residence design",
    },
  ];

  const filteredProjects =
    activeFilter === "ALLE"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div>
      <div className="container mx-auto px-8 py-40">
        <div className="mb-12">
          <h1 className="text-[60px] text-[#21201B] font-light tracking-tight leading-tight mb-8">
            Unser Journal zeigt Projekte, Skizzen und <br />
            Einblicke ehrlich und nah am Prozess.
          </h1>

          <div className="flex gap-4 ">
            {["ALLE", "NEUE PROJEKTE", "ENTWURFSSKIZZEN", "BAUSTELLE"].map(
              (filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={` px-4 py-2 text-sm  transition-colors border  ${
                    activeFilter === filter
                      ? "bg-black text-[#FAFFFF]"
                      : "bg-[#F9F9F9] text-black hover:bg-[black] hover:text-[#FAFFFF]"
                  }`}
                >
                  {filter}
                </button>
              ),
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer overflow-hidden"
            >
              <div className="relative h-[450px] mb-4 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute w-full flex gap-1 bottom-0 bg-black text-white text-xs px-3 py-2.5 uppercase tracking-wide">
                  <p>[{project.year}]</p> <p>[{project.category}]</p>
                </div>
              </div>
              <p className="text-[#21201B] text-base leading-relaxed">
                {project.title}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="border border-[#21201B] text-[#21201B] px-8 py-3 text-sm uppercase tracking-wide hover:bg-[#21201B] hover:text-white transition-colors duration-300">
            ALLE ANZEIGEN
          </button>
        </div>
      </div>
      <Gestalten src="/images/footerBg.png" />
    </div>
  );
};

export default JournalPage;
