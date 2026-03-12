import { Link } from "react-router-dom";
import { hangmanWords } from "@/data/games";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";

const HangmanGame = () => {
  const words = useMemo(() => [...hangmanWords].sort(() => Math.random() - 0.5), []);
  const [current, setCurrent] = useState(0);
  const [guessed, setGuessed] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const finished = current >= words.length;
  const word = words[current];
  const maxWrong = 6;

  const wrongGuesses = guessed.filter(l => !word?.word.includes(l));
  const isLost = wrongGuesses.length >= maxWrong;
  const isWon = word && word.word.split("").every(l => guessed.includes(l));

  const handleGuess = (letter: string) => {
    if (guessed.includes(letter) || isLost || isWon) return;
    setGuessed(g => [...g, letter]);
  };

  const next = () => {
    if (isWon) setScore(s => s + 1);
    setCurrent(c => c + 1);
    setGuessed([]);
  };

  if (finished) return (
    <div className="min-h-screen flex items-center justify-center bg-background"><div className="text-center animate-slide-up">
      <span className="text-6xl block mb-4">🏆</span><h1 className="font-display text-3xl font-bold text-foreground mb-2">Game Over!</h1>
      <p className="text-4xl font-display font-bold text-primary mb-6">{score}/{words.length}</p>
      <Link to="/games"><Button variant="hero">All Games</Button></Link>
    </div></div>
  );

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const hangmanParts = ["😵", "🫥", "😰", "😟", "😐", "😊"];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur"><div className="container mx-auto flex items-center justify-between px-4 py-3"><Link to="/games" className="font-display text-lg font-bold text-primary">← Games</Link><span className="font-display font-semibold text-foreground">Score: {score}</span></div></nav>
      <div className="container mx-auto px-4 py-8 max-w-md text-center">
        <h1 className="font-display text-2xl font-bold text-foreground mb-4">💀 Bio Hangman</h1>
        <p className="text-sm text-muted-foreground mb-2">#{current + 1} of {words.length}</p>
        <div className="text-5xl mb-4">{hangmanParts[Math.min(wrongGuesses.length, 5)]}</div>
        <p className="text-sm text-muted-foreground mb-4">Wrong: {wrongGuesses.length}/{maxWrong}</p>
        <div className="bg-accent px-3 py-1 rounded-full inline-block mb-6 text-sm text-accent-foreground">💡 {word.hint}</div>
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {word.word.split("").map((l, i) => (
            <span key={i} className={`w-8 h-10 border-b-2 flex items-center justify-center font-display text-xl font-bold ${guessed.includes(l) || isLost ? "text-foreground" : "text-transparent"} border-primary`}>
              {guessed.includes(l) || isLost ? l : "_"}
            </span>
          ))}
        </div>
        {!isWon && !isLost ? (
          <div className="flex flex-wrap gap-1.5 justify-center">
            {alphabet.map(l => (
              <button key={l} onClick={() => handleGuess(l)} disabled={guessed.includes(l)}
                className={`w-9 h-9 rounded-lg text-sm font-bold transition-all ${guessed.includes(l) ? (word.word.includes(l) ? "bg-accent text-accent-foreground" : "bg-destructive/10 text-destructive") : "bg-card border border-border text-card-foreground hover:bg-accent"}`}>
                {l}
              </button>
            ))}
          </div>
        ) : (
          <div className="animate-fade-in">
            <p className={`text-xl font-bold mb-4 ${isWon ? "text-primary" : "text-destructive"}`}>{isWon ? "🎉 You got it!" : `💀 The word was: ${word.word}`}</p>
            <Button variant="hero" className="w-full" onClick={next}>{current + 1 >= words.length ? "Finish" : "Next Word →"}</Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default HangmanGame;
