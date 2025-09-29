import HeroSection from "@/components/HeroSection";
import ServiceGrid from "@/components/ServiceGrid";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Star, Award } from "lucide-react";

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
            <h1 className="text-xl font-serif font-bold text-foreground">Blancbeu</h1>
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

        {/* Features */}
        <section className="px-4 py-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">5-Star Rated</h3>
              <p className="text-xs text-muted-foreground">Premium service quality</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">Expert Staff</h3>
              <p className="text-xs text-muted-foreground">Certified professionals</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">Modern Tech</h3>
              <p className="text-xs text-muted-foreground">Latest treatments</p>
            </div>
          </div>
        </section>

        {/* Popular Services */}
        <section className="px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground">Popular Services</h2>
              <p className="text-sm text-muted-foreground">Trending beauty treatments</p>
            </div>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              New
            </Badge>
          </div>
          <ServiceGrid onBookService={handleServiceBook} />
        </section>

        {/* Call to Action */}
        <section className="px-4 py-8">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 text-center">
            <h3 className="text-xl font-serif font-bold mb-2">Ready for Your Transformation?</h3>
            <p className="text-muted-foreground mb-4">Book your appointment today and experience luxury beauty care.</p>
            <Button size="lg" onClick={handleBookNow} data-testid="button-cta-book">
              Book Your Appointment
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}