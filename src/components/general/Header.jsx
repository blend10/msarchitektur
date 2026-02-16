"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const navMain = [
  { label: "Startseite", href: "/" },
  { label: "Studio", href: "/studio" },
  { label: "Projekte", href: "/projekte" },
  { label: "Service", href: "/service" },
  { label: "Methodik", href: "/methodik" },
  { label: "Journal", href: "/journal" },
];

const navRight = [
  { label: "Jobs", href: "/jobs" },
  { label: "Kontakt", href: "/kontakt" },
];

/**
 * Parse any CSS color string into { r, g, b } or null.
 * Handles rgb(), rgba(), hex (#rgb, #rrggbb, #rrggbbaa), and named "transparent".
 */
function parseCSSColor(color) {
  if (!color || color === "transparent" || color === "rgba(0, 0, 0, 0)")
    return null;

  // rgb/rgba
  const rgbMatch = color.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
  if (rgbMatch) {
    return { r: +rgbMatch[1], g: +rgbMatch[2], b: +rgbMatch[3] };
  }

  // hex
  const hexMatch = color.match(/^#([0-9a-f]{3,8})$/i);
  if (hexMatch) {
    let hex = hexMatch[1];
    if (hex.length === 3)
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
    };
  }

  return null;
}

/**
 * Walk up from an element, returning the first non-transparent background color.
 */
function getEffectiveBgColor(el) {
  let node = el;
  while (node && node !== document.documentElement) {
    const bg = getComputedStyle(node).backgroundColor;
    const parsed = parseCSSColor(bg);
    if (parsed) return parsed;
    node = node.parentElement;
  }
  // fallback: assume white
  return { r: 255, g: 255, b: 255 };
}

/**
 * Relative luminance (0 = black, 1 = white).
 */
function luminance({ r, g, b }) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false); // true when bg behind header is dark
  const headerRef = useRef(null);

  const detectBackground = useCallback(() => {
    if (!headerRef.current) return;

    const headerRect = headerRef.current.getBoundingClientRect();
    // Sample a few horizontal points at the vertical center of the header
    const sampleY = headerRect.top + headerRect.height / 2;
    const sampleXs = [
      headerRect.left + headerRect.width * 0.15,
      headerRect.left + headerRect.width * 0.5,
      headerRect.left + headerRect.width * 0.85,
    ];

    let totalLum = 0;
    let count = 0;

    for (const x of sampleXs) {
      // Temporarily hide header so elementFromPoint hits the content behind it
      headerRef.current.style.pointerEvents = "none";
      headerRef.current.style.visibility = "hidden";
      const el = document.elementFromPoint(x, sampleY);
      headerRef.current.style.visibility = "";
      headerRef.current.style.pointerEvents = "";

      if (el) {
        const color = getEffectiveBgColor(el);
        totalLum += luminance(color);
        count++;
      }
    }

    if (count > 0) {
      const avgLum = totalLum / count;
      // threshold: > 0.5 = light background → use dark text
      setIsDark(avgLum < 0.5);
    }
  }, []);

  useEffect(() => {
    detectBackground(); // initial check
    window.addEventListener("scroll", detectBackground, { passive: true });
    window.addEventListener("resize", detectBackground, { passive: true });
    return () => {
      window.removeEventListener("scroll", detectBackground);
      window.removeEventListener("resize", detectBackground);
    };
  }, [detectBackground]);

  // Derived styles - FIXED: inverted the logic
  const textColor = isDark ? "text-gray-100" : "text-gray-900";
  const logoFilter = isDark
    ? "brightness(0) invert(1)" // white logo on dark bg
    : "brightness(0)"; // black logo on light bg
  const logoOpacity = 0.95;
  const mobileLogoFilter = isDark ? "brightness(0) invert(1)" : "brightness(0)";
  const mobileLogoOpacity = isDark ? 0.95 : 0.85;

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-[50] bg-transparent transition-colors duration-500 ${textColor}`}
    >
      {/* Desktop Navigation */}
      <div className="hidden lg:block relative">
        <div className="container mx-auto flex flex-row items-center justify-between py-8">
          {/* Logo */}
          <Link href="/" aria-label="Home">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={195}
              height={24}
              priority
              className="hover:opacity-80 transition-all duration-500"
              style={{ filter: logoFilter, opacity: logoOpacity }}
            />
          </Link>

          {/* Center Nav */}
          <nav className="flex flex-row items-center gap-5 font-light text-[18px] tracking-[-0.72px]">
            {navMain.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:opacity-80 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Nav */}
          <nav className="flex flex-row items-center gap-5 font-light text-[18px] tracking-[-0.72px]">
            {navRight.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:opacity-80 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden relative">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" aria-label="Home" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={160}
              height={20}
              priority
              className="hover:opacity-80 transition-all duration-500"
              style={{ filter: mobileLogoFilter, opacity: mobileLogoOpacity }}
            />
          </Link>

          <button
            type="button"
            className="hover:opacity-80 transition-opacity p-2 -mr-2"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 12H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          id="mobile-menu"
          className={`fixed inset-0 z-99999999999999 transition ${
            open ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity ${
              open ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setOpen(false)}
          />

          {/* Sidebar */}
          <div
            className={`absolute top-0 right-0 h-full w-[86%] max-w-sm backdrop-blur-2xl  bg-[#111111]
            transition-transform duration-300 ease-out ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
              <span className="text-white/80 text-sm tracking-wide">Menü</span>
              <button
                type="button"
                className="text-white/80 hover:text-white transition-colors p-2 -mr-2"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="px-5 py-6">
              <div className="flex flex-col gap-3">
                {navMain.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-3 px-3 rounded-xl hover:bg-white/10 transition-colors text-white text-[18px] font-light"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
                {navRight.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-3 px-3 rounded-xl bg-white/5 hover:bg-white/15 transition-colors text-white text-[18px] font-light"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
