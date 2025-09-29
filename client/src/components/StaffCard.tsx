import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Award } from "lucide-react";

interface StaffCardProps {
  id: string;
  name: string;
  role: string;
  rating: number;
  specialties: string[];
  experience: string;
  avatar?: string;
  isSelected?: boolean;
  onSelect?: (staffId: string) => void;
}

export default function StaffCard({
  id,
  name,
  role,
  rating,
  specialties,
  experience,
  avatar,
  isSelected = false,
  onSelect,
}: StaffCardProps) {
  const handleSelect = () => {
    console.log(`Selected staff: ${name}`);
    onSelect?.(id);
  };

  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <Card 
      className={`cursor-pointer transition-all hover-elevate ${
        isSelected ? "ring-2 ring-primary bg-primary/5" : ""
      }`}
      onClick={handleSelect}
    >
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-semibold text-foreground truncate">{name}</h4>
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-medium">{rating}</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-2">{role}</p>
            
            <div className="flex items-center space-x-2 mb-2">
              <Award className="w-3 h-3 text-primary" />
              <span className="text-xs text-muted-foreground">{experience}</span>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {specialties.slice(0, 2).map((specialty) => (
                <Badge key={specialty} variant="secondary" className="text-xs">
                  {specialty}
                </Badge>
              ))}
              {specialties.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{specialties.length - 2}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}