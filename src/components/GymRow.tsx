import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Dumbbell, ShowerHead, Waves } from "lucide-react";

const gyms = new Array(10).fill(null).map((_, i) => ({
  id: i,
  name: `Partner Gym ${i + 1}`,
  distance: `${(i + 1) * 0.4} km`,
}));

export const GymRow = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Popular near you</h3>
          <Link to="/gyms" className="text-sm text-primary font-semibold">See all</Link>
        </div>
        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 min-w-max">
            {gyms.map((g) => (
              <Card key={g.id} className="snap-start w-64 flex-shrink-0 p-3">
                <div className="relative aspect-video rounded-lg bg-muted mb-3 overflow-hidden">
                  <div className="absolute top-2 left-2 bg-background/70 backdrop-blur px-2 py-0.5 rounded-full text-[10px] border border-border">Open till 10:00 PM</div>
                  <div className="absolute bottom-2 right-2 bg-background/70 backdrop-blur px-2 py-0.5 rounded-full text-[10px] border border-border inline-flex items-center gap-1"><Star size={12} className="text-yellow-500/90" />4.{(g.id % 5) + 1}</div>
                </div>
                <div className="font-semibold truncate">{g.name}</div>
                <div className="text-xs text-muted-foreground mb-2">{g.distance} away</div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 opacity-70">
                  <Dumbbell size={14} />
                  <ShowerHead size={14} />
                  <Waves size={14} />
                </div>
                <Button size="sm" className="mt-1 rounded-full">View</Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymRow;


