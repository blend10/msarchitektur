"use client";
import React from "react";
import Image from "next/image";

// 1. Define your data here
const servicesData = [
  {
    id: 1,
    title: "Vorprojektierung",
    description:
      "In der Vorprojektierung entwerfen wir das Projekt. Der Bauherrschaft werden verschiedene Entwürfe anhand von Skizzen und Visualisierungen vorgelegt. Wenn klar ist, welche Variante angegangen werden soll, so wird diese auf die erlaubten Möglichkeiten, anhand des Baureglements der betroffenen Gemeinde optimiert.",
    image: "/images/rightImage2.jpg",
  },
  {
    id: 2,
    title: "Projektierung",
    description:
      "In der Projektierung übertragen wir das entworfene Projekt in das CAD-Programm (Zeichnungsprogramm, auf dem sämtliche Pläne erstellt werden). Die ganze Planung wird als 3D Modell aufgebaut, was dazu führt, dass das Fehlerpotenzial minimiert wird. Ebenso Bestandteile dieser Phase sind, die Baukostenermittlung, die Terminplanung, wie auch das ganze Baubewilligungsverfahren.",
    image: "/images/rightImage3.png",
  },
  {
    id: 3,
    title: "Submission",
    description:
      "Die Submission beginnt, sobald die Baueingabe gemacht wurde. Während die Behörden die Pläne kontrollieren, bereiten wir die Ausführungsplanung vor. Hierbei ist das Ziel, die Wartezeit effizient zu nutzen, um mit dem ersten Spatenstich loslegen zu können, wenn die Baubewilligung eingetroffen ist. So werden Offerten eingeholt, Vergabegespräche geführt und Aufträge vergeben.",
    image: "/images/rightImage4.png",
  },
  {
    id: 4,
    title: "Ausführung",
    description:
      "Nun werden die definitiven Ausführungspläne erstellt. Sämtliche Pläne werden an die Bauunternehmen versandt und der Bau beginnt. Sämtliche Unternehmer werden durch die Bauleitung, welche wir ebenfalls übernehmen, geleitet und koordiniert.",
    image: "/images/rightImage5.png",
  },
];

const OurService = () => {
  return (
    <div className="container mx-auto px-6 sm:px-8 lg:px-6 py-16 sm:py-24 lg:py-40">
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-[60px] font-light text-black">
          Our Services
        </h1>
      </div>

      <div className="flex flex-col">
        {/* 2. Map through the data array */}
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="group w-full border-t border-gray-200"
          >
            <div className="flex flex-col lg:flex-row items-start justify-between w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-12 transition-all duration-700 ease-in-out bg-white group-hover:bg-black cursor-pointer">
              {/* Title */}
              <div className="w-full lg:w-1/4 mb-4 sm:mb-6 lg:mb-0">
                <h2 className="text-xl sm:text-2xl lg:text-[24px] font-light text-black transition-colors duration-700 group-hover:text-white">
                  {service.title}
                </h2>
              </div>

              {/* Description */}
              <div className="w-full lg:w-2/5 mb-6 sm:mb-8 lg:mb-0">
                <p className="font-light text-sm sm:text-base text-black leading-relaxed transition-colors duration-700 group-hover:text-white/90">
                  {service.description}
                </p>
              </div>

              {/* Image Container */}
              <div className="w-full lg:w-1/4 flex justify-center lg:justify-end items-center h-[180px] sm:h-[200px] lg:h-[220px]">
                {/* Fixed height container to prevent layout shift */}
                <div
                  className="relative overflow-hidden
                  w-[130px] h-[130px]
                  sm:w-[150px] sm:h-[150px]
                  lg:w-[150px] lg:h-[150px]
                  lg:group-hover:w-[220px] lg:group-hover:h-[220px] 
                  transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 130px, (max-width: 1024px) 150px, 220px"
                    quality={100}
                    priority={service.id === 1} // Priority loading for the first item
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
