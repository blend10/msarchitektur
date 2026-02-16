"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const projectsData = [
    {
      id: 1,
      src: "/images/home11.jpg",
      title: "Casa Five",
      description:
        "Umbau / Sanierung, Mehrfamilienhaus mit Gewerbeanteil, Kloten",
    },
    {
      id: 2,
      src: "/images/hom2.png",
      title: "Pura",
      description: "Neubau Mehrfamilienhaus mit 4 Wohnungen",
    },
    {
      id: 3,
      src: "/images/home3.png",
      title: "Vista",
      description:
        "Umbau / Sanierung, Mehrfamilienhaus mit Gewerbeanteil, Kloten",
    },
    {
      id: 4,
      src: "/images/home4.png",
      title: "Sternen",
      description:
        "Umbau / Sanierung, Mehrfamilienhaus mit Gewerbeanteil, Kloten",
    },
    {
      id: 5,
      src: "/images/home5.png",
      title: "Panorama",
      description: "Neubau Mehrfamilienhaus mit 4 Wohnungen",
    },
    {
      id: 6,
      src: "/images/home6.png",
      title: "Unterdorf",
      description:
        "Umbau / Sanierung, Mehrfamilienhaus mit Gewerbeanteil, Kloten",
    },
    {
      id: 7,
      src: "/images/home7.png",
      title: "Birrfeld",
      description: "Neubau Mehrfamilienhaus mit 4 Wohnungen",
    },
    {
      id: 8,
      src: "/images/home8.png",
      title: "Dörfli",
      description:
        "Umbau / Sanierung, Mehrfamilienhaus mit Gewerbeanteil, Kloten",
    },
    {
      id: 9,
      src: "/images/home9.png",
      title: "Sennenberg",
      description:
        "Umbau / Sanierung, Mehrfamilienhaus mit Gewerbeanteil, Kloten",
    },
    {
      id: 10,
      src: "/images/home10.png",
      title: "Eggbühl",
      description:
        "Umbau / Sanierung, Mehrfamilienhaus mit Gewerbeanteil, Kloten",
    },
    {
      id: 11,
      src: "/images/home11.png",
      title: "Reuss",
      description: "Neubau Mehrfamilienhaus mit 4 Wohnungen",
    },
    {
      id: 12,
      src: "/images/home12.png",
      title: "Heimental",
      description:
        "Umbau / Sanierung, Mehrfamilienhaus mit Gewerbeanteil, Kloten",
    },
    {
      id: 13,
      src: "/images/home13.png",
      title: "Kern",
      description: "Neubau Mehrfamilienhaus mit 4 Wohnungen",
    },
    {
      id: 14,
      src: "/images/home14.png",
      title: "Hinterdorf",
      description:
        "Umbau / Sanierung, Mehrfamilienhaus mit Gewerbeanteil, Kloten",
    },
    {
      id: 15,
      src: "/images/home15.png",
      title: "Garten",
      description:
        "Umbau / Sanierung, Mehrfamilienhaus mit Gewerbeanteil, Kloten",
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

  return (
    <div className="bg-black w-full py-12 px-6 pb-24 relative">
      <div className="flex flex-col items-center justify-between container mx-auto gap-12">
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6">
          <div>
            <h1 className="text-white font-light text-[24px] uppercase tracking-wider">
              Unsere Projekte
            </h1>
          </div>
          <div className="flex flex-wrap flex-row items-center justify-start gap-4">
            <button className="text-white font-light border border-white text-[14px] bg-transparent hover:bg-white/20 px-6 py-3 transition-colors">
              All Projects
            </button>
            <button className="text-white font-light border border-white text-[14px] bg-transparent hover:bg-white/20 px-6 py-3 transition-colors">
              Completed
            </button>
            <button className="text-white font-light border border-white text-[14px] bg-transparent hover:bg-white/20 px-6 py-3 transition-colors">
              Ongoing
            </button>
          </div>
        </div>

        {/* --- Projects Grid --- */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projectsData.slice(0, visibleCount).map((project, index) => (
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
        {visibleCount < projectsData.length && (
          <div className="mt-8">
            <button
              onClick={handleLoadMore}
              className="text-white border border-white px-10 py-3 text-sm tracking-[0.2em] hover:bg-white hover:text-black transition-all uppercase"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
