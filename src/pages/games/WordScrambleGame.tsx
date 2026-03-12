import { Link } from "react-router-dom";
import { biologyWords } from "@/data/games";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback, useMemo } from "react";

const WordScrambleGame = () => {
  const words = useMemo(() => [...biologyWords].sort(() => Math.random() - 0.5).slice(0, 10), []);
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [answered, setAnswered] = useState(false);
  const finished = current >= words.length;

  const scramble = useCallback((word: string) => {
    const arr = word.split("");
    for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
    return arr.join("") === word ? scramble(word) : arr.join("");
  }, []);

  const scrambled = useMemo(() => words.map(w => scramble(w)), [words, scramble]);

  useEffect(() => {
    if (finished || answered) return;
    if (timer <= 0) { setAnswered(true); return; }
    const t = setTimeout(() => setTimer(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timer, finished, answered]);

  const handleSubmit = () => {
    if (input.toUpperCase() === words[current]) setScore(s => s + 1);
    setAnswered(true);
  };

  const next = () => { setCurrent(c => c + 1); setInput(""); setTimer(30); setAnswered(false); };

  if (finished) return (
    <div className="min-h-screen flex items-center justify-center bg-background"><div className="text-center animate-slide-up">
      <span className="text-6xl block mb-4">🏆</span><h1 className="font-display text-3xl font-bold text-foreground mb-2">Game Over!</h1>
      <p className="text-4xl font-display font-bold text-primary mb-6">{score}/{words.length}</p>
      <div className="flex gap-3 justify-center"><Link to="/games"><Button variant="outline">All Games</Button></Link></div>
    </div></div>
  );

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur"><div className="container mx-auto flex items-center justify-between px-4 py-3"><Link to="/games" className="font-display text-lg font-bold text-primary">← Games</Link><span className="font-display font-semibold text-foreground">Score: {score}</span></div></nav>
      <div className="container mx-auto px-4 py-8 max-w-md text-center">
        <h1 className="font-display text-2xl font-bold text-foreground mb-6">🔤 Word Scramble</h1>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-card mb-6">
          <div className={`text-2xl font-display font-bold mb-2 ${timer <= 10 ? "text-destructive" : "text-foreground"}`}>⏱ {timer}s</div>
          <p className="text-sm text-muted-foreground mb-4">#{current + 1} of {words.length}</p>
          <div className="text-3xl font-display font-bold text-primary mb-6 tracking-widest">{scrambled[current]}</div>
          {!answered ? (
            <div>
              <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && handleSubmit()} placeholder="Your answer..." className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-center text-lg font-display mb-4" autoFocus />
              <Button variant="hero" className="w-full" onClick={handleSubmit}>Submit</Button>
            </div>
          ) : (
            <div className="animate-fade-in">
              <p className={`text-lg font-bold mb-2 ${input.toUpperCase() === words[current] ? "text-primary" : "text-destructive"}`}>
                {input.toUpperCase() === words[current] ? "✅ Correct!" : `❌ Answer: ${words[current]}`}
              </p>
              <Button variant="hero" className="w-full mt-4" onClick={next}>{current + 1 >= words.length ? "Finish" : "Next →"}</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default WordScrambleGame;
