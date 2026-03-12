import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";

interface ScoreEntry {
  user_id: string;
  total_score: number;
  display_name: string;
}

const LeaderboardPage = () => {
  const [tab, setTab] = useState<"quiz" | "games">("quiz");
  const [quizScores, setQuizScores] = useState<ScoreEntry[]>([]);
  const [gameScores, setGameScores] = useState<ScoreEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScores = async () => {
      setLoading(true);

      // Fetch quiz scores with profiles
      const { data: quizData } = await supabase
        .from("quiz_scores")
        .select("user_id, score, profiles!inner(display_name)")
        .order("created_at", { ascending: false });

      // Fetch game scores with profiles
      const { data: gameData } = await supabase
        .from("game_scores")
        .select("user_id, score, profiles!inner(display_name)")
        .order("created_at", { ascending: false });

      // Aggregate quiz scores by user
      const quizMap = new Map<string, { total: number; name: string }>();
      (quizData as any[])?.forEach((row) => {
        const existing = quizMap.get(row.user_id);
        const name = (row.profiles as any)?.display_name || "Anonymous";
        if (existing) {
          existing.total += row.score;
        } else {
          quizMap.set(row.user_id, { total: row.score, name });
        }
      });

      const gameMap = new Map<string, { total: number; name: string }>();
      (gameData as any[])?.forEach((row) => {
        const existing = gameMap.get(row.user_id);
        const name = (row.profiles as any)?.display_name || "Anonymous";
        if (existing) {
          existing.total += row.score;
        } else {
          gameMap.set(row.user_id, { total: row.score, name });
        }
      });

      setQuizScores(
        Array.from(quizMap.entries())
          .map(([user_id, v]) => ({ user_id, total_score: v.total, display_name: v.name }))
          .sort((a, b) => b.total_score - a.total_score)
          .slice(0, 20)
      );

      setGameScores(
        Array.from(gameMap.entries())
          .map(([user_id, v]) => ({ user_id, total_score: v.total, display_name: v.name }))
          .sort((a, b) => b.total_score - a.total_score)
          .slice(0, 20)
      );

      setLoading(false);
    };

    fetchScores();
  }, []);

  const medals = ["🥇", "🥈", "🥉"];
  const scores = tab === "quiz" ? quizScores : gameScores;

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="font-display text-xl font-bold text-primary">FloraFaunaVerse</span>
          </Link>
          <div className="flex gap-2">
            <Link to="/explore"><Button variant="ghost" size="sm">Explore</Button></Link>
            <Link to="/games"><Button variant="ghost" size="sm">Games</Button></Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2 text-center">🏆 Leaderboard</h1>
        <p className="text-muted-foreground text-center mb-8">Top performers across quizzes and games</p>

        <div className="flex gap-2 justify-center mb-8">
          <Button variant={tab === "quiz" ? "hero" : "outline"} onClick={() => setTab("quiz")}>📝 Quiz Scores</Button>
          <Button variant={tab === "games" ? "game" : "outline"} onClick={() => setTab("games")}>🎮 Game Scores</Button>
        </div>

        <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-muted-foreground">Loading scores...</div>
          ) : scores.length === 0 ? (
            <div className="p-12 text-center">
              <span className="text-5xl block mb-4">📊</span>
              <p className="text-muted-foreground mb-4">No scores yet! Be the first to play.</p>
              <Link to={tab === "quiz" ? "/quiz" : "/games"}>
                <Button variant="hero">Start Playing →</Button>
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {scores.map((entry, i) => (
                <div key={entry.user_id} className={`flex items-center gap-4 p-4 ${i < 3 ? "bg-accent/50" : ""}`}>
                  <span className="text-2xl w-10 text-center font-display font-bold">
                    {i < 3 ? medals[i] : <span className="text-muted-foreground text-lg">{i + 1}</span>}
                  </span>
                  <div className="flex-1">
                    <p className="font-display font-semibold text-card-foreground">{entry.display_name}</p>
                  </div>
                  <span className="font-display text-xl font-bold text-primary">{entry.total_score}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
