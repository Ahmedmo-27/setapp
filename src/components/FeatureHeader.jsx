import React from "react";

export default function FeatureHeader() {
  return (
    <div className="absolute left-[-10px] top-[101px] h-[71.84px] w-[1200px]">
      {/* Heading Container */}
      <div className="absolute bottom-[20px] left-0 right-[700px] top-[-1px] flex max-w-[500px] flex-row items-start pl-[10px] pr-[55px] pb-[0.84px]">
        <h2 className="flex h-[52px] w-[435px] items-center font-avenir text-[36px] font-semibold leading-[52px] tracking-[1px] text-white">
          What you get on Setapp.
        </h2>
      </div>

      {/* Paragraph Container */}
      <div className="absolute bottom-0 left-[600px] right-0 top-[-0.5px] flex max-w-[600px] flex-row items-start pl-[10px] pr-[45px] pb-[7.34px]">
        <p className="flex h-[65px] w-[545px] items-center font-avenir text-[18px] font-normal leading-[32px] text-white">
          With a single monthly subscription at $9.99, you get 240+ apps for
          your Mac.
        </p>
      </div>
    </div>
  );
}
