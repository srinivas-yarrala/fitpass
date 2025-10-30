import { Card } from "@/components/ui/card";
import { Dumbbell, Heart, StretchHorizontal } from "lucide-react";

const categories = [
  { icon: Dumbbell, name: "Strength" },
  { icon: Heart, name: "Cardio" },
  { icon: StretchHorizontal, name: "Mobility" },
  { icon: Dumbbell, name: "Crossfit" },
  { icon: Heart, name: "HIIT" },
];

export const CategoriesRow = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Browse categories</h3>
        </div>
        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 min-w-max">
            {categories.map((c, i) => (
              <button key={i} className="snap-start w-28 h-28 flex-shrink-0 rounded-2xl bg-card border border-border flex flex-col items-center justify-center gap-2 shadow-sm">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary ring-2 ring-primary/20">
                  <c.icon size={18} />
                </span>
                <span className="text-xs font-semibold">{c.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesRow;


