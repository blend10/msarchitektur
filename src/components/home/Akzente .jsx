import React from "react";
import Image from "next/image";

// Reusable component to avoid code repetition
const ProjectItem = ({ number, title, year, imageSrc, className = "" }) => (
  <div className={className}>
    <div className="relative w-full h-[300px] md:h-[500px]">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 60vw"
      />
    </div>

    <div className="w-full flex items-center justify-between mt-4 border-b border-black/10 pb-2 md:border-none md:pb-0">
      <div className="flex items-center gap-4 md:gap-8 text-[#0D0D0D]">
        <span className="text-sm md:text-base font-medium">{number}</span>
        <h2 className="text-lg md:text-xl font-light">{title}</h2>
      </div>
      <span className="text-[#0D0D0D] text-sm md:text-base">{year}</span>
    </div>
  </div>
);

const Akzente = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <h1 className="text-[#0D0D0D] font-light text-[32px] md:text-[36px] mb-8 md:mb-12">
        Akzente
      </h1>

      {/* Row 1: Mobile (1 col) -> Desktop (60/40) */}
      <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-12 md:gap-8 mb-3">
        <ProjectItem
          number="01"
          title="Casa Five"
          year="2026"
          imageSrc="/images/project1.jpg"
        />
        <ProjectItem
          number="02"
          title="Casa Five"
          year="2026"
          imageSrc="/images/project2.png"
        />
      </div>

      {/* Row 2: Mobile (1 col) -> Desktop (40/60) */}
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-12 md:gap-8">
        <ProjectItem
          number="03"
          title="Casa Five"
          year="2026"
          imageSrc="/images/project1.jpg"
        />
        <ProjectItem
          number="04"
          title="Casa Five"
          year="2026"
          imageSrc="/images/project2.png"
        />
      </div>
    </div>
  );
};

export default Akzente;
