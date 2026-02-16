import React from "react";
import Image from "next/image";

const Haltung = () => {
  return (
    <div className="container mx-auto px-6 sm:px-8 lg:px-0 py-16 sm:py-24 lg:py-40 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-20">
      <div className="w-full lg:w-[40%] flex flex-col items-start gap-6 lg:gap-10">
        <h1 className="text-[#0D0D0D] text-3xl sm:text-4xl lg:text-[60px] font-light tracking-tight">
          Unsere Haltung
        </h1>

        <p className="text-[#0D0D0D] tracking-tight">
          Bei MS Architektur betrachten wir jedes Projekt im räumlichen,
          funktionalen und wirtschaftlichen Kontext. Wir arbeiten mit klaren
          Strukturen, präziser Planung und einem hohen Anspruch an Material,
          Konstruktion und Nutzung. So entstehen Lösungen, die gestalterisch
          überzeugen und langfristig tragfähig sind.
        </p>

        <p className="text-[#0D0D0D] tracking-tight">
          Unsere Leistungen sind strukturiert aufgebaut und zugleich flexibel
          genug, um auf projektspezifische Anforderungen einzugehen. Wir
          begleiten Bauvorhaben ganzheitlich von der ersten Idee über die
          Planung bis zur Realisierung und stellen sicher, dass Qualität, Kosten
          und Termine im Gleichgewicht bleiben. Dabei verstehen wir Architektur,
          Nutzung und Umfeld als zusammenhängendes Ganzes.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4 sm:gap-6">
          <p className="text-[#0D0D0D] tracking-tight">Company Brochure</p>

          <button className="w-full sm:w-auto flex flex-row text-white items-center justify-center sm:justify-start gap-2 bg-black px-5 py-3 border-[#333333]">
            <Image
              src="/images/downloadLogo.svg"
              alt="downloadLogo"
              width={14}
              height={14}
            />
            Download
          </button>
        </div>
      </div>

      <div className="w-full lg:w-[60%]">
        <Image
          src="/images/rightPhoto.png"
          alt="Haltung photo"
          width={1000}
          height={700}
          sizes="(min-width: 1024px) 60vw, 100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Haltung;
