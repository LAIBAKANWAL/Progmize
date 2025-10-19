import React from "react";

const processSteps = [
  {
    number: "01",
    icon: "🔍",
    title: "Explore Services",
    description: "Visit our Services page to discover what fits your needs.",
  },
  {
    number: "02",
    icon: "📋",
    title: "Submit Your Request",
    description: "Choose a service and share your requirements or book an appointment.",
  },
  {
    number: "03",
    icon: "📄",
    title: "Receive Proposal",
    description: "Our team will get back to you with a tailored proposal and competitive quotation.",
  },
  {
    number: "04",
    icon: "✓",
    title: "Confirm & Start Project",
    description: "Agree on terms and initiate the project with our expert team.",
  },
  {
    number: "05",
    icon: "🎯",
    title: "Get Your Solution",
    description: "Receive a market-ready, high-quality solution provided on time and within scope.",
  },
];

export const ProcessSection = () => {
  return (


    <>
    <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16 lg:px-[129px] py-16 sm:py-20">

      {/* Desktop Circular Layout */}
      <div className="hidden lg:block relative w-full max-w-[1100px] mx-auto" style={{ height: '900px' }}>

        {/* Center Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 flex items-center justify-center z-10">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="src/assets/images/Progmize heart 2.png"
              alt="Progmize Logo"
              className="w-48 h-48 object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Step 01 - Top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72">
          <div className="bg-gradient-to-br from-[#023189] to-[#010D23] rounded-full w-72 h-72 shadow-2xl flex flex-col items-center justify-center text-center p-8 relative border-4 border-gray-400">
            {/* Number Badge */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex items-center px-4 py-2 mt-6">
              <span className="text-[#023189] font-bold text-2xl">
                <img src="src/assets/images/Search More.png" alt="" />
              </span>
              <span className="text-[white] font-bold text-2xl">01</span>
            </div>
            <h3 className="font-inter font-bold text-white text-2xl mb-3 mt-4">{processSteps[0].title}</h3>
            <p className="font-inter text-white text-base leading-relaxed">{processSteps[0].description}</p>
          </div>
          {/* Arrow Down-Right */}
          <div className="absolute bottom-60 right-1 transform translate-y-16 translate-x-12">
            <img src="src/assets/images/Up 6.png" alt="arrow" className="w-20 h-20 rotate-90" />
          </div>
        </div>

        {/* Step 02 - Right */}
        <div className="absolute top-32 right-0 w-72">
          <div className="bg-gradient-to-br from-[#023189] to-[#010D23] rounded-full w-72 h-72 shadow-2xl flex flex-col items-center justify-center text-center p-8 relative border-4 border-gray-400">
            {/* Number Badge */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex items-center px-4 py-2 mt-6">
              <span className="text-[#023189] font-bold text-2xl">
                <img src="src/assets/images/Submit Document.png" alt="" />
              </span>              <span className="text-[white] font-bold text-2xl">02</span>
            </div>
            <h3 className="font-inter font-bold text-white text-2xl mb-3 mt-4">{processSteps[1].title}</h3>
            <p className="font-inter text-white text-base leading-relaxed">{processSteps[1].description}</p>
          </div>
          {/* Arrow Down */}
          <div className="absolute bottom-0 left-16 transform translate-y-16">
            <img src="src/assets/images/Up 6.png" alt="arrow" className="w-20 h-20 rotate-180" />
          </div>
        </div>

        {/* Step 03 - Bottom Right */}
        <div className="absolute bottom-0 right-24 w-72">
          <div className="bg-gradient-to-br from-[#023189] to-[#010D23] rounded-full w-72 h-72 shadow-2xl flex flex-col items-center justify-center text-center p-8 relative border-4 border-gray-400">
            {/* Number Badge */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex items-center px-4 py-2 mt-6">
              <span className="text-[#023189] font-bold text-2xl">
                <img src="src/assets/images/Submit Document.png" alt="" />
              </span>
              <span className="text-[white] font-bold text-2xl">03</span>
            </div>
            <h3 className="font-inter font-bold text-white text-2xl mb-3 mt-4">{processSteps[2].title}</h3>
            <p className="font-inter text-white text-base leading-relaxed">{processSteps[2].description}</p>
          </div>
          {/* Arrow Left */}
          <div className="absolute top-1/2 left-0 -translate-x-20 -translate-y-1/2">
            <img src="src/assets/images/Up 6.png" alt="arrow" className="w-20 h-20 -rotate-90" />
          </div>
        </div>

        {/* Step 04 - Bottom Left */}
        <div className="absolute bottom-0 left-24 w-72">
          <div className="bg-gradient-to-br from-[#023189] to-[#010D23] rounded-full w-72 h-72 shadow-2xl flex flex-col items-center justify-center text-center p-8 relative border-4 border-gray-400">
            {/* Number Badge */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex items-center px-4 py-2 mt-6">
              <span className="text-[#023189] font-bold text-2xl">
                <img src="src/assets/images/Recieve.png" alt="" />
              </span>
              <span className="text-[white] font-bold text-2xl">04</span>
            </div>
            <h3 className="font-inter font-bold text-white text-2xl mb-3 mt-4">{processSteps[3].title}</h3>
            <p className="font-inter text-white text-base leading-relaxed">{processSteps[3].description}</p>
          </div>
          {/* Arrow Up-Left */}
          <div className="absolute top-0 left-8 -translate-y-16 -translate-x-8">
            <img src="src/assets/images/Up 6.png" alt="arrow" className="w-20 h-20" />
          </div>
        </div>

        {/* Step 05 - Left */}
        <div className="absolute top-32 left-0 w-72">
          <div className="bg-gradient-to-br from-[#023189] to-[#010D23] rounded-full w-72 h-72 shadow-2xl flex flex-col items-center justify-center text-center p-8 relative border-4 border-gray-400">
            {/* Number Badge */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex items-center px-4 py-2 mt-6">
              <span className="text-[#023189] font-bold text-2xl">
                <img src="src/assets/images/Submit Document.png" alt="" />
              </span>
              <span className="text-[white] font-bold text-2xl">05</span>
            </div>
            <h3 className="font-inter font-bold text-white text-2xl mb-3 mt-4">{processSteps[4].title}</h3>
            <p className="font-inter text-white text-base leading-relaxed">{processSteps[4].description}</p>
          </div>
          {/* Arrow Up */}
          <div className="absolute top-0 right-16 -translate-y-16">
            <img src="src/assets/images/Up 6.png" alt="arrow" className="w-20 h-20" />
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Vertical Layout */}
      <div className="lg:hidden flex flex-col gap-6 sm:gap-8 max-w-2xl mx-auto">
        {processSteps.map((step, index) => (
          <div key={index} className="relative">
            <div className="bg-gradient-to-br from-[#023189] to-[#010D23] rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-white">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl sm:text-3xl">{step.icon}</span>
                    <span className="text-[#023189] font-bold text-sm sm:text-base">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-inter font-bold text-white text-xl sm:text-2xl mb-2">
                    {step.title}
                  </h3>
                </div>
              </div>
              <p className="font-inter text-white text-base sm:text-lg leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Arrow between steps */}
            {index < processSteps.length - 1 && (
              <div className="flex justify-center py-3">
                <img src="src/assets/images/Up 6.png" alt="arrow" className="w-12 h-12 rotate-180" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

   <div className="relative overflow-hidden h-[350px]">
  <img
    src="src/assets/images/Group phone.png"
    alt=""
    className="absolute right-10 top-0 h-[600px] z-[1]"
  />
</div>



</>
  );
};