"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type GenderOption = "male" | "female";

const MIN_AGE = 13;
const MAX_AGE = 120;
const DEFAULT_AGE = 25;

const OnboardingPage = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedGender, setSelectedGender] = useState<GenderOption | null>(null);
  const [age, setAge] = useState(DEFAULT_AGE);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem("fitpass.userPhone")) {
      router.replace("/");
    }
  }, [router]);

  const handleGenderNext = () => {
    if (!selectedGender) return;
    setStep(2);
  };

  const handleFinish = () => {
    const phone = localStorage.getItem("fitpass.userPhone") ?? "";
    localStorage.setItem("fitpass.preferredGender", selectedGender!);
    localStorage.setItem("fitpass.userAge", String(age));
    localStorage.setItem("fitpass.userPhone", phone);
    router.replace("/");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        <div className="flex justify-center gap-2 mb-10">
          <span
            className={`h-1 flex-1 max-w-20 rounded-full transition-colors ${
              step >= 1 ? "bg-primary" : "bg-secondary"
            }`}
          />
          <span
            className={`h-1 flex-1 max-w-20 rounded-full transition-colors ${
              step >= 2 ? "bg-primary" : "bg-secondary"
            }`}
          />
        </div>

        {/* Step 1: Gender */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="border border-border bg-card/80 backdrop-blur-md rounded-2xl p-8 shadow-xl">
              <h2 className="text-sm font-medium text-muted-foreground text-center mb-6">
                Gender
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedGender("male")}
                  className={`relative rounded-2xl border-2 p-8 text-center transition-all duration-200 ${
                    selectedGender === "male"
                      ? "border-primary bg-primary/10"
                      : "border-border bg-secondary/50 hover:border-primary/40"
                  }`}
                >
                  <span className="text-4xl block mb-2">♂</span>
                  <span
                    className={`text-sm font-semibold ${
                      selectedGender === "male" ? "text-primary" : "text-foreground"
                    }`}
                  >
                    Male
                  </span>
                  {selectedGender === "male" && (
                    <span className="absolute top-3 right-3 h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                      <svg className="h-2.5 w-2.5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedGender("female")}
                  className={`relative rounded-2xl border-2 p-8 text-center transition-all duration-200 ${
                    selectedGender === "female"
                      ? "border-primary bg-primary/10"
                      : "border-border bg-secondary/50 hover:border-primary/40"
                  }`}
                >
                  <span className="text-4xl block mb-2">♀</span>
                  <span
                    className={`text-sm font-semibold ${
                      selectedGender === "female" ? "text-primary" : "text-foreground"
                    }`}
                  >
                    Female
                  </span>
                  {selectedGender === "female" && (
                    <span className="absolute top-3 right-3 h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                      <svg className="h-2.5 w-2.5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  )}
                </button>
              </div>
              <Button
                onClick={handleGenderNext}
                disabled={!selectedGender}
                className="mt-8 h-12 w-full rounded-xl bg-primary font-semibold text-primary-foreground"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Age — stepper */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="border border-border bg-card/80 backdrop-blur-md rounded-2xl p-8 sm:p-10 shadow-xl">
              <h2 className="text-sm font-medium text-muted-foreground text-center mb-2">
                Age
              </h2>
              <div className="flex items-center justify-center gap-4 sm:gap-8 my-10">
                <button
                  type="button"
                  onClick={() => setAge((a) => Math.max(MIN_AGE, a - 1))}
                  disabled={age <= MIN_AGE}
                  aria-label="Decrease age"
                  className="h-14 w-14 rounded-2xl border border-border bg-secondary/50 flex items-center justify-center text-2xl font-light text-foreground hover:bg-secondary hover:border-primary/50 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  −
                </button>
                <div className="min-w-[5rem] text-center">
                  <span className="text-5xl sm:text-6xl font-bold tabular-nums text-foreground tracking-tight">
                    {age}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setAge((a) => Math.min(MAX_AGE, a + 1))}
                  disabled={age >= MAX_AGE}
                  aria-label="Increase age"
                  className="h-14 w-14 rounded-2xl border border-border bg-secondary/50 flex items-center justify-center text-2xl font-light text-foreground hover:bg-secondary hover:border-primary/50 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  +
                </button>
              </div>
              <div className="flex gap-3 mt-8">
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="h-12 flex-1 rounded-xl border-border"
                >
                  Back
                </Button>
                <Button
                  onClick={handleFinish}
                  className="h-12 flex-1 rounded-xl bg-primary font-semibold text-primary-foreground"
                >
                  Done
                </Button>
              </div>
            </div>
          </div>
        )}

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Terms & Privacy
        </p>
      </div>
    </div>
  );
};

export default OnboardingPage;
