import React from "react";

const technologyCategories = [
  {
    category: "Backend",
    technologies: [
      { name: "PHP", image: "", className: "top-[3264px] left-[484px] w-32 h-[67px]" },
      { name: "Node.js", image: "", className: "top-[3231px] left-[647px] w-[228px] h-[141px]" },
      { name: ".Net", text: ".Net", className: "top-[3263px] left-[913px] w-[94px] h-[81px]" },
      { name: "Java", image: "", className: "top-[3197px] left-[1039px] w-[164px] h-[163px]" },
    ],
  },
  {
    category: "Front-end",
    technologies: [
      { name: "React", image: "", className: "top-[3435px] left-[484px] w-[110px] h-[113px]" },
      { name: "Angular", image: "", className: "top-[3450px] left-[638px] w-[220px] h-[106px]" },
      { name: "Vue", image: "", className: "top-[3452px] left-[906px] w-[108px] h-[107px]" },
      { name: "Next.js", image: "", className: "top-[3434px] left-[1065px] w-[141px] h-[134px]" },
    ],
  },
  {
    category: "DevOps\n& Cloud",
    technologies: [
      { name: "Azure", image: "", className: "top-[3628px] left-[480px] w-[267px] h-[83px]" },
      { name: "AWS", image: "", className: "top-[3653px] left-[786px] w-[136px] h-[83px]" },
      { name: "Docker", image: "", className: "top-[3628px] left-[944px] w-[355px] h-24" },
    ],
  },
  {
    category: "AI & ML",
    technologies: [
      { name: "TensorFlow", image: "", className: "top-[3794px] left-[474px] w-[149px] h-[149px]" },
      { name: "PyTorch", image: "", className: "top-[3799px] left-[785px] w-[127px] h-[137px]" },
      { name: "OpenAI", image: "", className: "top-[3780px] left-[987px] w-[267px] h-[133px]" },
      { name: "Python", image: "", className: "top-[3951px] left-[490px] w-[106px] h-[107px]" },
      { name: "Scikit", image: "", className: "top-[3983px] left-[745px] w-[219px] h-12" },
      { name: "Keras", image: "", className: "top-[3921px] left-[1013px] w-[157px] h-[221px]" },
      { name: "Pandas", image: "", className: "top-[4060px] left-[449px] w-[211px] h-[106px]" },
      { name: "NumPy", image: "", className: "top-[4086px] left-[765px] w-[169px] h-16" },
      { name: "Jupyter", image: "", className: "top-[4076px] left-[1008px] w-[207px] h-[98px]" },
    ],
  },
  {
    category: "QA",
    technologies: [
      { name: "JMeter", image: "", className: "top-[4200px] left-[478px] w-[184px] h-[68px]" },
      { name: "Selenium", image: "", className: "top-[4193px] left-[800px] w-[99px] h-[99px]" },
    ],
  },
  {
    category: "UI/UX",
    technologies: [
      { name: "Figma", image: "", className: "top-[4310px] left-[503px] w-[92px] h-[93px]" },
      { name: "Sketch", image: "", className: "top-[4334px] left-[715px] w-[267px] h-[67px]" },
      { name: "Adobe XD", image: "", className: "top-[4329px] left-[1085px] w-[77px] h-[75px]" },
      { name: "InVision", image: "", className: "top-[4456px] left-[482px] w-[154px] h-[52px]" },
      { name: "Zeplin", image: "", className: "top-[4464px] left-[741px] w-[237px] h-9" },
      { name: "Marvel", image: "", className: "top-[4452px] left-[1036px] w-[163px] h-[79px]" },
    ],
  },
];

export const TechnologiesSection = () => {
  return (
    <section className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
      <h2 className="text-center mb-10 sm:mb-12 md:mb-16 font-inter font-bold text-progmize-blue text-3xl sm:text-4xl md:text-5xl">
        TECHNOLOGIES
      </h2>

      <div className="rounded-xl overflow-hidden">
        <img className="w-full max-h-[800px] object-cover" alt="Rectangle" src="/figmaAssets/rectangle-27.svg" />
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {technologyCategories.map((category, index) => (
          <div key={index} className="bg-white/80 rounded-lg p-6 shadow">
            <h3 className="font-inter font-bold text-progmize-blue text-2xl mb-4 whitespace-pre-line">
              {category.category}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {category.technologies.map((tech, techIndex) => (
                <li key={techIndex} className="px-3 py-1 rounded-full bg-[#FFB81D]/10 text-[#023189] font-inter text-sm">
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};