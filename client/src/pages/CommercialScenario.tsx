import Header from "@/components/Header";
import { Target, Lightbulb, TrendingUp, ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Industrial_shed_warehouse_building_df010581.png";
import constructionImage from '@assets/stock_images/construction_site_wo_d72f9b16.jpg';
import logoImage from "@assets/amended final logo_1763958071951.jpg";

export default function CommercialScenario() {
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
              style={{ textShadow: 'none' }}
              data-testid="text-hero-title"
            >
              90% LVR Commercial Property Finance: Securing an Own-Occupied Premises While Retaining Working Capital
            </h1>
            <p 
              className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto text-white"
              data-testid="text-hero-description"
            >
              How we helped a business owner purchase their own commercial property with minimal deposit while preserving vital cash flow
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
                  The Client's Goal & Challenge
                </h2>
              </div>
            </div>
            
            <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              <div data-testid="text-client-status">
                <p className="font-semibold text-primary mb-2">Client Status:</p>
                <p className="pl-6">
                  A business owner operating out of a rented factory, currently paying $129,000 per annum in rent.
                </p>
              </div>
              
              <div data-testid="text-goal">
                <p className="font-semibold text-primary mb-2">The Goal:</p>
                <p className="pl-6">
                  To purchase a new, own-occupied commercial property to secure premises and build equity. The aim was to move from being a renter to an owner/landlord of his own business premises.
                </p>
              </div>
              
              <div data-testid="text-challenge">
                <p className="font-semibold text-primary mb-2">The Challenge:</p>
                <p className="pl-6">
                  Limited cash deposit available due to critical working capital requirements within the existing business. The client needed a high Loan-to-Value Ratio (LVR), which is typically difficult to secure for commercial property purchases.
                </p>
              </div>
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
            
            <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              <div data-testid="text-market-review">
                <p className="font-semibold text-primary mb-2">Market Review:</p>
                <p className="pl-6">
                  We conducted an extensive review of the commercial lending market to identify lenders with appetite for higher LVR commercial deals.
                </p>
              </div>
              
              <div data-testid="text-key-win">
                <p className="font-semibold text-primary mb-2">The Key Win:</p>
                <p className="pl-6">
                  We were able to source a specialist commercial lender willing to approve a 90% Loan-to-Value Ratio (LVR) for the property purchase - a significant achievement in the commercial lending space.
                </p>
              </div>
              
              <div data-testid="text-rate-structure">
                <p className="font-semibold text-primary mb-2">Rate Structure:</p>
                <p className="pl-6">
                  The interest rate was within the same range as standard commercial lending, with only a small, manageable premium paid for the higher LVR.
                </p>
              </div>
              
              <div data-testid="text-structure">
                <p className="font-semibold text-primary mb-2">The Structure:</p>
                <ul className="pl-6 space-y-3 mt-2">
                  <li>
                    <span className="font-semibold text-primary">Establishment of a New SPV:</span> A new Special Purpose Vehicle (Company) was set up specifically to purchase and hold the commercial property.
                  </li>
                  <li>
                    <span className="font-semibold text-primary">Leaseback Arrangement:</span> The client's existing business was then able to lease the property back from the new SPV and pay rent to its own company.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-card p-8 md:p-12 rounded-lg border border-border">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 
                  className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6"
                  data-testid="text-outcome-title"
                >
                  The Positive Outcome
                </h2>
              </div>
            </div>
            
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p className="font-medium text-primary" data-testid="text-outcome-intro">
                A strategic win that delivered long-term stability and cash flow control:
              </p>
              
              <ul className="space-y-4 pl-6">
                <li data-testid="text-outcome-1">
                  <span className="font-semibold text-primary">Property Acquisition:</span> The client successfully purchased his new own-occupied commercial property.
                </li>
                <li data-testid="text-outcome-2">
                  <span className="font-semibold text-primary">Cash Flow Retention:</span> The high-LVR finance strategy allowed the client to retain the vital cash flow (working capital) needed for daily business operations and growth.
                </li>
                <li data-testid="text-outcome-3">
                  <span className="font-semibold text-primary">Future Foundation:</span> The client is now building equity in an asset, has stabilized his premises costs, and has a foundation for his next stage of growth.
                </li>
                <li data-testid="text-outcome-4">
                  <span className="font-semibold text-primary">Ongoing Partnership:</span> We continue to assist the client by mapping out his future finance requirements as the business grows.
                </li>
              </ul>
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
              Our structured approach to high-LVR commercial property finance
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
                    Initial Consultation & Needs Analysis
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Comprehensive assessment of the client's current situation including rental costs, business cash flow requirements, and property goals. Understanding the critical need to preserve working capital while achieving property ownership.
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
                    Market Research & Lender Identification
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Extensive review of the commercial lending market to identify specialist lenders with appetite for higher LVR deals. Analysis of rate structures, terms, and conditions to find the optimal solution that balances LVR requirements with competitive pricing.
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
                    Structure Design & SPV Establishment
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Development of the optimal ownership structure including establishment of a Special Purpose Vehicle (SPV) company to hold the property. Coordination with accountants and legal advisors to ensure the structure supports both the finance requirements and future business goals.
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
                    Application & Approval Management
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Preparation and submission of the finance application to the specialist lender. Management of the approval process including property valuations, business financials review, and satisfaction of all lender conditions for the 90% LVR facility.
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
                    Settlement & Leaseback Execution
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Finalisation of settlement coordinating with solicitors, lenders, and all parties. Execution of the leaseback arrangement between the new SPV (as landlord) and the operating business (as tenant), ensuring ongoing compliance and establishing the foundation for future growth planning.
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
