import React from "react";

const Funktion = () => {
  return (
    <div className="bg-black w-full py-20 sm:py-28 lg:py-40">
      <div className="container mx-auto px-6 sm:px-8 lg:px-0 flex flex-col items-start justify-between">
        <h1
          className="text-white font-light tracking-tight leading-tight sm:leading-tight lg:leading-18
                       text-3xl sm:text-4xl lg:text-[70px]"
        >
          Projekte, in denen Gestaltung, <br className="hidden sm:block" />
          Funktion und Wirtschaftlichkeit <br className="hidden sm:block" />
          zusammenfinden.
        </h1>

        <h2
          className="text-white font-light tracking-tight mt-4 sm:mt-5
                       text-sm sm:text-base lg:text-[16px]
                       leading-6"
        >
          Jedes Projekt wird aus seinem räumlichen, funktionalen{" "}
          <br className="hidden sm:block" />
          und wirtschaftlichen Kontext heraus entwickelt und mit{" "}
          <br className="hidden sm:block" />
          Klarheit umgesetzt.
        </h2>
      </div>
    </div>
  );
};

export default Funktion;
