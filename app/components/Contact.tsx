import { Mail, Linkedin, Github, Globe } from "lucide-react";
import portfolioData from "../../public/info.json";

/**
 * COMPONENT: Contact
 */
const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 bg-black text-white relative overflow-hidden"
    >
      {/* Footer Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-125 bg-linear-to-t from-blue-900/20 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-blue-500 font-mono text-sm tracking-widest mb-6">
          WHAT'S NEXT?
        </h2>
        <h3 className="text-5xl md:text-7xl font-bold mb-8">Get In Touch</h3>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Currently open to new opportunities. Whether you have a question or
          just want to say hi, I'll try my best to get back to you!
        </p>

        <a
          href={`mailto:${portfolioData.profile.contact.email}`}
          className="inline-flex items-center px-10 py-5 bg-transparent border border-blue-500 text-blue-500 text-lg font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 group"
        >
          <Mail className="mr-3" />
          Say Hello
        </a>

        <div className="mt-32 flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            Designed & Built by Sivasankar Sivalingam
          </p>
          <div className="flex gap-6">
            <a
              href={portfolioData.profile.contact.linkedin}
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/Sivasankar-Sivalingam"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="Website"
            >
              <Globe />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
