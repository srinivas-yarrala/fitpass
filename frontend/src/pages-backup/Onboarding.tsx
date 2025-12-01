import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SplashScreen from "@/components/onboarding/SplashScreen";
import GenderSelection from "@/components/onboarding/GenderSelection";

type Stage = "splash" | "gender";
export type GenderOption = "male" | "female";

const Onboarding = () => {
  const [stage, setStage] = useState<Stage>("splash");
  const [selectedGender, setSelectedGender] = useState<GenderOption>("female");
  const navigate = useNavigate();

  const handleSplashContinue = () => setStage("gender");

  const handleContinue = () => {
    localStorage.setItem("fitpass.preferredGender", selectedGender);
    navigate("/");
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

export default Onboarding;

