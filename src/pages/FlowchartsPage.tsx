import Navbar from "@/components/Navbar";
import { topics } from "@/data/topics";
import FlowchartViewer from "@/components/FlowchartViewer";
import { useState } from "react";

const FlowchartsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [speaking, setSpeaking] = useState(false);

  const categories = ["all", "botany", "zoology", "physiology", "reproduction", "genetics", "biotechnology", "ecology"];
  const filtered = selectedCategory === "all" ? topics : topics.filter(t => t.category === selectedCategory);
  const topicsWithFlowcharts = filtered.filter(t => t.flowcharts && t.flowcharts.length > 0);

  const speak = (text: string) => {
    if (speaking) { window.speechSynthesis.cancel(); setSpeaking(false); return; }
    const u = new SpeechSynthesisUtterance(text);
    u.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(u);
    setSpeaking(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2 text-center">📊 Flowcharts Zone</h1>
        <p className="text-muted-foreground text-center mb-8">Visual flowcharts for all biology topics</p>

        <div className="flex justify-center gap-2 mb-8">
          {categories.map(c => (
            <button key={c} onClick={() => setSelectedCategory(c)} className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${selectedCategory === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {topicsWithFlowcharts.map(topic => (
            <div key={topic.id} className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{topic.icon}</span>
                  <div>
                    <h2 className="font-display text-xl font-bold text-card-foreground">{topic.title}</h2>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground capitalize">{topic.category}</span>
                  </div>
                </div>
                <button onClick={() => speak(topic.audioDescription)} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${speaking ? "bg-destructive text-destructive-foreground" : "bg-primary text-primary-foreground"}`}>
                  {speaking ? "⏹ Stop" : "🔊 Listen"}
                </button>
              </div>
              <FlowchartViewer flowcharts={topic.flowcharts} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlowchartsPage;
