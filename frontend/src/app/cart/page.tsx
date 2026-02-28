"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/organisms/Header";
import MobileNav from "@/components/organisms/MobileNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight, ShoppingBag, Dumbbell, GraduationCap } from "lucide-react";
import Image from "next/image";
import gym1 from "@/assets/gym-cards/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg";

type CartItem = {
  id: number;
  name: string;
  type: string;
  category: "gym" | "training";
  price: number;
  quantity: number;
  image: any;
  details?: string;
};

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "FitZone Premium", type: "Hourly Pass", category: "gym", price: 99, quantity: 2, image: gym1, details: "2 hours • Full equipment access" },
    { id: 2, name: "FitZone Premium", type: "Monthly Pass", category: "gym", price: 1999, quantity: 1, image: gym1, details: "Unlimited access • Equipment & facilities" },
    { id: 3, name: "Zumba Dance Fitness", type: "Session", category: "training", price: 299, quantity: 1, image: gym1, details: "Mon 6:00 PM • Maria Rodriguez" },
    { id: 4, name: "Hatha Yoga", type: "Session", category: "training", price: 349, quantity: 1, image: gym1, details: "Tue 7:00 AM • Priya Sharma" },
  ]);

  const gymItems = cartItems.filter(item => item.category === "gym");
  const trainingItems = cartItems.filter(item => item.category === "training");

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-background pb-32 md:pb-10">
      <Header />
      
      <div className="container mx-auto px-4 lg:px-8 pt-24">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
            <ShoppingCart className="text-primary" />
            Your Cart
          </h1>
          <p className="text-muted-foreground">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          // Empty Cart
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <ShoppingBag size={48} className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Add some gym passes to get started!</p>
            <Button
              onClick={() => router.push("/gyms")}
              className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold"
            >
              Browse Gyms
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {/* Gym Equipment Section */}
              {gymItems.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Dumbbell size={20} className="text-primary" />
                    Gym Access
                  </h2>
                  <div className="space-y-4">
                    {gymItems.map((item) => (
                      <Card key={item.id} className="p-4">
                        <div className="flex gap-4">
                          <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-lg truncate">{item.name}</h3>
                            <p className="text-sm text-muted-foreground mb-1">{item.type}</p>
                            <p className="text-xs text-primary mb-2">{item.details}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Button size="icon" variant="outline" className="h-8 w-8 rounded-full" onClick={() => updateQuantity(item.id, -1)}>
                                  <Minus size={14} />
                                </Button>
                                <span className="w-8 text-center font-semibold">{item.quantity}</span>
                                <Button size="icon" variant="outline" className="h-8 w-8 rounded-full" onClick={() => updateQuantity(item.id, 1)}>
                                  <Plus size={14} />
                                </Button>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-lg">₹{item.price * item.quantity}</div>
                                {item.quantity > 1 && <div className="text-xs text-muted-foreground">₹{item.price} each</div>}
                              </div>
                            </div>
                          </div>
                          <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10" onClick={() => removeItem(item.id)}>
                            <Trash2 size={18} />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Training Sessions Section */}
              {trainingItems.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <GraduationCap size={20} className="text-primary" />
                    Training Sessions
                  </h2>
                  <div className="space-y-4">
                    {trainingItems.map((item) => (
                      <Card key={item.id} className="p-4">
                        <div className="flex gap-4">
                          <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-lg truncate">{item.name}</h3>
                            <p className="text-sm text-muted-foreground mb-1">{item.type}</p>
                            <p className="text-xs text-primary mb-2">{item.details}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Button size="icon" variant="outline" className="h-8 w-8 rounded-full" onClick={() => updateQuantity(item.id, -1)}>
                                  <Minus size={14} />
                                </Button>
                                <span className="w-8 text-center font-semibold">{item.quantity}</span>
                                <Button size="icon" variant="outline" className="h-8 w-8 rounded-full" onClick={() => updateQuantity(item.id, 1)}>
                                  <Plus size={14} />
                                </Button>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-lg">₹{item.price * item.quantity}</div>
                                {item.quantity > 1 && <div className="text-xs text-muted-foreground">₹{item.price} each</div>}
                              </div>
                            </div>
                          </div>
                          <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10" onClick={() => removeItem(item.id)}>
                            <Trash2 size={18} />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">GST (18%)</span>
                    <span className="font-semibold">₹{tax}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary">₹{total}</span>
                  </div>
                </div>

                <Button
                  className="w-full h-12 bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold text-base"
                  onClick={() => router.push("/checkout")}
                >
                  Proceed to Checkout
                  <ArrowRight size={18} className="ml-2" />
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Secure checkout powered by FitPass
                </p>
              </Card>
            </div>
          </div>
        )}
      </div>

      <MobileNav />
    </div>
  );
}
