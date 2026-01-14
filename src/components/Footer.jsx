import React from 'react';
import SetappIcon from './SetappIcon';

export default function Footer() {
  return (
    <footer className="w-full bg-footer-bg text-white font-avenir pt-[60px] pb-[40px] flex justify-center">
      <div className="w-full max-w-[1440px] px-6 md:px-[30px] flex flex-col items-center">
        
        {/* Top Section */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
          
          {/* Left Column: Logo & Subscription */}
          <div className="flex flex-col gap-12 w-full lg:max-w-[460px]">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="w-[20px] h-[32px] flex items-center overflow-hidden">
                 <SetappIcon size="navbar" className="w-[32px] h-[50px] -ml-[6px]" />
              </div>
              <span className="text-[24px] font-bold tracking-widest text-white mt-1">SETAPP</span>
            </div>

            {/* Subscription */}
            <div className="flex flex-col gap-6 w-full max-w-[440px]">
              <p className="text-[16px] leading-[28px] flex flex-wrap items-center">
                Updates from our team, written with love
                <span className="ml-1 inline-flex items-center justify-center w-[16px] h-[16px]">
                  <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 10.89C6.5 10.89 13 7.5 13 3.5C13 1.5 11.5 0 9.5 0C8 0 7 1 6.5 1.5C6 1 5 0 3.5 0C1.5 0 0 1.5 0 3.5C0 7.5 6.5 10.89 6.5 10.89Z" fill="#E6842E"/>
                  </svg>
                </span>
              </p>
              
              <div className="flex w-full h-[50px]">
                <div className="relative flex-grow h-full bg-[#404547] rounded-l-[6px]">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full h-full bg-transparent text-white placeholder-[#9D9CA2] px-[12px] py-[14px] text-[16px] outline-none rounded-l-[6px]"
                  />
                </div>
                <button 
                  aria-label="Subscribe"
                  className="w-[54px] h-[50px] bg-white rounded-r-[6px] flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L1 13" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Link Lists */}
          <div className="w-full flex flex-row flex-wrap justify-between gap-8 lg:gap-4 lg:max-w-[800px]">
            {/* List 1 */}
            <div className="flex flex-col min-w-[150px] gap-[0.5px]">
              {['Home', 'How It Works', 'All Apps', 'Pricing', 'Setapp for Teams', 'Blog', 'Podcast', 'Download'].map((item) => (
                <a key={item} href="#" className="text-[14px] md:text-[16px] leading-[32px] text-white hover:text-gray-300 transition-colors">
                  {item}
                </a>
              ))}
            </div>

            {/* List 2 */}
            <div className="flex flex-col min-w-[150px] gap-[0.5px]">
              {['About', 'Support', 'Education Discount', 'Family Plan', 'For Developers', 'Gift Cards', 'Redeem Card or Code', 'Setapp Reviews', 'Affiliate Program', 'Mac Developer Survey 2023'].map((item) => (
                <a key={item} href="#" className="text-[14px] md:text-[16px] leading-[32px] text-white hover:text-gray-300 transition-colors">
                  {item}
                </a>
              ))}
            </div>

            {/* List 3 */}
            <div className="flex flex-col min-w-[150px] gap-[0.5px]">
              <a href="#" className="text-[14px] md:text-[16px] leading-[32px] text-white hover:text-gray-300 transition-colors">Getting started with Setapp</a>
              <a href="#" className="text-[14px] md:text-[16px] leading-[32px] text-white hover:text-gray-300 transition-colors">Remote access to other Mac</a>
              <div className="flex flex-col">
                <a href="#" className="text-[14px] md:text-[16px] leading-[32px] text-white hover:text-gray-300 transition-colors">Fix macOS Ventura problems</a>
              </div>
              <a href="#" className="text-[14px] md:text-[16px] leading-[32px] text-white hover:text-gray-300 transition-colors">Best productivity apps</a>
              <a href="#" className="text-[14px] md:text-[16px] leading-[32px] text-white hover:text-gray-300 transition-colors">Best YouTube downloaders</a>
              <a href="#" className="text-[14px] md:text-[16px] leading-[32px] text-white hover:text-gray-300 transition-colors">Uninstall apps</a>
            </div>
          </div>
        </div>

        {/* Secondary Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-12 gap-6 h-auto">
           {/* Left Badges */}
           <div className="flex flex-row items-center gap-[12px]">
              <div className="flex items-center h-[26px]">
                 <span className="bg-[#969799] h-[26px] px-[4px] flex items-center text-[11px] font-bold font-arial uppercase text-white">DMCA</span>
                 <span className="bg-[#404547] h-[26px] px-[8px] flex items-center text-[11px] font-bold font-arial uppercase text-white">Protected</span>
              </div>
           </div>

           {/* Language Switcher */}
           <div className="flex items-center gap-2 cursor-pointer">
              <div className="relative w-[18px] h-[18px] rounded-full overflow-hidden flex items-center justify-center bg-blue-900 border border-white/20">
                 <div className="absolute inset-0 bg-[#bd3d44]"></div>
                 <div className="absolute top-[20%] bottom-[20%] left-0 right-0 bg-white"></div>
                 <div className="absolute top-0 bottom-[60%] left-0 right-[50%] bg-[#192f5d]"></div>
              </div>
              <span className="text-[16px] text-white">English</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="ml-1">
                 <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
           </div>
        </div>

        {/* Bottom Section (Border Top) */}
        <div className="w-full border-t border-[#E5E5E5] mt-6 pt-8 pb-10 flex flex-col md:flex-row justify-between items-start gap-8 relative">
           
           <div className="flex flex-col gap-4 max-w-[920px]">
              <p className="text-[12px] leading-[21px] text-white">
                © {new Date().getFullYear()} Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
              </p>
              <div className="flex gap-[12px] text-[12px] text-[#969799]">
                 <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                 <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </div>
           </div>

           {/* Social Icons */}
           <div className="flex gap-4 items-center opacity-45 hover:opacity-100 transition-opacity">
              <a href="#" aria-label="Facebook" className="w-[26px] h-[26px] flex items-center justify-center">
                 <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z"/>
                 </svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-[26px] h-[26px] flex items-center justify-center">
                 <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57C23.0545 4.96542 22.1026 5.22683 21.118 5.345C22.154 4.733 22.932 3.772 23.303 2.613C22.336 3.187 21.272 3.593 20.142 3.815C19.227 2.839 17.922 2.238 16.48 2.238C13.705 2.238 11.455 4.489 11.455 7.266C11.455 7.66 11.499 8.041 11.585 8.406C7.408 8.196 3.738 6.196 1.283 3.184C0.852 3.925 0.605 4.786 0.605 5.702C0.605 7.447 1.492 8.983 2.84 9.884C2.016 9.858 1.246 9.632 0.565 9.253V9.317C0.565 11.753 2.299 13.785 4.596 14.246C4.174 14.36 3.73 14.421 3.272 14.421C2.949 14.421 2.636 14.389 2.333 14.331C2.971 16.329 4.828 17.783 7.037 17.824C5.316 19.172 3.147 19.976 0.784 19.976C0.377 19.976 0.024 19.952 0 19.923C2.226 21.35 4.869 22.183 7.71 22.183C16.963 22.183 22.022 14.519 22.022 7.923C22.022 7.705 22.017 7.488 22.007 7.273C22.99 6.553 23.837 5.629 24 4.57H23.953Z"/>
                 </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-[26px] h-[26px] flex items-center justify-center">
                 <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C18.012 2.286 18.646 2.48 19.066 2.644C19.622 2.86 20.02 3.141 20.438 3.559C20.856 3.977 21.137 4.375 21.353 4.931C21.516 5.351 21.71 5.985 21.763 7.148C21.821 8.414 21.833 8.794 21.833 12C21.833 15.206 21.821 15.586 21.763 16.852C21.71 18.015 21.516 18.649 21.353 19.069C21.137 19.625 20.856 20.023 20.438 20.441C20.02 20.859 19.622 21.14 19.066 21.356C18.646 21.519 18.012 21.713 16.85 21.766C15.584 21.824 15.204 21.836 12 21.836C8.796 21.836 8.416 21.824 7.15 21.766C5.988 21.713 5.354 21.519 4.934 21.356C4.378 21.14 3.98 20.859 3.562 20.441C3.144 20.023 2.863 19.625 2.647 19.069C2.484 18.649 2.29 18.015 2.237 16.852C2.179 15.586 2.167 15.206 2.167 12C2.167 8.794 2.179 8.414 2.237 7.148C2.29 5.985 2.484 5.351 2.647 4.931C2.863 4.375 3.144 3.977 3.562 3.559C3.98 3.141 4.378 2.86 4.934 2.644C5.354 2.48 5.988 2.286 7.15 2.233C8.416 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C5.775 0.131 4.903 0.333 4.14 0.63C3.351 0.936 2.684 1.348 2.018 2.014C1.352 2.679 0.94 3.347 0.634 4.136C0.337 4.9 0.135 5.772 0.076 7.05C0.018 8.33 0.004 8.738 0.004 12C0.004 15.262 0.018 15.67 0.076 16.95C0.135 18.228 0.337 19.1 0.634 19.864C0.94 20.653 1.352 21.321 2.018 21.986C2.684 22.651 3.351 23.063 4.14 23.37C4.903 23.667 5.775 23.869 7.053 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.667 23.986 16.947 23.928C18.225 23.869 19.097 23.667 19.86 23.37C20.649 23.063 21.316 22.651 21.982 21.986C22.648 21.321 23.06 20.653 23.366 19.864C23.663 19.1 23.865 18.228 23.924 16.95C23.982 15.67 23.996 15.262 23.996 12C23.996 8.738 23.982 8.33 23.924 7.05C23.865 5.772 23.663 4.9 23.366 4.136C23.06 3.347 22.648 2.679 21.982 2.014C21.316 1.348 20.649 0.936 19.86 0.63C19.097 0.333 18.225 0.131 16.947 0.072C15.667 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.162 12 18.162C15.403 18.162 18.162 15.403 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16ZM19.835 5.61C19.835 6.402 19.193 7.044 18.401 7.044C17.609 7.044 16.967 6.402 16.967 5.61C16.967 4.818 17.609 4.175 18.401 4.175C19.193 4.175 19.835 4.818 19.835 5.61Z"/>
                 </svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-[26px] h-[26px] flex items-center justify-center">
                 <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186C23.225 5.166 22.423 4.363 21.402 4.09C19.553 3.593 12.004 3.593 12.004 3.593C12.004 3.593 4.455 3.593 2.606 4.09C1.585 4.363 0.783 5.166 0.51 6.186C0.011 8.043 0 11.91 0 11.91C0 11.91 0.011 15.776 0.51 17.634C0.783 18.654 1.585 19.457 2.606 19.729C4.455 20.227 12.004 20.227 12.004 20.227C12.004 20.227 19.553 20.227 21.402 19.729C22.423 19.457 23.225 18.654 23.498 17.634C23.996 15.776 24.008 11.91 24.008 11.91C24.008 11.91 23.996 8.043 23.498 6.186ZM9.604 15.353V8.467L15.652 11.91L9.604 15.353Z"/>
                 </svg>
              </a>
           </div>
        </div>

      </div>
    </footer>
  );
}
