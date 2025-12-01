import { Card } from "@/components/ui/card";

const banners = [
  { id: 1, title: "Free first day pass", color: "bg-primary/10 border-primary/20" },
  { id: 2, title: "Buddy check‑in bonus", color: "bg-emerald-500/10 border-emerald-500/20" },
  { id: 3, title: "Streak week challenge", color: "bg-orange-500/10 border-orange-500/20" },
];

export const BannerStrip = () => {
  return (
    <section className="py-4">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-3 min-w-max">
            {banners.map((b) => (
              <Card key={b.id} className={`flex-shrink-0 px-4 py-3 border ${b.color} rounded-2xl w-[18rem]`}>
                <div className="text-sm font-semibold">{b.title}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerStrip;



