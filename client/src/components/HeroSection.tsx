import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import heroImage from "@assets/generated_images/Professional_business_consultation_office_scene_f277bec6.png";

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const [, setLocation] = useLocation();

  const handleStartJourney = () => {
    setLocation('/contact');
    onCtaClick?.();
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        data-testid="img-hero-background"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/50" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight"
          data-testid="text-hero-title"
        >
          From purchasing your first business to acquiring your next, Lyte has the expertise to deliver.
        </h1>
        
        <Button 
          size="lg"
          onClick={handleStartJourney}
          className="bg-primary-foreground text-primary hover-elevate active-elevate-2 font-medium text-base px-8"
          data-testid="button-start-journey"
        >
          Start Your Funding Journey
        </Button>
      </div>
    </section>
  );
}
