import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import twemoji from "twemoji";
import type { Rating } from "@/pages/Index";

const ratings: { 
  value: Rating; 
  emoji: string; 
  label: string;
  arabic: string;
  urdu: string;
}[] = [
  { 
    value: "excellent", 
    emoji: "😄", 
    label: "EXCELLENT",
    arabic: "ممتاز",
    urdu: "بہترین"
  },
  { 
    value: "good", 
    emoji: "🙂", 
    label: "GOOD",
    arabic: "جيد",
    urdu: "اچھا"
  },
  { 
    value: "average", 
    emoji: "😐", 
    label: "AVERAGE",
    arabic: "متوسط",
    urdu: "اوسط"
  },
  { 
    value: "bad", 
    emoji: "😟", 
    label: "BAD",
    arabic: "سيء",
    urdu: "برا"
  },
  { 
    value: "very_bad", 
    emoji: "😡", 
    label: "VERY BAD",
    arabic: "سيء جدا",
    urdu: "بہت برا"
  },
];

interface Props {
  selected: Rating | null;
  onSelect: (rating: Rating) => void;
}

const EmojiRating = ({ selected, onSelect }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (containerRef.current) {
      twemoji.parse(containerRef.current, {
        folder: "svg",
        ext: ".svg",
      });
    }
  }, []);

  const handleEmojiClick = (rating: Rating) => {
    navigate(`/feedback/${rating}`);
  };

  return (
    <div ref={containerRef} className="flex justify-center gap-3">
      {ratings.map((r) => {
        const isSelected = selected === r.value;
        return (
          <button
            key={r.value}
            onClick={() => handleEmojiClick(r.value)}
            className={`flex flex-col items-center gap-1 rounded-xl px-3 py-3 transition-all duration-200 ${
              isSelected
                ? "bg-primary/10 ring-2 ring-primary scale-110"
                : "hover:bg-emoji-hover hover:scale-105"
            }`}
          >
            <span className="text-7xl [&_img]:inline-block [&_img]:h-32 [&_img]:w-32">{r.emoji}</span>
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-[15px] font-bold text-black">
                {r.label}
              </span>
              <span className="text-[14px] font-bold text-black" dir="rtl">
                {r.arabic}
              </span>
              <span className="text-[14px] font-bold text-black" dir="rtl">
                {r.urdu}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default EmojiRating;
