import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const offers = [
  { id: 1, title: "Book hourly slot", time: "Today • Any partner gym" },
  { id: 2, title: "Multi‑gym day pass", time: "Use across partners" },
  { id: 3, title: "Peak hour fast lane", time: "Skip queue • 6–9pm" },
  { id: 4, title: "Trainer on demand", time: "Add‑on • Per session" },
];

export const OffersRow = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Offers for you</h3>
        </div>
        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar">
          <div className="flex gap-4 min-w-max">
            {offers.map((o) => (
              <Card key={o.id} className="snap-start flex-shrink-0 w-auto p-4 bg-primary/10 border-primary/20">
                <div className="text-sm font-semibold mb-0.5 inline-flex items-center gap-2">
                  <span>{o.title}</span>
                  <ArrowRight size={16} className="text-primary" />
                </div>
                <div className="text-[11px] text-muted-foreground">{o.time}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersRow;


