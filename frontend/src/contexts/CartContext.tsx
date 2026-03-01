"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartCategory = "gym" | "training" | "shop";

export type CartItem = {
  id: string;
  category: CartCategory;
  name: string;
  type?: string;
  price: number;
  quantity: number;
  image: string | unknown; // string URL or StaticImageData
  details?: string;
  subtitle?: string;
};

type CartContextValue = {
  items: CartItem[];
  addShopItem: (product: {
    id: number;
    name: string;
    subtitle: string;
    price: number;
    image: string;
  }) => void;
  addGymOrTrainingItem: (item: Omit<CartItem, "id" | "quantity"> & { quantity?: number }) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  totalQuantity: number;
  totalItems: number;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "fitpass-cart";

function loadInitialCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  try {
    const toSave = items.map((item) => ({
      ...item,
      image: typeof item.image === "string" ? item.image : "[local]",
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch {
    // ignore
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(loadInitialCart());
  }, []);

  const addShopItem = useCallback(
    (product: { id: number; name: string; subtitle: string; price: number; image: string }) => {
      const id = `shop-${product.id}`;
      setItems((prev) => {
        const existing = prev.find((i) => i.id === id);
        const next = existing
          ? prev.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity + 1 } : i
            )
          : [
              ...prev,
              {
                id,
                category: "shop" as const,
                name: product.name,
                subtitle: product.subtitle,
                price: product.price,
                quantity: 1,
                image: product.image,
              },
            ];
        saveCart(next);
        return next;
      });
    },
    []
  );

  const addGymOrTrainingItem = useCallback(
    (item: Omit<CartItem, "id" | "quantity"> & { quantity?: number }) => {
      const id = `${item.category}-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const quantity = item.quantity ?? 1;
      setItems((prev) => {
        const next = [...prev, { ...item, id, quantity } as CartItem];
        saveCart(next);
        return next;
      });
    },
    []
  );

  const updateQuantity = useCallback((id: string, delta: number) => {
    setItems((prev) => {
      const next = prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0);
      saveCart(next);
      return next;
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => {
      const next = prev.filter((item) => item.id !== id);
      saveCart(next);
      return next;
    });
  }, []);

  const totalQuantity = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );
  const totalItems = items.length;

  const value = useMemo(
    () => ({
      items,
      addShopItem,
      addGymOrTrainingItem,
      updateQuantity,
      removeItem,
      totalQuantity,
      totalItems,
    }),
    [
      items,
      addShopItem,
      addGymOrTrainingItem,
      updateQuantity,
      removeItem,
      totalQuantity,
      totalItems,
    ]
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

const emptyCartValue: CartContextValue = {
  items: [],
  addShopItem: () => {},
  addGymOrTrainingItem: () => {},
  updateQuantity: () => {},
  removeItem: () => {},
  totalQuantity: 0,
  totalItems: 0,
};

export function useCart() {
  const ctx = useContext(CartContext);
  return ctx ?? emptyCartValue;
}
