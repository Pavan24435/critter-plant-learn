import { Link } from "react-router-dom";
import { scientists } from "@/data/scientists";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";

const ScientistsPage = () => {
  const [filter, setFilter] = useState("all");
  const [selectedScientist, setSelectedScientist] = useState<typeof scientists[0] | null>(null);
  const fields = ["all", "genetics", "evolution", "microbiology", "physiology", "botany", "zoology", "ecology"];
  const filtered = useMemo(() => filter === "all" ? scientists : scientists.filter(s => s.field === filter), [filter]);

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2"><span className="text-2xl">🌿</span><span className="font-display text-xl font-bold text-primary">FloraFaunaVerse</span></Link>
          <div className="flex gap-2">
            <Link to="/explore"><Button variant="ghost" size="sm">Explore</Button></Link>
            <Link to="/facts"><Button variant="ghost" size="sm">Facts</Button></Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2 text-center">🔬 Famous Biologists</h1>
        <p className="text-muted-foreground text-center mb-6">{scientists.length} pioneering scientists who shaped biology</p>
        <div className="flex gap-2 justify-center mb-8 flex-wrap">
          {fields.map(f => (
            <Button key={f} variant={filter === f ? "hero" : "outline"} size="sm" onClick={() => setFilter(f)} className="capitalize">{f === "all" ? "All" : f}</Button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {filtered.map(s => (
            <button key={s.id} onClick={() => setSelectedScientist(s)} className="text-left rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-3">
                <span className="text-3xl">{s.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-card-foreground text-sm">{s.name}</h3>
                  <p className="text-xs text-muted-foreground">{s.year}</p>
                  <p className="text-xs font-medium text-primary mt-1">{s.innovation}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {selectedScientist && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm" onClick={() => setSelectedScientist(null)}>
          <div className="bg-card rounded-2xl p-8 max-w-md mx-4 shadow-soft animate-slide-up" onClick={e => e.stopPropagation()}>
            <span className="text-5xl block mb-4">{selectedScientist.icon}</span>
            <h2 className="font-display text-xl font-bold text-card-foreground mb-1">{selectedScientist.name}</h2>
            <p className="text-sm text-muted-foreground mb-2">{selectedScientist.year}</p>
            <p className="text-sm font-semibold text-primary mb-3">{selectedScientist.innovation}</p>
            <p className="text-sm text-card-foreground mb-4">{selectedScientist.bio}</p>
            <span className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground capitalize">{selectedScientist.field}</span>
            <div className="mt-6"><Button onClick={() => setSelectedScientist(null)} variant="outline" className="w-full">Close</Button></div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ScientistsPage;
