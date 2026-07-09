import { FaRobot, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

function ChatHeader({ onClose }) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gradient-to-r from-violet-600 to-indigo-600 p-5 flex justify-between items-center"
    >
      <div className="flex items-center gap-3">

        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
          <FaRobot className="text-white text-xl" />
        </div>

        <div>
          <h2 className="text-white font-bold text-lg">
            Bilal AI Assistant
          </h2>

          <div className="flex items-center gap-2 text-sm text-white/80">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Online
          </div>
        </div>

      </div>

      <button
        onClick={onClose}
        className="text-white text-xl hover:rotate-90 transition duration-300"
      >
        <FaTimes />
      </button>
    </motion.div>
  );
}

export default ChatHeader;