"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ProjectGallery({ images }) {
  const [visibleCount, setVisibleCount] = useState(5);

  const showMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  if (!images || images.length === 0) return null;

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-wrap gap-y-4 md:gap-y-6">
          {visibleImages.map((media, index) => {
            const positionInCycle = index % 3;
            let widthClass = "";
            let aspectClass = "";

            if (positionInCycle === 0) {
              widthClass = "w-full md:w-[calc(60%-0.75rem)] mr-0 md:mr-6";
              aspectClass = "aspect-[16/10]";
            } else if (positionInCycle === 1) {
              widthClass = "w-full md:w-[calc(40%-0.75rem)]";
              aspectClass = "aspect-[16/10]";
            } else {
              widthClass = "w-full";
              aspectClass = "aspect-[21/9]";
            }

            return (
              <div
                key={index}
                className={`relative rounded-sm overflow-hidden bg-gray-100 ${widthClass} ${aspectClass}`}
              >
                {/* CHECK MEDIA TYPE HERE */}
                {media.type === "video" ? (
                  <video
                    src={media.src}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <Image
                    src={media.src}
                    alt={media.alt || `Project media ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                    sizes="100vw"
                  />
                )}
              </div>
            );
          })}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={showMore}
              className="px-8 py-3 border border-black text-xs font-medium tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-300"
            >
              Mehr anzeigen
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
