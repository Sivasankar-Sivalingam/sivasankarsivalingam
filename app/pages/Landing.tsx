"use client";
import { CustomCursor } from "../components/CustomCursor";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Achievements from "../components/Acheivements";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

/**
 * MAIN APP COMPONENT
 */

const Landing = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white cursor-none">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
};

export default Landing;
