import { MapPinned, QrCode, Sparkles, LineChart } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "next/link";

const programs = [
  {
    icon: MapPinned,
    title: "Gym discovery",
    description: "Find partner gyms nearby with filters for equipment, ratings, and hours.",
    features: ["Map & list view", "Facility filters", "Live offers"],
  },
  {
    icon: QrCode,
    title: "Fast check‑in",
    description: "Scan a QR and you're in—GPS and optional selfie keep it fair.",
    features: ["QR token", "GPS validation", "Fraud protection"],
  },
  {
    icon: Sparkles,
    title: "AI workouts",
    description: "Daily suggestions based on goal, history, and recovery gaps.",
    features: ["Smart templates", "Swap movements", "Recovery-aware"],
  },
  {
    icon: LineChart,
    title: "Progress & streaks",
    description: "See attendance, strength PRs, and keep your streak alive.",
    features: ["Charts", "PR cards", "Badges"],
  },
];

export const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The core of CityPass Fit+
            <span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore gyms, check in fast, get a smart workout, and track progress—all in one app.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon size={32} className="text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-4">{program.description}</p>

                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={
                  program.title === "Gym discovery" ? "/gyms" :
                  program.title === "Fast check‑in" ? "/check-in" :
                  program.title === "AI workouts" ? "/log" :
                  "/progress"
                }>
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground">
                    Learn more
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
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

