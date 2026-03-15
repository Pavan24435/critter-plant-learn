import Navbar from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  const { user } = useAuth();
  const [quizScores, setQuizScores] = useState<any[]>([]);
  const [gameScores, setGameScores] = useState<any[]>([]);

  useEffect(() => {
    if (!user) return;
    supabase.from("quiz_scores").select("*").eq("user_id", user.id).order("created_at", { ascending: false }).limit(20).then(({ data }) => setQuizScores(data || []));
    supabase.from("game_scores").select("*").eq("user_id", user.id).order("created_at", { ascending: false }).limit(20).then(({ data }) => setGameScores(data || []));
  }, [user]);

  if (!user) return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 text-center">
        <span className="text-6xl block mb-4">🔒</span>
        <h1 className="font-display text-2xl font-bold text-foreground mb-4">Sign in to view your dashboard</h1>
        <Link to="/login"><Button variant="hero" size="lg">Sign In</Button></Link>
      </div>
    </div>
  );

  const totalQuizPoints = quizScores.reduce((a, s) => a + s.score * 5, 0);
  const totalGamePoints = gameScores.reduce((a, s) => a + s.score * 5, 0);
  const totalPoints = totalQuizPoints + totalGamePoints;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2 text-center">📊 My Dashboard</h1>
        <p className="text-muted-foreground text-center mb-8">{user.email}</p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Points", value: totalPoints, icon: "⭐" },
            { label: "Quizzes Taken", value: quizScores.length, icon: "📝" },
            { label: "Games Played", value: gameScores.length, icon: "🎮" },
            { label: "Avg Quiz Score", value: quizScores.length ? `${Math.round(quizScores.reduce((a, s) => a + (s.score / s.total) * 100, 0) / quizScores.length)}%` : "N/A", icon: "🎯" },
          ].map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5 shadow-card text-center">
              <span className="text-3xl block mb-2">{s.icon}</span>
              <p className="font-display text-2xl font-bold text-primary">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 shadow-card">
            <h3 className="font-display font-bold text-card-foreground mb-4">📝 Recent Quiz Scores</h3>
            {quizScores.length === 0 ? <p className="text-sm text-muted-foreground">No quizzes taken yet</p> : (
              <div className="space-y-2">
                {quizScores.slice(0, 10).map((s, i) => (
                  <div key={i} className="flex justify-between items-center text-sm py-2 border-b border-border last:border-0">
                    <span className="text-foreground capitalize">{s.topic || "General"}</span>
                    <span className="font-bold text-primary">{s.score}/{s.total} (+{s.score * 5}pts)</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="bg-card border border-border rounded-xl p-6 shadow-card">
            <h3 className="font-display font-bold text-card-foreground mb-4">🎮 Recent Game Scores</h3>
            {gameScores.length === 0 ? <p className="text-sm text-muted-foreground">No games played yet</p> : (
              <div className="space-y-2">
                {gameScores.slice(0, 10).map((s, i) => (
                  <div key={i} className="flex justify-between items-center text-sm py-2 border-b border-border last:border-0">
                    <span className="text-foreground">{s.game_name}</span>
                    <span className="font-bold text-primary">{s.score}/{s.total} (+{s.score * 5}pts)</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
