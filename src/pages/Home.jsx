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
    <div className="bg-gradient-to-b from-white to-[#AFABA9] w-full min-w-[1440px] min-h-[6400px] relative overflow-x-hidden">
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