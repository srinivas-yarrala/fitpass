"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Star, Dumbbell, Wifi, Sparkles, Navigation, ShowerHead, Wind, Users, Waves } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/organisms/Header";
import MobileNav from "@/components/organisms/MobileNav";
import FeaturedGyms from "@/components/organisms/FeaturedGyms";
import { getGyms, type GymItem } from "@/lib/api";
import gym1 from "@/assets/gym-cards/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg";
import gym2 from "@/assets/gym-cards/depositphotos_148533399-stock-photo-modern-gym-with-dumbbell-set.jpg";
import gym3 from "@/assets/gym-cards/gym-with-indoor-cycling-equipment_23-2149270210.jpg";
import gym4 from "@/assets/gym-cards/images (1).jpeg";
import gym5 from "@/assets/gym-cards/images.jpeg";
import gym6 from "@/assets/gym-cards/istockphoto-1448303096-612x612.jpg";
import gym7 from "@/assets/gym-cards/photo-1571902943202-507ec2618e8f.jpeg";
import gym8 from "@/assets/gym-cards/within-gym-modern-fitness-equipment-600nw-1471750145.webp";

const gymCardImages = [gym1, gym2, gym3, gym4, gym5, gym6, gym7, gym8];
const amenityIcons = [Dumbbell, Wifi, ShowerHead, Wind, Users, Waves];

function addAmenities(gym: GymItem): GymItem & { amenities: typeof amenityIcons } {
  const slice = amenityIcons.slice(0, 4 + (gym.id % 3));
  return { ...gym, amenities: slice };
}

const fallbackGyms: (GymItem & { amenities: typeof amenityIcons })[] = new Array(12).fill(null).map((_, i) =>
  addAmenities({
    id: i,
    name: `FitZone ${i + 1}`,
    address: ["Downtown", "City Center", "Westside", "Eastside", "Uptown"][i % 5],
    distance: `${((i + 1) * 0.4).toFixed(1)} km`,
    rating: (4 + (i % 5) / 10).toFixed(1),
    hourlyPrice: 99 + (i % 3) * 20,
    weeklyPrice: 599 + (i % 4) * 100,
    monthlyPrice: 1999 + (i % 5) * 200,
    featured: i % 4 === 0,
  })
);

const GymCard = ({ 
  gym 
}: { 
  gym: { 
    id: number; 
    name: string; 
    address: string;
    distance: string; 
    rating: string;
    hourlyPrice: number;
    weeklyPrice: number;
    monthlyPrice: number;
    featured: boolean;
    amenities: any[];
  } 
}) => {
  return (
    <Link href={`/gyms/${gym.id}`}>
      <Card className="group relative overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border border-border/50 bg-card/50 backdrop-blur-sm cursor-pointer hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-36 overflow-hidden">
          <Image
            src={gymCardImages[gym.id % gymCardImages.length]}
            alt={gym.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent" />
          
          {/* Featured Badge */}
          {gym.featured && (
            <div className="absolute top-2 left-2 z-10">
              <Badge className="bg-neo-gold text-black font-semibold text-[10px] px-2 py-0.5 border-0 shadow-lg">
                <Sparkles size={10} className="mr-1" />
                Featured
              </Badge>
            </div>
          )}
          
          {/* Rating */}
          <div className="absolute top-2 right-2 z-10 bg-background/70 backdrop-blur px-2 py-0.5 rounded-full text-[10px] border border-border inline-flex items-center gap-1">
            <Star size={12} className="text-yellow-500/90" />
            <span className="text-foreground font-semibold">{gym.rating}</span>
          </div>
          
          {/* Bottom Gradient Info */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
            <h3 className="text-white font-bold text-sm mb-0.5 line-clamp-1">{gym.name}</h3>
            <div className="flex items-center gap-1 text-white/70 text-[10px]">
              <MapPin size={10} />
              <span className="line-clamp-1">{gym.address}</span>
              <span>•</span>
              <span>{gym.distance}</span>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-3 space-y-2.5">
          {/* Amenities Icons */}
          <div className="flex items-center gap-1.5">
            {gym.amenities.slice(0, 4).map((Icon, idx) => (
              <div key={idx} className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors" title={Icon.name}>
                <Icon size={14} className="text-primary" />
              </div>
            ))}
            {gym.amenities.length > 4 && (
              <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground">
                +{gym.amenities.length - 4}
              </div>
            )}
          </div>
          
          {/* Pricing - Compact */}
          <div className="flex items-center justify-between text-xs pt-1 border-t border-border/50">
            <div>
              <span className="text-muted-foreground">From </span>
              <span className="font-bold text-primary">₹{gym.hourlyPrice}</span>
              <span className="text-muted-foreground">/hr</span>
            </div>
            <div className="text-right">
              <div className="font-semibold text-primary">₹{gym.monthlyPrice}</div>
              <div className="text-[10px] text-muted-foreground">/mo</div>
            </div>
          </div>
          
          {/* Action Button */}
          <Button 
            size="sm" 
            className="w-full h-7 bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold text-xs rounded-full shadow-sm hover:shadow-md transition-all"
          >
            View Plans
          </Button>
        </div>
      </Card>
    </Link>
  );
};

export default function GymsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<"all" | "featured" | "nearby">("all");
  const [gyms, setGyms] = useState<(GymItem & { amenities: typeof amenityIcons })[]>(fallbackGyms);

  useEffect(() => {
    getGyms()
      .then((list) => setGyms(list.map(addAmenities)))
      .catch(() => {});
  }, []);

  const filteredGyms = gyms.filter((gym) => {
    if (selectedFilter === "featured") return gym.featured;
    if (selectedFilter === "nearby") return parseFloat(gym.distance) < 1;
    return true;
  });

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      
      <div className="container mx-auto px-4 lg:px-8 pt-24">
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            placeholder="Search gyms, locations, or facilities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-14 h-14 text-base rounded-full border-2 shadow-lg bg-card"
          />
          <Button 
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#ccff00] hover:bg-[#b8e600] text-black rounded-full h-10 w-10"
          >
            <Search size={18} />
          </Button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2 no-scrollbar">
          <Button
            variant={selectedFilter === "all" ? "default" : "outline"}
            onClick={() => setSelectedFilter("all")}
            className={selectedFilter === "all" ? "bg-[#ccff00] hover:bg-[#b8e600] text-black" : ""}
          >
            All Gyms
          </Button>
          <Button
            variant={selectedFilter === "featured" ? "default" : "outline"}
            onClick={() => setSelectedFilter("featured")}
            className={selectedFilter === "featured" ? "bg-[#ccff00] hover:bg-[#b8e600] text-black" : ""}
          >
            <Sparkles size={16} className="mr-2" />
            Featured
          </Button>
          <Button
            variant={selectedFilter === "nearby" ? "default" : "outline"}
            onClick={() => setSelectedFilter("nearby")}
            className={selectedFilter === "nearby" ? "bg-[#ccff00] hover:bg-[#b8e600] text-black" : ""}
          >
            <Navigation size={16} className="mr-2" />
            Nearby
          </Button>
        </div>

        {/* Featured gyms — horizontal scroll, standout on gyms page */}
        <FeaturedGyms standout />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredGyms.length}</span> {selectedFilter !== "all" ? selectedFilter : ""} gyms
          </p>
        </div>

        {/* Gym Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-10">
          {filteredGyms.map((gym) => (
            <GymCard key={gym.id} gym={gym} />
          ))}
        </div>
      </div>
      
      <MobileNav />
    </div>
  );
}

