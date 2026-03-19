import "./globals.css";
import Header from "@/components/general/Header";
import Footer from "@/components/general/Footer";

export const metadata = {
  title: "MS Architektur AG – Architektur & Projektmanagement",
  description:
    "MS Architektur AG verbindet Architektur und Projektmanagement zu nachhaltigen Lösungen für Bauherren, Investoren und Nutzer in der Schweiz.",
  keywords: [
    "Architektur",
    "Projektmanagement",
    "Bauherren",
    "Immobilien",
    "Schweiz",
    "Baden",
    "MS Architektur",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="antialiased bg-white">
        <Header />
        {children}
        <Footer className="" />
      </body>
    </html>
  );
}
