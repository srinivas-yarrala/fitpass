import { Button } from "./ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
              <span className="text-xs font-bold tracking-wider">WOW</span>
              <span className="text-xs text-muted-foreground">GET MORE BENEFIT BY JOINING</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Dream body
              <br />
              with fitness
              <span className="text-primary">.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-md">
              Want your body to be healthy, join our program with directions according to your body's goals.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                START NOW
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="group">
                <PlayCircle className="mr-2" size={20} />
                TRAINING DEMO
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground mt-1">Happy Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">20%</div>
                <div className="text-sm text-muted-foreground mt-1">Special Discount</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="Fitness trainer in action"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-card/95 backdrop-blur-sm border border-border rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <PlayCircle size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-bold">Subscribe crafto fitness</div>
                  <div className="text-xs text-muted-foreground">Get special discount</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
