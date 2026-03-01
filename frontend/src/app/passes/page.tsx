"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/organisms/Header";
import MobileNav from "@/components/organisms/MobileNav";
import HireTrainer from "@/components/organisms/HireTrainer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Clock, Users, Star, Calendar, Sparkles, Music, Waves, Flame, Heart, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import gym1 from "@/assets/gym-cards/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg";
import gym2 from "@/assets/gym-cards/depositphotos_148533399-stock-photo-modern-gym-with-dumbbell-set.jpg";

const classImages = [gym1, gym2, gym1, gym2, gym1, gym2, gym1, gym2];

const trainingClasses = [
  {
    id: 1,
    name: "Zumba Dance Fitness",
    instructor: "Maria Rodriguez",
    type: "Dance",
    level: "All Levels",
    duration: "60 min",
    capacity: 25,
    enrolled: 18,
    rating: 4.9,
    price: 299,
    schedule: ["Mon 6:00 PM", "Wed 6:00 PM", "Fri 6:00 PM"],
    image: gym1,
    featured: true,
    amenities: [Music, Flame, Heart], // Music, Calories, Mood
  },
  {
    id: 2,
    name: "Hatha Yoga",
    instructor: "Priya Sharma",
    type: "Yoga",
    level: "Beginner",
    duration: "75 min",
    capacity: 20,
    enrolled: 15,
    rating: 4.8,
    price: 349,
    schedule: ["Tue 7:00 AM", "Thu 7:00 AM", "Sat 7:00 AM"],
    image: gym2,
    featured: false,
    amenities: [Heart, Zap, Users], // Mindfulness, Energy, Community
  },
  {
    id: 3,
    name: "Hip Hop Dance",
    instructor: "Rahul Mehta",
    type: "Dance",
    level: "Intermediate",
    duration: "60 min",
    capacity: 30,
    enrolled: 22,
    rating: 4.7,
    price: 399,
    schedule: ["Mon 7:00 PM", "Wed 7:00 PM"],
    image: gym1,
    featured: false,
    amenities: [Music, Flame, Zap], // Music, Calories, Energy
  },
  {
    id: 4,
    name: "Aqua Aerobics",
    instructor: "Sarah Johnson",
    type: "Swimming",
    level: "All Levels",
    duration: "45 min",
    capacity: 15,
    enrolled: 12,
    rating: 4.6,
    price: 499,
    schedule: ["Tue 6:00 PM", "Thu 6:00 PM", "Sat 10:00 AM"],
    image: gym2,
    featured: true,
    amenities: [Waves, Heart, Users], // Pool, Low Impact, Group
  },
  {
    id: 5,
    name: "Power Yoga",
    instructor: "Amit Patel",
    type: "Yoga",
    level: "Advanced",
    duration: "90 min",
    capacity: 15,
    enrolled: 10,
    rating: 4.9,
    price: 449,
    schedule: ["Mon 6:00 AM", "Wed 6:00 AM", "Fri 6:00 AM"],
    image: gym1,
    featured: false,
    amenities: [Zap, Heart, Flame], // Strength, Mindfulness, Intensity
  },
  {
    id: 6,
    name: "Contemporary Dance",
    instructor: "Neha Kapoor",
    type: "Dance",
    level: "Intermediate",
    duration: "75 min",
    capacity: 20,
    enrolled: 16,
    rating: 4.8,
    price: 399,
    schedule: ["Tue 5:00 PM", "Thu 5:00 PM"],
    image: gym2,
    featured: false,
    amenities: [Music, Users, Heart], // Creative, Group, Expression
  },
  {
    id: 7,
    name: "Swimming Lessons",
    instructor: "Mike Chen",
    type: "Swimming",
    level: "Beginner",
    duration: "60 min",
    capacity: 10,
    enrolled: 8,
    rating: 4.7,
    price: 599,
    schedule: ["Mon 4:00 PM", "Wed 4:00 PM", "Fri 4:00 PM"],
    image: gym1,
    featured: false,
    amenities: [Waves, Users, Zap], // Pool, Personal, Technique
  },
  {
    id: 8,
    name: "Bollywood Dance",
    instructor: "Divya Singh",
    type: "Dance",
    level: "All Levels",
    duration: "60 min",
    capacity: 30,
    enrolled: 25,
    rating: 5.0,
    price: 349,
    schedule: ["Tue 7:00 PM", "Sat 6:00 PM"],
    image: gym2,
    featured: true,
    amenities: [Music, Flame, Heart], // Fun, Cardio, Mood
  },
];

export default function TrainingPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<"all" | "yoga" | "dance" | "swimming">("all");

  const filteredClasses = trainingClasses.filter((cls) => {
    const matchesSearch = cls.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cls.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || cls.type.toLowerCase() === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      
      <div className="container mx-auto px-4 lg:px-8 pt-24">
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            placeholder="Join expert led classes..."
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
        <div className="flex items-center gap-3 mb-6 overflow-x-auto no-scrollbar">
          <Button
            variant={selectedType === "all" ? "default" : "outline"}
            onClick={() => setSelectedType("all")}
            className={selectedType === "all" ? "bg-[#ccff00] hover:bg-[#b8e600] text-black" : ""}
          >
            All Classes
          </Button>
          <Button
            variant={selectedType === "yoga" ? "default" : "outline"}
            onClick={() => setSelectedType("yoga")}
            className={selectedType === "yoga" ? "bg-[#ccff00] hover:bg-[#b8e600] text-black" : ""}
          >
            Yoga
          </Button>
          <Button
            variant={selectedType === "dance" ? "default" : "outline"}
            onClick={() => setSelectedType("dance")}
            className={selectedType === "dance" ? "bg-[#ccff00] hover:bg-[#b8e600] text-black" : ""}
          >
            Dance
          </Button>
          <Button
            variant={selectedType === "swimming" ? "default" : "outline"}
            onClick={() => setSelectedType("swimming")}
            className={selectedType === "swimming" ? "bg-[#ccff00] hover:bg-[#b8e600] text-black" : ""}
          >
            Swimming
          </Button>
        </div>

        {/* Hire a trainer row */}
        <HireTrainer />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredClasses.length}</span> classes
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-10">
          {filteredClasses.map((cls) => {
            const AmenityIcons = cls.amenities || [];
            return (
              <Link key={cls.id} href={`/passes/${cls.id}`}>
                <Card className="group relative overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border border-border/50 bg-card/50 backdrop-blur-sm cursor-pointer hover:-translate-y-1">
                  {/* Image with Overlay */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={cls.image}
                      alt={cls.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent" />
                    
                    {/* Featured Badge */}
                    {cls.featured && (
                      <div className="absolute top-2 left-2 z-10">
                        <Badge className="bg-neo-gold text-black font-semibold text-[10px] px-2 py-0.5 border-0 shadow-lg">
                          <Sparkles size={10} className="mr-1" />
                          Hot
                        </Badge>
                      </div>
                    )}
                    
                    {/* Rating */}
                    <div className="absolute top-2 right-2 z-10 bg-background/70 backdrop-blur px-2 py-0.5 rounded-full text-[10px] border border-border inline-flex items-center gap-1">
                      <Star size={12} className="text-yellow-500/90" />
                      <span className="text-foreground font-semibold">{cls.rating}</span>
                    </div>
                    
                    {/* Bottom Gradient Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                      <h3 className="text-white font-bold text-sm mb-0.5 line-clamp-1">{cls.name}</h3>
                      <p className="text-white/70 text-[10px] line-clamp-1">by {cls.instructor}</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-3 space-y-2.5">
                    {/* Amenities Icons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        {AmenityIcons.map((Icon, idx) => (
                          <div key={idx} className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon size={14} className="text-primary" />
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Users size={12} />
                        <span>{cls.enrolled}/{cls.capacity}</span>
                      </div>
                    </div>

                    {/* Quick Info */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock size={11} />
                        <span>{cls.duration}</span>
                      </div>
                      <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-border/50">
                        {cls.level}
                      </Badge>
                    </div>
                    
                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-1.5 border-t border-border/50">
                      <div>
                        <div className="text-lg font-bold text-primary">₹{cls.price}</div>
                        <div className="text-[10px] text-muted-foreground">/session</div>
                      </div>
                      <Button 
                        size="sm" 
                        className="h-7 px-3 bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold text-xs rounded-full shadow-sm hover:shadow-md transition-all"
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      <MobileNav />
    </div>
  );
}
