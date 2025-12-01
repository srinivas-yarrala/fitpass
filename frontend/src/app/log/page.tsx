"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/organisms/Header";
import MobileNav from "@/components/organisms/MobileNav";

const WorkoutLoggerPage = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      <div className="container mx-auto px-4 lg:px-8 py-24">
        <h1 className="text-3xl font-bold mb-6">Log Workout</h1>
        <Tabs defaultValue="strength">
          <TabsList>
            <TabsTrigger value="strength">Strength</TabsTrigger>
            <TabsTrigger value="cardio">Cardio</TabsTrigger>
          </TabsList>
          <TabsContent value="strength">
            <Card className="p-4 grid grid-cols-2 md:grid-cols-4 gap-3">
              <Input placeholder="Exercise" />
              <Input placeholder="Sets" />
              <Input placeholder="Reps" />
              <Input placeholder="Weight" />
              <Button className="col-span-2 md:col-span-1">Add Set</Button>
            </Card>
          </TabsContent>
          <TabsContent value="cardio">
            <Card className="p-4 grid grid-cols-2 md:grid-cols-4 gap-3">
              <Input placeholder="Activity" />
              <Input placeholder="Duration (min)" />
              <Input placeholder="Distance" />
              <Input placeholder="Calories (est)" />
              <Button className="col-span-2 md:col-span-1">Add Session</Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <MobileNav />
    </div>
  );
};

export default WorkoutLoggerPage;

