import { NextResponse } from "next/server";

// Mock passes/classes - same shape the frontend can use. Replace with DB later.
const passes = [
  {
    id: 1,
    name: "Zumba Dance Fitness",
    instructor: "Maria Rodriguez",
    type: "Dance",
    level: "All Levels",
    duration: "60 min",
    capacity: 25,
    enrolled: 18,
    rating: 4.9,
    price: 299,
    schedule: ["Mon 6:00 PM", "Wed 6:00 PM", "Fri 6:00 PM"],
    featured: true,
  },
  {
    id: 2,
    name: "Hatha Yoga",
    instructor: "Priya Sharma",
    type: "Yoga",
    level: "Beginner",
    duration: "75 min",
    capacity: 20,
    enrolled: 15,
    rating: 4.8,
    price: 349,
    schedule: ["Tue 7:00 AM", "Thu 7:00 AM", "Sat 7:00 AM"],
    featured: false,
  },
  {
    id: 3,
    name: "Hip Hop Dance",
    instructor: "Rahul Mehta",
    type: "Dance",
    level: "Intermediate",
    duration: "60 min",
    capacity: 30,
    enrolled: 22,
    rating: 4.7,
    price: 399,
    schedule: ["Mon 7:00 PM", "Wed 7:00 PM"],
    featured: false,
  },
  {
    id: 4,
    name: "Aqua Aerobics",
    instructor: "Sarah Johnson",
    type: "Swimming",
    level: "All Levels",
    duration: "45 min",
    capacity: 15,
    enrolled: 12,
    rating: 4.6,
    price: 499,
    schedule: ["Tue 6:00 PM", "Thu 6:00 PM", "Sat 10:00 AM"],
    featured: false,
  },
];

export async function GET() {
  return NextResponse.json(passes);
}
