"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Header } from "@/components/organisms/Header";
import MobileNav from "@/components/organisms/MobileNav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Star,
  MapPin,
  Clock,
  Phone,
  Share2,
  Heart,
  Dumbbell,
  Wifi,
  ShowerHead,
  Wind,
  Users,
  Calendar,
  Navigation,
  Check,
  ChevronRight,
  Waves,
} from "lucide-react";
import gym1 from "@/assets/gym-cards/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg";
import gym2 from "@/assets/gym-cards/depositphotos_148533399-stock-photo-modern-gym-with-dumbbell-set.jpg";
import gym3 from "@/assets/gym-cards/gym-with-indoor-cycling-equipment_23-2149270210.jpg";

// Mock data - in real app, fetch based on gym ID
const gymData = {
  name: "FitZone Premium",
  rating: 4.8,
  reviews: 234,
  address: "123 Main Street, Downtown, City Center",
  distance: "0.8 km",
  hourlyPrice: 99,
  weeklyPrice: 699,
  monthlyPrice: 1999,
  hours: "24/7",
  phone: "+1 234 567 8900",
  description: "State-of-the-art fitness facility with premium equipment, expert trainers, and a vibrant community atmosphere.",
  images: [gym1, gym2, gym3, gym1, gym2],
  amenities: [
    { icon: Dumbbell, name: "Free Weights", available: true },
    { icon: Wind, name: "Air Conditioning", available: true },
    { icon: Wifi, name: "Free WiFi", available: true },
    { icon: ShowerHead, name: "Showers", available: true },
    { icon: Users, name: "Personal Training", available: true },
    { icon: Waves, name: "Pool", available: true },
  ],
  classes: [
    { name: "HIIT Training", time: "6:00 AM", instructor: "Sarah", spots: 5 },
    { name: "Yoga Flow", time: "8:00 AM", instructor: "Mike", spots: 8 },
    { name: "Spin Class", time: "10:00 AM", instructor: "Emma", spots: 3 },
    { name: "Boxing", time: "5:00 PM", instructor: "John", spots: 12 },
  ],
  userReviews: [
    { name: "Alex Johnson", rating: 5, date: "2 days ago", text: "Amazing gym with great equipment and friendly staff!" },
    { name: "Sarah Williams", rating: 5, date: "1 week ago", text: "Best gym I've been to. Clean facilities and motivating atmosphere." },
    { name: "Mike Chen", rating: 4, date: "2 weeks ago", text: "Good variety of equipment. Can get crowded during peak hours." },
  ],
};

export default function GymDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState<"hourly" | "weekly" | "monthly">("monthly");

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      
      {/* Hero Image Gallery */}
      <div className="relative h-[50vh] md:h-[60vh] bg-black">
        <Image
          src={gymData.images[selectedImageIndex]}
          alt={gymData.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-24 left-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Actions */}
        <div className="absolute top-24 right-4 z-10 flex gap-2">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition"
          >
            <Heart size={20} className={isFavorite ? "fill-red-500 text-red-500" : ""} />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition">
            <Share2 size={20} />
          </button>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{gymData.name}</h1>
              <div className="flex items-center gap-3 text-white/90">
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-500/90" />
                  <span className="font-semibold">{gymData.rating}</span>
                  <span className="text-white/60">({gymData.reviews})</span>
                </div>
                <span className="text-white/60">•</span>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>{gymData.distance}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Thumbnails */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {gymData.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
                  selectedImageIndex === idx ? "border-[#ccff00]" : "border-white/30"
                }`}
              >
                <Image src={img} alt={`View ${idx + 1}`} width={64} height={64} className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-8 space-y-8">
        {/* Quick Info Cards */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4 text-center">
            <Clock className="w-6 h-6 mx-auto mb-2 text-primary" />
            <div className="text-sm font-semibold">{gymData.hours}</div>
            <div className="text-xs text-muted-foreground">Open</div>
          </Card>
          <Card className="p-4 text-center">
            <Phone className="w-6 h-6 mx-auto mb-2 text-primary" />
            <div className="text-xs font-semibold">Call</div>
            <div className="text-xs text-muted-foreground">Support</div>
          </Card>
        </div>

        {/* Pricing Plans */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Hourly Plan */}
            <Card 
              className={`p-6 cursor-pointer transition-all ${
                selectedPlan === "hourly" 
                  ? "border-2 border-primary bg-primary/5" 
                  : "border hover:border-primary/50"
              }`}
              onClick={() => setSelectedPlan("hourly")}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-lg mb-1">Hourly</h3>
                  <p className="text-sm text-muted-foreground">Pay per hour</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedPlan === "hourly" ? "border-primary bg-primary" : "border-muted-foreground"
                }`}>
                  {selectedPlan === "hourly" && <Check size={12} className="text-black" />}
                </div>
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold">₹{gymData.hourlyPrice}</div>
                <div className="text-sm text-muted-foreground">/hour</div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  <span>Full equipment access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  <span>Locker & shower</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  <span>Flexible timing</span>
                </li>
              </ul>
            </Card>

            {/* Weekly Plan */}
            <Card 
              className={`p-6 cursor-pointer transition-all ${
                selectedPlan === "weekly" 
                  ? "border-2 border-primary bg-primary/5" 
                  : "border hover:border-primary/50"
              }`}
              onClick={() => setSelectedPlan("weekly")}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-lg mb-1">Weekly</h3>
                  <p className="text-sm text-muted-foreground">7 days unlimited</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedPlan === "weekly" ? "border-primary bg-primary" : "border-muted-foreground"
                }`}>
                  {selectedPlan === "weekly" && <Check size={12} className="text-black" />}
                </div>
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold">₹{gymData.weeklyPrice}</div>
                <div className="text-sm text-muted-foreground">/week</div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  <span>All hourly benefits</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  <span>Free group classes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  <span>Better value</span>
                </li>
              </ul>
            </Card>

            {/* Monthly Plan - Most Popular */}
            <Card 
              className={`p-6 cursor-pointer transition-all relative ${
                selectedPlan === "monthly" 
                  ? "border-2 border-primary bg-primary/5" 
                  : "border hover:border-primary/50"
              }`}
              onClick={() => setSelectedPlan("monthly")}
            >
              <Badge className="absolute top-2 right-2 bg-primary text-black">Most Popular</Badge>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-lg mb-1">Monthly</h3>
                  <p className="text-sm text-muted-foreground">30 days unlimited</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedPlan === "monthly" ? "border-primary bg-primary" : "border-muted-foreground"
                }`}>
                  {selectedPlan === "monthly" && <Check size={12} className="text-black" />}
                </div>
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold text-primary">₹{gymData.monthlyPrice}</div>
                <div className="text-sm text-muted-foreground">/month</div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  <span>All weekly benefits</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  <span>Guest pass (2x/month)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  <span>Best value - save 40%</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">About</h2>
          <p className="text-muted-foreground leading-relaxed">{gymData.description}</p>
        </div>

        {/* Location */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Location</h2>
          <Card className="p-4">
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium mb-1">{gymData.address}</p>
                <p className="text-sm text-muted-foreground">{gymData.distance} away</p>
              </div>
            </div>
            <Button className="w-full bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold">
              <Navigation size={16} className="mr-2" />
              Get Directions
            </Button>
          </Card>
        </div>

        {/* Amenities */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Amenities</h2>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
            {gymData.amenities.map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <Card key={idx} className="p-4 text-center hover:bg-primary/5 transition-colors cursor-pointer group">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <p className="text-xs font-semibold">{amenity.name}</p>
                    {amenity.available && (
                      <Check size={14} className="text-green-500" />
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Today's Classes */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Today's Classes</h2>
            <Button variant="ghost" size="sm" className="text-primary">
              View All
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
          <div className="space-y-3">
            {gymData.classes.map((classItem, idx) => (
              <Card key={idx} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{classItem.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {classItem.time}
                      </span>
                      <span>•</span>
                      <span>{classItem.instructor}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="ml-4">
                    {classItem.spots} spots
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Reviews</h2>
            <div className="flex items-center gap-1">
              <Star size={18} className="text-yellow-500/90" />
              <span className="font-semibold">{gymData.rating}</span>
              <span className="text-sm text-muted-foreground">({gymData.reviews})</span>
            </div>
          </div>
          <div className="space-y-4">
            {gymData.userReviews.map((review, idx) => (
              <Card key={idx} className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-500/90" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{review.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-16 md:bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-lg border-t z-40">
        <div className="container mx-auto lg:px-8 flex items-center gap-3">
          <div className="flex-1">
            <div className="text-sm text-muted-foreground">Selected Plan</div>
            <div className="text-2xl font-bold">
              ₹{selectedPlan === "hourly" ? gymData.hourlyPrice : selectedPlan === "weekly" ? gymData.weeklyPrice : gymData.monthlyPrice}
              <span className="text-sm font-normal text-muted-foreground">
                /{selectedPlan === "hourly" ? "hr" : selectedPlan === "weekly" ? "wk" : "mo"}
              </span>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold px-8"
            onClick={() => router.push("/cart")}
          >
            Add to Cart
          </Button>
        </div>
      </div>

      <MobileNav />
    </div>
  );
}
