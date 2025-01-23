import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Fleek?",
    answer: "Fleek is a leading platform for easily deploying and hosting AI agents and apps. For both developers and non-developers.",
  },
  {
    question: "How are commissions paid?",
    answer: "Commissions are paid monthly via PayPal, Wise, Crypto, or Fleek credits, offering convenient and secure options for affiliates worldwide.",
  },
  {
    question: "Is there a cap on referrals?",
    answer: "No, referrals are uncapped and unlimited, you can refer as many people as you'd like. The 10% commission applies to any and all payments by a successful referral to Fleek for 1 year from the date of the referral's successful signup.",
  },
  {
    question: "Do I need technical expertise to join?",
    answer: "Nope! Whether you're a developer, a content creator, or anything else, there's room for you in our affiliate program.",
  },
];

export const FAQ = () => {
  return (
    <div className="py-24 bg-[#0A0A0A]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-800 rounded-lg bg-[#1A1A1A] px-4"
            >
              <AccordionTrigger className="text-white hover:text-yellow-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};