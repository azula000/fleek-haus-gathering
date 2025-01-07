import { Rocket, Shield, Coins, Users } from "lucide-react";

const features = [
  {
    title: "Competitive Rewards",
    description: "Earn attractive commissions for every successful referral that joins Fleek's ecosystem.",
    icon: Coins,
  },
  {
    title: "Early Access",
    description: "Get first-hand experience with new features and products before they're publicly available.",
    icon: Rocket,
  },
  {
    title: "Dedicated Support",
    description: "Access exclusive resources and receive priority support from our affiliate team.",
    icon: Shield,
  },
  {
    title: "Growing Community",
    description: "Join a network of passionate builders and creators shaping the future of web3.",
    icon: Users,
  },
];

export const Features = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Become a Fleek Affiliate?
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};