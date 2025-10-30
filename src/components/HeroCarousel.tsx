import { Button } from "./ui/button";
import { ArrowRight, PlayCircle, ChevronLeft, ChevronRight, MapPin, QrCode, LineChart, Search, Filter } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fitness.jpg";
import heroVideo from "@/assets/hero.mp4";
import { useState, useEffect } from "react";

const slides = [
  {
    badge: "CITYPASS FIT+",
    tagline: "ONE PASS • EVERY GYM • SMART WORKOUTS",
    title: "Train anywhere",
    description: "Flexible access to partner gyms with daily AI workout suggestions tailored to your goals.",
    icon: MapPin,
    image: heroImage,
  },
  {
    badge: "CHECK-IN",
    tagline: "QR + GPS • FRAUD-SAFE • FAST",
    title: "Tap, scan, go",
    description: "Check in with a secure QR and GPS validation. Earn streaks and badges as you go.",
    icon: QrCode,
    image: heroImage,
  },
  {
    badge: "PROGRESS",
    tagline: "AI SUGGESTIONS • PRS • STREAKS",
    title: "Make progress",
    description: "See attendance, strength gains, and recover smarter with personalized suggestions.",
    icon: LineChart,
    image: heroImage,
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const searchTerms = ["gyms", "yoga", "cardio", "more places"];
  const [termIndex, setTermIndex] = useState(0);
  const [typedText, setTypedText] = useState("Explore ");
  const [typePos, setTypePos] = useState(0);
  const [isTypingPaused, setIsTypingPaused] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [caretVisible, setCaretVisible] = useState(true);
  const [hasLocation, setHasLocation] = useState(false);
  const [cityLabel, setCityLabel] = useState("");

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 1200);
    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (isFocused || userInput.length > 0) return; // suspend typing while user interacts
    if (isTypingPaused) return;
    const target = `Explore ${searchTerms[termIndex]}…`;
    const id = window.setInterval(() => {
      setTypePos((prev) => {
        const next = prev + 1;
        if (next >= target.length) {
          window.clearInterval(id);
          setIsTypingPaused(true);
          setTimeout(() => {
            setIsTypingPaused(false);
            setTypePos(0);
            setTermIndex((ti) => (ti + 1) % searchTerms.length);
          }, 700);
        }
        setTypedText(target.slice(0, Math.min(next, target.length)));
        return next;
      });
    }, 35);
    return () => window.clearInterval(id);
  }, [termIndex, isTypingPaused, isFocused, userInput]);

  useEffect(() => {
    if (isFocused || userInput.length > 0) return;
    const id = window.setInterval(() => setCaretVisible((v) => !v), 500);
    return () => window.clearInterval(id);
  }, [isFocused, userInput]);

  const requestLocation = () => {
    if (!("geolocation" in navigator)) return;
    navigator.geolocation.getCurrentPosition(
      () => {
        setHasLocation(true);
        setCityLabel("Near you");
      },
      () => {}
    );
  };

  return (
    <section id="home" className="relative pt-0 md:pt-20 -mt-16 md:mt-0">
      {/* Mobile-first full-bleed hero with overlay */}
      <div className="md:hidden">
        <div className="relative w-full min-h-[90vh]">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={slide.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

          {/* Headings removed on mobile per request */}

          {/* Subheading removed per request */}

          {/* Navigation Controls removed per request */}

          {/* Centered search overlay moved slightly further down */}
          <div className="absolute left-0 right-0 top-[70%] -translate-y-1/2 z-10">
            <div className="px-4 flex justify-center">
              <div className="relative w-full max-w-xs md:max-w-sm">
                <Input
                  value={isFocused || userInput.length > 0 ? userInput : `${typedText}${caretVisible ? "|" : ""}`}
                  aria-label="Search gyms and workouts"
                  autoComplete="off"
                  className="h-12 pl-10 pr-12 bg-background/60 backdrop-blur-md border-border rounded-full"
                  onChange={(e) => setUserInput(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
                {/* Left search icon without background */}
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Search size={16} />
                </div>
                {/* Vertical divider after search icon */}
                <div className="absolute left-8 top-1/2 -translate-y-1/2 h-6 w-px bg-border" />
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      aria-label="Open filters"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center active:scale-95"
                    >
                      <Filter size={14} />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent align="end" sideOffset={8} className="w-56 p-2">
                    <div className="text-xs font-semibold text-muted-foreground px-2 py-1">Quick filters</div>
                    <div className="grid grid-cols-2 gap-2 p-2">
                      <button className="text-xs px-2 py-1.5 rounded-full border hover:bg-muted text-foreground">Open now</button>
                      <button className="text-xs px-2 py-1.5 rounded-full border hover:bg-muted text-foreground">Near me</button>
                      <button className="text-xs px-2 py-1.5 rounded-full border hover:bg-muted text-foreground">Has showers</button>
                      <button className="text-xs px-2 py-1.5 rounded-full border hover:bg-muted text-foreground">Trainers</button>
                      <button className="text-xs px-2 py-1.5 rounded-full border hover:bg-muted text-foreground">Under ₹199</button>
                      <button className="text-xs px-2 py-1.5 rounded-full border hover:bg-muted text-foreground">24x7</button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet/Desktop layout */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content removed per request (no headings on desktop) */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700" />

            {/* Right Image */}
            <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              {/* Navigation Controls removed per request */}

              {/* Floating Card removed per request */}

              {/* Subheading removed on desktop per request */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
