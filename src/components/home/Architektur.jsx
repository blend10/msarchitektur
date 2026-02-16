import React from "react";
import Image from "next/image";

const Architektur = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      {/* Heading */}
      <h1 className="text-[#0D0D0D] text-3xl md:text-[50px] leading-tight md:leading-snug text-center mb-12 md:mb-20 font-light">
        Architektur entfaltet ihre Wirkung <br className="hidden md:block" />
        nicht durch Lautstärke, sondern <br className="hidden md:block" />
        durch Substanz.
      </h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-start gap-8 ">
        {/* Left Column (Small Image) */}
        {/* Hidden on mobile, shown on medium screens and up, or remove 'hidden' to stack it */}
        <div className="hidden md:block w-full md:w-[35%] lg:w-[30%]">
          <Image
            src="/images/image1.png"
            alt="Architectural detail"
            width={350}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Column (Large Image + Text) */}
        <div className="w-full md:w-[65%] lg:w-[70%]">
          <div className="relative w-full h-[300px] md:h-[450px] lg:h-[600px] mb-8">
            <Image
              src="/images/image2.png"
              alt="Main architectural view"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 70vw"
            />
          </div>

          <div className="space-y-6 md:pl-4 lg:pl-0">
            <p className="text-[#0D0D0D] text-base md:text-lg font-light leading-relaxed max-w-3xl">
              Wir verstehen Architektur als Ergebnis eines präzisen und
              partnerschaftlichen Prozesses. In enger Abstimmung mit
              Bauherrschaften, Fachplanern und Behörden entwickeln wir Lösungen,
              die funktional, wirtschaftlich und gestalterisch überzeugen.
              Grundlage dafür sind klare Prozesse, fundierte Planung und ein
              hoher Anspruch an Qualität.
            </p>

            <p className="text-[#0D0D0D] text-base md:text-lg font-light leading-relaxed max-w-3xl">
              Unsere Leistungen sind modular aufgebaut und werden projektbezogen
              zusammengestellt. So stellen wir sicher, dass jedes Projekt die
              Aufmerksamkeit erhält, die es benötigt — fachlich, organisatorisch
              und in der Umsetzung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architektur;
