import React from "react";
import FeatureHeader from "./FeatureHeader";
import FeatureCardLarge from "./FeatureCardLarge";
import FeatureCardSmall from "./FeatureCardSmall";

export default function FeaturesGrid() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1180px] px-4 md:px-0 relative border-t border-[#E5E5E5]">
        <FeatureHeader />

        <div className="pt-20 md:pt-[233px] grid grid-cols-1 gap-5">
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
          <div className="w-full mt-20 border-b border-[#E5E5E5] pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="max-w-[400px]">
                <h3 className="font-semibold text-[28px] md:text-[36px] leading-tight tracking-[1px] text-white">
                  Your Setapp journey.
                </h3>
              </div>

              <div className="max-w-[600px]">
                <p className="font-normal text-lg leading-[32px] text-white">
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
