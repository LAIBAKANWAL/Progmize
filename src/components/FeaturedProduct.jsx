import React from "react";

export const FeaturedProduct = () => {
  return (
    <section className="relative max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0 mt-12 sm:mt-16 md:mt-20">
      <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
        <img
          className="w-full max-w-[1264px] h-[10px] sm:h-[12px] md:h-[15px] object-contain"
          alt="Group"
          src="src/assets/images/Group 10.png"
        />
      </div>
      <h2 className="font-inter font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0] leading-tight md:leading-[normal] mb-2 sm:mb-3 md:mb-[10px]">
        Auto Shipping - No. 1 ERP Solutions
      </h2>
      <p className="[text-shadow:0px_4px_4px_#00000040] font-inter font-normal text-white text-sm sm:text-base md:text-xl lg:text-[28px] text-justify tracking-[0] leading-relaxed md:leading-[normal]">
        Boost your car shipping business revenue with our advanced Auto Shipping Solutions, built for efficiency and scalability. We deliver powerful features like real-time tracking and automated workflows to streamline operations and maximize profitability.
      </p>
    </section>
  );
};