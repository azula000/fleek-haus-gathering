import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { WhoCanJoin } from "@/components/WhoCanJoin";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Hero />
      <Features />
      <WhoCanJoin />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;