import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileNav from "@/components/MobileNav";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GymMapView from "./pages/GymMapView";
import Passes from "./pages/Passes";
import CheckIn from "./pages/CheckIn";
import WorkoutLogger from "./pages/WorkoutLogger";
import Progress from "./pages/Progress";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gyms" element={<GymMapView />} />
          <Route path="/passes" element={<Passes />} />
          <Route path="/check-in" element={<CheckIn />} />
          <Route path="/log" element={<WorkoutLogger />} />
          <Route path="/progress" element={<Progress />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MobileNav />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
