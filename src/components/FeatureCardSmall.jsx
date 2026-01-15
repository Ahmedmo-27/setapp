export default function FeatureCardSmall({
  variant = "light",
  title,
  subtitle,
  imageSrc,
  iconSrc,
  showPlay = false,
}) {
  const isBlue = variant === "blue";
  
  // Container styles
  const baseStyles = `w-full max-w-1180 rounded-[20px] flex flex-col justify-between items-start overflow-hidden isolate shadow-premium ${
    isBlue ? "min-h-[500px] md:h-[633px] pt-8 md:pt-[60px]" : "min-h-[500px] md:h-[632.6px] pb-8 md:pb-[59.54px]"
  }`;
  
  const colorStyles = isBlue
    ? "bg-[#2f476e]"
    : "bg-[#F4F0E4]";
  
  // Text styles
  const titleColor = isBlue ? "text-white" : "text-[#26262B]";
  const subtitleColor = isBlue ? "text-white/75" : "text-[#26262B]";

  // Order utilities
  const imageOrder = isBlue ? "order-1" : "order-0";
  const infoOrder = isBlue ? "order-0" : "order-1";

  return (
    <article className={`${baseStyles} ${colorStyles}`}>
      
      {/* Image Container */}
      <div className={`relative w-full ${isBlue ? 'md:h-[360px]' : 'h-[250px] sm:h-[300px] md:h-[400.52px]'} flex-none z-10 px-4 md:px-0 ${imageOrder}`}>
        <img
          src={imageSrc}
          alt={title}
          className={`h-full w-full object-contain ${isBlue ? 'object-bottom' : 'object-top'} md:object-cover`}
          loading="lazy"
        />
        
        {/* Play button overlay */}
        {showPlay && (
          <button
            type="button"
            aria-label="Play"
            className="absolute bottom-8 left-8 md:bottom-14 md:left-14 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-play"
          >
            <span className="ml-0.5 text-lg text-black">▶</span>
          </button>
        )}
      </div>

      {/* Info Container */}
      <div className={`flex flex-col items-start px-6 md:px-[60px] py-8 md:py-0 md:gap-[19px] w-full md:w-[580px] md:h-[172.54px] flex-none z-0 ${infoOrder}`}>
        
        {/* Icon */}
        {iconSrc && (
          <img 
            src={iconSrc} 
            alt="icon" 
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex-none order-0 mb-4 md:mb-0"
            loading="lazy"
          />
        )}

        {/* Text Wrapper */}
        <div className="flex flex-col items-start w-full md:w-[460px] flex-none order-1">
          <h3
            className={`font-semibold text-[22px] md:text-[26px] leading-tight md:leading-[40.04px] tracking-[0] flex items-center ${titleColor} md:-mt-[0.46px]`}
          >
            {title}
          </h3>
          <p
            className={`mt-2 font-normal text-[16px] md:text-[18px] leading-snug md:leading-[32.04px] tracking-[0] flex items-center ${subtitleColor}`}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </article>
  );
}
