import { Card } from "@/components/ui/card";

const reviews = [
  { id: 1, user: "Aarav", text: "Great variety of gyms—check-in is super fast!" },
  { id: 2, user: "Neha", text: "AI workouts keep me consistent without overthinking." },
  { id: 3, user: "Ravi", text: "Streaks make it addictive—in a good way." },
];

export const ReviewsRow = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">What members say</h3>
        </div>
        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 min-w-max">
            {reviews.map((r) => (
              <Card key={r.id} className="snap-start w-72 flex-shrink-0 p-4">
                <div className="text-sm font-semibold mb-1">{r.user} <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary align-middle">Verified</span></div>
                <div className="text-sm text-muted-foreground">{r.text}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsRow;


