import Navbar from "@/components/Navbar";
import { glossaryTerms } from "@/data/glossary";
import { useState } from "react";

const GlossaryPage = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const categories = ["all", "botany", "zoology", "physiology", "genetics", "ecology", "microbiology"];
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const filtered = glossaryTerms.filter(t => {
    const matchSearch = t.term.toLowerCase().includes(search.toLowerCase()) || t.definition.toLowerCase().includes(search.toLowerCase());
    const matchCat = selectedCategory === "all" || t.category === selectedCategory;
    const matchLetter = !selectedLetter || t.term[0].toUpperCase() === selectedLetter;
    return matchSearch && matchCat && matchLetter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2 text-center">📖 Biology Glossary</h1>
        <p className="text-muted-foreground text-center mb-6">{glossaryTerms.length} essential biology terms</p>

        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search terms..." className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground mb-4 outline-none focus:ring-2 focus:ring-primary" />

        <div className="flex flex-wrap gap-1 mb-4 justify-center">
          {letters.map(l => (
            <button key={l} onClick={() => setSelectedLetter(selectedLetter === l ? null : l)} className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${selectedLetter === l ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"}`}>
              {l}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {categories.map(c => (
            <button key={c} onClick={() => setSelectedCategory(c)} className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${selectedCategory === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.map((t, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-4 shadow-card">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-display font-bold text-card-foreground">{t.term}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground capitalize">{t.category}</span>
              </div>
              <p className="text-sm text-muted-foreground">{t.definition}</p>
            </div>
          ))}
          {filtered.length === 0 && <p className="text-center text-muted-foreground py-8">No terms found matching your search.</p>}
        </div>
      </div>
    </div>
  );
};

export default GlossaryPage;
