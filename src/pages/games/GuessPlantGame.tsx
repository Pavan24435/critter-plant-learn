import { Link } from "react-router-dom";
import { plantImages } from "@/data/games";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const GuessPlantGame = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const plant = plantImages[current];
  const finished = current >= plantImages.length;

  const handleGuess = (opt: string) => { if (selected) return; setSelected(opt); if (opt === plant.name) setScore(s => s + 1); };
  const next = () => { setCurrent(c => c + 1); setSelected(null); setShowHint(false); };

  if (finished) return (
    <div className="min-h-screen flex items-center justify-center bg-background"><div className="text-center animate-slide-up">
      <span className="text-6xl block mb-4">🏆</span><h1 className="font-display text-3xl font-bold text-foreground mb-2">Game Over!</h1>
      <p className="text-4xl font-display font-bold text-primary mb-6">{score}/{plantImages.length}</p>
      <div className="flex gap-3 justify-center"><Button variant="hero" onClick={() => { setCurrent(0); setScore(0); setSelected(null); }}>Play Again</Button><Link to="/games"><Button variant="outline">All Games</Button></Link></div>
    </div></div>
  );

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur"><div className="container mx-auto flex items-center justify-between px-4 py-3"><Link to="/games" className="font-display text-lg font-bold text-primary">← Games</Link><span className="font-display font-semibold text-foreground">Score: {score}</span></div></nav>
      <div className="container mx-auto px-4 py-8 max-w-md text-center">
        <h1 className="font-display text-2xl font-bold text-foreground mb-6">🌱 Guess the Plant</h1>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-card mb-6">
          <div className="text-8xl mb-4">{plant.emoji}</div>
          <p className="text-sm text-muted-foreground mb-4">#{current + 1} of {plantImages.length}</p>
          {showHint && <p className="text-sm text-accent-foreground bg-accent px-3 py-1 rounded-full inline-block mb-4">💡 {plant.hint}</p>}
          {!showHint && !selected && <Button variant="ghost" size="sm" onClick={() => setShowHint(true)}>Show Hint</Button>}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {plant.options.map(opt => (
            <button key={opt} onClick={() => handleGuess(opt)} className={`p-3 rounded-xl border text-sm font-medium transition-all ${selected ? (opt === plant.name ? "border-primary bg-accent" : opt === selected ? "border-destructive bg-destructive/10" : "border-border bg-card") : "border-border bg-card hover:bg-accent"} text-card-foreground`}>{opt}</button>
          ))}
        </div>
        {selected && <Button variant="hero" className="mt-6 w-full" onClick={next}>{current + 1 >= plantImages.length ? "Finish" : "Next →"}</Button>}
      </div>
    </div>
  );
};
export default GuessPlantGame;
