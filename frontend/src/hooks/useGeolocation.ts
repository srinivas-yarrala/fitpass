"use client";

import { useState, useCallback, useEffect } from "react";

export type GeoPosition = {
  lat: number;
  lng: number;
} | null;

export type UseGeolocationResult = {
  position: GeoPosition;
  loading: boolean;
  error: string | null;
  getPosition: () => void;
};

export function useGeolocation(): UseGeolocationResult {
  const [position, setPosition] = useState<GeoPosition>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getPosition = useCallback(() => {
    if (typeof window === "undefined" || !navigator?.geolocation) {
      setError("Geolocation is not supported");
      return;
    }
    setLoading(true);
    setError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setLoading(false);
      },
      (err) => {
        setError(err.message || "Could not get location");
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  }, []);

  return { position, loading, error, getPosition };
}
