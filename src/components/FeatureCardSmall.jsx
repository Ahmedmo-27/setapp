import React from "react";

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
  // Light: pb-[59.54px], Height 632.6px, Text Bottom (Image Order 0)
  // Blue: pt-[60px], Height 633px, Text Top (Image Order 1)
  const baseStyles = `w-[580px] rounded-[20px] flex flex-col justify-between items-start overflow-hidden isolation-isolate shadow-[0_30px_80px_rgba(0,0,0,0.45)] ${
    isBlue ? "h-[633px] pt-[60px]" : "h-[632.6px] pb-[59.54px]"
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
      <div className={`relative w-[580px] h-[400.52px] flex-none z-10 ${imageOrder}`}>
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover"
        />
        
        {/* Play button overlay */}
        {showPlay && (
          <button
            type="button"
            aria-label="Play"
            className="absolute bottom-14 left-14 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
          >
            <span className="ml-0.5 text-lg text-black">▶</span>
          </button>
        )}
      </div>

      {/* Info Container */}
      <div className={`flex flex-col items-start px-[60px] gap-[19px] w-[580px] h-[172.54px] flex-none z-0 ${infoOrder}`}>
        
        {/* Icon */}
        {iconSrc && (
          <img 
            src={iconSrc} 
            alt="icon" 
            className="w-[80px] h-[80px] flex-none order-0"
          />
        )}

        {/* Text Wrapper */}
        <div className="flex flex-col items-start pr-[28px] w-[460px] h-[73.54px] flex-none order-1">
          <h3
            className={`font-avenir font-semibold text-[26px] leading-[40.04px] tracking-[0] flex items-center ${titleColor} -mt-[0.46px]`}
          >
            {title}
          </h3>
          <p
            className={`font-avenir font-normal text-[18px] leading-[32.04px] tracking-[0] flex items-center ${subtitleColor}`}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </article>
  );
}
