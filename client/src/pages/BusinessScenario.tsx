import Header from "@/components/Header";
import { Target, Lightbulb } from "lucide-react";
import heroImage from "@assets/SME PURCH 1_1763876386191.jpg";

export default function BusinessScenario() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          data-testid="img-hero-background"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/60" />
        
        <div className="relative z-10 w-full px-6 md:px-12 text-center">
          <div className="max-w-4xl mx-auto text-primary-foreground">
            <h1 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ textShadow: 'none' }}
              data-testid="text-hero-title"
            >
              Case Study: From Senior Manager to Business Owner
            </h1>
            <p 
              className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto"
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
                  className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
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

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-card p-8 md:p-12 rounded-lg border border-border">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 
                  className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
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
                  <p className="font-semibold text-primary-foreground mb-3">• Mitigating the Experience Gap:</p>
                  <p className="pl-6">
                    We didn't just present him as an employee. We built a strong case highlighting his senior management experience, which included oversight of director reports, managing large budgets, and accountability for KPIs. We successfully demonstrated that these skills made him ideally suited to take over the director-level duties and work cohesively with the workshop's existing operations manager.
                  </p>
                </div>
                
                <div data-testid="text-solution-assessment">
                  <p className="font-semibold text-primary-foreground mb-3">• Detailed Business Assessment:</p>
                  <p className="pl-6">
                    We thoroughly assessed the workshop's financials, supply chains, product demand, and key accounts to prove its viability.
                  </p>
                </div>
                
                <div data-testid="text-solution-funding">
                  <p className="font-semibold text-primary-foreground mb-3">• A Multi-Layered Funding Structure:</p>
                  <p className="pl-6 mb-3">
                    We overlaid the applicant's proven experience onto the business's solid structure. With this strong foundation, we structured the finance package by drawing from multiple sources to finalise the full amount:
                  </p>
                  <div className="pl-6 space-y-2">
                    <p>
                      <span className="font-semibold text-primary-foreground">- Property Equity:</span> We accessed equity from the applicant's existing properties.
                    </p>
                    <p>
                      <span className="font-semibold text-primary-foreground">- Cash Contribution:</span> We factored in the applicant's own cash contribution.
                    </p>
                    <p>
                      <span className="font-semibold text-primary-foreground">- Business Assets:</span> We secured the final portion of the loan via a charge over the high-value vehicles and equipment within the engineering business itself.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
