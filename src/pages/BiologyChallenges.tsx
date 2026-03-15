import Navbar from "@/components/Navbar";
import { quizQuestions } from "@/data/quizQuestions";
import { useState } from "react";

interface Challenge {
  id: string;
  title: string;
  icon: string;
  description: string;
  type: "speed" | "streak" | "accuracy" | "topic-master";
  target: number;
  reward: number;
}

const challenges: Challenge[] = [
  { id: "speed-10", title: "Speed Demon", icon: "⚡", description: "Answer 10 questions in under 60 seconds", type: "speed", target: 10, reward: 50 },
  { id: "streak-5", title: "Hot Streak", icon: "🔥", description: "Get 5 correct answers in a row", type: "streak", target: 5, reward: 25 },
  { id: "streak-10", title: "Unstoppable", icon: "💫", description: "Get 10 correct answers in a row", type: "streak", target: 10, reward: 50 },
  { id: "accuracy-90", title: "Sharpshooter", icon: "🎯", description: "Complete a quiz with 90%+ accuracy", type: "accuracy", target: 90, reward: 30 },
  { id: "accuracy-100", title: "Perfect Score", icon: "💯", description: "Score 100% on any quiz", type: "accuracy", target: 100, reward: 100 },
  { id: "botany-master", title: "Botany Master", icon: "🌱", description: "Answer 20 botany questions correctly", type: "topic-master", target: 20, reward: 40 },
  { id: "zoology-master", title: "Zoology Master", icon: "🦁", description: "Answer 20 zoology questions correctly", type: "topic-master", target: 20, reward: 40 },
  { id: "physiology-pro", title: "Physiology Pro", icon: "❤️", description: "Answer 20 physiology questions correctly", type: "topic-master", target: 20, reward: 40 },
];

const BiologyChallenges = () => {
  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null);
  const [questions, setQuestions] = useState<typeof quizQuestions>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [done, setDone] = useState(false);

  const startChallenge = (c: Challenge) => {
    setActiveChallenge(c);
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, c.target);
    setQuestions(shuffled);
    setCurrentQ(0);
    setScore(0);
    setStreak(0);
    setStartTime(Date.now());
    setDone(false);
  };

  const answer = (idx: number) => {
    const correct = idx === questions[currentQ].correctAnswer;
    if (correct) { setScore(s => s + 5); setStreak(s => s + 1); }
    else setStreak(0);
    if (currentQ + 1 >= questions.length) setDone(true);
    else setCurrentQ(c => c + 1);
  };

  if (activeChallenge && !done) {
    const q = questions[currentQ];
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => setActiveChallenge(null)} className="text-sm text-primary hover:underline">← Back</button>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>🔥 Streak: {streak}</span>
              <span>⭐ Score: {score}</span>
              <span>📊 {currentQ + 1}/{questions.length}</span>
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
            <h3 className="font-display font-bold text-card-foreground mb-4">{q.question}</h3>
            <div className="space-y-3">
              {q.options.map((opt, i) => (
                <button key={i} onClick={() => answer(i)} className="w-full text-left px-4 py-3 rounded-xl border border-border bg-background hover:bg-accent hover:border-primary transition-all text-sm text-foreground">
                  {String.fromCharCode(65 + i)}. {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeChallenge && done) {
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    const accuracy = ((score / 5 / questions.length) * 100).toFixed(0);
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8 max-w-md text-center">
          <span className="text-6xl block mb-4">{activeChallenge.icon}</span>
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">Challenge Complete!</h2>
          <p className="text-muted-foreground mb-6">{activeChallenge.title}</p>
          <div className="bg-card border border-border rounded-2xl p-6 shadow-card space-y-3">
            <p className="text-foreground">⭐ Score: <span className="font-bold text-primary">{score} points</span></p>
            <p className="text-foreground">🎯 Accuracy: <span className="font-bold">{accuracy}%</span></p>
            <p className="text-foreground">⏱️ Time: <span className="font-bold">{elapsed}s</span></p>
          </div>
          <button onClick={() => setActiveChallenge(null)} className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-display font-semibold hover:bg-primary/90">Back to Challenges</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2 text-center">🏅 Biology Challenges</h1>
        <p className="text-muted-foreground text-center mb-8">Complete challenges to earn bonus points (+5 per correct answer!)</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {challenges.map(c => (
            <button key={c.id} onClick={() => startChallenge(c)} className="text-left bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-soft transition-all hover:-translate-y-1">
              <span className="text-4xl block mb-3">{c.icon}</span>
              <h3 className="font-display font-bold text-card-foreground mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{c.description}</p>
              <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">🏆 {c.reward} pts reward</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BiologyChallenges;
