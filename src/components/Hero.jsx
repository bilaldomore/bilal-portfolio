import { motion } from "framer-motion";

import HeroContent from "./hero/HeroContent";
import HeroImage from "./hero/HeroImage";
import ScrollIndicator from "./hero/ScrollIndicator";

function Hero() {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen bg-[#020617] text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/20 blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[150px]" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 min-h-screen grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-24">

        {/* Left Side */}
        <div className="order-2 lg:order-1">
          <HeroContent />
        </div>

        {/* Right Side */}
        <div className="order-1 lg:order-2">
          <HeroImage />
        </div>

      </div>

      <ScrollIndicator />

    </motion.section>
  );
}

export default Hero;