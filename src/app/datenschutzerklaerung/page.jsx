// components/Datenschutzerklaerung.jsx
"use client";

import { useState } from "react";

const sections = [
  { id: "was-tun-wir", label: "1. Was tun wir?" },
  { id: "ueber-was", label: "2. Über was informieren wir?" },
  { id: "begriffsdefinitionen", label: "3. Begriffsdefinitionen" },
  { id: "kontakt", label: "4. Kontakt" },
  { id: "datensicherheit", label: "5. Datensicherheit" },
  { id: "betroffenenrechte", label: "6. Betroffenenrechte" },
  { id: "datenverarbeitungen-allgemein", label: "7. Datenverarbeitungen im Allgemeinen" },
  { id: "datenverarbeitungen-einzeln", label: "8. Datenverarbeitungen im Einzelnen" },
  { id: "bleibt-gleich", label: "9. Bleibt unsere Datenschutzerklärung immer gleich?" },
];

const dataCategories = [
  {
    icon: "🪪",
    title: "Allgemeine Personendaten",
    description:
      "Wir bearbeiten Ihre allgemeinen Personendaten. Personendaten sind jede Art von Information, die sich auf eine identifizierbare natürliche Person beziehen. Identifizierbar ist die natürliche Person, wenn sich aus den vorhandenen Informationen Rückschlüsse auf die Identität der Person ziehen lassen.",
    example:
      "Bei Ihrem Namen, IP-Adresse und Privatadresse handelt es sich um Personendaten.",
  },
  {
    icon: "🤝",
    title: "Überlassene Daten",
    description:
      "Sie stellen uns häufig Ihre Personendaten selbst zur Verfügung. Immer wenn Sie Ihre Personendaten eingeben und an uns übermitteln, so gelten diese als an uns überlassen. Die Übermittlung der Daten an uns erfolgt grundsätzlich freiwillig, ist aber teilweise zwingend erforderlich, um unsere Angebote nutzen zu können.",
    example:
      "Sie geben Ihre Daten in einem Kontaktformular ein oder melden sich für einen Newsletter an.",
  },
  {
    icon: "📊",
    title: "Erhobene Daten",
    description:
      "Wenn Sie unsere Dienste benutzen, erheben wir teilweise Ihre Daten, ohne dass Ihre aktive Mitwirkung erforderlich ist. Bei diesen Daten handelt es sich in der Regel um Daten über Ihr Gerät und um Daten über das Nutzerverhalten.",
    example:
      "Wir erheben Daten über das Betriebssystem des Geräts, mit dem Sie unsere Webseite aufgerufen haben.",
  },
  {
    icon: "📤",
    title: "Datenweitergabe",
    description:
      "Wir geben Ihre Personendaten an Unternehmen weiter, die selbst entscheiden können, wie sie die Daten nutzen. Meist erfolgt dies, weil es zur Einhaltung von gesetzlichen Vorschriften erforderlich ist, wenn eine offene Forderung an ein Inkassounternehmen übertragen wird oder um betrügerische Aktivitäten festzustellen.",
    example:
      "Eine gesetzliche Vorschrift verpflichtet uns, Ihre Daten an eine Behörde weiterzugeben.",
  },
];

const rights = [
  {
    title: "Auskunftsrecht",
    content: (
      <>
        <p>
          Sie können jederzeit eine Auskunft über die von uns über Sie gespeicherten Daten verlangen. Wir bitten Sie,
          Ihr Auskunftsgesuch zusammen mit einem glaubhaften Identitätsnachweis an{" "}
          <a
            href="mailto:m.sezgin@ms-architektur.ch"
            className="text-black underline underline-offset-4"
          >
            m.sezgin@ms-architektur.ch
          </a>{" "}
          zu senden.
        </p>
        <p className="mt-3">
          Die Auskunft erfolgt in schriftlicher oder auch in anderer Form, ggf. auch elektronisch. Sofern Sie dies
          verlangen, können wir Ihnen die Auskunft auch mündlich erteilen, sofern Sie Ihre Identität in anderer Form
          nachweisen. Stellen Sie den Auskunftsantrag elektronisch, stellen wir die Auskünfte in einem gängigen
          elektronischen Format zur Verfügung, sofern Sie nichts anderes angeben.
        </p>
        <p className="mt-3">
          Die Auskunft ist im Regelfall unentgeltlich. Werden darüber hinaus Kopien angefordert, kann ein angemessenes
          Entgelt verlangt werden.
        </p>
        <p className="mt-3">
          Das Recht, eine Kopie über die verarbeiteten Daten zu erhalten, darf die Rechte und Freiheiten anderer
          Personen nicht beeinträchtigen.
        </p>
        <p className="mt-3">
          Im Falle von offensichtlich unbegründeten oder exzessiven Auskunftsanträgen behalten wir uns vor, die
          Auskunft im Rahmen der gesetzlichen Schranken zu verweigern oder ein angemessenes Entgelt dafür zu verlangen.
        </p>
        <p className="mt-3">
          Die Bearbeitung Ihres Gesuchs unterliegt der gesetzlichen Frist von 30 Tagen. Diese Frist dürfen wir aufgrund
          der Komplexität und der hohen Anzahl von Anfragen um zwei weitere Monate verlängern, soweit dies erforderlich
          ist. Sie werden über die Fristverlängerung innerhalb eines Monats nach dem Stellen des Auskunftsgesuchs
          informiert. Zugleich werden Ihnen die Gründe für die Verlängerung genannt.
        </p>
      </>
    ),
  },
  {
    title: "Löschung und Berichtigung",
    content: (
      <>
        <p>
          Sie haben jederzeit die Möglichkeit, die Löschung oder Berichtigung bzw. Vervollständigung Ihrer Daten zu
          verlangen, sofern keine gesetzlichen Aufbewahrungspflichten oder ein gesetzlicher Erlaubnistatbestand
          entgegenstehen.
        </p>
        <p className="mt-3">
          Bitte beachten Sie, dass die Ausübung Ihrer Rechte unter Umständen im Konflikt mit vertraglichen
          Vereinbarungen stehen und entsprechende Auswirkungen auf die Vertragsdurchführung haben kann, z.B. vorzeitige
          Vertragsauflösung oder Kostenfolgen.
        </p>
      </>
    ),
  },
  {
    title: "Einschränkung der Bearbeitung",
    content: (
      <>
        <p>
          Sie haben ausserdem das Recht, eine Einschränkung der Verarbeitung zu verlangen, wenn Sie die Richtigkeit
          dieser Daten bestreiten, die Verarbeitung unrechtmässig ist, die Daten nicht länger benötigt werden oder Sie
          Widerspruch gegen die Verarbeitung erhoben haben.
        </p>
        <p className="mt-3">
          Wird die Verarbeitung der Daten eingeschränkt, dürfen diese nur noch gespeichert werden. Eine weitergehende
          Verarbeitung darf nur mit Ihrer Einwilligung, zur Geltendmachung, Ausübung oder Verteidigung von
          Rechtsansprüchen, zum Schutz der Rechte einer anderen Person oder aus Gründen eines wichtigen öffentlichen
          Interesses erfolgen. Im Falle einer Aufhebung der Einschränkung werden Sie benachrichtigt.
        </p>
      </>
    ),
  },
  {
    title: "Recht auf Datenherausgabe und -übertragung",
    content: (
      <>
        <p>
          Sie haben das Recht, Ihre Daten in einem gängigen Dateiformat zu erhalten oder, falls technisch umsetzbar,
          an einen Dritten übermitteln zu lassen, wenn wir Ihre Daten automatisiert verarbeiten und wenn:
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-2">
          <li>Sie Ihre Einwilligung für die Verarbeitung dieser Daten erteilt haben; oder</li>
          <li>Sie Daten im Zusammenhang mit dem Abschluss oder der Abwicklung eines Vertrags bekannt gegeben haben.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Widerspruchsrecht",
    content: (
      <p>
        Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die
        Verarbeitung inkl. Profiling, die auf der Basis unserer berechtigten Interessen erfolgt, Widerspruch
        einzulegen. Dieses Recht gilt auch für Verarbeitungen zum Zwecke der Direktwerbung.
      </p>
    ),
  },
  {
    title: "Rechtsweg",
    content: (
      <p>
        Sind Sie von der Verarbeitung personenbezogener Daten betroffen, haben Sie das Recht, Ihre Rechte gerichtlich
        durchzusetzen oder bei der zuständigen Aufsichtsbehörde eine Beschwerde einzureichen. Die zuständige
        Aufsichtsbehörde in der Schweiz ist der{" "}
        <a
          href="https://www.edoeb.admin.ch/"
          target="_blank"
          rel="noreferrer"
          className="text-black underline underline-offset-4"
        >
          Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte
        </a>
        .
      </p>
    ),
  },
];

const services = [
  {
    name: "Bereitstellen der Webseite und Erstellung von Logfiles",
    tag: "LOGFILES",
    tagColor: "bg-blue-500",
    description:
      "Indem Sie www.ms-architektur.ch lediglich besuchen, sich also nicht registrieren oder anderweitige Informationen preisgeben, werden nur die Daten erhoben, die Ihr Browser an unseren Server automatisiert übermittelt. Die Daten sind für den Betrieb der Website technisch erforderlich.",
    details: (
      <>
        <h5 className="font-semibold text-gray-900 mb-2">Welche Daten verarbeiten wir?</h5>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Name des Internetserviceproviders</li>
          <li>IP-Adresse</li>
          <li>Technische Informationen wie Browser, Betriebssystem oder Bildschirmauflösung</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Referrer-URL</li>
        </ul>
        <p className="mb-4">
          Diese Daten können keiner bestimmten Person zugeordnet werden und es findet keine Zusammenführung dieser Daten
          mit anderen Datenquellen statt.
        </p>

        <h5 className="font-semibold text-gray-900 mb-2">Zu welchem Zweck verarbeiten wir die Daten?</h5>
        <p className="mb-4">
          Die Verarbeitung der Logfiles erfolgt, um die Funktionsfähigkeit der Webseite zu garantieren und zur
          Sicherstellung der Sicherheit unserer informationstechnischen Systeme.
        </p>

        <h5 className="font-semibold text-gray-900 mb-2">An wen geben wir die Daten weiter?</h5>
        <p className="mb-4">
          Die Weitergabe der Daten durch uns richtet sich nach unseren Ausführungen zur Datenweitergabe.
        </p>

        <h5 className="font-semibold text-gray-900 mb-2">Wie können Sie die Datenverarbeitung verhindern?</h5>
        <p>
          Die Daten werden nur so lang gespeichert, wie dies zur Erreichung des Zweckes ihrer Erhebung notwendig ist.
          Dementsprechend werden die Daten nach Beendigung jeder Sitzung gelöscht. Die Speicherung der Logfiles ist für
          den Betrieb der Webseite zwingend notwendig; Sie haben daher keine Möglichkeit, dagegen Widerspruch zu
          erheben, es sei denn, Sie besuchen unsere Webseite nicht.
        </p>
      </>
    ),
  },
  {
    name: "Cookies",
    tag: "BROWSER",
    tagColor: "bg-green-500",
    description:
      "Unsere Webseite verwendet Cookies. Bei Cookies handelt es sich um Textdateien, die mit Hilfe des Browsers auf dem Betriebssystem Ihres Gerätes abgelegt werden, wenn Sie unsere Webseite aufrufen. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.",
    details: (
      <>
        <p className="mb-4">
          Teils sind Cookies technisch notwendig, damit die Webseite funktionieren kann. Die meisten der von uns
          verwendeten Cookies sind sogenannte Session-Cookies. Sie werden nach Ende Ihres Besuchs automatisch gelöscht.
          Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen oder deren Laufzeit abläuft.
        </p>

        <h5 className="font-semibold text-gray-900 mb-2">Zu welchem Zweck verarbeiten wir die Daten?</h5>
        <p className="mb-4">
          Wir verwenden Cookies, damit wir anhand der erhobenen Daten unsere Webseite benutzerfreundlicher,
          effektiver und sicherer gestalten können. Insbesondere verwenden wir die Cookies für das Speichern Ihrer
          Präferenzen, die schnelle Bereitstellung und attraktive Darstellung der Websiteinhalte sowie für die Analyse
          der Nutzung dieser Website zur statistischen Auswertung und für kontinuierliche Verbesserungen.
        </p>

        <h5 className="font-semibold text-gray-900 mb-2">An wen geben wir die Daten weiter?</h5>
        <p className="mb-4">
          Die Weitergabe der Daten durch uns richtet sich nach unseren Ausführungen zur Datenweitergabe. Zudem sind die
          Ausführungen zu den einzelnen Datenbearbeitungen in dieser Datenschutzerklärung zu beachten.
        </p>

        <h5 className="font-semibold text-gray-900 mb-2">Wie können Sie die Datenverarbeitung verhindern?</h5>
        <p className="mb-3">
          Cookies werden auf Ihrem Rechner gespeichert. Sie können diese vollständig löschen oder durch Änderung der
          Einstellungen in Ihrem Browser die Übertragung deaktivieren oder einschränken. Bei Deaktivierung von Cookies
          für unsere Webseite können möglicherweise nicht mehr alle Funktionen der Webseite vollumfänglich genutzt
          werden.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <a
              href="https://support.google.com/accounts/answer/61416?hl=de&co=GENIE.Platform%3DDesktop"
              target="_blank"
              rel="noreferrer"
              className="text-black underline underline-offset-4"
            >
              Anleitung für Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/de-ch/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noreferrer"
              className="text-black underline underline-offset-4"
            >
              Anleitung für Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/de-de/windows/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
              target="_blank"
              rel="noreferrer"
              className="text-black underline underline-offset-4"
            >
              Anleitung für Edge
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/de/kb/Cookies-blockieren"
              target="_blank"
              rel="noreferrer"
              className="text-black underline underline-offset-4"
            >
              Anleitung für Firefox
            </a>
          </li>
        </ul>

        <p>
          Bei Cookies, die für die Erfolgs- und Reichweitenmessung oder für Werbung verwendet werden, ist für zahlreiche
          Dienste ein allgemeiner Widerspruch (Opt-out) über die Network Advertising Initiative (NAI), YourAdChoices
          oder Your Online Choices (EDAA) möglich.
        </p>
      </>
    ),
  },
  {
    name: "Zählpixel",
    tag: "TRACKING",
    tagColor: "bg-purple-500",
    description:
      "Wir können Zählpixel auf unserer Website oder in unseren E-Mails verwenden. Zählpixel werden auch als Web-Beacons bezeichnet. Bei Zählpixeln handelt es sich um kleine, üblicherweise nicht sichtbare Bilder, die beim Besuch unserer Website oder beim Öffnen unserer E-Mails automatisch abgerufen werden.",
    details: (
      <>
        <h5 className="font-semibold text-gray-900 mb-2">Welche Daten verarbeiten wir?</h5>
        <p className="mb-4">
          Mit Zählpixeln können die gleichen Angaben wie in Logfiles erfasst werden. Zudem können Bewegungsprofile der
          gesamten Sitzung erhoben werden. Insbesondere werden Zählpixel durch Dritte, deren Dienste wir nutzen,
          eingesetzt.
        </p>

        <h5 className="font-semibold text-gray-900 mb-2">Zu welchem Zweck verarbeiten wir die Daten?</h5>
        <p className="mb-4">
          Zählpixel werden von verschiedenen Trackingdiensten verwendet, um die Nutzung dieser Website zu analysieren
          und zur statistischen Auswertung sowie für kontinuierliche Verbesserungen. Zudem können Zählpixel für
          E-Mail-Tracking verwendet werden.
        </p>

        <h5 className="font-semibold text-gray-900 mb-2">An wen geben wir die Daten weiter?</h5>
        <p className="mb-4">
          Die Weitergabe der Daten durch uns richtet sich nach unseren Ausführungen zur Datenweitergabe. Beachten Sie
          zudem die Ausführungen in dieser Datenschutzerklärung zu den einzelnen Trackingdiensten.
        </p>

        <h5 className="font-semibold text-gray-900 mb-2">Wie können Sie die Datenverarbeitung verhindern?</h5>
        <p>
          Um die Datenverarbeitung mittels Zählpixeln zu verhindern, können Sie geeignete Browsererweiterungen wie
          uBlockOrigin installieren und in Ihrem E-Mail-Programm externe Grafiken blockieren.
        </p>
      </>
    ),
  },
  {
    name: "jsDelivr",
    url: "https://www.jsdelivr.com/",
    tag: "HOSTING",
    tagColor: "bg-red-500",
    description:
      "jsDelivr ist ein Content Delivery Network (CDN), das hauptsächlich für die Auslieferung von JavaScript, CSS und anderen Webdesignbibliotheken verwendet wird. Es stellt eine globale Infrastruktur von Serverspeicherorten bereit, die es ermöglicht, Dateien schneller und effizienter an Nutzer auf der ganzen Welt auszuliefern.",
    details: (
      <>
        <p className="mb-4">
          Durch die Verwendung von jsDelivr können Webseitenbetreiber die Ladezeiten ihrer Seiten verbessern und die
          Performance steigern, da die Dateien von den Servern von jsDelivr ausgeliefert werden, die oft näher am
          Nutzerstandort liegen als der tatsächliche Server der Webseite.
        </p>
        <p>
          Darüber hinaus bietet jsDelivr auch Funktionen wie Caching, Load Balancing und GZIP-Komprimierung, um die
          Ladezeiten weiter zu optimieren. Es wird auch von vielen Frameworks und Content-Management-Systemen wie
          WordPress, Bootstrap und jQuery genutzt, um die Integration von externen Bibliotheken zu erleichtern.
        </p>
      </>
    ),
  },
  {
    name: "PrivacyBee",
    url: "https://www.privacybee.io/",
    tag: "DATA PROTECTION",
    tagColor: "bg-red-500",
    description:
      "Wir verwenden auf unserer Webseite den PrivacyBee, eine Dienstleistung des Anbieters PrivacyBee AG, Laupenstrasse 1, 3008 Bern, Schweiz. PrivacyBee wird verwendet, um alle datenschutzrelevanten Dienste zu erkennen und daraus eine individuelle Datenschutzerklärung für die Webseite zu erzeugen.",
    details: (
      <>
        <h5 className="font-semibold text-gray-900 mb-2">Welche Daten verarbeiten wir?</h5>
        <p className="mb-3">
          PrivacyBee ist ein Dienst zur Generierung von Datenschutzerklärungen, die dann per JavaScript in unsere
          Webseite eingebunden wird. Für die Bereitstellung dieses Dienstes werden folgende Daten verarbeitet:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>IP-Adresse</li>
          <li>Browser-Typ und -Version</li>
          <li>Betriebssystem</li>
          <li>Datum und Uhrzeit des Zugriffs auf unsere Datenschutzerklärung</li>
        </ul>

        <h5 className="font-semibold text-gray-900 mb-2">Zu welchem Zweck verarbeiten wir die Daten?</h5>
        <p className="mb-4">
          Die Erhebung dieser Daten ermöglicht uns, die Datenschutzerklärung korrekt auf Ihrer Endgerätekonfiguration
          anzuzeigen und sicherzustellen, dass die Inhalte korrekt und auf dem neuesten Stand sind.
        </p>

        <h5 className="font-semibold text-gray-900 mb-2">An wen geben wir die Daten weiter?</h5>
        <p className="mb-4">
          Die Weitergabe der Daten durch uns richtet sich nach unseren Ausführungen zur Datenweitergabe. Die Daten, die
          durch die Nutzung von PrivacyBee gesammelt werden, bleiben bei PrivacyBee.
        </p>

        <h5 className="font-semibold text-gray-900 mb-2">Wie können Sie die Verarbeitung Ihrer Daten verhindern?</h5>
        <p>
          Um die Verarbeitung Ihrer Daten durch PrivacyBee zu verhindern, können Sie JavaScript in Ihrem Browser
          deaktivieren. Bitte beachten Sie jedoch, dass bei einer Deaktivierung von JavaScript unter Umständen nicht
          alle Funktionen unserer Webseite vollumfänglich nutzbar sind. Eine spezifische Opt-out-Möglichkeit für den
          Dienst PrivacyBee selbst bieten wir nicht an, da der Dienst wesentlich für die Bereitstellung unserer
          Datenschutzerklärung ist.
        </p>
      </>
    ),
  },
];

function AccordionItem({ icon, title, description, example }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl p-5 mb-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div
        className="flex items-center justify-between cursor-pointer gap-4"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
            {icon}
          </div>
          <span className="font-semibold text-gray-800">{title}</span>
        </div>

        <div className="text-sm text-gray-500 flex items-center gap-1 shrink-0">
          {open ? "weniger anzeigen" : "mehr anzeigen"}
          <span className={`transform transition-transform ${open ? "rotate-180" : ""}`}>∨</span>
        </div>
      </div>

      {open && (
        <div className="mt-4 text-sm text-gray-600 leading-relaxed border-t pt-4">
          <p>{description}</p>
          <p className="mt-3 bg-gray-50 p-3 rounded-lg border-l-4 border-gray-300">
            <span className="font-semibold text-gray-900 block mb-1">Beispiel:</span>
            {example}
          </p>
        </div>
      )}
    </div>
  );
}

function ServiceItem({ name, url, tag, tagColor, description, details }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl p-5 mb-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div
        className="flex items-start justify-between cursor-pointer gap-4"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-gray-400 font-bold text-xs">▐▌</span>
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <p className="font-semibold text-gray-800 leading-tight">{name}</p>
              <span
                className={`text-white text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap ${tagColor}`}
              >
                {tag}
              </span>
            </div>

            {url && (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-blue-500 hover:underline break-all"
                onClick={(e) => e.stopPropagation()}
              >
                {url}
              </a>
            )}
          </div>
        </div>

        <div className="hidden md:flex text-sm text-gray-500 items-center gap-1 shrink-0">
          {open ? "weniger anzeigen" : "mehr anzeigen"}
          <span className={`transform transition-transform ${open ? "rotate-180" : ""}`}>∨</span>
        </div>
      </div>

      {open && (
        <div className="mt-4 text-sm text-gray-600 leading-relaxed border-t pt-4">
          <p className="font-medium text-gray-800 mb-3">{description}</p>
          <div className="text-gray-600 text-sm leading-relaxed">{details}</div>
        </div>
      )}
    </div>
  );
}

function InfoCard({ title, children }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <h4 className="font-bold text-gray-900 mb-3">{title}</h4>
      <div className="text-sm font-light text-gray-600 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Datenschutzerklaerung() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20 font-sans text-gray-700">
        <header className="mb-16">
          <nav className="text-xs text-gray-400 mb-8 flex gap-2 overflow-x-auto pb-4 no-scrollbar">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="whitespace-nowrap hover:text-black border-b border-transparent hover:border-black pb-1 transition-all"
              >
                {s.label}
              </a>
            ))}
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Datenschutzerklärung
          </h1>

          <div className="flex items-center gap-3 text-sm text-gray-400 mb-8 font-light">
            <span className="bg-gray-200 w-1 h-1 rounded-full" />
            <span>Zuletzt aktualisiert am 28. Februar 2026</span>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm leading-relaxed text-gray-600 text-lg font-light">
            Ein transparenter Umgang mit Personendaten ist uns ein sehr wichtiges Anliegen. Die vorliegende
            Datenschutzerklärung informiert darüber, welche Personendaten wir zu welchem Zweck erheben und an wen wir
            diese weitergeben. Wir überprüfen und erneuern diese Datenschutzerklärung regelmässig, um höchste
            Transparenz gewährleisten zu können.
          </div>
        </header>

        <div className="space-y-20">
          <section id="ueberblick" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Welche Daten wir erfassen</h2>
            {dataCategories.map((item) => (
              <AccordionItem key={item.title} {...item} />
            ))}
          </section>

          <section id="was-tun-wir" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Was tun wir?</h2>
            <div className="space-y-4 text-sm md:text-base font-light leading-relaxed text-gray-600">
              <p>
                MS-Architektur AG (Roosstrasse 47, 8832 Wollerau) betreibt die Website{" "}
                <a
                  href="https://www.ms-architektur.ch"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black underline font-medium underline-offset-4"
                >
                  www.ms-architektur.ch
                </a>{" "}
                (nachfolgend als «wir» bzw. «uns» bezeichnet). Auf dieser Webseite können Sie sich über unsere
                Organisation informieren, unsere Online-Services in Anspruch nehmen und mit uns in Kontakt treten.
              </p>
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein grosses Anliegen. Wir informieren Sie in dieser
                Datenschutzerklärung transparent und verständlich darüber, welche Daten wir über unsere Website sammeln
                und wie wir damit umgehen.
              </p>
              <p>
                Aus diesem Grund verwenden wir die Icons des Vereins{" "}
                <a
                  href="https://privacy-icons.ch/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-gray-900 underline underline-offset-4"
                >
                  PRIVACY ICONS
                </a>
                . Sie sollen Ihnen dabei helfen, sich rasch einen Überblick über die Verarbeitung Ihrer Daten durch uns
                zu verschaffen.
              </p>
            </div>
          </section>

          <section id="ueber-was" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Über was informieren wir?</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Wer für die Datenverarbeitung verantwortlich ist.",
                "Welche Daten erhoben werden.",
                "Zu welchem Zweck diese Daten erhoben werden.",
                "An wen wir diese Daten weitergeben.",
                "Wie Sie einer Datenverarbeitung widersprechen können.",
                "Welche Rechte Sie haben und wie Sie diese geltend machen können.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-sm"
                >
                  <span className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-[10px] flex-shrink-0">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="begriffsdefinitionen" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">3. Begriffsdefinitionen</h2>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">3.1 Was sind personenbezogene Daten?</h3>
                <p className="text-sm font-light leading-relaxed text-gray-600">
                  Personenbezogene Daten (gleichbedeutend mit dem Begriff «Personendaten») sind alle Angaben, die sich
                  auf eine bestimmte oder bestimmbare natürliche Person beziehen. Dazu gehören beispielsweise Name,
                  Adresse, Geburtsdatum, E-Mail-Adresse oder Telefonnummer sowie die IP-Adresse. Auch Daten über
                  persönliche Vorlieben wie Freizeitbeschäftigungen oder Mitgliedschaften zählen zu den
                  personenbezogenen Daten.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">
                  3.2 Was sind besondere Kategorien personenbezogener Daten?
                </h3>
                <p className="text-sm font-light leading-relaxed text-gray-600 mb-4">
                  Besondere Kategorien personenbezogener Daten (gleichbedeutend mit dem Begriff «besonders
                  schützenswerte Daten») sind:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm font-light leading-relaxed text-gray-600">
                  <li>
                    Daten über religiöse, weltanschauliche, politische oder gewerkschaftliche Ansichten oder
                    Tätigkeiten.
                  </li>
                  <li>
                    Daten über die Gesundheit, Intimsphäre, die Zugehörigkeit zu einer Rasse oder Ethnie sowie zum
                    Sexualleben und zur sexuellen Orientierung.
                  </li>
                  <li>
                    Daten zu administrativen oder strafrechtlichen Verfolgungen und Sanktionen sowie Daten über
                    Massnahmen der sozialen Hilfe.
                  </li>
                  <li>Genetische Daten und biometrische Daten, die eine Person eindeutig identifizieren.</li>
                </ul>
                <p className="text-sm font-light leading-relaxed text-gray-600 mt-4">
                  Soweit erforderlich und Sie uns diese Daten selbst preisgeben, können wir Daten, die einer besonderen
                  Kategorie von personenbezogenen Daten angehören, verarbeiten. In diesem Fall unterliegt deren
                  Verarbeitung strengerer Vertraulichkeit.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">
                  3.3 Was ist das Verarbeiten von personenbezogenen Daten?
                </h3>
                <p className="text-sm font-light leading-relaxed text-gray-600">
                  Verarbeiten (gleichbedeutend mit dem Begriff «Bearbeiten») ist jeder Umgang mit personenbezogenen
                  Daten, unabhängig von den angewandten Mitteln und Verfahren, insbesondere das Beschaffen, Speichern,
                  Aufbewahren, Verwenden, Verändern, Bekanntgeben, Archivieren, Löschen oder Vernichten von
                  personenbezogenen Daten.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">
                  3.4 Was ist das Bekanntgeben von personenbezogenen Daten?
                </h3>
                <p className="text-sm font-light leading-relaxed text-gray-600">
                  Dies ist das Übermitteln oder Zugänglichmachen von personenbezogenen Daten, bspw. die
                  Veröffentlichung oder die Offenbarung an einen Dritten.
                </p>
              </div>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <section id="kontakt" className="scroll-mt-24 bg-gray-900 text-white p-8 rounded-3xl shadow-xl">
              <h2 className="text-xl font-bold mb-6">4. Kontakt</h2>
              <p className="text-sm leading-relaxed opacity-90 mb-6">
                Bei Fragen oder Anliegen zum Schutz Ihrer Daten durch uns, können Sie sich an unseren
                Datenschutzverantwortlichen wenden:
              </p>

              <address className="not-italic text-sm leading-relaxed space-y-4 opacity-90">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-1">
                    Ansprechpartner
                  </span>
                  <span className="text-lg">Melih Sezgin</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-1">
                    Unternehmen
                  </span>
                  <span>MS-Architektur AG</span>
                  <span>Roosstrasse 47</span>
                  <span>8832 Wollerau</span>
                </div>

                <a
                  href="mailto:m.sezgin@ms-architektur.ch"
                  className="inline-block mt-4 py-2 px-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  m.sezgin@ms-architektur.ch
                </a>
              </address>
            </section>

            <section id="datensicherheit" className="scroll-mt-24 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">5. Datensicherheit</h2>
              <div className="space-y-4 text-sm font-light leading-relaxed text-gray-600">
                <p>
                  Wir werden Ihre Daten sicher aufbewahren und alle angemessenen Massnahmen ergreifen, um Ihre Daten
                  vor Verlust, Zugriff, Missbrauch oder Änderungen zu schützen.
                </p>
                <p>
                  Unsere Vertragspartner und Mitarbeitenden, die Zugang zu Ihren Daten haben, sind zur Einhaltung der
                  datenschutzrechtlichen Bestimmungen verpflichtet. In manchen Fällen wird es im Rahmen der
                  Auftragsverarbeitung erforderlich sein, dass wir Ihre Anfragen an mit uns verbundene Unternehmen
                  weiterreichen. Auch in diesen Fällen werden Ihre Daten vertraulich behandelt.
                </p>
                <p>
                  Innerhalb unserer Webseite verwenden wir das SSL-Verfahren (Secure Socket Layer) in Verbindung mit
                  der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs font-semibold text-green-600 mt-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                SSL / TLS Verschlüsselung aktiv
              </div>
            </section>
          </div>

          <section id="betroffenenrechte" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">6. Betroffenenrechte</h2>
            <div className="space-y-6">
              {rights.map((right, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3">{right.title}</h4>
                  <div className="text-sm font-light text-gray-600 leading-relaxed">{right.content}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="datenverarbeitungen-allgemein" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">7. Datenverarbeitungen im Allgemeinen</h2>

            <div className="space-y-4">
              <InfoCard title="Welche Daten verarbeiten wir von Ihnen und von wem erhalten wir diese Daten?">
                <p className="mb-3">
                  In erster Linie verarbeiten wir personenbezogene Daten, die Sie uns übermitteln oder die wir beim
                  Betrieb unserer Website erheben. Unter Umständen erhalten wir personenbezogene Daten über Sie auch von
                  Dritten.
                </p>
                <p className="mb-2">Das können folgende Kategorien sein:</p>
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li>Personenstammdaten (Name, Adresse, Geburtsdaten etc.)</li>
                  <li>Kontaktdaten (Handynummer, E-Mailadresse etc.)</li>
                  <li>Finanzdaten (bspw. Kontoangaben)</li>
                  <li>Onlinekennungen (bspw. Cookie-Kennung, IP-Adressen)</li>
                </ul>
                <p className="mb-2">Diese Daten können aus den folgenden Quellen stammen:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Angaben aus öffentlich zugänglichen Quellen (z.B. Medien, Internet)</li>
                  <li>Angaben aus öffentlichen Registern (z.B. Handelsregister, Betreibungsregister, Grundbuch)</li>
                  <li>Angaben im Zusammenhang mit behördlichen oder gerichtlichen Verfahren</li>
                  <li>Angaben betreffend Ihrer beruflichen Funktionen und Aktivitäten</li>
                  <li>Angaben über Sie in Korrespondenz und Besprechungen mit Dritten</li>
                  <li>Bonitätsauskünfte, soweit wir mit Ihnen persönliche Geschäfte abwickeln</li>
                  <li>
                    Angaben über Sie, die uns Personen aus Ihrem Umfeld geben, damit wir Verträge mit Ihnen
                    abschliessen oder abwickeln können
                  </li>
                  <li>Daten im Zusammenhang mit der Benutzung der Webseite</li>
                </ul>
              </InfoCard>

              <InfoCard title="Unter welchen Voraussetzungen verarbeiten wir Ihre Daten?">
                <p className="mb-3">
                  Wir verarbeiten Ihre Daten nach Treu und Glauben und nach den in dieser Datenschutzerklärung
                  festgelegten Zwecken. Wir achten dabei auf eine transparente und verhältnismässige Verarbeitung.
                </p>
                <p className="mb-2">
                  Sollte dies ausnahmsweise nicht möglich sein, kann die Datenverarbeitung trotzdem rechtmässig sein,
                  weil ein Rechtfertigungsgrund vorliegt. Als Rechtfertigungsgrund kommt namentlich in Frage:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li>Ihre Einwilligung</li>
                  <li>Die Durchführung eines Vertrages oder vorvertraglicher Massnahmen</li>
                  <li>Die Erfüllung gesetzlicher Vorschriften</li>
                  <li>Unsere berechtigten Interessen, sofern Ihre Interessen nicht überwiegen</li>
                </ul>
                <p>
                  Unter Umständen sind Sie verpflichtet, uns gewisse personenbezogene Daten bekanntzugeben, damit wir
                  miteinander geschäftliche Beziehungen anbahnen können. Ohne solche Daten sind wir normalerweise nicht
                  in der Lage, einen Vertrag abzuwickeln. Die Webseite kann im Normalfall ebenfalls nicht genutzt
                  werden, wenn gewisse Angaben zur Sicherstellung des Datenverkehrs, wie Ihre IP-Adresse, nicht
                  offengelegt werden.
                </p>
              </InfoCard>

              <InfoCard title="Wie können Sie eine erteilte Einwilligung widerrufen?">
                <p className="mb-3">
                  Haben Sie uns eine Einwilligung zur Verarbeitung Ihrer personenbezogenen Daten für bestimmte Zwecke
                  erteilt, verarbeiten wir Ihre Daten im Rahmen dieser Einwilligung, soweit wir keinen anderen
                  Rechtfertigungsgrund haben bzw. kein anderer Erlaubnistatbestand erfüllt ist.
                </p>
                <p>
                  Sie können Ihre erteilte Einwilligung für die Zukunft jederzeit widerrufen und eine E-Mail an die im
                  Impressum genannte Adresse schicken. Bereits erfolgte Datenverarbeitungen sind von dem Widerruf nicht
                  betroffen und behalten ihre Gültigkeit.
                </p>
              </InfoCard>

              <InfoCard title="In welchen Fällen geben wir Ihre Daten an Dritte weiter?">
                <p className="mb-3 font-medium text-gray-900">a. Grundsatz</p>
                <p className="mb-2">
                  Wir sind unter Umständen darauf angewiesen, die Dienste Dritter oder von verbundenen Unternehmen in
                  Anspruch zu nehmen und diese mit der Verarbeitung Ihrer Daten zu beauftragen.
                </p>
                <p className="mb-2">Kategorien der Empfänger sind namentlich:</p>
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li>Buchhaltung, Treuhand und Revisionsunternehmen</li>
                  <li>Beratungsunternehmen (Rechtsberatung, Steuern etc.)</li>
                  <li>IT-Dienstleister (Webhosting, Support, Clouddienste, Webseitengestaltung etc.)</li>
                  <li>Zahlungsdienstleister (ausschließlich nach Ihrer vorherigen Zustimmung)</li>
                  <li>Anbieter von Tracking-, Conversion- und Werbedienstleistungen</li>
                </ul>
                <p className="mb-4">
                  Wir stellen sicher, dass eine Weitergabe der Daten nur mit Ihrer ausdrücklichen Einwilligung erfolgt,
                  sofern es sich dabei um keine Auftragsdatenverarbeitung handelt. Zudem stellen wir sicher, dass diese
                  Dritten und unsere verbundenen Unternehmen die Voraussetzungen des Datenschutzes einhalten und Ihre
                  personenbezogenen Daten vertraulich behandeln. Unter Umständen sind wir auch verpflichtet, Ihre
                  personenbezogenen Daten an Behörden bekanntzugeben.
                </p>

                <p className="mb-3 font-medium text-gray-900">b. Weitergabe an Partner und Kooperationsunternehmen</p>
                <p className="mb-4">
                  Wir arbeiten teils mit unterschiedlichen Unternehmen und Partnern zusammen, die ihre Angebote auf
                  unserer Website aufschalten. Es ist für Sie erkennbar, dass es sich um ein Drittangebot handelt. Wenn
                  Sie ein solches Angebot in Anspruch nehmen, übermitteln wir Ihre personenbezogenen Daten an den
                  entsprechenden Partner oder das Kooperationsunternehmen, sofern Sie darin zuvor ausdrücklich
                  eingewilligt haben. Diese Partner und Kooperationsunternehmen sind eigenständig für die empfangenen
                  personenbezogenen Daten verantwortlich.
                </p>

                <p className="mb-3 font-medium text-gray-900">c. Weitergabe ins Ausland</p>
                <p>
                  Unter Umständen kann es im Rahmen der Auftragsverarbeitung zu einer Übermittlung Ihrer
                  personenbezogenen Daten an Unternehmen im Ausland kommen. Diese Unternehmen sind im gleichen Umfang
                  zum Datenschutz verpflichtet, wie wir selbst. Die Übermittlung kann weltweit stattfinden. Entspricht
                  das Datenschutzniveau nicht demjenigen der Schweiz, nehmen wir eine vorgängige Risikoeinschätzung vor
                  und stellen vertraglich sicher, dass der gleiche Schutz wie in der Schweiz garantiert wird, bspw.
                  mittels Standardvertragsklauseln der EU-Kommission oder anderen gesetzlich vorgegebenen Massnahmen.
                </p>
              </InfoCard>

              <InfoCard title="Wie lange bewahren wir Ihre Daten auf?">
                <p className="mb-3">
                  Wir speichern personenbezogene Daten nur so lange, wie dies erforderlich ist, um die einzelnen
                  Zwecke, zu denen die Daten erhoben wurden, zu erfüllen.
                </p>
                <p>
                  Vertragsdaten speichern wir länger, da wir dazu durch gesetzliche Vorschriften verpflichtet sind. Wir
                  müssen insbesondere geschäftliche Kommunikation, geschlossene Verträge und Buchungsbelege bis zu 10
                  Jahren aufbewahren. Soweit wir solche Daten von Ihnen nicht mehr zur Durchführung der Dienstleistungen
                  benötigen, werden die Daten für die weitere Verarbeitung eingeschränkt und nur noch für Zwecke der
                  Rechnungslegung und für Steuerzwecke verwendet.
                </p>
              </InfoCard>
            </div>
          </section>

          <section id="datenverarbeitungen-einzeln" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">8. Datenverarbeitungen im Einzelnen</h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Welche Dienste wir nutzen</h3>
            {services.map((service) => (
              <ServiceItem key={service.name} {...service} />
            ))}
          </section>

          <section id="bleibt-gleich" className="pt-20 border-t border-gray-200 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Bleibt unsere Datenschutzerklärung immer gleich?
            </h2>
            <p className="text-gray-500 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
              Wir können diese Datenschutzerklärung jederzeit ändern. Die Änderungen werden auf{" "}
              <a
                href="https://www.ms-architektur.ch/"
                target="_blank"
                rel="noreferrer"
                className="text-black underline underline-offset-4"
              >
                www.ms-architektur.ch
              </a>{" "}
              veröffentlicht. Sie werden nicht gesondert informiert.
            </p>
            <div className="text-[10px] text-gray-300 uppercase tracking-widest font-bold">
              © MS-Architektur AG – Datenschutz Standard 2026
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
