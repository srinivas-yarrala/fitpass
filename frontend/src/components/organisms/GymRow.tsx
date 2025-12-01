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

const gyms = new Array(10).fill(null).map((_, i) => ({
  id: i,
  name: `Partner Gym ${i + 1}`,
  distance: `${(((i + 1) * 0.4)).toFixed(1)} km`,
}));

const gymCardImages = [gym1, gym2, gym3, gym4, gym5, gym6, gym7, gym8];

export const GymRow = () => {
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
                  <Image
                    src={gymCardImages[g.id % gymCardImages.length]}
                    alt={g.name}
                    fill
                    className="object-cover"
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


