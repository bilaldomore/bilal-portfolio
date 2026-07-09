import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

function TypingIndicator() {
  return (
    <div className="flex gap-3 items-end">

      {/* AI Avatar */}
      <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center">
        <FaRobot className="text-white" />
      </div>

      {/* Bubble */}
      <div className="bg-slate-700 rounded-2xl px-5 py-4 flex gap-2">

        <motion.span
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
          className="w-2 h-2 rounded-full bg-white"
        />

        <motion.span
          animate={{ y: [0, -5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            delay: 0.2,
          }}
          className="w-2 h-2 rounded-full bg-white"
        />

        <motion.span
          animate={{ y: [0, -5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            delay: 0.4,
          }}
          className="w-2 h-2 rounded-full bg-white"
        />

      </div>

    </div>
  );
}

export default TypingIndicator;