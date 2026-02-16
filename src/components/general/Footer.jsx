import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black py-12 md:py-20 relative ">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-0 mb-16 lg:mb-20">
        {/* Logo Section */}
        <div className="w-full lg:w-1/2 flex justify-start">
          <Image
            src="/images/logo.svg"
            alt="logoFooter"
            width={237}
            height={24}
            className="w-[180px] md:w-[237px] h-auto" // Responsive logo size
          />
        </div>

        {/* Links Section */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 text-left">
          {/* Column 1: Projekte */}
          <div className="flex flex-col gap-4">
            <h1 className="text-[18px] md:text-[20px] text-white font-light tracking-[-1.04px]">
              Projekte
            </h1>
            <div className="flex flex-col gap-2 font-thin text-white/80 text-sm md:text-base">
              <p className="hover:text-white transition-colors cursor-pointer">
                Sternen
              </p>
              <p className="hover:text-white transition-colors cursor-pointer">
                Garten
              </p>
              <p className="hover:text-white transition-colors cursor-pointer">
                Kern
              </p>
              <p className="hover:text-white transition-colors cursor-pointer">
                Reuss
              </p>
            </div>
          </div>

          {/* Column 2: Adresse */}
          <div className="flex flex-col gap-4">
            <h1 className="text-[18px] md:text-[20px] text-white font-light tracking-[-1.04px]">
              Adresse
            </h1>
            <div className="flex flex-col gap-2 font-thin text-white/80 text-sm md:text-base">
              <p>MS Architektur AG</p>
              <p>Neuenhoferstrasse 99</p>
              <p>5400 Baden - CH</p>
            </div>
          </div>

          {/* Column 3: Kontakt */}
          <div className="flex flex-col gap-4">
            <h1 className="text-[18px] md:text-[20px] text-white font-light tracking-[-1.04px]">
              Kontakt
            </h1>
            <div className="flex flex-col gap-2 font-thin text-white/80 text-sm md:text-base">
              <p>+41 56 560 01 16</p>
              <p>info@ms-architektur.ch</p>
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
