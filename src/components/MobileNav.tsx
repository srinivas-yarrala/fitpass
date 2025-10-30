import { NavLink } from "react-router-dom";
import { Home, MapPin, Dumbbell, LineChart, QrCode } from "lucide-react";

const tabs = [
  { to: "/", label: "Home", icon: Home },
  { to: "/gyms", label: "Gyms", icon: MapPin },
  { to: "/log", label: "Diet", icon: Dumbbell },
  { to: "/progress", label: "Tracker", icon: LineChart },
  { to: "/check-in", label: "Check-in", icon: QrCode },
];

export const MobileNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/75 border-t border-border safe-area-inset-bottom shadow-[0_-6px_20px_rgba(0,0,0,0.25)]">
      <ul className="grid grid-cols-5">
        {tabs.map(({ to, label, icon: Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `relative flex flex-col items-center justify-center py-2 text-xs ${isActive ? "text-primary" : "text-muted-foreground"}`
              }
            >
              <Icon size={18} />
              <span className="mt-0.5">{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;


