import { Link } from "react-router-dom";
import { funFacts } from "@/data/games";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";

const FactsPage = () => {
  const [selectedFact, setSelectedFact] = useState<typeof funFacts[0] | null>(null);
  const [filter, setFilter] = useState("all");
  const shuffled = useMemo(() => [...funFacts].sort(() => Math.random() - 0.5), []);
  const filtered = filter === "all" ? shuffled : shuffled.filter(f => f.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur"><div className="container mx-auto flex items-center justify-between px-4 py-3"><Link to="/" className="flex items-center gap-2"><span className="text-2xl">🌿</span><span className="font-display text-xl font-bold text-primary">FloraFaunaVerse</span></Link></div></nav>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2 text-center">🌟 Fun Biology Facts</h1>
        <p className="text-muted-foreground text-center mb-6">{funFacts.length} amazing facts about life on Earth</p>
        <div className="flex gap-2 justify-center mb-8 flex-wrap">
          {["all","botany","zoology","physiology","genetics"].map(f => (
            <Button key={f} variant={filter === f ? "hero" : "outline"} size="sm" onClick={() => setFilter(f)} className="capitalize">{f === "all" ? "All" : f}</Button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {filtered.map((f, i) => (
            <button key={i} onClick={() => setSelectedFact(f)} className="text-left rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <span className="text-3xl block mb-2">{f.icon}</span>
              <p className="text-sm text-card-foreground">{f.fact}</p>
              <span className="text-xs text-muted-foreground mt-2 block capitalize">{f.category}</span>
            </button>
          ))}
        </div>
      </div>
      {selectedFact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm" onClick={() => setSelectedFact(null)}>
          <div className="bg-card rounded-2xl p-8 max-w-md mx-4 shadow-soft animate-slide-up" onClick={e => e.stopPropagation()}>
            <span className="text-5xl block mb-4">{selectedFact.icon}</span>
            <p className="text-card-foreground text-lg mb-4">{selectedFact.fact}</p>
            <span className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground capitalize">{selectedFact.category}</span>
            <div className="mt-6"><Button onClick={() => setSelectedFact(null)} variant="outline" className="w-full">Close</Button></div>
          </div>
        </div>
      )}
    </div>
  );
};
export default FactsPage;
