import Navbar from "@/components/Navbar";
import { cellStructureData } from "@/data/puzzleData";
import { useState, useEffect } from "react";

const CellStructureMatching = () => {
  const [structures, setStructures] = useState<typeof cellStructureData>([]);
  const [functions, setFunctions] = useState<{ text: string; matched: boolean }[]>([]);
  const [selectedStruct, setSelectedStruct] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [matched, setMatched] = useState<Set<number>>(new Set());

  useEffect(() => {
    const shuffled = [...cellStructureData].sort(() => Math.random() - 0.5);
    setStructures(shuffled);
    setFunctions(shuffled.map(s => ({ text: s.function, matched: false })).sort(() => Math.random() - 0.5));
  }, []);

  const selectFunction = (funcIdx: number) => {
    if (selectedStruct === null || functions[funcIdx].matched) return;
    const struct = structures[selectedStruct];
    if (struct.function === functions[funcIdx].text) {
      setScore(s => s + 5);
      setMatched(m => new Set([...m, selectedStruct]));
      setFunctions(f => f.map((ff, i) => i === funcIdx ? { ...ff, matched: true } : ff));
    }
    setSelectedStruct(null);
  };

  const allMatched = matched.size === structures.length;

  return (
    <div className="min-h-screen bg-background"><Navbar />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="font-display text-2xl font-bold text-foreground mb-2 text-center">🔬 Cell Structure Matching</h1>
        <p className="text-muted-foreground text-center mb-2">Match organelles to their functions</p>
        <p className="text-center text-sm text-primary font-bold mb-6">⭐ Score: {score} | +5 points per match</p>

        {allMatched ? (
          <div className="text-center py-16">
            <span className="text-6xl block mb-4">🎉</span>
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">All Matched!</h2>
            <p className="text-xl text-primary font-bold">Final Score: {score} points</p>
            <button onClick={() => window.location.reload()} className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium">Play Again</button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-display font-bold text-foreground mb-3">Organelles</h3>
              <div className="space-y-2">
                {structures.map((s, i) => (
                  <button key={i} onClick={() => !matched.has(i) && setSelectedStruct(i)} disabled={matched.has(i)} className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${matched.has(i) ? "bg-primary/10 border-primary opacity-60" : selectedStruct === i ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-card-foreground hover:border-primary"}`}>
                    {s.icon} {s.structure} <span className="text-xs opacity-60">({s.found})</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground mb-3">Functions</h3>
              <div className="space-y-2">
                {functions.map((f, i) => (
                  <button key={i} onClick={() => selectFunction(i)} disabled={f.matched} className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${f.matched ? "bg-primary/10 border-primary opacity-60" : "bg-card border-border text-muted-foreground hover:border-primary hover:text-foreground"}`}>
                    {f.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CellStructureMatching;
