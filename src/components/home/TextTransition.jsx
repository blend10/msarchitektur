"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

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

      // Start revealing when the text enters the bottom 90% of screen
      const start = windowHeight * 0.9;
      // Finish revealing when it reaches the top 20%
      const end = windowHeight * 0.2;

      let p = (start - top) / (start - end);
      if (p < 0) p = 0;
      if (p > 1) p = 1;

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate total character count for correct progress mapping
  const totalChars = text.replace(/\n/g, "").length;
  let runningCharCount = 0;

  return (
    <p ref={containerRef} className={className}>
      {lines.map((line, lineIdx) => {
        const chars = line.split("");

        // Render the line
        const renderedLine = (
          <React.Fragment key={lineIdx}>
            {chars.map((char, i) => {
              // Calculate global index for this character
              const currentCharIndex = runningCharCount + i;

              // Progress threshold for this character
              const charThreshold = currentCharIndex / totalChars;
              const isVisible = progress > charThreshold;

              return (
                <span
                  key={i}
                  className="transition-colors duration-100"
                  style={{
                    color: isVisible ? "#0D0D0D" : "#d4d4d4", // Changed inactive color to lighter gray for better contrast
                  }}
                >
                  {char}
                </span>
              );
            })}
            {lineIdx < lines.length - 1 && <br />}
          </React.Fragment>
        );

        // Update running count
        runningCharCount += chars.length;
        return renderedLine;
      })}
    </p>
  );
};

const TextTransition = () => {
  return (
    <div className="flex flex-col items-start justify-between gap-8 md:gap-12 container mx-auto px-6 md:px-0 py-16 md:py-24 lg:py-32">
      <div className="w-full">
        <ScrollRevealText
          className="text-xl md:text-2xl lg:text-[49px] leading-tight md:leading-snug lg:leading-[1.1] font-light transition-colors duration-300"
          text={`Wir verbinden Architektur und \nProjektmanagement zu nachhaltigen\n Lösungen für Bauherren, Investoren\n und Nutzer.`}
        />
      </div>

      <div>
        <Link href="/unternehmen">
          <button className="text-[#333333] border border-[#333333] px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-light tracking-wide uppercase hover:bg-[#333333] hover:text-white transition-colors duration-300">
            Unternehmen
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TextTransition;
