import React from "react";

const ITEMS = [
  // LEFT cluster
  {
    key: "pics",
    src: "/pics.svg",
    alt: "Work with pics",
    // Moved outward from 17.9% to 12%
    className: "left-[12%] top-[46px] w-[173px] rotate-[-22deg]",
  },
  {
    key: "macpaw",
    src: "/macpaw.svg",
    alt: "MacPaw",
    // Moved outward from 17.8% to 12%
    className: "left-[12%] top-[177px] w-[58px] rotate-0",
  },
  {
    key: "pdf",
    src: "/pdf.svg",
    alt: "PDF tools",
    // Moved outward from 23.4% to 18%
    className: "left-[18%] top-[170px] w-[142px] rotate-0",
  },
  {
    key: "teamwork",
    src: "/teamwork.svg",
    alt: "Boost teamwork",
    // Moved outward from 17.6% to 12%
    className: "left-[12%] top-[338px] w-[227px] rotate-[-5deg]",
  },
  {
    key: "secure",
    src: "/secure.svg",
    alt: "Stay secure",
    // Moved outward from 17.5% to 12%
    className: "left-[12%] top-[418px] w-[175px] rotate-[-19deg]",
  },

  // RIGHT cluster
  {
    key: "wifi",
    src: "/wifi.svg",
    alt: "Fix WiFi",
    // Moved outward from 73.9% to 79%
    className: "left-[79%] top-[64px] w-[201px] rotate-[18deg]",
  },
  {
    key: "plan",
    src: "/plan.svg",
    alt: "Plan your day",
    // Moved outward from 69% to 74%
    className: "left-[74%] top-[124px] w-[169px] rotate-[-20deg]",
  },
  {
    key: "converter",
    src: "/converter.svg",
    alt: "Convert",
    // Moved outward from 77% to 82%
    className: "left-[82%] top-[235px] w-[155px] rotate-0",
  },
  {
    key: "manage",
    src: "/manage.svg",
    alt: "Manage your Mac",
    // Moved outward from 70% to 75%
    className: "left-[75%] top-[336px] w-[230px] rotate-[9deg]",
  },
  {
    key: "code",
    src: "/code.svg",
    alt: "Code easier",
    // Moved outward from 73% to 78%
    className: "left-[78%] top-[440px] w-[152px] rotate-[-7deg]",
  },
];

export default function FloatingBadges() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {ITEMS.map((item) => (
        <img
          key={item.key}
          src={item.src}
          alt={item.alt}
          className={[
            "absolute select-none object-contain",
            "max-md:scale-[0.85] max-sm:scale-[0.72]",
            "drop-shadow-[0_18px_35px_rgba(0,0,0,0.55)]",
            item.className,
          ].join(" ")}
          draggable={false}
        />
      ))}
    </div>
  );
}
