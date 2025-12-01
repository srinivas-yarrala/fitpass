"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Search, MapPin, Star, Dumbbell, ShowerHead, Waves, Filter } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/organisms/Header";
import MobileNav from "@/components/organisms/MobileNav";
import gym1 from "@/assets/gym-cards/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg";
import gym2 from "@/assets/gym-cards/depositphotos_148533399-stock-photo-modern-gym-with-dumbbell-set.jpg";
import gym3 from "@/assets/gym-cards/gym-with-indoor-cycling-equipment_23-2149270210.jpg";
import gym4 from "@/assets/gym-cards/images (1).jpeg";
import gym5 from "@/assets/gym-cards/images.jpeg";
import gym6 from "@/assets/gym-cards/istockphoto-1448303096-612x612.jpg";
import gym7 from "@/assets/gym-cards/photo-1571902943202-507ec2618e8f.jpeg";
import gym8 from "@/assets/gym-cards/within-gym-modern-fitness-equipment-600nw-1471750145.webp";

const gymCardImages = [gym1, gym2, gym3, gym4, gym5, gym6, gym7, gym8];

const gyms = new Array(12).fill(null).map((_, i) => ({
  id: i,
  name: `Partner Gym ${i + 1}`,
  distance: `${(((i + 1) * 0.4)).toFixed(1)} km`,
  rating: (4 + ((i % 5) / 10)).toFixed(1),
}));

const GymCard = ({ gym }: { gym: { id: number; name: string; distance: string; rating: string } }) => {
  return (
    <Card className="p-3">
      <div className="relative h-32 rounded-lg mb-2 overflow-hidden">
        <Image
          src={gymCardImages[gym.id % gymCardImages.length]}
          alt={gym.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 left-2 bg-background/70 backdrop-blur px-2 py-0.5 rounded-full text-[10px] border border-border">Open till 10:00 PM</div>
        <div className="absolute bottom-2 right-2 bg-background/70 backdrop-blur px-2 py-0.5 rounded-full text-[10px] border border-border inline-flex items-center gap-1">
          <Star size={12} className="text-yellow-500/90" />
          {gym.rating}
        </div>
      </div>
      <div className="font-semibold truncate">{gym.name}</div>
      <div className="flex items-center text-xs text-muted-foreground mb-1 gap-2 opacity-70 mt-0.5">
        <Dumbbell size={14} />
        <ShowerHead size={14} />
        <Waves size={14} />
      </div>
      <div className="flex items-center justify-between text-[11px] text-muted-foreground">
        <span>{gym.distance} away</span>
        <span className="font-semibold text-foreground">from ₹{149 + (gym.id % 4) * 50}</span>
      </div>
    </Card>
  );
};

export default function GymsPage() {
  const [view, setView] = useState<"list" | "map">("list");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      <div className="container mx-auto px-4 lg:px-8 pt-24">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Find Gyms</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setView("list")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                view === "list" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
              }`}
            >
              List
            </button>
            <button
              onClick={() => setView("map")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                view === "map" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
              }`}
            >
              Map
            </button>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              placeholder="Search gyms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <button className="px-4 py-2 border border-border rounded-lg flex items-center gap-2">
                <Filter size={18} />
                Filters
              </button>
            </PopoverTrigger>
            <PopoverContent>Filter options coming soon</PopoverContent>
          </Popover>
        </div>

        {view === "list" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gyms.map((gym) => (
              <GymCard key={gym.id} gym={gym} />
            ))}
          </div>
        ) : (
          <div className="h-[600px] bg-secondary/30 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Map view coming soon</p>
          </div>
        )}
      </div>
      <MobileNav />
    </div>
  );
}

