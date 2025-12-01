import { Card } from "@/components/ui/card";

export const MiniGraphChip = () => {
  return (
    <section className="py-2">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex gap-2">
          <Card className="px-3 py-2 rounded-full text-xs">Last 7 days: ▃▆█▅█▃▇</Card>
          <Card className="px-3 py-2 rounded-full text-xs">PRs: 3 this month</Card>
        </div>
      </div>
    </section>
  );
};

export default MiniGraphChip;



