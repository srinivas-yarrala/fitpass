import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Passes = () => {
  const passes = [
    { name: "Day Pass", price: "$5", desc: "1 visit, same day" },
    { name: "5-Visit Pack", price: "$20", desc: "Any gym, 60 days" },
    { name: "Monthly", price: "$39", desc: "Unlimited check-ins" },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-8 py-24">
      <h1 className="text-3xl font-bold mb-6">Choose Your Pass</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {passes.map((p) => (
          <Card key={p.name} className="p-6 flex flex-col gap-2">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-muted-foreground">{p.desc}</p>
            <div className="text-2xl font-bold mt-2">{p.price}</div>
            <Button className="mt-4">Get {p.name}</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Passes;


