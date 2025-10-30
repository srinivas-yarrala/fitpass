import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CheckIn = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-24">
      <h1 className="text-3xl font-bold mb-6">Check-in</h1>
      <Card className="p-6 flex flex-col items-center gap-4">
        <div className="w-64 h-64 bg-muted flex items-center justify-center rounded">
          QR placeholder
        </div>
        <Button>Generate QR</Button>
        <p className="text-sm text-muted-foreground">GPS and verification will be handled on scan.</p>
      </Card>
    </div>
  );
};

export default CheckIn;


