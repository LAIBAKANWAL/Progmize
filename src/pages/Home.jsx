import React from "react";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { Pagination } from "../components/Pagination";
import { FeaturedProduct } from "../components/FeaturedProduct";
import { ServicesSection } from "../components/ServicesSection";
import { TechnologiesSection } from "../components/TechnologiesSection";
import { ProcessSection } from "../components/ProcessSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#AFABA9] w-full min-h-screen overflow-x-hidden pt-[128px] sm:pt-[144px] md:pt-[152px]">
      <Header />
      <HeroSection />
      <FeaturedProduct />
      <Pagination />
      <ServicesSection />
      <TechnologiesSection />
      <ProcessSection />
      <Footer />
    </div>
  );
};