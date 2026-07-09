import { FaRobot } from "react-icons/fa";

function ChatButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-violet-600 hover:bg-violet-700 shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
    >
      <FaRobot className="text-white text-2xl" />
    </button>
  );
}

export default ChatButton;