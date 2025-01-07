import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { WhoCanJoin } from "@/components/WhoCanJoin";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <WhoCanJoin />
      <Footer />
    </div>
  );
};

export default Index;