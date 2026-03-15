import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { biologyFacts } from "@/data/biologyFacts";
import { topics } from "@/data/topics";
import { funFacts } from "@/data/games";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const sections = [
  { icon: "📚", title: "Explore Topics", desc: "59+ topics across Botany, Zoology, Physiology", path: "/explore" },
  { icon: "🎮", title: "Games", desc: "7 interactive educational games", path: "/games" },
  { icon: "🧩", title: "Puzzle Zone", desc: "Food chains, organ matching, crosswords", path: "/puzzle-zone" },
  { icon: "🧠", title: "Mind Maps", desc: "Visual mind maps for every topic", path: "/mind-maps" },
  { icon: "📊", title: "Flowcharts", desc: "Process, classification & cycle charts", path: "/flowcharts" },
  { icon: "🐾", title: "Species Explorer", desc: "Discover 24+ fascinating species", path: "/species-explorer" },
  { icon: "🌍", title: "Ecosystem Explorer", desc: "12 major ecosystems explored", path: "/ecosystem-explorer" },
  { icon: "🎓", title: "Exam Preparation", desc: "Study guides & practice questions", path: "/exam-prep" },
  { icon: "📖", title: "Biology Glossary", desc: "95+ essential biology terms", path: "/glossary" },
  { icon: "👩‍🔬", title: "Scientist Spotlight", desc: "50+ pioneering biologists", path: "/scientists" },
  { icon: "🔊", title: "Animal Sounds", desc: "Learn how animals communicate", path: "/animal-sounds" },
  { icon: "🏅", title: "Biology Challenges", desc: "Speed, streak & accuracy challenges", path: "/challenges" },
  { icon: "📥", title: "Download Center", desc: "Download notes for offline study", path: "/download-center" },
  { icon: "📊", title: "Dashboard", desc: "Track your learning progress", path: "/dashboard" },
  { icon: "🏆", title: "Leaderboard", desc: "Compete with other learners", path: "/leaderboard" },
  { icon: "🤖", title: "AI Study Assistant", desc: "Personalized AI-powered tutor", path: "/ai-assistant" },
];

const Index = () => {
  const [selectedFact, setSelectedFact] = useState<typeof funFacts[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-slide-up">
            <span className="text-6xl mb-4 block animate-float">🌍</span>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4">FloraFaunaVerse</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              The Ultimate Biology Learning Platform — Topics, Games, Puzzles, AI Tutor, Mind Maps, Flowcharts & More!
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link to="/explore"><Button variant="game" size="lg">🔬 Explore</Button></Link>
              <Link to="/games"><Button variant="ocean" size="lg">🎮 Games</Button></Link>
              <Link to="/ai-assistant"><Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">🤖 AI Tutor</Button></Link>
              <Link to="/puzzle-zone"><Button variant="game" size="lg">🧩 Puzzles</Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Facts */}
      <section className="bg-secondary py-3 overflow-hidden border-y border-border">
        <div className="facts-scroll flex gap-8 whitespace-nowrap">
          {[...biologyFacts, ...biologyFacts].map((fact, i) => (
            <span key={i} className="text-sm text-secondary-foreground/80 flex-shrink-0">🧬 {fact}</span>
          ))}
        </div>
      </section>

      {/* All Sections Grid */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-foreground mb-2 text-center">🌿 Everything You Need</h2>
        <p className="text-muted-foreground text-center mb-10">16 powerful learning modules at your fingertips</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {sections.map(s => (
            <Link key={s.path} to={s.path} className="group">
              <div className="rounded-xl border border-border bg-card p-5 text-center shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 h-full">
                <span className="text-4xl block mb-2">{s.icon}</span>
                <h3 className="font-display text-sm font-bold text-card-foreground mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">📚 Featured Topics</h2>
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
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">🌟 Fun Facts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {funFacts.slice(0, 8).map((f, i) => (
            <button key={i} onClick={() => setSelectedFact(f)} className="text-left rounded-xl border border-border bg-card p-4 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <span className="text-2xl">{f.icon}</span>
              <p className="text-sm text-card-foreground mt-2 line-clamp-3">{f.fact}</p>
            </button>
          ))}
        </div>
        <div className="text-center mt-8"><Link to="/facts"><Button variant="hero">See All Facts →</Button></Link></div>
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
          <p className="text-sm">The Ultimate Biology Learning Platform</p>
          <p className="text-xs mt-4">© 2026 FloraFaunaVerse. Built for biology learners everywhere.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
