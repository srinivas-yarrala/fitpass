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
  Users,
  Calendar,
  Check,
  ChevronRight,
  Dumbbell,
  Flame,
  TrendingUp,
  Award,
} from "lucide-react";
import gym1 from "@/assets/gym-cards/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg";

// Mock data for different training types
const trainingData: Record<string, any> = {
  "1": {
    name: "Zumba Dance Fitness",
    type: "Zumba",
    rating: 4.9,
    reviews: 156,
    instructor: {
      name: "Maria Rodriguez",
      experience: "5 years",
      specialization: "Latin Dance & Cardio",
      image: gym1,
    },
    address: "FitZone Downtown, Studio 2",
    distance: "1.2 km",
    sessionPrice: 299,
    packagePrice: 999,
    duration: "60 minutes",
    difficulty: "All Levels",
    maxParticipants: 25,
    calories: "400-600 kcal",
    description: "High-energy dance fitness class combining Latin and international music with easy-to-follow choreography. Perfect for burning calories while having fun!",
    images: [gym1, gym1, gym1],
    schedule: [
      { day: "Monday", time: "6:00 PM - 7:00 PM", spots: 12 },
      { day: "Wednesday", time: "6:00 PM - 7:00 PM", spots: 8 },
      { day: "Friday", time: "6:00 PM - 7:00 PM", spots: 15 },
    ],
    benefits: [
      "Burns 400-600 calories per session",
      "Improves cardiovascular health",
      "Tones entire body",
      "Reduces stress & boosts mood",
      "No dance experience needed",
    ],
    includes: [
      "Professional instructor",
      "Music system & equipment",
      "Locker & shower access",
      "Water & towel",
    ],
    userReviews: [
      { name: "Priya Singh", rating: 5, date: "3 days ago", text: "Maria is an amazing instructor! The energy is incredible and I've lost 5kg in 2 months!" },
      { name: "Anjali Mehta", rating: 5, date: "1 week ago", text: "Best cardio workout ever! So much fun, doesn't feel like exercise at all." },
      { name: "Rahul Verma", rating: 4, date: "2 weeks ago", text: "Great class, very energetic. Gets a bit crowded sometimes but totally worth it!" },
    ],
  },
  "2": {
    name: "Hatha Yoga Flow",
    type: "Yoga",
    rating: 4.8,
    reviews: 203,
    instructor: {
      name: "Priya Sharma",
      experience: "8 years",
      specialization: "Hatha & Vinyasa Yoga",
      image: gym1,
    },
    address: "Zen Studio, 3rd Floor",
    distance: "0.8 km",
    sessionPrice: 349,
    packagePrice: 1199,
    duration: "75 minutes",
    difficulty: "Beginner to Intermediate",
    maxParticipants: 20,
    calories: "150-250 kcal",
    description: "Traditional Hatha yoga practice focusing on breath, balance, and flexibility. Perfect for stress relief and building mind-body connection.",
    images: [gym1, gym1, gym1],
    schedule: [
      { day: "Tuesday", time: "7:00 AM - 8:15 AM", spots: 10 },
      { day: "Thursday", time: "7:00 AM - 8:15 AM", spots: 6 },
      { day: "Saturday", time: "8:00 AM - 9:15 AM", spots: 14 },
    ],
    benefits: [
      "Improves flexibility & strength",
      "Reduces stress & anxiety",
      "Better posture & alignment",
      "Enhanced mental clarity",
      "Injury prevention",
    ],
    includes: [
      "Certified yoga instructor",
      "Yoga mats & props",
      "Calm ambiance with music",
      "Guided meditation",
    ],
    userReviews: [
      { name: "Sneha Patel", rating: 5, date: "2 days ago", text: "Priya's classes are transformative. My flexibility has improved so much!" },
      { name: "Amit Kumar", rating: 5, date: "5 days ago", text: "Perfect for beginners. Very calming and the instructor is patient and knowledgeable." },
      { name: "Divya Reddy", rating: 5, date: "1 week ago", text: "Best yoga class in the city. The morning sessions are so refreshing!" },
    ],
  },
  "3": {
    name: "Contemporary Dance",
    type: "Dance",
    rating: 4.7,
    reviews: 89,
    instructor: {
      name: "Sophia Chen",
      experience: "6 years",
      specialization: "Contemporary & Jazz",
      image: gym1,
    },
    address: "Dance Hub, Studio A",
    distance: "1.5 km",
    sessionPrice: 399,
    packagePrice: 1299,
    duration: "90 minutes",
    difficulty: "Intermediate to Advanced",
    maxParticipants: 15,
    calories: "350-500 kcal",
    description: "Expressive contemporary dance class combining technique, improvisation, and choreography. Build strength, grace, and artistic expression.",
    images: [gym1, gym1, gym1],
    schedule: [
      { day: "Monday", time: "7:00 PM - 8:30 PM", spots: 5 },
      { day: "Thursday", time: "7:00 PM - 8:30 PM", spots: 7 },
      { day: "Sunday", time: "5:00 PM - 6:30 PM", spots: 9 },
    ],
    benefits: [
      "Full-body strength & conditioning",
      "Improves coordination & balance",
      "Creative expression",
      "Mental & emotional release",
      "Performance opportunities",
    ],
    includes: [
      "Professional choreographer",
      "Sprung floor studio",
      "Video recording (optional)",
      "Performance showcase",
    ],
    userReviews: [
      { name: "Maya Iyer", rating: 5, date: "4 days ago", text: "Sophia is incredibly talented. Her choreography is beautiful and challenging!" },
      { name: "Arjun Nair", rating: 4, date: "1 week ago", text: "Love the creative freedom in this class. Great workout too!" },
      { name: "Riya Das", rating: 5, date: "2 weeks ago", text: "Best decision I made. This class is therapy for my mind and body." },
    ],
  },
  "4": {
    name: "Swimming Training",
    type: "Swimming",
    rating: 4.9,
    reviews: 178,
    instructor: {
      name: "Coach Michael Lee",
      experience: "10 years",
      specialization: "Competitive Swimming & Technique",
      image: gym1,
    },
    address: "Aquatic Center, Olympic Pool",
    distance: "2.0 km",
    sessionPrice: 449,
    packagePrice: 1499,
    duration: "60 minutes",
    difficulty: "All Levels",
    maxParticipants: 12,
    calories: "400-700 kcal",
    description: "Professional swimming training for all levels. Focus on technique, endurance, and water confidence. From beginners to competitive swimmers.",
    images: [gym1, gym1, gym1],
    schedule: [
      { day: "Monday", time: "6:30 AM - 7:30 AM", spots: 4 },
      { day: "Wednesday", time: "6:30 AM - 7:30 AM", spots: 6 },
      { day: "Friday", time: "6:30 AM - 7:30 AM", spots: 3 },
      { day: "Saturday", time: "8:00 AM - 9:00 AM", spots: 8 },
    ],
    benefits: [
      "Full-body low-impact workout",
      "Improves cardiovascular fitness",
      "Builds muscle strength",
      "Better lung capacity",
      "Suitable for all ages",
    ],
    includes: [
      "Certified swimming coach",
      "Olympic-size pool",
      "Swimming aids & equipment",
      "Locker & shower facilities",
    ],
    userReviews: [
      { name: "Karan Malhotra", rating: 5, date: "1 day ago", text: "Coach Michael is fantastic! I can swim properly now after just 5 sessions." },
      { name: "Neha Gupta", rating: 5, date: "3 days ago", text: "Best investment for fitness. Swimming is amazing and the coach is very patient." },
      { name: "Vikram Singh", rating: 5, date: "1 week ago", text: "Excellent technique training. Already improved my lap times significantly!" },
    ],
  },
};

export default function TrainingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState<"single" | "package">("package");

  // Get training data based on ID
  const trainingId = params.id as string;
  const training = trainingData[trainingId] || trainingData["1"];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      
      {/* Hero Image Gallery */}
      <div className="relative h-[50vh] md:h-[60vh] bg-black">
        <Image
          src={training.images[selectedImageIndex]}
          alt={training.name}
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
          <Badge className="mb-3 bg-primary text-black">{training.type}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{training.name}</h1>
          <div className="flex items-center gap-3 text-white/90 mb-4">
            <div className="flex items-center gap-1">
              <Star size={16} className="text-yellow-500/90" />
              <span className="font-semibold">{training.rating}</span>
              <span className="text-white/60">({training.reviews})</span>
            </div>
            <span className="text-white/60">•</span>
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>{training.distance}</span>
            </div>
            <span className="text-white/60">•</span>
            <span>{training.duration}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-8 space-y-8">
        {/* Quick Info Cards */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-4 text-center">
            <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
            <div className="text-sm font-semibold">{training.maxParticipants}</div>
            <div className="text-xs text-muted-foreground">Max size</div>
          </Card>
          <Card className="p-4 text-center">
            <Flame className="w-6 h-6 mx-auto mb-2 text-orange-500" />
            <div className="text-sm font-semibold">{training.calories}</div>
            <div className="text-xs text-muted-foreground">Per session</div>
          </Card>
          <Card className="p-4 text-center">
            <TrendingUp className="w-6 h-6 mx-auto mb-2 text-green-500" />
            <div className="text-sm font-semibold">{training.difficulty}</div>
            <div className="text-xs text-muted-foreground">Level</div>
          </Card>
        </div>

        {/* Instructor */}
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-primary/10 flex-shrink-0">
              <Image src={training.instructor.image} alt={training.instructor.name} width={64} height={64} className="object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1">{training.instructor.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">{training.instructor.specialization}</p>
              <div className="flex items-center gap-2">
                <Award size={14} className="text-primary" />
                <span className="text-xs text-muted-foreground">{training.instructor.experience} experience</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="rounded-full">
              View Profile
            </Button>
          </div>
        </Card>

        {/* Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">About This Class</h2>
          <p className="text-muted-foreground leading-relaxed">{training.description}</p>
        </div>

        {/* Pricing Options */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Choose Your Package</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Single Session */}
            <Card 
              className={`p-6 cursor-pointer transition-all ${
                selectedPackage === "single" 
                  ? "border-2 border-primary bg-primary/5" 
                  : "border hover:border-primary/50"
              }`}
              onClick={() => setSelectedPackage("single")}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-lg mb-1">Single Session</h3>
                  <p className="text-sm text-muted-foreground">Drop-in</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedPackage === "single" ? "border-primary bg-primary" : "border-muted-foreground"
                }`}>
                  {selectedPackage === "single" && <Check size={12} className="text-black" />}
                </div>
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold">₹{training.sessionPrice}</div>
                <div className="text-sm text-muted-foreground">/session</div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  <span>No commitment</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  <span>All equipment included</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  <span>Flexible scheduling</span>
                </li>
              </ul>
            </Card>

            {/* Package - Recommended */}
            <Card 
              className={`p-6 cursor-pointer transition-all relative ${
                selectedPackage === "package" 
                  ? "border-2 border-primary bg-primary/5" 
                  : "border hover:border-primary/50"
              }`}
              onClick={() => setSelectedPackage("package")}
            >
              <Badge className="absolute top-2 right-2 bg-primary text-black">Save 30%</Badge>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-lg mb-1">4-Session Package</h3>
                  <p className="text-sm text-muted-foreground">Best value</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedPackage === "package" ? "border-primary bg-primary" : "border-muted-foreground"
                }`}>
                  {selectedPackage === "package" && <Check size={12} className="text-black" />}
                </div>
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold text-primary">₹{training.packagePrice}</div>
                <div className="text-sm text-muted-foreground">₹{Math.round(training.packagePrice / 4)}/session</div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  <span>All single session benefits</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  <span>Priority booking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  <span>Valid for 30 days</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Schedule */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Weekly Schedule</h2>
          <div className="space-y-3">
            {training.schedule.map((session: any, idx: number) => (
              <Card key={idx} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{session.day}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock size={14} />
                      <span>{session.time}</span>
                    </div>
                  </div>
                  <Badge variant={session.spots < 5 ? "destructive" : "secondary"}>
                    {session.spots} spots left
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Features - Icon Based */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            <Card className="p-4 text-center hover:bg-primary/5 transition-colors">
              <Flame className="w-8 h-8 mx-auto mb-2 text-orange-500" />
              <p className="text-xs font-semibold">Calorie Burn</p>
            </Card>
            <Card className="p-4 text-center hover:bg-primary/5 transition-colors">
              <Heart className="w-8 h-8 mx-auto mb-2 text-red-500" />
              <p className="text-xs font-semibold">Wellness</p>
            </Card>
            <Card className="p-4 text-center hover:bg-primary/5 transition-colors">
              <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-xs font-semibold">Community</p>
            </Card>
            <Card className="p-4 text-center hover:bg-primary/5 transition-colors">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-500" />
              <p className="text-xs font-semibold">Progress</p>
            </Card>
            <Card className="p-4 text-center hover:bg-primary/5 transition-colors">
              <Award className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
              <p className="text-xs font-semibold">Expert Led</p>
            </Card>
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
          <Card className="p-6">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {training.benefits.map((benefit: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* What's Included */}
        <div>
          <h2 className="text-2xl font-bold mb-4">What's Included</h2>
          <Card className="p-6">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {training.includes.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Location */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Location</h2>
          <Card className="p-4">
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium mb-1">{training.address}</p>
                <p className="text-sm text-muted-foreground">{training.distance} away</p>
              </div>
            </div>
            <Button className="w-full bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold">
              Get Directions
            </Button>
          </Card>
        </div>

        {/* Reviews */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Reviews</h2>
            <div className="flex items-center gap-1">
              <Star size={18} className="text-yellow-500/90" />
              <span className="font-semibold">{training.rating}</span>
              <span className="text-sm text-muted-foreground">({training.reviews})</span>
            </div>
          </div>
          <div className="space-y-4">
            {training.userReviews.map((review: any, idx: number) => (
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
            <div className="text-sm text-muted-foreground">Selected Package</div>
            <div className="text-2xl font-bold">
              ₹{selectedPackage === "single" ? training.sessionPrice : training.packagePrice}
              <span className="text-sm font-normal text-muted-foreground">
                {selectedPackage === "single" ? "/session" : "/package"}
              </span>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold px-8"
            onClick={() => router.push("/cart")}
          >
            Book Now
          </Button>
        </div>
      </div>

      <MobileNav />
    </div>
  );
}
