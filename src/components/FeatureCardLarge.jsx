import React from "react";

export default function FeatureCardLarge({ title, subtitle, iconSrc, imageSrc }) {
  return (
    <article className="rounded-[20px] bg-[#e2a0b6] p-[60px] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
      {/* Top row: icon + text */}
      <div className="flex items-start gap-5">
        <div className="h-14 w-14 overflow-hidden rounded-2xl bg-white/80 shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
          <img src={iconSrc} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>

        <div>
          <h3 className="text-[26px] font-extrabold text-black/80">
            {title}
          </h3>
          <p className="mt-2 text-[14px] text-black/60">{subtitle}</p>
        </div>
      </div>

      {/* Big screenshot */}
      <div className="mt-8 overflow-hidden rounded-[28px] bg-black/10">
        <div className="relative">
          <img
            src={imageSrc}
            alt="feature screenshot"
            className="h-[360px] w-full object-cover md:h-[430px]"
            loading="lazy"
          />

          {/* soft vignette like screenshot */}
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />
        </div>
      </div>
    </article>
  );
}
