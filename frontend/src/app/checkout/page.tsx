"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/organisms/Header";
import MobileNav from "@/components/organisms/MobileNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Lock, CheckCircle2, Wallet } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi">("card");

  // Mock cart data
  const cartItems = [
    { name: "FitZone Premium - Single Session", price: 199, quantity: 1 },
    { name: "FitZone Premium - 5-Visit Pass", price: 899, quantity: 1 },
  ];
  
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // Randomly succeed or fail for demo
      const success = Math.random() > 0.3; // 70% success rate
      
      if (success) {
        router.push("/order-success");
      } else {
        router.push("/order-failed");
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background pb-32 md:pb-10">
      <Header />
      
      <div className="container mx-auto px-4 lg:px-8 pt-24">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
            <Lock className="text-primary" />
            Secure Checkout
          </h1>
          <p className="text-muted-foreground">Complete your purchase</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="h-11" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" className="h-11" />
                </div>
              </div>
            </Card>

            {/* Payment Method */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Payment Method</h2>
              
              {/* Payment Options */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === "card"
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <CreditCard className={`mx-auto mb-2 ${paymentMethod === "card" ? "text-primary" : ""}`} />
                  <div className="text-sm font-semibold">Card</div>
                </button>
                <button
                  onClick={() => setPaymentMethod("upi")}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === "upi"
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <Wallet className={`mx-auto mb-2 ${paymentMethod === "upi" ? "text-primary" : ""}`} />
                  <div className="text-sm font-semibold">UPI</div>
                </button>
              </div>

              {/* Card Details */}
              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="h-11"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" maxLength={5} className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" maxLength={3} type="password" className="h-11" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Cardholder Name</Label>
                    <Input id="cardName" placeholder="John Doe" className="h-11" />
                  </div>
                </div>
              )}

              {/* UPI Details */}
              {paymentMethod === "upi" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input
                      id="upiId"
                      placeholder="yourname@paytm"
                      className="h-11"
                    />
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      You will receive a payment request on your UPI app
                    </p>
                  </div>
                </div>
              )}

              {/* Security Badge */}
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Lock size={16} className="text-green-500" />
                <span>Your payment information is secure and encrypted</span>
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              {/* Items */}
              <div className="space-y-3 mb-4">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span className="text-muted-foreground flex-1 pr-2">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="font-semibold">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              {/* Totals */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">GST (18%)</span>
                  <span className="font-semibold">₹{tax}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg pt-2">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-primary">₹{total}</span>
                </div>
              </div>

              <Button
                className="w-full h-12 bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold text-base"
                onClick={handlePayment}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Lock size={18} className="mr-2" />
                    Pay ₹{total}
                  </>
                )}
              </Button>

              {/* Trust Badges */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 size={14} className="text-green-500" />
                  <span>Secure 256-bit SSL encryption</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 size={14} className="text-green-500" />
                  <span>100% secure payment</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 size={14} className="text-green-500" />
                  <span>Refund available within 24 hours</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t">
                <Badge variant="secondary" className="w-full justify-center py-2">
                  Powered by FitPass
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <MobileNav />
    </div>
  );
}
