import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useTheme, themes } from "@/contexts/ThemeContext";
import { useState } from "react";

const navLinks = [
  { to: "/explore", label: "📚 Explore" },
  { to: "/games", label: "🎮 Games" },
  { to: "/puzzle-zone", label: "🧩 Puzzles" },
  { to: "/mind-maps", label: "🧠 Mind Maps" },
  { to: "/flowcharts", label: "📊 Flowcharts" },
  { to: "/species-explorer", label: "🐾 Species" },
  { to: "/ecosystem-explorer", label: "🌍 Ecosystems" },
  { to: "/quiz", label: "📝 Quiz" },
  { to: "/exam-prep", label: "🎓 Exam Prep" },
  { to: "/glossary", label: "📖 Glossary" },
  { to: "/scientists", label: "👩‍🔬 Scientists" },
  { to: "/animal-sounds", label: "🔊 Sounds" },
  { to: "/challenges", label: "🏅 Challenges" },
  { to: "/download-center", label: "📥 Downloads" },
  { to: "/dashboard", label: "📊 Dashboard" },
  { to: "/leaderboard", label: "🏆 Leaderboard" },
  { to: "/ai-assistant", label: "🤖 AI Assistant" },
];

const Navbar = () => {
  const { user, signOut } = useAuth();
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="text-2xl">🌿</span>
          <span className="font-display text-xl font-bold text-primary">FloraFaunaVerse</span>
        </Link>

        {/* Desktop nav - scrollable */}
        <div className="hidden lg:flex items-center gap-1 overflow-x-auto max-w-[60vw] scrollbar-hide">
          {navLinks.slice(0, 8).map(l => (
            <Link key={l.to} to={l.to} className={`text-xs font-medium px-2 py-1 rounded-md whitespace-nowrap transition-colors ${location.pathname === l.to ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary hover:bg-accent"}`}>
              {l.label}
            </Link>
          ))}
          <div className="relative group">
            <button className="text-xs font-medium px-2 py-1 rounded-md text-muted-foreground hover:text-primary hover:bg-accent">More ▾</button>
            <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-soft p-2 hidden group-hover:block min-w-[160px] z-50">
              {navLinks.slice(8).map(l => (
                <Link key={l.to} to={l.to} className="block text-xs font-medium px-3 py-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent whitespace-nowrap">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center flex-shrink-0">
          {/* Theme Selector */}
          <div className="relative">
            <button onClick={() => setThemeOpen(!themeOpen)} className="text-lg p-1 rounded-md hover:bg-accent transition-colors">
              {themes.find(t => t.id === theme)?.icon || "☀️"}
            </button>
            {themeOpen && (
              <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-xl shadow-soft p-2 z-50 min-w-[140px]">
                {themes.map(t => (
                  <button key={t.id} onClick={() => { setTheme(t.id); setThemeOpen(false); }} className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm transition-colors ${theme === t.id ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-accent"}`}>
                    <span>{t.icon}</span> {t.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-lg p-1">☰</button>

          {user ? (
            <>
              <span className="text-xs text-muted-foreground hidden sm:block max-w-[100px] truncate">{user.email}</span>
              <Button variant="ghost" size="sm" onClick={signOut}>Sign Out</Button>
            </>
          ) : (
            <Link to="/login"><Button variant="hero" size="sm">Sign In</Button></Link>
          )}
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card p-4 grid grid-cols-2 gap-2">
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} className={`text-xs font-medium px-3 py-2 rounded-lg transition-colors ${location.pathname === l.to ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent"}`}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
