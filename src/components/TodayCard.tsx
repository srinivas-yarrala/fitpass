import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

export const TodayCard = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4 lg:px-8">
        <Card className="rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
              <Dumbbell size={18} />
            </span>
            <div>
              <div className="text-sm font-bold">Today’s suggestion</div>
              <div className="text-xs text-muted-foreground">Upper body • ~45 min • Moderate</div>
            </div>
          </div>
          <Link to="/log">
            <Button size="sm" className="rounded-full">Start</Button>
          </Link>
        </Card>
      </div>
    </section>
  );
};

export default TodayCard;


