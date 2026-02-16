import Akzente from "@/components/home/Akzente ";
import Architektur from "@/components/home/Architektur";
import Dienstleistungen from "@/components/home/Dienstleistungen";
import Gestalten from "@/components/home/Gestalten";
import Projektierung from "@/components/home/Projektierung";
import StartPage from "@/components/home/StartPage";
import TextTransition from "@/components/home/TextTransition";

export default function Home() {
  return (
    <div>
      <StartPage />
      <TextTransition />
      <Akzente />
      <Architektur />
      <Dienstleistungen />
      <Projektierung />
      <Gestalten src="/images/footerBg.png" />
    </div>
  );
}
