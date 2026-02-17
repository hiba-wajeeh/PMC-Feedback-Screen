import pmcLogo from "@/assets/pmc-logo.png";
import EmojiRating from "@/components/EmojiRating";

const Index = () => {
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

          <EmojiRating selected={null} onSelect={() => {}} />
        </div>
      </div>
    </>
  );
};

export default Index;
