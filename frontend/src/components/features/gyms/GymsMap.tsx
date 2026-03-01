"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { GymItem } from "@/lib/api";

// Fix default marker icons in Next/Leaflet (they break without this)
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

type GymsMapProps = {
  gyms: (GymItem & { distance?: string })[];
  userPosition: { lat: number; lng: number } | null;
  selectedFilter: "all" | "featured" | "nearby";
};

function FitBounds({ gyms, userPosition }: { gyms: GymsMapProps["gyms"]; userPosition: GymsMapProps["userPosition"] }) {
  const map = useMap();
  useEffect(() => {
    const points: L.LatLngExpression[] = gyms.map((g) => [g.lat, g.lng]);
    if (userPosition) points.push([userPosition.lat, userPosition.lng]);
    if (points.length === 0) return;
    try {
      map.fitBounds(points as [number, number][], { padding: [40, 40], maxZoom: 14 });
    } catch {
      // ignore
    }
  }, [gyms, userPosition, map]);
  return null;
}

export function GymsMap({ gyms, userPosition, selectedFilter }: GymsMapProps) {
  const center: [number, number] = userPosition
    ? [userPosition.lat, userPosition.lng]
    : [17.73, 83.31]; // Visakhapatnam centre

  return (
    <div className="rounded-xl overflow-hidden border border-border bg-card shadow-soft h-[320px] w-full">
      <MapContainer
        center={center}
        zoom={12}
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {userPosition && (
          <Marker position={[userPosition.lat, userPosition.lng]}>
            <Popup>You are here</Popup>
          </Marker>
        )}
        {gyms.map((gym) => (
          <Marker key={gym.id} position={[gym.lat, gym.lng]}>
            <Popup>
              <div className="min-w-[160px]">
                <Link
                  href={`/gyms/${gym.id}`}
                  className="font-semibold text-primary hover:underline block mb-1"
                >
                  {gym.name}
                </Link>
                <p className="text-xs text-muted-foreground">{gym.address}</p>
                {gym.distance != null && (
                  <p className="text-xs mt-1 font-medium">{gym.distance} away</p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
        <FitBounds gyms={gyms} userPosition={userPosition} />
      </MapContainer>
    </div>
  );
}
