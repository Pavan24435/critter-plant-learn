import { Link, useParams } from "react-router-dom";
import { getTopicById, topics } from "@/data/topics";
import { getQuestionsByTopic } from "@/data/quizQuestions";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TopicPage = () => {
  const { id } = useParams();
  const topic = getTopicById(id || "");
  const questions = getQuestionsByTopic(id || "");
  const [activeFlowchart, setActiveFlowchart] = useState(0);
  const [expandedStep, setExpandedStep] = useState<string | null>(null);
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

  const flowchart = topic.flowcharts[activeFlowchart];

  const getFlowchartIcon = (type: string) => {
    if (type === "process") return "⚙️";
    if (type === "classification") return "📋";
    return "🔄";
  };

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
        <div className="mb-8 p-4 rounded-xl border border-border bg-card">
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

        {/* Flowcharts - 3 types */}
        <div className="mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">📊 Flowcharts & Diagrams</h2>
          <div className="flex gap-2 mb-4 flex-wrap">
            {topic.flowcharts.map((fc, i) => (
              <Button key={i} variant={activeFlowchart === i ? "hero" : "outline"} size="sm" onClick={() => { setActiveFlowchart(i); setExpandedStep(null); }}>
                {getFlowchartIcon(fc.type)} {fc.title}
              </Button>
            ))}
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">{getFlowchartIcon(flowchart.type)}</span>
              <h3 className="font-display font-semibold text-card-foreground">{flowchart.title}</h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground capitalize">{flowchart.type}</span>
            </div>
            <div className="space-y-3">
              {flowchart.steps.map((step, i) => (
                <div key={step.id}>
                  <button
                    onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                    className="w-full text-left p-4 rounded-lg border border-border bg-background hover:bg-accent transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full gradient-nature flex items-center justify-center text-primary-foreground text-sm font-bold">
                        {i + 1}
                      </span>
                      <span className="font-display font-semibold text-foreground">{step.label}</span>
                      <span className="ml-auto text-muted-foreground text-xs">{expandedStep === step.id ? "▲" : "▼"}</span>
                    </div>
                    {expandedStep === step.id && (
                      <p className="mt-3 ml-11 text-sm text-muted-foreground animate-fade-in">{step.description}</p>
                    )}
                  </button>
                  {step.next && i < flowchart.steps.length - 1 && (
                    <div className="flex justify-center py-1">
                      <span className="text-muted-foreground">
                        {flowchart.type === "classification" ? "┣━" : flowchart.type === "cycle" && i === flowchart.steps.length - 2 ? "↩️" : "↓"}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video */}
        {topic.videoUrl && (
          <div className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">🎬 Video Tutorial</h2>
            <div className="rounded-xl overflow-hidden border border-border aspect-video">
              <iframe src={topic.videoUrl} className="w-full h-full" allowFullScreen title={topic.title} />
            </div>
          </div>
        )}

        {/* Quiz Link */}
        {questions.length > 0 && (
          <div className="rounded-xl gradient-nature p-8 text-center">
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
