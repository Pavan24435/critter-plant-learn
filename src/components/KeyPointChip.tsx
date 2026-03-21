import { useState } from "react";
import { keyPointDescriptions } from "@/data/keyPointDescriptions";

interface KeyPointChipProps {
  label: string;
}

const KeyPointChip = ({ label }: KeyPointChipProps) => {
  const [flipped, setFlipped] = useState(false);
  const description = keyPointDescriptions[label];

  if (!description) {
    return (
      <span className="px-3 py-1 rounded-full bg-card text-card-foreground text-sm border border-border">
        {label}
      </span>
    );
  }

  return (
    <button
      onClick={() => setFlipped(!flipped)}
      className={`text-left transition-all duration-300 ${
        flipped
          ? "w-full p-4 rounded-xl bg-primary/10 border-2 border-primary text-foreground"
          : "px-3 py-1 rounded-full bg-card text-card-foreground text-sm border border-border hover:bg-primary/10 hover:border-primary cursor-pointer hover:scale-105"
      }`}
    >
      {flipped ? (
        <div className="animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <span className="font-display font-semibold text-sm text-primary">{label}</span>
            <span className="text-xs text-muted-foreground">tap to close</span>
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed">{description}</p>
        </div>
      ) : (
        <span className="font-medium">{label}</span>
      )}
    </button>
  );
};

export default KeyPointChip;
