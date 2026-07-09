import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B1120]/90 backdrop-blur-lg border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-bold text-white"
        >
          Bilal <span className="text-violet-500">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-violet-400 transition duration-300"
            >
              {link.name}
            </a>
          ))}

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <a
            href="#contact"
            className="hidden md:flex bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-full transition duration-300"
          >
            Let's Talk
          </a>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-white"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B1120] border-t border-white/10">

          <nav className="flex flex-col p-6 space-y-5">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-violet-400 transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-violet-600 text-white text-center py-3 rounded-full hover:bg-violet-700 transition"
            >
              Let's Talk
            </a>

          </nav>

        </div>
      )}

    </header>
  );
}

export default Navbar;