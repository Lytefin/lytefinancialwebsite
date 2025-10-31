import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import heroImage from "@assets/generated_images/Engineering_workshop_manufacturing_facility_c59a6e79.png";

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
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
        <h1 
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          data-testid="text-hero-title"
        >
          Case Study: From Senior Manager to Business Owner
        </h1>
        <p 
          className="text-lg md:text-xl leading-relaxed max-w-4xl"
          data-testid="text-hero-subtitle"
        >
          Transitioning from a salaried employee to a business owner is one of the biggest financial steps a person can take. This case study shows how we helped a client leverage their experience, not just their assets, to acquire their first business.
        </p>
      </div>
    </section>
  );
}
