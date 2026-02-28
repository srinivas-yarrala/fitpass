"use client";

import { useRouter } from "next/navigation";
import { Header } from "@/components/organisms/Header";
import MobileNav from "@/components/organisms/MobileNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Download, Home, Calendar } from "lucide-react";

export default function OrderSuccessPage() {
  const router = useRouter();
  
  // Mock order data
  const orderData = {
    orderId: "FP" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    date: new Date().toLocaleDateString("en-IN", { 
      day: "numeric", 
      month: "long", 
      year: "numeric" 
    }),
    items: [
      { name: "FitZone Premium - Single Session", price: 199, quantity: 1 },
      { name: "FitZone Premium - 5-Visit Pass", price: 899, quantity: 1 },
    ],
    subtotal: 1098,
    tax: 198,
    total: 1296,
  };

  return (
    <div className="min-h-screen bg-background pb-32 md:pb-10">
      <Header />
      
      <div className="container mx-auto px-4 lg:px-8 pt-24">
        <div className="max-w-2xl mx-auto">
          {/* Success Animation */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/10 mb-6 animate-in zoom-in duration-500">
              <CheckCircle size={56} className="text-green-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Payment Successful!</h1>
            <p className="text-muted-foreground text-lg">
              Your order has been confirmed
            </p>
          </div>

          {/* Order Details Card */}
          <Card className="p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Order ID</p>
                <p className="text-xl font-bold">{orderData.orderId}</p>
              </div>
              <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                Confirmed
              </Badge>
            </div>

            <Separator className="mb-6" />

            {/* Order Items */}
            <div className="space-y-4 mb-6">
              <h3 className="font-semibold">Order Items</h3>
              {orderData.items.map((item, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {item.name} x{item.quantity}
                  </span>
                  <span className="font-semibold">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <Separator className="mb-4" />

            {/* Totals */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">₹{orderData.subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">GST (18%)</span>
                <span className="font-semibold">₹{orderData.tax}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg pt-2">
                <span className="font-bold">Total Paid</span>
                <span className="font-bold text-green-500">₹{orderData.total}</span>
              </div>
            </div>
          </Card>

          {/* Order Info */}
          <Card className="p-6 mb-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Order Date</p>
                <p className="font-semibold">{orderData.date}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Payment Method</p>
                <p className="font-semibold">Card ending in •••• 3456</p>
              </div>
              <Separator />
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-sm">
                  <span className="font-semibold">📧 Confirmation sent!</span><br />
                  Check your email for booking details and QR codes.
                </p>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              className="w-full h-12 bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold"
              onClick={() => router.push("/")}
            >
              <Home size={18} className="mr-2" />
              Back to Home
            </Button>
            
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="h-12"
                onClick={() => router.push("/passes")}
              >
                <Calendar size={18} className="mr-2" />
                My Passes
              </Button>
              <Button
                variant="outline"
                className="h-12"
                onClick={() => window.print()}
              >
                <Download size={18} className="mr-2" />
                Download Receipt
              </Button>
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Need help? Contact our support team at{" "}
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
