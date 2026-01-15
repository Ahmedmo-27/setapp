const ITEMS = [
  // LEFT cluster
  {
    key: "pics",
    src: "/pics.svg",
    alt: "Work with pics",
    className: "left-[0%] md:left-[10%] top-[40px] md:top-[46px] w-[70px] md:w-[173px] rotate-[-22deg]",
  },
  {
    key: "macpaw",
    src: "/macpaw.svg",
    alt: "MacPaw",
    className: "left-[3%] md:left-[10%] top-[155px] md:top-[177px] w-[25px] md:w-[58px] rotate-0",
  },
  {
    key: "pdf",
    src: "/pdf.svg",
    alt: "PDF tools",
    className: "left-[10%] md:left-[16%] top-[145px] md:top-[170px] w-[60px] md:w-[142px] rotate-0",
  },
  {
    key: "teamwork",
    src: "/teamwork.svg",
    alt: "Boost teamwork",
    className: "left-[-4%] md:left-[10%] top-[290px] md:top-[338px] w-[95px] md:w-[227px] rotate-[-5deg]",
  },
  {
    key: "secure",
    src: "/secure.svg",
    alt: "Stay secure",
    className: "left-[0%] md:left-[10%] top-[360px] md:top-[418px] w-[75px] md:w-[175px] rotate-[-19deg]",
  },

  // RIGHT cluster
  {
    key: "wifi",
    src: "/wifi.svg",
    alt: "Fix WiFi",
    className: "right-[0%] md:left-[81%] top-[55px] md:top-[64px] w-[85px] md:w-[201px] rotate-[18deg]",
  },
  {
    key: "plan",
    src: "/plan.svg",
    alt: "Plan your day",
    className: "right-[4%] md:left-[76%] top-[110px] md:top-[124px] w-[70px] md:w-[169px] rotate-[-20deg]",
  },
  {
    key: "converter",
    src: "/converter.svg",
    alt: "Convert",
    className: "right-[0%] md:left-[84%] top-[205px] md:top-[235px] w-[65px] md:w-[155px] rotate-0",
  },
  {
    key: "manage",
    src: "/manage.svg",
    alt: "Manage your Mac",
    className: "right-[-4%] md:left-[77%] top-[290px] md:top-[336px] w-[95px] md:w-[230px] rotate-[9deg]",
  },
  {
    key: "code",
    src: "/code.svg",
    alt: "Code easier",
    className: "right-[3%] md:left-[80%] top-[380px] md:top-[440px] w-[65px] md:w-[152px] rotate-[-7deg]",
  },
];

export default function FloatingBadges() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {ITEMS.map((item) => (
        <img
          key={item.key}
          src={item.src}
          alt={item.alt}
          className={[
            "absolute select-none object-contain",
            "opacity-80 md:opacity-100", // High opacity for clear mobile view
            "drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]",
            item.className,
          ].join(" ")}
          draggable={false}
        />
      ))}
    </div>
  );
}
