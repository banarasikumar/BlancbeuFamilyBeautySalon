import { Home, Calendar, MessageCircle, MapPin } from "lucide-react";
import { useLocation } from "wouter";

interface BottomNavProps {
  onNavigate?: (path: string) => void;
}

export default function BottomNavigation({ onNavigate }: BottomNavProps) {
  const [location] = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Calendar, label: "Booking", path: "/booking" },
    { icon: MessageCircle, label: "Chat", path: "/chat" },
    { icon: MapPin, label: "Locate", path: "/locate" },
  ];

  const handleNavClick = (path: string) => {
    console.log(`Navigating to ${path}`);
    onNavigate?.(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border">
      <div className="flex justify-around items-center py-2 px-4 pb-safe-bottom">
        {navItems.map((item) => {
          const isActive = location === item.path;
          const Icon = item.icon;
          
          return (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`flex flex-col items-center space-y-1 py-2 px-4 rounded-lg transition-all hover-elevate ${
                isActive 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid={`nav-${item.label.toLowerCase()}`}
            >
              <Icon className={`w-6 h-6 ${isActive ? "fill-current" : ""}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}