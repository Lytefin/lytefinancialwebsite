import { useState } from "react";
import Header from "@/components/Header";
import { Target, Lightbulb, TrendingUp, ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/stock_images/beautiful_modern_fam_9d735423.jpg";
import constructionImage from '@assets/stock_images/construction_site_wo_d72f9b16.jpg';
import meetingImage from '@assets/stock_images/professional_busines_2ec02d93.jpg';
import logoImage from "@assets/amended final logo_1763958071951.jpg";

type CaseStudyType = "bridging" | "firsthome" | "debtrecycling";

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
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2">
              Select a Case Study
            </h2>
            <p className="text-muted-foreground">
              Choose a scenario to learn more about our residential lending solutions
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Button
              onClick={() => setActiveCase("firsthome")}
              className={`text-base md:text-lg px-6 py-6 h-auto transition-all ${
                activeCase === "firsthome"
                  ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                  : "bg-card text-primary border-2 border-primary hover:bg-primary/10"
              }`}
              data-testid="button-case-firsthome"
            >
              First Home Buyer: Navigating the Property Market with Confidence
            </Button>
            <Button
              onClick={() => setActiveCase("debtrecycling")}
              className={`text-base md:text-lg px-6 py-6 h-auto transition-all ${
                activeCase === "debtrecycling"
                  ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                  : "bg-card text-primary border-2 border-primary hover:bg-primary/10"
              }`}
              data-testid="button-case-debtrecycling"
            >
              Debt Recycling & Refinance to Build Wealth
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
                  Case Study 1
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
                      data-testid="text-goal-title-1"
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
                      data-testid="text-solution-title-1"
                    >
                      Our Strategic Solution
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-8 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <div data-testid="text-solution-1-step-1">
                    <p className="font-semibold text-primary mb-3">1. Designing a Dual-Property Holding Strategy</p>
                    <p className="pl-6">
                      We worked with the clients to develop a structure that allowed them to hold both properties simultaneously, giving them full flexibility during the transition period.
                    </p>
                  </div>
                  
                  <div data-testid="text-solution-1-step-2">
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
                  
                  <div data-testid="text-solution-1-step-3">
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
                      data-testid="text-outcome-title-1"
                    >
                      The Positive Outcome
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <p className="font-medium text-primary" data-testid="text-outcome-intro-1">
                    A smooth, empowered transition into their new home:
                  </p>
                  
                  <ul className="space-y-4 pl-6">
                    <li data-testid="text-outcome-1-1">
                      <span className="font-semibold text-primary">Successful Purchase of Their New Home:</span> The clients secured their ideal home at the right time, without needing to wait for their existing property to sell.
                    </li>
                    <li data-testid="text-outcome-1-2">
                      <span className="font-semibold text-primary">No Forced Sale or Renting Period:</span> They avoided temporary accommodation, rushed deadlines, and the risks associated with selling in haste.
                    </li>
                    <li data-testid="text-outcome-1-3">
                      <span className="font-semibold text-primary">Twelve Months of Flexibility to Sell Strategically:</span> The bridging facility provided a generous window for preparing and listing the existing home, allowing them to sell under favourable market conditions.
                    </li>
                    <li data-testid="text-outcome-1-4">
                      <span className="font-semibold text-primary">A Stress-Free Transition Between Homes:</span> With the new home settled and a clear pathway to selling the existing property, the clients experienced a seamless changeover tailored to their needs.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeCase === "firsthome" && (
        <>
          <section className="py-12 md:py-16 bg-accent">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
              <div className="text-center mb-8">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Case Study 2
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-3">
                  First Home Buyer: Navigating the Property Market with Confidence
                </h2>
                <p className="text-muted-foreground text-lg italic max-w-3xl mx-auto">
                  Buying your first home can feel overwhelming—especially when savings are limited and eligibility rules are unclear. This case study shows how we helped first-time buyers secure their home sooner and with minimal upfront costs.
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
                    <p className="font-semibold text-primary mb-2">Clients: John & Barbara, Newcastle NSW</p>
                    <p className="pl-6">
                      <strong className="text-primary">Goal:</strong> Purchase their first home with a low deposit and minimal upfront expenses.
                    </p>
                  </div>
                  
                  <div>
                    <p className="pl-6 mb-3">
                      They were ready to enter the property market but wanted clarity on:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>How much they could borrow</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Whether their deposit sources—including a small family gift—were acceptable to lenders</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>What government incentives they could access to reduce upfront costs</span>
                      </li>
                    </ul>
                    <p className="pl-6 mt-4">
                      As first home buyers, they needed a clear path forward and expert guidance through a complex lending landscape.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-primary mb-2">The Challenge:</p>
                    <p className="pl-6 mb-3">John & Barbara had:</p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Strong, stable incomes</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Limited savings</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>A portion of their deposit coming from a family gift</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>No prior knowledge of government schemes or lender requirements</span>
                      </li>
                    </ul>
                    <p className="pl-6 mt-4">
                      They were unsure whether lenders would accept their deposit structure and did not want to miss out on a suitable property due to delays or uncertainty.
                    </p>
                    <p className="pl-6 mt-2 font-semibold text-primary">
                      They needed a solution that maximised their borrowing power while minimising upfront costs.
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
                
                <div className="space-y-8 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <div data-testid="text-solution-2-step-1">
                    <p className="font-semibold text-primary mb-3">1. Identifying Eligibility for the First Home Guarantee Scheme</p>
                    <p className="pl-6">
                      We assessed the clients' financial position and determined they were strong candidates for the First Home Guarantee, which allows eligible first-time buyers to purchase with just a 5% deposit and no LMI.
                    </p>
                    <p className="pl-6 mt-2">
                      This immediately reduced their upfront contribution and accelerated their buying timeline.
                    </p>
                  </div>
                  
                  <div data-testid="text-solution-2-step-2">
                    <p className="font-semibold text-primary mb-3">2. Comprehensive Borrowing Capacity & Deposit Assessment</p>
                    <p className="pl-6 mb-3">
                      We completed a full borrowing analysis, considering:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Income stability</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Liabilities</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Living expenses</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Deposit breakdown, including the family gift</span>
                      </li>
                    </ul>
                    <p className="pl-6 mt-3">
                      We prepared a lender-ready explanation to ensure full clarity and compliance.
                    </p>
                  </div>
                  
                  <div data-testid="text-solution-2-step-3">
                    <p className="font-semibold text-primary mb-3">3. Managing the Guarantee Application & Lender Liaison</p>
                    <p className="pl-6 mb-3">
                      We coordinated all steps of the First Home Guarantee application, including:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Confirming their eligibility</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Preparing documentation</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Securing lender acceptance of the family-gift component</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Fast-tracking the approval process</span>
                      </li>
                    </ul>
                    <p className="pl-6 mt-3">
                      We also communicated directly with the lender, real estate agents, and conveyancer to keep the purchase moving efficiently.
                    </p>
                  </div>

                  <div data-testid="text-solution-2-step-4">
                    <p className="font-semibold text-primary mb-3">4. End-to-End Support From Contract to Settlement</p>
                    <p className="pl-6 mb-3">
                      Throughout the transaction, we:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Reviewed and updated borrowing figures as required</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Liaised with the conveyancer to align contract, deposit, and scheme requirements</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Ensured the lender met all deadlines for approval and settlement</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Provided ongoing guidance to give the clients full confidence at each stage</span>
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
                    A smooth first home purchase with significant cost savings:
                  </p>
                  
                  <ul className="space-y-4 pl-6">
                    <li data-testid="text-outcome-2-1">
                      <span className="font-semibold text-primary">Approved and Settled Within 4 Weeks:</span> The clients secured finance quickly, allowing them to proceed confidently with the purchase.
                    </li>
                    <li data-testid="text-outcome-2-2">
                      <span className="font-semibold text-primary">Saved Approximately $12,000 in Lenders Mortgage Insurance:</span> The First Home Guarantee eliminated LMI entirely, dramatically reducing upfront costs.
                    </li>
                    <li data-testid="text-outcome-2-3">
                      <span className="font-semibold text-primary">Purchased With Only a 5% Deposit:</span> Their savings and family gift were accepted without issue, simplifying the process.
                    </li>
                    <li data-testid="text-outcome-2-4">
                      <span className="font-semibold text-primary">Moved Into Their New Home Sooner Than Expected:</span> With reduced costs and a clear pathway, the clients were able to buy months earlier than they anticipated.
                    </li>
                    <li data-testid="text-outcome-2-5">
                      <span className="font-semibold text-primary">A Confident Entry Into the Property Market:</span> The clients received clear direction, lender support, and full guidance through a process that otherwise would have felt overwhelming.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeCase === "debtrecycling" && (
        <>
          <section className="py-12 md:py-16 bg-accent">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
              <div className="text-center mb-8">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Case Study 3
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-3">
                  Debt Recycling & Refinance to Build Wealth
                </h2>
                <p className="text-muted-foreground text-lg italic max-w-3xl mx-auto">
                  How we helped clients lower their home loan costs and turn personal savings into a tax-effective investment strategy.
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
                  <div>
                    <p className="font-semibold text-primary mb-2">Clients: Jason & Emily, Melbourne VIC</p>
                    <p className="pl-6">
                      <strong className="text-primary">Goal:</strong> Reduce non-deductible home loan interest and build long-term wealth through strategic investing.
                    </p>
                    <p className="pl-6 mt-3">
                      Jason & Emily were financially stable and motivated to grow their wealth. They had accumulated a significant cash buffer and wanted to put their money to work—without increasing their overall financial risk.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-primary mb-2">The Challenge:</p>
                    <p className="pl-6 mb-3">The couple held:</p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>$250,000 in cash savings, sitting idle</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>A home loan with a higher-than-necessary interest rate</span>
                      </li>
                    </ul>
                    <p className="pl-6 mt-4">
                      Although they wanted to invest, doing so directly from their savings would leave them paying unnecessary non-deductible interest on their mortgage. They needed a structure that:
                    </p>
                    <ul className="pl-12 mt-3 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Reduced their home loan costs</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Freed up capital for investing</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Made future interest tax-deductible</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Stayed within their comfort level and long-term goals</span>
                      </li>
                    </ul>
                    <p className="pl-6 mt-4 font-semibold text-primary">
                      They required a strategic and compliant way to restructure their finances for maximum efficiency.
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
                    <p className="font-semibold text-primary mb-3">1. Refinancing the Existing Home Loan to Reduce Costs</p>
                    <p className="pl-6">
                      We refinanced their home loan to a lender offering a lower interest rate, immediately reducing their monthly repayments and long-term interest costs.
                    </p>
                  </div>
                  
                  <div data-testid="text-solution-3-step-2">
                    <p className="font-semibold text-primary mb-3">2. Using Their $250,000 to Eliminate Non-Deductible Debt</p>
                    <p className="pl-6">
                      We applied their $250,000 savings directly against the newly refinanced home loan. This significantly reduced their non-deductible debt—improving their financial position from day one.
                    </p>
                  </div>
                  
                  <div data-testid="text-solution-3-step-3">
                    <p className="font-semibold text-primary mb-3">3. Establishing a New Investment Loan (Debt Recycling Structure)</p>
                    <p className="pl-6 mb-3">
                      To ensure their investment strategy remained tax-efficient, we set up a new $250,000 loan against their property for investment purposes. This allowed them to:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Keep their home loan as low as possible</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Use separate loan splits for clarity and compliance</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Begin investing without affecting personal cash flow</span>
                      </li>
                    </ul>
                  </div>

                  <div data-testid="text-solution-3-step-4">
                    <p className="font-semibold text-primary mb-3">4. Creating a Long-Term, Tax-Effective Investment Plan</p>
                    <p className="pl-6 mb-3">
                      The new loan was used to invest in diversified assets, including shares and managed funds. Because the borrowed funds were used for investing, the interest on the new loan became tax-deductible—transforming what once was "bad debt" into "good debt."
                    </p>
                    <p className="pl-6">
                      We also created a clear roadmap for future debt recycling, allowing Jason & Emily to grow their investments as their home loan reduces over time.
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
                  <p className="font-medium text-primary" data-testid="text-outcome-intro-3">
                    A smart, long-term wealth strategy with immediate financial benefits:
                  </p>
                  
                  <ul className="space-y-4 pl-6">
                    <li data-testid="text-outcome-3-1">
                      <span className="font-semibold text-primary">Lower Interest on Their Home Loan:</span> Refinancing reduced their repayments and saved thousands in future interest.
                    </li>
                    <li data-testid="text-outcome-3-2">
                      <span className="font-semibold text-primary">Converted $250,000 of Non-Deductible Debt Into Tax-Deductible Debt:</span> Their money now works harder—reducing tax and improving long-term returns.
                    </li>
                    <li data-testid="text-outcome-3-3">
                      <span className="font-semibold text-primary">A Structured Investment Plan for Wealth Growth:</span> They now hold a well-designed investment portfolio funded through an efficient debt strategy.
                    </li>
                    <li data-testid="text-outcome-3-4">
                      <span className="font-semibold text-primary">Improved Long-Term Cash Flow:</span> By reducing non-deductible interest, more of their money goes toward wealth creation.
                    </li>
                    <li data-testid="text-outcome-3-5">
                      <span className="font-semibold text-primary">Clear, Sustainable Financial Framework:</span> The structure allows them to continue recycling debt and expanding their investment base over time.
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
              Six-Stage Process Map
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Our structured approach to residential lending
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
                    Initial Consultation
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    We begin with a detailed, goal-focused discussion to understand what you want to achieve — whether you're buying, upgrading, refinancing, investing, or restructuring your lending. This session helps us understand your priorities, challenges, and the most suitable direction for the lending strategy ahead.
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
                    Information Collection & Financial Assessment
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    You'll receive secure access to your Lyte Financial client portal to complete your fact find and upload key documents. From there, we assess your borrowing capacity, income position, deposit or equity, liabilities, and long-term goals — forming a complete picture of your financial position.
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
                    Once our analysis is complete, we meet with you to present a personalised lending strategy. We walk you through tailored options, compare lenders and structures, and explain how each approach supports your objectives. This is a collaborative session designed to give you clarity and confidence before moving forward.
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
                    Lending Proposal & Application Submission
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    You'll receive a detailed proposal outlining the recommended lender, loan structure, repayments, and projected benefits. Once you're comfortable with the plan, we prepare and submit your application — managing all communication with the lender, valuers, and key parties to ensure everything progresses smoothly.
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
                    Loan Approval, Settlement & Completion
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    After your loan is approved, we guide you through the final requirements and coordinate with all stakeholders, including the lender and your solicitor. We manage the full settlement process, ensuring your transition into the new loan or property is seamless and stress-free.
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
                    Ongoing Support, Reviews & Strategic Guidance
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Our partnership continues well beyond settlement. We provide ongoing reviews, rate check-ins, structure optimisation, equity assessments, and strategic advice to ensure your lending remains competitive and aligned with your goals over time. As your life, income, or plans evolve — we ensure your finance evolves with you.
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
