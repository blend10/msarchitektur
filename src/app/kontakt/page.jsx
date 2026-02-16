"use client";
import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full bg-white">
      {/* --- HERO IMAGE SECTION --- */}
      <div className="relative w-full h-[840px]">
        <Image
          src="/images/kontaktPhoto.jpg"
          alt="Contact Hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* --- CONTACT SECTION (Added) --- */}
      <div className="max-w-[1400px] mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT COLUMN: Contact Info */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-8 tracking-tight">
              Kontaktieren Sie uns
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-12 max-w-md">
              Für Anfragen, Kooperationen oder Projektbesprechungen füllen Sie
              bitte das Formular aus. Unser Team wird so schnell wie möglich
              antworten, um die nächsten Schritte zu besprechen.
            </p>

            <div className="flex flex-col gap-8 text-sm md:text-base font-light text-black">
              <p>+41 56 560 01 16</p>
              <p>info@ms-architektur.ch</p>

              <div className="leading-relaxed">
                <p>MS Architektur AG</p>
                <p>Neuenhoferstrasse 99</p>
                <p>5400 Baden - CH</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Form */}
          <div className="flex flex-col gap-6 mt-4 lg:mt-0">
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-gray-800">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Jane Smith"
                className="w-full border-b border-gray-300 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent"
              />
            </div>

            {/* Company Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-sm text-gray-800">
                Firmenname
              </label>
              <input
                id="company"
                type="text"
                placeholder="Framer Inc."
                className="w-full border-b border-gray-300 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-gray-800">
                E-Mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="jane@framer.com"
                className="w-full border-b border-gray-300 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent"
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-gray-800">
                Nachricht
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Project information"
                className="w-full border-b border-gray-300 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent resize-none"
              />
            </div>

            {/* Submit Button */}
            <button className="mt-8 w-full bg-black text-white py-4 text-sm font-medium tracking-wide hover:bg-gray-900 transition-colors">
              Absenden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
