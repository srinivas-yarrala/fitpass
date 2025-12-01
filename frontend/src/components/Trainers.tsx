import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import { ArrowRight, Star } from "lucide-react";

const trainers = [
  {
    name: "Marcus Johnson",
    role: "Strength Coach",
    image: trainer1,
    rating: 4.8,
    specialties: ["Powerlifting", "Bodybuilding", "Nutrition"],
  },
  {
    name: "Sarah Martinez",
    role: "Fitness Expert",
    image: trainer2,
    rating: 4.6,
    specialties: ["HIIT", "Yoga", "Wellness"],
  },
];

export const Trainers = () => {
  return (
    <section id="trainers" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trainer marketplace (coming soon)
            <span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Follow curated plans from local experts. Coach integrations unlock in the next release.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    {trainer.name}
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground/90">
                      <Star size={14} className="text-yellow-500/90" />
                      {trainer.rating?.toFixed(1)}
                    </span>
                  </h3>
                  <ArrowRight size={18} className="text-primary" />
                </div>
                <p className="text-primary font-semibold mb-4">{trainer.role}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {trainer.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-semibold"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Social buttons removed per request */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

