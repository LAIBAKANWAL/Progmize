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
      <header className="sticky top-0 left-0 w-full bg-gradient-to-r from-[#023189] to-[#010d23] shadow-[inset_0px_4px_4px_#00000040] z-50 bg-cover bg-center" style={{ backgroundImage: "url('src/assets/images/Rectangle 8.png')" }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between py-4 md:py-5">
            {/* Logo */}
            <img
              className="w-32 sm:w-40 md:w-56 h-auto object-contain"
              alt="Progmize Logo"
              src="src/assets/images/logo.png"
            />

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              {/* Desktop contact strip */}
              <div className="hidden lg:flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white bg-gradient-to-b from-[#023189] to-[#010d23]">
                  <i className="fa-brands fa-whatsapp text-white text-lg"></i>
                </div>
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white bg-gradient-to-b from-[#023189] to-[#010d23]">
                  <i className="fa-brands fa-telegram-plane text-white text-lg"></i>
                </div>
                <div className="font-inter font-bold text-white text-sm whitespace-nowrap">+971508940143</div>
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white bg-gradient-to-b from-[#023189] to-[#010d23]">
                  <i className="fa-regular fa-envelope text-white text-base"></i>
                </div>
                <div className="font-inter font-bold text-white text-sm whitespace-nowrap">info@progmize.com</div>
              </div>

              {/* Language Switcher - Desktop */}
              <div className="hidden md:flex items-center">
                <div className="relative w-[104px] h-[34px] bg-white rounded-[40px] border border-[#FFB81D] shadow-[inset_2px_2px_2px_#00000040] cursor-pointer" onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}>
                  <div className={`absolute top-0 w-14 h-[34px] bg-[#FFB81D] rounded-[40px] border border-black shadow-[1px_1px_4px_#00000040] transition-all duration-300 ${language === 'en' ? 'left-0' : 'left-[48px]'}`} />
                  <div className={`absolute left-3 top-1/2 -translate-y-1/2 font-inter font-semibold text-base transition-colors duration-300 z-10 ${language === 'en' ? 'text-white [text-shadow:0px_4px_4px_#00000040]' : 'text-[#474747]'}`}>Eng</div>
                  <div className={`absolute right-3 top-1/2 -translate-y-1/2 font-inter font-semibold text-base transition-colors duration-300 z-10 ${language === 'ar' ? 'text-white [text-shadow:0px_4px_4px_#00000040]' : 'text-[#474747]'}`} dir="rtl">عربي</div>
                </div>
              </div>

              {/* Desktop Get Quote */}
              <div className="hidden md:block">
                <div className="relative">
                  <img className="w-[186px] h-[60px]" alt="Rectangle" src="src/assets/images/Rectangle 51-1.png" />
                  <div className="absolute inset-0 grid place-items-center rotate-[-3.51deg] [text-shadow:4px_4px_4px_#00000040] font-monomaniac text-white text-2xl">
                    GET QUOTE
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>

          {/* Divider Line and Nav */}
          <div className="hidden lg:block">
            <img className="w-full h-px object-cover opacity-70" alt="Line" src="src/assets/images/line 76.png" />
            <nav className="flex gap-8 py-3">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="[text-shadow:5px_2px_4px_#00000040] font-monomaniac text-white text-lg xl:text-[20px] hover:text-[#FFB81D] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile & Tablet Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-white/20">
            <nav className="flex flex-col py-4 px-4">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="px-2 py-3 font-monomaniac text-white text-xl hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div className="px-2 py-4 border-t border-white/20 mt-2">
                <div className="flex items-center gap-3 mb-3">
                  <i className="fa-brands fa-whatsapp text-white text-xl"></i>
                  <span className="text-white font-inter text-sm">+971508940143</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fa-regular fa-envelope text-white text-xl"></i>
                  <span className="text-white font-inter text-sm">info@progmize.com</span>
                </div>
              </div>

              <div className="px-2 py-4 border-t border-white/20">
                <div className="relative w-[200px] h-[44px] bg-white rounded-[40px] border border-[#FFB81D] shadow-[inset_2px_2px_2px_#00000040] cursor-pointer" onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}>
                  <div className={`absolute top-0 w-[100px] h-[44px] bg-[#FFB81D] rounded-[40px] border border-black shadow-[1px_1px_4px_#00000040] transition-all duration-300 ${language === 'en' ? 'left-0' : 'left-[100px]'}`} />
                  <div className={`absolute left-6 top-1/2 -translate-y-1/2 font-inter font-semibold text-lg transition-colors duration-300 z-10 ${language === 'en' ? 'text-white [text-shadow:0px_4px_4px_#00000040]' : 'text-[#474747]'}`}>Eng</div>
                  <div className={`absolute right-6 top-1/2 -translate-y-1/2 font-inter font-semibold text-lg transition-colors duration-300 z-10 ${language === 'ar' ? 'text-white [text-shadow:0px_4px_4px_#00000040]' : 'text-[#474747]'}`} dir="rtl">عربي</div>
                </div>
              </div>

              <div className="px-2 py-4">
                <button className="w-full py-3 bg-[#FFB81D] rounded-lg text-white font-monomaniac text-2xl shadow-lg">
                  GET QUOTE
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};