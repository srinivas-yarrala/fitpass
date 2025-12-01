"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import calisthenics from "@/assets/categories/calisthenics.jpeg";
import cardio from "@/assets/categories/cardio.jpg";
import crossfit from "@/assets/categories/crossfit.jpg";
import strength from "@/assets/categories/strength.jpeg";
import yoga from "@/assets/categories/yoga.webp";

const categories = [
  { name: "Calisthenics", image: calisthenics },
  { name: "Cardio", image: cardio },
  { name: "Crossfit", image: crossfit },
  { name: "Strength", image: strength },
  { name: "Yoga", image: yoga },
];

export const CategoriesRow = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Browse categories</h3>
        </div>
        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar">
          <div className="flex gap-3 min-w-max">
            {categories.map((c, i) => (
              <button key={i} className="snap-start w-28 flex-shrink-0">
                <div className="w-28 h-28 rounded-xl overflow-hidden ring-1 ring-border bg-muted">
                  <Image src={c.image} alt={c.name} className="w-full h-full object-cover" width={112} height={112} />
                </div>
                <div className="mt-1.5 text-center text-[12px] font-semibold truncate">{c.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesRow;


