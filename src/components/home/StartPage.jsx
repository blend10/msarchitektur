"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const StartPage = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative h-screen bg-black w-full overflow-hidden">
      {/* Default Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/startPhoto.jpg"
          alt="Start Page Background"
          fill
          className="object-cover"
          priority
        />
        <div className="bg-black/30 absolute inset-0" />
      </div>

      {/* Hover Background (slides from bottom to top) */}
      <div
        className={[
          "absolute inset-0 w-full h-full z-[1]",
          "transition-transform duration-700 ease-out",
          hovered ? "translate-y-0" : "translate-y-full",
        ].join(" ")}
      >
        <Image
          src="/images/startPage.jpg"
          alt="Projekt Hover Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="bg-black/30 absolute inset-0" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-[2]">
        <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 text-center md:text-left">
          <div>
            <h1 className="text-white text-sm font-light uppercase tracking-tight">
              UNTERENGSTRINGEN
            </h1>
          </div>

          <div>
            <h1 className="text-white text-sm font-light uppercase tracking-tight">
              CASA FIVE
            </h1>
          </div>

          <div>
            <h1 className="text-white text-sm font-light uppercase tracking-tight">
              2026
            </h1>
          </div>

          <Link
            href="/projekte"
            className="pt-4 md:pt-0 cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            aria-label="Zum Projekt"
          >
            <div className="border-b border-transparent hover:border-white transition-colors duration-300 ease-in-out">
              <h1 className="text-white text-sm font-light uppercase tracking-tight">
                ZUM PROJEKT
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
