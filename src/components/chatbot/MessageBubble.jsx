import ReactMarkdown from "react-markdown";
import { FaUser, FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

function MessageBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isUser ? 40 : -40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 0.3 }}
      className={`flex gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center">
          <FaRobot />
        </div>
      )}

      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-violet-600 text-white"
            : "bg-slate-700 text-gray-100"
        }`}
      >
        <ReactMarkdown>{message.text}</ReactMarkdown>
      </div>

      {isUser && (
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
          <FaUser />
        </div>
      )}
    </motion.div>
  );
}

export default MessageBubble;import ReactMarkdown from "react-markdown";
import { FaUser, FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

function MessageBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isUser ? 40 : -40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 0.3 }}
      className={`flex gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center">
          <FaRobot />
        </div>
      )}

      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-violet-600 text-white"
            : "bg-slate-700 text-gray-100"
        }`}
      >
        <ReactMarkdown>{message.text}</ReactMarkdown>
      </div>

      {isUser && (
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
          <FaUser />
        </div>
      )}
    </motion.div>
  );
}

export default MessageBubble;