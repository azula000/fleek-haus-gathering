import { DollarSign, Rocket, Gift } from "lucide-react";

const features = [
  {
    title: "Competitive Cash Rewards",
    description: "Earn 10% commission for every new referral to Fleek.",
    icon: DollarSign,
  },
  {
    title: "Early Access",
    description: "Get early access to new features and products before they're publicly available.",
    icon: Rocket,
  },
  {
    title: "Bonus Token Incentives",
    description: "Affiliates will also qualify for future token incentives in addition to the cash rewards, which will be tied to their affiliate performance.",
    icon: Gift,
  },
];

export const Features = () => {
  return (
    <div className="py-24 bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Become a Fleek Affiliate?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Discover the benefits of joining our Affiliate Program
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative p-6 bg-[#1A1A1A] rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-800"
            >
              <div className="w-12 h-12 rounded-lg bg-yellow-400/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};