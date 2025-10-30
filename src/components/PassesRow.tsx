import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const passes = [
  { name: "Day Pass", price: "$5" },
  { name: "5‑Visit Pack", price: "$20" },
  { name: "Monthly", price: "$39" },
];

export const PassesRow = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Pick a pass</h3>
          <Link to="/passes" className="text-sm text-primary font-semibold">View all</Link>
        </div>
        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 min-w-max">
            {passes.map((p) => (
              <div key={p.name} className="snap-start w-56 flex-shrink-0">
                <div className="p-[1px] rounded-2xl bg-gradient-to-r from-primary/40 via-primary/10 to-transparent">
                  <Card className="rounded-2xl p-4 bg-background">
                    <div className="text-sm font-semibold">{p.name}</div>
                    <div className="text-lg font-bold">{p.price}</div>
                    <div className="text-[11px] text-muted-foreground">Best for: {p.name === "Monthly" ? "regulars" : p.name === "5‑Visit Pack" ? "flex users" : "try-outs"}</div>
                    <Button size="sm" className="mt-3 rounded-full">Get {p.name}</Button>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassesRow;


