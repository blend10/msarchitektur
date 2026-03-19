import Architektur from "@/components/home/Architektur";
import Gestalten from "@/components/home/Gestalten";
import Projektierung from "@/components/home/Projektierung";
import OurService from "@/components/service/OurService";
import React from "react";
import Leistungen from "@/components/service/Leistungen";
import ContactSection from "@/components/service/ContactSection";

const page = () => {
  return (
    <div>
      {/* <OurService /> */}
      {/* <Architektur /> */}
      {/* <Projektierung /> */}
      <Leistungen />
      <ContactSection />
      <Gestalten src="/images/footerBg.png" />
    </div>
  );
};

export default page;
