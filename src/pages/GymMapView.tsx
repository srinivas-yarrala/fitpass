import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GymMapView = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-24">
      <h1 className="text-3xl font-bold mb-6">Explore Gyms</h1>
      <Tabs defaultValue="map">
        <TabsList>
          <TabsTrigger value="map">Map</TabsTrigger>
          <TabsTrigger value="list">List</TabsTrigger>
        </TabsList>
        <TabsContent value="map">
          <Card className="h-[420px] flex items-center justify-center text-muted-foreground">
            Map placeholder (Leaflet)
          </Card>
        </TabsContent>
        <TabsContent value="list">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1,2,3,4,5,6].map((i) => (
              <Card key={i} className="p-4">Gym card placeholder</Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GymMapView;


