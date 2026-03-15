import Navbar from "@/components/Navbar";
import { topics } from "@/data/topics";
import { useState } from "react";

const DownloadCenter = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = ["all", "botany", "zoology", "physiology"];
  const filtered = selectedCategory === "all" ? topics : topics.filter(t => t.category === selectedCategory);

  const downloadText = (topic: typeof topics[0]) => {
    let content = `${topic.title}\n${"=".repeat(topic.title.length)}\n\n`;
    content += `Category: ${topic.category}\nDifficulty: ${topic.difficulty}\n\n`;
    content += `Description:\n${topic.description}\n\n`;
    content += `Content:\n${topic.content.join("\n\n")}\n\n`;
    content += `Key Points:\n${topic.keyPoints.map(k => `• ${k}`).join("\n")}\n\n`;
    content += `Audio Summary:\n${topic.audioDescription}\n`;
    
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${topic.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2 text-center">📥 Download Center</h1>
        <p className="text-muted-foreground text-center mb-8">Download study notes for offline learning</p>

        <div className="flex justify-center gap-2 mb-8">
          {categories.map(c => (
            <button key={c} onClick={() => setSelectedCategory(c)} className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${selectedCategory === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(t => (
            <div key={t.id} className="bg-card border border-border rounded-xl p-5 shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{t.icon}</span>
                <div>
                  <h3 className="font-display font-bold text-card-foreground">{t.title}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground capitalize">{t.category}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{t.description}</p>
              <button onClick={() => downloadText(t)} className="w-full bg-primary text-primary-foreground rounded-lg py-2 text-sm font-medium hover:bg-primary/90 transition-colors">
                📥 Download Notes
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadCenter;
