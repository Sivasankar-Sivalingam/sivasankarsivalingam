import portfolioData from "../../public/info.json";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * COMPONENT: About Section
 */
const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-32 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
        >
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-blue-500 font-mono text-sm tracking-widest mb-4">
              THE PROFILE
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Engineering{" "}
              <span className="italic text-gray-500">Excellence</span> <br />
              with Pixel Precision.
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {portfolioData.profile.summary}
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-blue-500  text-sm">Experience</p>
                <h4 className="text-white font-bold text-xl mb-1">10+ Years</h4>
              </div>
              <div>
                <p className="text-blue-500  text-sm">Location</p>
                <h4 className="text-white font-bold text-xl mb-1">
                  Chennai, IN
                </h4>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute inset-0 bg-purple-950 rounded-lg transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 group-active:translate-x-2 group-active:translate-y-2 transition-transform duration-300"></div>
            <div className="relative bg-[url('/siva_standalone.webp')] bg-cover sm:bg-top-left  aspect-3/4 rounded-lg overflow-hidden grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-500">
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-10"></div>
              {/* Visual Placeholder */}
              {/* <div className="w-full h-full flex items-center justify-center bg-gray-800">
              <User size={120} className="text-gray-600" />
            </div> */}

              <div className="absolute bottom-8 left-8 z-20">
                <p className="text-white font-bold text-xl">
                  {portfolioData.profile.name}
                </p>
                <p className="text-blue-500">{portfolioData.profile.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
