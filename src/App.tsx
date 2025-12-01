import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import MobileNav from "@/components/MobileNav";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GymMapView from "./pages/GymMapView";
import Passes from "./pages/Passes";
import CheckIn from "./pages/CheckIn";
import WorkoutLogger from "./pages/WorkoutLogger";
import Progress from "./pages/Progress";
import DietBot from "./pages/DietBot";
import Onboarding from "./pages/Onboarding";
import { useEffect } from "react";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hideNav = location.pathname.startsWith("/onboarding");

  useEffect(() => {
    const hasPreference = Boolean(localStorage.getItem("fitpass.preferredGender"));
    if (!hasPreference && !location.pathname.startsWith("/onboarding")) {
      navigate("/onboarding", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/gyms" element={<GymMapView />} />
        <Route path="/passes" element={<Passes />} />
        <Route path="/check-in" element={<CheckIn />} />
        <Route path="/log" element={<WorkoutLogger />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/diet-bot" element={<DietBot />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideNav && <MobileNav />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
