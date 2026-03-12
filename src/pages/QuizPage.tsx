import { Link, useSearchParams } from "react-router-dom";
import { quizQuestions, getQuestionsByTopic } from "@/data/quizQuestions";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";

const QuizPage = () => {
  const [searchParams] = useSearchParams();
  const topicId = searchParams.get("topic");
  const allQuestions = useMemo(() => {
    const qs = topicId ? getQuestionsByTopic(topicId) : quizQuestions;
    return [...qs].sort(() => Math.random() - 0.5).slice(0, 20);
  }, [topicId]);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  if (allQuestions.length === 0) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <p className="text-6xl mb-4">📝</p>
        <h1 className="font-display text-2xl font-bold text-foreground mb-4">No questions available</h1>
        <Link to="/explore"><Button variant="hero">Browse Topics</Button></Link>
      </div>
    </div>
  );

  const q = allQuestions[current];

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplanation(true);
    const correct = idx === q.correctAnswer;
    if (correct) setScore(s => s + 1);
    setAnswers(a => [...a, correct]);
  };

  const handleNext = () => {
    if (current + 1 >= allQuestions.length) { setFinished(true); return; }
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
        <p className="text-muted-foreground mb-6">{score / allQuestions.length >= 0.8 ? "Excellent work!" : score / allQuestions.length >= 0.5 ? "Good effort!" : "Keep studying!"}</p>
        <div className="flex gap-3 justify-center">
          <Button variant="hero" onClick={() => { setCurrent(0); setSelected(null); setShowExplanation(false); setScore(0); setFinished(false); setAnswers([]); }}>Retry</Button>
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
          <span className="font-display font-semibold text-foreground">Score: {score}/{current + (selected !== null ? 1 : 0)}</span>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Question {current + 1} of {allQuestions.length}</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground capitalize">{q.difficulty}</span>
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
