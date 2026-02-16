import React from "react";

const Historie = () => {
  const events = [
    {
      year: "2024",
      month: "Dezember",
      event: "Mutation zur Aktiengesellschaft MS Architektur AG",
    },
    {
      year: "2021",
      month: "März",
      event: "Kooperation mit regionalem Projektentwickler",
    },
    {
      year: "2020",
      month: "April",
      event: "Firmenmutation in Architektur-, General- und Totalunternehmen",
    },
    {
      year: "2019",
      month: "April",
      event: "Gründung der MS Architektur",
    },
  ];

  return (
    <div className="container mx-auto px-6 sm:px-8 lg:px-0 py-12 lg:py-24">
      <h2 className="text-[#0D0D0D] text-xl sm:text-2xl lg:text-[28px] font-light mb-8 lg:mb-12">
        Historie
      </h2>

      {/* Desktop table - hidden on mobile */}
      <div className="hidden md:block">
        {/* Table header */}
        <div className="grid grid-cols-[240px_440px_1fr] text-[#8C8C8C] text-[14px] uppercase tracking-wide pb-4 border-b border-[#8C8C8C]">
          <div>Jahr</div>
          <div>Monat</div>
          <div>Ereignis</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-[#8C8C8C]">
          {events.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-[240px_440px_1fr] py-5 text-[#0D0D0D] text-[16px] font-light ${
                index === events.length - 1 ? "border-b border-[#8C8C8C]" : ""
              }`}
            >
              <div>{item.year}</div>
              <div>{item.month}</div>
              <div>{item.event}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile card layout - hidden on desktop */}
      <div className="md:hidden space-y-4">
        {events.map((item, index) => (
          <div
            key={index}
            className="border border-[#8C8C8C] rounded-lg p-4 space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-[#8C8C8C] text-xs uppercase tracking-wide">
                Jahr
              </span>
              <span className="text-[#0D0D0D] font-light">{item.year}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8C8C8C] text-xs uppercase tracking-wide">
                Monat
              </span>
              <span className="text-[#0D0D0D] font-light">{item.month}</span>
            </div>
            <div className="border-t border-[#E5E5E5] pt-3">
              <span className="text-[#8C8C8C] text-xs uppercase tracking-wide block mb-2">
                Ereignis
              </span>
              <span className="text-[#0D0D0D] font-light">{item.event}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Historie;
