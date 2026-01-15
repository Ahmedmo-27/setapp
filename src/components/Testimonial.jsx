import React from 'react';

export default function VideoTestimonialCarousel() {
  const testimonial = {
    name: "Jason Staczek",
    description: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
    image: "/Jason Staczek.png",
    backgroundColor: "#765070"
  };

  return (
    <section className="relative w-full flex flex-col items-center bg-split-dark-light py-20 px-4">
      <div className="relative w-full max-w-[1355px]">
        {/* The Card */}
        <div className="relative rounded-testimonial bg-testimonial-purple overflow-hidden flex flex-col lg:flex-row items-center lg:items-stretch min-h-[620px] lg:h-[720px] isolate">
          
          {/* Content Left */}
          <div className="flex-1 flex flex-col justify-start p-8 lg:pt-[209px] lg:pl-[120px] lg:pr-0 lg:pb-[80px] z-10">
             <div className="w-full lg:w-[546px] lg:h-[121px]">
                <p className="font-medium text-[22px] md:text-[26px] leading-relaxed md:leading-[40px] text-white">
                    {testimonial.description}
                </p>
                <p className="mt-[20px] font-normal text-[16px] leading-[22px] text-white/70">
                  {testimonial.name}
                </p>
             </div>

             {/* Play Button */}
             <button 
               className="mt-auto w-[74px] h-[74px] bg-white rounded-[37px] shadow-lg hover:scale-110 transition-transform pt-[29.02px] pr-[29.34px] pb-[29.02px] pl-[31.7px] flex items-center justify-center"
               aria-label="Watch video"
             >
               <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M14 9L0 17.6603L0 0.339745L14 9Z" className="fill-play-icon"/>
               </svg>
             </button>
          </div>

          {/* Main Image on the Right */}
          <div className="w-full lg:w-1/2 flex items-end justify-center relative lg:overflow-visible">
            <img 
              src={testimonial.image}
              alt="Jason Staczek"
              className="w-auto h-[690px] max-w-none object-bottom relative lg:-left-20"
            />
          </div>

          {/* Navigation Arrows (Desktop) */}
          <div className="hidden lg:flex absolute right-10 top-10 items-center gap-8 z-20">
            <button className="opacity-49 hover:opacity-100 transition-opacity" aria-label="Previous">
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
                <path d="M10 2L2 10L10 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="opacity-49 hover:opacity-100 transition-opacity" aria-label="Next">
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
                <path d="M2 2L10 10L2 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center items-center gap-[25px]">
          <div className="w-[12px] h-[12px] rounded-full bg-dot-active" />
          <div className="w-[12px] h-[12px] rounded-full bg-dot-inactive" />
          <div className="w-[12px] h-[12px] rounded-full bg-dot-inactive" />
          <div className="w-[12px] h-[12px] rounded-full bg-dot-inactive" />
        </div>
      </div>
    </section>
  );
}
