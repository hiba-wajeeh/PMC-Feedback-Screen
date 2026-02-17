import pmcLogo from "@/assets/pmc-logo.png";
import bottomLeftImage from "@/assets/leftcorner.png"; // Replace with your actual image filename
import EmojiRating from "@/components/EmojiRating";

const Index = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      {/* Logo Section */}
      <div className="flex flex-col items-center px-6 pt-10 pb-4">
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
        <h1 className="text-3xl font-bold text-white">
          Welcome to PMC
        </h1>
        <p className="mt-1 text-base text-white/85">
          Thank you for choosing us!
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col items-center px-6 py-10">
        <h2 className="mb-8 text-center text-xl font-semibold text-primary">
          How was your overall experience today?
        </h2>

        <EmojiRating selected={null} onSelect={() => {}} />
      </div>

      {/* Bottom Left Image */}
      <img 
        src={bottomLeftImage} 
        alt="Bottom decoration" 
        className="fixed bottom-0 left-0 w-98 h-auto z-10"
      />

      {/* Top Right Image (same image, rotated 90 degrees) */}
      <img 
        src={bottomLeftImage} 
        alt="Top decoration" 
        className="fixed top-0 right-0 w-48 h-auto z-10 rotate-180"
      />
    </div>
  );
};

export default Index;