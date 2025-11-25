import Header from "@/components/Header";
import { Target, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import heroImage from "@assets/generated_images/Engineering_workshop_manufacturing_facility_c59a6e79.png";
import constructionImage from '@assets/stock_images/construction_site_wo_d72f9b16.jpg';

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
        <div className="max-w-6xl mx-auto px-6 md:px-12">
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

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <Button 
            onClick={() => setLocation('/#booking')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg md:text-xl px-8 py-6 h-auto"
            data-testid="button-book-meeting"
          >
            Book Your Solutions Meeting Here
          </Button>
        </div>
      </section>
    </div>
  );
}
