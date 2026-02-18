import React from "react";
import Image from "next/image";
import Link from "next/link";

const Gestalten = ({ src }) => {
  return (
    <div className="w-full h-[300px] md:h-[420px] relative">
      <Image
        src={src}
        alt="footerBG"
        fill
        className="object-cover"
        quality={100}
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center px-6 md:px-0">
        <div className="container mx-auto">
          <div className="flex flex-col items-start gap-10 md:gap-20">
            <h1 className="text-[28px] md:text-[36px] text-white font-light leading-9 md:leading-10 tracking-tight">
              Gestalten Sie Ihr <br /> Leben.
            </h1>
            <Link href="/kontakt">
              {" "}
              <button className="bg-white hover:bg-black hover:text-white text-black px-5 py-3 font-light text-sm md:text-base">
                Kontakt
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gestalten;
