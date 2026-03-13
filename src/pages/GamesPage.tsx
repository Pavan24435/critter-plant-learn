import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const GamesPage = () => {
  const games = [
    { emoji: "🦁", name: "Guess the Animal", desc: "Identify animals from emojis and hints", path: "/games/guess-animal", color: "gradient-nature" },
    { emoji: "🌱", name: "Guess the Plant", desc: "Identify plants from emojis and hints", path: "/games/guess-plant", color: "gradient-sunset" },
    { emoji: "🔤", name: "Word Scramble", desc: "Unscramble biology terms before time runs out", path: "/games/word-scramble", color: "gradient-ocean" },
    { emoji: "🃏", name: "Memory Cards", desc: "Match biology pairs in this memory game", path: "/games/memory", color: "gradient-nature" },
    { emoji: "💀", name: "Bio Hangman", desc: "Guess biology terms letter by letter", path: "/games/hangman", color: "gradient-sunset" },
    { emoji: "✅", name: "True or False", desc: "Test your knowledge with true/false biology statements", path: "/games/true-false", color: "gradient-ocean" },
    { emoji: "🎯", name: "Match Terms", desc: "Match biology terms with their definitions", path: "/games/matching", color: "gradient-nature" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2"><span className="text-2xl">🌿</span><span className="font-display text-xl font-bold text-primary">FloraFaunaVerse</span></Link>
          <div className="flex gap-2">
            <Link to="/explore"><Button variant="ghost" size="sm">Explore</Button></Link>
            <Link to="/quiz"><Button variant="ghost" size="sm">Quizzes</Button></Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2 text-center">🎮 Educational Games</h1>
        <p className="text-muted-foreground text-center mb-12">Learn biology through fun and interactive games</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {games.map(game => (
            <Link key={game.name} to={game.path} className="group">
              <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
                <span className="text-7xl block mb-4">{game.emoji}</span>
                <h3 className="font-display text-xl font-bold text-card-foreground mb-2">{game.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{game.desc}</p>
                <Button variant="hero" size="sm">Play Now →</Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
