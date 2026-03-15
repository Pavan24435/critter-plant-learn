import Navbar from "@/components/Navbar";
import { animalSounds } from "@/data/puzzleData";
import { useState } from "react";

const AnimalSoundLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [speaking, setSpeaking] = useState<string | null>(null);
  const categories = ["all", "mammal", "bird", "amphibian", "insect", "reptile"];
  const filtered = selectedCategory === "all" ? animalSounds : animalSounds.filter(s => s.category === selectedCategory);

  const playSound = (animal: typeof animalSounds[0]) => {
    window.speechSynthesis.cancel();
    const text = `The ${animal.animal} makes a ${animal.sound} sound. ${animal.description}`;
    const u = new SpeechSynthesisUtterance(text);
    u.onend = () => setSpeaking(null);
    window.speechSynthesis.speak(u);
    setSpeaking(animal.animal);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2 text-center">🔊 Animal Sound Library</h1>
        <p className="text-muted-foreground text-center mb-8">Learn how animals communicate through sound</p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(c => (
            <button key={c} onClick={() => setSelectedCategory(c)} className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${selectedCategory === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-soft transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{s.icon}</span>
                <div>
                  <h3 className="font-display font-bold text-card-foreground">{s.animal}</h3>
                  <p className="text-xs text-muted-foreground capitalize">{s.category}</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-primary mb-2">Sound: {s.sound}</p>
              <p className="text-sm text-muted-foreground mb-4">{s.description}</p>
              <button onClick={() => playSound(s)} className={`w-full py-2 rounded-lg text-sm font-medium transition-all ${speaking === s.animal ? "bg-destructive text-destructive-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}>
                {speaking === s.animal ? "⏹ Stop" : "🔊 Play Description"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimalSoundLibrary;
