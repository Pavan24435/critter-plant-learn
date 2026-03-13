import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";

const matchingPairs = [
  { term: "Mitochondria", definition: "Powerhouse of the cell" },
  { term: "Chloroplast", definition: "Site of photosynthesis" },
  { term: "Ribosome", definition: "Protein synthesis" },
  { term: "Nucleus", definition: "Contains genetic material" },
  { term: "Xylem", definition: "Water transport in plants" },
  { term: "Phloem", definition: "Food transport in plants" },
  { term: "Enzyme", definition: "Biological catalyst" },
  { term: "Hemoglobin", definition: "Oxygen-carrying protein" },
  { term: "Stomata", definition: "Gas exchange pores in leaves" },
  { term: "Neuron", definition: "Nerve cell for signal transmission" },
  { term: "Alveoli", definition: "Gas exchange in lungs" },
  { term: "Insulin", definition: "Blood sugar regulation hormone" },
  { term: "Antibody", definition: "Immune defense protein" },
  { term: "Chromosome", definition: "Packages of DNA" },
  { term: "ATP", definition: "Energy currency of cells" },
  { term: "Vacuole", definition: "Storage organelle in cells" },
  { term: "Golgi Body", definition: "Packaging and shipping organelle" },
  { term: "Cellulose", definition: "Plant cell wall material" },
  { term: "Melanin", definition: "Skin pigment" },
  { term: "Keratin", definition: "Hair and nail protein" },
];

const MatchingGame = () => {
  const pairs = useMemo(() => [...matchingPairs].sort(() => Math.random() - 0.5).slice(0, 8), []);
  const terms = useMemo(() => [...pairs].sort(() => Math.random() - 0.5), [pairs]);
  const definitions = useMemo(() => [...pairs].sort(() => Math.random() - 0.5), [pairs]);

  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrong, setWrong] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);

  const handleDefClick = (def: string) => {
    if (!selectedTerm) return;
    setAttempts(a => a + 1);
    const pair = pairs.find(p => p.term === selectedTerm);
    if (pair && pair.definition === def) {
      setMatched(prev => new Set([...prev, selectedTerm]));
      setSelectedTerm(null);
    } else {
      setWrong(def);
      setTimeout(() => { setWrong(null); setSelectedTerm(null); }, 600);
    }
  };

  const finished = matched.size === pairs.length;

  if (finished) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center animate-slide-up">
        <span className="text-6xl block mb-4">🎯</span>
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">All Matched!</h1>
        <p className="text-lg text-muted-foreground mb-4">Completed in {attempts} attempts</p>
        <p className="text-sm text-muted-foreground mb-6">Accuracy: {Math.round((pairs.length / attempts) * 100)}%</p>
        <div className="flex gap-3 justify-center">
          <Button variant="hero" onClick={() => window.location.reload()}>Play Again</Button>
          <Link to="/games"><Button variant="outline">All Games</Button></Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/games" className="flex items-center gap-2"><span className="text-2xl">🌿</span><span className="font-display text-xl font-bold text-primary">FloraFaunaVerse</span></Link>
          <span className="font-display font-semibold text-foreground">Matched: {matched.size}/{pairs.length}</span>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="font-display text-2xl font-bold text-foreground mb-2 text-center">🎯 Match Terms & Definitions</h1>
        <p className="text-muted-foreground text-center mb-8">Select a term, then click its matching definition</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-display font-semibold text-foreground mb-3 text-center">Terms</h3>
            <div className="space-y-2">
              {terms.map(p => (
                <button
                  key={p.term}
                  onClick={() => !matched.has(p.term) && setSelectedTerm(p.term)}
                  disabled={matched.has(p.term)}
                  className={`w-full text-left p-3 rounded-lg border transition-all text-sm font-medium ${
                    matched.has(p.term) ? "border-primary/30 bg-primary/10 text-primary opacity-60" :
                    selectedTerm === p.term ? "border-primary bg-primary/20 text-primary ring-2 ring-primary" :
                    "border-border bg-card text-card-foreground hover:bg-accent"
                  }`}
                >
                  {p.term}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold text-foreground mb-3 text-center">Definitions</h3>
            <div className="space-y-2">
              {definitions.map(p => {
                const isMatched = matched.has(p.term);
                return (
                  <button
                    key={p.definition}
                    onClick={() => handleDefClick(p.definition)}
                    disabled={isMatched}
                    className={`w-full text-left p-3 rounded-lg border transition-all text-sm ${
                      isMatched ? "border-primary/30 bg-primary/10 text-primary opacity-60" :
                      wrong === p.definition ? "border-destructive bg-destructive/10 text-destructive" :
                      "border-border bg-card text-card-foreground hover:bg-accent"
                    }`}
                  >
                    {p.definition}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchingGame;
