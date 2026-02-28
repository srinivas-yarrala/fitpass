"use client";

import { useRouter } from "next/navigation";
import { Header } from "@/components/organisms/Header";
import MobileNav from "@/components/organisms/MobileNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { XCircle, ArrowLeft, RefreshCw, HelpCircle } from "lucide-react";

export default function OrderFailedPage() {
  const router = useRouter();

  const commonIssues = [
    "Insufficient funds in account",
    "Card expired or invalid",
    "Network connection interrupted",
    "Payment gateway timeout",
    "Card not authorized for online transactions",
  ];

  return (
    <div className="min-h-screen bg-background pb-32 md:pb-10">
      <Header />
      
      <div className="container mx-auto px-4 lg:px-8 pt-24">
        <div className="max-w-2xl mx-auto">
          {/* Failed Animation */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-500/10 mb-6 animate-in zoom-in duration-500">
              <XCircle size={56} className="text-red-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Payment Failed</h1>
            <p className="text-muted-foreground text-lg">
              We couldn't process your payment
            </p>
          </div>

          {/* Error Details */}
          <Card className="p-6 mb-6">
            <div className="space-y-4">
              <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                <p className="text-sm font-semibold text-red-500 mb-1">Transaction Declined</p>
                <p className="text-sm text-muted-foreground">
                  Your payment could not be processed. Please check your payment details and try again.
                </p>
              </div>

              <div>
                <p className="font-semibold mb-2">Common reasons for payment failure:</p>
                <ul className="space-y-2">
                  {commonIssues.map((issue, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-red-500 mt-0.5">•</span>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* What to do next */}
          <Card className="p-6 mb-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <HelpCircle size={20} className="text-primary" />
              What should you do?
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>1. Double-check your card details and try again</p>
              <p>2. Ensure you have sufficient balance</p>
              <p>3. Try a different payment method</p>
              <p>4. Contact your bank if the issue persists</p>
              <p>5. Reach out to our support team for help</p>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              className="w-full h-12 bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold"
              onClick={() => router.push("/checkout")}
            >
              <RefreshCw size={18} className="mr-2" />
              Try Again
            </Button>
            
            <Button
              variant="outline"
              className="w-full h-12"
              onClick={() => router.push("/cart")}
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Cart
            </Button>
          </div>

          {/* Help Text */}
          <div className="mt-8 text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Your cart items are still saved. No charges were made.
            </p>
            <p className="text-sm text-muted-foreground">
              Need help? Contact us at{" "}
              <a href="mailto:support@fitpass.com" className="text-primary hover:underline">
                support@fitpass.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <MobileNav />
    </div>
  );
}
