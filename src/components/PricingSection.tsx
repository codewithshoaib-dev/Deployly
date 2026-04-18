import { useState } from "react";

const PricingData = {
  monthly: [
    {
      title: "Starter",
      price: "Free",
      features: ["1 Project", "3 Deploys/Day", "Community Support"],
    },
    {
      title: "Pro",
      price: 19,
      features: [
        "Unlimited Projects",
        "Advanced CI/CD",
        "Custom Domains",
        "Email Support",
      ],
    },
    {
      title: "Team",
      price: 99,
      features: [
        "Everything in Pro",
        "Team Management",
        "Audit Logs",
        "Priority Support",
      ],
    },
  ],

  yearly: [
    {
      title: "Starter",
      price: "Free",
      features: ["1 Project", "3 Deploys/Day", "Community Support"],
    },
    {
      title: "Pro",
      price: 182,
      features: [
        "Unlimited Projects",
        "Advanced CI/CD",
        "Custom Domains",
        "Email Support",
      ],
    },
    {
      title: "Team",
      price: 950,
      features: [
        "Everything in Pro",
        "Team Management",
        "Audit Logs",
        "Priority Support",
      ],
    },
  ],
};

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<{
    title: string;
    price: string | number;
    features: string[];
  }>(PricingData["monthly"][1]);

  const suffix = billing === "monthly" ? "/mo" : "/yr";

  const handleClick = () => {
    alert("This Feature is not available in Demo!");
  };

  return (
    <section id="pricing" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">
        Simple, predictable pricing
      </h2>

      <div className="flex justify-center mb-8">
        <button
          onClick={() => setBilling("monthly")}
          className={`px-4 py-2 rounded-l-xl text-sm font-medium border ${
            billing === "monthly"
              ? "bg-purple-600 text-white"
              : "bg-neutral-300 text-neutral-800 border-neutral-400"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling("yearly")}
          className={`px-4 py-2 rounded-r-xl text-sm font-medium  border ${
            billing === "yearly"
              ? "bg-purple-600 text-white"
              : "bg-neutral-300 text-neutral-800 border-neutral-400"
          }`}
        >
          Yearly (Save 20%)
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 text-center">
        {PricingData[billing as keyof typeof PricingData].map(
          (plan: {
            title: string;
            price: string | number;
            features: string[];
          }) => {
            const isSelected = selectedPlan?.title === plan.title;
            const isPro = plan.title === "Pro";

            const displayPrice =
              typeof plan.price === "number"
                ? `$${plan.price}${suffix}`
                : plan.price;

            return (
              <div
                key={plan.title}
                onClick={() => setSelectedPlan(plan)}
                className={`relative p-6 rounded-2xl border cursor-pointer transition transform duration-200 ${
                  isSelected
                    ? "border-purple-400 bg-purple-700 text-white scale-105 shadow-xl"
                    : "bg-neutral-200 border-neutral-300 hover:border-purple-500 text-neutral-100"
                }`}
              >
                {isPro && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    Most Popular
                  </div>
                )}
                <h3
                  className={`text-xl ${isSelected ? " " : "text-foreground"} font-semibold mb-2`}
                >
                  {plan.title}
                </h3>
                <p
                  className={`text-2xl ${isSelected ? " " : "text-foreground"}   font-bold mb-4`}
                >
                  {displayPrice}
                </p>
                <ul
                  className={` ${isSelected ? " " : "text-foreground"} space-y-2`}
                >
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            );
          },
        )}
      </div>

      {selectedPlan && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleClick}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-xl transition"
          >
            Get Started with {selectedPlan.title}
          </button>
        </div>
      )}
    </section>
  );
}
