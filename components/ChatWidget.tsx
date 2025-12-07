// components/ChatWidget.tsx
"use client";

import { useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export function ChatWidget() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const newMessage: ChatMessage = { role: "user", content: trimmed };
    const historyForApi = messages.map((m) => ({
      role: m.role,
      content: m.content,
    }));

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmed,
          history: historyForApi,
        }),
      });

      const data = await res.json();

      if (data.reply) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply as string },
        ]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, there was an error contacting the assistant. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-950/95 p-4 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-50">
          Chat with Tushar&apos;s assistant
        </h2>
        <span className="text-[10px] uppercase tracking-wide text-slate-500">
          Powered by OpenAI
        </span>
      </div>

      <div className="mt-3 max-h-64 space-y-2 overflow-y-auto rounded-lg border border-slate-800 bg-slate-900/60 p-2 text-xs text-slate-200">
        {messages.length === 0 && (
          <p className="text-slate-500">
            Ask about experience, skills, projects, or how we can help.
          </p>
        )}
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${
              m.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-xl px-3 py-2 ${
                m.role === "user"
                  ? "bg-sky-500 text-slate-950"
                  : "bg-slate-800 text-slate-100"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-slate-400">
            Thinking<span className="animate-pulse">...</span>
          </div>
        )}
      </div>

      <form onSubmit={sendMessage} className="mt-3 flex gap-2">
        <input
          className="flex-1 rounded-full border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-sky-500"
          placeholder="Ask a question…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-sky-400 disabled:opacity-60"
        >
          Send
        </button>
      </form>
    </div>
  );
}
