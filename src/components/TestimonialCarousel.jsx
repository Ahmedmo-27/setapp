import Twitter from '/Twitter.svg';
import Instagram from '/Instagram.svg';
import Facebook from '/Facebook.svg';

const testimonials = [
  {
    quote: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    name: "Arash Pourhabibi",
    handle: "@ArashPourhabibi",
    bgColor: "bg-[#71719A]",
    socialIcon: "twitter",
  },
  {
    quote: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    name: "Mauricio Sanchez",
    handle: "@m741s",
    bgColor: "bg-[#D9AE89]",
    socialIcon: "instagram",
  },
  {
    quote: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    name: "Meredith Sweet",
    handle: "@meredith.sweet.silberstein",
    bgColor: "bg-[#765070]",
    socialIcon: "facebook",
  }
];

const SmallIcon = ({ type, color }) => {
  const paths = {
    twitter: Twitter,
    instagram: Instagram,
    facebook: Facebook
  };
  
  return (
    <img src={paths[type]} alt={type} />
  );
}

export default function TestimonialCarousel() {
  return (
    <div className="w-full relative pt-[40px]">
      {/* Arrows */}
      <div className="carousel__arrows absolute top-0 left-0 right-0 flex justify-end items-start gap-[46px] pointer-events-none z-20 md:pr-[20px] lg:pr-[0px]">
        {/* Previous slide button */}
        <button 
          className="flex items-center justify-center w-[14px] h-[24px] opacity-60 hover:opacity-100 transition-opacity rotate-180 pointer-events-auto"
          aria-label="Previous slide"
        >
          <div className="p-[2px] flex items-center justify-center">
            <svg width="10" height="20" viewBox="0 0 10 20" fill="none">
               <path d="M2 2L8 10L2 18" stroke="#111111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>

        {/* Next slide button */}
        <button 
          className="flex items-center justify-center w-[14px] h-[24px] opacity-60 hover:opacity-100 transition-opacity pointer-events-auto"
          aria-label="Next slide"
        >
          <div className="p-[2px] flex items-center justify-center">
            <svg width="10" height="20" viewBox="0 0 10 20" fill="none">
               <path d="M2 2L8 10L2 18" stroke="#111111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="w-full max-w-[380px] min-h-[422px] bg-[#F5F5F5] rounded-[15px] flex flex-col p-[8px] relative group border border-transparent hover:border-gray-200 transition-all shadow-sm hover:shadow-md">
            <div className={`flex-1 md:h-[290px] ${t.bgColor} rounded-[8px] p-[20px] md:p-[38px] flex items-center`}>
              <p className="w-full md:w-[322px] md:h-[222px] font-medium text-[20px] md:text-[26px] leading-[30px] md:leading-[36.92px] tracking-normal text-white flex items-center">
                "{t.quote}"
              </p>
            </div>
            
            <div className="flex items-center px-4 py-6">
                <div className="flex flex-col">
                  <span className="font-semibold text-[18px] text-[#26262B] leading-[32.04px] tracking-normal">{t.name}</span>
                  <span className="font-semibold text-[14px] text-[#9F9F9F] leading-[24.92px] tracking-normal">{t.handle}</span>
                </div>
               
               <div className="ml-auto">
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
             aria-label={`Go to slide ${i + 1}`}
             className={`w-[12px] h-[12px] rounded-[6px] ${i === 0 ? 'bg-dot-active' : 'bg-dot-inactive'}`}
           />
         ))}
      </div>
      
      {/* Bottom Divider Line - Centered breakout */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] h-[1px] bg-black mt-12 md:mt-[120px]" />
      </div>
  )
}
