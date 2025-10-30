import { Button } from "./ui/button";
import { PlayCircle, MapPin, QrCode, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutSection = () => {
  return (
    <section className="py-10 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Mobile: concise how-it-works */}
        <div className="md:hidden">
          <div className="max-w-md mx-auto text-center">
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div className="text-xs font-medium text-muted-foreground">Tap</div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <QrCode size={20} />
                </div>
                <div className="text-xs font-medium text-muted-foreground">Scan</div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <ArrowRight size={20} />
                </div>
                <div className="text-xs font-medium text-muted-foreground">Go</div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop/Tablet: original verbose section */}
        <div className="hidden md:block">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-muted-foreground mb-2">How CityPass Fit+ works</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                One pass. Every gym. Smarter workouts
                <span className="text-primary">.</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Buy a pass, scan a QR at any partner gym, and get a personalized workout for today based on your goals and recovery. Track check-ins, streaks, and PRs—all in one place.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/gyms">
                  <Button size="lg">Explore gyms</Button>
                </Link>
                <Link to="/check-in">
                  <Button size="lg" variant="outline" className="group">
                    <PlayCircle className="mr-2" size={20} />
                    See check-in flow
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
