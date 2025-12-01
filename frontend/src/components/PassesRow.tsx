import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const passes = [
  { name: "Day Pass", price: "$5" },
  { name: "5‑Visit Pack", price: "$20" },
  { name: "Monthly", price: "$39" },
];

export const PassesRow = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-6 text-center">
          <h3 className="text-lg font-bold inline-block">Pick a pass</h3>
          <div className="mx-auto mt-1 h-0.5 w-16 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400" />
        </div>
        <div>
          <div className="grid grid-cols-3 gap-4">
            {passes.map((p) => (
              <div key={p.name}>
                <div className="p-[1px] rounded-2xl bg-gradient-to-r from-primary/40 via-primary/10 to-transparent h-full">
                  <Card className="rounded-2xl p-4 bg-background h-full">
                    <div className="text-sm font-semibold flex items-center gap-2">
                      <span>{p.name}</span>
                      <ArrowRight size={16} className="text-primary" />
                    </div>
                    <div className="text-lg font-bold">{p.price}</div>
                    <div className="text-[11px] text-muted-foreground">Best for: {p.name === "Monthly" ? "regulars" : p.name === "5‑Visit Pack" ? "flex users" : "try-outs"}</div>
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



