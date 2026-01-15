import React from "react";
import FloatingBadges from "./FloatingBadges";
import SetappIcon from "./SetappIcon";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Floating badges (behind content) */}
      <div className="pointer-events-none absolute inset-0">
        <FloatingBadges />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center pt-[80px] px-4">
        {/* Setapp Logo Icon */}
        <div className="mb-[30px] md:mb-[50px]">
          <span
            aria-hidden="true"
            className="relative block h-[120px] w-[120px] md:h-[160px] md:w-[160px]"
          >
            <span
              aria-hidden="true"
              className="absolute inset-[10px] rounded-[22px] bg-black"
            />
            <span
              aria-hidden="true"
              className="absolute inset-[10px] rounded-[22px] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
            />
            <SetappIcon size="hero" />
          </span>
        </div>

        {/* Headline */}
        <h1
          className="mb-8 md:mb-12 w-full lg:w-[567px] lg:h-[204px] font-avenir text-center text-[40px] md:text-[64px] font-bold leading-[1.1] md:leading-[67.84px] tracking-[1px] text-white"
        >
          Dozens of apps.
          <br />
          One subscription.
          <br className="hidden md:block" />
          <span className="md:inline"> $9.99</span>
        </h1>

        {/* CTA Buttons - Centered in the empty space */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="flex h-[52px] w-full sm:w-[209.93px] items-center justify-center rounded-[6px] border border-gray-200 bg-white text-[16px] font-medium text-[#26262b] shadow-sm pt-[14px] pr-[30.93px] pb-[14px] pl-[32px] hover:bg-gray-50 transition-colors">
            Try free for 7 days
          </button>

          <div className="flex items-center gap-4">
            <button 
              aria-label="Sign up with Apple"
              className="w-[62px] h-[52px] bg-white rounded-[6px] border border-gray-200 flex items-center justify-center px-[15px] py-[10px] hover:bg-gray-100 transition-colors"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* ... SVG content ... */}
              <g clipPath="url(#clip0_1_643)">
              <g clipPath="url(#clip1_1_643)">
            <path d="M16.3516 6.92308C17.6653 6.92308 19.3121 6.00763 20.2928 4.78703C21.1809 3.68086 21.8285 2.13605 21.8285 0.591227C21.8285 0.381437 21.81 0.171647 21.773 0C20.3113 0.0572155 18.5535 1.01081 17.4988 2.28862C16.6661 3.26128 15.9075 4.78703 15.9075 6.35092C15.9075 6.57978 15.9445 6.80865 15.963 6.88493C16.0555 6.90401 16.2035 6.92308 16.3516 6.92308ZM11.7257 30C13.5206 30 14.3162 28.7603 16.5551 28.7603C18.831 28.7603 19.3306 29.9619 21.329 29.9619C23.2903 29.9619 24.604 28.0928 25.8438 26.2619C27.2315 24.164 27.8051 22.1043 27.8421 22.0089C27.7126 21.9708 23.9564 20.3878 23.9564 15.9441C23.9564 12.0915 26.9169 10.356 27.0835 10.2225C25.1221 7.32359 22.1431 7.2473 21.329 7.2473C19.1271 7.2473 17.3322 8.62047 16.2035 8.62047C14.9823 8.62047 13.3725 7.32359 11.4667 7.32359C7.84005 7.32359 4.1579 10.4132 4.1579 16.2492C4.1579 19.8729 5.52714 23.7063 7.21094 26.1856C8.6542 28.2835 9.91242 30 11.7257 30Z" fill="black"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_1_643">
            <rect width="32" height="32" fill="white"/>
            </clipPath>
            <clipPath id="clip1_1_643">
            <rect width="32" height="32" fill="white"/>
            </clipPath> 
            </defs>
            </svg>
          </button>

          <button 
            aria-label="Sign up with Google"
            className="w-[62px] h-[52px] bg-white rounded-[6px] border border-gray-200 flex items-center justify-center px-[15px] py-[10px] hover:bg-gray-100 transition-colors"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_649)">
            <g clipPath="url(#clip1_1_649)">
            <path d="M29.5 16.3C29.5 15.19 29.4081 14.38 29.2092 13.54H16.2755V18.55H23.8673C23.7143 19.795 22.8878 21.67 21.051 22.93L21.0252 23.0977L25.1146 26.2023L25.398 26.23C27.9999 23.875 29.5 20.41 29.5 16.3Z" fill="#4285F4"/>
            <path d="M16.2755 29.5C19.9949 29.5 23.1173 28.2999 25.398 26.23L21.051 22.9299C19.8878 23.7249 18.3265 24.2799 16.2755 24.2799C12.6327 24.2799 9.54087 21.925 8.43872 18.67L8.27717 18.6834L4.02497 21.9084L3.96936 22.0599C6.23464 26.4699 10.8877 29.5 16.2755 29.5Z" fill="#34A853"/>
            <path d="M8.43872 18.67C8.14791 17.83 7.9796 16.9299 7.9796 16C7.9796 15.0699 8.14791 14.17 8.42342 13.33L8.41571 13.1511L4.11022 9.87427L3.96935 9.93993C3.03572 11.77 2.5 13.825 2.5 16C2.5 18.175 3.03572 20.2299 3.96935 22.0599L8.43872 18.67Z" fill="#FBBC05"/>
            <path d="M16.2755 7.71997C18.8622 7.71997 20.6071 8.81496 21.602 9.73002L25.4898 6.01C23.1021 3.83501 19.9949 2.5 16.2755 2.5C10.8877 2.5 6.23464 5.52998 3.96936 9.93994L8.42342 13.33C9.54087 10.075 12.6327 7.71997 16.2755 7.71997Z" fill="#EB4335"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_1_649">
            <rect width="32" height="32" fill="white"/>
            </clipPath>
            <clipPath id="clip1_1_649">
            <rect width="32" height="32" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          </button>
          </div>
        </div>

        {/* Description */}
        <p className="mt-[28px] w-[317px] h-[65px] font-avenir text-center text-[18px] leading-[32.04px] tracking-normal text-white">
          Power up your workflow with Setapp, a smart way to get apps.
        </p>

      </div>
    </section>
  );
}
