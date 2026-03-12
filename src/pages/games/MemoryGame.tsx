import { Link } from "react-router-dom";
import { memoryCards } from "@/data/games";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";

interface Card { id: number; content: string; pairId: number; type: "emoji" | "text"; }

const MemoryGame = () => {
  const cards = useMemo<Card[]>(() => {
    const pairs = memoryCards.slice(0, 8);
    const all: Card[] = [];
    pairs.forEach((p, i) => {
      all.push({ id: i * 2, content: p.content, pairId: i, type: "emoji" });
      all.push({ id: i * 2 + 1, content: p.match, pairId: i, type: "text" });
    });
    return all.sort(() => Math.random() - 0.5);
  }, []);

  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  const handleClick = (id: number) => {
    if (flipped.length === 2 || flipped.includes(id) || matched.includes(id)) return;
    const next = [...flipped, id];
    setFlipped(next);
    if (next.length === 2) {
      setMoves(m => m + 1);
      const [a, b] = next;
      const ca = cards.find(c => c.id === a)!;
      const cb = cards.find(c => c.id === b)!;
      if (ca.pairId === cb.pairId) {
        setMatched(m => [...m, a, b]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 800);
      }
    }
  };

  const won = matched.length === cards.length;

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur"><div className="container mx-auto flex items-center justify-between px-4 py-3"><Link to="/games" className="font-display text-lg font-bold text-primary">← Games</Link><span className="font-display font-semibold text-foreground">Moves: {moves}</span></div></nav>
      <div className="container mx-auto px-4 py-8 max-w-md text-center">
        <h1 className="font-display text-2xl font-bold text-foreground mb-6">🃏 Memory Cards</h1>
        {won ? (
          <div className="animate-slide-up"><span className="text-6xl block mb-4">🎉</span><h2 className="font-display text-2xl font-bold text-foreground mb-2">You Won!</h2><p className="text-muted-foreground mb-6">Completed in {moves} moves</p><Link to="/games"><Button variant="hero">All Games</Button></Link></div>
        ) : (
          <div className="grid grid-cols-4 gap-3">
            {cards.map(card => {
              const isFlipped = flipped.includes(card.id) || matched.includes(card.id);
              return (
                <button key={card.id} onClick={() => handleClick(card.id)}
                  className={`aspect-square rounded-xl border text-lg font-bold transition-all duration-300 ${
                    isFlipped ? (matched.includes(card.id) ? "bg-accent border-primary text-accent-foreground" : "bg-card border-border text-card-foreground") : "gradient-nature text-primary-foreground hover:opacity-90"
                  }`}>
                  {isFlipped ? (card.type === "emoji" ? card.content : <span className="text-xs px-1">{card.content}</span>) : "?"}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default MemoryGame;
