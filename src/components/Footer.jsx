import React from "react";

const footerServices = [
  "UI / UX",
  "Graphic Design",
  "Website Design & Development",
  "Digital Marketing & SEO/GEO/AEO",
  "Custom Software Development",
  "E-Commerce & CMS Tools",
  "AI Chatbot & Customer Support",
  "Legacy System & Modernization",
  "Web3 & Blockchain Solutions",
  "Cloud Development & Migration",
];

const footerIndustries = [
  "Shipping & Logistics",
  "Real Estate",
  "E-Commerce",
  "Travel & Hospitality",
  "AI & Blockchain",
  "Social Network",
];

const footerCompany = [
  "About Progmize",
  "Our Story",
  "Who We Work With",
  "What We Do",
  "Why Choose Progmize",
  "Our Mission",
  "Our Vision",
];

const footerInsights = [
  "Insights Home",
  "Software Development",
  "Industry Expertise",
  "Innovation",
  "Tech",
  "Talent & Culture",
];

const footerOther = ["Careers", "Get Project Estimation", "Book Appointment"];

const footerSolutions = [
  "Design Management",
  "Shipping Management",
  "Barbar Appointment Sys",
  "1000+ Solutions catalogue",
];

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#023189] to-[#010d23] py-12 sm:py-16 px-6 sm:px-10 md:px-16 lg:px-[115px]">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
        <div>
          <h4 className="font-inter font-bold text-white text-xl mb-6">Services</h4>
          <ul className="space-y-3">
            {footerServices.map((service, index) => (
              <li key={index}>
                <a href="#" className="font-inter text-white/80 text-sm hover:text-white transition-colors">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-inter font-bold text-white text-xl mb-6">Industries</h4>
          <ul className="space-y-3">
            {footerIndustries.map((industry, index) => (
              <li key={index}>
                <a href="#" className="font-inter text-white/80 text-sm hover:text-white transition-colors">
                  {industry}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-inter font-bold text-white text-xl mb-6">Company</h4>
          <ul className="space-y-3">
            {footerCompany.map((item, index) => (
              <li key={index}>
                <a href="#" className="font-inter text-white/80 text-sm hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-inter font-bold text-white text-xl mb-6">Insights</h4>
          <ul className="space-y-3">
            {footerInsights.map((insight, index) => (
              <li key={index}>
                <a href="#" className="font-inter text-white/80 text-sm hover:text-white transition-colors">
                  {insight}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-inter font-bold text-white text-xl mb-6">Other</h4>
          <ul className="space-y-3">
            {footerOther.map((item, index) => (
              <li key={index}>
                <a href="#" className="font-inter text-white/80 text-sm hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-inter font-bold text-white text-xl mb-6">Solutions</h4>
          <ul className="space-y-3">
            {footerSolutions.map((solution, index) => (
              <li key={index}>
                <a href="#" className="font-inter text-white/80 text-sm hover:text-white transition-colors">
                  {solution}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 pt-8">
        <div className="flex justify-between items-center">
          <p className="font-inter text-white/60 text-sm">© 2024 Progmize. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="font-inter text-white/60 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-inter text-white/60 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="font-inter text-white/60 text-sm hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};