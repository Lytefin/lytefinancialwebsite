import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Building2, Users, TrendingUp, FileText, Home as HomeIcon } from "lucide-react";
import heroImage from "@assets/generated_images/Isometric_business_technology_illustration_63b34037.png";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative h-[60vh] min-h-[425px] flex items-start justify-start overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          data-testid="img-hero-background"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/50" />
        
        <div className="relative z-10 w-full px-6 md:px-12 pt-16 md:pt-24">
          <div className="max-w-2xl text-primary-foreground">
            <h1 
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight whitespace-nowrap"
              data-testid="text-hero-title"
            >
              Simplifying the Complex
            </h1>
            <p 
              className="text-xl md:text-2xl font-medium tracking-wide"
              data-testid="text-hero-tagline"
            >
              identifying your next best move
            </p>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-16 md:pt-14 md:pb-24 bg-accent">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
              data-testid="text-services-title"
            >
              OUR REAL TIME CLIENT SOLUTIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Card 
              className="p-8 bg-primary hover-elevate active-elevate-2 cursor-pointer" 
              onClick={() => setLocation('/business-acquisition')}
              data-testid="card-service-1"
            >
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-4 text-center">
                Business Acquisition
              </h3>
              <p className="text-primary-foreground text-base leading-relaxed text-center">
                Secure funding to purchase your first business or expand your portfolio with expert guidance.
              </p>
            </Card>

            <Card className="p-8 bg-primary hover-elevate" data-testid="card-service-2">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <HomeIcon className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-4 text-center">
                Residential Lending
              </h3>
              <p className="text-primary-foreground text-base leading-relaxed text-center">
                Tailored home loan solutions for owner-occupied and investment properties with competitive rates.
              </p>
            </Card>

            <Card className="p-8 bg-primary hover-elevate" data-testid="card-service-3">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-4 text-center">
                Commercial Property
              </h3>
              <p className="text-primary-foreground text-base leading-relaxed text-center">
                Finance owner-occupied premises or investment properties with competitive rates and flexible terms.
              </p>
            </Card>

            <Card className="p-8 bg-primary hover-elevate" data-testid="card-service-4">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-4 text-center">
                SMSF Property
              </h3>
              <p className="text-primary-foreground text-base leading-relaxed text-center">
                Navigate complex SMSF structures to leverage your superannuation for property investment.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-primary/10 p-6 rounded-full">
              <FileText className="h-12 w-12 text-primary" />
            </div>
          </div>
          
          <h2 
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
            data-testid="text-scenarios-title"
          >
            Real Success Stories
          </h2>
          
          <p 
            className="text-primary-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            data-testid="text-scenarios-description"
          >
            Discover how we've helped clients achieve their business and property goals through innovative financing solutions.
          </p>
          
          <Button 
            size="lg"
            onClick={() => setLocation('/scenarios')}
            className="font-medium text-base px-8"
            data-testid="button-view-scenarios"
          >
            View Scenarios
          </Button>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-accent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
            data-testid="text-cta-title"
          >
            Ready to Start Your Journey?
          </h2>
          
          <p 
            className="text-primary-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            data-testid="text-cta-description"
          >
            Let's discuss how we can craft a bespoke financing solution for your business.
          </p>
          
          <Button 
            size="lg"
            onClick={() => setLocation('/contact')}
            className="font-medium text-base px-8"
            data-testid="button-contact-cta"
          >
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
}
