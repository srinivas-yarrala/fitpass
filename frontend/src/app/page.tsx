"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Index from "@/components/templates/Index";
import { AuthEntry } from "@/components/features/auth/AuthEntry";

type View = "loading" | "auth" | "redirecting" | "home";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const [view, setView] = useState<View>("loading");

  useEffect(() => {
    const hasPhone = Boolean(localStorage.getItem("fitpass.userPhone"));
    const hasGender = Boolean(localStorage.getItem("fitpass.preferredGender"));
    const hasAge = Boolean(localStorage.getItem("fitpass.userAge"));
    const hasCompletedOnboarding = hasGender && hasAge && hasPhone;

    if (!hasPhone) {
      setView("auth");
      return;
    }
    if (!hasCompletedOnboarding && pathname !== "/onboarding") {
      setView("redirecting");
      router.replace("/onboarding");
      return;
    }
    setView("home");
  }, [pathname, router]);

  if (view === "loading" || view === "redirecting") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="h-8 w-8 animate-pulse rounded-full bg-primary/30" />
      </div>
    );
  }

  if (view === "auth") {
    return <AuthEntry />;
  }

  return <Index />;
}
