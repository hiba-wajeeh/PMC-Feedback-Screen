import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import FeedbackForm from "@/components/FeedbackForm";
import { saveFeedbackToSheet } from "@/lib/api";
import type { Rating } from "@/pages/Index";
import { useToast } from "@/hooks/use-toast";

const FeedbackPage = () => {
  const { rating } = useParams<{ rating: Rating }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: { name: string; email: string; phone: string; comments: string }) => {
    if (!rating) return;
    
    setIsSubmitting(true);
    
    try {
      const success = await saveFeedbackToSheet({
        rating,
        name: data.name,
        email: data.email,
        phone: data.phone,
        comments: data.comments
      });
      
      if (success) {
        navigate("/thank-you");
      } else {
        toast({
          title: "Error",
          description: "Failed to save feedback. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Failed to save feedback:", error);
      toast({
        title: "Error",
        description: "Failed to save feedback. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Welcome Banner */}
      <div className="bg-primary px-6 py-6 text-center">
        <h1 className="text-2xl font-bold text-white">
          Tell Us More
        </h1>
        <p className="mt-1 text-base text-white/85">
          We'd love to hear your feedback!
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col items-center px-6 py-10">
        <div className="w-full max-w-md">
          <button
            onClick={handleBack}
            className="mb-6 text-sm text-primary hover:underline"
            disabled={isSubmitting}
          >
            ← Back to ratings
          </button>
          <FeedbackForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
