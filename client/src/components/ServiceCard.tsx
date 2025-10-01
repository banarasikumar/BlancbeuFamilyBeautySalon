import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, Check } from "lucide-react";

interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  rating: number;
  image: string;
  category: string;
  isSelected?: boolean;
  onBook?: (serviceId: string) => void;
}

export default function ServiceCard({
  id,
  name,
  description,
  price,
  duration,
  rating,
  image,
  category,
  isSelected = false,
  onBook,
}: ServiceCardProps) {
  const handleToggle = () => {
    console.log(`${isSelected ? 'Removing' : 'Adding'} service: ${name}`);
    onBook?.(id);
  };

  return (
    <Card className={`overflow-hidden hover-elevate group cursor-pointer ${isSelected ? 'ring-2 ring-primary bg-primary/5' : ''}`}>
      <div className="relative">
        <div 
          className="h-48 bg-cover bg-center transition-transform group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {category}
          </Badge>
        </div>
        <div className="absolute top-3 right-3 flex items-center space-x-1">
          {isSelected && (
            <div className="bg-primary text-primary-foreground rounded-full p-1 mr-2">
              <Check className="w-3 h-3" />
            </div>
          )}
          <div className="flex items-center space-x-1 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">{rating}</span>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-lg font-bold text-primary">₹{price}</span>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{duration}min</span>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={handleToggle}
            className="w-full"
            variant={isSelected ? "secondary" : "default"}
            data-testid={`button-book-${id}`}
          >
            {isSelected ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Added
              </>
            ) : (
              'Add Service'
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}