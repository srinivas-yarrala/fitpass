import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { User, MapPin, Sparkles } from "lucide-react";

export const Header = () => {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">CP</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-semibold hover:text-primary transition-colors">
              HOME
            </Link>
            <Link to="/gyms" className="text-sm font-semibold hover:text-primary transition-colors">
              GYMS
            </Link>
            <Link to="/diet-bot" className="text-sm font-semibold hover:text-primary transition-colors">
              DIET
            </Link>
            <Link to="/progress" className="text-sm font-semibold hover:text-primary transition-colors">
              TRACKER
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/passes">
              <Button size="sm" variant="ghost" className="h-8 px-0 rounded-full text-foreground/90 hover:text-foreground">
                <span className="relative inline-block pr-2.5">
                  Get pass
                  <Sparkles size={8} className="absolute -top-0.5 -right-0.5 text-yellow-400" />
                </span>
              </Button>
            </Link>
            <Button size="icon" variant="ghost" aria-label="Account" className="rounded-full">
              <User size={18} />
            </Button>
            <Button size="icon" variant="ghost" aria-label="Location" className="rounded-full text-primary border border-border">
              <MapPin size={18} />
            </Button>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden flex items-center gap-2">
            <Link to="/passes">
              <Button size="sm" variant="ghost" className="h-8 px-0 rounded-full text-foreground/90 hover:text-foreground">
                <span className="relative inline-block pr-2.5">
                  Get pass
                  <Sparkles size={8} className="absolute -top-0.5 -right-0.5 text-yellow-400" />
                </span>
              </Button>
            </Link>
            <Button size="icon" variant="ghost" aria-label="Account" className="rounded-full">
              <User size={18} />
            </Button>
            <Button size="icon" variant="ghost" aria-label="Location" className="rounded-full text-primary border border-border">
              <MapPin size={18} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
