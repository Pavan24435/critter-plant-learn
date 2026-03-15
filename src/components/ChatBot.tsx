import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: "assistant", content: "Hi! 🌿 I'm your Biology Study Bot. Ask me anything about plants, animals, or biology!" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Msg = { role: "user", content: input.trim() };
    const allMsgs = [...messages, userMsg];
    setMessages(allMsgs);
    setInput("");
    setLoading(true);

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}` },
        body: JSON.stringify({ messages: allMsgs }),
      });

      if (!resp.ok || !resp.body) {
        if (resp.status === 429) { setMessages(m => [...m, { role: "assistant", content: "⏳ Rate limited. Please wait a moment and try again." }]); setLoading(false); return; }
        if (resp.status === 402) { setMessages(m => [...m, { role: "assistant", content: "💳 Credits exhausted. Please add funds." }]); setLoading(false); return; }
        throw new Error("Failed");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let assistantText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        let idx;
        while ((idx = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, idx);
          buffer = buffer.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") break;
          try {
            const parsed = JSON.parse(json);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantText += content;
              setMessages(prev => {
                const last = prev[prev.length - 1];
                if (last?.role === "assistant" && prev.length > allMsgs.length) {
                  return prev.map((m, i) => i === prev.length - 1 ? { ...m, content: assistantText } : m);
                }
                return [...prev, { role: "assistant", content: assistantText }];
              });
            }
          } catch {}
        }
      }
    } catch {
      setMessages(m => [...m, { role: "assistant", content: "Sorry, something went wrong. Please try again!" }]);
    }
    setLoading(false);
  };

  if (!open) return (
    <button onClick={() => setOpen(true)} className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-nature text-primary-foreground shadow-soft hover:shadow-glow transition-all hover:scale-110 flex items-center justify-center text-2xl">
      🤖
    </button>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[70vh] bg-card border border-border rounded-2xl shadow-soft flex flex-col overflow-hidden">
      <div className="gradient-nature px-4 py-3 flex items-center justify-between">
        <span className="font-display font-bold text-primary-foreground text-sm">🤖 Biology Bot</span>
        <button onClick={() => setOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground text-lg">✕</button>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] rounded-xl px-3 py-2 text-sm ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
              {m.role === "assistant" ? <div className="prose prose-sm max-w-none dark:prose-invert"><ReactMarkdown>{m.content}</ReactMarkdown></div> : m.content}
            </div>
          </div>
        ))}
        {loading && messages[messages.length - 1]?.role === "user" && (
          <div className="flex justify-start"><div className="bg-muted rounded-xl px-3 py-2 text-sm animate-pulse-gentle">Thinking...</div></div>
        )}
        <div ref={endRef} />
      </div>
      <div className="border-t border-border p-3 flex gap-2">
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && send()} placeholder="Ask about biology..." className="flex-1 bg-muted rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary" />
        <Button onClick={send} size="sm" variant="hero" disabled={loading}>Send</Button>
      </div>
    </div>
  );
};

export default ChatBot;
