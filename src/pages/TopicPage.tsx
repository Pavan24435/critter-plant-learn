import { Link, useParams } from "react-router-dom";
import { getTopicById } from "@/data/topics";
import { getQuestionsByTopic } from "@/data/quizQuestions";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import FlowchartViewer from "@/components/FlowchartViewer";

const TopicPage = () => {
  const { id } = useParams();
  const topic = getTopicById(id || "");
  const questions = getQuestionsByTopic(id || "");
  const [speaking, setSpeaking] = useState(false);

  if (!topic) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <p className="text-6xl mb-4">🔍</p>
        <h1 className="font-display text-2xl font-bold text-foreground mb-4">Topic Not Found</h1>
        <Link to="/explore"><Button variant="hero">Back to Topics</Button></Link>
      </div>
    </div>
  );

  const speak = () => {
    if (speaking) { window.speechSynthesis.cancel(); setSpeaking(false); return; }
    const utterance = new SpeechSynthesisUtterance(topic.audioDescription);
    utterance.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  };

  // Working YouTube video URLs for biology topics
  const videoUrls: Record<string, string> = {
    "plant-anatomy": "https://www.youtube.com/embed/bsR0aXSYRfY",
    "photosynthesis": "https://www.youtube.com/embed/sQK3Yr4Sc_k",
    "plant-respiration": "https://www.youtube.com/embed/eJ9Zjc-jdys",
    "transpiration": "https://www.youtube.com/embed/5GQbA0dFxCE",
    "mineral-nutrition": "https://www.youtube.com/embed/w77zPAtVTuI",
    "plant-hormones": "https://www.youtube.com/embed/nGLcGMxMeSk",
    "plant-reproduction": "https://www.youtube.com/embed/NxHTMR9p3Qs",
    "plant-genetics": "https://www.youtube.com/embed/CBezq1fFUEA",
    "plant-ecology": "https://www.youtube.com/embed/GlLLJSKd1a0",
    "animal-classification": "https://www.youtube.com/embed/mJOoU6GW5h8",
    "evolution": "https://www.youtube.com/embed/GhHOjC4oxh8",
    "genetics": "https://www.youtube.com/embed/8m6hHRlKwxY",
    "animal-behavior": "https://www.youtube.com/embed/0k-vm8mVVjE",
    "biodiversity": "https://www.youtube.com/embed/GK_vRtHJZu4",
    "digestive-system": "https://www.youtube.com/embed/Og5xAdC8EUI",
    "circulatory-system": "https://www.youtube.com/embed/CWFyxn0qDEU",
    "respiratory-system": "https://www.youtube.com/embed/bHZsvBdUC2I",
    "nervous-system": "https://www.youtube.com/embed/x4PPZCLnVkA",
    "excretory-system": "https://www.youtube.com/embed/CC6LN9tv1Bs",
    "muscular-system": "https://www.youtube.com/embed/VVL-8zr2hk4",
    "endocrine-system": "https://www.youtube.com/embed/eWHH9je2zG4",
    "immune-system": "https://www.youtube.com/embed/lXfEK8G8CUI",
    "flower-structure": "https://www.youtube.com/embed/S3yrw3OdRE8",
    "pre-fertilisation": "https://www.youtube.com/embed/fPbGKfKQME0",
    "double-fertilisation": "https://www.youtube.com/embed/I9CtC1O4hBc",
    "post-fertilisation": "https://www.youtube.com/embed/fPbGKfKQME0",
    "apomixis-polyembryony": "https://www.youtube.com/embed/S3yrw3OdRE8",
    "male-reproductive-system": "https://www.youtube.com/embed/4KNb32mVvTQ",
    "female-reproductive-system": "https://www.youtube.com/embed/4KNb32mVvTQ",
    "menstrual-cycle": "https://www.youtube.com/embed/ayzN5f3qN8g",
    "fertilisation-implantation": "https://www.youtube.com/embed/BFrVmDgh4v4",
    "pregnancy-embryonic-development": "https://www.youtube.com/embed/BFrVmDgh4v4",
    "parturition-lactation": "https://www.youtube.com/embed/BFrVmDgh4v4",
    "reproductive-health": "https://www.youtube.com/embed/4KNb32mVvTQ",
    "mendel-laws": "https://www.youtube.com/embed/Mehz7tCxjSE",
    "inheritance-one-gene": "https://www.youtube.com/embed/Mehz7tCxjSE",
    "inheritance-two-genes": "https://www.youtube.com/embed/Mehz7tCxjSE",
    "sex-determination": "https://www.youtube.com/embed/kMWxuF9YFSo",
    "mutation-genetic-disorders": "https://www.youtube.com/embed/8m6hHRlKwxY",
    "dna-structure": "https://www.youtube.com/embed/8kK2zwjRV0M",
    "dna-replication": "https://www.youtube.com/embed/TNKWgcFPHqw",
    "transcription": "https://www.youtube.com/embed/gG7uCskUOrA",
    "genetic-code-translation": "https://www.youtube.com/embed/gG7uCskUOrA",
    "gene-regulation": "https://www.youtube.com/embed/ztDtBK1Nfkw",
    "human-genome-project": "https://www.youtube.com/embed/AhsIF-cmoQQ",
    "origin-of-life": "https://www.youtube.com/embed/GhHOjC4oxh8",
    "evolution-theories": "https://www.youtube.com/embed/GhHOjC4oxh8",
    "evidence-evolution": "https://www.youtube.com/embed/GhHOjC4oxh8",
    "adaptive-radiation": "https://www.youtube.com/embed/GhHOjC4oxh8",
    "mechanisms-evolution": "https://www.youtube.com/embed/GhHOjC4oxh8",
    "human-evolution": "https://www.youtube.com/embed/GhHOjC4oxh8",
    "common-diseases": "https://www.youtube.com/embed/lXfEK8G8CUI",
    "immunity-detailed": "https://www.youtube.com/embed/lXfEK8G8CUI",
    "aids-cancer": "https://www.youtube.com/embed/lXfEK8G8CUI",
    "drugs-alcohol": "https://www.youtube.com/embed/lXfEK8G8CUI",
    "microbes-household": "https://www.youtube.com/embed/w77zPAtVTuI",
    "biocontrol-biofertilizers": "https://www.youtube.com/embed/w77zPAtVTuI",
    "biotech-agriculture-medicine": "https://www.youtube.com/embed/w77zPAtVTuI",
    "transgenic-animals-ethics": "https://www.youtube.com/embed/w77zPAtVTuI",
    "population-interactions": "https://www.youtube.com/embed/GK_vRtHJZu4",
    "ecosystem-structure-function": "https://www.youtube.com/embed/GK_vRtHJZu4",
    "decomposition": "https://www.youtube.com/embed/GK_vRtHJZu4",
    "energy-flow-pyramids": "https://www.youtube.com/embed/GK_vRtHJZu4",
  };

  const videoUrl = videoUrls[topic.id];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="font-display text-xl font-bold text-primary">FloraFaunaVerse</span>
          </Link>
          <div className="flex gap-2">
            <Link to="/explore"><Button variant="ghost" size="sm">← Topics</Button></Link>
            {questions.length > 0 && <Link to={`/quiz?topic=${topic.id}`}><Button variant="hero" size="sm">Take Quiz</Button></Link>}
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <span className="text-6xl block mb-4">{topic.icon}</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">{topic.title}</h1>
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent text-accent-foreground capitalize">{topic.category}</span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground capitalize">{topic.difficulty}</span>
          </div>
          <p className="text-muted-foreground">{topic.description}</p>
        </div>

        {/* Audio */}
        <div className="mb-8 p-4 rounded-xl border border-border bg-card shadow-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{speaking ? "🔊" : "🔈"}</span>
              <div>
                <h3 className="font-display font-semibold text-card-foreground">Audio Explanation</h3>
                <p className="text-xs text-muted-foreground">Listen to a summary of this topic</p>
              </div>
            </div>
            <Button onClick={speak} variant={speaking ? "destructive" : "hero"} size="sm">
              {speaking ? "⏹ Stop" : "▶ Play"}
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">📖 Explanation</h2>
          {topic.content.map((para, i) => (
            <p key={i} className="text-foreground/90 mb-4 leading-relaxed">{para}</p>
          ))}
        </div>

        {/* Key Points */}
        <div className="mb-10 p-6 rounded-xl bg-accent">
          <h3 className="font-display text-lg font-semibold text-accent-foreground mb-3">🎯 Key Points</h3>
          <div className="flex flex-wrap gap-2">
            {topic.keyPoints.map((kp, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-card text-card-foreground text-sm border border-border">{kp}</span>
            ))}
          </div>
        </div>

        {/* Flowcharts - improved component */}
        <FlowchartViewer flowcharts={topic.flowcharts} />

        {/* Video */}
        {videoUrl && (
          <div className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">🎬 Video Tutorial</h2>
            <div className="rounded-xl overflow-hidden border border-border shadow-card aspect-video">
              <iframe
                src={videoUrl}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title={topic.title}
              />
            </div>
          </div>
        )}

        {/* Quiz Link */}
        {questions.length > 0 && (
          <div className="rounded-xl gradient-nature p-8 text-center shadow-soft">
            <h2 className="font-display text-2xl font-bold text-primary-foreground mb-2">Ready to Test Your Knowledge?</h2>
            <p className="text-primary-foreground/80 mb-4">{questions.length} questions available for this topic</p>
            <Link to={`/quiz?topic=${topic.id}`}><Button variant="game" size="lg">📝 Start Quiz</Button></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicPage;
