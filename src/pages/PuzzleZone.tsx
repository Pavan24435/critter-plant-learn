import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const puzzles = [
  { name: "Food Chain Builder", icon: "🔗", desc: "Build correct food chains by arranging organisms in order", path: "/puzzle-zone/food-chain", color: "gradient-nature" },
  { name: "Organ Matching", icon: "🫀", desc: "Match organs to their body systems and functions", path: "/puzzle-zone/organ-matching", color: "gradient-sunset" },
  { name: "Biology Crossword", icon: "📝", desc: "Solve crossword puzzles with biology terms", path: "/puzzle-zone/crossword", color: "gradient-ocean" },
  { name: "Cell Structure Match", icon: "🔬", desc: "Match cell organelles to their functions", path: "/puzzle-zone/cell-structure", color: "gradient-nature" },
];

const PuzzleZone = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-display text-4xl font-bold text-foreground mb-2 text-center">🧩 Puzzle Zone</h1>
      <p className="text-muted-foreground text-center mb-12">Interactive biology puzzles — +5 points for every correct answer!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {puzzles.map(p => (
          <Link key={p.name} to={p.path} className="group">
            <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
              <span className="text-6xl block mb-4">{p.icon}</span>
              <h3 className="font-display text-xl font-bold text-card-foreground mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
              <span className="inline-block px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium">Play Now →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default PuzzleZone;
