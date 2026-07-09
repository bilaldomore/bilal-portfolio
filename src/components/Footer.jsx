import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#010818] border-t border-white/10 text-white pt-20 pb-8">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top */}

        <div className="grid md:grid-cols-3 gap-12">

          {/* Logo */}

          <div>

            <h2 className="text-4xl font-bold">
              Bilal<span className="text-violet-500">.</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-8">
              Passionate Full Stack Web Developer creating
              modern, responsive and user-friendly websites
              using React, WordPress and Shopify.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#111827] flex items-center justify-center hover:bg-violet-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#111827] flex items-center justify-center hover:bg-violet-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#111827] flex items-center justify-center hover:bg-violet-600 transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#111827] flex items-center justify-center hover:bg-violet-600 transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li><a href="#home" className="hover:text-violet-400">Home</a></li>

              <li><a href="#about" className="hover:text-violet-400">About</a></li>

              <li><a href="#skills" className="hover:text-violet-400">Skills</a></li>

              <li><a href="#projects" className="hover:text-violet-400">Projects</a></li>

              <li><a href="#contact" className="hover:text-violet-400">Contact</a></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>React Development</li>

              <li>WordPress Development</li>

              <li>Shopify Development</li>

              <li>SEO Optimization</li>

              <li>UI / UX Design</li>

            </ul>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between">

          <p className="text-gray-500 text-center">
            © 2026 Muhammad Bilal Nasir. All Rights Reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="mt-5 md:mt-0 w-12 h-12 rounded-full bg-violet-600 hover:bg-violet-700 transition flex items-center justify-center"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;