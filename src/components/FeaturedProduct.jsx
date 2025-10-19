import React from "react";

export const FeaturedProduct = () => {
  return (
    <>
      {/* Decorative Line */}
      <img 
        className="absolute top-[650px] sm:top-[750px] md:top-[850px] lg:top-[879px] left-4 sm:left-8 md:left-[94px] w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-[90%] lg:w-[1264px] h-[10px] sm:h-[12px] md:h-[15px] object-contain" 
        alt="Group" 
        src="src/assets/images/Group 10.png" 
      />
      
      {/* Featured Product Content */}
      <section className="absolute top-[480px] sm:top-[550px] md:top-[620px] lg:top-[671px] left-4 sm:left-8 md:left-[90px] w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-[90%] lg:max-w-[1019px] px-2 sm:px-4 md:px-0">
        <h2 className="font-inter font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0] leading-tight md:leading-[normal] mb-2 sm:mb-3 md:mb-[10px]">
          Auto Shipping - No. 1 ERP Solutions
        </h2>
        <p className="[text-shadow:0px_4px_4px_#00000040] font-inter font-normal text-white text-sm sm:text-base md:text-xl lg:text-[28px] text-justify tracking-[0] leading-relaxed md:leading-[normal]">
          Boost your car shipping business revenue with our advanced Auto Shipping Solutions, built for efficiency and scalability. We deliver powerful features like real-time tracking and automated workflows to streamline operations and maximize profitability.
        </p>
      </section>
    </>
  );
};