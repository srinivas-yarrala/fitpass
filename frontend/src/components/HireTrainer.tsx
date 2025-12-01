import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";

const trainers = [
  {
    name: "Marcus Johnson",
    role: "Strength Coach",
    image: trainer1,
    blurb: "Powerlifting, bodybuilding, and nutrition guidance tailored to your goals.",
  },
  {
    name: "Sarah Martinez",
    role: "Fitness Expert",
    image: trainer2,
    blurb: "HIIT, yoga, and wellness programs to build consistency and balance.",
  },
];

export const HireTrainer = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Hire a trainer</h3>
          <a href="#" className="text-sm text-primary font-semibold">See all</a>
        </div>
        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 min-w-max">
            {trainers.map((t, idx) => (
              <Card key={t.name} className="snap-start w-72 flex-shrink-0 p-3">
                <div className="relative aspect-video rounded-lg mb-3 overflow-hidden">
                  <img src={t.image} alt={t.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute bottom-2 right-2 bg-background/70 backdrop-blur px-2 py-0.5 rounded-full text-[10px] border border-border inline-flex items-center gap-1">
                    <Star size={12} className="text-yellow-500/90" />
                    4.{5 + (idx % 4)}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{t.name}</div>
                  <ArrowRight size={16} className="text-primary flex-shrink-0" />
                </div>
                <div className="text-xs text-primary font-semibold mb-1">{t.role}</div>
                <div className="text-xs text-muted-foreground">{t.blurb}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireTrainer;



