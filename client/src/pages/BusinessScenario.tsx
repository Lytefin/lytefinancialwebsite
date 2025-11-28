import Header from "@/components/Header";
import { Target, Lightbulb, TrendingUp, ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import logoImage from "@assets/amended final logo_1763958071951.jpg";
import heroImage from "@assets/stock_images/confident_business_o_c5d38aa9.jpg";
import constructionImage from '@assets/stock_images/construction_site_wo_d72f9b16.jpg';
import meetingImage from '@assets/stock_images/professional_busines_2ec02d93.jpg';

export default function BusinessScenario() {
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
        
        <div className="absolute inset-0 bg-primary/70" />
        
        <div className="relative z-10 w-full px-6 md:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white"
              style={{ textShadow: 'none' }}
              data-testid="text-hero-title"
            >
              Case Study: From Senior Manager to Business Owner
            </h1>
            <p 
              className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto text-white"
              data-testid="text-hero-description"
            >
              Transitioning from a salaried employee to a business owner is one of the biggest financial steps a person can take. This case study shows how we helped a client leverage their experience, not just their assets, to acquire their first business.
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
            
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p data-testid="text-goal-description-1">
                A client with a successful, long-term career in senior management approached us. He had identified a prime opportunity to purchase an engineering workshop, but he had never been self-employed.
              </p>
              
              <p data-testid="text-goal-description-2">
                The target business was an attractive investment because it was already operating effectively under management, with key personnel, established contracts, and a solid daily operational structure.
              </p>
              
              <p data-testid="text-goal-description-3">
                The client's goal was to secure the funding needed to acquire the business and make the leap from employee to full-time owner-operator. The challenge was proving his suitability to the lender, given his lack of direct business ownership experience.
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
            
            <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p data-testid="text-solution-intro">
                Our solution focused on demonstrating that the client's corporate skills were directly transferable and mitigated the "first-time buyer" risk.
              </p>
              
              <div className="space-y-6">
                <div data-testid="text-solution-gap">
                  <p className="font-semibold text-primary mb-3">• Mitigating the Experience Gap:</p>
                  <p className="pl-6">
                    We didn't just present him as an employee. We built a strong case highlighting his senior management experience, which included oversight of director reports, managing large budgets, and accountability for KPIs. We successfully demonstrated that these skills made him ideally suited to take over the director-level duties and work cohesively with the workshop's existing operations manager.
                  </p>
                </div>
                
                <div data-testid="text-solution-assessment">
                  <p className="font-semibold text-primary mb-3">• Detailed Business Assessment:</p>
                  <p className="pl-6">
                    We thoroughly assessed the workshop's financials, supply chains, product demand, and key accounts to prove its viability.
                  </p>
                </div>
                
                <div data-testid="text-solution-funding">
                  <p className="font-semibold text-primary mb-3">• A Multi-Layered Funding Structure:</p>
                  <p className="pl-6 mb-3">
                    We overlaid the applicant's proven experience onto the business's solid structure. With this strong foundation, we structured the finance package by drawing from multiple sources to finalise the full amount:
                  </p>
                  <div className="pl-6 space-y-2">
                    <p>
                      <span className="font-semibold text-primary">- Property Equity:</span> We accessed equity from the applicant's existing properties.
                    </p>
                    <p>
                      <span className="font-semibold text-primary">- Cash Contribution:</span> We factored in the applicant's own cash contribution.
                    </p>
                    <p>
                      <span className="font-semibold text-primary">- Business Assets:</span> We secured the final portion of the loan via a charge over the high-value vehicles and equipment within the engineering business itself.
                    </p>
                  </div>
                </div>
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
                A comprehensive strategy that allowed the client to confidently step into business ownership:
              </p>
              
              <ul className="space-y-4 pl-6">
                <li data-testid="text-outcome-1">
                  <span className="font-semibold text-primary">Successful Business Acquisition:</span> The client secured full funding for the purchase of the engineering workshop, allowing him to transition from salaried employment into ownership with confidence.
                </li>
                <li data-testid="text-outcome-2">
                  <span className="font-semibold text-primary">Strong Lender Support Despite No Prior Ownership Experience:</span> By demonstrating the transferability of his senior management expertise, we obtained lender approval even though this was his first business purchase—a common barrier for many corporate professionals entering self-employment.
                </li>
                <li data-testid="text-outcome-3">
                  <span className="font-semibold text-primary">Balanced, Low-Risk Funding Structure:</span> The blended funding strategy—utilising property equity, personal cash contribution, and a charge over business assets—reduced financial pressure and ensured the loan structure matched the stability of the business.
                </li>
                <li data-testid="text-outcome-4">
                  <span className="font-semibold text-primary">A Seamless Transition Into Ownership:</span> Because the workshop was already operating under management with established staff, systems, and contracts, the client was able to step into the director role smoothly and begin overseeing operations without disrupting the business.
                </li>
                <li data-testid="text-outcome-5">
                  <span className="font-semibold text-primary">Long-Term Growth Platform:</span> With a stable operation in place, strong cash flow, and manageable gearing, the client is now well-positioned to drive future expansion, enhance profitability, and build long-term wealth through business ownership.
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
              Our structured approach to business acquisition finance
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
                    Initial Consultation & Opportunity Assessment
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Comprehensive discussion with the client to understand their background, experience, and the target business opportunity. Assessment of how their skills and experience align with the business they wish to acquire, and identification of potential funding sources.
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
                    Business Viability & Due Diligence
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Thorough assessment of the target business including financials, supply chains, customer contracts, key personnel, and operational structure. This analysis forms the foundation for demonstrating business viability to lenders and identifying security options.
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
                    Funding Structure Design
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Development of a multi-layered funding structure combining property equity, cash contributions, and charges over business assets. This step involves identifying the optimal mix of funding sources to meet the full acquisition price while managing risk for both client and lender.
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
                    Application & Experience Case Building
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Preparation of a compelling application that highlights the client's transferable skills and experience. Building a strong case demonstrating how senior management experience, budget oversight, and KPI accountability directly translate to business ownership capability.
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
                    Approval, Settlement & Ownership Transition
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Management of the approval process through to settlement. Coordination with solicitors, accountants, and the vendor to ensure a smooth ownership transition. Establishing security charges over business assets and finalising all documentation for the client to take control of their new business.
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
          style={{ backgroundImage: `url(${meetingImage})` }}
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <Button 
            onClick={() => window.open('https://calendly.com/tony-lytefinancial/30min?month=2025-11', '_blank')}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg md:text-xl px-8 py-6 h-auto font-semibold shadow-lg"
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
                    data-testid="button-book-meeting"
                  >
                    Book A Meeting
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-6 pt-6 px-6 md:px-12 pb-6">
            <p className="text-xs text-primary-foreground/80 leading-relaxed">
              The information on this website is provided for general information and illustrative purposes only. Although we take care to ensure the accuracy of the content, it should not be relied upon as personal or financial advice. You should undertake your own research or seek professional guidance to confirm the relevance of any information to your individual circumstances. All lending is subject to lender terms, conditions, fees, charges, and standard credit criteria. Interest rates and product features may change without notice.
            </p>
            <p className="text-xs text-primary-foreground/80 leading-relaxed mt-3">
              Your broker may provide an indication of lender approval timeframes and highlight options that could offer faster processing; however, these timeframes can vary based on the complexity of your application and how quickly required documents are supplied. In some situations, brokerage fees may apply—your broker will advise you if this is the case.
            </p>
            <p className="text-xs text-primary-foreground/80 leading-relaxed mt-3">
              Not all lenders are available through all brokers. Details of the lenders accessible to your broker are outlined in the Credit Guide provided when credit assistance is offered and are also available upon request.
            </p>
            <p className="text-xs text-primary-foreground/80 leading-relaxed mt-3">
              Your broker will generally communicate with you via email, along with other methods as needed. You may opt out of ongoing communications at any time.
            </p>
            <p className="text-xs text-primary-foreground font-bold leading-relaxed mt-4">
              TLY Finance Group Pty Ltd T/as Lyte Financial is a Credit Representative (557263) of Finsure Finance and Insurance Pty Ltd, Australian Credit Licence (384704).
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
