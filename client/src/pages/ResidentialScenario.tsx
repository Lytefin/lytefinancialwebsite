import Header from "@/components/Header";
import { Target, Lightbulb, ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import heroImage from "@assets/image_1763875547582.png";
import constructionImage from '@assets/stock_images/construction_site_wo_d72f9b16.jpg';
import logoImage from "@assets/amended final logo_1763958071951.jpg";

export default function ResidentialScenario() {
  const [, setLocation] = useLocation();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          data-testid="img-hero-background"
        />
        
        <div className="absolute inset-0 bg-primary" />
        
        <div className="relative z-10 w-full px-6 md:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white"
              style={{ textShadow: 'none' }}
              data-testid="text-hero-title"
            >
              Purchasing a New Property While Holding Your Existing Home (Bridging Finance)
            </h1>
            <p 
              className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto text-white"
              data-testid="text-hero-description"
            >
              Real-world example of how we helped clients purchase their dream home without the stress of selling first
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-card p-8 md:p-12 rounded-lg border border-border">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 
                  className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6"
                  data-testid="text-challenge-title"
                >
                  The Challenge
                </h2>
              </div>
            </div>
            
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p data-testid="text-challenge-profile">
                <span className="font-semibold text-primary">Client Profile:</span> A couple looking to purchase a new occupied property.
              </p>
              
              <p data-testid="text-challenge-problem">
                <span className="font-semibold text-primary">The Problem:</span> They were concerned about being excluded from the market by selling their existing property first and then purchasing a new property. Given the upwardly moving market, they did not want to sell and be stuck renting, potentially missing out on desirable properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${constructionImage})` }}
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-card/95 p-8 md:p-12 rounded-lg border border-border backdrop-blur-sm">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 
                  className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6"
                  data-testid="text-solution-title"
                >
                  Our Solution
                </h2>
              </div>
            </div>
            
            <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              <div data-testid="text-solution-strategy">
                <p className="font-semibold text-primary mb-3">The Strategy:</p>
                <p className="pl-6">
                  We assisted the clients in securing a solution that allowed them to hold both properties for a period of six months.
                </p>
              </div>
              
              <div data-testid="text-solution-mechanism">
                <p className="font-semibold text-primary mb-3">The Mechanism:</p>
                <p className="pl-6">
                  This was achieved via a Bridging Finance Facility. The lender was able to advance the funds for the new purchase based on peak debt and equity levels.
                </p>
              </div>
              
              <div data-testid="text-solution-outcome">
                <p className="font-semibold text-primary mb-3">The Outcome:</p>
                <p className="pl-6">
                  This solution provided the clients with the flexibility to get into their new home first and sufficient time (up to 6 months) to sell their existing property without market pressure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
              data-testid="text-process-title"
            >
              Five-Stage Process Map
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Our structured approach to bridging finance
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-card p-6 md:p-8 rounded-lg border border-border" data-testid="card-step-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2">
                    Initial Contact & Needs Analysis
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Initial in-depth conversation with the client to understand their specific purchasing goals, current financial position, and concerns regarding market timing and selling the existing property.
                  </p>
                </div>
              </div>
              <div className="flex justify-center my-2">
                <ArrowRight className="h-6 w-6 text-primary rotate-90" />
              </div>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-lg border border-border" data-testid="card-step-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2">
                    Documentation & Strategy Formulation
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Collection of all necessary financial documentation. This step involves calculating the Peak Debt required for the new purchase and determining the equity available in the existing property to structure the bridging finance proposal.
                  </p>
                </div>
              </div>
              <div className="flex justify-center my-2">
                <ArrowRight className="h-6 w-6 text-primary rotate-90" />
              </div>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-lg border border-border" data-testid="card-step-3">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2">
                    Application Finalisation & Policy Check
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Finalisation of the application, including the proposed sale date of the existing property. Identification and adherence to specific lender credit policies required for bridging finance facilities (e.g., acceptable LVRs, interest-only period, and maximum bridging term).
                  </p>
                </div>
              </div>
              <div className="flex justify-center my-2">
                <ArrowRight className="h-6 w-6 text-primary rotate-90" />
              </div>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-lg border border-border" data-testid="card-step-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2">
                    Approval & Stakeholder Management
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Submission and approval of the new application through the lender. Continuous engagement with key stakeholders (lender, valuer) to ensure the bridging finance approval is secured and all conditions are met promptly.
                  </p>
                </div>
              </div>
              <div className="flex justify-center my-2">
                <ArrowRight className="h-6 w-6 text-primary rotate-90" />
              </div>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-lg border border-border" data-testid="card-step-5">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2">
                    Settlement & Bridge-to-Sale Process
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Processing from approval to settlement. Ensuring all legal and lender documents are correct. Coordinating with solicitors and the existing lender to meet the settlement date for the new purchase, and setting a clear path for the subsequent sale of the existing property.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${constructionImage})` }}
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <Button 
            onClick={() => window.open('https://calendly.com/tony-lytefinancial/30min?month=2025-11', '_blank')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg md:text-xl px-8 py-6 h-auto"
            data-testid="button-book-meeting"
          >
            Book Your Solutions Meeting Here
          </Button>
        </div>
      </section>

      <footer className="bg-primary py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img 
                src={logoImage} 
                alt="Lyte Financial" 
                className="h-12 w-auto"
                data-testid="img-footer-logo"
              />
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-primary-foreground text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>3/26/848 Sussex St, Sydney, NSW 2000</span>
              </div>
              
              <div className="flex flex-col items-center md:items-start gap-1">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>0290 993 613</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>admin@lytefinancial.com.au</span>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <div className="text-center md:text-left">
                  <p><span className="text-primary-foreground/80">Mon - Fri:</span> 8:00 AM - 5:00 PM</p>
                  <p><span className="text-primary-foreground/80">Sat:</span> 8:00 AM - 8:00 PM</p>
                  <p><span className="text-primary-foreground/80">Sun:</span> Closed</p>
                </div>
              </div>
            </div>
            
            <Button 
              variant="outline"
              onClick={() => window.open('https://calendly.com/tony-lytefinancial/30min?month=2025-11', '_blank')}
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              data-testid="button-schedule-meeting"
            >
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
