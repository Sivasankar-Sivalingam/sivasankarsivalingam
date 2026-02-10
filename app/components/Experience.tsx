import portfolioData from "../../public/info.json";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * COMPONENT: Experience Section (Timeline)
 */
const Experience = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-blue-500 font-mono text-sm tracking-widest mb-4">
            THE JOURNEY
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">Experience</h3>
        </div>

        <div ref={ref} className="space-y-12">
          {portfolioData.experience.map((job, index) => (
            <div
              key={index}
              className={`
                relative border-l border-white/10 pl-8 md:pl-12 py-4 transition-all duration-700
                ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-1.25 top-8 w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">
                    {job.role}
                  </h4>
                  <p className="text-blue-400 text-lg font-medium">
                    {job.company}
                  </p>
                </div>
                <div className="text-right md:text-left">
                  <span className="inline-block px-4 py-1 bg-white/5 rounded-full text-sm text-gray-300 font-mono border border-white/10">
                    {job.dates}
                  </span>
                </div>
              </div>

              <div className="p-6 bg-[#0a0a0a] rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <p className="text-sm text-gray-500 mb-4 font-mono">
                  {job.client_project}
                </p>
                <ul className="space-y-3 mb-6">
                  {job.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="text-gray-400 text-sm leading-relaxed flex items-start"
                    >
                      <span className="text-blue-500 mr-3 mt-1.5 text-xs">
                        ▹
                      </span>
                      {resp}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {job.tech_stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-blue-300/80 font-mono"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;
