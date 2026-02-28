"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const DEV_OTP = "4444";

export function AuthEntry() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [sending, setSending] = useState(false);
  const [verifying, setVerifying] = useState(false);

  const digits = phone.replace(/\D/g, "");
  const phoneValid = digits.length === 10;

  const handleSendOtp = () => {
    setPhoneError("");
    if (!phoneValid) {
      setPhoneError("Enter a valid 10-digit mobile number.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setOtpSent(true);
      setOtp("");
      setOtpError("");
      setSending(false);
    }, 600);
  };

  const handleVerifyOtp = () => {
    setOtpError("");
    if (otp !== DEV_OTP) {
      setOtpError("Invalid OTP. Please try again.");
      return;
    }
    setVerifying(true);
    if (typeof window !== "undefined") {
      localStorage.setItem("fitpass.userPhone", digits);
      if (mode === "signup") {
        localStorage.setItem("fitpass.isNewUser", "true");
      }
    }
    setVerifying(false);
    router.replace("/");
  };

  const handleChangeNumber = () => {
    setOtpSent(false);
    setOtp("");
    setOtpError("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-[360px]">
        {/* Logo */}
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="relative mb-6 flex h-20 w-20 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl" />
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground shadow-[0_8px_32px_rgba(204,255,0,0.4)]">
              FP
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            FitPass
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {mode === "login"
              ? "Log in to continue"
              : "Sign up to get started"}
          </p>
        </div>

        {/* Login / Sign up toggle */}
        <div className="mb-6 flex rounded-xl bg-secondary p-1">
          <button
            type="button"
            onClick={() => {
              setMode("login");
              setPhoneError("");
              setOtpError("");
              if (otpSent) handleChangeNumber();
            }}
            className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
              mode === "login"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Log in
          </button>
          <button
            type="button"
            onClick={() => {
              setMode("signup");
              setPhoneError("");
              setOtpError("");
              if (otpSent) handleChangeNumber();
            }}
            className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
              mode === "signup"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Sign up
          </button>
        </div>

        {!otpSent ? (
          <>
            <label className="mb-2 block text-sm font-medium text-foreground">
              Mobile number
            </label>
            <div className="flex gap-2">
              <div className="flex h-12 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-input bg-secondary text-sm font-medium text-muted-foreground">
                +91
              </div>
              <Input
                type="tel"
                inputMode="numeric"
                placeholder="Enter 10-digit number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value.replace(/\D/g, "").slice(0, 10));
                  setPhoneError("");
                }}
                className="h-12 flex-1 rounded-xl border-input bg-secondary text-foreground placeholder:text-muted-foreground"
                maxLength={10}
              />
            </div>
            {phoneError && (
              <p className="mt-1.5 text-xs text-destructive">{phoneError}</p>
            )}
            <Button
              onClick={handleSendOtp}
              disabled={sending || !phoneValid}
              className="mt-6 h-12 w-full rounded-xl bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
            >
              {sending ? "Sending…" : "Send OTP"}
            </Button>
          </>
        ) : (
          <>
            <p className="mb-1 text-sm text-muted-foreground">
              Code sent to +91 {digits.slice(0, 5)}*****
            </p>
            <button
              type="button"
              onClick={handleChangeNumber}
              className="mb-4 text-sm font-medium text-primary hover:underline"
            >
              Change number
            </button>
            <Dialog open={otpSent} onOpenChange={(open) => !open && handleChangeNumber()}>
              <DialogContent className="border border-border bg-card/80 backdrop-blur-md rounded-2xl p-6 sm:max-w-md text-foreground shadow-xl">
                <DialogHeader>
                  <DialogTitle className="text-center text-xl font-bold text-foreground">
                    Enter verification code
                  </DialogTitle>
                  <DialogDescription className="text-center text-muted-foreground">
                    Code sent to +91 {digits.slice(0, 5)}*****
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center gap-6 py-4">
                  <div className="flex justify-center">
                    <InputOTP
                      maxLength={4}
                      value={otp}
                      onChange={(value) => {
                        setOtp(value);
                        setOtpError("");
                      }}
                      className="gap-2"
                    >
                      <InputOTPGroup>
                        {[0, 1, 2, 3].map((i) => (
                          <InputOTPSlot
                            key={i}
                            index={i}
                            className="h-14 w-14 rounded-xl border-2 border-border bg-secondary/80 text-xl font-semibold text-foreground focus:border-primary focus:ring-primary"
                          />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                  {otpError && (
                    <p className="text-center text-sm text-destructive">
                      {otpError}
                    </p>
                  )}
                  <Button
                    onClick={handleVerifyOtp}
                    disabled={verifying || otp.length !== 4}
                    className="w-full h-12 rounded-xl bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    {verifying ? "Verifying…" : "Verify & continue"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </>
        )}

        <p className="mt-8 text-center text-xs text-muted-foreground">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
