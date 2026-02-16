export default function ProcessHeroSection() {
  return (
    <section className=" text-white min-h-[400px] flex items-center px-6 lg:px-16">
      <div className="container mx-auto w-full flex flex-col lg:flex-row items-end grid lg:grid-cols-2 gap-12 lg:gap-20 py-20">
        {/* Left Column - Heading */}
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 rounded px-3 py-1.5 text-sm text-blue-400">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
            PRIVATE KUNDEN
          </div>

          {/* Main Heading */}
          <h1 className="text-[20px] lg:text-[30px] xl:text-[40px] font-light leading-tight">
            Strukturierte Prozesse für klare und planbare Bauprojekte
          </h1>
        </div>

        {/* Right Column - Description */}
        <div className="flex items-center">
          <p className="text-[BFBFBF] text-base  leading-relaxed">
            Unser Ansatz verbindet architektonische Qualität mit klarer Struktur
            und verlässlicher Planung. Wir schaffen Transparenz bei Kosten, Zeit
            und Entscheidungen und begleiten Sie durch alle Projektphasen – von
            der ersten Idee bis zur Fertigstellung.
          </p>
        </div>
      </div>
    </section>
  );
}
