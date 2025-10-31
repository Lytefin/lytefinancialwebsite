import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_business_consultation_office_scene_f277bec6.png";

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const handleScrollToFlowChart = () => {
    const flowChartElement = document.getElementById('flow-chart');
    if (flowChartElement) {
      flowChartElement.scrollIntoView({ behavior: 'smooth' });
    }
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
        <p 
          className="text-lg md:text-xl mb-8 text-white/95 max-w-3xl mx-auto leading-relaxed"
          data-testid="text-hero-subtitle"
        >
          From purchasing a business to securing an owner-occupied commercial premises, Lyte has the expertise to deliver.
        </p>
        
        <Button 
          size="lg"
          onClick={handleScrollToFlowChart}
          className="bg-primary-foreground text-primary hover-elevate active-elevate-2 font-medium text-base px-8"
          data-testid="button-start-journey"
        >
          Start Your Funding Journey
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
