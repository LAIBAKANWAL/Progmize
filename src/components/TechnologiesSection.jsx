import React from "react";

const technologyCategories = [
  {
    category: "Backend",
    technologies: [
      { name: "PHP", image: "src/assets/images/phplogo.png" },
      { name: "Node.js", image: "src/assets/images/NODE.png" },
      { name: ".Net", image: "src/assets/images/Net.png" },
      { name: "Java", image: "src/assets/images/java.png" },
    ],
  },
  {
    category: "Front-end",
    technologies: [
      { name: "React", image: "src/assets/images/react.png" },
      { name: "Angular", image: "src/assets/images/angular.png" },
      { name: "Vue", image: "src/assets/images/vue.png" },
      { name: "Next.js", image: "src/assets/images/angular.png" },
    ],
  },
  {
    category: "DevOps\n& Cloud",
    technologies: [
      { name: "Azure", image: "src/assets/images/azure.png" },
      { name: "AWS", image: "src/assets/images/aws.png" },
      { name: "Google Cloud", image: "src/assets/images/google.png" },
      { name: "Kubernetes", image: "src/assets/images/aws.png" },
    ],
  },
  {
    category: "AI & ML",
    technologies: [
      { name: "Python", image: "src/assets/images/python.png" },
      { name: "TensorFlow", image: "src/assets/images/Tensorflow.png" },
      { name: "PyTorch", image: "src/assets/images/Tensorflow.png" },
      { name: "OpenAI", image: "src/assets/images/gpt.png" },
      { name: "Scikit", image: "src/assets/images/python.png" },
      { name: "Meta", image: "src/assets/images/meta.png" },
    ],
  },
  {
    category: "QA",
    technologies: [
      { name: "Jenkins", image: "src/assets/images/meta.png" },
      { name: "Jira", image: "src/assets/images/meta.png" },
      { name: "Kibana", image: "src/assets/images/meta.png" },
      { name: "JMeter", image: "src/assets/images/meta.png" },
      { name: "Selenium", image: "src/assets/images/meta.png" },
    ],
  },
  {
    category: "UI/UX",
    technologies: [
      { name: "Figma", image: "src/assets/images/bootstrap.png" },
      { name: "Sketch", image: "src/assets/images/bootstrap.png" },
      { name: "Adobe XD", image: "src/assets/images/bootstrap.png" },
      { name: "InVision", image: "src/assets/images/bootstrap.png" },
      { name: "SurveyMonkey", image: "src/assets/images/bootstrap.png" },
      { name: "Miro", image: "src/assets/images/bootstrap.png" },
    ],
  },
];

export const TechnologiesSection = () => {
  return (
    // <section className="relative top-[1400px] sm:top-[1800px] md:top-[2400px] lg:top-[3027px] left-0 w-full px-4 sm:px-8 md:px-16 lg:px-[129px] py-8 sm:py-12 md:py-16">
       <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16 lg:px-[129px] py-12 sm:py-16">
      {/* Section Heading */}
      <h2 className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-[57px] font-inter font-bold text-[#023189] text-2xl sm:text-3xl md:text-4xl lg:text-[64px] tracking-[0] leading-tight">
        TECHNOLOGIES
      </h2>
      
      {/* Technologies Container */}
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-300">
        
        {/* Left Decorative Border */}
        <div className="absolute left-0 top-0 w-1 sm:w-2 h-full bg-gradient-to-b from-[#023189] via-blue-400 to-[#023189]" />
        
        {/* Technologies Grid */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-12">
          {technologyCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-6 lg:gap-8 items-center py-6 sm:py-8 md:py-10 lg:py-12 ${
                categoryIndex !== technologyCategories.length - 1 ? 'border-b-2 border-gray-300' : ''
              }`}
            >
              {/* Category Label */}
              <div className="bg-gradient-to-br from-[#023189] to-[#0a4db5] rounded-lg p-4 shadow-lg">
                <h3 className="font-inter font-bold text-white text-lg sm:text-xl md:text-2xl lg:text-[32px] tracking-[0] leading-tight text-center md:text-left whitespace-pre-line">
                  {category.category}
                </h3>
              </div>
              
              {/* Technology Icons Grid */}
              <div className={`grid gap-4 sm:gap-5 md:gap-6 ${
                category.technologies.length <= 4 
                  ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4' 
                  : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
              }`}>
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group bg-white rounded-xl p-3 sm:p-4 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-white hover:to-blue-50 min-h-[80px] sm:min-h-[90px] md:min-h-[100px]"
                  >
                    {tech.image ? (
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-full h-auto max-w-[60px] sm:max-w-[70px] md:max-w-[80px] object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <span className="font-inter font-bold text-[#023189] text-sm sm:text-base md:text-lg text-center">
                        {tech.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Decorative Border */}
        <div className="absolute bottom-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-[#023189] via-blue-400 to-[#023189]" />
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#023189] opacity-5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 opacity-5 rounded-full blur-3xl -z-10" />
    </section>
  );
};