import React from 'react';

const FinalCTA = () => {
  return (
    <section 
      id="final-cta-section"
      className="flex justify-center items-center px-4 md:px-10 py-20 w-full bg-split-cta relative"
    >
      <div 
        className="flex flex-col justify-center items-center p-8 md:p-20 w-full max-w-[1330px] bg-[#F5F5F5] rounded-testimonial relative overflow-hidden"
      >
        <div className="w-full max-w-[1260px] flex flex-col items-center md:items-start relative z-10">
          {/* Logo */}
          <div className="mb-12 flex justify-center md:justify-start">
             <svg width="76" height="120" viewBox="0 0 76 120" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M38 23L56 41L38 59L20 41L38 23Z" className="fill-set-tan" />
               <path d="M55 40L73 58L55 76L37 58L55 40Z" className="fill-set-tan" />
               <path d="M21 40L39 58L21 76L3 58L21 40Z" className="fill-set-tan" />
               <path d="M38 57L56 75L38 93L20 75L38 57Z" className="fill-set-tan" />
             </svg>
          </div>

          {/* Pricing Text */}
          <h2 
            className="mb-12 font-avenir font-semibold text-[32px] md:text-[46px] leading-[1.2] md:leading-[60px] tracking-[1.3px] text-set-bg text-center md:text-left max-w-[800px]"
          >
            Superpowers starting $9.99/month.<br className="hidden md:block" /> Free for 7 days.
          </h2>

          {/* Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
          >
            <button 
              className="flex items-center justify-center px-[31px] py-[13px] w-full sm:w-auto h-[50px] bg-set-bg rounded-nav border-none cursor-pointer text-white font-avenir font-semibold text-[16px] leading-6 tracking-[1px]"
            >
              Get started now
            </button>
            <button 
              className="box-border flex items-center justify-center px-[31px] py-[13px] w-full sm:w-auto h-[50px] border border-set-bg bg-transparent rounded-nav cursor-pointer text-set-bg font-avenir font-semibold text-[16px] leading-6 tracking-[1px]"
            >
              More about Setapp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
