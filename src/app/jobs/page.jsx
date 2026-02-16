import React from "react";
import Image from "next/image";
import Link from "next/link";
import Gestalten from "@/components/home/Gestalten";

const jobs = [
  {
    title: "ARCHITEKT:IN",
    description:
      "Entwurf und Entwicklung von Architekturprojekten von der Konzeptphase bis zur Ausführung mit hohem gestalterischem und technischem Anspruch.",
    tags: ["VOLLZEIT", "FERNARBEIT"],
    href: "/",
  },
  {
    title: "JUNIOR ARCHITEKT:IN",
    description:
      "Mitarbeit bei Entwurf, Planung und Visualisierung in allen Projektphasen.",
    tags: ["VOLLZEIT", "FERNARBEIT"],
    href: "/",
  },
  {
    title: "PROJEKTLEITER:IN ARCHITEKTUR",
    description:
      "Verantwortung für Termine, Kosten und Qualität in enger Zusammenarbeit mit Bauherrschaften, Behörden und Planungsteams.",
    tags: ["VOLLZEIT", "BÜRO"],
    href: "/",
  },
  {
    title: "PRAKTIKANT:IN ARCHITEKTUR",
    description:
      "Unterstützung des Teams bei Entwurf, Planung und Visualisierung sowie Einblick in alle Projektphasen.",
    tags: ["PRAKTIKUM", "BÜRO"],
    href: "/",
  },
];

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
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

      {/* Jobs Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="group border-b border-[#9C9C9C] py-8 last:border-none flex flex-col lg:flex-row lg:items-center justify-between gap-8 transition-colors hover:bg-gray-50/50"
            >
              <div className="lg:w-1/2 max-w-2xl">
                <h2 className="text-3xl font-light tracking-wide text-[#111111] mb-4 uppercase">
                  {job.title}
                </h2>
                <p className="text-gray-500 font-light leading-relaxed max-w-xl">
                  {job.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-12 lg:w-1/2 lg:justify-end">
                <div className="flex gap-4">
                  {job.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="border w-[110px] border-[#111111] p-2 text-center text-xs font-medium tracking-widest text-[#111111] uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={job.href}
                  className="group/link flex items-center gap-2 text-xs font-medium tracking-widest text-[#111111] uppercase hover:opacity-60 transition-opacity"
                >
                  JETZT BEWERBEN
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                  >
                    <path
                      d="M1 9L9 1M9 1H3M9 1V7"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Gestalten src="/images/footerBg.png" />
    </div>
  );
};

export default Page;
