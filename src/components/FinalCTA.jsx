import React from 'react';

const FinalCTA = () => {
  return (
    <section 
      id="final-cta-section"
      className="flex flex-row justify-center items-center px-10 pb-5 w-full min-h-[607.59px] bg-split-cta relative"
    >
      <div 
        className="jumbotron__content flex flex-row justify-center items-start p-0 w-[1330px] h-[587.59px] bg-[#F5F5F5] rounded-testimonial relative overflow-hidden flex-none order-0 grow-0"
      >
        <div 
          className="jumbotron__container w-[1260px] max-w-[1260px] h-[587.59px] relative flex-none order-0 grow-0"
        >
          {/* Logo */}
          <div 
            className="absolute w-[76px] h-[120px] left-10 top-[124px] flex flex-row justify-center items-start p-0"
          >
            <div className="w-[76px] h-[120px] flex flex-row items-start p-0 flex-none order-0 grow-0">
              <svg width="76" height="120" viewBox="0 0 76 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38 23L56 41L38 59L20 41L38 23Z" className="fill-set-tan" />
                <path d="M55 40L73 58L55 76L37 58L55 40Z" className="fill-set-tan" />
                <path d="M21 40L39 58L21 76L3 58L21 40Z" className="fill-set-tan" />
                <path d="M38 57L56 75L38 93L20 75L38 57Z" className="fill-set-tan" />
              </svg>
            </div>
          </div>

          {/* Pricing Text */}
          <div 
            className="signup__price absolute left-10 right-10 top-[265px] w-[802px] h-[120px] flex items-center font-avenir font-semibold text-[46px] leading-[60px] tracking-[1.3px] text-set-bg"
          >
            Superpowers starting $9.99/month.<br />Free for 7 days.
          </div>

          {/* Buttons */}
          <div 
            className="signup__buttons absolute left-10 right-10 top-[445.59px] flex flex-row items-start gap-[24.5px]"
          >
            <button 
              className="flex flex-row items-center justify-center px-[31px] py-[13px] w-[193.41px] h-[50px] bg-set-bg rounded-nav border-none cursor-pointer text-white font-avenir font-semibold text-[16px] leading-6 tracking-[1px] flex-none order-0 grow-0"
            >
              Get started now
            </button>
            <button 
              className="box-border flex flex-row items-center justify-center px-[31px] py-[13px] w-[220.57px] h-[50px] border border-set-bg bg-transparent rounded-nav cursor-pointer text-set-bg font-avenir font-semibold text-[16px] leading-6 tracking-[1px] flex-none order-1 grow-0"
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
