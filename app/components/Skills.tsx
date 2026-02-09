import { Code, Terminal, Cpu } from "lucide-react";
// import { portfolioData } from "../pages/Portfolio";
import portfolioData from "../../public/info.json";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * COMPONENT: Skills Section (3D Tilt Cards)
 */
const Skills = ({}) => {
  const { ref, isVisible } = useScrollReveal();
  const techCategories = [
    {
      name: "Technical",
      icon: <Code />,
      skills: portfolioData.skills.technical,
    },
    {
      name: "Tools & DevOps",
      icon: <Terminal />,
      skills: portfolioData.skills.tools,
    },
    {
      name: "Generative AI",
      icon: <Cpu />,
      skills: portfolioData.skills.generative_ai,
    },
  ];

  return (
    <section id="skills" className="py-32 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-blue-500 font-mono text-sm tracking-widest mb-4">
            THE ARSENAL
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Technical Proficiency
          </h3>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {techCategories.map((category, idx) => (
            <div
              key={idx}
              className={`
                group p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-blue-500/50 hover:bg-white/5 transition-all duration-500
                transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
              `}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h4 className="text-2xl font-bold mb-6 group-hover:text-blue-400 transition-colors">
                {category.name}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm text-gray-400 border border-white/10 rounded-full hover:border-white/30 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
