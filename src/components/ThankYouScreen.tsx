import { Button } from "@/components/ui/button";
import { CheckCircle, Download, RotateCcw } from "lucide-react";

interface Props {
  onReset: () => void;
  onDownload: () => void;
}

const ThankYouScreen = ({ onReset, onDownload }: Props) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-2xl bg-card p-10 text-center shadow-xl border border-border">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Thank You!</h2>
        <p className="mt-2 text-muted-foreground">
          Your feedback has been recorded successfully. We appreciate your time!
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Button onClick={onReset} className="w-full gap-2">
            <RotateCcw className="h-4 w-4" />
            Submit Another Response
          </Button>
          <Button onClick={onDownload} variant="outline" className="w-full gap-2">
            <Download className="h-4 w-4" />
            Download All Responses (CSV)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouScreen;
