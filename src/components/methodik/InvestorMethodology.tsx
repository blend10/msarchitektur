import React from "react";
import { Search, Globe, Share2, ShieldCheck, Layers } from "lucide-react";
import Image from "next/image";

// Data for the grid items to keep the JSX clean
const methodSteps = [
  {
    title: "Analyse & Machbarkeit",
    icon: <Search className="w-5 h-5 text-gray-300" />,
    description:
      "Analyse von Grundstück, Nutzung, Budget und baurechtlichen Rahmenbedingungen als Grundlage für realistische und fundierte Projektentscheidungen.",
    goal: "Frühzeitige Klärung von Rahmenbedingungen und Risiken, um eine sichere Grundlage für alle weiteren Entscheidungen zu schaffen.",
  },
  {
    title: "Strategische Zieldefinition",
    icon: <Globe className="w-5 h-5 text-gray-300" />,
    description:
      "Definition klarer Projektziele, transparenter Kostenstrukturen und realistischer Zeitrahmen als Grundlage für eine kontrollierte Projektentwicklung.",
    goal: "Festlegung von Prioritäten und Entscheidungsgrundlagen zu Umfang, Budget und Zeitplan.",
  },
  {
    title: "Konzept & Kostenstruktur",
    icon: <Share2 className="w-5 h-5 text-gray-300" />,
    description:
      "Entwicklung eines abgestimmten architektonischen, technischen und wirtschaftlichen Konzepts durch zentrale Koordination aller Projektbeteiligten.",
    goal: "Sicherstellung eines umsetzbaren Projekts mit klarer Kostenstruktur und abgestimmten Entscheidungsgrundlagen.",
  },
  {
    title: "Umsetzung & Steuerung",
    icon: <ShieldCheck className="w-5 h-5 text-gray-300" />,
    description:
      "Realisierung des Projekts durch präzise Planung, Ausschreibung, Bauleitung und laufende Kontrolle von Qualität, Kosten und Terminen bis zur Fertigstellung.",
    goal: "Sicherstellung der planmäßigen Umsetzung und Einhaltung von Budget, Qualität und Zeitrahmen.",
  },
];

export default function InvestorMethodology() {
  return (
    <section className="text-white py-20 px-5 md:px-0">
      <div className="container mx-auto w-full">
        <div className="grid lg:grid-cols-2 mb-24">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-gray-900">
            <Image
              src="/images/leftPhoto.png"
              alt="Architekten bei der Arbeit an Plänen"
              width={1000}
              height={1000}
              quality={100}
              className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-700 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent" />
          </div>

          <div className="flex flex-col bg-black bg-gradient-to-l from-white/10 to-transparent justify-center p-12 space-y-8">
            {/* Badge */}
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15  tracking-wide text-white uppercase">
                <Layers className="w-3.5 h-3.5" />
                Investoren · Methodik
              </span>
            </div>

            <h2 className="text-xl lg:text-2xl xl:text-[40px] font-light leading-tight">
              Werkzeuge für fundierte <br /> Investitionsentscheidungen
            </h2>

            <p className="text-[BFBFBF] leading-relaxed max-w-xl">
              Die Leistungen werden gezielt in den einzelnen Projektphasen
              eingesetzt und unterstützen fundierte Projektentscheidungen.
            </p>
          </div>
        </div>

        {/* Bottom Section: 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {methodSteps.map((step, index) => (
            <div key={index} className="flex gap-6">
              {/* Icon Box */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center bg-white/15 rounded border border-gray-700/50">
                  {step.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-white">{step.title}</h3>

                <p className="text-[BFBFBF] text-sm leading-relaxed font-light pb-4">
                  {step.description}
                </p>

                <div>
                  <h4 className="text-white text-md mb-2  font-light">
                    Ziel dieser Phase
                  </h4>
                  <p className="text-[BFBFBF] text-sm leading-relaxed font-light">
                    {step.goal}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
