import { useEffect, useRef } from "react";
import pmcLogo from "@/assets/pmc-logo.png";
import EmojiRating from "@/components/EmojiRating";

const Index = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for FinisherHeader to be available
    if (window.FinisherHeader && headerRef.current) {
      new window.FinisherHeader({
        "count": 4,
        "size": {
          "min": 1200,
          "max": 1500,
          "pulse": 0.1
        },
        "speed": {
          "x": {
            "min": 0,
            "max": 0.2
          },
          "y": {
            "min": 0,
            "max": 0.2
          }
        },
        "colors": {
          "background": "#1e8549",
          "particles": [
            "#ffffff",
            "#13b92a"
          ]
        },
        "blending": "lighten",
        "opacity": {
          "center": 0.8,
          "edge": 0.2
        },
        "skew": -2,
        "shapes": [
          "c",
          "t"
        ]
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Full Page Animated Background */}
      <div 
        ref={headerRef}
        className="finisher-header fixed inset-0 w-full h-full"
      />

      {/* Content Layer */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Logo Section */}
        <div className="flex flex-col items-center px-6 pt-10 pb-4">
          <div className="rounded-full bg-white p-2 shadow-lg ring-2 ring-white/30">
            <img
              src={pmcLogo}
              alt="PAD Logo"
              className="h-28 w-28 rounded-full object-contain"
            />
          </div>
        </div>

        {/* Welcome Banner */}
        <div className="bg-primary px-6 py-6 text-center">
          <h1 className="text-2xl font-bold text-primary-foreground">
            Welcome to PMC
          </h1>
          <p className="mt-1 text-base text-primary-foreground/85">
            Thank you for choosing us!
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col items-center px-6 py-10">
          <h2 className="mb-8 text-center text-xl font-semibold text-black">
            How was your overall experience today?
          </h2>

          <EmojiRating selected={null} onSelect={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Index;
