"use client";

import { useState } from "react";
import Link from "next/link";
import TerminModal from "./TerminModal";

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 px-6 bg-white text-center">
      {/* Heading */}
      <h2 className="text-[30px] md:text-[47px] text-[#0D0D0D] mb-3">
        Wir sind persönlich für Sie da
      </h2>
      <p className="text-[18px] text-center tracking-tight  text-[#0D0D0D] mx-auto mb-12">
        Vereinbaren Sie einen Termin für ein unverbindliches Beratungsgespräch
        oder <br /> stellen Sie uns Ihre Fragen direkt.
      </p>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-10 container mx-auto ">
        {/* Anrufen */}
        <a
          href="tel:+41565552940"
          className="flex-1 p-8 text-left border border-gray-200 flex flex-col items-start justify-between hover:bg-gray-50 transition-colors group transition-all duration-300"
        >
          <div className="flex items-center gap-2 text-gray-700 font-medium mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <span className="text-[18px] text-black">Anrufen</span>
          </div>
          <div className="w-full">
            <p className="text-[14px] text-[#0D0D0D] font-light mb-2">
              +41 56 555 29 40
            </p>
            <p className="text-[14px] text-[#0D0D0D] font-light leading-relaxed mb-6">
              Mo – Do: 08:30 – 17:00 Uhr
              <br />
              Fr: 08:30 – 13:00 Uhr
            </p>
            <div className="w-full py-2.5 border border-black text-center text-xs uppercase tracking-widest font-semibold group-hover:bg-black group-hover:text-white transition-all duration-300">
              Direkt anrufen
            </div>
          </div>
        </a>

        {/* Termin vereinbaren */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="flex-1 p-8 text-left border border-gray-200 flex flex-col items-start justify-between cursor-pointer hover:bg-gray-50 transition-colors group transition-all duration-300"
        >
          <div className="flex items-center gap-2 text-gray-700 font-medium mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            <span className="text-[18px] text-black">Termin vereinbaren</span>
          </div>
          <div className="w-full">
            <p className="text-[14px] text-[#0D0D0D] font-light mb-6">
              Besuchen Sie Ihr Anliegen für einen Rückruf oder buchen Sie einen
              Termin.
            </p>
            <div className="w-full py-2.5 border border-black text-center text-xs uppercase tracking-widest font-semibold group-hover:bg-black group-hover:text-white transition-all duration-300">
              Termin rückruf
            </div>
          </div>
        </div>

        {/* Kontakt */}
        <Link
          href="/kontakt"
          className="flex-1 p-8 text-left border border-gray-200 flex flex-col items-start justify-between hover:bg-gray-50 transition-colors group transition-all duration-300"
        >
          <div className="flex items-center gap-2 text-gray-700 font-medium mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <span className="text-[18px] text-black">Kontakt</span>
          </div>
          <div className="w-full">
            <p className="text-[14px] text-[#0D0D0D] font-light mb-6">
              Haben Sie Fragen? Schreiben Sie uns direkt über unser
              Kontaktformular.
            </p>
            <div className="w-full py-2.5 border border-black text-center text-xs uppercase tracking-widest font-semibold group-hover:bg-black group-hover:text-white transition-all duration-300">
              Zum Kontakt
            </div>
          </div>
        </Link>
      </div>

      <TerminModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
