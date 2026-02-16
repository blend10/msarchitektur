import React from "react";
import Image from "next/image";

const Persönlicher = () => {
  return (
    <div className="container mx-auto px-6 sm:px-8 lg:px-0">
      <div>
        <h1 className="text-[#0D0D0D] text-3xl sm:text-4xl lg:text-[50px] font-light leading-tight lg:leading-14 text-center pb-16 sm:pb-24 lg:pb-40">
          Architektur mit Substanz, <br className="hidden sm:block" />{" "}
          Verantwortung und langfristigem <br className="hidden sm:block" />{" "}
          Wert.
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-between pb-12 lg:pb-20">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-start justify-between gap-6 lg:gap-8">
            <h1 className="text-2xl sm:text-3xl lg:text-[32px] text-[#0D0D0D] tracking-tight">
              Ihr persönlicher Architekt
            </h1>
            <p className="text-black font-light">
              Architektur ist mehr als Gestaltung sie ist ein Prozess des
              Verstehens, Strukturierens und des Führens von Ideen in gebaute
              Form. Bei ms architektur wird jedes Projekt mit Klarheit,
              Verantwortung und einem starken Fokus auf Zusammenarbeit
              angegangen.
            </p>
            <p className="text-black font-light">
              Von der ersten Beratung bis zur finalen Realisierung werden
              architektonische Entscheidungen durch sorgfältige Analyse,
              transparente Planung und enge Koordination mit Bauherrschaft,
              Behörden und Fachplanern geprägt. Ziel ist es, funktionale,
              nachhaltige und kontextbezogene Architektur zu schaffen, die
              langfristig Bestand hat.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center gap-2">
          <Image
            src="/images/architect.png"
            alt="architectphoto"
            width={710}
            height={602}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full h-auto"
          />

          <div className="flex flex-row items-center justify-between w-full">
            <h1 className="text-[#111111] font-light">Melih Sezgin</h1>
            <h1 className="text-[#525252] font-light">Architekt</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Persönlicher;
