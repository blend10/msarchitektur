import { motion, AnimatePresence } from "motion/react";
import { X, ChevronRight } from "lucide-react";
import React, { Fragment } from "react";

// --- Interfaces ---
interface SubSection {
  title: string;
  items: string[];
}

interface Step {
  label: string;
  subSection: SubSection;
  descriptionLines?: string[]; // Multiple lines for the step context
  footerNote?: string; // Optional footer note for this specific step
}

interface PhaseDetail {
  id: number;
  totalPhases: number;
  title: string;
  color?: string;
  descriptionLines: string[];
  footerNote: string;
  steps: Step[];
}

interface PhaseDetailPanelProps {
  phase: PhaseDetail | null;
  onClose: () => void;
  clientType: "private" | "investor";
}

// --- Mock Data ---
const phaseData: Record<number, Record<"private" | "investor", PhaseDetail>> = {
  1: {
    private: {
      id: 1,
      totalPhases: 3,
      title: "Projektdefinition und Konzeptphase",
      descriptionLines: [
        "In dieser Phase legen wir die Grundlage für die gesamte Projektentwicklung.",
        "Wir lernen die Bauherrschaft und das Projektvorhaben kennen, analysieren die Ausgangssituation des Grundstücks und definieren gemeinsam die wichtigsten Anforderungen an das zukünftige Gebäude.",
        "",
        "Dabei werden Ziele, Nutzung, Budgetrahmen sowie zeitliche Vorstellungen des Projekts besprochen.",
      ],
      footerNote:
        "This conversation forms the basis for further project development.",
      steps: [
        {
          label: "Projektanfrage &\nErstgespräch",
          subSection: {
            title: "Erstes Kennenlernen und Besprechung des Projektvorhabens.",
            items: [
              "Ausgangssituation des Grundstücks",
              "Ziele und Erwartungen der Bauherrschaft",
              "Gewünschte Nutzung und Raumprogramm",
              "Budgetrahmen",
              "Zeitliche Vorstellungen",
            ],
          },
          descriptionLines: [
            "Im Erstgespräch lernen wir die Bauherrschaft und das Projektvorhaben kennen. Dabei besprechen wir insbesondere:",
          ],
          footerNote:
            "Dieses Gespräch bildet die Grundlage für die weitere Projektentwicklung.",
        },
        {
          label: "Bedarfsanalyse und\n Projektverständnis",
          subSection: {
            title: "Analyse der Bedürfnisse und Definition der Projektziele.",
            items: [
              "Raumprogramm",
              "Wohn- und Nutzungsanforderungen",
              "Architektonische Vorstellungen",
              "Langfristige Nutzung des Gebäudes",
              "Mögliche Zukünftige Anpassungen",
            ],
          },
          descriptionLines: [
            "In dieser Phase analysieren wir die Bedürfnisse der Bauherrschaft im Detail und übersetzen diese in konkrete Projektanforderungen.",
          ],
          footerNote:
            "Ziel ist ein klares Verständnis der Anforderungen an das zukünftige Gebäude.",
        },
        {
          label: "Analyse der\n Ausgangslage",
          subSection: {
            title:
              "Analyse der rechtlichen, technischen und nachbarschaftlichen Rahmenbedingungen.",
            items: [
              "Bauzonen und Zonenreglement",
              "Grenzabstände und Ausnützungsziffer",
              "Gebäudehöhen und Volumenbeschränkungen",
              "Dienstbarkeiten und Grundbucheinträge",
              "Nachbarschaftliche Situation",
              "Erschliessung und Infrastruktur",
            ],
          },
          descriptionLines: [
            "Vor der eigentlichen Projektentwicklung analysieren wir die Rahmenbedingungen des Grundstücks.",
          ],
          footerNote:
            "Diese Analyse ermöglicht eine realistische Projektplanung und verhindert spätere Überraschungen im Bewilligungsverfahren.",
        },
        {
          label: "Konzeptstudie und \nProjektidee",
          subSection: {
            title: "Entwicklung erster architektonischer Konzepte.",
            items: [
              "Mögliche Gebäudevolumen",
              "Anordnung der Räume",
              "Beziehung zwischen Innen- und Aussenraum",
              "Einbindung in die Umgebung",
              "Architektonische Gestaltung",
            ],
          },
          descriptionLines: [
            "Basierend auf den Anforderungen der Bauherrschaft entwickeln wir eine erste architektonische Projektidee.",
          ],
          footerNote:
            "Die Konzeptstudie dient als Grundlage für die weitere Projektentwicklung.",
        },
        {
          label: "Honorarvereinbarung",
          subSection: {
            title: "Definition der Zusammenarbeit und des Architektenhonorars.",
            items: [
              "Leistungsumfang des Architekten",
              "Projektphasen",
              "Honorarstruktur",
              "Verantwortlichkeiten",
            ],
          },
          descriptionLines: [
            "Nach der Konzeptphase wird die Zusammenarbeit formalisiert.",
          ],
          footerNote:
            "Dies schafft eine klare Grundlage für die weitere Zusammenarbeit.",
        },
        {
          label: "Projektstrategie und \nZeitplanung",
          subSection: {
            title:
              "Definition der Projektstrategie und des zeitlichen Projektablaufs.",
            items: [
              "Eine Projekt-Timeline",
              "Zentrale Projektmeilensteine",
              "Planungsschritte bis zur Baubewilligung",
              "Mögliche Projektrisiken",
              "Strategische Entscheidungsoptionen",
            ],
          },
          descriptionLines: [
            "Gemeinsam mit der Bauherrschaft definieren wir die strategische Ausrichtung des Projekts.",
          ],
          footerNote:
            "Dies schafft eine klare Grundlage für die weitere Zusammenarbeit.",
        },
        {
          label: "Grundstückvermessung",
          subSection: {
            title: "Vermessung des Grundstücks durch den Geometer.",
            items: [
              "Situationspläne",
              "Höhenangaben",
              "Grenzverläufe",
              "Baugesuchsunterlagen",
            ],
          },
          descriptionLines: [
            "Der Geometer erstellt eine präzise Vermessung des Grundstücks.",
          ],
          footerNote: "",
        },
        {
          label: "Vorprojekt und \n ausgearbeitete Projektstudie",
          subSection: {
            title: "Ausarbeitung der Projektstudie mit konkretem Raumprogramm.",
            items: [
              "Raumgrössen",
              "Raumbeziehungen",
              "Möblierungskonzepte",
              "Gebäudestruktur",
              "Nutzung der Aussenräume",
            ],
          },
          descriptionLines: [
            "Die Konzeptidee wird zu einem detaillierten Vorprojekt weiterentwickelt.",
          ],
          footerNote: "Das Vorprojekt bildet die Grundlage für das Baugesuch.",
        },
        {
          label: "Behördliche\n Vorabklärung",
          subSection: {
            title: "Frühzeitige Abstimmung mit den Behörden.",
            items: [
              "Baurechtliche Auslegung Einzelner Vorschriften",
              "Mögliche Projektoptimierungen",
              "Anforderungen der Baubehörde",
              "Bewilligungsfähigkeit des Projekts",
            ],
          },
          descriptionLines: [
            "Vor der Baueingabe werden zentrale Projektpunkte mit den Behörden besprochen.",
          ],
          footerNote:
            "Diese Vorabklärung reduziert das Risiko im Bewilligungsverfahren erheblich.",
        },
      ],
    },
    investor: {
      id: 1,
      totalPhases: 3,
      title: "Projektdefinition und Konzeptphase",
      descriptionLines: [
        "In dieser Phase prüfen wir gemeinsam mit dem Projektentwickler die grundlegenden Entwicklungsmöglichkeiten des Grundstücks. Wir analysieren die Ausgangssituation, untersuchen das Entwicklungspotenzial und erarbeiten erste Projektideen sowie mögliche Nutzungskonzepte",
        "Dabei werden insbesondere Lage und Marktumfeld, rechtliche Rahmenbedingungen, mögliche Gebäudestrukturen sowie wirtschaftliche Grundlagen des Projekts betrachtet.",
      ],
      footerNote: "Maximale Rendite durch präzise Voranalyse.",
      steps: [
        {
          label: "Projektanfrage \nund Erstprüfung",
          subSection: {
            title:
              "Erste Projektanfrage und Prüfung der grundsätzlichen Entwicklungsmöglichkeiten.",
            items: [
              "Lage und Marktumfeld",
              "Mögliche Nutzung des Grundstücks",
              "Grobes Entwicklungspotenzial",
              "Investitionsrahmen",
              "Projektstrategie des Entwicklers",
            ],
          },
          descriptionLines: [
            "Zu Beginn analysieren wir das potenzielle Entwicklungsprojekt gemeinsam mit dem Projektentwickler.",
          ],
          footerNote:
            "Ziel ist eine erste Einschätzung, ob sich eine vertiefte Projektentwicklung lohnt.",
        },
        {
          label: "Analyse der\n Ausgangslage",
          subSection: {
            title:
              "Analyse der rechtlichen und planerischen Rahmenbedingungen des Grundstücks.",
            items: [
              "Bauzonen und Zonenreglement",
              "Ausnützungsziffer und Bauvolumen",
              "Grenzabstände und Höhenbeschränkungen",
              "Dienstbarkeiten und Grundbucheinträge",
              "nachbarschaftliche Situation",
              "Erschliessung und Infrastruktur",
            ],
          },
          descriptionLines: [
            "Vor einer Investitionsentscheidung analysieren wir sämtliche relevanten Rahmenbedingungen.",
          ],
          footerNote:
            "Diese Analyse bildet die Grundlage für eine realistische Projektentwicklung.",
        },
        {
          label: "Reservationsvereinbarung",
          subSection: {
            title:
              "Reservation des Grundstücks zur Sicherung der Projektentwicklung.",
            items: [
              "Vertiefte Projektentwicklung",
              "Durchführung von Abklärungen",
              "Erstellung eines Businessplans",
            ],
          },
          descriptionLines: [
            "Um das Entwicklungsprojekt zu sichern, wird häufig eine Reservationsvereinbarung mit dem Eigentümer abgeschlossen.",
          ],
          footerNote: "ohne sofort den endgültigen Kauf auslösen zu müssen.",
        },
        {
          label: "Konzeptstudie und \nEntwicklungsstrategie",
          subSection: {
            title:
              "Entwicklung der architektonischen und städtebaulichen Projektidee.",
            items: [
              "mögliche Gebäudevolumen",
              "Anzahl Einheiten",
              "Nutzungskonzept",
              "Erschliessung",
              "Architektonische Struktur",
            ],
          },
          descriptionLines: [
            "In dieser Phase entwickeln wir erste Projektkonzepte und untersuchen verschiedene Entwicklungsszenarien.",
          ],
          footerNote:
            "Die Konzeptstudie bildet die Grundlage für die wirtschaftliche Projektanalyse.",
        },
        {
          label: "Wirtschaftlichkeitsanalyse\n und Businessplan",
          subSection: {
            title: "Analyse der wirtschaftlichen Tragfähigkeit des Projekts.",
            items: [
              "Baukostenprognose",
              "Verkaufs- oder Mietpotenziale",
              "Projektkostenstruktur",
              "Renditeberechnung",
              "Exit-Szenarien",
            ],
          },
          descriptionLines: [
            "Für Projektentwickler ist die Wirtschaftlichkeit zentral. Daher erstellen wir eine umfassende Projektanalyse.",
          ],
          footerNote:
            "Der Businessplan bildet die Grundlage für Investitionsentscheidungen.",
        },
        {
          label: "Projektstrategie und \nZeitplanung",
          subSection: {
            title:
              "Definition der Projektstrategie und Erstellung einer Projekt-Timeline.",
            items: [
              "Projektphasen",
              "Zeitliche Meilensteine",
              "Vermarktungsstrategie",
              "Bewilligungsstrategie",
              "Mögliche Projektrisiken",
            ],
          },
          descriptionLines: ["Wir definieren den strategischen Projektablauf."],
          footerNote: "",
        },
        {
          label: "Grundstückskauf und\n Projektstart",
          subSection: {
            title:
              "Beurkundung des Grundstückskaufs und Start der Projektentwicklung.",
            items: [
              "Notarielle Beurkundung",
              "Finanzierung des Grundstücks",
              "Sicherstellung der Projektentwicklung",
            ],
          },
          descriptionLines: [
            "Nach positiver Projektanalyse erfolgt der Grundstückskauf durch den Projektentwickler.",
          ],
          footerNote:
            "Damit beginnt die konkrete Umsetzung der Projektentwicklung.",
        },
      ],
    },
  },
  2: {
    private: {
      id: 2,
      totalPhases: 3,
      title: "Projektierung und Baubewilligungsverfahren",
      descriptionLines: [
        "In dieser Phase wird das Projekt konkret ausgearbeitet und die Baueingabe vorbereitet.Fachplaner werden eingebunden, die Kostenplanung erstellt und das Projekt gemäss Behördenanforderungen weiterentwickelt.",
      ],
      footerNote: "Von der Skizze zum bewilligten Projekt.",
      steps: [
        {
          label: "Fachplanerorganisation",
          subSection: {
            title: "Zusammensetzung des Planungsteams.",
            items: [
              "Bauingenieur",
              "HLKSE-Ingenieur",
              "Geologe",
              "Visualisierungen",
              "Baugespann",
            ],
          },
          descriptionLines: [
            "Various specialist planners are involved in project planning.",
          ],
          footerNote:
            "Der Architekt koordiniert sämtliche Fachplaner und stellt eine reibungslose Zusammenarbeit sicher.",
        },
        {
          label: "Kostenplanung bis \nBaubewilligung",
          subSection: {
            title: "Kostenübersicht für die Planungsphase.",
            items: [
              "Planungskosten",
              "Fachplanerhonorare",
              "Baugespann",
              "Visualisierungen",
              "Gutachten und Untersuchungen",
            ],
          },
          descriptionLines: [
            "Wir erstellen eine Kostenübersicht für alle Projektaufwendungen bis zur Baubewilligung bzw. Kreditfreigabe.",
          ],
          footerNote:
            "Diese Kostenplanung schafft Transparenz für die Bauherrschaft und bildet eine wichtige Grundlage für weitere Entscheidungen.",
        },
        {
          label: "Projektoptimierung nach \nBehördenrückmeldung",
          subSection: {
            title: "Weiterentwicklung des Projekts gemäss Behördenrückmeldung.",
            items: [
              "Gebäudevolumen",
              "Abständen",
              "Höhen",
              "Nutzungskonzept",
              "Gestaltung",
            ],
          },
          descriptionLines: [
            "Das Vorprojekt wird gemäss Rückmeldungen der Behörden weiter optimiert.",
          ],
          footerNote:
            "Ziel ist es, die Anforderungen der Behörden zu erfüllen und die Grundlage für eine erfolgreiche Baueingabe zu schaffen.",
        },
        {
          label: "Projektinformation \nder Nachbarschaft",
          subSection: {
            title: "Information der betroffenen Nachbarschaft.",
            items: [
              "Transparente Kommunikation",
              "Frühzeitige Klärung Von Fragen",
              "Vermeidung von Einsprachen",
            ],
          },
          descriptionLines: [
            "Vor der Baueingabe kann das Projekt der betroffenen Nachbarschaft präsentiert werden.",
          ],
          footerNote:
            "Eine frühzeitige Information trägt zu einem reibungsloseren Bewilligungsverfahren bei.",
        },
        {
          label: "Baueingabe",
          subSection: {
            title: "Einreichung des Baugesuchs.",
            items: [
              "Architekturpläne",
              "Situationsplan",
              "Energienachweis",
              "Fachplanungen",
              "Baubeschrieb",
              "Visualisierungen",
            ],
          },
          descriptionLines: [
            "Das vollständige Baugesuch wird bei der zuständigen Baubehörde eingereicht.",
          ],
          footerNote:
            "Alle notwendigen Unterlagen werden koordiniert und vollständig eingereicht.",
        },
        {
          label: "Baubewilligung",
          subSection: {
            title: "Erteilung der Baubewilligung durch die Behörden.",
            items: [""],
          },
          descriptionLines: [
            "Nach Abschluss des Bewilligungsverfahrens wird die Baubewilligung durch die zuständigen Behörden erteilt.",
          ],
          footerNote: "",
        },
      ],
    },
    investor: {
      id: 2,
      totalPhases: 3,
      title: "Projektierung und Baubewilligungsverfahren",
      descriptionLines: [
        "In dieser Phase wird das Projekt planerisch vertieft und das Baugesuch vorbereitet.Fachplaner werden eingebunden, die Projektkosten detailliert analysiert und das Projekt gemäss den Anforderungen der Behörden weiterentwickelt. Dabei werden Planungsteam und Kostenstruktur definiert, das Projekt bei Bedarf optimiert sowie das vollständige Baugesuch bis zur Baubewilligung begleitet.",
      ],
      footerNote: "Wirtschaftliche Planung ist der Schlüssel zum Erfolg.",
      steps: [
        {
          label: "Fachplanerorganisation",
          subSection: {
            title: "Zusammensetzung des Planungsteams.",
            items: [
              "Bauingenieur",
              "HLKSE-Planer",
              "Geologe",
              "Schadstoffuntersuchungen",
              "Visualisierungen",
              "Baugespann",
            ],
          },
          descriptionLines: [
            "Für die Projektplanung werden verschiedene Fachplaner beigezogen.",
          ],
          footerNote:
            "Der Architekt koordiniert sämtliche Fachplaner und stellt die Zusammenarbeit des Planungsteams sicher.",
        },
        {
          label: "Projektkostenplanung\n bis Baubewilligung",
          subSection: {
            title:
              "Kostenübersicht bis zur Baubewilligung und Baukreditfreigabe.",
            items: [
              "Planungskosten",
              "Fachplanerhonorare",
              "Visualisierungen",
              "Baugespann",
              "Gutachten",
            ],
          },
          descriptionLines: [
            "Wir erstellen eine detaillierte Kostenübersicht für die Planungsphase bis zur Baubewilligung.",
          ],
          footerNote:
            "Diese Kostenplanung schafft Transparenz für die Bauherrschaft und bildet die Grundlage für die weitere Projektentscheidung.",
        },
        {
          label: "Projektoptimierung",
          subSection: {
            title: "Optimierung des Projekts gemäss Behördenrückmeldung.",
            items: [
              "Gebäudevolumen",
              "Abständen",
              "Höhen",
              "Nutzungskonzept",
              "Architektonischer Gestaltung",
            ],
          },
          descriptionLines: [
            "Das Projekt wird auf Grundlage der Rückmeldungen der Behörden weiterentwickelt und optimiert.",
          ],
          footerNote:
            "Ziel ist es, die Anforderungen der Behörden zu erfüllen und eine erfolgreiche Baueingabe vorzubereiten.",
        },
        {
          label: "Nachbarschaftsinformation",
          subSection: {
            title: "Information der betroffenen Nachbarschaft.",
            items: [
              "Transparente Kommunikation",
              "Frühzeitige Klärung von Fragen",
              "Vermeidung von Einsprachen",
            ],
          },
          descriptionLines: [
            "Vor der Baueingabe kann das Projekt der betroffenen Nachbarschaft vorgestellt werden.",
          ],
          footerNote: "",
        },
        {
          label: "Baueingabe",
          subSection: {
            title: "Einreichung des vollständigen Baugesuchs.",
            items: [
              "Architekturpläne",
              "Situationsplan",
              "Energienachweis",
              "Baubeschrieb",
              "Fachplanungen",
            ],
          },
          descriptionLines: [
            "Das vollständige Baugesuch wird bei der zuständigen Baubehörde eingereicht.",
          ],
          footerNote:
            "Alle erforderlichen Unterlagen werden zusammengestellt und offiziell eingereicht.",
        },
        {
          label: "Baubewilligung",
          subSection: {
            title: "Erteilung der Baubewilligung durch die Behörden.",
            items: [""],
          },
          descriptionLines: [
            "Nach Abschluss des Bewilligungsverfahrens wird die Baubewilligung durch die zuständigen Behörden erteilt.",
          ],
          footerNote: "",
        },
      ],
    },
  },
  3: {
    private: {
      id: 3,
      totalPhases: 3,
      title: "Umsetzung & Realisierung",
      descriptionLines: [
        "In dieser Phase wird das Projekt konkret ausgearbeitet und die Baueingabe vorbereitet.Fachplaner werden eingebunden, die Kostenplanung erstellt und das Projekt gemäss Behördenanforderungen weiterentwickelt.",
      ],
      footerNote: "Begleitung bis zum Einzug.",
      steps: [
        {
          label: "Baukredit und\n Finanzierung",
          subSection: {
            title: "Freigabe der Finanzierung für das Bauprojekt.",
            items: [""],
          },
          descriptionLines: [
            "Nach Abschluss des Bewilligungsverfahrens wird die Baubewilligung durch die zuständigen Behörden erteilt.",
          ],
          footerNote: "",
        },
        {
          label: "Bauversicherungen",
          subSection: {
            title: "Abschluss der notwendigen Bauversicherungen.",
            items: ["Bauherrenhaftpflicht", "Bauwesenversicherung"],
          },
          descriptionLines: [
            "Vor Baubeginn werden wichtige Versicherungen abgeschlossen, um Bauherrschaft und Projekt abzusichern.",
          ],
          footerNote:
            "Diese Versicherungen decken mögliche Schäden während der Bauphase ab.",
        },
        {
          label: "Projekt-Kick-Off",
          subSection: {
            title: "Startbesprechung mit allen Projektbeteiligten.",
            items: [
              "Bauherrschaft",
              "Architekt",
              "Fachplaner",
              "Bauunternehmen",
            ],
          },
          descriptionLines: [
            "In einer Kick-Off-Sitzung werden sämtliche Projektbeteiligten zusammengeführt.",
          ],
          footerNote:
            "Dabei werden Verantwortlichkeiten, Abläufe und Kommunikationswege definiert.",
        },
        {
          label: "Ausschreibung und\n Bauvorbereitung",
          subSection: {
            title: "Vergabe der Bauarbeiten und Vorbereitung der Baustelle.",
            items: ["Bauablauf", "Baustellenorganisation", "Terminplanung"],
          },
          descriptionLines: [
            "Die Bauarbeiten werden ausgeschrieben und geeignete Bauunternehmen ausgewählt.",
          ],
          footerNote: "Damit wird der Bauablauf strukturiert vorbereitet.",
        },
        {
          label: "Bauausführung",
          subSection: {
            title: "Realisierung des Bauprojekts.",
            items: [
              "Erstellung der Ausführungsplanung",
              "Baubeginn und Rohbau",
              "Richtfest",
              "Kontrolle und Abnahme des Rohbaus",
            ],
          },
          descriptionLines: [
            "Nach Abschluss der Vorbereitungen beginnt die Bauphase.",
          ],
          footerNote:
            "Der Baufortschritt wird laufend überwacht und koordiniert.",
        },
        {
          label: "Bauabschluss und Übergabe",
          subSection: {
            title:
              "Abschluss des Bauprojekts und Übergabe an die Bauherrschaft.",
            items: [
              "Hausbezug der Bauherrschaft",
              "Bauabrechnung",
              "Projektdokumentation",
            ],
          },
          descriptionLines: [
            "Nach Fertigstellung des Bauwerks erfolgt die offizielle Bauabnahme.",
          ],
          footerNote: "Damit wird das Projekt vollständig abgeschlossen.",
        },
      ],
    },
    investor: {
      id: 3,
      totalPhases: 3,
      title: "Realisierung und Vermarktung",
      descriptionLines: [
        "In dieser Phase wird das Projekt konkret ausgearbeitet und die Baueingabe vorbereitet.Fachplaner werden eingebunden, die Kostenplanung erstellt und das Projekt gemäss Behördenanforderungen weiterentwickelt.",
      ],
      footerNote: "Nachhaltiger Erfolg für Ihr Portfolio.",
      steps: [
        {
          label: "Baukredit und\n Finanzierung",
          subSection: {
            title: "Freigabe der Finanzierung für das Bauprojekt.",
            items: [""],
          },
          descriptionLines: [
            "Nach Abschluss des Bewilligungsverfahrens wird die Baubewilligung durch die zuständigen Behörden erteilt.",
          ],
          footerNote: "",
        },
        {
          label: "Bauversicherungen",
          subSection: {
            title: "Abschluss der notwendigen Bauversicherungen.",
            items: ["Bauherrenhaftpflicht", "Bauwesenversicherung"],
          },
          descriptionLines: [
            "Vor Baubeginn werden wichtige Versicherungen abgeschlossen, um Bauherrschaft und Projekt abzusichern.",
          ],
          footerNote:
            "Diese Versicherungen decken mögliche Schäden während der Bauphase ab.",
        },
        {
          label: "Projekt-Kick-Off",
          subSection: {
            title: "Startbesprechung mit allen Projektbeteiligten.",
            items: [
              "Bauherrschaft",
              "Architekt",
              "Fachplaner",
              "Bauunternehmen",
            ],
          },
          descriptionLines: [
            "In einer Kick-Off-Sitzung werden sämtliche Projektbeteiligten zusammengeführt.",
          ],
          footerNote:
            "Dabei werden Verantwortlichkeiten, Abläufe und Kommunikationswege definiert.",
        },
        {
          label: "Ausschreibung und \nBauvorbereitung",
          subSection: {
            title: "Vergabe der Bauarbeiten und Vorbereitung der Baustelle.",
            items: ["Bauablauf", "Baustellenorganisation", "Terminplanung"],
          },
          descriptionLines: [
            "Die Bauarbeiten werden ausgeschrieben und geeignete Bauunternehmen ausgewählt.",
          ],
          footerNote: "Damit wird der Bauablauf strukturiert vorbereitet.",
        },
        {
          label: "Bauausführung",
          subSection: {
            title: "Realisierung des Bauprojekts.",
            items: [
              "Erstellung der Ausführungsplanung",
              "Baubeginn und Rohbau",
              "Richtfest",
              "Kontrolle und Abnahme des Rohbaus",
            ],
          },
          descriptionLines: [
            "Nach Abschluss der Vorbereitungen beginnt die Bauphase.",
          ],
          footerNote:
            "Der Baufortschritt wird laufend überwacht und koordiniert.",
        },
        {
          label: "Bauabschluss und \nÜbergabe",
          subSection: {
            title:
              "Abschluss des Bauprojekts und Übergabe an die Bauherrschaft.",
            items: [
              "Hausbezug der Bauherrschaft",
              "Bauabrechnung",
              "Projektdokumentation",
            ],
          },
          descriptionLines: [
            "Nach Fertigstellung des Bauwerks erfolgt die offizielle Bauabnahme.",
          ],
          footerNote: "Damit wird das Projekt vollständig abgeschlossen.",
        },
      ],
    },
  },
};

// --- PhaseDetailPanel ---
export function PhaseDetailPanel({
  phase,
  onClose,
  clientType,
}: PhaseDetailPanelProps) {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const stepperRef = React.useRef<HTMLDivElement>(null);
  const stepRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  const detail = phase ? phaseData[phase.id][clientType] : null;
  const themeColor = phase?.color;

  const currentStepData = detail ? detail.steps[activeStep]?.subSection : null;
  const currentStepDescLines = detail
    ? detail.steps[activeStep]?.descriptionLines
    : null;
  const currentStepFooter = detail
    ? detail.steps[activeStep]?.footerNote
    : null;

  // Reset active step when phase changes
  React.useEffect(() => {
    if (phase) setActiveStep(0);
  }, [phase?.id]);

  // Auto-scroll stepper horizontally when active step changes
  React.useEffect(() => {
    const btn = stepRefs.current[activeStep];
    if (btn && stepperRef.current) {
      btn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeStep]);

  // Lock body scroll when panel is open
  React.useEffect(() => {
    if (phase && detail) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [phase, detail]);

  return (
    <AnimatePresence>
      {phase && detail && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-end md:items-center justify-center p-0 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Main Card */}
          <motion.div
            className="relative w-full max-w-4xl bg-black rounded-t-2xl md:rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{
              maxHeight: "90vh",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            initial={{ scale: 0.97, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.97, opacity: 0, y: 20 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          >
            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1 no-scrollbar">
              {/* Header */}
              <div className="px-8 pt-8 pb-6">
                <div className="flex items-start gap-5">
                  {/* Number Box */}
                  <div
                    className="w-12 h-12 rounded-md flex items-center justify-center text-xl font-medium shrink-0 mt-1"
                    style={{
                      backgroundColor: `${themeColor}26`, // ~15% opacity
                      border: `1px solid ${themeColor}66`, // ~40% opacity
                      color: themeColor,
                    }}
                  >
                    {detail.id}
                  </div>

                  {/* Title */}
                  <div>
                    <h2 className="text-xl font-semibold text-white leading-tight">
                      {detail.title}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <div
                        className="w-6 h-px"
                        style={{ backgroundColor: `${themeColor}99` }} // ~60% opacity
                      />
                      <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                        Phase {detail.id} von {detail.totalPhases}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6 text-sm text-gray-400 leading-relaxed space-y-1 max-w-2xl">
                  {detail.descriptionLines.map((line, i) =>
                    line === "" ? (
                      <div key={i} className="h-2" />
                    ) : (
                      <p key={i}>{line}</p>
                    ),
                  )}
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/10" />

              {/* Stepper Section */}
              <div className="px-8 py-7">
                <div className="flex items-center gap-2 mb-6">
                  <div
                    className="w-6 h-px"
                    style={{ backgroundColor: `${themeColor}99` }} // ~60% opacity
                  />
                  <span className="text-sm font-medium text-gray-300">
                    Kernschritte dieser Phase
                  </span>
                </div>

                {/* Horizontal Stepper */}
                <div
                  ref={stepperRef}
                  className="relative overflow-x-auto no-scrollbar pb-2"
                >
                  <div className="flex items-start gap-2 min-w-max">
                    {detail.steps.map((step, idx) => {
                      const isActive = idx === activeStep;
                      const isDone = idx < activeStep;

                      return (
                        <Fragment key={idx}>
                          {/* Step Button */}
                          <button
                            ref={(el) => {
                              stepRefs.current[idx] = el;
                            }}
                            onClick={() => setActiveStep(idx)}
                            className="flex flex-col items-center gap-2 group shrink-0"
                          >
                            {/* Circle */}
                            <div
                              className="w-8 h-8 rounded-full border flex items-center justify-center text-xs font-medium z-10 transition-all duration-300"
                              style={{
                                borderColor: isActive
                                  ? themeColor
                                  : isDone
                                    ? `${themeColor}66`
                                    : "rgba(255,255,255,0.15)",
                                color: isActive
                                  ? themeColor
                                  : isDone
                                    ? `${themeColor}B3`
                                    : "#6b7280",
                                backgroundColor: isActive
                                  ? `${themeColor}1A`
                                  : "#09090b",
                                boxShadow: isActive
                                  ? `0 0 10px ${themeColor}66`
                                  : "none",
                              }}
                            >
                              {isDone ? (
                                <svg
                                  className="w-3.5 h-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2.5}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              ) : (
                                idx + 1
                              )}
                            </div>

                            {/* Label */}
                            <span
                              className="text-[10px] text-center leading-tight hidden md:block transition-colors duration-200"
                              style={{
                                color: isActive
                                  ? "#e5e7eb"
                                  : isDone
                                    ? "#9ca3af"
                                    : "#6b7280",
                                whiteSpace: "pre-line",
                              }}
                            >
                              {step.label}
                            </span>
                          </button>

                          {/* 3 Dots Connector (between steps) */}
                          {idx < detail.steps.length - 1 && (
                            <div className="hidden md:flex items-center justify-center gap-1 flex-1 pb-6 mt-3">
                              {[0, 1, 2].map((dotIdx) => (
                                <div
                                  key={dotIdx}
                                  className="rounded-full transition-all duration-500"
                                  style={{
                                    width: "4px",
                                    height: "4px",
                                    transitionDelay: `${dotIdx * 60}ms`,
                                    backgroundColor: isDone
                                      ? `${themeColor}99`
                                      : isActive && dotIdx === 0
                                        ? `${themeColor}66`
                                        : "rgba(255,255,255,0.15)",
                                    boxShadow: isDone
                                      ? `0 0 4px ${themeColor}55`
                                      : "none",
                                  }}
                                />
                              ))}
                            </div>
                          )}
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/10" />

              {/* Sub-section Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="px-8 py-7"
                >
                  {/* Sub-section title */}
                  <div className="flex items-center gap-2 mb-5">
                    <div
                      className="w-6 h-px"
                      style={{ backgroundColor: `${themeColor}99` }} // ~60% opacity
                    />
                    <span className="text-sm font-medium text-gray-300">
                      {currentStepData?.title}
                    </span>
                  </div>

                  {currentStepDescLines && (
                    <div className="text-sm text-gray-400 mb-5 max-w-xl space-y-1">
                      {currentStepDescLines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  )}

                  {/* Bullet Items */}
                  <div className="flex flex-col gap-3">
                    {currentStepData?.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-stretch gap-4"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.07, duration: 0.25 }}
                      >
                        {/* Left dot + line */}
                        <div className="flex flex-col items-center">
                          <div
                            className="w-2.5 h-2.5 rounded-full mt-4 shrink-0"
                            style={{ backgroundColor: themeColor }}
                          />
                          {idx < (currentStepData?.items.length ?? 0) - 1 && (
                            <div
                              className="w-px flex-1 mt-1"
                              style={{ backgroundColor: `${themeColor}33` }} // ~20% opacity
                            />
                          )}
                        </div>

                        {/* Card */}
                        <div
                          className="flex-1 rounded-md px-5 py-4 mb-1"
                          style={{
                            border: "1px solid rgba(255,255,255,0.07)",
                            backgroundColor: "rgba(255,255,255,0.02)",
                          }}
                        >
                          <span className="text-sm text-gray-300">{item}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Footer Note */}
              {currentStepFooter && (
                <div className="px-8 pb-8">
                  <p className="text-xs text-gray-600 italic">
                    {currentStepFooter}
                  </p>
                </div>
              )}
            </div>

            {/* Close Button (moved here and z-index boosted) */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-[100] p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
