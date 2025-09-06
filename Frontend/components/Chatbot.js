"use client";
import { useState } from "react";
import axios from "axios";
import { MessageCircle } from "lucide-react"; // chat bubble icon
import Image from "next/image";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/ai/chat", {
        question: input,
        history: newMessages.map((m) => ({
          role: m.role === "user" ? "user" : "model",
          parts: [{ text: m.content }],
        })),
      });

      const aiMessage = { role: "ai", content: res.data.answer };
      setMessages([...newMessages, aiMessage]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages([
        ...newMessages,
        { role: "ai", content: "⚠️ Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Floating Chat Icon */}
      <button
        onClick={() => setOpen(!open)}
  className="fixed bottom-2 right-6 p-3 rounded-full shadow-lg hover:scale-110 transition"
>
  <Image
  src="/satrun.svg" alt="Saturn"
  width={50}
  height={50}
  />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 text-gray-300 body-font bg-black/80 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl flex flex-col h-[400px]">
          {/* Header */}
          <div className="p-3 body-font text-gray-500 rounded-t-2xl text-center font-semibold">
            Kairo - Your Financial Assistant
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[70%] ${
                  msg.role === "user"
                    ? " bg-black/40 backdrop-blur-lg border border-white/20 text-white ml-auto"
                    : " bg-black/40 backdrop-blur-lg border border-white/20 text-gray-500"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="text-gray-500 text-sm">Kairo is thinking...</div>
            )}
          </div>

          {/* Input */}
          <div className="flex bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
            <input
              type="text"
              placeholder="Message..."
              className="flex-1 p-2 focus:outline-none "
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="rounded-xl text-gray-400 px-8 ml-10"
              disabled={loading}
            >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
