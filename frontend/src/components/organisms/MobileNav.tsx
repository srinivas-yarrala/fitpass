"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MapPin, Dumbbell, LineChart, QrCode } from "lucide-react";

const tabs = [
  { href: "/", label: "Home", icon: Home },
  { href: "/gyms", label: "Gyms", icon: MapPin },
  { href: "/diet-bot", label: "Diet", icon: Dumbbell },
  { href: "/progress", label: "Tracker", icon: LineChart },
  { href: "/check-in", label: "Check-in", icon: QrCode },
];

export const MobileNav = () => {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/75 border-t border-border safe-area-inset-bottom shadow-[0_-6px_20px_rgba(0,0,0,0.25)]">
      <ul className="grid grid-cols-5">
        {tabs.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`relative flex flex-col items-center justify-center py-2 text-xs ${isActive ? "text-primary" : "text-muted-foreground"}`}
              >
                <Icon size={18} />
                <span className="mt-0.5">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNav;


