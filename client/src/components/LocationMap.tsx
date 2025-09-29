import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

interface LocationMapProps {
  onGetDirections?: () => void;
  onCallSalon?: () => void;
}

export default function LocationMap({ onGetDirections, onCallSalon }: LocationMapProps) {
  const handleGetDirections = () => {
    console.log("Getting directions to salon");
    onGetDirections?.();
  };

  const handleCallSalon = () => {
    console.log("Calling salon");
    onCallSalon?.();
  };

  const salonInfo = {
    name: "Blancbeu Salon",
    address: "123 Fashion District, Downtown",
    phone: "(555) 123-4567",
    hours: "9:00 AM - 8:00 PM"
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="w-5 h-5" />
          <span>Salon Location</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Map Placeholder */}
        <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center border">
          <div className="text-center text-muted-foreground">
            <MapPin className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm">Interactive Map</p>
            <p className="text-xs">Location: {salonInfo.address}</p>
          </div>
        </div>
        
        {/* Salon Info */}
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-foreground">{salonInfo.name}</h4>
            <p className="text-sm text-muted-foreground">{salonInfo.address}</p>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Today: {salonInfo.hours}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span>{salonInfo.phone}</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-2 pt-2">
          <Button 
            onClick={handleGetDirections}
            className="flex-1"
            data-testid="button-get-directions"
          >
            <Navigation className="w-4 h-4 mr-2" />
            Directions
          </Button>
          <Button 
            onClick={handleCallSalon}
            variant="outline"
            className="flex-1"
            data-testid="button-call-salon"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}