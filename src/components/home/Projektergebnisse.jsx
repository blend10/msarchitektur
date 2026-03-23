import React from "react";
import Image from "next/image";
import { Layers } from "lucide-react";
import Link from "next/link";
const Projektergebnisse = () => {
  return (
    <div className="container mx-auto w-full">
      {" "}
      {/* <div className="grid lg:grid-cols-2 py-20">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-gray-900">
          <Image
            src="/images/leftPhoto.png"
            alt="Architekten bei der Arbeit an Plänen"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent" />
        </div>

        <div className="flex flex-col bg-black bg-gradient-to-l from-white/10 to-transparent justify-center p-12 space-y-8">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15  tracking-wide text-white uppercase">
              <Layers className="w-3.5 h-3.5" />
              Investoren · Methodik
            </span>
          </div>

          <h2 className="text-xl text-white lg:text-2xl xl:text-[40px] font-light leading-tight">
            Werkzeuge für fundierte <br /> Investitionsentscheidungen
          </h2>

          <p className="text-white leading-relaxed max-w-xl">
            Die Leistungen werden gezielt in den einzelnen Projektphasen
            eingesetzt und unterstützen fundierte Projektentscheidungen.
          </p>
        </div>
      </div> */}
      <div className="px-4 md:px-0">
        <h1 className="text-xl text-black lg:text-2xl xl:text-[47px] font-light leading-tight pb-10">
          Methodik für planbare Projektergebnisse
        </h1>
        <p className="text-black leading-relaxed text-[18pxs] ">
          Unsere Methodik strukturiert den gesamten Projektverlauf von der
          Analyse bis zur Umsetzung. <br />
          Durch klar definierte Phasen und präzise Abstimmungen entsteht ein
          transparenter Prozess, der Risiken frühzeitig minimiert und fundierte
          Entscheidungen ermöglicht.So bleibt jedes Projekt jederzeit planbar
          und nachvollziehbar.
        </p>

        <div className="py-10">
          <Link href="/methodik">
            <button className="text-[#333333] border border-[#333333] px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-light tracking-wide uppercase hover:bg-[#333333] hover:text-white transition-colors duration-300">
              Zur Methodik
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projektergebnisse;
