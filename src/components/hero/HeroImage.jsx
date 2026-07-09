import { motion } from "framer-motion";
import profile from "../../assets/img/profile.png";
import FloatingIcons from "./FloatingIcons";

function HeroImage() {
  return (
    <motion.div
      className="flex justify-center"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] flex items-center justify-center">

        {/* Animated Glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full bg-violet-600 blur-[120px]"
        />

        {/* Floating Icons */}
        <FloatingIcons />

        {/* Profile Image */}
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.05,
            rotate: 2,
          }}
          className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border-4 border-violet-500 shadow-[0_0_60px_rgba(124,58,237,0.5)]"
        >
          <img
            src={profile}
            alt="Bilal"
            className="w-full h-full object-contain"
          />
        </motion.div>

      </div>
    </motion.div>
  );
}

export default HeroImage;