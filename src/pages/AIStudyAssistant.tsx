import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

const studyModes = [
  { id: "explain", label: "📖 Explain a Topic", prompt: "Explain this biology topic in detail with examples: " },
  { id: "quiz", label: "📝 Generate Quiz", prompt: "Generate 5 multiple choice quiz questions with answers about: " },
  { id: "summary", label: "📋 Summarize", prompt: "Provide a concise summary with bullet points of: " },
  { id: "flashcards", label: "🃏 Flashcards", prompt: "Create 10 flashcards (Q&A format) for studying: " },
  { id: "mnemonics", label: "🧠 Mnemonics", prompt: "Create helpful mnemonics and memory aids for: " },
  { id: "compare", label: "⚖️ Compare", prompt: "Compare and contrast these biology concepts: " },
];

const AIStudyAssistant = () => {
  const [messages, setMessages] = useState<Msg[]>([{ role: "assistant", content: "# 🤖 AI Study Assistant\n\nHello! I'm your personalized biology study assistant. I can:\n\n- 📖 **Explain** any biology topic in detail\n- 📝 **Generate quizzes** for practice\n- 📋 **Summarize** complex topics\n- 🃏 **Create flashcards** for revision\n- 🧠 **Build mnemonics** to help memorize\n- ⚖️ **Compare** biological concepts\n\nSelect a study mode below or type your question!" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const send = async (overrideMsg?: string) => {
    const text = overrideMsg || input.trim();
    if (!text || loading) return;
    
    const fullMsg = selectedMode ? studyModes.find(m => m.id === selectedMode)!.prompt + text : text;
    const userMsg: Msg = { role: "user", content: text };
    const allMsgs = [...messages, { role: "user" as const, content: fullMsg }];
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}` },
        body: JSON.stringify({ messages: allMsgs }),
      });
      if (!resp.ok || !resp.body) {
        if (resp.status === 429) { setMessages(m => [...m, { role: "assistant", content: "⏳ Rate limited. Please wait and try again." }]); setLoading(false); return; }
        throw new Error("Failed");
      }
      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = ""; let assistantText = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        let idx;
        while ((idx = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, idx); buffer = buffer.slice(idx + 1);
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
                if (last?.role === "assistant" && prev.length > messages.length + 1) return prev.map((m, i) => i === prev.length - 1 ? { ...m, content: assistantText } : m);
                return [...prev, { role: "assistant", content: assistantText }];
              });
            }
          } catch {}
        }
      }
    } catch { setMessages(m => [...m, { role: "assistant", content: "Sorry, something went wrong. Please try again!" }]); }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2 text-center">🤖 AI Study Assistant</h1>
        <p className="text-muted-foreground text-center mb-6">Your personalized biology tutor powered by AI</p>

        {/* Study Modes */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {studyModes.map(m => (
            <button key={m.id} onClick={() => setSelectedMode(selectedMode === m.id ? null : m.id)} className={`px-3 py-2 rounded-xl text-xs font-medium transition-all ${selectedMode === m.id ? "bg-primary text-primary-foreground shadow-soft" : "bg-card border border-border text-card-foreground hover:bg-accent"}`}>
              {m.label}
            </button>
          ))}
        </div>
        {selectedMode && <p className="text-xs text-center text-primary mb-4">Mode: {studyModes.find(m => m.id === selectedMode)?.label} — type a topic below</p>}

        {/* Chat */}
        <div className="bg-card border border-border rounded-2xl shadow-card overflow-hidden">
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                  {m.role === "assistant" ? <div className="prose prose-sm max-w-none dark:prose-invert"><ReactMarkdown>{m.content}</ReactMarkdown></div> : <p className="text-sm">{m.content}</p>}
                </div>
              </div>
            ))}
            {loading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex justify-start"><div className="bg-muted rounded-2xl px-4 py-3 text-sm animate-pulse-gentle">🧠 Thinking...</div></div>
            )}
            <div ref={endRef} />
          </div>
          <div className="border-t border-border p-4 flex gap-3">
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && send()} placeholder={selectedMode ? `Enter a topic to ${selectedMode}...` : "Ask anything about biology..."} className="flex-1 bg-muted rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary" />
            <Button onClick={() => send()} variant="hero" disabled={loading}>Send</Button>
          </div>
        </div>

        {/* Quick Topics */}
        <div className="mt-6">
          <p className="text-xs text-muted-foreground mb-2 text-center">Quick topics:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Photosynthesis", "DNA Replication", "Cell Division", "Evolution", "Nervous System", "Ecosystem"].map(t => (
              <button key={t} onClick={() => { setInput(t); send(t); }} className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs hover:bg-accent transition-colors">{t}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIStudyAssistant;
