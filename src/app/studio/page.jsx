import React from "react";
import Haltung from "@/components/service/Haltung";
import Persönlicher from "@/components/service/Persönlicher";
import Historie from "@/components/service/Historie";
import Gestalten from "@/components/home/Gestalten";

const page = () => {
  return (
    <div>
      <Haltung />
      <Persönlicher />
      <Historie />
      <Gestalten src="/images/footerBg2.png" />
    </div>
  );
};

export default page;
