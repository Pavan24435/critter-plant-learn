import Navbar from "@/components/Navbar";
import { topics } from "@/data/topics";
import { useState } from "react";
import KeyPointChip from "@/components/KeyPointChip";

const MindMapsPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [speaking, setSpeaking] = useState(false);

  const speak = (text: string) => {
    if (speaking) { window.speechSynthesis.cancel(); setSpeaking(false); return; }
    const u = new SpeechSynthesisUtterance(text);
    u.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(u);
    setSpeaking(true);
  };

  const generateMindMapNodes = () => {
    const center = { label: selectedTopic.title, icon: selectedTopic.icon };
    const branches = selectedTopic.keyPoints.map((kp, i) => ({ label: kp, color: ["bg-primary", "bg-secondary", "bg-destructive", "bg-accent", "bg-muted"][i % 5] }));
    return { center, branches };
  };

  const { center, branches } = generateMindMapNodes();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2 text-center">🧠 Mind Maps</h1>
        <p className="text-muted-foreground text-center mb-8">Visual mind maps for every biology topic</p>

        <div className="flex flex-wrap gap-2 justify-center mb-8 max-h-[200px] overflow-y-auto">
          {topics.map(t => (
            <button key={t.id} onClick={() => setSelectedTopic(t)} className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${selectedTopic.id === t.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"}`}>
              {t.icon} {t.title}
            </button>
          ))}
        </div>

        {/* Mind Map Visualization */}
        <div className="relative bg-card border border-border rounded-2xl p-8 shadow-card min-h-[500px] flex items-center justify-center overflow-hidden">
          {/* Center node */}
          <div className="absolute z-10 bg-primary text-primary-foreground rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-glow">
            <span className="text-3xl">{center.icon}</span>
            <span className="text-xs font-display font-bold mt-1 px-2 leading-tight">{center.label}</span>
          </div>

          {/* Branch nodes */}
          {branches.map((b, i) => {
            const angle = (i * 360) / branches.length;
            const radius = 180;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            return (
              <div key={i} className="absolute z-10" style={{ transform: `translate(${x}px, ${y}px)` }}>
                {/* Connector line */}
                <div className="absolute w-px bg-border" style={{
                  height: `${radius * 0.6}px`,
                  transformOrigin: "center bottom",
                  transform: `rotate(${angle + 90}deg)`,
                  left: "50%",
                  bottom: "50%",
                }} />
                <div className={`rounded-xl px-3 py-2 text-xs font-medium text-center max-w-[120px] shadow-card border border-border bg-card text-card-foreground`}>
                  {b.label}
                </div>
              </div>
            );
          })}

          {/* SVG lines from center to branches */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ left: 0, top: 0 }}>
            {branches.map((_, i) => {
              const angle = (i * 360) / branches.length;
              const radius = 180;
              const cx = 50; // percent
              const cy = 50;
              const ex = cx + (Math.cos((angle * Math.PI) / 180) * radius * 100) / 600;
              const ey = cy + (Math.sin((angle * Math.PI) / 180) * radius * 100) / 500;
              return <line key={i} x1={`${cx}%`} y1={`${cy}%`} x2={`${ex}%`} y2={`${ey}%`} stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="5,5" />;
            })}
          </svg>
        </div>

        {/* Audio & Content */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 shadow-card">
            <h3 className="font-display font-bold text-foreground mb-3">🔊 Audio Summary</h3>
            <p className="text-sm text-muted-foreground mb-4">{selectedTopic.audioDescription}</p>
            <button onClick={() => speak(selectedTopic.audioDescription)} className={`px-4 py-2 rounded-lg text-sm font-medium ${speaking ? "bg-destructive text-destructive-foreground" : "bg-primary text-primary-foreground"}`}>
              {speaking ? "⏹ Stop" : "▶ Listen"}
            </button>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 shadow-card">
            <h3 className="font-display font-bold text-foreground mb-3">📖 Key Concepts</h3>
            <div className="flex flex-wrap gap-2">
              {selectedTopic.keyPoints.map((kp, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs">{kp}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindMapsPage;
