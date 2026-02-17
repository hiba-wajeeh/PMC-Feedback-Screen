import { useState } from "react";
import pmcLogo from "@/assets/pmc-logo.png";
import EmojiRating from "@/components/EmojiRating";
import FeedbackForm from "@/components/FeedbackForm";
import ThankYouScreen from "@/components/ThankYouScreen";
import { downloadFeedbackAsCSV, saveFeedback } from "@/lib/feedbackStore";

export type Rating = "excellent" | "good" | "average" | "bad" | "very_bad";

const Index = () => {
  const [selectedRating, setSelectedRating] = useState<Rating | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (data: { name: string; email: string; phone: string; comments: string }) => {
    if (!selectedRating) return;
    saveFeedback({ rating: selectedRating, ...data, date: new Date().toISOString() });
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelectedRating(null);
    setSubmitted(false);
  };

  if (submitted) {
    return <ThankYouScreen onReset={handleReset} onDownload={downloadFeedbackAsCSV} />;
  }

  return (
    <>
      <div className="animated-bg">
        <div className="blob-3" />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col">
      {/* Logo Section */}
      <div className="flex flex-col items-center bg-white px-6 pt-10 pb-4">
        <div className="rounded-full bg-white p-2 shadow-lg ring-2 ring-primary/30">
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
        <h2 className="mb-8 text-center text-xl font-semibold text-foreground">
          How was your overall experience today?
        </h2>

        <EmojiRating selected={selectedRating} onSelect={setSelectedRating} />

        {selectedRating && (
          <div className="mt-10 w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-300">
            <FeedbackForm onSubmit={handleSubmit} />
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Index;
