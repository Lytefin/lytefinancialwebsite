import Header from "@/components/Header";
import { Target, Lightbulb, MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/image_1764037219843.png";
import constructionImage from '@assets/stock_images/construction_site_wo_d72f9b16.jpg';
import logoImage from "@assets/amended final logo_1763958071951.jpg";

export default function SMSFScenario() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          data-testid="img-hero-background"
        />
        
        <div className="absolute inset-0 bg-primary/70" />
        
        <div className="relative z-10 w-full px-6 md:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white"
              data-testid="text-hero-title"
            >
              Case Study: The Smart Structure for Business Partners & SMSF Property
            </h1>
            <p 
              className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto text-white"
              data-testid="text-hero-description"
            >
              Using your super to invest in property is a powerful wealth-building strategy, but it can be complex, especially for partners. This case study illustrates how we helped two business partners use their separate super funds to acquire their new business premises together.
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
                  data-testid="text-goal-title"
                >
                  The Client's Goal
                </h2>
              </div>
            </div>
            
            <div className="space-y-4 text-primary text-base md:text-lg leading-relaxed">
              <p data-testid="text-goal-description-1">
                Two business partners, who run a highly successful company, identified an ideal commercial property to purchase and operate their business from.
              </p>
              
              <p data-testid="text-goal-description-2">
                Their primary goal was not to use their personal or business cash flow for the purchase. Instead, they wanted to leverage their individual Self-Managed Super Funds (SMSFs) to acquire the asset. This presented a significant structural challenge: how can two separate SMSFs legally and effectively co-purchase a single property?
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
                  Our Strategic Solution
                </h2>
              </div>
            </div>
            
            <div className="space-y-6 text-primary text-base md:text-lg leading-relaxed">
              <p data-testid="text-solution-intro">
                Our expertise was in guiding the clients on the right structure before the finance was even discussed. We collaborated closely with their accountant to develop a solution.
              </p>
              
              <p className="font-semibold text-primary" data-testid="text-solution-answer">
                The answer was a Unit Trust. This is how we implemented it:
              </p>
              
              <ul className="space-y-4 pl-6">
                <li className="flex gap-3" data-testid="text-solution-step-1">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span><strong className="text-primary">Establishment of a Unit Trust:</strong> A new Unit Trust was established specifically for the purpose of holding the asset.</span>
                </li>
                
                <li className="flex gap-3" data-testid="text-solution-step-2">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span><strong className="text-primary">SMSF Investment:</strong> The two business partners' individual SMSFs each invested in the trust, acquiring an equal share of the units.</span>
                </li>
                
                <li className="flex gap-3" data-testid="text-solution-step-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span><strong className="text-primary">The Purchase:</strong> This Unit Trust (now funded by the two SMSFs) became the legal purchasing entity that acquired the new commercial property.</span>
                </li>
              </ul>
              
              <p className="pt-4" data-testid="text-solution-conclusion">
                With this compliant and clear structure in place, we were able to facilitate the lending required for the Unit Trust to complete the transaction.
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
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
              data-testid="text-process-title"
            >
              Five-Stage Process Map
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Our structured approach to SMSF property lending
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
                    Assessment & Initial Documentation
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Determine the SMSF's borrowing capacity based on current assets, contributions, and anticipated rental income. Gather essential documents including the SMSF Trust Deed, financial statements, member statements, and trustee identification.
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
                    Strategy & Structuring
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Review available deposits and explore alternative equity options. Assess strategic on-lending opportunities from member funds. Engage accountants and solicitors to establish the correct Bare Trust structure and ensure SMSF Trust Deed permits borrowing.
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
                    Application Submission
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Select the optimal lender based on property type, loan-to-value ratio, and interest rate requirements. Compile the comprehensive loan application package including all financial, trust, and property documentation for formal submission.
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
                    Execution & Settlement
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Manage the application through to settlement, responding promptly to lender queries. Ensure all Bare Trust Deed and loan agreements comply with SIS legislation. Coordinate with client, solicitor, and lender for smooth settlement and loan drawdown.
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
                    Post-Settlement & Growth Strategy
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Conduct post-settlement review to confirm all compliance requirements are met. Provide ongoing strategies for SMSF growth including loan structure reviews, contribution optimization, and property performance assessment.
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
                <span>526/368 Sussex Street, Sydney, NSW, 2000</span>
              </div>
              
              <div className="flex flex-col items-center md:items-start gap-1">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>(02) 9099 3613</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>admin@lytefinancial.com.au</span>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <div className="text-center md:text-left">
                  <p><span className="text-primary-foreground/80">Mon - Fri:</span> 8:00 AM - 6:00 PM</p>
                  <p><span className="text-primary-foreground/80">Sat:</span> 8:00 AM - 11:00 AM</p>
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
