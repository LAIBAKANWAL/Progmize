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
    <div className="overflow-hidden bg-gradient-to-b from-white to-[#AFABA9] w-full min-h-screen relative">
      <Header />
      <main className="pt-32 sm:pt-36 md:pt-40">
        <HeroSection />
        <FeaturedProduct />
        <Pagination />
        <ServicesSection />
        <TechnologiesSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
};