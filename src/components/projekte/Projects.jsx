"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [showArchive, setShowArchive] = useState(false);

  const projectsData = [
    {
      id: 1,
      src: "/images/home3.png",
      title: "Vista",
      description:
        "Umbau / Sanierung, Mehrfamilienhaus mit Gewerbeanteil, Kloten",
    },
    {
      id: 2,
      src: "/images/halden1.jpg",
      title: "Halden",
      description: "Neubau Mehrfamilienhaus mit 4 Wohnungen",
    },
    {
      id: 3,
      src: "/images/casavista1.jpg",
      title: "Casa Five",
      description:
        "Umbau / Sanierung, Mehrfamilienhaus mit Gewerbeanteil, Kloten",
    },
    {
      id: 4,
      src: "/images/hom2.png",
      title: "Pura",
      description: "Neubau Mehrfamilienhaus mit 4 Wohnungen",
    },

    {
      id: 5,
      src: "/images/rundi1.jpg",
      title: "Rundi",
      description: "Neubau Mehrfamilienhaus mit 4 Wohnungen",
    },

    {
      id: 6,
      src: "/images/freva.png",
      title: "Freva",
      description:
        "Umbau / Sanierung, Mehrfamilienhaus mit Gewerbeanteil, Kloten",
    },

    {
      id: 7,
      src: "/images/perl.png",
      title: "Perl",
      description:
        "Umbau / Sanierung, Mehrfamilienhaus mit Gewerbeanteil, Kloten",
    },

    {
      id: 8,
      src: "/images/riet.png",
      title: "Riet",
      description: "Neubau Mehrfamilienhaus mit 4 Wohnungen",
    },

    {
      id: 9,
      src: "/images/yakin.jpg",
      title: "Yakin Arena",
      description: "Neubau Mehrfamilienhaus mit 4 Wohnungen",
    },

    {
      id: 10,
      src: "/images/sternen.png",
      title: "Sternen",
      type: "archive",
      description: "Mehrfamilienhaus mit Gewerbeanteil 'STERNEN'",
    },

    {
      id: 11,
      src: "/images/panorama.png",
      title: "Panorama",
      type: "archive",
      description: "Terrassenwohnungen 'PANORAMA'",
    },

    {
      id: 12,
      src: "/images/startPage.jpg",
      title: "Unterdorf",
      type: "archive",
      description: "Reihen- und Doppeleinfamilienhäuser 'UNTERDORF'",
    },

    {
      id: 13,
      src: "/images/birrfeld.png",
      title: "Birrfeld",
      type: "archive",
      description: "Mehrfamilienhaus 'BIRRFELD'",
    },

    {
      id: 14,
      src: "/images/dörfli.png",
      title: "Doerfli",
      type: "archive",
      description: "Doppeleinfamilienhäuser 'DÖRFLI'",
    },

    {
      id: 15,
      src: "/images/Sennenberg.png",
      title: "Sennenberg",
      type: "archive",
      description: "Reihen- und Doppeleinfamilienhäuser 'SENNENBERG'",
    },

    {
      id: 16,
      src: "/images/eggbühl.png",
      title: "Eggbuhl",
      type: "archive",
      description: "Doppeleinfamilienhäuser 'EGGBÜHL'",
    },

    {
      id: 17,
      src: "/images/reuss.png",
      title: "Reuss",
      type: "archive",
      description: "Neubau Doppelhäuser 'REUSS'",
    },

    {
      id: 18,
      src: "/images/heimental.png",
      title: "Heimental",
      type: "archive",
      description: "Terrassenwohnungen 'HEIMENTAL'",
    },

    {
      id: 19,
      src: "/images/stockacker.png",
      title: "Stockacker",
      type: "archive",
      description: "Einfamilienhaus 'STOCKACKER'",
    },

    {
      id: 20,
      src: "/images/schwader.png",
      title: "Schwader",
      type: "archive",
      description: "Einfamilienhaus 'SCHWADER'",
    },

    {
      id: 21,
      src: "/images/platte.png",
      title: "Platte am Hang",
      type: "archive",
      description: "Terrassenwohnungen 'PLATTE AM HANG'",
    },

    {
      id: 22,
      src: "/images/hallwil.png",
      title: "Hallwil",
      type: "archive",
      description: "Einfamilienhaus 'HALLWIL'",
    },

    {
      id: 23,
      src: "/images/reitheim.png",
      title: "Rietheim",
      type: "archive",
      description: "Ersatzneubau 'RIETHEIM'",
    },

    {
      id: 24,
      src: "/images/langfohren.png",
      title: "Langfohren",
      type: "archive",
      description: "Doppeleinfamilienhäuser und Einfamilienhäuser 'LANGFOHREN'",
    },

    {
      id: 25,
      src: "/images/neumättli.png",
      title: "Neumattli",
      type: "archive",
      description: "Umbau und Sanierung 'NEUMÄTTLI'",
    },

    {
      id: 26,
      src: "/images/mythen.png",
      title: "Mythen",
      type: "archive",
      description: "Neubau Mehrfamilienhaus mit 4 Wohnungen",
    },

    {
      id: 27,
      src: "/images/oberdorf.png",
      title: "Oberdorf",
      type: "archive",
      description: "Ersatzneubau 'OBERDORF'",
    },

    {
      id: 28,
      src: "/images/zwyssig.png",
      title: "Zwyssig",
      type: "archive",
      description: "Umbau und Sanierung 'ZWYSSIG'",
    },

    {
      id: 29,
      src: "/images/sonnenrain.png",
      title: "Sonnenrain",
      type: "archive",
      description: "Neubau 'SONNENRAIN'",
    },

    {
      id: 30,
      src: "/images/unus.png",
      title: "Unus",
      type: "archive",
      description: "Neubau 'UNUS'",
    },

    {
      id: 31,
      src: "/images/stieracker.png",
      title: "Stieracker",
      type: "archive",
      description: "Neubau 'STIERACKER'",
    },

    {
      id: 32,
      src: "/images/bodan.png",
      title: "Bodan",
      type: "archive",
      description: "Umbau und Innenausbau 'BODAN'",
    },

    {
      id: 33,
      src: "/images/sakral.png",
      title: "Sakral",
      type: "archive",
      description: "Umbau  'SAKRAL'",
    },
  ];

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  // Helper: Every 3rd item spans full width
  const isFullWidth = (index) => (index + 1) % 3 === 0;

  // Helper: Create URL slug from title (e.g. "Casa Five" -> "casa-five")
  const createSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };

  const toggleArchive = () => {
    setShowArchive((prev) => !prev);
    setVisibleCount(3); // Reset visible count when toggling
  };

  const filteredProjects = showArchive
    ? projectsData.filter((project) => project.type === "archive")
    : projectsData.filter((project) => project.type !== "archive");

  return (
    <div className="bg-black w-full py-12 px-6 pb-24 relative">
      <div className="flex flex-col items-center justify-between container mx-auto gap-12">
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6">
          <div>
            {/* <h1 className="text-white font-light text-[24px] uppercase tracking-wider">
              Unsere Projekte
            </h1> */}
          </div>
          <div className="flex flex-wrap flex-row items-center justify-start gap-4">
            <button
              onClick={toggleArchive}
              className={` font-light border  border-white text-[14px] px-6 py-3 transition-colors ${
                showArchive
                  ? "bg-white text-black "
                  : "bg-transparent text-white hover:bg-white/20 "
              }`}
            >
              Archive
            </button>
          </div>
        </div>

        {/* --- Projects Grid --- */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredProjects.slice(0, visibleCount).map((project, index) => (
              <Link
                key={project.id}
                href={`/projekte/${createSlug(project.title)}`}
                className={`relative group overflow-hidden w-full h-[400px] md:h-[600px] lg:h-[960px]  block
                  ${isFullWidth(index) ? "md:col-span-2" : "md:col-span-1"}`}
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={
                    isFullWidth(index) ? "100vw" : "(max-width: 768px) 100vw"
                  }
                  quality={100}
                />

                {/* --- Text Overlay Inside Image --- */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end items-center p-8 opacity-100 transition-opacity">
                  <h3 className="text-white text-2xl md:text-[32px] font-light mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#E5E5E5] text-sm md:text-base line-clamp-2 max-w-lg text-center">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* --- Load More Button --- */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-8">
            <button
              onClick={handleLoadMore}
              className="text-white border border-white px-10 py-3 text-sm tracking-[0.2em] hover:bg-white hover:text-black transition-all uppercase"
            >
              Mehr laden
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
