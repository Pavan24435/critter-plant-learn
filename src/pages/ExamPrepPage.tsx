import Navbar from "@/components/Navbar";
import { topics, Topic } from "@/data/topics";
import { useState } from "react";
import { quizQuestions } from "@/data/quizQuestions";

const ExamPrepPage = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [showAnswers, setShowAnswers] = useState<Record<number, boolean>>({});

  const topicQuestions = selectedTopic ? quizQuestions.filter(q => q.topic === selectedTopic) : [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2 text-center">🎓 Exam Preparation</h1>
        <p className="text-muted-foreground text-center mb-8">Study guides, practice questions, and revision tools</p>

        {!selectedTopic ? (
          <>
            <h2 className="font-display text-xl font-bold text-foreground mb-4">Select a Topic to Study</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {topics.map(t => {
                const qCount = quizQuestions.filter(q => q.topic === t.id).length;
                return (
                  <button key={t.id} onClick={() => setSelectedTopic(t.id)} className="text-left bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-soft transition-all hover:-translate-y-1">
                    <span className="text-3xl">{t.icon}</span>
                    <h3 className="font-display font-bold text-card-foreground mt-2">{t.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{qCount} practice questions available</p>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground capitalize mt-2 inline-block">{t.difficulty}</span>
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <button onClick={() => { setSelectedTopic(null); setShowAnswers({}); }} className="mb-4 text-sm text-primary hover:underline">← Back to Topics</button>
            <h2 className="font-display text-xl font-bold text-foreground mb-4">{topics.find(t => t.id === selectedTopic)?.icon} {topics.find(t => t.id === selectedTopic)?.title} — Practice Questions</h2>
            
            {/* Study Notes */}
            <div className="bg-accent rounded-xl p-6 mb-6">
              <h3 className="font-display font-bold text-accent-foreground mb-2">📝 Quick Revision Notes</h3>
              {topics.find(t => t.id === selectedTopic)?.content.map((c, i) => (
                <p key={i} className="text-sm text-accent-foreground/80 mb-2">{c}</p>
              ))}
            </div>

            <div className="space-y-4">
              {topicQuestions.map((q, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-primary">Q{i + 1}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${q.difficulty === "easy" ? "bg-primary/20 text-primary" : q.difficulty === "medium" ? "bg-secondary text-secondary-foreground" : "bg-destructive/20 text-destructive"}`}>{q.difficulty}</span>
                  </div>
                  <p className="font-medium text-card-foreground mb-3">{q.question}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                    {q.options.map((opt, j) => (
                      <div key={j} className={`px-3 py-2 rounded-lg text-sm border ${showAnswers[i] && j === q.correctAnswer ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border text-muted-foreground"}`}>
                        {String.fromCharCode(65 + j)}. {opt}
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setShowAnswers(p => ({ ...p, [i]: !p[i] }))} className="text-xs text-primary hover:underline">
                    {showAnswers[i] ? "Hide Answer" : "Show Answer"}
                  </button>
                  {showAnswers[i] && q.explanation && <p className="text-xs text-muted-foreground mt-2 bg-muted p-2 rounded-lg">💡 {q.explanation}</p>}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExamPrepPage;
