import { Link } from "react-router-dom";
import { animalSilhouettes } from "@/data/games";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const GuessAnimalGame = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const animal = animalSilhouettes[current];
  const finished = current >= animalSilhouettes.length;

  const handleGuess = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt === animal.name) setScore(s => s + 1);
  };

  const next = () => { setCurrent(c => c + 1); setSelected(null); setShowHint(false); };

  if (finished) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center animate-slide-up">
        <span className="text-6xl block mb-4">🏆</span>
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">Game Over!</h1>
        <p className="text-4xl font-display font-bold text-primary mb-6">{score}/{animalSilhouettes.length}</p>
        <div className="flex gap-3 justify-center">
          <Button variant="hero" onClick={() => { setCurrent(0); setScore(0); setSelected(null); }}>Play Again</Button>
          <Link to="/games"><Button variant="outline">All Games</Button></Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/games" className="font-display text-lg font-bold text-primary">← Games</Link>
          <span className="font-display font-semibold text-foreground">Score: {score}</span>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8 max-w-md text-center">
        <h1 className="font-display text-2xl font-bold text-foreground mb-6">🦁 Guess the Animal</h1>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-card mb-6">
          <div className="text-8xl mb-4 filter brightness-0">{animal.emoji}</div>
          <p className="text-sm text-muted-foreground mb-4">#{current + 1} of {animalSilhouettes.length}</p>
          {showHint && <p className="text-sm text-accent-foreground bg-accent px-3 py-1 rounded-full inline-block mb-4">💡 {animal.hint}</p>}
          {!showHint && !selected && <Button variant="ghost" size="sm" onClick={() => setShowHint(true)}>Show Hint</Button>}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {animal.options.map(opt => (
            <button key={opt} onClick={() => handleGuess(opt)}
              className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                selected ? (opt === animal.name ? "border-primary bg-accent text-accent-foreground" : opt === selected ? "border-destructive bg-destructive/10 text-destructive" : "border-border bg-card text-card-foreground") : "border-border bg-card text-card-foreground hover:bg-accent"
              }`}>{opt}</button>
          ))}
        </div>
        {selected && <Button variant="hero" className="mt-6 w-full" onClick={next}>{current + 1 >= animalSilhouettes.length ? "Finish" : "Next →"}</Button>}
      </div>
    </div>
  );
};

export default GuessAnimalGame;
