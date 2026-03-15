import Navbar from "@/components/Navbar";
import { ecosystems } from "@/data/ecosystems";
import { useState } from "react";

const EcosystemExplorer = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedEco, setSelectedEco] = useState<typeof ecosystems[0] | null>(null);
  const types = ["all", "terrestrial", "aquatic", "marine"];
  const filtered = selectedType === "all" ? ecosystems : ecosystems.filter(e => e.type === selectedType);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2 text-center">🌍 Ecosystem Explorer</h1>
        <p className="text-muted-foreground text-center mb-8">Explore Earth's major ecosystems and their biodiversity</p>

        <div className="flex justify-center gap-2 mb-8">
          {types.map(t => (
            <button key={t} onClick={() => setSelectedType(t)} className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${selectedType === t ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"}`}>
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((eco, i) => (
            <button key={i} onClick={() => setSelectedEco(eco)} className="text-left bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-soft transition-all hover:-translate-y-1">
              <span className="text-5xl block mb-3">{eco.icon}</span>
              <h3 className="font-display text-lg font-bold text-card-foreground mb-1">{eco.name}</h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground capitalize">{eco.type}</span>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{eco.description}</p>
              <p className="text-xs text-muted-foreground mt-2">🌡️ {eco.climate}</p>
            </button>
          ))}
        </div>

        {selectedEco && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm" onClick={() => setSelectedEco(null)}>
            <div className="bg-card rounded-2xl p-8 max-w-lg mx-4 shadow-soft animate-slide-up max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <span className="text-6xl block mb-4">{selectedEco.icon}</span>
              <h2 className="font-display text-2xl font-bold text-card-foreground mb-2">{selectedEco.name}</h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground capitalize">{selectedEco.type}</span>
              <p className="text-sm text-muted-foreground mt-4">{selectedEco.description}</p>
              <div className="mt-4">
                <h4 className="font-display font-semibold text-foreground text-sm mb-2">🌡️ Climate</h4>
                <p className="text-sm text-muted-foreground">{selectedEco.climate}</p>
              </div>
              <div className="mt-4">
                <h4 className="font-display font-semibold text-foreground text-sm mb-2">🐾 Key Species</h4>
                <div className="flex flex-wrap gap-2">{selectedEco.keySpecies.map((s, i) => <span key={i} className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs">{s}</span>)}</div>
              </div>
              <div className="mt-4">
                <h4 className="font-display font-semibold text-foreground text-sm mb-2">⚠️ Threats</h4>
                <div className="flex flex-wrap gap-2">{selectedEco.threats.map((t, i) => <span key={i} className="px-2 py-1 bg-destructive/10 text-destructive rounded-full text-xs">{t}</span>)}</div>
              </div>
              <div className="mt-4 p-3 bg-accent rounded-lg">
                <p className="text-sm text-accent-foreground">💡 {selectedEco.funFact}</p>
              </div>
              <button onClick={() => setSelectedEco(null)} className="mt-6 w-full bg-muted text-foreground rounded-lg py-2 text-sm font-medium hover:bg-accent">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EcosystemExplorer;
