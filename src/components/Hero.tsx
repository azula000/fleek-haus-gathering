import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Join the Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Web3 Infrastructure
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-600 mb-8">
            Partner with Fleek to shape the autonomous internet. Earn rewards while helping developers and businesses build the next generation of applications.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Become an Affiliate
          </Button>
        </div>
      </div>
    </div>
  );
};