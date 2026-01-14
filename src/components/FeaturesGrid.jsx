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
        </div>
      </div>
    </section>
  );
}
