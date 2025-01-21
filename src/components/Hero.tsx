import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Refer Users to Fleek and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
              Earn Cash Rewards
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-400 mb-8">
            Partner with Fleek to shape the future of the web and earn rewards while empowering developers 
            and businesses to build the next generation of AI agents and apps.
          </p>
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold">
            Join the movement and get rewarded
          </Button>
        </div>
      </div>
    </div>
  );
};