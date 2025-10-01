import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, GraduationCap, PartyPopper, Scissors } from "lucide-react";

interface OffersSectionProps {
  onBookNow?: () => void;
}

export default function OffersSection({ onBookNow }: OffersSectionProps) {
  const offers = [
    {
      id: 1,
      title: "Limited Time Offer",
      subtitle: "Haircut Special",
      description: "Starting at only",
      price: "₹99",
      icon: Scissors,
      gradient: "gradient-rose-gold",
      badge: "Hot Deal",
      badgeColor: "bg-red-500 text-white"
    },
    {
      id: 2,
      title: "Student Discount",
      subtitle: "Exclusive Offer",
      description: "With Valid ID",
      price: "Up to 40% OFF",
      icon: GraduationCap,
      gradient: "gradient-luxury",
      badge: "Student Special",
      badgeColor: "bg-blue-500 text-white"
    },
    {
      id: 3,
      title: "Durga Puja Special",
      subtitle: "Festive Discount",
      description: "On all services",
      price: "Flat 30% OFF",
      icon: PartyPopper,
      gradient: "gradient-festive",
      badge: "Durga Puja",
      badgeColor: "bg-orange-500 text-white"
    },
    {
      id: 4,
      title: "Next Visit Reward",
      subtitle: "Loyalty Bonus",
      description: "Book today & get",
      price: "₹50 OFF + ₹500 Coupon",
      icon: Sparkles,
      gradient: "gradient-luxury",
      badge: "Bonus Offer",
      badgeColor: "bg-emerald-500 text-white"
    }
  ];

  return (
    <section className="px-4 py-8">
      <div className="text-center mb-6 slide-in-up">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          <h2 className="text-2xl font-serif font-bold text-foreground">Special Offers</h2>
          <Sparkles className="w-6 h-6 text-primary animate-pulse" />
        </div>
        <p className="text-sm text-muted-foreground">Exclusive deals just for you!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((offer, index) => {
          const Icon = offer.icon;
          return (
            <Card 
              key={offer.id} 
              className={`card-3d overflow-hidden relative scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-offer-${offer.id}`}
            >
              <div className={`absolute inset-0 ${offer.gradient} opacity-10`} />
              <div className="absolute top-3 right-3">
                <Badge className={`${offer.badgeColor} pulse-glow`}>
                  {offer.badge}
                </Badge>
              </div>
              
              <CardContent className="p-6 relative">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center float-animation">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="font-serif font-bold text-xl text-foreground mb-1">
                      {offer.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{offer.subtitle}</p>
                  </div>

                  <div className="relative">
                    <div className="shimmer-effect absolute inset-0 rounded-lg" />
                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                      <p className="text-sm text-muted-foreground mb-1">{offer.description}</p>
                      <p className="text-3xl font-bold text-primary">{offer.price}</p>
                    </div>
                  </div>

                  <Button 
                    onClick={onBookNow}
                    className="w-full"
                    data-testid={`button-book-offer-${offer.id}`}
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-muted-foreground">
          * Terms and conditions apply. Offers valid till stocks last.
        </p>
      </div>
    </section>
  );
}
