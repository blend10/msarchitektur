import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

const projects = [
  {
    id: "casa-five",
    title: "Casa Five",
    image: {
      src: "/images/videoProject.mp4",
      alt: "Facade Detail",
      type: "video",
    },
    paragraph:
      "An der Talacherstrasse in Unterengstringen entsteht ein Ensemble aus fünf freistehenden Villen, die sich entlang der bestehenden Topografie staffeln. Die Setzung der Baukörper folgt dem Hang und bildet eine klare Struktur, welche die Höhenlinien aufnimmt und den Gebäuden eine präzise Einordnung im Gelände gibt. Zwischen den Häusern entstehen Aussenräume, die sich natürlich aus der Geländebewegung ergeben. Jede Villa entwickelt sich über mehrere Ebenen, die dem Terrain angepasst sind. ",
    title2: "Fünf Villen im Dialog mit der Landschaft",
    paragraph2:
      "Die Wohn- und Aufenthaltsräume öffnen sich hangseitig zu den Aussenflächen und erhalten viel Tageslicht. Klare Grundrisse organisieren im Erdgeschoss Wohnen, Essen und Kochen mit direkten Übergängen nach aussen, während die oberen Geschosse die privaten Räume und zusätzliche Terrassen aufnehmen. Begrünte und nutzbare Dachflächen gliedern die Baukörper vertikal.",
    paragraph3:
      "Die fünf Häuser sind eigenständige Adressen und formen dennoch ein zusammenhängendes Gesamtbild. Die Fassaden zeigen eine ruhige, zurückhaltende Gestaltung mit klaren Öffnungen und einer einheitlichen Materialität. Die Höhenentwicklung bleibt innerhalb der vorgegebenen Masse und unterstützt den ruhigen Ausdruck der Bebauung. Die Einstellhalle ist im unteren Geländeteil integriert und verbindet die Gebäude unterirdisch. Dadurch entsteht ein verkehrsberuhigtes Wohnumfeld, in dem die Aussenräume frei nutzbar bleiben. CASA FIVE steht für eine präzise gesetzte, topografisch abgestimmte Wohnarchitektur. Das Projekt verbindet kompakte Baukörper, einfache Linien und eine selbstverständliche Beziehung zwischen Gebäude und Landschaft.",
    rightImage: "/images/home11.jpg",
    adresse: "Talacherstrasse",
    plz: "8103",
    ort: "Unterengstringen",
    baujahr: "2026",
    bauherrschaft: "Murat Yakin",
    plans: [
      {
        id: 0,
        label: "First Floor",
        src: "/images/upperdoor.png",
        alt: "First Floor",
      },
      {
        id: 1,
        label: "Second Floor",
        src: "/images/plans/second-floor.jpg",
        alt: "Second Floor",
      },
      {
        id: 2,
        label: "Upper Floor",
        src: "/images/upperdoor.png",
        alt: "Upper Floor",
      },
    ],
    gallery: [
      { src: "/images/gallery1.jpg", alt: "Exterior Garden" },
      { src: "/images/gallery2.jpg", alt: "Pool View" },
      { src: "/images/gallery3.mp4", alt: "Facade Detail", type: "video" },
      { src: "/images/gallery4.jpg", alt: "Bathroom" },
      { src: "/images/gallery5.jpg", alt: "Bedroom" },
      { src: "/images/gallery6.jpg", alt: "Living Room" },
      { src: "/images/gallery7.jpg", alt: "Kitchen" },
      { src: "/images/gallery8.mp4", alt: "Terrace", type: "video" },
      { src: "/images/gallery9.jpg", alt: "Hallway" },
      { src: "/images/gallery10.jpg", alt: "Entrance" },
      { src: "/images/gallery11.jpg", alt: "Entrance" },
    ],
  },
];

import PlansSlider from "@/components/projekte/PlansSlider";
import ProjectGallery from "@/components/projekte/ProjectGallery";
import Gestalten from "@/components/home/Gestalten";

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;

  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  if (!project) return notFound();

  const prevIndex = projectIndex === 0 ? projects.length - 1 : projectIndex - 1;
  const nextIndex = projectIndex === projects.length - 1 ? 0 : projectIndex + 1;

  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-screen w-full">
        {project.image.type === "video" ? (
          <video
            src={project.image.src}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        )}

        <div className="relative z-10 h-full">
          <div className="container mx-auto h-full flex items-end pb-20">
            <div className="flex flex-col md:flex-row w-full gap-8 px-4 md:px-0">
              <h1 className="font-light tracking-tight w-full md:w-1/2 text-white text-4xl md:text-[60px] leading-tight">
                {project.title}
              </h1>
              <p className="font-light tracking-tight w-full md:w-1/2 text-white text-lg">
                {project.paragraph}
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 leading-tight">
                  {project.title2 || project.title}
                </h2>
                <div className="prose prose-lg text-gray-600 font-light space-y-6 max-w-none">
                  {project.paragraph2 && <p>{project.paragraph2}</p>}
                  {project.paragraph3 && <p>{project.paragraph3}</p>}
                  {project.details && <p>{project.details}</p>}
                </div>
              </div>
              <div className="mt-12 pt-8 grid grid-cols-2 md:grid-cols-5 gap-6 text-sm border-t border-transparent lg:border-none">
                {project.adresse && (
                  <div className="flex flex-col">
                    <span className="text-[#0D0D0D] mb-1">Adresse:</span>
                    <span className="text-gray-600 font-light">
                      {project.adresse}
                    </span>
                  </div>
                )}
                {project.plz && (
                  <div className="flex flex-col">
                    <span className="text-[#0D0D0D] mb-1">PLZ:</span>
                    <span className="text-gray-600 font-light">
                      {project.plz}
                    </span>
                  </div>
                )}
                {project.ort && (
                  <div className="flex flex-col">
                    <span className="text-[#0D0D0D] mb-1">Ort:</span>
                    <span className="text-gray-600 font-light">
                      {project.ort}
                    </span>
                  </div>
                )}
                {project.baujahr && (
                  <div className="flex flex-col">
                    <span className="text-[#0D0D0D] mb-1">Baujahr:</span>
                    <span className="text-gray-600 font-light">
                      {project.baujahr}
                    </span>
                  </div>
                )}
                {project.bauherrschaft && (
                  <div className="flex flex-col">
                    <span className="text-[#0D0D0D] mb-1">Bauherrschaft:</span>
                    <span className="text-gray-600 font-light">
                      {project.bauherrschaft}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] lg:aspect-square bg-gray-100 rounded-sm overflow-hidden">
              <Image
                src={project.rightImage || project.image}
                alt={project.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {project.plans && project.plans.length > 0 && (
        <div className="pb-16">
          <PlansSlider plans={project.plans} />
        </div>
      )}
      {project.gallery && project.gallery.length > 0 && (
        <ProjectGallery images={project.gallery} />
      )}

      <div className="container mx-auto max-w-250 px-4 md:px-0 py-20 border-t border-gray-100 mt-16">
        <div className="flex justify-between items-center w-full">
          <Link
            href={`/projekte/${prevProject.id}`}
            className="group flex items-center gap-4 text-sm tracking-widest uppercase hover:opacity-60 transition-opacity"
          >
            <span className="text-gray-400 group-hover:text-black transition-colors">
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                className="transform rotate-180"
              >
                <path
                  d="M1.5 1L8.5 8L1.5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="hidden md:inline text-gray-900">
              FRÜHERES PROJEKT
            </span>
            <span className="md:hidden text-gray-900">Zurück</span>
          </Link>

          <Link
            href={`/projekte/${nextProject.id}`}
            className="group flex items-center gap-4 text-sm tracking-widest uppercase hover:opacity-60 transition-opacity"
          >
            <span className="hidden md:inline text-gray-900">
              NÄCHSTES PROJEKT
            </span>
            <span className="md:hidden text-gray-900">Weiter</span>
            <span className="text-gray-400 group-hover:text-black transition-colors">
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                <path
                  d="M1.5 1L8.5 8L1.5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      <Gestalten src="/images/footerBg.png" />
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}
