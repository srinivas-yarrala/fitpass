import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Search, MapPin, Star, Dumbbell, ShowerHead, Waves, Filter } from "lucide-react";
import { useEffect, useState } from "react";

const gymCardImages = Object.values(
  import.meta.glob("@/assets/gym-cards/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" })
) as string[];

const gyms = new Array(12).fill(null).map((_, i) => ({
  id: i,
  name: `Partner Gym ${i + 1}`,
  distance: `${(((i + 1) * 0.4)).toFixed(1)} km`,
  rating: (4 + ((i % 5) / 10)).toFixed(1),
}));

const featuredGyms = gyms.slice(0, 6);
const popularGyms = gyms.slice(0, 5);
const allGyms = gyms;

const GymCard = ({ gym }: { gym: { id: number; name: string; distance: string; rating: string } }) => {
  return (
    <Card className="p-3">
      <div className="relative h-32 rounded-lg mb-2 overflow-hidden">
        {gymCardImages.length ? (
          <img
            src={gymCardImages[gym.id % gymCardImages.length]}
            alt={gym.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        )}
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

const GymMapView = () => {
  const [cityLabel, setCityLabel] = useState<string>("Detecting location…");
  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setCityLabel("Location unavailable");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const resp = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
          const data = await resp.json();
          const addr = data?.address || {};
          const city = addr.city || addr.town || addr.village || addr.suburb || addr.locality;
          const state = addr.state || addr.region;
          if (city && state) {
            setCityLabel(`${city}, ${state}`);
          } else if (city) {
            setCityLabel(city);
          } else if (addr.state_district || state) {
            setCityLabel(state || addr.state_district);
          } else {
            setCityLabel("Location detected");
          }
        } catch {
          setCityLabel("Location detected");
        }
      },
      () => setCityLabel("Set your location")
    );
  }, []);

  return (
    <div className="container mx-auto px-4 lg:px-8 py-10">
      {/* Top location bar with location on right */}
      <div className="max-w-md mx-auto mb-3">
        <div className="relative">
          <Input
            value={cityLabel}
            readOnly
            className="h-12 pl-4 pr-12 bg-background/60 backdrop-blur-md border-border rounded-full"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
            <MapPin size={16} />
          </div>
        </div>
      </div>

      {/* Search bar (same as home) under location */}
      <div className="max-w-md mx-auto mb-6">
        <div className="relative">
          <Input
            placeholder="Search gyms and workouts"
            className="h-12 pl-10 pr-12 bg-background/60 backdrop-blur-md border-border rounded-full"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Search size={16} />
          </div>
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

      {/* Featured gyms horizontal scroll, no heading */}
      <div className="mb-6">
        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar">
          <div className="flex gap-4 min-w-max">
            {featuredGyms.map((g) => (
              <Card key={`f-${g.id}`} className="snap-start w-64 flex-shrink-0 p-3">
                <div className="relative aspect-video rounded-lg mb-3 overflow-hidden">
                  {gymCardImages.length ? (
                    <img
                      src={gymCardImages[g.id % gymCardImages.length]}
                      alt={g.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  )}
                  {/* Featured ribbon badge */}
                  <div className="absolute top-0 right-0">
                    <div className="relative">
                      <div className="px-3 py-1 bg-yellow-400 text-black text-[10px] font-semibold rounded-bl-md shadow-sm">Featured</div>
                      <div className="absolute right-0 top-full w-0 h-0 border-l-6 border-l-transparent border-t-6 border-t-yellow-400" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-background/70 backdrop-blur px-2 py-0.5 rounded-full text-[10px] border border-border inline-flex items-center gap-1"><Star size={12} className="text-yellow-500/90" />{g.rating}</div>
                </div>
                <div className="font-semibold truncate">{g.name}</div>
                <div className="text-xs text-muted-foreground mb-2">{g.distance} away</div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 opacity-70">
                  <Dumbbell size={14} />
                  <ShowerHead size={14} />
                  <Waves size={14} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Popular near you */}
      <div className="mb-3">
        <h2 className="text-lg font-bold">Popular near you</h2>
      </div>
      <div className="grid grid-cols-1 gap-3 mb-6">
        {popularGyms.map((g) => (
          <GymCard key={`p-${g.id}`} gym={g} />
        ))}
      </div>

      {/* Ad banner between popular and all */}
      <Card className="mb-6 p-4 bg-primary/10 border-primary/20 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">Check offers near you</div>
            <div className="text-xs text-muted-foreground">Exclusive deals at partner gyms</div>
          </div>
          <div className="px-3 py-1 text-xs rounded-full bg-primary text-primary-foreground">View</div>
        </div>
      </Card>

      {/* All gyms */}
      <div className="mb-3">
        <h2 className="text-lg font-bold">All gyms</h2>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {allGyms.map((g) => (
          <GymCard key={`a-${g.id}`} gym={g} />
        ))}
      </div>
    </div>
  );
};

export default GymMapView;


