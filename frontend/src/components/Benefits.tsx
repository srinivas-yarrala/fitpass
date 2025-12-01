import { MapPin, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "next/link";

const benefits = [
  {
    icon: MapPin,
    title: "Multi‑gym access",
    description: "Use one pass to enter any partner gym near you.",
  },
  {
    icon: Sparkles,
    title: "AI daily workouts",
    description: "Smart suggestions based on your goals and recovery.",
  },
  {
    icon: ShieldCheck,
    title: "Secure check‑ins",
    description: "QR + GPS validation to keep perks fair and fast.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-4">
            <span className="text-xs font-bold tracking-wider">WHY CITYPASS FIT+</span>
          </div>
          <p className="text-sm text-muted-foreground mb-2">Why choose us?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Built to keep you moving
            <span className="text-primary">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary transition-all duration-300 group"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon size={40} className="text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground mb-6">{benefit.description}</p>

                <Link href={benefit.title === "Multi‑gym access" ? "/gyms" : benefit.title === "AI daily workouts" ? "/log" : "/check-in"}>
                  <Button variant="link" className="text-primary font-semibold">
                    Learn more →
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

