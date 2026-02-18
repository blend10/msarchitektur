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
    title2: "Nutzerorientierte, wertschaffende Projekte",
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
    // plans: [
    //   {
    //     id: 0,
    //     label: "First Floor",
    //     src: "/images/upperdoor.png",
    //     alt: "First Floor",
    //   },
    //   {
    //     id: 1,
    //     label: "Second Floor",
    //     src: "/images/plans/second-floor.jpg",
    //     alt: "Second Floor",
    //   },
    //   {
    //     id: 2,
    //     label: "Upper Floor",
    //     src: "/images/upperdoor.png",
    //     alt: "Upper Floor",
    //   },
    // ],
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
      { src: "/images/gallery12.png", alt: "Entrance" },
      { src: "/images/gallery13.png", alt: "Entrance" },
      { src: "/images/gallery14.png", alt: "Entrance" },
      { src: "/images/gallery15.png", alt: "Entrance" },
      { src: "/images/gallery16.png", alt: "Entrance" },
      { src: "/images/gallery17.png", alt: "Entrance" },
      { src: "/images/gallery18.png", alt: "Entrance" },
      { src: "/images/gallery19.png", alt: "Entrance" },
      { src: "/images/gallery20.png", alt: "Entrance" },
    ],
  },
  {
    id: "pura",
    title: "Pura",
    image: {
      src: "/images/pura1.png",
      alt: "Facade Detail",
      type: "image",
    },
    paragraph:
      "Der Neubau an der Winkelstrasse in Oftringen ersetzt ein bestehendes Wohnhaus und fügt sich als klar gegliederter Baukörper in die umliegende Wohnstruktur ein. Das Gebäude orientiert sich in Volumen und Höhe an den bestehenden Nachbarbauten und nimmt deren Massstab auf. ",
    title2: "Nutzerorientierte, wertschaffende Projekte",
    paragraph2:
      "Die Architektur ist von einfachen Linien, ruhigen Fassadenflächen und grosszügigen Öffnungen geprägt. Die Wohnungen sind so organisiert, dass die Wohn- und Essbereiche nach Westen ausgerichtet sind und gute Lichtverhältnisse ermöglichen. Die Grundrisse folgen einer klaren, funktionalen Struktur mit logisch angeordneten Räumen und kurzen Wegen. Terrassen und Aussenflächen erweitern die Wohnungen und schaffen direkte Bezüge zwischen Innen- und Aussenraum. Die Attikawohnung mit ihrer zweiten Ebene bildet den Abschluss des Gebäudes, ohne dessen Gesamtform zu überzeichnen.",
    paragraph3:
      "Die Materialisierung ist zurückhaltend gewählt und unterstützt den ruhigen Ausdruck des Hauses. Eine effiziente Gebäudehülle und eine zeitgemässe Haustechnik bilden die Grundlage für einen nachhaltigen Betrieb. Im Untergeschoss sind die Nebenräume, der Technikbereich und die Einstellhalle angeordnet. Die Erschliessung ist kompakt und klar geführt. PURA steht für einen reduzierten, funktionalen Wohnbau, der sich selbstverständlich in sein Umfeld einfügt und mit einfachen Mitteln eine hohe räumliche Qualität schafft.",
    rightImage: "/images/pura2.jpg",
    adresse: "Winkelstrasse 18",
    plz: "4665",
    ort: "Oftringen",
    baujahr: "2026",
    bauherrschaft: "Core Real Estate AG",

    gallery: [
      {
        src: "/images/puroGallery1.jpg",
        alt: "Exterior Garden",
        type: "image",
      },
      { src: "/images/puroGallery2.jpg", alt: "Pool View", type: "image" },
      { src: "/images/puroGallery3.png", alt: "Facade Detail", type: "image" },
      { src: "/images/puroGallery4.jpg", alt: "Bathroom", type: "image" },
      { src: "/images/puroGallery5.jpg", alt: "Bedroom", type: "image" },
      { src: "/images/puroGallery6.jpg", alt: "Living Room", type: "image" },
      { src: "/images/puroGallery7.jpg", alt: "Kitchen", type: "image" },
      { src: "/images/puroGallery8.jpg", alt: "Terrace", type: "image" },
    ],
  },
  {
    id: "freva",
    title: "Freva",
    image: {
      src: "/images/freva.png",
      alt: "Facade Detail",
      type: "image",
    },
    paragraph:
      "An zentraler Lage entlang der Dorfstrasse entsteht ein Doppeleinfamilienhaus, das mit klaren Volumen und einer ruhigen Materialwahl in die bestehende Wohnstruktur eingebettet ist. Der kompakte Baukörper entwickelt sich über zwei Vollgeschosse und ein ausgebautes Dachgeschoss. Seine Gliederung folgt einer schlichten, funktionalen Organisation, die beiden Haushälften gleichwertige Räume und Aussenflächen bietet.",
    title2: "Nutzerorientierte, wertschaffende Projekte",
    paragraph2:
      "Die Fassaden kombinieren eine feine Putzstruktur im Erdgeschoss mit vertikal gegliederten Oberflächen in den oberen Geschossen. Die zarten Grautöne schaffen ein zurückhaltendes, zeitloses Erscheinungsbild. Die Garage setzt sich mit einer leicht wärmeren Farbnuance ab und ergänzt das Ensemble funktional und gestalterisch. Die Dachflächen werden mit hellbraunen Biberschwanzziegeln gedeckt und erhalten durch einen präzise ausgeführten Aluminium-Dachrandabschluss eine klare Linie.",
    paragraph3:
      "Die Grundrisse orientieren sich an einem offenen, gut belichteten Wohnkonzept. Im Erdgeschoss verbinden sich Kochen, Essen und Wohnen zu einer grosszügigen Einheit mit direktem Bezug zum Aussenraum. In den oberen Geschossen liegen ruhige, gut proportionierte Zimmer, ergänzt durch funktionale Nebenräume. Beide Einheiten verfügen über ein ausgebautes Dachgeschoss, das zusätzlichen Wohnraum schafft und den Baukörper harmonisch abschliesst. Im Aussenraum fügen sich Kieswege, Grünflächen und leicht modellierte Gartenräume um das Gebäude. Terrassen mit natürlichen Farbtönen, französische Geländer und schlichte Beschattungselemente prägen eine zurückhaltende, wohnliche Atmosphäre. Die Material- und Farbpalette folgt dem Anspruch an ein ruhiges, langlebiges und klar lesbares Gesamtbild. Freva zeigt eine Architektur, die sich bewusst auf einfache Mittel stützt: klare Formen, geordnete Strukturen und eine konsistente Materialität. Dadurch entsteht ein Wohnhaus, das sich selbstverständlich in sein Umfeld einfügt und zugleich eine moderne, präzise Handschrift trägt.",
    rightImage: "/images/freva.png",
    adresse: "Dorfstrasse",
    plz: "5326",
    ort: "Schwaderloch",
    baujahr: "2026",
    bauherrschaft: "Familie Pajaziti",
  },
  {
    id: "halden",
    title: "Halden",
    image: {
      src: "/images/halden1.jpg",
      alt: "Facade Detail",
    },
    paragraph:
      "An der Haldenstrasse in Wohlenschwil entsteht ein Ensemble aus vier Wohneinheiten, organisiert in zwei Doppelhäusern. Die Häuser fügen sich in die bestehende Wohnstruktur ein und folgen mit ihrer Setzung der Geländeneigung. Durch die leichte Staffelung der Baukörper entsteht eine klare Ordnung, welche die Topografie respektiert und gleichzeitig eigenständige Adressen schafft.",
    title2: "Nutzerorientierte, wertschaffende Projekte",
    paragraph2:
      "Die Gebäude sind kompakt gehalten und folgen einer schlichten, funktionalen Gliederung. Jede Einheit ist über drei Geschosse organisiert und orientiert sich mit den Wohnbereichen zum Tal hin. Grosszügige Öffnungen bringen viel Tageslicht in die Haupträume und schaffen direkte Bezüge zu den privaten Aussenflächen. Die Grundrisse sind klar strukturiert. Im Erdgeschoss liegen Wohnen, Essen und Kochen mit direktem Zugang zu den Sitzplätzen. Die oberen Geschosse nehmen die privaten Räume auf, ergänzt durch Balkone und Terrassen. Die Dachgeschosse erweitern den Wohnraum und bieten zusätzliche Aufenthaltsbereiche mit Weitblick. Die innere Erschliessung ist einfach und logisch geführt.",
    paragraph3:
      "Die Materialisierung ist bewusst zurückhaltend. Ruhige Fassadenflächen, präzise Öffnungen und eine klare Dachform prägen den Ausdruck der Häuser. Die Gestaltung orientiert sich an einer zeitlosen Sprache, die in die ländlich geprägte Umgebung passt, ohne auf moderne Elemente zu verzichten. Die Einstellhalle ist im Gelände integriert und hält den Aussenraum frei von Fahrbewegungen. Nebenräume, Technik und Keller befinden sich im Untergeschoss. Terrassen, Grünflächen und Hecken strukturieren den Aussenraum und schaffen eine natürliche Grenze zu den angrenzenden Parzellen. Das Projekt HALDEN steht für eine einfache, funktionale Architektur, die auf die örtlichen Gegebenheiten reagiert und mit klaren Formen und ruhigen Volumen ein stimmiges Wohnensemble bildet.",
    rightImage: "/images/halden1.jpg",
    adresse: "Haldenstrasse",
    plz: "5512",
    ort: "Wohlenschwil",
    baujahr: "2026",
    bauherrschaft: "Immohub AG",

    gallery: [
      { src: "/images/halden2.jpg", alt: "Exterior Garden" },
      { src: "/images/halden3.jpg", alt: "Pool View" },
      { src: "/images/halden1.jpg", alt: "Pool View" },
    ],
  },
  {
    id: "perl",
    title: "PERL",
    image: {
      src: "/images/perl.jpg",
      alt: "Facade Detail",
    },
    title2: "Nutzerorientierte, wertschaffende Projekte",
    rightImage: "/images/perl1.jpg",
    adresse: "Haldenstrasse",
    plz: "5512",
    ort: "Wohlenschwil",
    baujahr: "2026",
    bauherrschaft: "Immohub AG",

    gallery: [
      { src: "/images/perl2.jpg", alt: "Exterior Garden" },
      { src: "/images/perl1.jpg", alt: "Pool View" },
      { src: "/images/perl1.jpg", alt: "Pool View" },
    ],
  },
  {
    id: "riet",
    title: "riet",
    image: {
      src: "/images/riet.png",
      alt: "Facade Detail",
    },
    paragraph:
      "Das bestehende Einfamilienhaus an der Hinteren Rietstrasse wird umfassend erneuert, erweitert und räumlich neu organisiert. Die Planung basiert auf der vorhandenen Vorstudie und führt diese zu einem vollständigen, behördentauglichen Projekt weiter. Ziel ist es, die bestehende Bausubstanz architektonisch und funktional weiterzuentwickeln und in eine zeitgemässe, klare Gebäudestruktur zu überführen.",
    title2: "Nutzerorientierte, wertschaffende Projekte",
    paragraph2:
      "Der Entwurf sieht eine präzise Abstimmung zwischen Abbruch- und Neubauanteilen vor. Die bestehenden Räume werden in ihrer Organisation überarbeitet, während neue Wohn-, Schlaf- und Nebenräume ergänzt werden. Im Erd- und Obergeschoss entstehen offene, gut belichtete Wohnbereiche, während das Dachgeschoss für neue Zimmerprogramme optimiert wird. Die räumliche Neuordnung schafft klarere Abläufe und stärkt die Beziehung zwischen den Geschossen. Im Untergeschoss werden Fitness-, Wellness- und Funktionsräume neu strukturiert. Diese Erweiterung nutzt das vorhandene Terrain und führt zu einer eigenständigen Aufenthaltsqualität im tieferliegenden Bereich. Ergänzend wird der Aussenraum mit Pool, Sitzplatz und einem neuen Zugang ausgestaltet. Die Planung berücksichtigt die topografischen Gegebenheiten und stärkt den Bezug zwischen Haus und Garten.",
    paragraph3:
      "Die architektonische Haltung ist geprägt von einer ruhigen, klaren Formensprache. Bestehende Elemente werden integriert und präzise weitergeführt, während neue Bauteile eine zurückhaltende, moderne Ergänzung bilden. Ziel ist ein harmonischer Übergang zwischen Bestand und Erweiterungen, ohne die ursprüngliche Struktur zu überlagern. Die technische und energetische Erneuerung spielt eine zentrale Rolle. Die Planung umfasst die Modernisierung der Haustechnik, die Optimierung der Gebäudehülle und die Prüfung von Fördermassnahmen. Gleichzeitig schafft die Überarbeitung der Grundrisse eine verbesserte Nutzbarkeit und eine deutlich erhöhte räumliche Qualität. RIET steht für die Transformation eines Einfamilienhauses, das durch gezielte Eingriffe räumlich, funktional und gestalterisch erneuert wird. Das Projekt verbindet bestehende Strukturen mit moderner Architektur und schafft ein Wohnhaus, das heutigen Anforderungen und zukünftigen Bedürfnissen entspricht.",
    rightImage: "/images/riet.png",
    adresse: "Rietstrasse",
    plz: "8103",
    ort: "Unterengstringen",
    baujahr: "2026",
    bauherrschaft: "Familie Yakin",

    // gallery: [{ src: "/images/riet.png", alt: "Exterior Garden" }],
  },
  {
    id: "rundi",
    title: "RUNDI",
    image: {
      src: "/images/rundi1.jpg",
      alt: "Facade Detail",
      type: "image",
    },
    title2: "Nutzerorientierte, wertschaffende Projekte",
    rightImage: "/images/rundi2.jpg",
    adresse: "Bergstrasse 27",
    plz: "8707",
    ort: "Uetikon am See",
    baujahr: "2026",
    bauherrschaft: "Familie Mauchle",

    gallery: [
      {
        src: "/images/rundi3.jpg",
        alt: "Exterior Garden",
        type: "image",
      },
      { src: "/images/rundi4.jpg", alt: "Pool View", type: "image" },
      { src: "/images/rundi5.jpg", alt: "Facade Detail", type: "image" },
      { src: "/images/rundi6.jpg", alt: "Bathroom", type: "image" },
      { src: "/images/rundi7.jpg", alt: "Bedroom", type: "image" },
      { src: "/images/rundi8.jpg", alt: "Living Room", type: "image" },
      { src: "/images/rundi9.jpg", alt: "Kitchen", type: "image" },
      { src: "/images/rundi10.jpg", alt: "Terrace", type: "image" },
      { src: "/images/rundi11.jpg", alt: "Pool View", type: "image" },
      { src: "/images/rundi12.jpg", alt: "Facade Detail", type: "image" },
      { src: "/images/rundi13.jpg", alt: "Bathroom", type: "image" },
      { src: "/images/rundi14.jpg", alt: "Bedroom", type: "image" },
      { src: "/images/rundi15.jpg", alt: "Living Room", type: "image" },
      { src: "/images/rundi16.jpg", alt: "Kitchen", type: "image" },
      { src: "/images/rundi17.jpg", alt: "Terrace", type: "image" },
      { src: "/images/rundi18.jpg", alt: "Pool View", type: "image" },
      { src: "/images/rundi19.jpg", alt: "Facade Detail", type: "image" },
      { src: "/images/rundi20.jpg", alt: "Bathroom", type: "image" },
      { src: "/images/rundi21.jpg", alt: "Bedroom", type: "image" },
      { src: "/images/rundi22.jpg", alt: "Living Room", type: "image" },
      { src: "/images/rundi23.jpg", alt: "Kitchen", type: "image" },
      { src: "/images/rundi24.jpg", alt: "Terrace", type: "image" },
      { src: "/images/rundi25.jpg", alt: "Pool View", type: "image" },
      { src: "/images/rundi26.jpg", alt: "Facade Detail", type: "image" },
      { src: "/images/rundi27.jpg", alt: "Bathroom", type: "image" },
      { src: "/images/rundi28.jpg", alt: "Bedroom", type: "image" },
      { src: "/images/rundi29.jpg", alt: "Living Room", type: "image" },
      { src: "/images/rundi30.jpg", alt: "Kitchen", type: "image" },
      { src: "/images/rundi31.jpg", alt: "Terrace", type: "image" },
      { src: "/images/rundi32.jpg", alt: "Pool View", type: "image" },
      { src: "/images/rundi33.jpg", alt: "Facade Detail", type: "image" },
      { src: "/images/rundi34.jpg", alt: "Bathroom", type: "image" },
      { src: "/images/rundi35.jpg", alt: "Bedroom", type: "image" },
      { src: "/images/rundi36.jpg", alt: "Living Room", type: "image" },
      { src: "/images/rundi37.jpg", alt: "Kitchen", type: "image" },
      { src: "/images/rundi38.jpg", alt: "Terrace", type: "image" },
      { src: "/images/rundi39.jpg", alt: "Kitchen", type: "image" },
      { src: "/images/rundi40.jpg", alt: "Terrace", type: "image" },
      { src: "/images/rundi41.jpg", alt: "Pool View", type: "image" },
      { src: "/images/rundi42.jpg", alt: "Facade Detail", type: "image" },
      { src: "/images/rundi43.jpg", alt: "Bathroom", type: "image" },
      { src: "/images/rundi44.jpg", alt: "Bedroom", type: "image" },
    ],
  },
  {
    id: "vista",
    title: "vista",
    image: {
      src: "/images/vista.png",
      alt: "Facade Detail",
      type: "image",
    },
    paragraph:
      "Das bestehende Einfamilienhaus an der Haldenstrasse 33 wird durch einen Anbau und eine Attikaerweiterung grundlegend transformiert. Der Entwurf nutzt die topografische Lage des Grundstücks und entwickelt ein Gebäude, das sich präzise in den Hang einbettet und gleichzeitig klare, horizontale Linien ausbildet. Die Erweiterung folgt einer schlichten, modernen Formensprache, die das vorhandene Volumen ergänzt und zu einem ruhigen, zeitgemässen Gesamtbild führt.",
    title2: "Nutzerorientierte, wertschaffende Projekte",
    paragraph2:
      "Der Anbau schafft zusätzliche Fläche im östlichen Gebäudeteil und nimmt Funktionen auf, die den heutigen Wohnansprüchen besser entsprechen. Im Erdgeschoss entsteht ein offener Wohn- und Essbereich mit grosszügigen Fensteröffnungen, die sich zu mehreren Terrassen orientieren. Die Pläne zeigen eine Abfolge von gedeckten und offenen Aussenräumen, die den Innenraum erweitern und unterschiedliche Aufenthaltsqualitäten ermöglichen. Das neue Attikageschoss wird als eigenständiges Element auf den bestehenden Baukörper gesetzt. Es bildet einen ruhigen Abschluss und schafft zusätzliche Wohnfläche mit direktem Bezug grosszügiger Dachterrassen. Diese horizontale Schichtung des Gebäudes wird sowohl in den Grundrissen als auch in den Visualisierungen deutlich sichtbar. Die klare Staffelung lässt das Gebäude trotz der zusätzlichen Volumen leicht wirken.",
    paragraph3:
      "Die untere Ebene bleibt funktional und zurückhaltend. Hier befinden sich Technik, Nebenräume sowie ein grosser Lounge- und Aufenthaltsbereich mit direktem Bezug zum terrassierten Aussenraum. Die Grundrisse zeigen eine logische Organisation mit kurzen Wegen und klarer Trennung der Nutzungszonen. Die Fassaden öffnen sich grossflächig zum Hang, während sie seitlich und hangaufwärts ruhiger und geschlossener bleiben. Die grossen Terrassenflächen prägen den Ausdruck des Gebäudes und unterstreichen die starke Beziehung zur Landschaft. Das 3D-Modell zeigt deutlich, wie die Baukörpergliederung und die präzise Ausbildung der Terrassen das Projekt charakterisieren. VISTA steht für eine Weiterentwicklung eines bestehenden Wohnhauses, die funktionale Erweiterung, räumliche Grosszügigkeit und eine klare architektonische Haltung verbindet. Der Umbau respektiert die vorhandene Struktur und führt sie in eine moderne, offene Formensprache über.",
    rightImage: "/images/vista1.png",
    adresse: "Haldenstrasse 33",
    plz: "8957",
    ort: "Spreitenbach",
    baujahr: "2026",
    bauherrschaft: "Familie Oberholzer",
    plans: [
      {
        id: 0,
        src: "/images/vista1.png",
        alt: "First Floor",
      },
      {
        id: 1,
        src: "/images/vista.png",
        alt: "Second Floor",
      },
      {
        id: 2,
        src: "/images/vista2.png",
        alt: "Upper Floor",
      },
      {
        id: 3,
        src: "/images/vista3.png",
        alt: "Upper Floor",
      },
    ],
  },
  {
    id: "yakin-arena",
    title: "Yakin Arena",
    image: {
      src: "/images/yakin.jpg",
      alt: "Facade Detail",
      type: "image",
    },
    paragraph:
      "Die bestehende Sportanlage wird durch eine neue Pergola und einen überdachten Padelplatz ergänzt. Die leichten, klar strukturierten Baukörper fügen sich in die vorhandene Anlage ein und verbessern die Nutzbarkeit der Aussenbereiche. Die Intervention bleibt zurückhaltend und orientiert sich in Massstab und Form an der bestehenden Hallenstruktur.",
    title2: "Nutzerorientierte, wertschaffende Projekte",
    rightImage: "/images/yakin1.jpg",
    adresse: "Neugutstrasse 33",
    plz: "8102",
    ort: "Oberengstringen",
    baujahr: "2026",
    bauherrschaft: "Yakin Arena",
    plans: [
      {
        id: 0,
        src: "/images/yakin3.png",
        alt: "First Floor",
      },
      {
        id: 1,
        src: "/images/yakin1.jpg",
        alt: "Second Floor",
      },
    ],
  },
  {
    id: "sternen",
    title: "Sternen",
    title2: "Mehrfamilienhaus mit Gewerbeanteil 'STERNEN'",
    image: {
      src: "/images/sternen1.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: " Kloten",
    baujahr: "Umbau und Sanierung",
    bauherrschaft: "Mehrfamilienhaus und Gewerbe",
    // paragraph: "Umbau / Sanierung, Mehrfamilienhaus mit Gewerbeanteil, Kloten",
  },
  {
    id: "panorama",
    title: "panorama",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Terrassenwohnungen 'PANORAMA'",
    image: {
      src: "/images/panorama.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: " Laufen, Röschenzstrasse",
    baujahr: "Neubau",
    bauherrschaft: "Terrassenwohnungen",
  },
  {
    id: "unterdorf",
    title: "unterdorf",
    paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Reihen- und Doppeleinfamilienhäuser 'UNTERDORF'",
    image: {
      src: "/images/startPage.jpg",
      alt: "Facade Detail",
      type: "image",
    },
    ort: "Hunzenschwil, Unterfeldweg 7",
    baujahr: "Neubau",
    bauherrschaft: "Doppeleinfamilienhaus",
  },

  {
    id: "birrfeld",
    title: "BIRRFELD",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Mehrfamilienhaus 'BIRRFELD'",
    image: {
      src: "/images/birrfeld.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: " Mellingen, Birrfeldstrasse 32",
    baujahr: "Neubau",
    bauherrschaft: "Mehrfamilienhaus mit 3 Wohnungen",
  },
  {
    id: "doerfli",
    title: "DÖRFLI",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Doppeleinfamilienhäuser 'DÖRFLI'",
    image: {
      src: "/images/dörfli.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: " Birrhard, Unterdorfstrasse",
    baujahr: "Neubau",
    bauherrschaft: "Doppeleinfamilienhaus",
  },
  {
    id: "sennenberg",
    title: "SENNENBERG",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Reihen- und Doppeleinfamilienhäuser 'SENNENBERG'",
    image: {
      src: "/images/sennenberg.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: " Killwangen, Sennenbergstrasse",
    baujahr: "Neubau",
    bauherrschaft: "Reihenhäuser und Doppeleinfamilienhäuser",
  },
  {
    id: "eggbuhl",
    title: "EGGBÜHL",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Doppeleinfamilienhäuser 'EGGBÜHL'",
    image: {
      src: "/images/eggbühl.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: " Oberengstringen, Zürcherstrasse 50",
    baujahr: "Neubau",
    bauherrschaft: "2 Doppelhaushälften",
  },
  {
    id: "reuss",
    title: "REUSS",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Neubau Doppelhäuser 'REUSS'",
    image: {
      src: "/images/reuss.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: " Seon, Reussgasse 28",
    baujahr: "Neubau",
    bauherrschaft: "4 Doppelhaushälften",
  },
  {
    id: "heimental",
    title: "HEIMENTAL",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Terrassenwohnungen 'HEIMENTAL'",
    image: {
      src: "/images/heimental.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: "Wettingen, Heimentalstrasse 53 & 55",
    baujahr: "Neubau",
    bauherrschaft: " Terrassenwohnungen",
  },
  {
    id: "stockacker",
    title: "STOCKACKER",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Einfamilienhaus 'STOCKACKER'",
    image: {
      src: "/images/stockacker.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: "Nussbaumen, Stockackerstrasse 24",
    baujahr: "Umbau und Sanierung",
    bauherrschaft: " Einfamilienhaus",
  },
  {
    id: "schwader",
    title: "SCHWADER",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Einfamilienhaus 'SCHWADER'",
    image: {
      src: "/images/schwader.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: "Schwaderloch, Dorfstrasse",
    baujahr: "Neubau",
    bauherrschaft: " Einfamilienhaus",
  },
  {
    id: "platte-am-hang",
    title: "PLATTE AM HANG",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Terrassenwohnungen 'PLATTE AM HANG'",
    image: {
      src: "/images/platte.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: "Küttigen, Platteweg 8",
    baujahr: "Neubau",
    bauherrschaft: " Terrassenwohnungen",
  },
  {
    id: "hallwil",
    title: "HALLWIL",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Einfamilienhaus 'HALLWIL'",
    image: {
      src: "/images/hallwil.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: "Hallwil, Dürrenäscherstrasse 217",
    baujahr: "Neubau",
    bauherrschaft: " Einfamilienhaus",
  },
  {
    id: "rietheim",
    title: "RIETHEIM",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Ersatzneubau 'RIETHEIM'",
    image: {
      src: "/images/reitheim.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: "Rietheim, Schlossgasse",
    baujahr: "Ersatzneubau",
    bauherrschaft: " Mehrfamilienhaus mit 3 Wohnungen",
  },
  {
    id: "langfohren",
    title: "LANGFOHREN",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Doppeleinfamilienhäuser und Einfamilienhäuser 'LANGFOHREN'",
    image: {
      src: "/images/langfohren.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: " Fischbach-Göslikon, Langfohrenstrasse",
    baujahr: "Neubau",
    bauherrschaft: " 4 Doppelhaushälften und 2 Einfamilienhäuser",
  },
  {
    id: "neumattli",
    title: "NEUMÄTTLI",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Umbau und Sanierung 'NEUMÄTTLI'",
    image: {
      src: "/images/neumättli.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: "Turgi, Neumättlistrasse 19",
    baujahr: "Umbau",
    bauherrschaft: "Mehrfamilienhaus mit 34 Wohnungen",
  },
  {
    id: "mythen",
    title: "MYTHEN",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Umbau und Sanierung 'MYTHEN'",
    image: {
      src: "/images/mythen.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: "Wettingen, Mythenstrasse 8",
    baujahr: "Neubau",
    bauherrschaft: "Mehrfamilienhaus",
  },
  {
    id: "oberdorf",
    title: "OBERDORF",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Ersatzneubau 'OBERDORF'",
    image: {
      src: "/images/oberdorf.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: "Oberdorf, Hauptstrasse 58/60/62",
    baujahr: "Ersatzneubau",
    bauherrschaft: "Mehrfamilienhaus mit 18 Wohnungen",
  },
  {
    id: "zwyssig",
    title: "ZWYSSIG",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Umbau und Sanierung 'ZWYSSIG'",
    image: {
      src: "/images/zwyssig.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: "Wettingen, Alberich-Zwyssig-Strasse",
    baujahr: "Umbau",
    bauherrschaft: "Mehrfamilienhaus",
  },
  {
    id: "sonnenrain",
    title: "SONNENRAIN",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Neubau 'SONNENRAIN'",
    image: {
      src: "/images/sonnenrain.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: "Zofingen, Sonnenrainstrasse",
    baujahr: "Neubau",
    bauherrschaft: "Mehrfamilienhaus mit 8 Wohnungen",
  },
  {
    id: "unus",
    title: "UNUS",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Neubau 'UNUS'",
    image: {
      src: "/images/unus.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: "Buchs, Aarauerstrasse",
    baujahr: "Neubau",
    bauherrschaft: "Mehrfamilienhaus mit 70 Wohnungen und Gewerbeanteil",
  },
  {
    id: "stieracker",
    title: "STIERACKER",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Neubau 'STIERACKER'",
    image: {
      src: "/images/stieracker.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: "Frick, Stieracker",
    baujahr: "Neubau",
    bauherrschaft: "Mehrfamilienhaus mit 4 Wohnungen",
  },
  {
    id: "bodan",
    title: "BODAN",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Umbau und Innenausbau 'BODAN'",
    image: {
      src: "/images/bodan.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: "Romanshorn, Bahnhofstrasse 1",
    baujahr: "Umbau und Innenausbau",
    bauherrschaft: "Restaurant",
  },
  {
    id: "sakral",
    title: "SAKRAL",
    // paragraph: "Neubau 5 Reihenfamilienhäuser, Hunzenschwil",
    title2: "Umbau  'SAKRAL'",
    image: {
      src: "/images/sakral.png",
      alt: "Facade Detail",
      type: "image",
    },
    ort: "Binningen, Baslerstrasse 9",
    baujahr: "Umbau",
    bauherrschaft: "Gewerbe- und Wohngebäude",
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
    <div className="min-h-screen ">
      <div className="relative h-screen w-full bg-black">
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
            src={project.image.src}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        )}

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full">
          <div className="container mx-auto h-full flex items-end pb-20">
            <div className="flex flex-col md:flex-row w-full gap-8 px-4 md:px-0">
              <h1 className="font-light tracking-tight uppercase w-full md:w-1/2 text-white text-4xl md:text-[60px] leading-tight">
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
                    <span className="text-[#0D0D0D] mb-1">Baujahr/Bauart:</span>
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
                src={project.rightImage || project.image.src}
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
