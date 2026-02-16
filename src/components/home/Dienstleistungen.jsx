"use client";
import React, { useEffect, useRef, useState } from "react";

const ScrollRevealText = ({ text, className = "" }) => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Split text into lines by \n
  const lines = text.split("\n");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.9;
      const end = windowHeight * 0.4;

      let p = (start - top) / (start - end);
      if (p < 0) p = 0;
      if (p > 1) p = 1;

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate total characters for smooth per-character reveal
  const totalChars = text.replace(/\n/g, "").length;
  let runningCharCount = 0;

  return (
    <p ref={containerRef} className={className}>
      {lines.map((line, lineIdx) => {
        const chars = line.split("");

        const renderedLine = (
          <React.Fragment key={lineIdx}>
            {chars.map((char, i) => {
              const charIndex = runningCharCount + i;
              const charStart = charIndex / totalChars;
              const isVisible = progress > charStart;

              return (
                <span
                  key={i}
                  className="transition-colors duration-100"
                  style={{
                    color: isVisible ? "#FFFFFF" : "#FFFFFF40", // Lower opacity for better contrast
                  }}
                >
                  {char}
                </span>
              );
            })}
            {lineIdx < lines.length - 1 && <br />}
          </React.Fragment>
        );

        runningCharCount += chars.length;
        return renderedLine;
      })}
    </p>
  );
};

const ServiceItem = ({ number, title, text }) => (
  <div className="flex flex-col items-start justify-start gap-4 h-full">
    <h2 className="text-[#FFFFFF] font-light text-xl md:text-[24px] opacity-50">
      {number}
    </h2>
    <h3 className="text-[#FFFFFF] font-light text-2xl md:text-[28px] mb-2">
      {title}
    </h3>
    <p className="text-[#FCFCFCB2] font-light leading-relaxed text-sm md:text-base">
      {text}
    </p>
  </div>
);

const Dienstleistungen = () => {
  return (
    <div className="bg-[#000000] py-20 md:py-40">
      <div className="container mx-auto px-6">
        <h1 className="text-[18px] md:text-[24px] text-white font-light tracking-tight mb-12 md:mb-20 uppercase opacity-60">
          Dienstleistungen
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-10 md:gap-y-20">
          {/* Main Title / Scroll Text */}
          {/* Spans 2 cols on tablet for emphasis, 1 on desktop/mobile */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 mb-8 lg:mb-0">
            <ScrollRevealText
              className="text-3xl md:text-5xl lg:text-[50px] leading-tight md:leading-snug font-light transition-colors duration-300"
              text={`Architektur,\n abgestimmt auf \nIhre Bedürfnisse`}
            />
          </div>

          <ServiceItem
            number="#01"
            title="Vorprojektierung"
            text="In der Vorprojektierung entwerfen wir das Projekt. Der Bauherrschaft werden verschiedene Entwürfe anhand von Skizzen und Visualisierungen vorgelegt. Wenn klar ist, welche Variante angegangen werden soll, so wird diese auf die erlaubten Möglichkeiten, anhand des Baureglements der betroffenen Gemeinde optimiert."
          />

          <ServiceItem
            number="#02"
            title="Projektierung"
            text="In der Projektierung wird das Entwurfskonzept in ein CAD-basiertes 3D-Modell überführt, wodurch eine präzise Planung und die Minimierung von Fehlern gewährleistet wird. Diese Phase umfasst zudem die Baukostenermittlung, die Terminplanung sowie das gesamte Baubewilligungsverfahren."
          />

          <ServiceItem
            number="#03"
            title="Submission"
            text="Die Submission beginnt nach Einreichung der Baueingabe. Während der behördlichen Prüfung wird die Ausführungsplanung vorbereitet, Offerten eingeholt, Vergabegespräche geführt und Aufträge vergeben, um nach Erhalt der Baubewilligung direkt starten zu können."
          />

          <ServiceItem
            number="#04"
            title="Ausführung"
            text="Nun werden die definitiven Ausführungspläne erstellt. Sämtliche Pläne werden an die Bauunternehmen versandt und der Bau beginnt. Sämtliche Unternehmer werden durch die Bauleitung, welche wir ebenfalls übernehmen, geleitet und koordiniert."
          />

          <ServiceItem
            number="#05"
            title="Kostenkontrolle"
            text="Während der gesamten Bauphase überwachen wir laufend die Kosten und den Baufortschritt. Nach Abschluss der Arbeiten begleiten wir die Abnahme, koordinieren die Übergabe und stellen sicher, dass das Projekt termingerecht und in hoher Qualität abgeschlossen wird."
          />
        </div>
      </div>
    </div>
  );
};

export default Dienstleistungen;
