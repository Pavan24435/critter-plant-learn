import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { biologyFacts } from "@/data/biologyFacts";
import { topics } from "@/data/topics";
import { funFacts } from "@/data/games";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const [selectedFact, setSelectedFact] = useState<typeof funFacts[0] | null>(null);
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="font-display text-xl font-bold text-primary">FloraFaunaVerse</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/explore" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Explore</Link>
            <Link to="/games" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Games</Link>
            <Link to="/quiz" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Quizzes</Link>
            <Link to="/facts" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Fun Facts</Link>
            <Link to="/leaderboard" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Leaderboard</Link>
          </div>
          <div className="flex gap-2 items-center">
            {user ? (
              <>
                <span className="text-sm text-muted-foreground hidden sm:block">{user.email}</span>
                <Button variant="ghost" size="sm" onClick={signOut}>Sign Out</Button>
              </>
            ) : (
              <Link to="/login"><Button variant="hero" size="sm">Sign In</Button></Link>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="gradient-hero py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-slide-up">
            <span className="text-6xl mb-4 block animate-float">🌍</span>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4">
              FloraFaunaVerse
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Explore the Universe of Plants & Animals — Learn biology through interactive games, quizzes, flowcharts, and AI-powered study tools.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/explore"><Button variant="game" size="lg">🔬 Explore Topics</Button></Link>
              <Link to="/games"><Button variant="ocean" size="lg">🎮 Play Games</Button></Link>
              <Link to="/quiz"><Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">📝 Take Quiz</Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Facts Banner */}
      <section className="bg-secondary py-3 overflow-hidden border-y border-border">
        <div className="facts-scroll flex gap-8 whitespace-nowrap">
          {[...biologyFacts, ...biologyFacts].map((fact, i) => (
            <span key={i} className="text-sm text-secondary-foreground/80 flex-shrink-0">
              🧬 {fact}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-foreground mb-2 text-center">Explore Biology Topics</h2>
        <p className="text-muted-foreground text-center mb-10">30+ topics across Botany, Zoology, and Animal Physiology</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.slice(0, 6).map(topic => (
            <Link key={topic.id} to={`/topic/${topic.id}`} className="group">
              <div className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <span className="text-4xl mb-3 block">{topic.icon}</span>
                <h3 className="font-display text-lg font-semibold text-card-foreground mb-1">{topic.title}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent text-accent-foreground capitalize">{topic.category}</span>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{topic.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/explore"><Button variant="hero" size="lg">View All Topics →</Button></Link>
        </div>
      </section>

      {/* Games Preview */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">🎮 Educational Games</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { emoji: "🦁", name: "Guess the Animal", path: "/games/guess-animal" },
              { emoji: "🌱", name: "Guess the Plant", path: "/games/guess-plant" },
              { emoji: "🔤", name: "Word Scramble", path: "/games/word-scramble" },
              { emoji: "🃏", name: "Memory Cards", path: "/games/memory" },
              { emoji: "💀", name: "Bio Hangman", path: "/games/hangman" },
            ].map(game => (
              <Link key={game.name} to={game.path} className="group">
                <div className="rounded-xl border border-border bg-card p-5 text-center shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                  <span className="text-5xl block mb-3">{game.emoji}</span>
                  <h3 className="font-display text-sm font-semibold text-card-foreground">{game.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">🏆 Leaderboard</h2>
          <p className="text-muted-foreground mb-6">Compete with other learners and climb the ranks</p>
          <Link to="/leaderboard"><Button variant="hero" size="lg">View Leaderboard →</Button></Link>
        </div>
      </section>

      {/* Fun Facts Preview */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">🌟 Fun Facts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {funFacts.slice(0, 8).map((f, i) => (
              <button key={i} onClick={() => setSelectedFact(f)} className="text-left rounded-xl border border-border bg-card p-4 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <span className="text-2xl">{f.icon}</span>
                <p className="text-sm text-card-foreground mt-2 line-clamp-3">{f.fact}</p>
              </button>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/facts"><Button variant="hero">See All Facts →</Button></Link>
          </div>
        </div>
      </section>

      {/* Fact Modal */}
      {selectedFact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm" onClick={() => setSelectedFact(null)}>
          <div className="bg-card rounded-2xl p-8 max-w-md mx-4 shadow-soft animate-slide-up" onClick={e => e.stopPropagation()}>
            <span className="text-5xl block mb-4">{selectedFact.icon}</span>
            <p className="text-card-foreground text-lg mb-4">{selectedFact.fact}</p>
            <span className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground capitalize">{selectedFact.category}</span>
            <div className="mt-6"><Button onClick={() => setSelectedFact(null)} variant="outline" className="w-full">Close</Button></div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="gradient-hero py-10">
        <div className="container mx-auto px-4 text-center text-primary-foreground/70">
          <p className="font-display text-lg font-bold text-primary-foreground mb-2">🌿 FloraFaunaVerse</p>
          <p className="text-sm">Explore the Universe of Plants & Animals</p>
          <p className="text-xs mt-4">© 2026 FloraFaunaVerse. Built for biology learners everywhere.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
