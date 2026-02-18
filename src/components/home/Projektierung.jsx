"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Using lucide-react for cleaner icons, or keep your svg

const Projektierung = () => {
  // 1. Data Array with Dummy Images
  const slides = [
    {
      id: 1,
      src: "/images/section1.png", // Ensure this exists or use a placeholder like "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
      alt: "Projektierung Main View",
    },
    {
      id: 2,
      src: "/images/project1.jpg", // Placeholder
      alt: "CAD Planning View",
    },
    {
      id: 3,
      src: "/images/project2.png", // Placeholder
      alt: "3D Model View",
    },
  ];

  // 2. State for active slide
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // 3. Navigation Functions
  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500); // Matches duration-500
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="container mx-auto px-6 md:px-0 py-12 md:py-20">
      <div className="flex flex-col items-start justify-between gap-8 md:gap-10">
        {/* Image Carousel Wrapper */}
        <div className="relative w-full h-[300px] md:h-[510px] bg-gray-100 overflow-hidden rounded-sm group">
          {/* Main Image */}
          <Image
            key={currentIndex} // Key change triggers React re-render for animation
            src={slides[currentIndex].src}
            alt={slides[currentIndex].alt}
            fill
            className={`object-cover transition-opacity duration-500 ${
              isAnimating ? "opacity-50" : "opacity-100"
            }`}
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw, 80vw"
          />

          {/* Optional: Slide Counter Overlay */}
          <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur px-3 py-1 text-xs font-mono">
            {currentIndex + 1} / {slides.length}
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full max-w-4xl">
          <h1 className="text-[#0D0D0D] text-3xl md:text-[40px] font-light tracking-tight mb-6">
            Projektierung
          </h1>

          <p className="text-[#0D0D0D] text-base md:text-[18px] tracking-tight leading-relaxed font-light mb-8">
            In der Projektierung übertragen wir das entworfene Projekt in das
            CAD-Programm (Zeichnungsprogramm, auf dem sämtliche Pläne erstellt
            werden). Die ganze Planung wird als 3D Modell aufgebaut, was dazu
            führt, dass das Fehlerpotenzial minimiert wird. Ebenso Bestandteile
            dieser Phase sind die Baukostenermittlung, die Terminplanung, wie
            auch das ganze Baubewilligungsverfahren.
          </p>

          {/* Controls */}
          <div className="flex flex-row items-center justify-start gap-4">
            <button
              onClick={handlePrev}
              className="bg-[#EBEBEB] hover:bg-[#dcdcdc] p-4 transition-colors active:scale-95"
              aria-label="Previous Slide"
            >
              {/* You can swap this back to your Image tag if you prefer SVG files */}
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>

            <button
              onClick={handleNext}
              className="bg-[#EBEBEB] hover:bg-[#dcdcdc] p-4 transition-colors active:scale-95"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projektierung;
