import { ClipboardCheck, Share2, DollarSign, CreditCard } from "lucide-react";

const steps = [
  {
    title: "Sign Up",
    description: "Submit your application to become a Fleek affiliate.",
    icon: ClipboardCheck,
  },
  {
    title: "Start Referring",
    description: "Share your unique referral link or promote Fleek through your preferred channels.",
    icon: Share2,
  },
  {
    title: "Earn Rewards",
    description: "Receive a 10% commission for every successful signup through your link.",
    icon: DollarSign,
  },
  {
    title: "Receive your Reward",
    description: "Get your commissions via PayPal, Wise, Crypto, or Fleek credits monthly.",
    icon: CreditCard,
  },
];

export const HowItWorks = () => {
  return (
    <div className="py-24 bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How It Works
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative p-6 bg-[#1A1A1A] rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-800"
            >
              <div className="w-12 h-12 rounded-lg bg-yellow-400/10 flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="absolute -top-4 left-4 bg-yellow-400 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};