"use client";

import { useState, useEffect, type ReactNode } from "react";

export function ProviderWrapper({ children }: { children: ReactNode }) {
  const [Providers, setProviders] = useState<React.ComponentType<{ children: ReactNode }> | null>(null);

  useEffect(() => {
    import("./providers").then((m) => setProviders(() => m.Providers));
  }, []);

  if (Providers) {
    return <Providers>{children}</Providers>;
  }
  return <>{children}</>;
}
