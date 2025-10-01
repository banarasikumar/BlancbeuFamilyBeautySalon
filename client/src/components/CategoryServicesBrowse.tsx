import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getServiceCategories, getServicesByCategory } from "@shared/services";
import { Star, Clock, IndianRupee, Scissors, Sparkles, Paintbrush, Heart, Flower } from "lucide-react";

const categoryIcons: Record<string, any> = {
  "Hair": Scissors,
  "Skincare": Sparkles,
  "Nails": Paintbrush,
  "Makeup": Heart,
  "Spa & Wellness": Flower
};

interface CategoryServicesBrowseProps {
  onBookService?: (serviceId: string) => void;
  selectedServices?: string[];
}

export default function CategoryServicesBrowse({ onBookService, selectedServices = [] }: CategoryServicesBrowseProps) {
  const categories = getServiceCategories();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([categories[0]]);

  return (
    <div className="space-y-6">
      {categories.map((category) => {
        const services = getServicesByCategory(category);
        const Icon = categoryIcons[category] || Sparkles;
        const categoryServicesSelected = services.filter(s => selectedServices.includes(s.id)).length;

        return (
          <Card key={category} className="overflow-hidden" data-testid={`card-category-${category}`}>
            <Accordion type="multiple" value={expandedCategories} onValueChange={setExpandedCategories}>
              <AccordionItem value={category} className="border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover-elevate" data-testid={`button-toggle-category-${category}`}>
                  <div className="flex items-center justify-between w-full mr-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-lg text-foreground">{category}</h3>
                        <p className="text-sm text-muted-foreground">{services.length} services available</p>
                      </div>
                    </div>
                    {categoryServicesSelected > 0 && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {categoryServicesSelected} Selected
                      </Badge>
                    )}
                  </div>
                </AccordionTrigger>
                
                <AccordionContent>
                  <div className="px-6 pb-4 space-y-3">
                    {services.map((service) => {
                      const isSelected = selectedServices.includes(service.id);
                      
                      return (
                        <Card 
                          key={service.id}
                          className={`hover-elevate ${isSelected ? 'ring-2 ring-primary bg-primary/5' : ''}`}
                          data-testid={`card-service-${service.id}`}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between space-x-4">
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-2">
                                  <div>
                                    <h4 className="font-semibold text-foreground">{service.name}</h4>
                                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                                      {service.description}
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-center space-x-4 mt-3">
                                  <div className="flex items-center space-x-1">
                                    <IndianRupee className="w-4 h-4 text-primary" />
                                    <span className="font-bold text-primary">₹{service.price}</span>
                                  </div>
                                  <div className="flex items-center space-x-1 text-muted-foreground">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-sm">{service.duration}min</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm font-medium">{service.rating}</span>
                                  </div>
                                </div>
                              </div>

                              <Button
                                size="sm"
                                variant={isSelected ? "secondary" : "default"}
                                onClick={() => onBookService?.(service.id)}
                                className="shrink-0"
                                data-testid={`button-select-service-${service.id}`}
                              >
                                {isSelected ? "Added" : "Add"}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        );
      })}
    </div>
  );
}
