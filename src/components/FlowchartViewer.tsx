import { FlowchartData } from "@/data/topics";
import { useState } from "react";

interface FlowchartViewerProps {
  flowcharts: FlowchartData[];
}

const FlowchartViewer = ({ flowcharts }: FlowchartViewerProps) => {
  const [activeFlowchart, setActiveFlowchart] = useState(0);
  const [expandedStep, setExpandedStep] = useState<string | null>(null);

  const flowchart = flowcharts[activeFlowchart];

  const getFlowchartIcon = (type: string) => {
    if (type === "process") return "⚙️";
    if (type === "classification") return "📋";
    return "🔄";
  };

  const getTypeColor = (type: string) => {
    if (type === "process") return "gradient-ocean";
    if (type === "classification") return "gradient-nature";
    return "gradient-sunset";
  };

  const getStepColor = (type: string, index: number, total: number) => {
    const progress = total > 1 ? index / (total - 1) : 0;
    if (type === "process") return `hsl(199, ${60 + progress * 30}%, ${45 - progress * 10}%)`;
    if (type === "classification") return `hsl(152, ${50 + progress * 20}%, ${35 - progress * 8}%)`;
    return `hsl(${45 - progress * 30}, ${80 - progress * 10}%, ${55 - progress * 10}%)`;
  };

  return (
    <div className="mb-10">
      <h2 className="font-display text-2xl font-bold text-foreground mb-4">📊 Flowcharts & Diagrams</h2>
      
      {/* Tab buttons */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {flowcharts.map((fc, i) => (
          <button
            key={i}
            onClick={() => { setActiveFlowchart(i); setExpandedStep(null); }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-display font-semibold transition-all duration-300 ${
              activeFlowchart === i
                ? `${getTypeColor(fc.type)} text-primary-foreground shadow-soft scale-105`
                : "bg-card border border-border text-card-foreground hover:bg-accent"
            }`}
          >
            {getFlowchartIcon(fc.type)} {fc.title}
          </button>
        ))}
      </div>

      {/* Flowchart card */}
      <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
        {/* Header */}
        <div className={`${getTypeColor(flowchart.type)} p-5`}>
          <div className="flex items-center gap-3">
            <span className="text-3xl">{getFlowchartIcon(flowchart.type)}</span>
            <div>
              <h3 className="font-display text-lg font-bold text-primary-foreground">{flowchart.title}</h3>
              <span className="text-xs text-primary-foreground/70 capitalize font-medium">{flowchart.type} diagram</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          {flowchart.type === "classification" ? (
            // Classification: Tree layout
            <div className="space-y-4">
              {/* Root node */}
              {flowchart.steps.filter(s => s.next && s.next.length > 0).slice(0, 1).map(root => (
                <div key={root.id} className="text-center mb-6">
                  <button
                    onClick={() => setExpandedStep(expandedStep === root.id ? null : root.id)}
                    className="inline-block px-6 py-3 rounded-xl font-display font-bold text-primary-foreground shadow-soft transition-all hover:scale-105"
                    style={{ background: getStepColor(flowchart.type, 0, flowchart.steps.length) }}
                  >
                    {root.label}
                  </button>
                  {expandedStep === root.id && (
                    <p className="mt-2 text-sm text-muted-foreground animate-fade-in max-w-md mx-auto">{root.description}</p>
                  )}
                  {/* Connector lines */}
                  <div className="flex justify-center mt-3 mb-1">
                    <div className="w-px h-6 bg-border" />
                  </div>
                  <div className="flex justify-center">
                    <div className="h-px bg-border" style={{ width: `${Math.min((root.next?.length || 1) * 180, 600)}px` }} />
                  </div>
                </div>
              ))}
              {/* Child nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {flowchart.steps.filter(s => !s.next || s.next.length === 0 || !flowchart.steps.some(parent => parent.next?.includes(flowchart.steps[0]?.id) === false)).slice(1).map((step, i) => (
                  <button
                    key={step.id}
                    onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                    className="text-left p-4 rounded-xl border-2 transition-all hover:scale-[1.02] hover:shadow-soft"
                    style={{ borderColor: getStepColor(flowchart.type, i + 1, flowchart.steps.length) }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground"
                        style={{ background: getStepColor(flowchart.type, i + 1, flowchart.steps.length) }}>
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="font-display font-semibold text-card-foreground text-sm">{step.label}</span>
                    </div>
                    {expandedStep === step.id && (
                      <p className="text-xs text-muted-foreground mt-1 animate-fade-in">{step.description}</p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ) : flowchart.type === "cycle" ? (
            // Cycle: Circular layout
            <div className="relative">
              <div className="flex flex-col items-center gap-2">
                {flowchart.steps.map((step, i) => (
                  <div key={step.id} className="w-full max-w-lg">
                    <button
                      onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                      className="w-full text-left p-4 rounded-xl border-2 transition-all hover:scale-[1.01] hover:shadow-soft relative"
                      style={{ borderColor: getStepColor(flowchart.type, i, flowchart.steps.length) }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground shadow-sm"
                          style={{ background: getStepColor(flowchart.type, i, flowchart.steps.length) }}>
                          {i + 1}
                        </span>
                        <span className="font-display font-semibold text-card-foreground">{step.label}</span>
                      </div>
                      {expandedStep === step.id && (
                        <p className="mt-3 ml-13 text-sm text-muted-foreground animate-fade-in pl-13">{step.description}</p>
                      )}
                    </button>
                    {/* Arrow connector */}
                    <div className="flex justify-center py-1">
                      <div className="flex flex-col items-center">
                        <div className="w-px h-4" style={{ background: getStepColor(flowchart.type, i, flowchart.steps.length) }} />
                        <span style={{ color: getStepColor(flowchart.type, i, flowchart.steps.length) }}>
                          {i === flowchart.steps.length - 1 ? "↩️" : "▼"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Cycle indicator */}
              <div className="text-center mt-2">
                <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">🔄 Cycle repeats</span>
              </div>
            </div>
          ) : (
            // Process: Linear flow
            <div className="space-y-1">
              {flowchart.steps.map((step, i) => (
                <div key={step.id}>
                  <button
                    onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                    className="w-full text-left p-4 rounded-xl border-l-4 bg-background hover:bg-accent/50 transition-all hover:shadow-sm"
                    style={{ borderLeftColor: getStepColor(flowchart.type, i, flowchart.steps.length) }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground"
                        style={{ background: getStepColor(flowchart.type, i, flowchart.steps.length) }}>
                        {i + 1}
                      </span>
                      <div className="flex-1">
                        <span className="font-display font-semibold text-foreground">{step.label}</span>
                        {expandedStep === step.id && (
                          <p className="text-sm text-muted-foreground mt-2 animate-fade-in">{step.description}</p>
                        )}
                      </div>
                      <span className="text-muted-foreground text-xs">{expandedStep === step.id ? "▲" : "▼"}</span>
                    </div>
                  </button>
                  {i < flowchart.steps.length - 1 && (
                    <div className="flex items-center ml-7 py-0.5">
                      <div className="w-px h-5" style={{ background: getStepColor(flowchart.type, i, flowchart.steps.length), marginLeft: '12px' }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlowchartViewer;
