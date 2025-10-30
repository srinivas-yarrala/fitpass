import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

export const Header = () => {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">CP</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-semibold hover:text-primary transition-colors">
              HOME
            </Link>
            <Link to="/gyms" className="text-sm font-semibold hover:text-primary transition-colors">
              GYMS
            </Link>
            <Link to="/log" className="text-sm font-semibold hover:text-primary transition-colors">
              DIET
            </Link>
            <Link to="/progress" className="text-sm font-semibold hover:text-primary transition-colors">
              TRACKER
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <div className="px-3 py-1 rounded-full bg-background/80 backdrop-blur border border-border text-xs font-semibold">📍 Location</div>
            <Link to="/passes">
              <Button size="sm" className="rounded-full px-5">Get a pass</Button>
            </Link>
            <Button size="icon" variant="ghost" aria-label="Account" className="rounded-full">
              <User size={18} />
            </Button>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden flex items-center gap-2">
            <div className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur border border-border text-[11px] font-semibold">📍 Loc</div>
            <Link to="/passes">
              <Button size="sm" className="rounded-full px-5">Get a pass</Button>
            </Link>
            <Button size="icon" variant="ghost" aria-label="Account" className="rounded-full">
              <User size={18} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
