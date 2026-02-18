"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

export default function ProjectGallery({ images }) {
  const [visibleCount, setVisibleCount] = useState(5);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Track last tap time for mobile double-tap detection
  const lastTapRef = useRef({ time: 0, target: null });

  const showMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const openLightbox = (index) => {
    // Only open if it's not a video
    if (images[index]?.type !== "video") {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goNext = useCallback(() => {
    if (!images || images.length === 0) return;

    let nextIndex = (lightboxIndex + 1) % images.length;
    // Skip videos
    while (images[nextIndex]?.type === "video" && nextIndex !== lightboxIndex) {
      nextIndex = (nextIndex + 1) % images.length;
    }
    setLightboxIndex(nextIndex);
  }, [images, lightboxIndex]);

  const goPrev = useCallback(() => {
    if (!images || images.length === 0) return;

    let prevIndex = (lightboxIndex - 1 + images.length) % images.length;
    // Skip videos
    while (images[prevIndex]?.type === "video" && prevIndex !== lightboxIndex) {
      prevIndex = (prevIndex - 1 + images.length) % images.length;
    }
    setLightboxIndex(prevIndex);
  }, [images, lightboxIndex]);

  // Handle double-tap/double-click for both desktop and mobile
  const handleInteraction = (index, event) => {
    const isVideo = images[index]?.type === "video";
    if (isVideo) return;

    const now = Date.now();
    const timeSinceLastTap = now - lastTapRef.current.time;
    const isSameTarget = lastTapRef.current.target === event.currentTarget;

    // Double-tap detection: within 300ms on same element
    if (timeSinceLastTap < 300 && isSameTarget) {
      event.preventDefault();
      openLightbox(index);
      lastTapRef.current = { time: 0, target: null }; // Reset
    } else {
      lastTapRef.current = { time: now, target: event.currentTarget };
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, goNext, goPrev]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  if (!images || images.length === 0) return null;

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  // Get current lightbox media
  const currentMedia = lightboxIndex !== null ? images[lightboxIndex] : null;
  const isLightboxVideo = currentMedia?.type === "video";

  return (
    <>
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

              const isVideo = media.type === "video";

              return (
                <div
                  key={index}
                  className={`relative group rounded-sm overflow-hidden bg-gray-100 ${
                    isVideo ? "" : "cursor-zoom-in"
                  } ${widthClass} ${aspectClass}`}
                  onDoubleClick={() => !isVideo && openLightbox(index)}
                  onTouchEnd={(e) => handleInteraction(index, e)}
                >
                  {isVideo ? (
                    <video
                      src={media.src}
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <>
                      <Image
                        src={media.src}
                        alt={media.alt || `Project media ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                        sizes="100vw"
                      />
                      {/* Hover hint overlay */}
                      <div className="absolute top-3 right-3 md:hidden pointer-events-none">
                        <span className="bg-black/65 text-white text-[10px] tracking-widest uppercase px-3 py-2 backdrop-blur-sm rounded">
                          Doppelt tippen
                        </span>
                      </div>
                      <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <span className="bg-black/60 text-white text-xs tracking-widest uppercase px-4 py-2 backdrop-blur-sm">
                          <span className="hidden md:inline">
                            Doppelklick zum Vergrößern
                          </span>
                          <span className="md:hidden">
                            Doppelt tippen zum Vergrößern
                          </span>
                        </span>
                      </div>
                    </>
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

      {/* Lightbox */}
      {lightboxIndex !== null && currentMedia && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Schließen"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path
                d="M4 4L24 24M24 4L4 24"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest uppercase">
            {lightboxIndex + 1} / {images.length}
          </div>

          {/* Prev Arrow */}
          <button
            className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors z-10 p-2"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Vorheriges Bild"
          >
            <svg width="14" height="24" viewBox="0 0 10 16" fill="none">
              <path
                d="M8.5 1L1.5 8L8.5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Media Container */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[85vh] mx-16 md:mx-24"
            onClick={(e) => e.stopPropagation()}
          >
            {isLightboxVideo ? (
              <video
                src={currentMedia.src}
                className="w-full h-full object-contain"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <Image
                src={currentMedia.src}
                alt={currentMedia.alt || ""}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            )}
          </div>

          {/* Next Arrow */}
          <button
            className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors z-10 p-2"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Nächstes Bild"
          >
            <svg width="14" height="24" viewBox="0 0 10 16" fill="none">
              <path
                d="M1.5 1L8.5 8L1.5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
