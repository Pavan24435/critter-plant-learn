import { Link } from "react-router-dom";
import { topics } from "@/data/topics";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ExplorePage = () => {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const filtered = topics.filter(t => (filter === "all" || t.category === filter) && t.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2"><span className="text-2xl">🌿</span><span className="font-display text-xl font-bold text-primary">FloraFaunaVerse</span></Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/games" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Games</Link>
            <Link to="/quiz" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Quizzes</Link>
            <Link to="/facts" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Fun Facts</Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">🔬 Explore Topics</h1>
        <p className="text-muted-foreground mb-6">Browse {topics.length} biology topics</p>
        <div className="flex flex-wrap gap-3 mb-6">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search topics..." className="flex-1 min-w-[200px] px-4 py-2 rounded-lg border border-input bg-background text-foreground text-sm" />
          {["all","botany","zoology","physiology"].map(f => (
            <Button key={f} variant={filter === f ? "hero" : "outline"} size="sm" onClick={() => setFilter(f)} className="capitalize">{f === "all" ? "All Topics" : f}</Button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(topic => (
            <Link key={topic.id} to={`/topic/${topic.id}`} className="group">
              <div className="rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <span className="text-3xl block mb-2">{topic.icon}</span>
                <h3 className="font-display font-semibold text-card-foreground mb-1">{topic.title}</h3>
                <div className="flex gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground capitalize">{topic.category}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground capitalize">{topic.difficulty}</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{topic.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
