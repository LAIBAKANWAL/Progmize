// import React from "react";
import { Button } from "../components/ui/button";
import { ServiceCard } from "./ServiceCard";

// const serviceCards = [
//   {
//     image: "",
//     title: "Custom Software Development",
//     description: "Our Custom Software Development services are designed to bring your unique business ideas to life, aligning perfectly with your goals, and processes.",
//     bgSrc: "src/assets/images/Rectangle 10498.png",
//   },
//   {
//     image: "",
//     title: "Legacy  System Modernization",
//     description: "Outdated systems can hold your business back. With our Legacy System Modernization solutions, we help you transition from inefficient structures to up-to-date standard designs.",
//     bgSrc: "src/assets/images/Rectangle 10498.png",
//   },
//   {
//     image: "",
//     title: "E - Commerce & CMS Tools",
//     description: "Our custom E-Commerce solutions, built on Shopify, WordPress, and other CMS tools, offer secure payment integrations to help your business grow.",
//     bgSrc: "src/assets/images/Rectangle 10498.png",
//   },
//   {
//     image: "",
//     title: "Web3 & Blockchain Solutions",
//     description: "Develop next-gen digital solutions with Web3 and blockchain technologies that ensure transparency, security, and efficiency. We build scalable decentralized systems for modern business needs.",
//     bgSrc: "src/assets/images/Rectangle 10498.png",
//   },
//   {
//     image: "",
//     title: "Digital Marketing & SEO/GEO/AEO",
//     description: "Enhance your online visibility with targeted digital marketing strategies that combine SEO, GEO-targeting, and AEO techniques. We deliver customized campaigns to increase traffic and user engagement.",
//     bgSrc: "src/assets/images/Rectangle 10498.png",
//   },
//   {
//     image: "",
//     title: "Website Design & Development",
//     description: "Your website is your digital face. We design stunning, user-friendly, and responsive Websites and Mobile Applications tailored to your needs.",
//     bgSrc: "src/assets/images/Rectangle 10498.png",
//   },
//   {
//     image: "",
//     title: "AI Chat & Customer Support",
//     description: "Transform customer experiences with AI-powered chat systems offering real-time support, instant and intelligent responses, and seamless communication.",
//     bgSrc: "src/assets/images/Rectangle 10498.png",
//   },
//   {
//     image: "/figmaAssets/ui-ux---graphic-design.svg",
//     title: "UI/UX & Graphic Design",
//     description: "UI/UX design is the key to digital success. We deliver engaging digital experiences with intuitive UI/UX and creative graphic design solutions that enhance usability, brand appeal, and user satisfaction.",
//     bgSrc: "src/assets/images/Rectangle 10498.png",
//   },
//   {
//     image: "",
//     title: "Cloud Development & Migration",
//     description: "Legacy infrastructure limits growth. We provide cloud-native and migration solutions that modernize systems for better scalability, security, flexibility, and performance across platforms.",
//     bgSrc: "src/assets/images/Rectangle 10498.png",
//   },
// ];

// export const ServicesSection = () => {
//   return (
//     <section className="absolute top-[1055px] left-0 w-full px-[115px]">
// <h2 className="text-center mb-[101px] [text-shadow:-2px_2px_4px_#00000040] font-inter font-bold text-[#023189] text-[64px] tracking-[0] leading-[normal]">
//        WHAT WE OFFER
//       </h2>
      
//       <p className="mb-[64px] [text-shadow:0px_4px_4px_#00000040] font-inter font-normal text-black text-[32px] text-center tracking-[0] leading-[normal]">
//         <span className="font-light">Future-ready </span>
//         <span className="font-bold">Digital Systems</span>
//         <span className="font-light"> tailored to empower industries through </span>
//         <span className="font-bold">innovation</span>
//         <span className="font-light">, </span>
//         <span className="font-bold">automation</span>
//         <span className="font-light">, and seamless </span>
//         <span className="font-bold">user experiences</span>
//         <span className="font-light"> across </span>
//         <span className="font-bold">Web</span>
//         <span className="font-light"> and </span>
//         <span className="font-bold">Mobile</span>
//         <span className="font-light"> platforms.</span>
//       </p>
      
//       <div className="grid grid-cols-3 gap-x-[49px] gap-y-[41px] mb-[87px]">
//         {serviceCards.map((card, index) => (
//           <ServiceCard key={index} {...card} index={index} />
//         ))}
//       </div>
      
//       <div className="flex justify-center mb-[61px]">
//         <img className="w-[1261px] h-[41px]" alt="Line" src="/figmaAssets/line-13.svg" />
//       </div>
      
//       <div className="flex justify-center">
//         <Button className="w-[189px] h-[72px] rotate-[-3.51deg] [text-shadow:4px_4px_4px_#00000040] font-monomaniac font-normal text-white text-[40px] tracking-[0] leading-[normal] h-auto">
//           VIEW ALL
//         </Button>
//       </div>
//     </section>
//   );
// };


export const ServicesSection = () => {

  const serviceCards = [
  {
    image: "src/assets/images/unsplash_40k6ZqbsXuo.png",
    title: "Custom Software Development",
    description: "Our Custom Software Development services are designed to bring your unique business ideas to life, aligning perfectly with your goals, and processes.",
    bgSrc: "src/assets/images/Rectangle 10498.png",
  },
  {
    image: "src/assets/images/unsplash_IpTPp_aPbYE.png",
    title: "Legacy System Modernization",
    description: "Outdated systems can hold your business back. With our Legacy System Modernization solutions, we help you transition from inefficient structures to up-to-date standard designs.",
    bgSrc: "src/assets/images/Rectangle 10498.png",
  },
  {
    image: "src/assets/images/Group 34.png",
    title: "E - Commerce & CMS Tools",
    description: "Our custom E-Commerce solutions, built on Shopify, WordPress, and other CMS tools, offer secure payment integrations to help your business grow.",
    bgSrc: "src/assets/images/Rectangle 10498.png",
  },
  {
    image: "src/assets/images/Group 42.png",
    title: "Web3 & Blockchain Solutions",
    description: "Develop next-gen digital solutions with Web3 and blockchain technologies that ensure transparency, security, and efficiency. We build scalable decentralized systems for modern business needs.",
    bgSrc: "src/assets/images/Rectangle 10498.png",
  },
  {
    image: "src/assets/images/Group 36.png",
    title: "Digital Marketing & SEO/GEO/AEO",
    description: "Enhance your online visibility with targeted digital marketing strategies that combine SEO, GEO-targeting, and AEO techniques. We deliver customized campaigns to increase traffic and user engagement.",
    bgSrc: "src/assets/images/Rectangle 10498.png",
  },
  {
    image: "src/assets/images/unsplash_eDUKZFYY1K4.png",
    title: "Website Design & Development",
    description: "Your website is your digital face. We design stunning, user-friendly, and responsive Websites and Mobile Applications tailored to your needs.",
    bgSrc: "src/assets/images/Rectangle 10498.png",
  },
  {
    image: "src/assets/images/unsplash_aTWKwJllPOA.png",
    title: "AI Chat & Customer Support",
    description: "Transform customer experiences with AI-powered chat systems offering real-time support, instant and intelligent responses, and seamless communication.",
    bgSrc: "src/assets/images/Rectangle 10498.png",
  },
  {
    image: "src/assets/images/Group 39.png",
    title: "UI/UX & Graphic Design",
    description: "UI/UX design is the key to digital success. We deliver engaging digital experiences with intuitive UI/UX and creative graphic design solutions that enhance usability, brand appeal, and user satisfaction.",
    bgSrc: "src/assets/images/Rectangle 10498.png",
  },
  {
    image: "src/assets/images/unsplash_k5AxNUn4c5o.png",
    title: "Cloud Development & Migration",
    description: "Legacy infrastructure limits growth. We provide cloud-native and migration solutions that modernize systems for better scalability, security, flexibility, and performance across platforms.",
    bgSrc: "src/assets/images/Rectangle 10498.png",
  },
];
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 md:px-12 lg:px-[115px] py-12 sm:py-16 md:py-20">
      
      {/* Section Heading */}
      <h2 className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-[101px] [text-shadow:-2px_2px_4px_#00000040] font-inter font-bold text-[#023189] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-tight">
        WHAT WE OFFER
      </h2>
      {/* Section Description */}
      <p className="mb-8 sm:mb-10 md:mb-12 lg:mb-[64px] [text-shadow:0px_4px_4px_#00000040] font-inter font-normal text-black text-base sm:text-lg md:text-2xl lg:text-[32px] text-center tracking-[0] leading-relaxed px-2 sm:px-4">
        <span className="font-light">Future-ready </span>
        <span className="font-bold">Digital Systems</span>
        <span className="font-light"> tailored to empower industries through </span>
        <span className="font-bold">innovation</span>
        <span className="font-light">, </span>
        <span className="font-bold">automation</span>
        <span className="font-light">, and seamless </span>
        <span className="font-bold">user experiences</span>
        <span className="font-light"> across </span>
        <span className="font-bold">Web</span>
        <span className="font-light"> and </span>
        <span className="font-bold">Mobile</span>
        <span className="font-light"> platforms.</span>
      </p>
      
      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-x-[49px] lg:gap-y-[41px] mb-8 sm:mb-12 md:mb-16 lg:mb-[87px]">
        {serviceCards.map((card, index) => (
          <ServiceCard key={index} {...card} />
        ))}
      </div>
      
   
      
      
      {/* View All Button */}
      <div className="flex justify-center">
        <Button className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[189px] h-[50px] sm:h-[60px] md:h-[68px] lg:h-[72px] rotate-[-3.51deg] [text-shadow:4px_4px_4px_#00000040] font-monomaniac font-normal text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] tracking-[0] leading-[normal] bg-gradient-to-b from-[#FFB81D] to-[#FFB81D] hover:scale-105 transition-transform duration-300">
          VIEW ALL
        </Button>
      </div>

      {/* Divider Line */}
      <div className="flex justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-[61px]">
        <div className="w-full max-w-[1261px] h-[2px] sm:h-[3px] md:h-[4px] lg:h-[41px] bg-gradient-to-r from-transparent via-[#023189] to-transparent" />
      </div>
    </section>
  );
};