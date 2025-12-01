"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SplashScreen from "@/components/onboarding/SplashScreen";
import GenderSelection from "@/components/onboarding/GenderSelection";
import type { GenderOption } from "@/types/onboarding";

type Stage = "splash" | "gender";

const OnboardingPage = () => {
  const [stage, setStage] = useState<Stage>("splash");
  const [selectedGender, setSelectedGender] = useState<GenderOption>("female");
  const router = useRouter();

  const handleSplashContinue = () => setStage("gender");

  const handleContinue = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("fitpass.preferredGender", selectedGender);
    }
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {stage === "splash" ? (
        <SplashScreen onContinue={handleSplashContinue} />
      ) : (
        <GenderSelection selected={selectedGender} onSelect={setSelectedGender} onContinue={handleContinue} />
      )}
    </div>
  );
};

export default OnboardingPage;

