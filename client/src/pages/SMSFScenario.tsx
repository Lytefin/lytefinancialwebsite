import { useState } from "react";
import Header from "@/components/Header";
import { Target, Lightbulb, TrendingUp, MapPin, Phone, Mail, Clock, ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/stock_images/luxury_apartment_bui_0ffde56c.jpg";
import constructionImage from '@assets/stock_images/construction_site_wo_d72f9b16.jpg';
import meetingImage from '@assets/stock_images/professional_busines_2ec02d93.jpg';
import logoImage from "@assets/amended final logo_1763958071951.jpg";

export default function SMSFScenario() {
  const [activeCase, setActiveCase] = useState<"partners" | "personal" | "refinance" | "investment">("partners");

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
              SMSF Lending Case Studies
            </h1>
            <p 
              className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto text-white"
              data-testid="text-hero-description"
            >
              Using your super to invest in property is a powerful wealth-building strategy, but it requires expert guidance. Explore our case studies to see how we've helped clients navigate complex SMSF lending scenarios.
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
              Choose a scenario to learn more about our SMSF lending solutions
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setActiveCase("partners")}
              className={`text-base md:text-lg px-6 py-6 h-auto transition-all ${
                activeCase === "partners"
                  ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                  : "bg-card text-primary border-2 border-primary hover:bg-primary/10"
              }`}
              data-testid="button-case-partners"
            >
              SMSF Business Premises Purchase
            </Button>
            <Button
              onClick={() => setActiveCase("personal")}
              className={`text-base md:text-lg px-6 py-6 h-auto transition-all ${
                activeCase === "personal"
                  ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                  : "bg-card text-primary border-2 border-primary hover:bg-primary/10"
              }`}
              data-testid="button-case-personal"
            >
              From PAYG to Self-Employed: Structuring a Compliant SMSF Loan
            </Button>
            <Button
              onClick={() => setActiveCase("refinance")}
              className={`text-base md:text-lg px-6 py-6 h-auto transition-all ${
                activeCase === "refinance"
                  ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                  : "bg-card text-primary border-2 border-primary hover:bg-primary/10"
              }`}
              data-testid="button-case-refinance"
            >
              Refinancing High-Rate SMSF Loans
            </Button>
            <Button
              onClick={() => setActiveCase("investment")}
              className={`text-base md:text-lg px-6 py-6 h-auto transition-all ${
                activeCase === "investment"
                  ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                  : "bg-card text-primary border-2 border-primary hover:bg-primary/10"
              }`}
              data-testid="button-case-investment"
            >
              SMSF Investment Purchase After Decline
            </Button>
          </div>
        </div>
      </section>

      {activeCase === "partners" && (
        <>
          <section className="py-12 md:py-16 bg-accent">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
              <div className="text-center mb-8">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Case Study 1
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-3">
                  SMSF Business Premises Purchase
                </h2>
                <p className="text-muted-foreground text-lg italic max-w-3xl mx-auto">
                  How we helped a client use their SMSF to purchase a commercial property and lease it back to their own business as a new base of operations
                </p>
              </div>
              
              <div className="bg-card p-8 md:p-12 rounded-lg border border-border">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 
                      className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6"
                      data-testid="text-goal-title-1"
                    >
                      The Client's Goal & Challenge
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <div>
                    <p className="mb-4" data-testid="text-goal-description-1">
                      Two business partners identified a prime commercial property ideal for their business operations. Their goal was to:
                    </p>
                    <ul className="pl-6 space-y-2 mb-4">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Purchase the property through their SMSFs — not personally</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Avoid using personal cash or business cash flow</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Secure long-term business stability by occupying a premises they indirectly own</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Generate rental income back into their super funds</span>
                      </li>
                    </ul>
                    <p>
                      However, each partner held their own SMSF, and SMSFs cannot simply "co-own" property directly unless structured correctly.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-primary mb-3">The Challenge:</p>
                    <p className="pl-6 mb-3">Two separate SMSFs face strict rules around:</p>
                    <ul className="pl-12 space-y-2 mb-4">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Joint property ownership</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Related-party leases</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Arm's-length transactions</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>SMSF borrowing structures (LRBAs)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Asset segregation</span>
                      </li>
                    </ul>
                    <p className="pl-6 mb-3">
                      <strong className="text-primary">The primary challenge:</strong> How can two separate SMSFs legally and efficiently co-purchase one commercial property that their business will lease?
                    </p>
                    <p className="pl-6 mb-3">
                      A direct co-ownership structure was not compliant or lender-friendly. A structure needed to:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Allow equal ownership</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Enable SMSF borrowing</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Support a commercial lease to their own trading business</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Remain fully compliant with SIS legislation</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Be acceptable to lenders for LRBA lending</span>
                      </li>
                    </ul>
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
                      data-testid="text-solution-title-1"
                    >
                      Our Strategic Solution
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-8 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <div data-testid="text-solution-1-step-1">
                    <p className="font-semibold text-primary mb-3">1. Establishing a Unit Trust</p>
                    <p className="pl-6">
                      We worked with their accountant to establish a special-purpose Unit Trust designed solely to hold the commercial property. This trust became the legal purchasing entity, simplifying ownership and lending.
                    </p>
                  </div>
                  
                  <div data-testid="text-solution-1-step-2">
                    <p className="font-semibold text-primary mb-3">2. Each SMSF Invests Into the Unit Trust</p>
                    <p className="pl-6 mb-3">
                      Each partner's SMSF purchased 50% of the units in the trust. This ensured:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Equal ownership</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Clear reporting</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>A compliant investment</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>A structure lenders could work with</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div data-testid="text-solution-1-step-3">
                    <p className="font-semibold text-primary mb-3">3. The Unit Trust Purchases the Property</p>
                    <p className="pl-6">
                      With funds from both SMSFs and LRBA lending support, the Unit Trust acquired the commercial property. Title was held by the trust, not the individuals or their business.
                    </p>
                  </div>

                  <div data-testid="text-solution-1-step-4">
                    <p className="font-semibold text-primary mb-3">4. Commercial Leaseback to the Trading Business</p>
                    <p className="pl-6 mb-3">
                      Once settled, the client's trading business moved into the property as the tenant. We ensured the lease was structured:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>At market rent</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>On arm's-length terms</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>With SMSF compliance in mind</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Suitable for audit and long-term planning</span>
                      </li>
                    </ul>
                    <p className="pl-6 mt-3">
                      This ensured the SMSFs received regular rental income while the business secured a stable premises.
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
                      data-testid="text-outcome-title-1"
                    >
                      The Positive Outcome
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <ul className="space-y-4 pl-6">
                    <li data-testid="text-outcome-1-1">
                      <span className="font-semibold text-primary">Two SMSFs Successfully Co-Purchased:</span> A commercial property using a compliant and lender-approved Unit Trust structure.
                    </li>
                    <li data-testid="text-outcome-1-2">
                      <span className="font-semibold text-primary">No Personal Contributions Required:</span> No personal contributions or business cash were required to fund the property.
                    </li>
                    <li data-testid="text-outcome-1-3">
                      <span className="font-semibold text-primary">Business Secured Long-Term Premises:</span> Business secured a high-quality premises with long-term stability.
                    </li>
                    <li data-testid="text-outcome-1-4">
                      <span className="font-semibold text-primary">Rental Income to SMSFs:</span> Market-rate rent now flows into both SMSFs, improving retirement wealth.
                    </li>
                    <li data-testid="text-outcome-1-5">
                      <span className="font-semibold text-primary">Scalable, Future-Proof Structure:</span> A scalable, future-proof structure for future SMSF investments.
                    </li>
                    <li data-testid="text-outcome-1-6">
                      <span className="font-semibold text-primary">Full Compliance:</span> Full compliance with SIS Act, ATO audit requirements, and LRBA lending rules.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeCase === "personal" && (
        <>
          <section className="py-12 md:py-16 bg-accent">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
              <div className="text-center mb-8">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Case Study 2
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-3">
                  From PAYG to Self-Employed: Structuring a Compliant SMSF Loan
                </h2>
                <p className="text-muted-foreground text-lg italic max-w-3xl mx-auto">
                  How we saved an SMSF property purchase after the client moved from PAYG to self-employment and lost their pre-approval
                </p>
              </div>
              
              <div className="bg-card p-8 md:p-12 rounded-lg border border-border">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 
                      className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6"
                      data-testid="text-goal-title-2"
                    >
                      The Client's Goal & Challenge
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <div>
                    <p className="mb-4" data-testid="text-goal-description-2-1">
                      The Client wanted to purchase an investment property through their Self-Managed Super Fund (SMSF) as part of a long-term wealth-building strategy. A pre-approval for an SMSF loan had already been secured under their PAYG income, and the Client was ready to proceed with the purchase.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-primary mb-3">The Challenge:</p>
                    <p className="pl-6 mb-3">
                      During the transaction, the Client transitioned from PAYG employment to self-employment. This created an immediate problem:
                    </p>
                    <ul className="pl-12 space-y-2 mb-4">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Lenders generally require two years of financials for self-employed borrowers, even for SMSF loans</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>As a result, the lender cancelled the pre-approval, midway through the purchasing process</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Although the SMSF held some cash, it did not have enough to complete the full purchase price on its own</span>
                      </li>
                    </ul>
                    <p className="pl-6 font-semibold text-primary">
                      Without a solution, the Client risked losing the investment opportunity.
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
                      data-testid="text-solution-title-2"
                    >
                      Our Strategic Solution
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-6 text-primary text-base md:text-lg leading-relaxed">
                  <div data-testid="text-solution-2-step-1">
                    <p className="font-semibold text-primary mb-3">1. Personal Loan to the SMSF to Complete the Purchase</p>
                    <p className="pl-6">
                      We structured a compliant related-party loan, allowing the Client to lend money from their personal funds to the SMSF so it could complete the purchase in cash.
                    </p>
                    <p className="pl-6 mt-2">
                      This preserved the transaction and met all SMSF regulatory obligations.
                    </p>
                  </div>
                  
                  <div data-testid="text-solution-2-step-2">
                    <p className="font-semibold text-primary mb-3">2. Refinancing the SMSF Property After 12 Months</p>
                    <p className="pl-6 mb-2">
                      Once the Client had sufficient trading history as a self-employed individual, we:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Re-engaged SMSF lenders</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Secured a standard SMSF property loan</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Rolled the related-party loan into the new SMSF loan</span>
                      </li>
                    </ul>
                    <p className="pl-6 mt-3">
                      This returned the Client's personal funds while keeping the structure fully compliant.
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
                      data-testid="text-outcome-title-2"
                    >
                      The Positive Outcome
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <p className="font-medium text-primary" data-testid="text-outcome-intro-2">
                    A well-structured SMSF acquisition with full compliance and long-term benefits:
                  </p>
                  
                  <ul className="space-y-4 pl-6">
                    <li data-testid="text-outcome-2-1">
                      <span className="font-semibold text-primary">Successful Property Acquisition:</span> The SMSF completed the purchase on time, despite the cancelled pre-approval.
                    </li>
                    <li data-testid="text-outcome-2-2">
                      <span className="font-semibold text-primary">Personal Funds Returned:</span> The refinance allowed the Client to recover the full amount initially lent to the SMSF.
                    </li>
                    <li data-testid="text-outcome-2-3">
                      <span className="font-semibold text-primary">Compliance Assurance:</span> The related-party loan, SMSF transaction, and subsequent refinance were all fully compliant, properly documented, and audit-approved, ensuring the integrity of the SMSF and meeting all regulatory requirements.
                    </li>
                    <li data-testid="text-outcome-2-4">
                      <span className="font-semibold text-primary">Long-Term SMSF Benefits:</span> The property is now held under the SMSF with a bank loan, providing tax efficiency and long-term asset growth.
                    </li>
                    <li data-testid="text-outcome-2-5">
                      <span className="font-semibold text-primary">Strategic Flexibility Maintained:</span> The Client continued their transition into self-employment without sacrificing investment momentum.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeCase === "refinance" && (
        <>
          <section className="py-12 md:py-16 bg-accent">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
              <div className="text-center mb-8">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Case Study 3
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-3">
                  Refinancing High-Rate SMSF Loans
                </h2>
                <p className="text-muted-foreground text-lg italic max-w-3xl mx-auto">
                  How we helped clients reduce their SMSF loan rate by more than 1% despite major banks exiting the SMSF lending space
                </p>
              </div>
              
              <div className="bg-card p-8 md:p-12 rounded-lg border border-border">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 
                      className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6"
                      data-testid="text-goal-title-3"
                    >
                      The Client's Goal & Challenge
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <p>
                    SMSF lending is often treated as a "set-and-forget" arrangement — but many trustees don't realise their SMSF loan rates are significantly higher than necessary. With most major banks withdrawing from SMSF lending, countless SMSFs are left on old, uncompetitive loan products that quietly erode long-term super balances.
                  </p>

                  <div>
                    <p className="mb-4">
                      The client held an existing SMSF property loan that had not been reviewed for several years. Their goals were simple:
                    </p>
                    <ul className="pl-6 space-y-2 mb-4">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Reduce their loan interest rate</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Lower long-term costs inside their SMSF</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Improve cash flow and investment returns</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Ensure their SMSF structure remained compliant and sustainable</span>
                      </li>
                    </ul>
                    <p>
                      They suspected their interest rate was high — but had no idea how far the SMSF lending market had moved.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-primary mb-3">The Challenge:</p>
                    <p className="pl-6 mb-3">The SMSF lending landscape has changed dramatically:</p>
                    <ul className="pl-12 space-y-2 mb-4">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Major banks have exited the SMSF lending space</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Remaining lenders often have niche policies</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Many SMSF loans automatically roll into high revert rates</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Trustees typically don't receive proactive rate reviews</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Old SMSF products are often 1%–2% above market rates</span>
                      </li>
                    </ul>
                    <p className="pl-6 mb-3">The client's existing loan was:</p>
                    <ul className="pl-12 space-y-2 mb-4">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>On an outdated SMSF product</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Sitting over 1% above competitive rates</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>With no lender-driven review or repricing available</span>
                      </li>
                    </ul>
                    <p className="pl-6">
                      They needed a full refinance review — but SMSF lending requires strict compliance, a LRBA structure, trustee documentation, and a lender that still operates in this niche.
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
                      data-testid="text-solution-title-3"
                    >
                      Our Strategic Solution
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-8 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <div data-testid="text-solution-3-step-1">
                    <p className="font-semibold text-primary mb-3">1. Full SMSF Lending Review</p>
                    <p className="pl-6 mb-3">We reviewed the client's:</p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Current LRBA structure</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Trust deed and bare trust documents</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Interest rate history</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Repayment term and strategy</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>SMSF cash flow and investment plans</span>
                      </li>
                    </ul>
                    <p className="pl-6 mt-3">
                      This confirmed the loan was significantly overpriced and suitable for refinance.
                    </p>
                  </div>
                  
                  <div data-testid="text-solution-3-step-2">
                    <p className="font-semibold text-primary mb-3">2. Identifying Active SMSF Lenders</p>
                    <p className="pl-6 mb-3">
                      Because most major banks no longer offer SMSF loans, we:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Assessed specialist SMSF lenders still active in the market</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Compared rates, fees, and product structures</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Matched their LRBA setup to lenders who accepted their trust documents</span>
                      </li>
                    </ul>
                    <p className="pl-6 mt-3">
                      This ensured a smooth transition without structural issues.
                    </p>
                  </div>
                  
                  <div data-testid="text-solution-3-step-3">
                    <p className="font-semibold text-primary mb-3">3. Structuring the Refinance Correctly</p>
                    <p className="pl-6 mb-3">
                      SMSF refinancing requires precision. We:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Aligned the new lender's requirements with the existing bare trust</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Updated trustee documentation where necessary</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Ensured compliance with SIS Act rules</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Structured the loan to match the SMSF's long-term investment horizon</span>
                      </li>
                    </ul>
                  </div>

                  <div data-testid="text-solution-3-step-4">
                    <p className="font-semibold text-primary mb-3">4. Negotiating a Significantly Better Rate</p>
                    <p className="pl-6 mb-3">
                      We successfully secured a new SMSF loan that was:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Over 1% lower than their existing interest rate</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>On a modern, flexible SMSF lending product</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>With improved cash flow and long-term savings</span>
                      </li>
                    </ul>
                    <p className="pl-6 mt-3">
                      This reduction alone increased the SMSF's projected retirement value substantially.
                    </p>
                  </div>

                  <div data-testid="text-solution-3-step-5">
                    <p className="font-semibold text-primary mb-3">5. Seamless Refinance & Settlement</p>
                    <p className="pl-6 mb-3">
                      We handled:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>All lender communication</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Document preparation</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Trustee signatures</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Settlement coordination</span>
                      </li>
                    </ul>
                    <p className="pl-6 mt-3">
                      The refinance was completed without disruption to the SMSF's investment property.
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
                      data-testid="text-outcome-title-3"
                    >
                      The Positive Outcome
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <ul className="space-y-4 pl-6">
                    <li data-testid="text-outcome-3-1">
                      <span className="font-semibold text-primary">Interest Rate Reduced by More Than 1%:</span> A significant cost saving in an SMSF environment where every dollar compounds.
                    </li>
                    <li data-testid="text-outcome-3-2">
                      <span className="font-semibold text-primary">Improved SMSF Cash Flow & Long-Term Investment Returns:</span> Lower repayments mean more money stays invested for retirement growth.
                    </li>
                    <li data-testid="text-outcome-3-3">
                      <span className="font-semibold text-primary">Modern, Competitive SMSF Loan Structure:</span> The client moved off an outdated product and onto a lender who still actively supports SMSF borrowers.
                    </li>
                    <li data-testid="text-outcome-3-4">
                      <span className="font-semibold text-primary">Full Compliance Maintained:</span> All LRBA and trustee documentation remained audit-ready.
                    </li>
                    <li data-testid="text-outcome-3-5">
                      <span className="font-semibold text-primary">A Long-Term Refinancing Strategy in Place:</span> We set review intervals so the SMSF never drifts into an overpriced loan again.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeCase === "investment" && (
        <>
          <section className="py-12 md:py-16 bg-accent">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
              <div className="text-center mb-8">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Case Study 4
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-3">
                  SMSF Investment Purchase Approval After Being Declined Elsewhere
                </h2>
                <p className="text-muted-foreground text-lg italic max-w-3xl mx-auto">
                  How we helped a client secure SMSF finance using a 40-year loan term and voluntary contributions overlooked by another broker
                </p>
              </div>
              
              <div className="bg-card p-8 md:p-12 rounded-lg border border-border">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 
                      className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6"
                      data-testid="text-goal-title-4"
                    >
                      The Client's Goal & Challenge
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <p data-testid="text-goal-intro-4">
                    Many SMSF trustees miss out on property opportunities because they're assessed incorrectly or told they don't qualify. In this case, we helped a client secure SMSF lending approval — despite another broker advising them they couldn't borrow the amount they needed.
                  </p>

                  <div>
                    <p className="font-semibold text-primary mb-3">The Client's Goal:</p>
                    <p className="pl-6 mb-3" data-testid="text-goal-description-4">
                      The client wanted to purchase a residential investment property through their SMSF to diversify their portfolio and strengthen their long-term retirement position.
                    </p>
                    <p className="pl-6 mb-3">They had:</p>
                    <ul className="pl-12 space-y-2 mb-4">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>A well-funded SMSF</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>A clear investment objective</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>A strong property opportunity</span>
                      </li>
                    </ul>
                    <p className="pl-6 font-semibold text-primary">
                      However, they were told by a previous broker that the SMSF simply could not borrow enough money to complete the purchase.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-primary mb-3">The Challenge:</p>
                    <p className="pl-6 mb-3">
                      The other broker evaluated the SMSF under a standard lending model, which resulted in:
                    </p>
                    <ul className="pl-12 space-y-2 mb-4">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Insufficient borrowing capacity</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>No consideration of voluntary contributions</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>No understanding of lenders offering extended 40-year SMSF loan terms</span>
                      </li>
                    </ul>
                    <p className="pl-6 mb-3">
                      Without exploring specialised SMSF lenders or factoring in allowable contributions, the previous broker incorrectly concluded the client was ineligible.
                    </p>
                    <p className="pl-6 font-semibold text-primary">
                      The client was close to giving up on the property altogether.
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
                      data-testid="text-solution-title-4"
                    >
                      Our Strategic Solution
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-8 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <div data-testid="text-solution-4-step-1">
                    <p className="font-semibold text-primary mb-3">1. A Fresh SMSF Assessment With Specialist Lenders</p>
                    <p className="pl-6">
                      We reviewed the SMSF's financials and quickly identified that the previous broker had used restrictive lending assumptions that did not reflect the full range of SMSF lending options available.
                    </p>
                  </div>
                  
                  <div data-testid="text-solution-4-step-2">
                    <p className="font-semibold text-primary mb-3">2. Leveraging a Lender Offering a 40-Year SMSF Loan Term</p>
                    <p className="pl-6 mb-3">
                      We sourced a lender offering a 40-year SMSF loan term, which significantly improved:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Borrowing capacity</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Repayment affordability</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Long-term SMSF cash flow</span>
                      </li>
                    </ul>
                    <p className="pl-6 mt-3">
                      This alone increased their borrowing power beyond what they were previously told.
                    </p>
                  </div>
                  
                  <div data-testid="text-solution-4-step-3">
                    <p className="font-semibold text-primary mb-3">3. Including Voluntary Contributions the Previous Broker Ignored</p>
                    <p className="pl-6 mb-3">
                      We identified that the client made regular voluntary concessional contributions — a critical income source for lending that other brokers often overlook.
                    </p>
                    <p className="pl-6">
                      By correctly including these contributions in the SMSF's servicing assessment, the borrowing capacity increased even further.
                    </p>
                  </div>

                  <div data-testid="text-solution-4-step-4">
                    <p className="font-semibold text-primary mb-3">4. Complete Lending Strategy & Compliance Alignment</p>
                    <p className="pl-6 mb-3">
                      We structured a lending plan that:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Met SIS and LRBA compliance requirements</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Aligned with the SMSF's investment strategy</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Ensured sufficient liquidity buffers</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Delivered lender confidence and clarity</span>
                      </li>
                    </ul>
                    <p className="pl-6 mt-3">
                      With the correct structure and lender selection, the application was approved without issue.
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
                      data-testid="text-outcome-title-4"
                    >
                      The Positive Outcome
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <ul className="space-y-4 pl-6">
                    <li data-testid="text-outcome-4-1">
                      <span className="font-semibold text-primary">Full Loan Approval Despite Prior Decline:</span> The client was approved for the full loan amount — despite being turned away elsewhere.
                    </li>
                    <li data-testid="text-outcome-4-2">
                      <span className="font-semibold text-primary">40-Year Loan Term Maximised Capacity:</span> The extended loan term maximised affordability and borrowing power.
                    </li>
                    <li data-testid="text-outcome-4-3">
                      <span className="font-semibold text-primary">Voluntary Contributions Included:</span> Properly accounting for voluntary contributions dramatically improved servicing.
                    </li>
                    <li data-testid="text-outcome-4-4">
                      <span className="font-semibold text-primary">Successful Property Purchase:</span> The SMSF successfully purchased a high-quality investment property.
                    </li>
                    <li data-testid="text-outcome-4-5">
                      <span className="font-semibold text-primary">Strengthened Retirement Wealth:</span> Long-term retirement wealth strengthened through improved SMSF asset growth.
                    </li>
                    <li data-testid="text-outcome-4-6">
                      <span className="font-semibold text-primary">Repeatable Strategy:</span> A repeatable, scalable SMSF property strategy for future acquisitions.
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
              Six-Stage SMSF Process Map
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              A clear and compliant pathway designed for SMSF property lending
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
                    Initial SMSF Consultation
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    We begin with a detailed discussion to understand your SMSF's objectives, the property you intend to purchase or refinance, and how this aligns with your long-term retirement strategy. During this conversation, we outline key SMSF borrowing rules and compliance considerations so the structure is correct from the very beginning.
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
                    Information Collection & SMSF Compliance Review
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    You'll receive secure access to your Lyte Financial client portal to provide your SMSF trust deed, financials, contribution history, and other supporting documents. We then complete a thorough borrowing and compliance assessment to confirm the SMSF can legally borrow and identify the trust structure required. At this stage, we work closely with your accountant or SMSF administrator, as they are responsible for preparing or verifying the formal SMSF and trust documentation required for lending.
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
                    Strategy & Recommendation Meeting
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Once our assessment is complete, we present a personalised SMSF lending strategy. This meeting outlines suitable lending options, the correct structure for the Bare Trust or Unit Trust arrangement, and the compliance pathway required for a successful purchase or refinance. It's a collaborative discussion designed to give you full clarity on the process while ensuring your accountant or legal adviser is aligned with the structural requirements.
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
                    Structure Setup, Lending Proposal & Application Submission
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    You'll receive a detailed lending proposal that outlines the lender, structure, repayments, and expected benefits. While your accountant or solicitor handles the setup or verification of the required entities — such as the Bare Trust/Holding Trust or Unit Trust — we coordinate with them to ensure the structure meets lender policy and SMSF borrowing rules. Once the structure is ready, we prepare and submit your SMSF lending application and manage communication with all parties.
                  </p>
                </div>
              </div>
              <div className="flex justify-center my-2">
                <ArrowRight className="h-6 w-6 text-primary rotate-90" />
              </div>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-lg border border-border" data-testid="card-step-5">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2">
                    Loan Approval, Settlement & LRBA Completion
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    After approval, we guide you through the remaining requirements and oversee the Limited Recourse Borrowing Arrangement (LRBA) process. We liaise with your accountant, solicitor, the lender, and the property conveyancer to ensure all trust documents, trustee resolutions, and settlement steps are completed correctly. Our goal is to ensure a fully compliant, stress-free settlement so your SMSF can acquire the property confidently.
                  </p>
                </div>
              </div>
              <div className="flex justify-center my-2">
                <ArrowRight className="h-6 w-6 text-primary rotate-90" />
              </div>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-lg border border-border" data-testid="card-step-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold flex-shrink-0">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2">
                    Ongoing Support, Reviews & SMSF Strategy Guidance
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Our support continues beyond settlement. We provide ongoing loan reviews, rate check-ins, leasing guidance for related-party tenants (where applicable), and structural advice as SMSF lending rules evolve. We also continue working alongside your accountant or SMSF administrator to ensure the structure remains compliant, efficient, and aligned with your long-term superannuation strategy.
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
                    data-testid="button-book-meeting-footer"
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
