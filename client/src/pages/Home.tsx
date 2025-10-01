import HeroSection from "@/components/HeroSection";
import OffersSection from "@/components/OffersSection";
import CustomerReviews from "@/components/CustomerReviews";
import ThemeToggle from "@/components/ThemeToggle";
import ProgressiveImage from "@/components/ProgressiveImage";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Star, Award, Scissors, Heart, Paintbrush, Flower, IndianRupee, Clock } from "lucide-react";
import { getServiceCategories, getServicesByCategory, getPopularServices } from "@shared/services";

interface HomeProps {
  onNavigateToBooking?: () => void;
  onBookService?: (serviceId: string) => void;
}

export default function Home({ onNavigateToBooking, onBookService }: HomeProps) {
  const handleBookNow = () => {
    console.log("Navigate to booking from hero");
    onNavigateToBooking?.();
  };

  const handleServiceBook = (serviceId: string) => {
    console.log(`Booking service ${serviceId} from home`);
    onBookService?.(serviceId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <div>
              <h1 className="text-lg font-serif font-bold text-foreground">BlancBeu</h1>
              <p className="text-xs text-muted-foreground">Family Beauty Salon</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 pb-24">
        {/* Hero Section */}
        <section className="p-4">
          <HeroSection onBookNow={handleBookNow} />
        </section>

        {/* Special Offers Section */}
        <OffersSection onBookNow={handleBookNow} />

        {/* Features */}
        <section className="px-4 py-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-2 scale-in">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto float-animation">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">5-Star Rated</h3>
              <p className="text-xs text-muted-foreground">Premium service quality</p>
            </div>
            <div className="space-y-2 scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto float-animation" style={{ animationDelay: '0.5s' }}>
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">Expert Staff</h3>
              <p className="text-xs text-muted-foreground">Certified professionals</p>
            </div>
            <div className="space-y-2 scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto float-animation" style={{ animationDelay: '1s' }}>
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">Modern Tech</h3>
              <p className="text-xs text-muted-foreground">Latest treatments</p>
            </div>
          </div>
        </section>

        {/* Popular Services Highlight */}
        <section className="px-4 py-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Star className="w-6 h-6 text-primary animate-pulse" />
              <h2 className="text-2xl font-serif font-bold text-foreground">Popular Services</h2>
              <Star className="w-6 h-6 text-primary animate-pulse" />
            </div>
            <p className="text-sm text-muted-foreground mb-6">Most loved treatments by our clients</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {getPopularServices(6).map((service, index) => (
              <Card 
                key={service.id} 
                className="hover-elevate cursor-pointer scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`card-popular-${service.id}`}
              >
                <CardContent className="p-4 text-center">
                  <ProgressiveImage
                    src={service.image}
                    alt={service.name}
                    className="h-24 rounded-lg mb-3"
                  />
                  <h4 className="font-semibold text-sm text-foreground mb-1 line-clamp-2">{service.name}</h4>
                  <div className="flex items-center justify-center space-x-1 text-primary">
                    <IndianRupee className="w-3 h-3" />
                    <span className="font-bold text-sm">₹{service.price}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1 mt-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{service.rating}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" onClick={handleBookNow} data-testid="button-book-popular" className="pulse-glow">
              Book Your Appointment
            </Button>
          </div>
        </section>

        {/* All Services by Category */}
        <section className="px-4 py-8 bg-muted/30">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Complete Service Menu</h2>
            <p className="text-muted-foreground mb-6">Explore all our beauty services organized by category</p>
            <Button size="lg" onClick={handleBookNow} data-testid="button-book-before-services" className="mb-8">
              Browse & Book Services
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {getServiceCategories().map((category, index) => {
              const services = getServicesByCategory(category);
              const icons: Record<string, any> = {
                "Hair": Scissors,
                "Skincare": Sparkles,
                "Nails": Paintbrush,
                "Makeup": Heart,
                "Spa & Wellness": Flower
              };
              const Icon = icons[category] || Sparkles;

              return (
                <Card 
                  key={category}
                  className="hover-elevate cursor-pointer scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={handleBookNow}
                  data-testid={`card-category-${category}`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3 float-animation">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif font-bold text-foreground mb-1">{category}</h3>
                    <p className="text-sm text-muted-foreground">{services.length} services</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" onClick={handleBookNow} data-testid="button-book-after-services">
              View All Services & Book
            </Button>
          </div>
        </section>

        {/* Customer Reviews */}
        <CustomerReviews />

        {/* Call to Action */}
        <section className="px-4 py-8">
          <div className="gradient-rose-gold rounded-lg p-6 text-center card-3d slide-in-up">
            <h3 className="text-xl font-serif font-bold mb-2 text-white">Ready for Your Transformation?</h3>
            <p className="text-white/90 mb-4">Book your appointment today and experience luxury beauty care for the whole family.</p>
            <Button size="lg" onClick={handleBookNow} data-testid="button-cta-book" className="pulse-glow bg-white/20 backdrop-blur-sm border-white/30">
              Book Your Appointment
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}