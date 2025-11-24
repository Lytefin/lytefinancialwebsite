import Header from "@/components/Header";
import { Target, Lightbulb, ArrowRight } from "lucide-react";
import heroImage from "@assets/image_1763875547582.png";

export default function SMSFResidentialScenario() {
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
              SMSF Residential Property Purchase
            </h1>
            <p 
              className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto"
              data-testid="text-hero-description"
            >
              Real-world example of how we helped clients leverage their SMSF to purchase residential investment property
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
                  data-testid="text-challenge-title"
                >
                  The Challenge
                </h2>
              </div>
            </div>
            
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p data-testid="text-challenge-profile">
                <span className="font-semibold text-primary-foreground">Client Profile:</span> A self-employed professional looking to build their retirement wealth through property investment.
              </p>
              
              <p data-testid="text-challenge-problem">
                <span className="font-semibold text-primary-foreground">The Problem:</span> They wanted to purchase a residential investment property but were concerned about using personal funds and the associated tax implications. They had substantial superannuation savings and wanted to explore using their SMSF to acquire the property, but were unsure of the compliance requirements and lending options available.
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
                  Our Solution
                </h2>
              </div>
            </div>
            
            <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              <div data-testid="text-solution-strategy">
                <p className="font-semibold text-primary-foreground mb-3">The Strategy:</p>
                <p className="pl-6">
                  We structured a compliant SMSF residential property purchase that met all regulatory requirements while maximizing the client's borrowing capacity through a Limited Recourse Borrowing Arrangement (LRBA).
                </p>
              </div>
              
              <div data-testid="text-solution-mechanism">
                <p className="font-semibold text-primary-foreground mb-3">The Mechanism:</p>
                <p className="pl-6">
                  We secured SMSF lending from a specialist lender who understood the unique requirements of SMSF property purchases. The loan was structured as an LRBA, ensuring the SMSF's other assets remained protected while allowing the fund to purchase the residential property.
                </p>
              </div>
              
              <div data-testid="text-solution-outcome">
                <p className="font-semibold text-primary-foreground mb-3">The Outcome:</p>
                <p className="pl-6">
                  The client successfully acquired a quality residential investment property through their SMSF. The rental income flows into the concessionally taxed superannuation environment, and the property serves as a long-term wealth-building asset for their retirement.
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
            <p className="text-primary-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Our structured approach to SMSF residential lending
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-card p-6 md:p-8 rounded-lg border border-border" data-testid="card-step-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                    SMSF Structure Review & Compliance Check
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Initial assessment of the client's SMSF structure, trust deed provisions, and compliance history. Verification that the fund meets the requirements for property investment and that trustees understand their obligations under an LRBA structure.
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
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                    Property Selection & Investment Strategy
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Guidance on selecting an appropriate residential property that meets the sole purpose test and fits within the fund's investment strategy. Ensuring the property type and intended use comply with SMSF regulations (must be rented to unrelated parties at market rates).
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
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                    LRBA Structure & Lender Matching
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Establishment of the Limited Recourse Borrowing Arrangement structure, including the bare trust (holding trust) that will hold the property during the loan term. Matching the client with specialist SMSF lenders who offer competitive rates and understand the regulatory framework.
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
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                    Application & Documentation
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Preparation and submission of the SMSF loan application with all required documentation including fund financials, trust deed, investment strategy, and property details. Coordination with the SMSF auditor and legal advisors to ensure all compliance requirements are met.
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
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                    Settlement & Ongoing Compliance
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Managing the settlement process ensuring all legal structures are correctly established and the property is acquired in accordance with SMSF rules. Providing guidance on ongoing compliance requirements including rental arrangements, property maintenance, and annual audit obligations.
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
