"use client"; // <--- Required for interactivity (useState)

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Or use simple SVG/text

export default function PlansSlider({ plans }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPlan = () => {
    setCurrentIndex((prev) => (prev === plans.length - 1 ? 0 : prev + 1));
  };

  const prevPlan = () => {
    setCurrentIndex((prev) => (prev === 0 ? plans.length - 1 : prev - 1));
  };

  if (!plans || plans.length === 0) return null;

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 border-b border-gray-100 pb-4">
          Architectural Plans
        </h2>

        <div className="relative bg-gray-50/50 rounded-sm overflow-hidden min-h-[500px] flex flex-col justify-between">
          <div className="relative flex-1 w-full h-full min-h-[400px] flex items-center justify-center p-8 md:p-12">
            <button
              onClick={prevPlan}
              className="absolute left-4 z-10 p-2 bg-white/80 hover:bg-white text-gray-800 transition-colors rounded-full shadow-sm"
            >
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>

            <div className="relative w-full h-full max-w-4xl mx-auto aspect-[16/9] md:aspect-[4/3]">
              <Image
                src={plans[currentIndex].src}
                alt={plans[currentIndex].alt}
                fill
                className="object-contain transition-opacity duration-500"
              />
            </div>

            <button
              onClick={nextPlan}
              className="absolute right-4 z-10 p-2 bg-white/80 hover:bg-white text-gray-800 transition-colors rounded-full shadow-sm"
            >
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>
          </div>

          <div className="bg-white border-t border-gray-100">
            <div className="flex justify-center items-center overflow-x-auto">
              {plans.map((plan, index) => {
                const isActive = currentIndex === index;
                return (
                  <button
                    key={plan.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative px-8 py-6 text-sm font-medium transition-colors duration-300 whitespace-nowrap ${isActive ? "text-gray-900" : "text-gray-400 hover:text-gray-600"}`}
                  >
                    {plan.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-900" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
