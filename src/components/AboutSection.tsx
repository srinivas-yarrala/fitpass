import { Button } from "./ui/button";
import { PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
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
    </section>
  );
};
