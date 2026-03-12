import { Link, useSearchParams } from "react-router-dom";
import { quizQuestions, getQuestionsByTopic } from "@/data/quizQuestions";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

const QuizPage = () => {
  const [searchParams] = useSearchParams();
  const topicId = searchParams.get("topic");
  const { user } = useAuth();

  const [difficulty, setDifficulty] = useState<"all" | "easy" | "medium" | "hard">("all");
  const [started, setStarted] = useState(!!topicId);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [finished, setFinished] = useState(false);
  const [saved, setSaved] = useState(false);

  const allQuestions = useMemo(() => {
    let qs = topicId ? getQuestionsByTopic(topicId) : quizQuestions;
    if (difficulty !== "all") qs = qs.filter(q => q.difficulty === difficulty);
    return [...qs].sort(() => Math.random() - 0.5).slice(0, 50);
  }, [topicId, difficulty, started]);

  const startQuiz = () => {
    setCurrent(0);
    setSelected(null);
    setShowExplanation(false);
    setScore(0);
    setFinished(false);
    setSaved(false);
    setStarted(true);
  };

  // Difficulty selection screen
  if (!started) {
    const easyCount = (topicId ? getQuestionsByTopic(topicId) : quizQuestions).filter(q => q.difficulty === "easy").length;
    const mediumCount = (topicId ? getQuestionsByTopic(topicId) : quizQuestions).filter(q => q.difficulty === "medium").length;
    const hardCount = (topicId ? getQuestionsByTopic(topicId) : quizQuestions).filter(q => q.difficulty === "hard").length;
    const totalCount = easyCount + mediumCount + hardCount;

    return (
      <div className="min-h-screen bg-background">
        <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
          <div className="container mx-auto flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-2"><span className="text-2xl">🌿</span><span className="font-display text-xl font-bold text-primary">FloraFaunaVerse</span></Link>
          </div>
        </nav>
        <div className="container mx-auto px-4 py-12 max-w-2xl">
          <div className="text-center mb-10">
            <span className="text-6xl block mb-4">📝</span>
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">Choose Your Challenge</h1>
            <p className="text-muted-foreground">Select difficulty level to start the quiz ({totalCount} questions available)</p>
          </div>

          <div className="grid gap-4 mb-8">
            {[
              { key: "all" as const, label: "🎯 All Levels (Mixed)", desc: `${totalCount} questions — easy, medium & hard combined`, color: "bg-primary/10 border-primary hover:bg-primary/20" },
              { key: "easy" as const, label: "🟢 Easy", desc: `${easyCount} questions — basic concepts and recall`, color: "bg-emerald-500/10 border-emerald-500 hover:bg-emerald-500/20" },
              { key: "medium" as const, label: "🟡 Medium", desc: `${mediumCount} questions — application and understanding`, color: "bg-amber-500/10 border-amber-500 hover:bg-amber-500/20" },
              { key: "hard" as const, label: "🔴 Hard", desc: `${hardCount} questions — analysis and deep knowledge`, color: "bg-red-500/10 border-red-500 hover:bg-red-500/20" },
            ].map(d => (
              <button
                key={d.key}
                onClick={() => setDifficulty(d.key)}
                className={`w-full text-left p-5 rounded-xl border-2 transition-all ${difficulty === d.key ? d.color + " ring-2 ring-offset-2 ring-primary" : "border-border bg-card hover:bg-accent"}`}
              >
                <h3 className="font-display font-semibold text-foreground text-lg">{d.label}</h3>
                <p className="text-sm text-muted-foreground mt-1">{d.desc}</p>
              </button>
            ))}
          </div>

          <Button variant="hero" size="lg" className="w-full" onClick={startQuiz}>
            Start Quiz →
          </Button>

          <div className="mt-6 text-center">
            <Link to="/explore" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Back to Topics</Link>
          </div>
        </div>
      </div>
    );
  }

  if (allQuestions.length === 0) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <p className="text-6xl mb-4">📝</p>
        <h1 className="font-display text-2xl font-bold text-foreground mb-4">No questions available for this selection</h1>
        <div className="flex gap-3 justify-center">
          <Button variant="hero" onClick={() => setStarted(false)}>Change Difficulty</Button>
          <Link to="/explore"><Button variant="outline">Browse Topics</Button></Link>
        </div>
      </div>
    </div>
  );

  const q = allQuestions[current];

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplanation(true);
    if (idx === q.correctAnswer) setScore(s => s + 1);
  };

  const handleNext = async () => {
    if (current + 1 >= allQuestions.length) {
      setFinished(true);
      if (user && !saved) {
        await supabase.from("quiz_scores").insert({
          user_id: user.id,
          topic: topicId || (difficulty !== "all" ? `mixed-${difficulty}` : "mixed"),
          score: selected === q.correctAnswer ? score + 1 : score,
          total: allQuestions.length,
        } as any);
        setSaved(true);
      }
      return;
    }
    setCurrent(c => c + 1);
    setSelected(null);
    setShowExplanation(false);
  };

  if (finished) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto p-8 animate-slide-up">
        <span className="text-6xl block mb-4">{score / allQuestions.length >= 0.8 ? "🏆" : score / allQuestions.length >= 0.5 ? "👍" : "📚"}</span>
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">Quiz Complete!</h1>
        <p className="text-4xl font-display font-bold text-primary mb-2">{score}/{allQuestions.length}</p>
        <p className="text-sm text-muted-foreground mb-1 capitalize">Difficulty: {difficulty === "all" ? "Mixed" : difficulty}</p>
        <p className="text-muted-foreground mb-2">{score / allQuestions.length >= 0.8 ? "Excellent work!" : score / allQuestions.length >= 0.5 ? "Good effort!" : "Keep studying!"}</p>
        {saved && <p className="text-xs text-primary mb-4">✅ Score saved to leaderboard!</p>}
        {!user && <p className="text-xs text-muted-foreground mb-4"><Link to="/login" className="text-primary hover:underline">Sign in</Link> to save your scores</p>}
        <div className="flex gap-3 justify-center flex-wrap">
          <Button variant="hero" onClick={() => { setStarted(false); setDifficulty("all"); }}>New Quiz</Button>
          <Link to="/leaderboard"><Button variant="game">Leaderboard</Button></Link>
          <Link to="/explore"><Button variant="outline">Explore Topics</Button></Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2"><span className="text-2xl">🌿</span><span className="font-display text-xl font-bold text-primary">FloraFaunaVerse</span></Link>
          <div className="flex items-center gap-3">
            <span className={`text-xs px-2 py-0.5 rounded-full capitalize ${q.difficulty === "easy" ? "bg-emerald-500/20 text-emerald-700" : q.difficulty === "medium" ? "bg-amber-500/20 text-amber-700" : "bg-red-500/20 text-red-700"}`}>
              {q.difficulty}
            </span>
            <span className="font-display font-semibold text-foreground">Score: {score}/{current + (selected !== null ? 1 : 0)}</span>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Question {current + 1} of {allQuestions.length}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full capitalize ${q.difficulty === "easy" ? "bg-emerald-500/20 text-emerald-700" : q.difficulty === "medium" ? "bg-amber-500/20 text-amber-700" : "bg-red-500/20 text-red-700"}`}>{q.difficulty}</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 mb-8"><div className="gradient-nature h-2 rounded-full transition-all" style={{ width: `${((current + 1) / allQuestions.length) * 100}%` }} /></div>

        <div className="rounded-xl border border-border bg-card p-6 mb-6 shadow-card animate-fade-in">
          <h2 className="font-display text-xl font-semibold text-card-foreground mb-6">{q.question}</h2>
          <div className="space-y-3">
            {q.options.map((opt, i) => {
              let style = "border-border bg-background hover:bg-accent";
              if (selected !== null) {
                if (i === q.correctAnswer) style = "border-primary bg-accent text-accent-foreground";
                else if (i === selected) style = "border-destructive bg-destructive/10 text-destructive";
              }
              return (
                <button key={i} onClick={() => handleSelect(i)} className={`w-full text-left p-4 rounded-lg border transition-all ${style}`}>
                  <span className="font-medium text-sm">{String.fromCharCode(65 + i)}. {opt}</span>
                </button>
              );
            })}
          </div>
        </div>

        {showExplanation && (
          <div className="rounded-xl border border-border bg-accent p-5 mb-6 animate-fade-in">
            <h3 className="font-display font-semibold text-accent-foreground mb-2">{selected === q.correctAnswer ? "✅ Correct!" : "❌ Incorrect"}</h3>
            <p className="text-sm text-accent-foreground/80">{q.explanation}</p>
          </div>
        )}

        {selected !== null && (
          <Button variant="hero" size="lg" className="w-full" onClick={handleNext}>
            {current + 1 >= allQuestions.length ? "Finish Quiz" : "Next Question →"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
