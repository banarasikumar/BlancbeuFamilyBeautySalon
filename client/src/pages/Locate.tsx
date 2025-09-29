import LocationMap from "@/components/LocationMap";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin } from "lucide-react";

interface LocateProps {
  onBack?: () => void;
}

export default function Locate({ onBack }: LocateProps) {
  const handleGetDirections = () => {
    console.log("Opening directions to salon");
    // TODO: Integrate with maps app
  };

  const handleCallSalon = () => {
    console.log("Calling salon");
    // TODO: Integrate with phone app
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" onClick={onBack} data-testid="button-back">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <MapPin className="w-5 h-5 text-primary" />
            <h1 className="text-xl font-semibold text-foreground">Find Us</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 pb-24 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold mb-2">Visit Blancbeu</h2>
            <p className="text-muted-foreground text-sm">
              Located in the heart of the fashion district. Easy parking and public transport access.
            </p>
          </div>
          
          <LocationMap 
            onGetDirections={handleGetDirections}
            onCallSalon={handleCallSalon}
          />
        </div>
      </main>
    </div>
  );
}