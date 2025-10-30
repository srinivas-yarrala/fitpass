import { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Progress = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Calorie counter state
  const [dailyTarget, setDailyTarget] = useState<number>(2200);
  const [todaysIntake, setTodaysIntake] = useState<number>(0);
  const [addCalories, setAddCalories] = useState<number>(0);

  const calorieProgress = useMemo(() => {
    const pct = Math.min(100, Math.max(0, (todaysIntake / Math.max(1, dailyTarget)) * 100));
    return Math.round(pct);
  }, [todaysIntake, dailyTarget]);

  // BMI calculator state
  const [heightCm, setHeightCm] = useState<number>(175);
  const [weightKg, setWeightKg] = useState<number>(72);
  const bmi = useMemo(() => {
    const h = heightCm / 100;
    if (!h) return 0;
    return Number((weightKg / (h * h)).toFixed(1));
  }, [heightCm, weightKg]);
  const bmiCategory = useMemo(() => {
    if (!bmi) return "-";
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Healthy";
    if (bmi < 30) return "Overweight";
    return "Obese";
  }, [bmi]);

  return (
    <div className="container mx-auto px-4 lg:px-8 py-10">
      {/* Hero Header */}
      <div className="mb-10 text-center">
        <div className="inline-block rounded-full border border-primary/60 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          Your Fitness Command Center
        </div>
        <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
          Track Your Progress
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Sync your fitness tracker, plan workouts, monitor calories, and understand your body metrics — all in one place.
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row px-4 sm:px-0">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="workouts">Workouts</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>
        </div>

        {/* Overview */}
        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Completion</CardTitle>
                <CardDescription>How consistent you were this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-3 flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-extrabold">84%</div>
                    <div className="text-xs text-muted-foreground">5 of 6 planned sessions</div>
                  </div>
                  <Badge className="bg-emerald-600/90">Streak: 12 days</Badge>
                </div>
                <ProgressBar value={84} />
              </CardContent>
              <CardFooter className="justify-between text-sm text-muted-foreground">
                <span>Keep the streak alive!</span>
                <span>Goal: 90%</span>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent PRs</CardTitle>
                <CardDescription>Personal records from the last month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center justify-between">
                    <span className="font-medium">Deadlift</span>
                    <span className="text-muted-foreground">150 kg</span>
                  </li>
                  <Separator />
                  <li className="flex items-center justify-between">
                    <span className="font-medium">5K Run</span>
                    <span className="text-muted-foreground">22:18</span>
                  </li>
                  <Separator />
                  <li className="flex items-center justify-between">
                    <span className="font-medium">Bench Press</span>
                    <span className="text-muted-foreground">95 kg</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="h-12">Log a new PR</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Badges you unlocked recently</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge>Early Riser</Badge>
                <Badge>Hydration Hero</Badge>
                <Badge>Cardio Crusher</Badge>
                <Badge>Consistency Champ</Badge>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Workouts */}
        <TabsContent value="workouts" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Workout Calendar</CardTitle>
                <CardDescription>Select a date to plan or review</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </CardContent>
              <CardFooter className="justify-between">
                <div className="text-sm text-muted-foreground">
                  Selected: {selectedDate?.toDateString()}
                </div>
                <Button variant="outline" className="h-12">Add workout</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Today’s Plan</CardTitle>
                <CardDescription>Quick look at what’s scheduled</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center justify-between">
                    <span>Warm-up + Mobility</span>
                    <Badge variant="secondary">10 min</Badge>
                  </li>
                  <Separator />
                  <li className="flex items-center justify-between">
                    <span>Push Day Strength</span>
                    <Badge variant="secondary">45 min</Badge>
                  </li>
                  <Separator />
                  <li className="flex items-center justify-between">
                    <span>Cool-down + Stretch</span>
                    <Badge variant="secondary">10 min</Badge>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="h-12">Mark complete</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Nutrition */}
        <TabsContent value="nutrition" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Calorie Counter</CardTitle>
                <CardDescription>Track your daily intake vs target</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-extrabold">{todaysIntake} kcal</div>
                    <div className="text-xs text-muted-foreground">Consumed today</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold">Target: {dailyTarget} kcal</div>
                    <div className="text-xs text-muted-foreground">{calorieProgress}% of target</div>
                  </div>
                </div>
                <ProgressBar value={calorieProgress} />

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="target">Daily target (kcal)</Label>
                    <Input
                      id="target"
                      type="number"
                      value={dailyTarget}
                      onChange={(e) => setDailyTarget(Number(e.target.value || 0))}
                      min={0}
                      className="h-12 rounded-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="addCalories">Add intake (kcal)</Label>
                    <div className="flex gap-2">
                      <Input
                        id="addCalories"
                        type="number"
                        value={addCalories}
                        onChange={(e) => setAddCalories(Number(e.target.value || 0))}
                        min={0}
                        className="h-12 rounded-full"
                      />
                      <Button
                        variant="outline"
                        className="h-12"
                        onClick={() => {
                          setTodaysIntake((v) => Math.max(0, v + Math.max(0, addCalories)));
                          setAddCalories(0);
                        }}
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground">Tip: Prioritize protein and fiber to stay fuller longer.</CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Macros Snapshot</CardTitle>
                <CardDescription>Approximate split for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex justify-between text-sm"><span>Protein</span><span>110 g</span></div>
                    <ProgressBar value={70} />
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-sm"><span>Carbs</span><span>220 g</span></div>
                    <ProgressBar value={55} />
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-sm"><span>Fats</span><span>65 g</span></div>
                    <ProgressBar value={60} />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="h-12">Edit targets</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Metrics */}
        <TabsContent value="metrics" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>BMI Calculator</CardTitle>
                <CardDescription>Understand your body mass index</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      value={heightCm}
                      onChange={(e) => setHeightCm(Number(e.target.value || 0))}
                      min={0}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      value={weightKg}
                      onChange={(e) => setWeightKg(Number(e.target.value || 0))}
                      min={0}
                    />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 items-end gap-4">
                  <div>
                    <div className="text-xs text-muted-foreground">BMI</div>
                    <div className="text-3xl font-extrabold">{bmi}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="mb-2 flex justify-between text-xs text-muted-foreground">
                      <span>Under</span>
                      <span>Healthy</span>
                      <span>Over</span>
                      <span>Obese</span>
                    </div>
                    <div className="relative h-3 w-full overflow-hidden rounded-full bg-secondary">
                      <div className="absolute left-0 top-0 h-full w-1/4 bg-blue-400" />
                      <div className="absolute left-1/4 top-0 h-full w-1/4 bg-emerald-500" />
                      <div className="absolute left-2/4 top-0 h-full w-1/4 bg-amber-500" />
                      <div className="absolute left-3/4 top-0 h-full w-1/4 bg-rose-600" />
                      <div
                        className="absolute top-1/2 h-5 w-5 -translate-y-1/2 translate-x-[-50%] rounded-full border-2 border-background bg-foreground"
                        style={{ left: `${Math.min(100, Math.max(0, ((bmi - 15) / 20) * 100))}%` }}
                      />
                    </div>
                    <div className="mt-2 text-sm font-medium">{bmiCategory}</div>
      </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Measurements</CardTitle>
                <CardDescription>Track key body measurements</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center justify-between"><span>Waist</span><span className="text-muted-foreground">82 cm</span></li>
                  <Separator />
                  <li className="flex items-center justify-between"><span>Chest</span><span className="text-muted-foreground">98 cm</span></li>
                  <Separator />
                  <li className="flex items-center justify-between"><span>Hips</span><span className="text-muted-foreground">94 cm</span></li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="h-12">Update</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Integrations */}
        <TabsContent value="integrations" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Sync Your Fitness Tracker</CardTitle>
                <CardDescription>Connect to import workouts and health data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Connect Apple Health, Google Fit, Fitbit and more to seamlessly sync steps, workouts, sleep and heart rate.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  <Badge variant="secondary">Apple Health</Badge>
                  <Badge variant="secondary">Google Fit</Badge>
                  <Badge variant="secondary">Fitbit</Badge>
                  <Badge variant="secondary">Garmin</Badge>
                  <Badge variant="secondary">Strava</Badge>
                  <Badge variant="secondary">Oura</Badge>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" className="h-12">Connect now</Button>
                <Button variant="outline" className="h-12">Learn more</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Privacy</CardTitle>
                <CardDescription>You control what is shared</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We only read the data you authorize and you can disconnect at any time. Your information is encrypted at rest and in transit.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Progress;


