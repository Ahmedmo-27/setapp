import React from 'react';

export default function VideoTestimonialCarousel() {
  const testimonial = {
    name: "Jason Staczek",
    description: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
    image: "/Jason Staczek.png",
    backgroundColor: "#765070"
  };

  return (
    <section className="relative w-full h-[822px] flex items-start justify-center bg-split-dark-light mt-[350px]">
      <div className="relative w-full max-w-[1395px] h-[822px]">
        {/* The Card */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[25.2px] w-[1355px] h-[720px] rounded-testimonial bg-testimonial-purple isolate">
          {/* Main Image on the Right */}
          <div className="absolute w-[670px] h-[690px] left-[619px] top-[29.74px] z-[1] pointer-events-none rotate-0">
            <img 
              src={testimonial.image}
              alt="Jason Staczek"
              className="w-full h-full object-cover"
            />
          </div>

          {/* div.video-preview__content (Anchor starting at pl-[896px] per spec) */}
          <div className="absolute left-[80px] top-0 w-[654px] h-[720px]">
            {/* div.video-preview__preview */}
            <div className="absolute left-0 top-[209px] w-[556px] h-[163.12px] flex flex-col items-start p-0 gap-5 z-10">
              <div className="w-[556px]">
                <p className="font-medium text-[26px] leading-[40px] text-white">
                    {testimonial.description}
                </p>
              </div>
              <div className="w-[102px]">
                <p className="font-normal text-[16px] leading-[22px] text-white/70">
                  {testimonial.name}
                </p>
              </div>
            </div>
          </div>

          {/* Play Button */}
          <button 
            className="absolute left-[80px] bottom-[142px] w-[74px] h-[74px] bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
            aria-label="Watch video"
          >
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 9L0 17.6603L0 0.339745L14 9Z" className="fill-play-icon"/>
            </svg>
          </button>

        </div>

        {/* Navigation Arrows */}
        <div className="absolute left-[1275px] top-[90px] flex items-center gap-[46px] z-20">
          <button className="opacity-40 hover:opacity-100 transition-opacity" aria-label="Previous">
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
              <path d="M10 2L2 10L10 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="opacity-40 hover:opacity-100 transition-opacity" aria-label="Next">
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
              <path d="M2 2L10 10L2 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[784.54px] bottom-[25.46px] flex items-center gap-[25px]">
          <div className="w-[12px] h-[12px] rounded-full bg-dot-active" />
          <div className="w-[12px] h-[12px] rounded-full bg-dot-inactive" />
          <div className="w-[12px] h-[12px] rounded-full bg-dot-inactive" />
          <div className="w-[12px] h-[12px] rounded-full bg-dot-inactive" />
        </div>
      </div>
    </section>
  );
}
