import React, { useEffect, useRef, useState } from "react";
import SetappIcon from "./SetappIcon";

const NAV_CLASSES = "font-avenir font-[500] text-nav text-white";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="w-full relative z-50">
      {/* full width bar (overall navbar height) */}
      <div className="relative h-[74px] flex items-center justify-center">
        {/* EXACT content block: max-1440w, centered */}
        <div className="h-[40px] w-full max-w-[1440px] px-4 md:px-[40px] flex items-center justify-between">
          {/* Left: Logo block (32px tall) */}
          <a
            href="#"
            aria-label="Go to homepage"
            className="flex h-[32px] w-[102px] items-center shrink-0"
          >
            <SetappIcon variant="navbar" />
          </a>

          {/* Desktop Middle: Menu slider area */}
          <div className="hidden lg:flex flex-1">
            <ul className="ml-auto flex items-center justify-end">
              <NavItem className="pr-[30px]" href="#">
                How it works
              </NavItem>
              <NavItem className="pr-[30px]" href="#">
                All apps
              </NavItem>
              <NavItem className="pr-[30px]" href="#">
                Pricing
              </NavItem>
              <NavItem className="pr-[30px]" href="#">
                For Teams
              </NavItem>
              <NavItem className="pr-[30px]" href="#">
                Blog
              </NavItem>
              <NavItem href="#">Podcast</NavItem>
            </ul>
          </div>

          {/* Desktop Right: language + divider + sign in + button */}
          <div className="hidden lg:flex items-center ml-[30px]">
            <span
              className="h-[20px] w-px bg-white/20 mx-[30px]"
              aria-hidden="true"
            />
            <div className="mr-[20px] flex h-[21.5px] items-center px-[4px]">
              <LanguageMenu />
            </div>

            <a href="#" className={`${NAV_CLASSES} hover:opacity-80 transition`}>
              Sign In
            </a>

            <button
              type="button"
              className={`ml-[24px] box-border flex h-[32px] items-center justify-center rounded-[6px] border border-white px-[23px] pb-[6.5px] pt-[5.5px] ${NAV_CLASSES} hover:bg-white/10 transition whitespace-nowrap`}
            >
              Try free
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {isMenuOpen && (
          <div className="absolute top-[74px] left-0 w-full bg-[#1f2125] border-b border-white/10 lg:hidden shadow-xl">
            <ul className="flex flex-col p-4 gap-4">
              <li><a href="#" className={NAV_CLASSES}>How it works</a></li>
              <li><a href="#" className={NAV_CLASSES}>All apps</a></li>
              <li><a href="#" className={NAV_CLASSES}>Pricing</a></li>
              <li><a href="#" className={NAV_CLASSES}>For Teams</a></li>
              <li><a href="#" className={NAV_CLASSES}>Blog</a></li>
              <li><a href="#" className={NAV_CLASSES}>Podcast</a></li>
              <li className="pt-4 border-t border-white/10 flex items-center justify-between">
                <LanguageMenu />
                <a href="#" className={NAV_CLASSES}>Sign In</a>
              </li>
              <li className="pt-2">
                <button className={`w-full box-border flex h-[44px] items-center justify-center rounded-[6px] border border-white ${NAV_CLASSES}`}>
                  Try free
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavItem({ href, children, className = "" }) {
  return (
    <li className={`flex h-[35.76px] items-center ${className}`}>
      <a
        href={href}
        className={`${NAV_CLASSES} hover:opacity-80 transition whitespace-nowrap`}
      >
        {children}
      </a>
    </li>
  );
}

function LanguageMenu() {
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

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className="block text-[18px] leading-none">🇺🇸</span>
        <span className="lg:hidden text-white font-avenir text-nav">English</span>
      </button>

      {open && (
        <div className="absolute right-0 lg:right-0 mt-3 w-44 rounded-[10px] border border-white/10 bg-[#1f2125] py-2 z-50 shadow-[0_12px_30px_rgba(0,0,0,0.6)]">
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
