"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Star, Dumbbell, ShowerHead, Waves } from "lucide-react";
import gym1 from "@/assets/gym-cards/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg";
import gym2 from "@/assets/gym-cards/depositphotos_148533399-stock-photo-modern-gym-with-dumbbell-set.jpg";
import gym3 from "@/assets/gym-cards/gym-with-indoor-cycling-equipment_23-2149270210.jpg";
import gym4 from "@/assets/gym-cards/images (1).jpeg";
import gym5 from "@/assets/gym-cards/images.jpeg";
import gym6 from "@/assets/gym-cards/istockphoto-1448303096-612x612.jpg";
import gym7 from "@/assets/gym-cards/photo-1571902943202-507ec2618e8f.jpeg";
import gym8 from "@/assets/gym-cards/within-gym-modern-fitness-equipment-600nw-1471750145.webp";

const featuredGyms = new Array(8).fill(null).map((_, i) => ({
  id: i,
  name: `Featured Gym ${i + 1}`,
  distance: `${(((i + 2) * 0.3)).toFixed(1)} km`,
}));

const gymCardImages = [gym1, gym2, gym3, gym4, gym5, gym6, gym7, gym8];

interface FeaturedGymsProps {
  standout?: boolean;
}

export const FeaturedGyms = ({ standout }: FeaturedGymsProps) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-foreground">Featured gyms</h3>
          <Link href="/gyms" className="text-sm text-primary font-semibold">
            See all
          </Link>
        </div>
        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar">
          <div className="flex gap-4 min-w-max">
            {featuredGyms.map((g) => (
              <Card
                key={g.id}
                className="snap-start w-64 flex-shrink-0 overflow-hidden border border-border bg-card rounded-xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={gymCardImages[g.id % gymCardImages.length]}
                    alt={g.name}
                    fill
                    className="object-cover"
                  />
                  {/* Gold ribbon at top-right edge */}
                  <div className="absolute top-0 right-0">
                    <div className="relative">
                      <div className="px-3 py-1 bg-neo-gold text-black text-[10px] font-semibold rounded-bl-md shadow-sm">
                        Featured
                      </div>
                      <div className="absolute right-0 top-full w-0 h-0 border-l-[6px] border-l-transparent border-t-[6px] border-t-neo-gold" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-background/90 px-2 py-1 text-[10px] font-medium text-foreground">
                    <Star size={12} className="text-primary" />
                    4.{(g.id % 5) + 2}
                  </div>
                </div>
                <div className="p-3">
                  <div className="font-semibold text-foreground truncate">{g.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{g.distance} away</div>
                  <div className="flex items-center gap-3 mt-2 text-primary">
                    <Dumbbell size={16} />
                    <ShowerHead size={16} />
                    <Waves size={16} />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGyms;
