import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Day Pass",
    price: "5",
    period: "day",
    description: "1 visit, any partner gym",
    features: [
      "QR check‑in",
      "GPS validation",
      "Access to workout logger",
    ],
    popular: false,
  },
  {
    name: "5‑Visit Pack",
    price: "20",
    period: "pack",
    description: "Flexible, valid 60 days",
    features: [
      "Any partner gym",
      "AI daily workouts",
      "Progress dashboard",
    ],
    popular: true,
  },
  {
    name: "Monthly",
    price: "39",
    period: "month",
    description: "Unlimited check‑ins",
    features: [
      "All access, all gyms",
      "Challenges & badges",
      "Priority support",
    ],
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose your pass
            <span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Pick a pass that matches how you train—single day, multi‑visit, or monthly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card border-2 rounded-2xl p-8 ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/20 scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold">
                  MOST POPULAR
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/passes">
                <Button
                  size="lg"
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                >
                  Get {plan.name}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Limited launch offer • Referral bonus on first pass
          </p>
        </div>
      </div>
    </section>
  );
};
