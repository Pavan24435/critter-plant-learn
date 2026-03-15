import Navbar from "@/components/Navbar";
import { crosswordData } from "@/data/puzzleData";
import { useState } from "react";

const BiologyCrossword = () => {
  const [currentClue, setCurrentClue] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<{ word: string; correct: boolean }[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);

  const checkAnswer = () => {
    const correct = userAnswer.trim().toUpperCase() === crosswordData[currentClue].word;
    if (correct) setScore(s => s + 5);
    setFeedback(correct ? "✅ Correct! +5 points" : `❌ The answer was: ${crosswordData[currentClue].word}`);
    setAnswered(a => [...a, { word: crosswordData[currentClue].word, correct }]);
    setTimeout(() => {
      setFeedback(null);
      setUserAnswer("");
      if (currentClue + 1 < crosswordData.length) setCurrentClue(c => c + 1);
    }, 2000);
  };

  const done = answered.length >= crosswordData.length;

  if (done) return (
    <div className="min-h-screen bg-background"><Navbar />
      <div className="container mx-auto px-4 py-16 text-center max-w-md">
        <span className="text-6xl block mb-4">📝</span>
        <h1 className="font-display text-2xl font-bold text-foreground mb-4">Crossword Complete!</h1>
        <p className="text-xl text-primary font-bold mb-6">Score: {score} points</p>
        <div className="bg-card border border-border rounded-xl p-4 mb-6 text-left">
          {answered.map((a, i) => (
            <div key={i} className="flex justify-between py-2 border-b border-border last:border-0 text-sm">
              <span className="text-foreground">{a.word}</span>
              <span>{a.correct ? "✅" : "❌"}</span>
            </div>
          ))}
        </div>
        <button onClick={() => { setCurrentClue(0); setScore(0); setAnswered([]); }} className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium">Play Again</button>
      </div>
    </div>
  );

  const clue = crosswordData[currentClue];

  return (
    <div className="min-h-screen bg-background"><Navbar />
      <div className="container mx-auto px-4 py-8 max-w-lg">
        <h1 className="font-display text-2xl font-bold text-foreground mb-2 text-center">📝 Biology Crossword</h1>
        <div className="flex justify-between text-sm text-muted-foreground mb-6">
          <span>⭐ Score: {score}</span>
          <span>📊 {currentClue + 1}/{crosswordData.length}</span>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
          <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground capitalize mb-3 inline-block">{clue.direction}</span>
          <h3 className="font-display font-bold text-card-foreground mb-4">{clue.clue}</h3>
          <div className="flex gap-1 mb-4 justify-center">
            {clue.word.split("").map((_, i) => (
              <div key={i} className={`w-8 h-8 rounded border-2 flex items-center justify-center text-sm font-bold ${userAnswer[i] ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}>
                {userAnswer[i]?.toUpperCase() || ""}
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mb-3">Hint: {clue.word.length} letters</p>
          <input value={userAnswer} onChange={e => setUserAnswer(e.target.value.slice(0, clue.word.length))} onKeyDown={e => e.key === "Enter" && checkAnswer()} placeholder="Type your answer..." className="w-full bg-muted rounded-lg px-4 py-3 text-foreground text-center uppercase font-bold tracking-widest placeholder:normal-case placeholder:font-normal placeholder:tracking-normal outline-none focus:ring-2 focus:ring-primary mb-4" />
          {feedback && <div className={`text-center py-2 rounded-lg mb-4 text-sm font-medium ${feedback.includes("✅") ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`}>{feedback}</div>}
          <button onClick={checkAnswer} className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium">Check Answer</button>
        </div>
      </div>
    </div>
  );
};

export default BiologyCrossword;
