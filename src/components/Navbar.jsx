import React, { useEffect, useRef, useState } from "react";
import SetappIcon from "./SetappIcon";

export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className="w-full">
      {/* full width bar (overall navbar height) */}
      <div className="relative h-[74px]">
        {/* EXACT content block: 1440w x 40h, centered, top:17 */}
        <div className="absolute left-1/2 top-[17px] h-[40px] w-[1440px] -translate-x-1/2">
          {/* inner padding left/right = 40 */}
          <div className="flex h-full items-center px-[40px]">
            {/* Left: Logo block (32px tall) */}
            <a
              href="#"
              aria-label="Go to homepage"
              className="flex h-[32px] w-[102px] items-center"
            >
              <SetappIcon variant="navbar" />
            </a>

            {/* Middle: Menu slider area (kept centered visually like figma) */}
            <div className="flex-1">
              <ul className="ml-auto flex h-[39.76px] w-[743.63px] items-center justify-end">
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

              {/* Divider: 1px x 20px with 30px gap around (matches spec feel) */}
              <span
                className="mx-[30px] h-[20px] w-px bg-white"
                aria-hidden="true"
              />

            {/* Right: language + divider + sign in + button */}
            <div className="flex items-center">
              {/* Language item: height 21.5 with 4px padding */}
              <div className="flex h-[21.5px] items-center px-[4px] mr-[20px]">
                <LanguageMenu />
              </div>

              {/* Sign in */}
              <a href="#" className="nav-link">
                Sign In
              </a>

              {/* Try free button block */}
              <button type="button" className="tryfree-btn ml-[24px]">
                Try free
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ href, children, className = "" }) {
  return (
    <li className={`flex h-[35.76px] items-center ${className}`}>
      <a href={href} className="nav-link hover:opacity-80 transition">
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
        className="flex items-center"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {/* flag size approximates the svg height (13.5px) */}
        <span className="block text-[18px] leading-none">🇺🇸</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-44 rounded-[10px] bg-[#1f2125] border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.6)] py-2 z-50">
          {languages.map((l) => (
            <button
              key={l.code}
              className="w-full text-left px-3 py-2 hover:bg-white/5 flex items-center gap-3 text-sm text-white/90"
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
