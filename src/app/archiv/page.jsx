// AbgeschlosseneProjekte.jsx

const projects = [
  {
    name: "Panorama",
    description: "Neubau 9 Terrassenwohnungen",
    location: "Röschenzstrasse, Laufen",
  },
  {
    name: "Unterfeld",
    description: "Neubau 5 Reihen-Einfamilienhäuser",
    location: "Unterfeldweg, Hunzenschwil",
  },
  {
    name: "Bollacker",
    description: "-",
    location: "Sennenbergstrasse, Killwangen",
  },
  {
    name: "Eggbühl",
    description: "Neubau Doppel-Einfamilienhaus",
    location: "Zürcherstrasse, Oberengstringen",
  },
  {
    name: "Heimental",
    description: "Neubau 6 Terrassenwohnungen",
    location: "Heimentalstrasse, Wettingen",
  },
  {
    name: "Linus",
    description: "Neubau Arealbebauung, 2 MFH mit 39 Wohnungen",
    location: "Aarauerstrasse, Buchs",
  },
  {
    name: "Bodan",
    description: "Restaurant Umbau und Innenausbau",
    location: "Bahnhofstrasse, Romanshorn",
  },
  {
    name: "Avera",
    description: "Neubau 2 Einfamilienhäuser",
    location: "Gartenweg, Tägering",
  },
  {
    name: "Land",
    description: "Neubau Mehrfamilienhaus mit Gewerbeanteil",
    location: "Landstrasse, Wettingen",
  },
  {
    name: "Sternen",
    description: "Kernsanierung Mehrfamilienhaus mit Gewerbeanteil",
    location: "Kirchgasse, Kloten",
  },
  {
    name: "Binfeld",
    description: "Neubau Mehrfamilienhaus",
    location: "Mellingen",
  },
  {
    name: "Reuss",
    description: "Neubau 3 Einfamilienhäuser",
    location: "Reussgasse, Seon",
  },
  {
    name: "Stockacker",
    description: "Umbau Einfamilienhaus",
    location: "Nussbäumen",
  },
  {
    name: "Platten",
    description: "Neubau 6 Terrassenwohnungen",
    location: "Küttingen",
  },
  {
    name: "Schloss",
    description: "Ersatzneubau Mehrfamilienhaus mit Volumenschutz",
    location: "Schlossgasse, Rietheim",
  },
  {
    name: "Äsch",
    description: "Neubau Einfamilienhaus",
    location: "Dürrenmäscherstrasse, Hallwil",
  },
  {
    name: "Langfohren",
    description: "Neubau Doppeleinfamilienhäuser und Einfamilienhäuser",
    location: "Langfohrenstrasse, Fischbach-Göslikon",
  },
  {
    name: "Neumättli",
    description: "Umbau und Sanierung Mehrfamilienhaus 34 Wohnungen",
    location: "Neumättlistrasse, Turgi",
  },
  {
    name: "Oberdorf",
    description: "Ersatzneubau Mehrfamilienhaus im Dorfkern",
    location: "Dorfstrasse, Oberdorf",
  },
  {
    name: "Stieracker",
    description: "Neubau mit 4 Wohnungen",
    location: "Stieracker, Frick",
  },
  {
    name: "Sakral",
    description: "Umbau Gewerbegebäude in Kulturzentrum mit Wohnanteil",
    location: "Baslerstrasse, Birringen",
  },
];

export default function Archiv() {
  return (
    <section className="container mx-auto px-6 py-26">
      {/* Header */}
      <div className="py-20">
        <h1 className="text-6xl font-light text-black leading-tight mb-4">
          Abgeschlossene Projekte im <br /> Überblick.
        </h1>
        <p className="text-sm text-black/80 mb-12">
          Diese Seite bietet eine Übersicht über die abgeschlossenen Projekte.
        </p>
      </div>

      {/* Table */}
      <div className="w-full">
        {/* Column Headers */}
        <div className="grid grid-cols-[1fr_2fr_2fr] border-b border-gray-200 pb-2 mb-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Projekt
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Beschreibung
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Ort
          </span>
        </div>

        {/* Rows */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_2fr_2fr] border-b border-gray-100 py-3 hover:bg-gray-50 transition-colors duration-150"
          >
            <span className="text-sm text-gray-800">{project.name}</span>
            <span className="text-sm text-gray-600">{project.description}</span>
            <span className="text-sm text-gray-600">{project.location}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
