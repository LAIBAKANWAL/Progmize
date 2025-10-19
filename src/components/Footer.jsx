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
    <footer className="relative w-full bg-gradient-to-r from-[#023189] to-[#010d23] overflow-hidden" style={{ backgroundImage: "url('src/assets/images/Rectangle 8.png')" }}>
      {/* Background Images */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('src/assets/images/Group 1000005857.png'), url('src/assets/images/Rectangle 8.png')",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "right -60px bottom -30px, left -120px top -40px",
          backgroundSize: "auto, auto",
        }}
      />

      <div className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-[115px] pt-12 sm:pt-14 md:pt-16 pb-8">
        
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-start justify-between">
          
          {/* White Panel with Angled Edge - Left Side */}
          <div className="w-full lg:w-[70%] xl:w-[75%]">
            <div
              className="bg-white shadow-2xl px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none relative"
              style={{
                clipPath: window.innerWidth >= 1024 
                  ? "polygon(0 0, 85% 0, 100% 8%, 100% 92%, 85% 100%, 0 100%)" 
                  : "none"
              }}
            >
              {/* Logo */}
              <div className="mb-8 lg:mb-10">
                <img 
                  src="src/assets/images/Group 24.png" 
                  alt="Progmize Software Systems" 
                  className="h-12 sm:h-16 md:h-20 object-contain"
                />
              </div>

              {/* Footer Links Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
                
                {/* Services */}
                <div>
                  <h4 className="font-inter font-bold text-[#023189] text-base sm:text-lg md:text-xl mb-4 border-b-2 border-[#FFB81D] pb-2 inline-block">
                    Services
                  </h4>
                  <ul className="space-y-2 mt-4">
                    {footerServices.map((service, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="font-inter text-gray-700 text-xs sm:text-sm hover:text-[#023189] hover:underline transition-colors block"
                        >
                          {service}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industries */}
                <div>
                  <h4 className="font-inter font-bold text-[#023189] text-base sm:text-lg md:text-xl mb-4 border-b-2 border-[#FFB81D] pb-2 inline-block">
                    Industries
                  </h4>
                  <ul className="space-y-2 mt-4">
                    {footerIndustries.map((industry, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="font-inter text-gray-700 text-xs sm:text-sm hover:text-[#023189] hover:underline transition-colors block"
                        >
                          {industry}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4 className="font-inter font-bold text-[#023189] text-base sm:text-lg md:text-xl mb-4 border-b-2 border-[#FFB81D] pb-2 inline-block">
                    Company
                  </h4>
                  <ul className="space-y-2 mt-4">
                    {footerCompany.map((item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="font-inter text-gray-700 text-xs sm:text-sm hover:text-[#023189] hover:underline transition-colors block"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Insights */}
                <div>
                  <h4 className="font-inter font-bold text-[#023189] text-base sm:text-lg md:text-xl mb-4 border-b-2 border-[#FFB81D] pb-2 inline-block">
                    Insights
                  </h4>
                  <ul className="space-y-2 mt-4">
                    {footerInsights.map((insight, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="font-inter text-gray-700 text-xs sm:text-sm hover:text-[#023189] hover:underline transition-colors block"
                        >
                          {insight}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rise with Progmize */}
                <div>
                  <h4 className="font-inter font-bold text-[#023189] text-base sm:text-lg md:text-xl mb-4 border-b-2 border-[#FFB81D] pb-2 inline-block">
                    Rise with Progmize
                  </h4>
                  <ul className="space-y-2 mt-4">
                    {footerOther.map((item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="font-inter text-gray-700 text-xs sm:text-sm hover:text-[#023189] hover:underline transition-colors block"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div>
                  <h4 className="font-inter font-bold text-[#023189] text-base sm:text-lg md:text-xl mb-4 border-b-2 border-[#FFB81D] pb-2 inline-block">
                    Solutions
                  </h4>
                  <ul className="space-y-2 mt-4">
                    {footerSolutions.map((solution, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="font-inter text-gray-700 text-xs sm:text-sm hover:text-[#023189] hover:underline transition-colors block"
                        >
                          {solution}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us - Right Side on Blue Background */}
          <div className="w-full lg:w-[28%] xl:w-[23%] lg:pl-8 lg:pt-20">
            <div className="rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/10">
              <h4 className="font-inter font-bold text-white text-xl sm:text-2xl mb-6">Contact us</h4>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white bg-gradient-to-b from-[#023189] to-[#010d23] flex-shrink-0">
                    <i className="fa-solid fa-phone text-white text-sm"></i>
                  </span>
                  <span className="font-inter text-white text-sm">+971508940143</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white bg-gradient-to-b from-[#023189] to-[#010d23] flex-shrink-0">
                    <i className="fa-regular fa-envelope text-white text-sm"></i>
                  </span>
                  <span className="font-inter text-white text-sm break-all">info@progmize.com</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white bg-gradient-to-b from-[#023189] to-[#010d23] flex-shrink-0">
                    <i className="fa-solid fa-location-dot text-white text-sm"></i>
                  </span>
                  <span className="font-inter text-white text-sm">Dubai Internet City</span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <a href="#" className="text-white hover:text-[#FFB81D] transition-colors">
                  <i className="fa-brands fa-square-instagram text-2xl"></i>
                </a>
                <a href="#" className="text-white hover:text-[#FFB81D] transition-colors">
                  <i className="fa-brands fa-tiktok text-2xl"></i>
                </a>
                <a href="#" className="text-white hover:text-[#FFB81D] transition-colors">
                  <i className="fa-brands fa-square-facebook text-2xl"></i>
                </a>
                <a href="#" className="text-white hover:text-[#FFB81D] transition-colors">
                  <i className="fa-brands fa-linkedin text-2xl"></i>
                </a>
                <a href="#" className="text-white hover:text-[#FFB81D] transition-colors">
                  <i className="fa-brands fa-x-twitter text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-8 sm:mt-10 md:mt-12 border-t border-white/20 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-inter text-white/80 text-xs sm:text-sm text-center sm:text-left">
              © Progmize (PVT) limited All Rights Reserved
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
              <a href="#" className="font-inter text-white/80 text-xs sm:text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-inter text-white/80 text-xs sm:text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font-inter text-white/80 text-xs sm:text-sm hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};