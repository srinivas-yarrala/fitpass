import { Button } from "./ui/button";
import { ArrowRight, PlayCircle, ChevronLeft, ChevronRight, MapPin, QrCode, LineChart, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fitness.jpg";
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
    }, 2000);
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
    <section id="home" className="relative pt-20">
      {/* Mobile-first full-bleed hero with overlay */}
      <div className="md:hidden">
        <div className="relative w-full min-h-[80vh]">
          <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

          {/* Floating content card on mobile (content-width) */}
          <div className="absolute top-6 left-0 right-0 z-10">
            <div className="px-4">
              <div className="inline-flex flex-col gap-2">
                <div
                  className="inline-flex items-center gap-3 rounded-full w-max animate-in fade-in slide-in-from-left bg-card/80 backdrop-blur-md border border-border px-5 py-3 shadow-xl shadow-black/10 ring-1 ring-primary/10"
                  style={{ animationDuration: `${Math.max(220, 700 - currentSlide * 200)}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                    {(() => { const Icon = slide.icon; return <Icon size={18} />; })()}
                  </div>
                  <div className="text-base font-semibold leading-snug">
                    {slide.title}
                  </div>
                </div>
                {/* Location chips removed for marketing-focused landing */}
              </div>
            </div>
          </div>

          {/* Subheading removed per request */}

          {/* Navigation Controls removed per request */}

          {/* Centered search overlay moved slightly down */}
          <div className="absolute left-0 right-0 top-[62%] -translate-y-1/2 z-10">
            <div className="px-4 flex justify-center">
              <div className="relative w-full max-w-xs md:max-w-sm">
                <Input
                  value={isFocused || userInput.length > 0 ? userInput : `${typedText}${caretVisible ? "|" : ""}`}
                  aria-label="Search gyms and workouts"
                  autoComplete="off"
                  className="h-12 pl-4 pr-12 bg-background/60 backdrop-blur-md border-border rounded-full"
                  onChange={(e) => setUserInput(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <Search size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet/Desktop layout */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">

              {/* Left column content is intentionally minimal on mobile and retained here for desktop */}
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                {slide.title}
                <span className="text-primary">.</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-md">
                {slide.description}
              </p>

              {/* Desktop inline search removed to avoid overlap; using centered overlay */}

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground mt-1">Partner gyms</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground mt-1">Check-ins</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5-day</div>
                  <div className="text-sm text-muted-foreground mt-1">Avg streak</div>
                </div>
              </div>
            </div>

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

              {/* Floating Card (content-width) */}
              <div className="absolute top-8 left-8">
                <div
                  className="inline-flex items-center gap-3 rounded-full w-max animate-in fade-in slide-in-from-left bg-card/80 backdrop-blur-sm border border-border px-6 py-3 shadow-xl shadow-black/10 ring-1 ring-primary/10"
                  style={{ animationDuration: `${Math.max(220, 700 - currentSlide * 200)}ms` }}
                >
                    <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center text-primary">
                      {(() => { const Icon = slide.icon; return <Icon size={22} />; })()}
                    </div>
                    <div className="text-base font-semibold leading-snug">
                      {slide.title}
                    </div>
                </div>
              </div>

              {/* Subheading removed on desktop per request */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
