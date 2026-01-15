export default function FeatureHeader() {
  return (
    <div className="pt-20 flex flex-col md:flex-row justify-between items-start gap-8">
      {/* Heading Container */}
      <div className="w-full lg:w-[435px] lg:h-[52px]">
        <h2 className="font-avenir text-[32px] md:text-[36px] font-semibold leading-tight md:leading-[51.84px] tracking-[1px] text-white align-middle">
          What you get on Setapp.
        </h2>
      </div>

      {/* Paragraph Container */}
      <div className="w-full lg:w-[545px] lg:h-[65px]">
        <p className="font-avenir text-[18px] font-normal leading-[32.04px] text-white align-middle">
          With a single monthly subscription at $9.99, you get 240+ apps for
          your Mac.
        </p>
      </div>
    </div>
  );
}
