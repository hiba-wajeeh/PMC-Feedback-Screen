import { useEffect, useRef } from "react";
import twemoji from "twemoji";
import type { Rating } from "@/pages/Index";

const ratings: { value: Rating; emoji: string; label: string }[] = [
  { value: "excellent", emoji: "😄", label: "Excellent" },
  { value: "good", emoji: "🙂", label: "Good" },
  { value: "average", emoji: "😐", label: "Average" },
  { value: "bad", emoji: "😟", label: "Bad" },
  { value: "very_bad", emoji: "😡", label: "Very Bad" },
];

interface Props {
  selected: Rating | null;
  onSelect: (rating: Rating) => void;
}

const EmojiRating = ({ selected, onSelect }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      twemoji.parse(containerRef.current, {
        folder: "svg",
        ext: ".svg",
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="flex justify-center gap-3">
      {ratings.map((r) => {
        const isSelected = selected === r.value;
        return (
          <button
            key={r.value}
            onClick={() => onSelect(r.value)}
            className={`flex flex-col items-center gap-1 rounded-xl px-3 py-3 transition-all duration-200 ${
              isSelected
                ? "bg-primary/10 ring-2 ring-primary scale-110"
                : "hover:bg-emoji-hover hover:scale-105"
            }`}
          >
            <span className="text-3xl [&_img]:inline-block [&_img]:h-8 [&_img]:w-8">{r.emoji}</span>
            <span
              className={`text-[10px] font-medium ${
                isSelected ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {r.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default EmojiRating;
