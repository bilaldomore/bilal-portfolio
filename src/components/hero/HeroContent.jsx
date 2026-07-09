import { motion } from "framer-motion";
import HeroTyping from "../ui/HeroTyping";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: FaGithub,
    link: "https://github.com/bilaldomore",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/bilal-nasir-nonari/",
  },
  {
    icon: FaEnvelope,
    link: "mailto:bilalnasir2910@gmail.com",
  },
];

function HeroContent() {
  return (
    <motion.div
      className="space-y-8"
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Available Badge */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300">
          <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
          Available for Freelance
        </span>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-xl text-gray-400 mb-3">
          Hello, I'm
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
            Muhammad
          </span>

          <br />

          Bilal Nasir
        </h1>
      </motion.div>

      {/* Typing */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <HeroTyping />
      </motion.div>

      {/* Description */}
      <motion.p
        className="text-base sm:text-lg text-gray-400 leading-8 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        I build modern, responsive and high-performance websites using
        React, WordPress, Shopify and SEO, helping businesses grow with
        clean code and exceptional user experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        {/* Let's Talk */}
        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(139,92,246,.6)",
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-3 bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-full font-semibold"
        >
          Let's Talk
          <FaArrowRight />
        </motion.a>

        {/* Download CV */}
        <motion.a
          href="/Muhammad_Bilal_MERN_DEV(1).pdf"
          download
          whileHover={{
            scale: 1.05,
            backgroundColor: "#7C3AED",
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-3 border border-violet-500 px-8 py-4 rounded-full font-semibold"
        >
          Download CV
          <FaDownload />
        </motion.a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex justify-center lg:justify-start gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        {socialLinks.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                rotate: 10,
              }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-[#0B1120] border border-white/10 flex items-center justify-center hover:bg-violet-600 transition-all duration-300"
            >
              <Icon className="text-lg" />
            </motion.a>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;