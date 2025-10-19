import React, { useState } from "react";

const navigationItems = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "About Us", href: "#about" },
  { label: "Careers", href: "#careers" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full h-32 sm:h-36 md:h-[152px] bg-gradient-to-r from-[#023189] to-[#010d23] shadow-[inset_0px_4px_4px_#00000040] z-50 bg-cover bg-center relative"
        style={{ backgroundImage: "url('src/assets/images/Rectangle 8.png')" }}
      >
        <div className="max-w-[1440px] mx-auto h-full relative px-4 sm:px-6 md:px-7">

          {/* Logo */}
          <img
            className="absolute top-4 sm:top-5 md:top-[18px] left-4 sm:left-5 md:left-7 w-32 sm:w-40 md:w-[250px] h-auto md:h-[90px] object-contain"
            alt="Progmize Logo"
            src="src/assets/images/logo.png"
          />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute top-6 sm:top-7 right-4 z-50 text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Contact Info - Top Row - Hidden on tablets and below */}
          <div className="hidden lg:flex absolute top-8 left-[29%] xl:left-[421px] gap-3 xl:gap-4 items-center">
            {/* WhatsApp Icon */}
            <div className="w-[32px] h-[32px] xl:w-[38px] xl:h-[38px] flex items-center justify-center rounded-full border-2 border-white bg-gradient-to-b from-[#023189] to-[#010d23]">
              <i className="fa-brands fa-whatsapp text-white text-lg xl:text-xl"></i>
            </div>

            {/* Telegram Icon */}
            <div className="w-[32px] h-[32px] xl:w-[38px] xl:h-[38px] flex items-center justify-center rounded-full border-2 border-white bg-gradient-to-b from-[#023189] to-[#010d23]">
              <i className="fa-brands fa-telegram-plane text-white text-lg xl:text-xl"></i>
            </div>

            {/* Phone */}
            <div className="font-inter font-bold text-white text-xs lg:text-sm xl:text-base whitespace-nowrap">
              +971508940143
            </div>

            {/* Email Icon */}
            <div className="w-[32px] h-[32px] xl:w-[38px] xl:h-[38px] flex items-center justify-center rounded-full border-2 border-white bg-gradient-to-b from-[#023189] to-[#010d23]">
              <i className="fa-regular fa-envelope text-white text-base xl:text-lg"></i>
            </div>

            {/* Email */}
            <div className="font-inter font-bold text-white text-xs lg:text-sm xl:text-base whitespace-nowrap">
              info@progmize.com
            </div>
          </div>

          {/* Language Switcher - Desktop */}
          <div className="hidden md:flex absolute top-[24px] sm:top-[27px] right-24 sm:right-28 lg:right-36 xl:right-20 items-center">
            <div className="relative w-[90px] sm:w-[104px] h-[30px] sm:h-[34px] bg-white rounded-[40px] border border-[#FFB81D] shadow-[inset_2px_2px_2px_#00000040] cursor-pointer" onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}>
              <div
                className={`absolute top-0 w-11 sm:w-14 h-[30px] sm:h-[34px] bg-[#FFB81D] rounded-[40px] border border-black shadow-[1px_1px_4px_#00000040] transition-all duration-300 ${
                  language === "en" ? "left-0" : "left-[42px] sm:left-[48px]"
                }`}
              />
              <div className={`absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 font-inter font-semibold text-sm sm:text-base transition-colors duration-300 z-10 ${language === 'en' ? 'text-white [text-shadow:0px_4px_4px_#00000040]' : 'text-[#474747]'}`}>
                Eng
              </div>
              <div className={`absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 font-inter font-semibold text-sm sm:text-base transition-colors duration-300 z-10 ${language === 'ar' ? 'text-white [text-shadow:0px_4px_4px_#00000040]' : 'text-[#474747]'}`} dir="rtl">
                عربي
              </div>
            </div>
          </div>

          {/* Get Quote Button */}
          <div className="hidden md:block absolute top-[78px] sm:top-[86px] right-4 sm:right-7 lg:right-10 xl:right-14">
            <div className="relative">
              <img className="w-[140px] sm:w-[160px] lg:w-[186px] h-[45px] sm:h-[60px]" alt="Rectangle" src="src/assets/images/Rectangle 51-1.png" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-3.51deg] [text-shadow:4px_4px_4px_#00000040] font-monomaniac text-white text-lg sm:text-xl lg:text-2xl whitespace-nowrap">
                GET QUOTE
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <img className="hidden lg:block absolute top-[78px] left-[29%] xl:left-[421px] right-4 h-px w-auto object-cover" alt="Line" src="src/assets/images/line 76.png" />

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex gap-6 xl:gap-[61px] absolute top-[86px] sm:top-[91px] left-[29%] xl:left-[421px]">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="[text-shadow:5px_2px_4px_#00000040] font-monomaniac text-white text-base lg:text-lg xl:text-[20px] tracking-[0] leading-[normal] hover:text-[#FFB81D] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Navigation - Mobile & Tablet */}
          {menuOpen && (
            <div className="lg:hidden absolute top-32 sm:top-36 left-0 w-full bg-gradient-to-r from-[#023189] to-[#010d23] shadow-lg">
              <nav className="flex flex-col py-4">
                {navigationItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="px-6 py-3 font-monomaniac text-white text-xl sm:text-2xl hover:bg-white/10 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}

                {/* Mobile Contact Info */}
                <div className="px-6 py-4 border-t border-white/20 mt-2">
                  <div className="flex items-center gap-3 mb-3">
                    <i className="fa-brands fa-whatsapp text-white text-xl"></i>
                    <span className="text-white font-inter text-sm">+971508940143</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa-regular fa-envelope text-white text-xl"></i>
                    <span className="text-white font-inter text-sm">info@progmize.com</span>
                  </div>
                </div>

                {/* Mobile Language Switcher */}
                <div className="px-6 py-4 border-t border-white/20">
                  <div className="relative w-[180px] sm:w-[200px] h-[40px] sm:h-[44px] bg-white rounded-[40px] border border-[#FFB81D] shadow-[inset_2px_2px_2px_#00000040] cursor-pointer mx-auto" onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}>
                    <div className={`absolute top-0 w-[90px] sm:w-[100px] h-[40px] sm:h-[44px] bg-[#FFB81D] rounded-[40px] border border-black shadow-[1px_1px_4px_#00000040] transition-all duration-300 ${language === 'en' ? 'left-0' : 'left-[90px] sm:left-[100px]'}`} />
                    <div className={`absolute left-5 sm:left-6 top-1/2 -translate-y-1/2 font-inter font-semibold text-base sm:text-lg transition-colors duration-300 z-10 ${language === 'en' ? 'text-white [text-shadow:0px_4px_4px_#00000040]' : 'text-[#474747]'}`}>
                      Eng
                    </div>
                    <div className={`absolute right-5 sm:right-6 top-1/2 -translate-y-1/2 font-inter font-semibold text-base sm:text-lg transition-colors duration-300 z-10 ${language === 'ar' ? 'text-white [text-shadow:0px_4px_4px_#00000040]' : 'text-[#474747]'}`} dir="rtl">
                      عربي
                    </div>
                  </div>
                </div>

                {/* Mobile Get Quote */}
                <div className="px-6 py-4">
                  <button className="w-full py-3 bg-[#FFB81D] rounded-lg text-white font-monomaniac text-xl sm:text-2xl shadow-lg">
                    GET QUOTE
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
        {/* Bottom Line anchored to header bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#023189] to-[#010d23] z-40" />
      </header>
    </>
  );
};