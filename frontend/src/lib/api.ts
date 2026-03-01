/**
 * API client for FitPass. Uses same-origin /api routes so the app works
 * with a single deploy (no separate backend).
 */

const getBase = () =>
  typeof window === "undefined" ? "" : "";

export async function apiHealth() {
  const res = await fetch(`${getBase()}/api/health`);
  if (!res.ok) throw new Error("Health check failed");
  return res.json() as Promise<{ status: string; message: string }>;
}

export type GymItem = {
  id: number;
  name: string;
  address: string;
  distance: string;
  rating: string;
  hourlyPrice: number;
  weeklyPrice: number;
  monthlyPrice: number;
  featured: boolean;
};

export async function getGyms(): Promise<GymItem[]> {
  const res = await fetch(`${getBase()}/api/gyms`);
  if (!res.ok) throw new Error("Failed to fetch gyms");
  return res.json();
}

export type PassItem = {
  id: number;
  name: string;
  instructor: string;
  type: string;
  level: string;
  duration: string;
  capacity: number;
  enrolled: number;
  rating: number;
  price: number;
  schedule: string[];
  featured: boolean;
};

export async function getPasses(): Promise<PassItem[]> {
  const res = await fetch(`${getBase()}/api/passes`);
  if (!res.ok) throw new Error("Failed to fetch passes");
  return res.json();
}

export async function postCheckIn(body: { gymId?: number; [key: string]: unknown }) {
  const res = await fetch(`${getBase()}/api/check-in`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || "Check-in failed");
  return data as { success: boolean; message: string; data?: Record<string, unknown> };
}
