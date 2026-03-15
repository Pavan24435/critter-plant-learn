import Navbar from "@/components/Navbar";
import { speciesData } from "@/data/species";
import { useState } from "react";

const SpeciesExplorer = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSpecies, setSelectedSpecies] = useState<typeof speciesData[0] | null>(null);
  const categories = ["all", "mammal", "bird", "reptile", "amphibian", "fish", "insect", "plant", "fungi"];
  const filtered = selectedCategory === "all" ? speciesData : speciesData.filter(s => s.category === selectedCategory);

  const statusColor = (s: string) => {
    if (s === "Critically Endangered") return "bg-destructive text-destructive-foreground";
    if (s === "Endangered") return "bg-destructive/80 text-destructive-foreground";
    if (s === "Vulnerable") return "bg-secondary text-secondary-foreground";
    if (s === "Near Threatened") return "bg-accent text-accent-foreground";
    return "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2 text-center">🐾 Species Explorer</h1>
        <p className="text-muted-foreground text-center mb-8">Discover fascinating species across all kingdoms of life</p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(c => (
            <button key={c} onClick={() => setSelectedCategory(c)} className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-all ${selectedCategory === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"}`}>
              {c === "all" ? "🌍 All" : c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((s, i) => (
            <button key={i} onClick={() => setSelectedSpecies(s)} className="text-left bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-soft transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{s.icon}</span>
                <div>
                  <h3 className="font-display font-bold text-card-foreground">{s.name}</h3>
                  <p className="text-xs text-muted-foreground italic">{s.scientificName}</p>
                </div>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full ${statusColor(s.conservationStatus)}`}>{s.conservationStatus}</span>
              <p className="text-sm text-muted-foreground mt-2">{s.funFact}</p>
            </button>
          ))}
        </div>

        {selectedSpecies && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm" onClick={() => setSelectedSpecies(null)}>
            <div className="bg-card rounded-2xl p-8 max-w-lg mx-4 shadow-soft animate-slide-up" onClick={e => e.stopPropagation()}>
              <span className="text-6xl block mb-4">{selectedSpecies.icon}</span>
              <h2 className="font-display text-2xl font-bold text-card-foreground">{selectedSpecies.name}</h2>
              <p className="text-sm text-muted-foreground italic mb-4">{selectedSpecies.scientificName}</p>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold text-foreground">Habitat:</span> <span className="text-muted-foreground">{selectedSpecies.habitat}</span></p>
                <p><span className="font-semibold text-foreground">Diet:</span> <span className="text-muted-foreground">{selectedSpecies.diet}</span></p>
                <p><span className="font-semibold text-foreground">Fun Fact:</span> <span className="text-muted-foreground">{selectedSpecies.funFact}</span></p>
                <span className={`inline-block text-xs px-2 py-0.5 rounded-full ${statusColor(selectedSpecies.conservationStatus)}`}>{selectedSpecies.conservationStatus}</span>
              </div>
              <button onClick={() => setSelectedSpecies(null)} className="mt-6 w-full bg-muted text-foreground rounded-lg py-2 text-sm font-medium hover:bg-accent transition-colors">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeciesExplorer;
