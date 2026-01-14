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
  const baseStyles = "w-[580px] h-[632.6px] rounded-[20px] flex flex-col justify-between items-start pb-[59.54px] gap-[7.4px] overflow-hidden isolation-isolate";
  const colorStyles = isBlue
    ? "bg-[#2f476e]"
    : "bg-[#F4F0E4]";
  
  // Text styles
  const titleColor = isBlue ? "text-white" : "text-[#26262B]";
  const subtitleColor = isBlue ? "text-white/75" : "text-[#26262B]";

  return (
    <article className={`${baseStyles} ${colorStyles}`}>
      
      {/* Image Container (Order 0) */}
      <div className="relative w-[580px] h-[400.52px] flex-none order-0 z-10">
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

      {/* Info Container (Order 1) */}
      <div className="flex flex-col items-start px-[60px] gap-[19px] w-[580px] h-[172.54px] flex-none order-1 z-0">
        
        {/* Icon */}
        {iconSrc && (
          <img 
            src={iconSrc} 
            alt="icon" 
            className="w-[80px] h-[80px] flex-none order-0"
          />
        )}

        {/* Text Wrapper */}
        <div className="flex flex-col items-start pr-[77px] w-[460px] h-[73.54px] flex-none order-1">
          <h3
            className={`font-['Avenir_Next'] font-semibold text-[26px] leading-[40px] flex items-center ${titleColor} -mt-[0.46px]`}
          >
            {title}
          </h3>
          <p
            className={`font-['Avenir_Next'] font-normal text-[18px] leading-[32px] flex items-center ${subtitleColor}`}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </article>
  );
}
