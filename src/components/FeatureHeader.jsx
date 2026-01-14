import React from "react";

export default function FeatureHeader() {
  return (
    <div className="pt-20 pb-10 flex flex-col md:flex-row justify-between items-start gap-8">
      {/* Heading Container */}
      <div className="max-w-[500px]">
        <h2 className="font-avenir text-[32px] md:text-[36px] font-semibold leading-tight tracking-[1px] text-white">
          What you get on Setapp.
        </h2>
      </div>

      {/* Paragraph Container */}
      <div className="max-w-[600px]">
        <p className="font-avenir text-[18px] font-normal leading-[32px] text-white">
          With a single monthly subscription at $9.99, you get 240+ apps for
          your Mac.
        </p>
      </div>
    </div>
  );
}
