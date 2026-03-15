import Navbar from "@/components/Navbar";
import { foodChainData } from "@/data/puzzleData";
import { useState, useEffect } from "react";

const FoodChainBuilder = () => {
  const [currentChain, setCurrentChain] = useState(0);
  const [userChain, setUserChain] = useState<string[]>([]);
  const [available, setAvailable] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => { resetChain(); }, [currentChain]);

  const resetChain = () => {
    const chain = foodChainData[currentChain].chain;
    setAvailable([...chain].sort(() => Math.random() - 0.5));
    setUserChain([]);
    setFeedback(null);
  };

  const addToChain = (item: string) => {
    setUserChain(prev => [...prev, item]);
    setAvailable(prev => prev.filter(a => a !== item));
  };

  const removeFromChain = (idx: number) => {
    const item = userChain[idx];
    setUserChain(prev => prev.filter((_, i) => i !== idx));
    setAvailable(prev => [...prev, item]);
  };

  const checkChain = () => {
    const correct = JSON.stringify(userChain) === JSON.stringify(foodChainData[currentChain].chain);
    if (correct) {
      setScore(s => s + 5);
      setFeedback("✅ Correct! +5 points");
      setTimeout(() => {
        if (currentChain + 1 >= foodChainData.length) setDone(true);
        else setCurrentChain(c => c + 1);
      }, 1500);
    } else {
      setFeedback("❌ Incorrect order. Try again!");
      setTimeout(() => resetChain(), 1500);
    }
  };

  if (done) return (
    <div className="min-h-screen bg-background"><Navbar />
      <div className="container mx-auto px-4 py-16 text-center">
        <span className="text-6xl block mb-4">🎉</span>
        <h1 className="font-display text-3xl font-bold text-foreground mb-4">Food Chain Complete!</h1>
        <p className="text-xl text-primary font-bold mb-6">Score: {score} points</p>
        <button onClick={() => { setCurrentChain(0); setScore(0); setDone(false); }} className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium">Play Again</button>
      </div>
    </div>
  );

  const chain = foodChainData[currentChain];

  return (
    <div className="min-h-screen bg-background"><Navbar />
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="font-display text-2xl font-bold text-foreground mb-2 text-center">🔗 Food Chain Builder</h1>
        <p className="text-muted-foreground text-center mb-2">Arrange organisms in the correct food chain order</p>
        <div className="flex justify-between text-sm text-muted-foreground mb-6">
          <span>🌍 {chain.ecosystem}</span>
          <span>⭐ Score: {score}</span>
          <span>📊 {currentChain + 1}/{foodChainData.length}</span>
        </div>

        {/* User's chain */}
        <div className="bg-card border border-border rounded-xl p-4 mb-4 min-h-[80px] shadow-card">
          <p className="text-xs text-muted-foreground mb-2">Your Food Chain (click to remove):</p>
          <div className="flex flex-wrap gap-2">
            {userChain.map((item, i) => (
              <button key={i} onClick={() => removeFromChain(i)} className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/80 flex items-center gap-1">
                {item} {i < userChain.length - 1 && <span className="ml-1">→</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Available organisms */}
        <div className="bg-muted rounded-xl p-4 mb-4">
          <p className="text-xs text-muted-foreground mb-2">Available organisms (click to add):</p>
          <div className="flex flex-wrap gap-2">
            {available.map((item, i) => (
              <button key={i} onClick={() => addToChain(item)} className="px-4 py-2 rounded-lg bg-card border border-border text-foreground text-sm font-medium hover:bg-accent transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>

        {feedback && <div className={`text-center py-3 rounded-xl mb-4 font-medium ${feedback.includes("✅") ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`}>{feedback}</div>}

        <div className="flex gap-3">
          <button onClick={resetChain} className="flex-1 bg-muted text-foreground py-3 rounded-xl font-medium hover:bg-accent">Reset</button>
          <button onClick={checkChain} disabled={userChain.length !== chain.chain.length} className="flex-1 bg-primary text-primary-foreground py-3 rounded-xl font-medium hover:bg-primary/90 disabled:opacity-50">Check Chain</button>
        </div>
      </div>
    </div>
  );
};

export default FoodChainBuilder;
