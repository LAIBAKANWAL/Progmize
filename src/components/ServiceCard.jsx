import React from "react";
import { Card, CardContent } from "../components/ui/card";

export const ServiceCard = ({ image, title, description, bgSrc, index }) => {
  return (
    <Card className="relative overflow-hidden border-0 shadow-none bg-transparent">
      <CardContent className="p-0">
        {index === 0 && <img className="w-full h-[264px] object-cover mb-[51px]" alt="Unsplash" src="/path-to-image.png" />}
        {index === 1 && <img className="w-full h-[264px] object-cover mb-[51px]" alt="Unsplash iptpp apbye" src="/path-to-image.png" />}
        {index === 2 && <div className="w-full h-[274px] bg-cover bg-[50%_50%] mb-[51px]" />}
        {index === 3 && <img className="w-full h-[225px] mb-[51px]" alt="Unsplash atwkwjllpoa" src="/path-to-image.png" />}
        {index === 4 && <div className="w-full h-[298px] bg-cover bg-[50%_50%] mb-[51px]" />}
        {index === 5 && <img className="w-full h-64 mb-[51px]" alt="Unsplash" src="/path-to-image.png" />}
        {index === 6 && <img className="w-full h-[247px] mb-[51px]" alt="Unsplash" src="/path-to-image.png" />}
        {index === 7 && <div className="w-full h-[232px] bg-cover bg-[50%_50%] mb-[51px]" />}
        {index === 8 && <img className="w-full h-[247px] mb-[51px]" alt="Unsplash" src="/path-to-image.png" />}
        
        <div className="relative">
          <img className="absolute top-0 left-0 w-full h-[260px]" alt="Rectangle" src={bgSrc} />
          <div className="relative z-10 p-[14px] pt-[22px]">
            {image && <img className="mb-2" alt={title} src={image} />}
            <h3 className="mb-[9px] font-inter font-black text-progmize-blue text-xl tracking-[0] leading-[normal]">
              {title}
            </h3>
            <p className="font-inter font-semibold text-black text-lg tracking-[0] leading-[30px]">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};