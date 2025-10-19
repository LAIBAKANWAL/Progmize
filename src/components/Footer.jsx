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
    <footer
      className="absolute top-[5650px] left-0 w-full bg-gradient-to-r from-[#023189] to-[#010d23] px-[115px] pt-14 pb-8 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('src/assets/images/Group 1000005857.png'), url('src/assets/images/Rectangle 60.png')",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "right -60px bottom -30px, left -120px top -40px",
        backgroundSize: "auto, auto",
      }}
    >
      {/* White content panel with angled right edge */}
      <div className="relative z-10 mx-auto max-w-[1210px]">
        <div
          className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] px-10 py-12 md:px-12 md:py-14"
          style={{
            borderRadius: "20px",
            clipPath:
              "polygon(0 0, 78% 0, 88% 10%, 95% 78%, 88% 100%, 0 100%)",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div>
              <h4 className="font-inter font-bold text-[#023189] text-xl mb-6">Services</h4>
              <ul className="space-y-3">
                {footerServices.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-inter text-[#222]/80 text-sm hover:text-[#023189] transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-inter font-bold text-[#023189] text-xl mb-6">Industries</h4>
              <ul className="space-y-3">
                {footerIndustries.map((industry, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-inter text-[#222]/80 text-sm hover:text-[#023189] transition-colors"
                    >
                      {industry}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-inter font-bold text-[#023189] text-xl mb-6">Company</h4>
              <ul className="space-y-3">
                {footerCompany.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-inter text-[#222]/80 text-sm hover:text-[#023189] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-inter font-bold text-[#023189] text-xl mb-6">Insights</h4>
              <ul className="space-y-3">
                {footerInsights.map((insight, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-inter text-[#222]/80 text-sm hover:text-[#023189] transition-colors"
                    >
                      {insight}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-inter font-bold text-[#023189] text-xl mb-6">Other</h4>
              <ul className="space-y-3">
                {footerOther.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-inter text-[#222]/80 text-sm hover:text-[#023189] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-inter font-bold text-[#023189] text-xl mb-6">Solutions</h4>
              <ul className="space-y-3">
                {footerSolutions.map((solution, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-inter text-[#222]/80 text-sm hover:text-[#023189] transition-colors"
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

      {/* Right side contact panel on the gradient area */}
      <div className="absolute top-10 right-[115px] z-20 max-w-[280px] text-white">
        <h4 className="font-inter font-bold text-xl mb-4">Contact us</h4>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-white bg-gradient-to-b from-[#023189] to-[#010d23]">
              <i className="fa-solid fa-phone text-white"></i>
            </span>
            <span className="font-inter text-white/90 text-sm">+971508940143</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-white bg-gradient-to-b from-[#023189] to-[#010d23]">
              <i className="fa-regular fa-envelope text-white"></i>
            </span>
            <span className="font-inter text-white/90 text-sm">info@progmize.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-white bg-gradient-to-b from-[#023189] to-[#010d23]">
              <i className="fa-solid fa-location-dot text-white"></i>
            </span>
            <span className="font-inter text-white/90 text-sm">Dubai Internet City</span>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4 mt-6">
          <i className="fa-brands fa-square-instagram text-2xl text-white/90 hover:text-white transition-colors"></i>
          <i className="fa-brands fa-tiktok text-2xl text-white/90 hover:text-white transition-colors"></i>
          <i className="fa-brands fa-square-facebook text-2xl text-white/90 hover:text-white transition-colors"></i>
          <i className="fa-brands fa-linkedin text-2xl text-white/90 hover:text-white transition-colors"></i>
          <i className="fa-brands fa-x-twitter text-2xl text-white/90 hover:text-white transition-colors"></i>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 mt-10">
        <div className="border-t border-white/20 pt-6">
          <div className="flex justify-between items-center">
            <p className="font-inter text-white/70 text-sm">© 2024 Progmize (PVT) Limited All Rights Reserved</p>
            <div className="flex gap-6">
              <a href="#" className="font-inter text-white/70 text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-inter text-white/70 text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font-inter text-white/70 text-sm hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};