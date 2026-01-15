import { useEffect, useRef, useState } from "react";

export default function LanguageMenu({ variant = "navbar" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "pl", label: "Polski", flag: "🇵🇱" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
  ];

  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const isFooter = variant === "footer";

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className="block text-[18px] leading-none shrink-0">🇺🇸</span>
        <span className={`${isFooter ? "text-[16px]" : "lg:hidden nav-typography"} text-white`}>
          English
        </span>
        {isFooter && (
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="ml-1">
            <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {open && (
        <div className={`absolute ${isFooter ? "bottom-full mb-2 left-0" : "top-full mt-3 right-0"} w-44 rounded-[10px] border border-white/10 bg-[#1f2125] py-2 z-50 shadow-[0_12px_30px_rgba(0,0,0,0.6)]`}>
          {languages.map((l) => (
            <button
              key={l.code}
              className="flex w-full items-center gap-3 px-3 py-2 text-left text-sm font-[500] text-white/90 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              <span className="text-lg leading-none">{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
