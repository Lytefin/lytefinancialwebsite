import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { FileText, ListChecks } from "lucide-react";
import residentialBanner from "@assets/stock_images/modern_family_home_e_b74a1654.jpg";

export default function ResidentialLending() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section 
        className="relative py-24 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${residentialBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <h1 
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
              data-testid="text-title"
            >
              Residential Lending
            </h1>
            <p 
              className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto"
              data-testid="text-description"
            >
              Tailored home loan solutions for owner-occupied and investment properties
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-5xl mx-auto px-6 md:px-12">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <Card 
              className="p-10 bg-primary hover-elevate active-elevate-2 cursor-pointer" 
              onClick={() => setLocation('/scenarios/residential')}
              data-testid="card-example"
            >
              <div className="flex justify-center mb-6">
                <div className="h-20 w-20 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <FileText className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>
              <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-4 text-center">
                Real World Lyte Financial Client Example
              </h2>
              <p className="text-primary-foreground text-base leading-relaxed text-center">
                Discover how we helped clients achieve their residential property goals
              </p>
            </Card>

            <Card 
              className="p-10 bg-primary hover-elevate active-elevate-2 cursor-pointer" 
              onClick={() => setLocation('/residential-process')}
              data-testid="card-process"
            >
              <div className="flex justify-center mb-6">
                <div className="h-20 w-20 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <ListChecks className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>
              <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-4 text-center">
                The Process
              </h2>
              <p className="text-primary-foreground text-base leading-relaxed text-center">
                Learn about our residential lending process from consultation to settlement
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
