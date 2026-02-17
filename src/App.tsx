import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FeedbackPage from "./pages/FeedbackPage";
import ThankYouScreen from "./components/ThankYouScreen";
import NotFound from "./pages/NotFound";
import { downloadFeedbackAsCSV } from "./lib/feedbackStore";
import { useNavigate } from "react-router-dom";

const queryClient = new QueryClient();

const ThankYouWrapper = () => {
  const navigate = useNavigate();
  return (
    <ThankYouScreen
      onReset={() => navigate("/")}
      onDownload={downloadFeedbackAsCSV}
    />
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/feedback/:rating" element={<FeedbackPage />} />
          <Route path="/thank-you" element={<ThankYouWrapper />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
