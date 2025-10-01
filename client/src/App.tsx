import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import BottomNavigation from "@/components/BottomNavigation";
import ThemeMetaTag from "@/components/ThemeMetaTag";
import Home from "@/pages/Home";
import Booking from "@/pages/Booking";
import Chat from "@/pages/Chat";
import Locate from "@/pages/Locate";
import Settings from "@/pages/Settings";
import NotFound from "@/pages/not-found";

function Router() {
  const [, setLocation] = useLocation();

  const handleNavigate = (path: string) => {
    setLocation(path);
  };

  const handleNavigateToBooking = () => {
    setLocation("/booking");
  };

  const handleBookService = (serviceId: string) => {
    console.log(`Navigating to booking for service: ${serviceId}`);
    setLocation("/booking");
  };

  const handleBack = () => {
    setLocation("/");
  };

  return (
    <div className="relative min-h-screen">
      <Switch>
        <Route path="/">
          <Home 
            onNavigateToBooking={handleNavigateToBooking}
            onBookService={handleBookService}
          />
        </Route>
        <Route path="/booking">
          <Booking onBack={handleBack} />
        </Route>
        <Route path="/chat">
          <Chat onBack={handleBack} />
        </Route>
        <Route path="/locate">
          <Locate onBack={handleBack} />
        </Route>
        <Route path="/settings">
          <Settings onBack={handleBack} />
        </Route>
        <Route component={NotFound} />
      </Switch>
      
      <BottomNavigation onNavigate={handleNavigate} />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeMetaTag />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;