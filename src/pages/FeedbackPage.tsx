import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import pmcLogo from "@/assets/pmc-logo.png";
import FeedbackForm from "@/components/FeedbackForm";
import { saveFeedback } from "@/lib/feedbackStore";
import type { Rating } from "@/pages/Index";

const FeedbackPage = () => {
  const { rating } = useParams<{ rating: Rating }>();
  const navigate = useNavigate();

  const handleSubmit = (data: { name: string; email: string; phone: string; comments: string }) => {
    if (!rating) return;
    saveFeedback({ rating: rating as Rating, ...data, date: new Date().toISOString() });
    navigate("/thank-you");
  };

  const handleBack = () => {
    navigate("/");
  };

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
            Tell Us More
          </h1>
          <p className="mt-1 text-base text-primary-foreground/85">
            We'd love to hear your feedback!
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col items-center px-6 py-10">
          <div className="w-full max-w-md">
            <button
              onClick={handleBack}
              className="mb-6 text-sm text-primary hover:underline"
            >
              ← Back to ratings
            </button>
            <FeedbackForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackPage;