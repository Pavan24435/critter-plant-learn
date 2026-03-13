import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";

const trueFalseQuestions = [
  { statement: "Photosynthesis occurs in the mitochondria.", answer: false, explanation: "Photosynthesis occurs in chloroplasts, not mitochondria. Mitochondria are the site of cellular respiration." },
  { statement: "Humans have 46 chromosomes.", answer: true, explanation: "Humans have 23 pairs of chromosomes, totaling 46. Each parent contributes 23 chromosomes." },
  { statement: "Fungi are classified as plants.", answer: false, explanation: "Fungi are a separate kingdom. Unlike plants, they lack chlorophyll and obtain nutrients by absorption." },
  { statement: "Red blood cells have a nucleus.", answer: false, explanation: "Mature red blood cells lack a nucleus to make more room for hemoglobin, which carries oxygen." },
  { statement: "DNA stands for Deoxyribonucleic Acid.", answer: true, explanation: "DNA (Deoxyribonucleic Acid) is the molecule that carries genetic instructions for life." },
  { statement: "All bacteria are harmful to humans.", answer: false, explanation: "Many bacteria are beneficial—gut bacteria help digestion, and some produce vitamins like B12 and K." },
  { statement: "The heart has four chambers.", answer: true, explanation: "The human heart has 4 chambers: two atria (upper) and two ventricles (lower)." },
  { statement: "Spiders are insects.", answer: false, explanation: "Spiders are arachnids with 8 legs and 2 body segments. Insects have 6 legs and 3 body segments." },
  { statement: "Plants can grow without sunlight.", answer: false, explanation: "Most plants need sunlight for photosynthesis. Some parasitic plants can survive without it, but this is exceptional." },
  { statement: "The largest organ in the human body is the skin.", answer: true, explanation: "Skin is the largest organ, covering about 20 square feet and weighing about 8 pounds in adults." },
  { statement: "Osmosis is the movement of solute molecules.", answer: false, explanation: "Osmosis is the movement of WATER (solvent) across a semi-permeable membrane from low to high solute concentration." },
  { statement: "Chlorophyll is green because it absorbs green light.", answer: false, explanation: "Chlorophyll appears green because it REFLECTS green light and absorbs red and blue wavelengths." },
  { statement: "Whales are mammals, not fish.", answer: true, explanation: "Whales are marine mammals that breathe air, are warm-blooded, give live birth, and nurse their young with milk." },
  { statement: "Enzymes are destroyed after a chemical reaction.", answer: false, explanation: "Enzymes are biological catalysts that are NOT consumed in reactions—they can be reused many times." },
  { statement: "The mitochondria is called the powerhouse of the cell.", answer: true, explanation: "Mitochondria generate most of the cell's ATP through cellular respiration, hence 'powerhouse'." },
  { statement: "Genes are made of protein.", answer: false, explanation: "Genes are made of DNA. Genes contain instructions to make proteins, but genes themselves are nucleic acids." },
  { statement: "Frogs undergo metamorphosis.", answer: true, explanation: "Frogs undergo metamorphosis from aquatic tadpoles (with gills and tails) to adult frogs (with lungs and legs)." },
  { statement: "Carbon dioxide is exhaled during respiration.", answer: true, explanation: "During cellular respiration, glucose is broken down and CO₂ is produced as a waste product, exhaled by the lungs." },
  { statement: "Viruses are considered living organisms.", answer: false, explanation: "Viruses are not considered living because they cannot reproduce independently, lack cellular structure, and don't metabolize." },
  { statement: "The pancreas produces insulin.", answer: true, explanation: "Beta cells in the islets of Langerhans in the pancreas produce insulin to regulate blood glucose levels." },
  { statement: "Xylem transports food in plants.", answer: false, explanation: "Xylem transports WATER and minerals upward. Phloem transports food (sugars) from leaves to other parts." },
  { statement: "Hemoglobin contains iron.", answer: true, explanation: "Each hemoglobin molecule contains four iron atoms that bind oxygen, giving blood its red color." },
  { statement: "Moss reproduces by seeds.", answer: false, explanation: "Moss is a non-vascular plant that reproduces by spores, not seeds. It belongs to the bryophytes." },
  { statement: "The human skeleton has 206 bones.", answer: true, explanation: "Adults have 206 bones. Babies are born with about 270, but many fuse together as they grow." },
  { statement: "Photosynthesis produces carbon dioxide.", answer: false, explanation: "Photosynthesis CONSUMES CO₂ and produces oxygen and glucose. Respiration is what produces CO₂." },
];

const TrueFalseGame = () => {
  const questions = useMemo(() => [...trueFalseQuestions].sort(() => Math.random() - 0.5).slice(0, 15), []);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean | null>(null);
  const finished = current >= questions.length;

  const handleAnswer = (answer: boolean) => {
    if (answered !== null) return;
    setAnswered(answer);
    if (answer === questions[current].answer) setScore(s => s + 1);
  };

  const handleNext = () => {
    setCurrent(c => c + 1);
    setAnswered(null);
  };

  if (finished) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center animate-slide-up">
        <span className="text-6xl block mb-4">{score / questions.length >= 0.8 ? "🏆" : "📚"}</span>
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">Game Over!</h1>
        <p className="text-4xl font-display font-bold text-primary mb-4">{score}/{questions.length}</p>
        <div className="flex gap-3 justify-center">
          <Button variant="hero" onClick={() => window.location.reload()}>Play Again</Button>
          <Link to="/games"><Button variant="outline">All Games</Button></Link>
        </div>
      </div>
    </div>
  );

  const q = questions[current];
  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/games" className="flex items-center gap-2"><span className="text-2xl">🌿</span><span className="font-display text-xl font-bold text-primary">FloraFaunaVerse</span></Link>
          <span className="font-display font-semibold text-foreground">Score: {score}/{current}</span>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-4 flex justify-between text-sm text-muted-foreground">
          <span>Question {current + 1} of {questions.length}</span>
          <span>✅ True or ❌ False</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 mb-8"><div className="gradient-nature h-2 rounded-full transition-all" style={{ width: `${((current + 1) / questions.length) * 100}%` }} /></div>
        <div className="rounded-xl border border-border bg-card p-8 mb-6 shadow-card animate-fade-in text-center">
          <p className="font-display text-xl font-semibold text-card-foreground mb-8">"{q.statement}"</p>
          <div className="flex gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              className={`text-lg px-8 ${answered === true ? (q.answer ? "ring-2 ring-primary" : "ring-2 ring-destructive opacity-60") : ""}`}
              onClick={() => handleAnswer(true)}
              disabled={answered !== null}
            >✅ True</Button>
            <Button
              variant="game"
              size="lg"
              className={`text-lg px-8 ${answered === false ? (!q.answer ? "ring-2 ring-primary" : "ring-2 ring-destructive opacity-60") : ""}`}
              onClick={() => handleAnswer(false)}
              disabled={answered !== null}
            >❌ False</Button>
          </div>
        </div>
        {answered !== null && (
          <>
            <div className="rounded-xl border border-border bg-accent p-5 mb-6 animate-fade-in">
              <h3 className="font-display font-semibold text-accent-foreground mb-2">
                {answered === q.answer ? "✅ Correct!" : `❌ Wrong! The answer is ${q.answer ? "True" : "False"}`}
              </h3>
              <p className="text-sm text-accent-foreground/80">{q.explanation}</p>
            </div>
            <Button variant="hero" size="lg" className="w-full" onClick={handleNext}>
              {current + 1 >= questions.length ? "See Results" : "Next Question →"}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default TrueFalseGame;
