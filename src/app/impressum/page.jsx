import React from "react";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-32 md:py-48 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-16 tracking-tight">
          Impressum
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Owner Details */}
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold">
                Eigentümer der Website
              </h2>
              <div className="text-xl md:text-2xl text-gray-900 font-light leading-snug">
                <p className="font-normal">Melih Sezgin</p>
                <a
                  href="mailto:info@ms-architektur.ch"
                  className="block hover:underline underline-offset-4 transition-all"
                >
                  info@ms-architektur.ch
                </a>
                <div className="mt-6 text-gray-600">
                  <p>Altenburgerstrasse 49</p>
                  <p>5200 Brugg</p>
                </div>
              </div>
            </div>
          </section>

          {/* Business Details */}
          <section className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold">
                Handelsregistereintrag
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    Unternehmen
                  </p>
                  <p className="text-xl text-gray-900 font-light">
                    MS-Architektur AG
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    Nummer
                  </p>
                  <p className="text-xl text-gray-900 font-light">
                    CHE-464.721.848
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    Handelsregisteramt
                  </p>
                  <p className="text-xl text-gray-900 font-light">Schwyz</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Subtle decorative line */}
        <div className="mt-32 w-16 h-px bg-gray-200" />
      </div>
    </main>
  );
}