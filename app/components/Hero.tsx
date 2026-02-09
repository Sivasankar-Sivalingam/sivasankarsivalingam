import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
const resumePdf = "/resume.pdf";

/**
 * COMPONENT: Hero Section with Typing Effect
 */
const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    "Frontend Lead",
    "React Specialist",
    "Angular Expert",
    "Principal Engineer",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 3D Animated Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20 perspective-1000">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-size-[50px_50px] transform-[rotateX(60deg)_scale(2)] animate-grid-flow"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <p className="text-blue-500 font-mono text-lg mb-6 tracking-widest animate-fade-in-up">
          HELLO, WORLD. I AM
        </p>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tight animate-fade-in-up delay-100">
          SIVASANKAR
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-500 to-gray-800">
            SIVALINGAM
          </span>
        </h1>

        <div className="h-16 mb-8 flex justify-center items-center">
          <span className="text-2xl md:text-4xl text-gray-400 font-light">
            <span className="text-white font-semibold border-b-2 border-blue-500">
              {text}
            </span>
            <span className="animate-blink">|</span>
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center animate-fade-in-up delay-300">
          <a
            href="#experience"
            className="px-10 py-4 bg-transparent border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Explore Work
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href={resumePdf}
            download
            className="px-10 py-4 bg-purple-950 text-white font-bold text-lg rounded-full hover:bg-purple-900 hover:text-white transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-transparent via-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
