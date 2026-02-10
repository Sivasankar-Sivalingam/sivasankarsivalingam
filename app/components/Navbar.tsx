import { X, Menu } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * COMPONENT: Navigation Bar
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Skills", "Experience", "Achievements", "Contact"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-4" : "py-6"}`}
      >
        <div className={`max-w-7xl mx-auto px-6`}>
          <div
            className={`
            flex justify-between items-center rounded-2xl px-6 py-3 transition-all duration-500
            ${scrolled ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl" : "bg-transparent"}
          `}
          >
            {/* Logo */}
            <a
              href="#"
              className="text-2xl font-black tracking-tighter text-white z-50 mix-blend-difference"
            >
              SS<span className="text-blue-500">.</span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300 relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white z-50 focus:outline-none"
            >
              {isOpen ? (
                <X aria-label="Close Mobile Menu" size={24} />
              ) : (
                <Menu aria-label="Toggle Mobile Menu" size={24} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black flex items-center justify-center transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-gray-400 to-white hover:from-blue-400 hover:to-purple-500 transition-all duration-500 transform ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
