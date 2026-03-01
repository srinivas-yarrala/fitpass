"use client";

import { useRouter } from "next/navigation";
import { Header } from "@/components/organisms/Header";
import MobileNav from "@/components/organisms/MobileNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ShoppingBag,
  Dumbbell,
  GraduationCap,
  ShoppingBag as ShopIcon,
} from "lucide-react";
import Image from "next/image";
import { useCart, type CartItem } from "@/contexts/CartContext";

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&h=200&fit=crop";

function CartItemImage({ item }: { item: CartItem }) {
  const src =
    typeof item.image === "string" && item.image !== "[local]"
      ? item.image
      : PLACEHOLDER_IMAGE;

  return (
    <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
      <img
        src={src}
        alt={item.name}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function ItemRow({
  item,
  onUpdateQuantity,
  onRemove,
}: {
  item: CartItem;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <Card key={item.id} className="p-4">
      <div className="flex gap-4">
        <CartItemImage item={item} />
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg truncate">{item.name}</h3>
          {(item.type || item.subtitle) && (
            <p className="text-sm text-muted-foreground mb-1">
              {item.type ?? item.subtitle}
            </p>
          )}
          {item.details && (
            <p className="text-xs text-primary mb-2">{item.details}</p>
          )}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-full"
                onClick={() => onUpdateQuantity(item.id, -1)}
              >
                <Minus size={14} />
              </Button>
              <span className="w-8 text-center font-semibold">
                {item.quantity}
              </span>
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-full"
                onClick={() => onUpdateQuantity(item.id, 1)}
              >
                <Plus size={14} />
              </Button>
            </div>
            <div className="text-right">
              <div className="font-bold text-lg">
                ₹{item.price * item.quantity}
              </div>
              {item.quantity > 1 && (
                <div className="text-xs text-muted-foreground">
                  ₹{item.price} each
                </div>
              )}
            </div>
          </div>
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={() => onRemove(item.id)}
        >
          <Trash2 size={18} />
        </Button>
      </div>
    </Card>
  );
}

export default function CartPage() {
  const router = useRouter();
  const { items: cartItems, updateQuantity, removeItem } = useCart();

  const gymItems = cartItems.filter((item) => item.category === "gym");
  const trainingItems = cartItems.filter((item) => item.category === "training");
  const shopItems = cartItems.filter((item) => item.category === "shop");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  const totalQuantity = cartItems.reduce((s, i) => s + i.quantity, 0);

  return (
    <div className="min-h-screen bg-background pb-32 md:pb-10">
      <Header />

      <div className="container mx-auto px-4 lg:px-8 pt-24">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
            <ShoppingCart className="text-primary" />
            Your Cart
          </h1>
          <p className="text-muted-foreground">
            {totalQuantity} {totalQuantity === 1 ? "item" : "items"} in your
            cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <ShoppingBag size={48} className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Add gym passes or shop items to get started!
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                onClick={() => router.push("/gyms")}
                className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold"
              >
                Browse Gyms
              </Button>
              <Button
                onClick={() => router.push("/shop")}
                variant="outline"
                className="font-semibold"
              >
                Browse Shop
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {gymItems.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Dumbbell size={20} className="text-primary" />
                    Gym Access
                  </h2>
                  <div className="space-y-4">
                    {gymItems.map((item) => (
                      <ItemRow
                        key={item.id}
                        item={item}
                        onUpdateQuantity={updateQuantity}
                        onRemove={removeItem}
                      />
                    ))}
                  </div>
                </div>
              )}

              {trainingItems.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <GraduationCap size={20} className="text-primary" />
                    Training Sessions
                  </h2>
                  <div className="space-y-4">
                    {trainingItems.map((item) => (
                      <ItemRow
                        key={item.id}
                        item={item}
                        onUpdateQuantity={updateQuantity}
                        onRemove={removeItem}
                      />
                    ))}
                  </div>
                </div>
              )}

              {shopItems.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <ShopIcon size={20} className="text-primary" />
                    Shop
                  </h2>
                  <div className="space-y-4">
                    {shopItems.map((item) => (
                      <ItemRow
                        key={item.id}
                        item={item}
                        onUpdateQuantity={updateQuantity}
                        onRemove={removeItem}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

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
