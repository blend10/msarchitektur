"use client";
import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full bg-white">
      {/* --- HERO IMAGE SECTION --- */}
      <div className="relative w-full h-[840px]">
        <Image
          src="/images/kontaktPhoto2.png"
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
              Für Anfragen füllen Sie bitte das Formular aus. Wir werden
              anschliessend in Kontakt mit Ihnen treten.
            </p>

            <div className="flex flex-col gap-8 text-sm md:text-base font-light text-black">
              <a
                href="tel:+41565552940"
                className="hover:opacity-70 transition-opacity w-fit"
              >
                056 555 29 40
              </a>
              <a
                href="mailto:info@ms-architektur.ch"
                className="hover:opacity-70 transition-opacity w-fit"
              >
                info@ms-architektur.ch
              </a>

              <a
                href="https://www.google.com/maps/place/Roosstrasse+47,+8832+Wollerau,+Schweiz/@47.190306,8.72233,3405m/data=!3m1!1e3!4m6!3m5!1s0x479ab22eb5b040ab:0x9063f1aff08c0cba!8m2!3d47.1903064!4d8.7223295!16s%2Fg%2F11cs5psvhc?hl=de&entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed hover:opacity-70 transition-opacity w-fit"
              >
                <p>MS Architektur AG</p>
                <p>Roossstrasse 47</p>
                <p>8832 Wollerau</p>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=MS+Architektur+AG+Neuenhoferstrasse+99+5400+Baden"
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed hover:opacity-70 transition-opacity w-fit"
              >
                <p>Büro:</p>
                <p>MS Architektur AG</p>
                <p>Neuenhoferstrasse 99</p>
                <p>5400 Baden</p>
              </a>
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
                placeholder="Vorname Nachname"
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
                placeholder="Architektur AG"
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
                placeholder="info@architektur.ch"
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
                placeholder="Ihre Nachricht"
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
