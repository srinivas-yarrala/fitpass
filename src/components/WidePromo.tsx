import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const WidePromo = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4 lg:px-8">
        <Card className="relative overflow-hidden rounded-2xl p-6 md:p-8 bg-gradient-to-r from-primary/15 via-primary/10 to-transparent border-primary/20">
          <div className="max-w-xl">
            <div className="text-2xl md:text-3xl font-bold mb-1">Unlock unlimited city access</div>
            <div className="text-sm text-muted-foreground mb-4">Monthly pass covers every partner gym. Keep your streak alive.</div>
            <Link to="/passes" className="inline-flex items-center text-primary font-semibold">Get a pass →</Link>
          </div>
          <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-primary/20" />
        </Card>
      </div>
    </section>
  );
};

export default WidePromo;


