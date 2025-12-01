import { Card } from "@/components/ui/card";
import { useMemo } from "react";

export const CategoriesRow = () => {
  const categories = useMemo(() => {
    const modules = import.meta.glob("@/assets/categories/*.{png,jpg,jpeg,webp,svg}", {
      eager: true,
      as: "url",
    }) as Record<string, string>;
    const items = Object.entries(modules).map(([path, url]) => {
      const file = path.split("/").pop() || "";
      const base = file.replace(/\.[^.]+$/, "");
      const name = base
        .replace(/[-_]+/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      return { name, url };
    });
    return items;
  }, []);
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
                  <img src={c.url} alt={c.name} className="w-full h-full object-cover" />
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



