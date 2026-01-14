import React from "react";
import FeatureHeader from "./FeatureHeader";
import FeatureCardLarge from "./FeatureCardLarge";
import FeatureCardSmall from "./FeatureCardSmall";

export default function FeaturesGrid() {
  return (
    <section>
      <div className="mx-auto max-w-[1180px] h-[1519px] px-0 relative border-t border-[#E5E5E5]">
        <FeatureHeader />

        <div className="pt-[233px] grid grid-cols-1 gap-5">
          {/* Big card */}
          <FeatureCardLarge
            title="Keep your Mac clean"
            subtitle="Remove junk, scan for malware, wipe email attachments"
            iconSrc="/MacIcon.png"
            imageSrc="/keepYourMacClean.png"
          />

          {/* Two cards row */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <FeatureCardSmall
              variant="light"
              title="Write code"
              subtitle="Create applications in more than 25 languages"
              imageSrc="/WriteCode.png"
              iconSrc="/WriteCodeIcon.png"
            />

            <FeatureCardSmall
              variant="blue"
              title="Join meetings in a click"
              subtitle="Quickly access links to your meetings from menu bar"
              imageSrc="/JoinMeetings.png"
              iconSrc="/JoinMeetingsIcon.png"
            />
          </div>

          {/* View all superpowers */}
          <div className="pt-6 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-3 text-white/90 hover:text-white transition font-semibold"
            >
              <span className="text-2xl leading-none">→</span>
              <span className="text-lg">View all superpowers</span>
            </a>
          </div>
          {/* Explore Setapp Info */}
          <div className="box-border relative w-full h-[156.84px] mt-20 border-b border-[#E5E5E5]">
            <div className="absolute -left-[10px] -right-[10px] top-0 bottom-[89px]">
              <div className="flex flex-row items-start px-[10px] pr-[25px] pb-[0.84px] absolute max-w-[400px] left-0 right-[800px] -top-[1px] bottom-4">
                <h3 className="w-[365px] h-[52px] font-semibold text-[36px] leading-[52px] flex items-center tracking-[1px] text-white flex-none order-0 flex-grow-0">
                  Your Setapp journey.
                </h3>
              </div>

              <div className="flex flex-row items-start px-[10px] pr-[132px] pb-[3.34px] absolute max-w-[600px] left-[600px] right-0 -top-[0.5px] bottom-0">
                <p className="w-[458px] h-[65px] font-normal text-lg leading-[32px] flex items-center text-white flex-none order-0 flex-grow-0">
                  Type in your task into Setapp search and get instant app recommendations.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
