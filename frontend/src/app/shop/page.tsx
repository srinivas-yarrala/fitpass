"use client";

import { useState } from "react";
import { Header } from "@/components/organisms/Header";
import MobileNav from "@/components/organisms/MobileNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, UtensilsCrossed, Dumbbell } from "lucide-react";

const essentials = [
  {
    id: 1,
    name: "Whey Protein",
    subtitle: "24g protein per serving",
    price: 2499,
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Protein Bars (12 pack)",
    subtitle: "Chocolate & peanut butter",
    price: 899,
    image: "https://images.unsplash.com/photo-1580281657527-205ae9b2b2c2?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "BCAA Energy",
    subtitle: "Zero sugar • 5 flavours",
    price: 1299,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Mass Gainer",
    subtitle: "1200 kcal per serving",
    price: 3299,
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Pre-Workout",
    subtitle: "Caffeine + creatine",
    price: 1499,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Nut Butter Jar",
    subtitle: "Almond & sea salt",
    price: 599,
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=400&fit=crop",
  },
];

const workoutEssentials = [
  {
    id: 7,
    name: "Resistance Bands Set",
    subtitle: "5 levels • carry bag",
    price: 799,
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
  },
  {
    id: 8,
    name: "Gym Gloves",
    subtitle: "Padded • breathable",
    price: 449,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
  },
  {
    id: 9,
    name: "Shaker Bottle",
    subtitle: "700ml • leak-proof",
    price: 299,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
  },
  {
    id: 10,
    name: "Yoga Mat",
    subtitle: "6mm • non-slip",
    price: 999,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
  },
  {
    id: 11,
    name: "Foam Roller",
    subtitle: "Recovery & mobility",
    price: 1299,
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=400&h=400&fit=crop",
  },
  {
    id: 12,
    name: "Training Towel",
    subtitle: "Quick-dry • compact",
    price: 349,
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop",
  },
];

function ProductCard({
  product,
  onAdd,
}: {
  product: (typeof essentials)[0];
  onAdd: (id: number) => void;
}) {
  return (
    <Card className="group overflow-hidden border border-border bg-card rounded-xl">
      <div className="relative aspect-square overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
          <Button
            size="sm"
            className="w-full rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90"
            onClick={() => onAdd(product.id)}
          >
            <Plus size={16} className="mr-1" />
            Add to cart
          </Button>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-foreground truncate">{product.name}</h3>
        <p className="text-xs text-muted-foreground mt-0.5">{product.subtitle}</p>
        <p className="text-lg font-bold text-primary mt-2">₹{product.price}</p>
      </div>
    </Card>
  );
}

export default function ShopPage() {
  const [, setAdded] = useState<number[]>([]);

  const handleAdd = (id: number) => {
    setAdded((prev) => [...prev, id]);
    // TODO: wire to global cart state; cart page is only opened via header cart icon
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-12">
        {/* Page title */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Shop</h1>
          <div className="mx-auto mt-1 h-0.5 w-16 rounded-full bg-neo-gold" />
        </div>

        {/* Essentials — food */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <UtensilsCrossed className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Essentials</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6 max-w-xl">
            Protein bars, powders, and nutrition to fuel your goals.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {essentials.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={handleAdd} />
            ))}
          </div>
        </section>

        {/* Workout essentials */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Dumbbell className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Workout essentials</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6 max-w-xl">
            Gear and accessories for training and recovery.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {workoutEssentials.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={handleAdd} />
            ))}
          </div>
        </section>
      </div>

      <MobileNav />
    </div>
  );
}
