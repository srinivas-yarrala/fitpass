import { Card } from "@/components/ui/card";
import { Link } from "next/link";
import { Star, Dumbbell, ShowerHead, Waves } from "lucide-react";

const gyms = new Array(10).fill(null).map((_, i) => ({
  id: i,
  name: `Partner Gym ${i + 1}`,
  distance: `${(((i + 1) * 0.4)).toFixed(1)} km`,
}));

const gymCardImages = Object.values(
  import.meta.glob("@/assets/gym-cards/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" })
) as string[];

export const GymRow = () => {
  const images = gymCardImages.length > 0 ? gymCardImages : [];
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Popular near you</h3>
          <Link href="/gyms" className="text-sm text-primary font-semibold">See all</Link>
        </div>
        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar">
          <div className="flex gap-4 min-w-max">
            {gyms.map((g) => (
              <Card key={g.id} className="snap-start w-64 flex-shrink-0 p-3">
                <div className="relative aspect-video rounded-lg mb-3 overflow-hidden">
                  <img
                    src={images.length ? images[g.id % images.length] : undefined}
                    alt={g.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-background/70 backdrop-blur px-2 py-0.5 rounded-full text-[10px] border border-border">Open till 10:00 PM</div>
                  <div className="absolute bottom-2 right-2 bg-background/70 backdrop-blur px-2 py-0.5 rounded-full text-[10px] border border-border inline-flex items-center gap-1"><Star size={12} className="text-yellow-500/90" />4.{(g.id % 5) + 1}</div>
                </div>
                <div className="font-semibold truncate">{g.name}</div>
                <div className="flex items-center text-xs text-muted-foreground mb-2 gap-2 opacity-70">
                  <Dumbbell size={14} />
                  <ShowerHead size={14} />
                  <Waves size={14} />
                </div>
                <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>{g.distance} away</span>
                  <span className="font-semibold text-foreground">from ₹{(149 + (g.id % 4) * 50)}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymRow;



