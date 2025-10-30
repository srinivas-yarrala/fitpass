import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const offers = [
  { id: 1, title: "Early bird: Free smoothie", time: "Until 2pm" },
  { id: 2, title: "Buddy pass: -20%", time: "Today only" },
  { id: 3, title: "Happy hour classes", time: "5–7pm" },
  { id: 4, title: "Weekend deal", time: "Sat–Sun" },
];

export const OffersRow = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Nearby offers</h3>
        </div>
        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 min-w-max">
            {offers.map((o) => (
              <Card key={o.id} className="snap-start w-[18rem] flex-shrink-0 p-4 bg-primary/10 border-primary/20">
                <div className="text-sm font-semibold mb-0.5">{o.title}</div>
                <div className="text-[11px] text-muted-foreground">{o.time} • Nearby</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersRow;


