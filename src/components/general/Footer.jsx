import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black py-12 md:py-20 relative ">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-0 mb-16 lg:mb-20">
        {/* Logo Section */}

        <div className="w-full lg:w-1/2 flex justify-start">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="logoFooter"
              width={237}
              height={24}
              className="w-[180px] md:w-[237px] h-auto" // Responsive logo size
            />
          </Link>
        </div>

        {/* Links Section */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 text-left">
          {/* Column 1: Projekte */}
          <div className="flex flex-col gap-4">
            <h1 className="text-[18px] md:text-[20px] text-white font-light tracking-[-1.04px]">
              Projekte
            </h1>
            <div className="flex flex-col gap-2 font-thin text-white/80 text-sm md:text-base">
              <Link href="/projekte/sternen">
                {" "}
                <p className="hover:text-white transition-colors cursor-pointer">
                  Sternen
                </p>
              </Link>

              <Link href="/projekte/vista">
                {" "}
                <p className="hover:text-white transition-colors cursor-pointer">
                  Vista
                </p>
              </Link>
              <Link href="/projekte/pura">
                {" "}
                <p className="hover:text-white transition-colors cursor-pointer">
                  Pura
                </p>
              </Link>
              <Link href="/projekte/rundi">
                {" "}
                <p className="hover:text-white transition-colors cursor-pointer">
                  Rundi
                </p>
              </Link>
            </div>
          </div>

          {/* Column 2: Adresse */}
          <div className="flex flex-col gap-4">
            <h1 className="text-[18px] md:text-[20px] text-white font-light tracking-[-1.04px]">
              Adresse
            </h1>
            <div className="flex flex-col gap-2 font-thin text-white/80 text-sm md:text-base">
              <a
                href="https://www.google.com/maps/search/?api=1&query=MS+Architektur+AG+Neuenhoferstrasse+99+5400+Baden"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Adresse auf Google Maps anzeigen"
              >
                <p>MS Architektur AG</p>
                <p>Neuenhoferstrasse 99</p>
                <p>5400 Baden - CH</p>
              </a>
            </div>
          </div>

          {/* Column 3: Kontakt */}
          <div className="flex flex-col gap-4">
            <h1 className="text-[18px] md:text-[20px] text-white font-light tracking-[-1.04px]">
              Kontakt
            </h1>
            <div className="flex flex-col gap-2 font-thin text-white/80 text-sm md:text-base">
              <a
                href="tel:+41565600116"
                className="hover:text-white transition-colors"
              >
                +41 56 560 01 16
              </a>
              <a
                href="mailto:info@ms-architektur.ch"
                className="hover:text-white transition-colors"
              >
                info@ms-architektur.ch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-[#FFFFFFB2] text-[12px] md:text-[14px] font-light tracking-[-0.61px]">
            © {new Date().getFullYear()} ms architektur. Alle Rechte
            vorbehalten.
          </h1>
        </div>

        <div className="order-1 md:order-2 flex flex-row items-center justify-center md:justify-end gap-6 text-[#FFFFFFB2] text-[12px] md:text-[14px] font-light tracking-[-0.61px]">
          <h1 className="hover:text-white transition-colors cursor-pointer">
            Datenschutz
          </h1>
          <h1 className="hover:text-white transition-colors cursor-pointer">
            Nutzungsbedingungen
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
