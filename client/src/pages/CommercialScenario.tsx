import Header from "@/components/Header";
import { Target, Lightbulb, ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Industrial_shed_warehouse_building_df010581.png";

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
        
        <div className="absolute inset-0 bg-primary" />
        
        <div className="relative z-10 w-full px-6 md:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white"
              style={{ textShadow: 'none' }}
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
            
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
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

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-card p-8 md:p-12 rounded-lg border border-border">
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
                Our expertise was in guiding the clients on the right structure before the finance was even discussed. We collaborated closely with their accountant to develop a solution.
              </p>
              
              <div data-testid="text-solution-answer">
                <p className="font-semibold text-primary mb-3">The Answer: A Unit Trust</p>
                <p className="pl-6 mb-4">
                  This is how we implemented it:
                </p>
                <ul className="pl-6 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary">Establishment of a Unit Trust:</span>
                    <span>A new Unit Trust was established specifically for the purpose of holding the asset.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary">SMSF Investment:</span>
                    <span>The two business partners' individual SMSFs each invested in the trust, acquiring an equal share of the units.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary">The Purchase:</span>
                    <span>This Unit Trust (now funded by the two SMSFs) became the legal purchasing entity that acquired the new commercial property.</span>
                  </li>
                </ul>
              </div>
              
              <p data-testid="text-solution-outcome">
                With this compliant and clear structure in place, we were able to facilitate the lending required for the Unit Trust to complete the transaction.
              </p>
            </div>
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
                  data-testid="text-outcome-title"
                >
                  The Tangible Outcome
                </h2>
              </div>
            </div>
            
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p data-testid="text-outcome-intro">
                This strategy successfully aligned the partners' business and personal wealth goals:
              </p>
              
              <ul className="space-y-3 pl-6">
                <li data-testid="text-outcome-1">
                  <span className="font-semibold text-primary">Super-Funded Acquisition:</span> The partners successfully used their superannuation funds to purchase their business premises, a move that would have been blocked without the correct structure.
                </li>
                <li data-testid="text-outcome-2">
                  <span className="font-semibold text-primary">Long-Term Business Stability:</span> Their operating business is now secure in its own premises, insulating it from rent increases and providing a stable platform for the future.
                </li>
                <li data-testid="text-outcome-3">
                  <span className="font-semibold text-primary">A Valuable Growth Asset:</span> Both partners' SMSFs now hold a significant and valuable commercial property, diversifying their retirement savings and positioning them for long-term capital growth.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
              data-testid="text-process-title"
            >
              Five-Stage Process Map
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Our structured approach to commercial property and SMSF lending
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
                    Initial Consultation & Structure Analysis
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Comprehensive assessment of the clients' business structure, SMSF positions, and property acquisition goals. Identification of potential structural challenges and collaboration with accountants and legal advisors to determine the optimal ownership structure.
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
                    Unit Trust Establishment & SMSF Compliance
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Coordination with legal professionals to establish the Unit Trust structure. Ensuring each SMSF's investment in the trust complies with superannuation regulations and that the trust deed allows for the intended property purchase and lease arrangements.
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
                    Finance Strategy & Lender Selection
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Development of the financing strategy for the Unit Trust. Identification of lenders experienced with SMSF and Unit Trust structures, preparing a comprehensive application that demonstrates the viability of the purchase and the strength of the business tenancy.
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
                    Application Processing & Approval
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Submission and management of the loan application through to approval. Coordination of property valuations, satisfaction of lender conditions, and ensuring all SMSF compliance documentation is in order for the transaction.
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
                    Settlement & Lease Execution
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Finalisation of settlement with all parties including solicitors, lenders, and SMSF administrators. Execution of the commercial lease between the Unit Trust (as landlord) and the operating business (as tenant) at market rates, completing the structure and enabling ongoing compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
