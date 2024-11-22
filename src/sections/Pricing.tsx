"use client";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";

type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small businesses getting started",
    features: [
      "Basic AI insights",
      "5 reports per month",
      "Email support",
      "Basic analytics dashboard",
    ],
  },
  {
    name: "Professional",
    price: "$99",
    description: "Ideal for growing businesses",
    features: [
      "Advanced AI insights",
      "Unlimited reports",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
      "Team collaboration",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "Custom AI solutions",
      "Dedicated support team",
      "Advanced security features",
      "Custom reporting",
      "API access",
      "SLA guarantee",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-medium tracking-tighter">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-white/70 mt-4">
            Choose the plan that&apos;s right for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              className={`relative rounded-xl p-8 border ${
                tier.highlighted
                  ? "border-purple-500 bg-purple-500/10"
                  : "border-white/10 hover:border-white/20"
              } transition-colors`}
              whileHover={{ y: -5 }}
              initial={{ y: 0 }}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-purple-500 text-sm rounded-full px-3 py-1">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-medium mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && (
                    <span className="text-white/70">/month</span>
                  )}
                </div>
                <p className="text-white/70 mt-2">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-purple-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button>
                {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
