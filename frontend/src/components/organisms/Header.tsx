"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { User, MapPin, Sparkles, QrCode, ShoppingCart } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">CP</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold hover:text-primary transition-colors">
              HOME
            </Link>
            <Link href="/gyms" className="text-sm font-semibold hover:text-primary transition-colors">
              GYMS
            </Link>
            <Link href="/passes" className="text-sm font-semibold hover:text-primary transition-colors">
              TRAINING
            </Link>
            <Link href="/shop" className="text-sm font-semibold hover:text-primary transition-colors">
              SHOP
            </Link>
            <Link href="/progress" className="text-sm font-semibold hover:text-primary transition-colors">
              HEALTH
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/passes">
              <Button size="sm" variant="ghost" className="h-8 px-3 rounded-full text-foreground/90 hover:text-foreground">
                <span className="relative inline-block">
                  Get pass
                  <Sparkles size={10} className="absolute -top-1 -right-2 text-neo-gold" />
                </span>
              </Button>
            </Link>
            <Link href="/cart">
              <Button size="icon" variant="ghost" aria-label="Cart" className="rounded-full relative">
                <ShoppingCart size={18} />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                  4
                </span>
              </Button>
            </Link>
            <Link href="/check-in">
              <Button size="icon" variant="ghost" aria-label="Check-in" className="rounded-full">
                <QrCode size={18} />
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
            <Link href="/cart">
              <Button size="icon" variant="ghost" aria-label="Cart" className="rounded-full relative">
                <ShoppingCart size={18} />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                  4
                </span>
              </Button>
            </Link>
            <Link href="/check-in">
              <Button size="icon" variant="ghost" aria-label="Check-in" className="rounded-full">
                <QrCode size={18} />
              </Button>
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


