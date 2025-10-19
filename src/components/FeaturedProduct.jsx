import React from "react";

export const FeaturedProduct = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8">
        {/* Decorative Line */}
        <div className="py-6 sm:py-8">
          <img 
            className="w-full max-w-[1264px] h-[10px] sm:h-[12px] md:h-[15px] object-contain mx-auto" 
            alt="Group" 
            src="src/assets/images/Group 10.png" 
          />
        </div>
        
        {/* Featured Product Content */}
        <section className="max-w-3xl">
          <h2 className="font-inter font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight mb-2 sm:mb-3 md:mb-4">
            Auto Shipping - No. 1 ERP Solutions
          </h2>
          <p className="[text-shadow:0px_4px_4px_#00000040] font-inter font-normal text-white text-sm sm:text-base md:text-xl lg:text-[28px] text-justify leading-relaxed">
            Boost your car shipping business revenue with our advanced Auto Shipping Solutions, built for efficiency and scalability. We deliver powerful features like real-time tracking and automated workflows to streamline operations and maximize profitability.
          </p>
        </section>
      </div>
    </>
  );
};