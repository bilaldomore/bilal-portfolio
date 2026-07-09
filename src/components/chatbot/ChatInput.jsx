import { FaPaperPlane } from "react-icons/fa";

function ChatInput({
  message,
  setMessage,
  sendMessage,
  loading,
}) {
  return (
    <div className="p-4 border-t border-white/10 bg-[#0B1120]">

      <div className="flex items-center gap-3">

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Message Bilal AI..."
          disabled={loading}
          className="flex-1 bg-[#020617] border border-slate-700 rounded-full px-5 py-3 outline-none focus:border-violet-500 transition"
        />

        <button
          onClick={() => sendMessage()}
          disabled={loading}
          className="w-12 h-12 rounded-full bg-violet-600 hover:bg-violet-700 disabled:bg-slate-700 transition flex items-center justify-center"
        >
          <FaPaperPlane className="text-white" />
        </button>

      </div>

    </div>
  );
}

export default ChatInput;