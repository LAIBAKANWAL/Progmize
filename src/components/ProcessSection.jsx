import React from "react";

const processSteps = [
  {
    number: "01",
    title: "Explore Services",
    description: "Visit our Services page to discover what fits your needs.",
    icon: "",
    className: "top-0 left-[315px]",
  },
  {
    number: "02",
    title: "Submit Your Request",
    description: "Choose a service and share your requirements or book an appointment.",
    icon: "",
    className: "top-56 left-[641px]",
  },
  {
    number: "03",
    title: "Receive Proposal",
    description: "Our team will get back to you with a tailored proposal and competitive quotation.",
    icon: "",
    className: "top-[570px] left-[521px]",
  },
  {
    number: "04",
    title: "Confirm & Start Project",
    description: "Agree on terms and initiate the project with our expert team.",
    icon: "",
    className: "top-[570px] left-[147px]",
  },
  {
    number: "05",
    title: "Get Your Solution",
    description: "Receive a market-ready, high-quality solution provided on time and within scope.",
    icon: "",
    className: "top-[235px] left-0",
  },
];

export const ProcessSection = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16 lg:px-[129px] py-16 sm:py-20">
      <h2 className="text-center mb-16 font-inter font-bold text-progmize-blue text-[64px] tracking-[0] leading-[normal]">
        HOW IT WORKS
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {processSteps.map((step, index) => (
          <div key={index} className="w-full">
            <div className="bg-white rounded-lg p-6 shadow-lg h-full">
              <div className="text-6xl font-bold text-progmize-yellow mb-4">{step.number}</div>
              <h3 className="font-inter font-bold text-progmize-blue text-2xl mb-3">{step.title}</h3>
              <p className="font-inter text-black text-lg leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};