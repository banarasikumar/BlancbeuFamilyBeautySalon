import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Luxury_salon_interior_hero_7aea5d7f.png";

interface HeroSectionProps {
  onBookNow?: () => void;
}

export default function HeroSection({ onBookNow }: HeroSectionProps) {
  const handleBookNow = () => {
    console.log("Book Now clicked");
    onBookNow?.();
  };

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden rounded-lg card-3d">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform hover:scale-105 duration-700"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      
      <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
        <div className="space-y-4 slide-in-up">
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Welcome to <span className="text-primary-foreground">Blancbeu</span>
          </h1>
          <p className="text-lg text-white/90 max-w-md">
            Experience premium beauty services in our modern, luxurious salon designed for the next generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button 
              onClick={handleBookNow}
              size="lg"
              className="bg-primary/90 backdrop-blur-sm text-primary-foreground"
              data-testid="button-book-now"
            >
              Book Appointment
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30"
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}