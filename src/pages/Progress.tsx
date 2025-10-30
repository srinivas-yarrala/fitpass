import { Card } from "@/components/ui/card";

const Progress = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-24">
      <h1 className="text-3xl font-bold mb-6">Progress</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">Attendance chart placeholder</Card>
        <Card className="p-6">Strength PRs placeholder</Card>
        <Card className="p-6">Streaks & badges placeholder</Card>
      </div>
    </div>
  );
};

export default Progress;


