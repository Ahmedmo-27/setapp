export default function FeatureCardLarge({ title, subtitle, iconSrc, imageSrc }) {
  return (
    <article className="w-full lg:w-[1180px] lg:h-[605px] flex flex-col justify-between rounded-[20px] bg-[#e2a0b6] p-8 md:px-[60px] md:pt-[60px] md:pb-0 shadow-[0_30px_80px_rgba(0,0,0,0.45)] overflow-hidden">
      {/* Top row: icon + text */}
      <div className="flex flex-col sm:flex-row items-start gap-5">
        <div className="h-14 w-14 overflow-hidden rounded-2xl bg-white/80 shadow-[0_8px_20px_rgba(0,0,0,0.15)] shrink-0">
          <img src={iconSrc} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>

        <div>
          <h3 className="whitespace-nowrap font-avenir font-semibold text-[22px] md:text-[26px] leading-tight md:leading-[40.04px] text-black/80 w-full md:w-[252px] md:h-[41px] align-middle">
            {title}
          </h3>
          <p className="mt-2 whitespace-nowrap text-black/60 font-avenir font-normal text-[18px] leading-[32.04px] w-full md:w-[456px] md:h-[33px] align-middle">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Big screenshot */}
      <div className="mt-auto mx-auto w-full lg:w-[1106px] lg:h-[465px]">
        <div className="relative h-full w-full">
          <img
            src={imageSrc}
            alt="feature screenshot"
            className="w-full h-full object-contain object-bottom"
            loading="lazy"
          />
        </div>
      </div>
    </article>
  );
}
