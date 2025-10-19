import React from "react";
import { Button } from "../components/ui/button";
import { ServiceCard } from "./ServiceCard";

const serviceCards = [
  {
    image: "",
    title: "Custom Software Development",
    description: "Our Custom Software Development services are designed to bring your unique business ideas to life, aligning perfectly with your goals, and processes.",
    bgSrc: "/figmaAssets/rectangle-10498.svg",
  },
  {
    image: "",
    title: "Legacy  System Modernization",
    description: "Outdated systems can hold your business back. With our Legacy System Modernization solutions, we help you transition from inefficient structures to up-to-date standard designs.",
    bgSrc: "/figmaAssets/rectangle-10499.svg",
  },
  {
    image: "",
    title: "E - Commerce & CMS Tools",
    description: "Our custom E-Commerce solutions, built on Shopify, WordPress, and other CMS tools, offer secure payment integrations to help your business grow.",
    bgSrc: "/figmaAssets/rectangle-10500.svg",
  },
  {
    image: "",
    title: "Web3 & Blockchain Solutions",
    description: "Develop next-gen digital solutions with Web3 and blockchain technologies that ensure transparency, security, and efficiency. We build scalable decentralized systems for modern business needs.",
    bgSrc: "/figmaAssets/rectangle-10506.svg",
  },
  {
    image: "",
    title: "Digital Marketing & SEO/GEO/AEO",
    description: "Enhance your online visibility with targeted digital marketing strategies that combine SEO, GEO-targeting, and AEO techniques. We deliver customized campaigns to increase traffic and user engagement.",
    bgSrc: "/figmaAssets/rectangle-10505.svg",
  },
  {
    image: "",
    title: "Website Design & Development",
    description: "Your website is your digital face. We design stunning, user-friendly, and responsive Websites and Mobile Applications tailored to your needs.",
    bgSrc: "/figmaAssets/rectangle-10507.svg",
  },
  {
    image: "",
    title: "AI Chat & Customer Support",
    description: "Transform customer experiences with AI-powered chat systems offering real-time support, instant and intelligent responses, and seamless communication.",
    bgSrc: "/figmaAssets/rectangle-10509.svg",
  },
  {
    image: "/figmaAssets/ui-ux---graphic-design.svg",
    title: "UI/UX & Graphic Design",
    description: "UI/UX design is the key to digital success. We deliver engaging digital experiences with intuitive UI/UX and creative graphic design solutions that enhance usability, brand appeal, and user satisfaction.",
    bgSrc: "/figmaAssets/rectangle-10508.svg",
  },
  {
    image: "",
    title: "Cloud Development & Migration",
    description: "Legacy infrastructure limits growth. We provide cloud-native and migration solutions that modernize systems for better scalability, security, flexibility, and performance across platforms.",
    bgSrc: "/figmaAssets/rectangle-10510.svg",
  },
];

export const ServicesSection = () => {
  return (
    <section className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
      <h2 className="text-center mb-8 sm:mb-10 md:mb-12 [text-shadow:-2px_2px_4px_#00000040] font-inter font-bold text-progmize-blue text-3xl sm:text-4xl md:text-5xl">
        WHAT WE OFFER
      </h2>
      
      <p className="mb-10 sm:mb-12 md:mb-16 [text-shadow:0px_4px_4px_#00000040] font-inter font-normal text-black text-lg sm:text-2xl md:text-[32px] text-center">
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-10 md:mb-16">
        {serviceCards.map((card, index) => (
          <ServiceCard key={index} {...card} index={index} />
        ))}
      </div>
      
      <div className="flex justify-center mb-8 md:mb-12">
        <img className="w-full max-w-[1261px] h-[41px]" alt="Line" src="/figmaAssets/line-13.svg" />
      </div>
      
      <div className="flex justify-center">
        <Button className="w-[189px] h-[72px] rotate-[-3.51deg] [text-shadow:4px_4px_4px_#00000040] font-monomaniac font-normal text-white text-[32px] sm:text-[36px] md:text-[40px] h-auto">
          VIEW ALL
        </Button>
      </div>
    </section>
  );
};