import React from "react";
import { Button } from "../components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          alt="Main section"
          src="src/assets/images/Rectangle 8.png"
        />
      </div>

      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-20">
        {/* Decorative Style SVG - Hidden on mobile */}
        <img
          className="hidden md:block absolute -z-0 right-10 top-6 md:top-10 w-[250px] lg:w-[385px] h-[280px] lg:h-[426px] opacity-50 md:opacity-100"
          alt="Style"
          src="/figmaAssets/style-2.svg"
        />

        {/* Main Heading */}
        <h1 className="relative z-10 [text-shadow:0px_4px_4px_#00000040] font-pixelify font-normal text-white text-[28px] sm:text-[40px] md:text-[56px] lg:text-[78px] leading-tight">
          <span className="font-bold">Powerful Programming,</span>
          <br />
          <span className="font-inter font-bold">Catalyze</span>
          <br />
          <span className="font-inter font-bold">Customization</span>
        </h1>

        {/* CTA Button */}
        <div className="relative z-10 mt-6 sm:mt-8 md:mt-10 max-w-md">
          <Button className="relative w-full h-auto [text-shadow:4px_4px_4px_#00000040] font-monomaniac font-normal text-white text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] rounded-none p-0 overflow-hidden">
            <img
              className="w-full h-[50px] sm:h-[60px] md:h-[71px] object-cover"
              alt="Button Background"
              src="src/assets/images/Group 1000005765.png"
            />
          </Button>
        </div>

        {/* Right visuals */}
        <div className="relative z-10">
          <img
            className="absolute right-0 top-0 mt-4 sm:mt-6 md:mt-0 w-[180px] sm:w-[240px] md:w-[280px] lg:w-[345px] h-auto object-contain"
            alt="Progmize heart"
            src="src/assets/images/Progmize heart 2.png"
          />

          <img
            className="hidden md:block absolute right-4 lg:right-[90px] top-[260px] lg:top-[380px] w-[160px] lg:w-[238px] h-[160px] lg:h-[238px] object-cover rounded-lg shadow-lg"
            alt="Software instagram"
            src="src/assets/images/Software (Instagram Post (45)) (26) 1.png"
          />

          <img
            className="hidden lg:block absolute right-[94px] top-[380px] w-3.5 h-[217px]"
            alt="Rectangle"
            src="src/assets/images/Rectangle 10.png"
          />
        </div>
      </div>
    </section>
  );
};