import { NextResponse } from "next/server";

// Mock gym list - same shape the frontend can use. Replace with DB later.
const gyms = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  name: `FitZone ${i + 1}`,
  address: ["Downtown", "City Center", "Westside", "Eastside", "Uptown"][i % 5],
  distance: `${((i + 1) * 0.4).toFixed(1)} km`,
  rating: (4 + (i % 5) / 10).toFixed(1),
  hourlyPrice: 99 + (i % 3) * 20,
  weeklyPrice: 599 + (i % 4) * 100,
  monthlyPrice: 1999 + (i % 5) * 200,
  featured: i % 4 === 0,
}));

export async function GET() {
  return NextResponse.json(gyms);
}
