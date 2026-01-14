import React from 'react';

const testimonials = [
  {
    quote: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    name: "Arash Pourhabibi",
    handle: "@ArashPourhabibi",
    bgColor: "bg-[#71719A]",
    initials: "AP",
    socialIcon: "twitter",
    iconColor: "#1C95E0"
  },
  {
    quote: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    name: "Mauricio Sanchez",
    handle: "@m741s",
    bgColor: "bg-[#D9AE89]",
    initials: "MS",
    socialIcon: "instagram",
    iconColor: "#E4009C"
  },
  {
    quote: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    name: "Meredith Sweet",
    handle: "@meredith.sweet.silberstein",
    bgColor: "bg-[#765070]",
    initials: "MS",
    socialIcon: "facebook",
    iconColor: "#3B5998"
  }
];

const SmallIcon = ({ type, color }) => {
  const paths = {
    twitter: "M22.46 6.002a9.3 9.3 0 01-2.67.733 4.67 4.67 0 002.045-2.573 9.3 9.3 0 01-2.95 1.127 4.65 4.65 0 00-7.92 4.24A13.18 13.18 0 013.23 4.67a4.66 4.66 0 001.44 6.21 4.64 4.64 0 01-2.1.08 4.66 4.66 0 004.35 3.23 9.32 9.32 0 01-5.77 1.99c-.37 0-.74-.02-1.1-.06a13.16 13.16 0 007.13 2.09c8.55 0 13.23-7.09 13.23-13.23 0-.2 0-.4-.01-.6a9.47 9.47 0 002.32-2.41z",
    instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
    facebook: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
  };
  
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
      <path d={paths[type]} />
    </svg>
  );
}

export default function TestimonialCarousel() {
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center lg:justify-between gap-[20px]">
        {testimonials.map((t, i) => (
          <div key={i} className="w-[380px] h-[422px] bg-[#F5F5F5] rounded-[15px] flex flex-col p-[8px] relative group border border-transparent hover:border-gray-200 transition-all shadow-sm hover:shadow-md">
            <div className={`h-[290px] ${t.bgColor} rounded-[8px] p-[38px] flex items-center`}>
              <p className="font-avenir font-medium text-[26px] leading-[37px] text-white">
                "{t.quote}"
              </p>
            </div>
            
            <div className="flex-1 flex items-center px-[22px] relative mt-[20px]">
               <div className="w-[50px] h-[50px] rounded-full bg-gray-300 flex items-center justify-center text-gray-500 font-bold text-xl mr-4 shrink-0 overflow-hidden relative">
                 <span className="z-10">{t.initials}</span>
               </div>
               
               <div className="flex flex-col">
                 <span className="font-avenir font-semibold text-[18px] text-[#26262B] leading-[32px]">{t.name}</span>
                 <span className="font-avenir font-semibold text-[14px] text-[#9F9F9F] leading-[25px]">{t.handle}</span>
               </div>
               
               <div className="ml-auto mb-[25px]">
                 <SmallIcon type={t.socialIcon} color={t.iconColor} />
               </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center gap-[25px] mt-[60px]">
         {[...Array(6)].map((_,i) => (
           <button 
             key={i} 
             className={`w-[12px] h-[12px] rounded-[6px] ${i === 0 ? 'bg-[#1D1D22]' : 'bg-[#D5D4D4]'}`}
           />
         ))}
      </div>
      
      {/* Bottom Divider Line - Centered breakout */}
      <div className="w-screen h-[2px] bg-black/20 mt-[120px] relative left-1/2 -translate-x-1/2" />
    </div>
  )
}
