import { Button } from "@/components/ui/button";
import { Building2, Calendar } from "lucide-react";

interface CTASectionProps {
  onBookConsultation?: () => void;
}

export default function CTASection({ onBookConsultation }: CTASectionProps) {
  const handleBooking = () => {
    console.log('Booking consultation');
    onBookConsultation?.();
  };

  return (
    <section className="py-20 md:py-28 bg-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <Building2 className="h-16 w-16 text-primary" data-testid="icon-lyte-logo" />
        </div>
        
        <h2 
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6"
          data-testid="text-cta-title"
        >
          Ready to Take the Next Step?
        </h2>
        
        <p 
          className="text-primary/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          data-testid="text-cta-subtitle"
        >
          Let's discuss how Lyte can support your business growth through tailored finance solutions.
        </p>
        
        <Button 
          size="lg"
          onClick={handleBooking}
          className="bg-primary text-primary-foreground hover-elevate active-elevate-2 font-medium text-base px-8"
          data-testid="button-book-consultation"
        >
          <Calendar className="mr-2 h-5 w-5" />
          Book a Consultation
        </Button>
      </div>
    </section>
  );
}
