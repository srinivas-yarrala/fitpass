"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Index from "@/components/templates/Index";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasPreference = Boolean(localStorage.getItem("fitpass.preferredGender"));
      if (!hasPreference && pathname !== "/onboarding") {
        router.replace("/onboarding");
      }
    }
  }, [pathname, router]);

  return <Index />;
}

