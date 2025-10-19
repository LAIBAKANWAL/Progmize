import React from "react";
import { Button } from "../components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative top-[100px] sm:top-[110px] md:top-[154px] left-0 w-full min-h-[600px] sm:min-h-[700px] md:min-h-[843px] overflow-hidden">

      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Main section"
        src="src/assets/images/Rectangle 8.png"
      />

      
      {/* Main Heading */}
      <h1 className="absolute top-[20px] sm:top-[28px] md:top-[32px] left-4 sm:left-8 md:left-[94px] w-[90%] sm:w-[85%] md:w-[779px] [text-shadow:0px_4px_4px_#00000040] font-pixelify font-normal text-white text-[28px] sm:text-[40px] md:text-[56px] lg:text-[78px] tracking-[0] leading-tight md:leading-[normal]">
        <span className="font-bold">
          Powerful Programming,
          <br />
        </span>
        <span className="font-inter font-bold pl-50">
          Catalyze
          </span>
          <br />
          <span className="font-inter font-bold pl-50">
             Customization
          </span>
        
      </h1>

      {/* CTA Button */}
<div className="absolute top-[350px] sm:top-[320px] md:top-[419px] left-4 sm:left-8 md:left-[94px] w-[90%] sm:w-[85%] md:w-[536px] cursor-pointer">
        <Button className="relative cursor-pointer w-full h-auto [text-shadow:4px_4px_4px_#00000040] font-monomaniac font-normal text-white text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] tracking-[0] leading-[normal] rounded-none p-0 overflow-hidden">
          <img
            className="w-full h-[50px] sm:h-[60px] md:h-[71px] object-cover"
            alt="Button Background"
            src="src/assets/images/Group 1000005765.png"
          />
         
        </Button>
      </div>

      {/* Heart Logo - Responsive positioning */}
      <img
        className="absolute top-[60px] sm:top-[70px] md:top-[76px] right-4 sm:right-8 md:right-[193px] lg:right-[193px] w-[180px] sm:w-[240px] md:w-[280px] lg:w-[345px] h-auto object-contain z-10"
        alt="Progmize heart"
        src="src/assets/images/Progmize heart 2.png"
      />

      {/* Instagram Post Image - Hidden on small screens */}
      <img
        className="hidden md:block absolute top-[380px] lg:top-[502px] right-8 lg:right-[90px] w-[160px] lg:w-[238px] h-[160px] lg:h-[238px] object-cover rounded-lg shadow-lg"
        alt="Software instagram"
        src="src/assets/images/Software (Instagram Post (45)) (26) 1.png"
      />

      {/* Decorative Rectangle - Hidden on mobile */}
      <img
        className="hidden lg:block absolute top-[508px] right-[94px] w-3.5 h-[217px]"
        alt="Rectangle"
        src="src/assets/images/Rectangle 10.png"
      />
    </section>
  );
};