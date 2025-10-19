import React from "react";

const paginationDots = [
  { active: true, src: "" },
  { active: false, src: "src/assets/images/Ellipse 1114.png" },
  { active: false, src: "src/assets/images/Ellipse 1133.png" },
  { active: false, src: "/src/assets/images/Ellipse 1134.png" },
  { active: false, src: "src/assets/images/Ellipse 1135.png" },
  { active: false, src: "src/assets/images/Ellipse 1136.png" },
];

export const Pagination = () => {
  return (
    <nav className="absolute top-[670px] sm:top-[780px] md:top-[860px] lg:top-[909px] left-1/2 -translate-x-1/2 flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-4">
      {paginationDots.map((dot, index) => (
        <button
          key={index}
          className={`w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px] lg:w-[30px] lg:h-[30px] rounded-full transition-all duration-300 hover:scale-110 ${
            dot.active
              ? "shadow-[2px_4px_4px_#00000040] bg-gradient-to-b from-[#FFB81D] to-[#D29207]"
              : ""
          }`}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={dot.active ? "true" : "false"}
        >
          {!dot.active && dot.src && (
            <img 
              className="w-full h-full rounded-full" 
              alt={`Slide ${index + 1}`} 
              src={dot.src} 
            />
          )}
        </button>
      ))}
    </nav>
  );
};