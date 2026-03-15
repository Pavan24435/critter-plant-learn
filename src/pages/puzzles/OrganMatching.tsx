import Navbar from "@/components/Navbar";
import { organMatchingData } from "@/data/puzzleData";
import { useState, useEffect } from "react";

const OrganMatching = () => {
  const [organs, setOrgans] = useState<typeof organMatchingData>([]);
  const [functions, setFunctions] = useState<{ text: string; matched: boolean; organIdx: number }[]>([]);
  const [selectedOrgan, setSelectedOrgan] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [matched, setMatched] = useState<Set<number>>(new Set());

  useEffect(() => {
    const shuffled = [...organMatchingData].sort(() => Math.random() - 0.5);
    setOrgans(shuffled);
    setFunctions(shuffled.map((o, i) => ({ text: o.function, matched: false, organIdx: i })).sort(() => Math.random() - 0.5));
  }, []);

  const selectFunction = (funcIdx: number) => {
    if (selectedOrgan === null || functions[funcIdx].matched) return;
    const organ = organs[selectedOrgan];
    const func = functions[funcIdx];
    if (organ.function === func.text) {
      setScore(s => s + 5);
      setMatched(m => new Set([...m, selectedOrgan]));
      setFunctions(f => f.map((ff, i) => i === funcIdx ? { ...ff, matched: true } : ff));
    }
    setSelectedOrgan(null);
  };

  const allMatched = matched.size === organs.length;

  return (
    <div className="min-h-screen bg-background"><Navbar />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="font-display text-2xl font-bold text-foreground mb-2 text-center">🫀 Organ Matching</h1>
        <p className="text-muted-foreground text-center mb-2">Match each organ to its correct function</p>
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
              <h3 className="font-display font-bold text-foreground mb-3">Organs (click to select)</h3>
              <div className="space-y-2">
                {organs.map((o, i) => (
                  <button key={i} onClick={() => !matched.has(i) && setSelectedOrgan(i)} disabled={matched.has(i)} className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${matched.has(i) ? "bg-primary/10 border-primary text-primary opacity-60" : selectedOrgan === i ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-card-foreground hover:border-primary"}`}>
                    {o.icon} {o.organ} <span className="text-xs opacity-70">({o.system})</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground mb-3">Functions (click to match)</h3>
              <div className="space-y-2">
                {functions.map((f, i) => (
                  <button key={i} onClick={() => selectFunction(i)} disabled={f.matched} className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${f.matched ? "bg-primary/10 border-primary text-primary opacity-60" : "bg-card border-border text-muted-foreground hover:border-primary hover:text-foreground"}`}>
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

export default OrganMatching;
