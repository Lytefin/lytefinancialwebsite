import { useState } from "react";
import Header from "@/components/Header";
import { Target, Lightbulb, TrendingUp, AlertTriangle, ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/image_1764036161490.png";
import constructionImage from '@assets/stock_images/construction_site_wo_d72f9b16.jpg';
import logoImage from "@assets/amended final logo_1763958071951.jpg";

type CaseStudyType = "bridging";

export default function ResidentialScenario() {
  const [activeCase, setActiveCase] = useState<CaseStudyType>("bridging");

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
              Residential Lending Case Studies
            </h1>
            <p 
              className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto text-white"
              data-testid="text-hero-description"
            >
              Real-world examples of how we help clients navigate complex residential lending scenarios with strategic solutions tailored to their unique circumstances.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2">
              Select a Case Study
            </h2>
            <p className="text-muted-foreground">
              Choose a scenario to learn more about our residential lending solutions
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Button
              onClick={() => setActiveCase("bridging")}
              className={`text-base md:text-lg px-6 py-6 h-auto transition-all ${
                activeCase === "bridging"
                  ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                  : "bg-card text-primary border-2 border-primary hover:bg-primary/10"
              }`}
              data-testid="button-case-bridging"
            >
              Buying Before Selling: A Strategic Bridging Finance Solution
            </Button>
          </div>
        </div>
      </section>

      {activeCase === "bridging" && (
        <>
          <section className="py-12 md:py-16 bg-accent">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
              <div className="text-center mb-8">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Case Study
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-3">
                  Purchasing a New Property While Holding Your Existing Home
                </h2>
                <p className="text-muted-foreground text-lg italic max-w-3xl mx-auto">
                  How we helped clients secure their dream home without the pressure of selling first
                </p>
              </div>
              
              <div className="bg-card p-8 md:p-12 rounded-lg border border-border mb-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 
                      className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6"
                      data-testid="text-goal-title"
                    >
                      The Client's Goal & Challenge
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <div>
                    <p className="font-semibold text-primary mb-2">Client Profile:</p>
                    <p className="pl-6">
                      A couple seeking to upgrade into their next owner-occupied home.
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-primary mb-2">The Problem:</p>
                    <p className="pl-6 mb-3">
                      The clients were concerned about being locked out of the market if they sold first. In a rising property market, selling before buying can create several risks:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Being forced to rent while searching for the right home</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Paying more if prices increase during the gap</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Losing negotiating power on their purchase</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Feeling pressured to buy a property quickly, even if it isn't ideal</span>
                      </li>
                    </ul>
                    <p className="pl-6 mt-4">
                      They wanted a solution that allowed them to <strong className="text-primary">secure their new home first</strong>, then sell their existing property without urgency.
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
                    <h3 
                      className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6"
                      data-testid="text-solution-title"
                    >
                      Our Strategic Solution
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-8 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <div data-testid="text-solution-step-1">
                    <p className="font-semibold text-primary mb-3">1. Designing a Dual-Property Holding Strategy</p>
                    <p className="pl-6">
                      We worked with the clients to develop a structure that allowed them to hold both properties simultaneously, giving them full flexibility during the transition period.
                    </p>
                  </div>
                  
                  <div data-testid="text-solution-step-2">
                    <p className="font-semibold text-primary mb-3">2. Utilising a Bridging Finance Facility</p>
                    <p className="pl-6 mb-3">
                      We implemented a bridging finance solution that enabled the lender to fund the new purchase upfront. The lender assessed:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span><strong className="text-primary">Peak Debt:</strong> The temporary combined debt on both properties</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span><strong className="text-primary">End Debt:</strong> The expected loan balance after the sale of the current property</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span><strong className="text-primary">Available Equity:</strong> To support the bridging structure</span>
                      </li>
                    </ul>
                    <p className="pl-6 mt-3">
                      This ensured the clients had access to the full funds required to secure their new home, without needing to sell their existing home first.
                    </p>
                  </div>
                  
                  <div data-testid="text-solution-step-3">
                    <p className="font-semibold text-primary mb-3">3. Structuring the Facility for Client Control</p>
                    <p className="pl-6 mb-3">
                      The bridging structure allowed for:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Interest-only repayments during the bridging period</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Up to <strong className="text-primary">twelve months</strong> to sell the existing home</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Flexibility to prepare, market, and sell at the best time</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>No pressure-driven decisions or rushed sales</span>
                      </li>
                    </ul>
                    <p className="pl-6 mt-3">
                      This approach enabled the clients to enter their new home immediately while maintaining financial stability.
                    </p>
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
                    <h3 
                      className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6"
                      data-testid="text-outcome-title"
                    >
                      The Positive Outcome
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <p className="font-medium text-primary" data-testid="text-outcome-intro">
                    A smooth, empowered transition into their new home:
                  </p>
                  
                  <ul className="space-y-4 pl-6">
                    <li data-testid="text-outcome-1">
                      <span className="font-semibold text-primary">Successful Purchase of Their New Home:</span> The clients secured their ideal home at the right time, without needing to wait for their existing property to sell.
                    </li>
                    <li data-testid="text-outcome-2">
                      <span className="font-semibold text-primary">No Forced Sale or Renting Period:</span> They avoided temporary accommodation, rushed deadlines, and the risks associated with selling in haste.
                    </li>
                    <li data-testid="text-outcome-3">
                      <span className="font-semibold text-primary">Twelve Months of Flexibility to Sell Strategically:</span> The bridging facility provided a generous window for preparing and listing the existing home, allowing them to sell under favourable market conditions.
                    </li>
                    <li data-testid="text-outcome-4">
                      <span className="font-semibold text-primary">A Stress-Free Transition Between Homes:</span> With the new home settled and a clear pathway to selling the existing property, the clients experienced a seamless changeover tailored to their needs.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

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
                <span>526/368 Sussex Street, Sydney, NSW, 2000</span>
              </div>
              
              <div className="flex flex-col items-center md:items-start gap-1">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>(02) 9099 3613</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>info@lytefinancial.com.au</span>
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
            
            <div className="flex flex-col items-center gap-2">
              <p className="font-semibold text-sm text-primary-foreground">Supporting Clients Australia Wide</p>
              <div className="flex gap-3">
                <a href="/contact">
                  <Button 
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    data-testid="button-enquire-now"
                  >
                    Enquire Now
                  </Button>
                </a>
                <a 
                  href="https://calendly.com/tony-lytefinancial/30min?month=2025-11" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    data-testid="button-book-meeting-footer"
                  >
                    Book A Meeting
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
