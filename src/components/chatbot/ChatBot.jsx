import { FaTrash } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { askGemini } from "../../services/gemini";
import ChatButton from "./ChatButton";
import TypingIndicator from "./TypingIndicator";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import { isPortfolioQuestion } from "../../utils/questionFilter";
import { getCommonReply } from "../../utils/chatReplies";


function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
  const savedMessages = localStorage.getItem("chatMessages");

  if (savedMessages) {
    setMessages(JSON.parse(savedMessages));
  }
}, []);
useEffect(() => {
  localStorage.setItem(
    "chatMessages",
    JSON.stringify(messages)
  );
}, [messages]);

  const bottomRef = useRef(null);

  const suggestions = [
    "Tell me about Bilal",
    "Show MERN projects",
    "What technologies do you use?",
    "How can I hire Bilal?",
  ];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

 const sendMessage = async (customMessage = "") => {
  const currentMessage = customMessage || message;

  if (!currentMessage.trim()) return;

  // Add user message
  const userMessage = {
    role: "user",
    text: currentMessage,
  };

  setMessages((prev) => [...prev, userMessage]);

  // Clear input
  setMessage("");

  // ==========================
  // Common Replies
  // ==========================
  const commonReply = getCommonReply(currentMessage);

  if (commonReply) {
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text: commonReply,
      },
    ]);
    return;
  }

  // ==========================
  // Portfolio Questions
  // ==========================
  if (!isPortfolioQuestion(currentMessage)) {
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text: `
# 👋 Sorry

I'm Bilal's AI Portfolio Assistant.

I can answer questions about:

• Bilal
• Skills
• Experience
• Projects
• Services
• Technologies

For anything else, please contact Bilal directly.

📧 **Email:** bilalnasir2910@gmail.com

📱 **Phone:** +92 342 6573962

🔗 **LinkedIn**
https://linkedin.com/in/bilal-nasir-nonari
        `,
      },
    ]);

    return;
  }

  // ==========================
  // Gemini
  // ==========================
  setLoading(true);

  try {
    const reply = await askGemini(currentMessage);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text: reply,
      },
    ]);
  } catch (error) {
    console.log(error);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text: "⚠️ Something went wrong. Please try again.",
      },
    ]);
  } finally {
    setLoading(false);
  }
};
const clearChat = () => {
  setMessages([]);
  localStorage.removeItem("chatMessages");
};
  return (

<>
      <ChatButton onClick={() => setOpen(!open)} />

      {open && (
        <div className="fixed bottom-24 right-6 w-96 h-[550px] bg-[#0B1120] rounded-3xl border border-violet-500 shadow-2xl z-50 overflow-hidden flex flex-col">

          {/* Header */}
          <ChatHeader
  onClose={() => setOpen(false)}
  clearChat={clearChat}
/>

          {/* Messages */}
          <div className="flex-1 p-5 overflow-y-auto space-y-4">

            {messages.length === 0 && (
              <div className="space-y-4">

                <div className="bg-violet-500/20 rounded-xl p-4">
                  👋 Hi! I'm Bilal's AI Assistant.

                  <br /><br />

                  Ask me anything about Bilal.
                </div>
{suggestions.map((item, index) => (
  <button
    key={index}
    onClick={() => sendMessage(item)}
    className="w-full text-left p-3 rounded-xl border border-violet-500/30 hover:bg-violet-600 transition"
  >
    💬 {item}
  </button>
))}

              </div>
            )}

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-4 rounded-2xl ${
                  msg.role === "user"
                    ? "bg-violet-600 ml-10"
                    : "bg-slate-700 mr-10"
                }`}
              >
                <ReactMarkdown>
                  {msg.text}
                </ReactMarkdown>
              </div>
            ))}

            {loading && <TypingIndicator />}

            <div ref={bottomRef}></div>

          </div>

          {/* Input */}
          <ChatInput
  message={message}
  setMessage={setMessage}
  sendMessage={sendMessage}
  loading={loading}
/>

        </div>
      )}
    </>
  );
}

export default ChatBot;