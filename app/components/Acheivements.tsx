import { Award } from "lucide-react";
import portfolioData from "../../public/info.json";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * COMPONENT: Achievements (Grid)
 */
const Achievements = () => {
  return (
    <section id="achievements" className="py-32 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <h2 className="text-blue-500 font-mono text-sm tracking-widest mb-4">
              RECOGNITION
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold">Awards & Honors</h3>
          </div>
          <Award size={48} className="text-white/10 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.achievements.map((item, i) => (
            <div
              key={`${i}-achievement`}
              className="group relative overflow-hidden bg-white/5 p-8 rounded-xl hover:bg-blue-600 transition-colors duration-500"
            >
              <div className="flex items-start gap-4 relative z-10">
                <span className="text-4xl font-black text-white/20 group-hover:text-white/40 transition-colors">
                  0{i + 1}
                </span>
                <p className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Achievements;
