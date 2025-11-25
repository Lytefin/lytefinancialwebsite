import { useState } from "react";
import Header from "@/components/Header";
import { Target, Lightbulb, TrendingUp, ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Industrial_shed_warehouse_building_df010581.png";
import constructionImage from '@assets/stock_images/construction_site_wo_d72f9b16.jpg';
import logoImage from "@assets/amended final logo_1763958071951.jpg";

export default function CommercialScenario() {
  const [activeCase, setActiveCase] = useState<"highLVR" | "rapidRefinance">("highLVR");

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
              Commercial Lending Case Studies
            </h1>
            <p 
              className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto text-white"
              data-testid="text-hero-description"
            >
              Commercial property finance requires specialist knowledge and access to the right lenders. Explore our case studies to see how we've helped businesses secure commercial property solutions.
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
              Choose a scenario to learn more about our commercial lending solutions
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setActiveCase("highLVR")}
              className={`text-base md:text-lg px-6 py-6 h-auto transition-all ${
                activeCase === "highLVR"
                  ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                  : "bg-card text-primary border-2 border-primary hover:bg-primary/10"
              }`}
              data-testid="button-case-highLVR"
            >
              90% LVR Commercial Property Finance
            </Button>
            <Button
              onClick={() => setActiveCase("rapidRefinance")}
              className={`text-base md:text-lg px-6 py-6 h-auto transition-all ${
                activeCase === "rapidRefinance"
                  ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                  : "bg-card text-primary border-2 border-primary hover:bg-primary/10"
              }`}
              data-testid="button-case-rapidRefinance"
            >
              Rapid Commercial Refinance With Minimal Documents
            </Button>
          </div>
        </div>
      </section>

      {activeCase === "highLVR" && (
        <>
          <section className="py-12 md:py-16 bg-accent">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
              <div className="text-center mb-8">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Case Study 1
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-3">
                  90% LVR Commercial Property Finance
                </h2>
                <p className="text-muted-foreground text-lg italic max-w-3xl mx-auto">
                  How we helped a business owner purchase their own commercial property with minimal deposit while preserving vital cash flow
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
                  <div data-testid="text-client-status-1">
                    <p className="font-semibold text-primary mb-2">Client Status:</p>
                    <p className="pl-6">
                      A business owner operating out of a rented factory, currently paying $129,000 per annum in rent.
                    </p>
                  </div>
                  
                  <div data-testid="text-goal-1">
                    <p className="font-semibold text-primary mb-2">The Goal:</p>
                    <p className="pl-6">
                      To purchase a new, own-occupied commercial property to secure premises and build equity. The aim was to move from being a renter to an owner/landlord of his own business premises.
                    </p>
                  </div>
                  
                  <div data-testid="text-challenge-1">
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
                    <h3 
                      className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6"
                      data-testid="text-solution-title-1"
                    >
                      Our Strategic Solution
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <div data-testid="text-market-review-1">
                    <p className="font-semibold text-primary mb-2">Market Review:</p>
                    <p className="pl-6">
                      We conducted an extensive review of the commercial lending market to identify lenders with appetite for higher LVR commercial deals.
                    </p>
                  </div>
                  
                  <div data-testid="text-key-win-1">
                    <p className="font-semibold text-primary mb-2">The Key Win:</p>
                    <p className="pl-6">
                      We were able to source a specialist commercial lender willing to approve a 90% Loan-to-Value Ratio (LVR) for the property purchase - a significant achievement in the commercial lending space.
                    </p>
                  </div>
                  
                  <div data-testid="text-rate-structure-1">
                    <p className="font-semibold text-primary mb-2">Rate Structure:</p>
                    <p className="pl-6">
                      The interest rate was within the same range as standard commercial lending, with only a small, manageable premium paid for the higher LVR.
                    </p>
                  </div>
                  
                  <div data-testid="text-structure-1">
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
                    A strategic win that delivered long-term stability and cash flow control:
                  </p>
                  
                  <ul className="space-y-4 pl-6">
                    <li data-testid="text-outcome-1-1">
                      <span className="font-semibold text-primary">Property Acquisition:</span> The client successfully acquired an owner-occupied commercial property, transitioning from renting to ownership.
                    </li>
                    <li data-testid="text-outcome-1-2">
                      <span className="font-semibold text-primary">Cash Flow Retention:</span> With the 90% LVR structure, the business retained essential cash flow to sustain daily operations and support growth.
                    </li>
                    <li data-testid="text-outcome-1-3">
                      <span className="font-semibold text-primary">Future Foundation:</span> The client is now building equity in an asset, has stabilized his premises costs, and has a foundation for his next stage of growth.
                    </li>
                    <li data-testid="text-outcome-1-4">
                      <span className="font-semibold text-primary">Ongoing Partnership:</span> We continue to support the client with forward-planning, ensuring their finance strategy evolves with the growth of their business.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeCase === "rapidRefinance" && (
        <>
          <section className="py-12 md:py-16 bg-accent">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
              <div className="text-center mb-8">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Case Study 2
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-3">
                  Rapid Commercial Refinance With Minimal Documents
                </h2>
                <p className="text-muted-foreground text-lg italic max-w-3xl mx-auto">
                  How we secured fast approval for a business whose financial situation had changed — after another lender said no
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
                  <p data-testid="text-intro-2">
                    Refinancing commercial debt can be challenging when a business has experienced fluctuations in trading performance. Many lenders require full financial statements, BAS, and extensive supporting documents. But under the Rapid Refinance process, we were able to obtain approval quickly by providing only the minimum required documents — even after another broker told the client they didn't qualify.
                  </p>

                  <div data-testid="text-goal-2">
                    <p className="font-semibold text-primary mb-3">The Client's Goal:</p>
                    <p className="pl-6 mb-3">
                      The client operated a well-established business but had experienced changes in their financial performance over the last 12 months. Their goal was simple:
                    </p>
                    <ul className="pl-12 space-y-2 mb-4">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Refinance their existing business loan</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Reduce their interest rate and monthly repayments</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Avoid providing extensive financial documents due to timing pressures</span>
                      </li>
                    </ul>
                    <p className="pl-6">
                      They approached another broker first — who told them they <span className="italic">couldn't borrow the amount they needed</span> based on their most recent financials.
                    </p>
                  </div>

                  <div data-testid="text-challenge-2">
                    <p className="font-semibold text-primary mb-3">The Challenge:</p>
                    <p className="pl-6 mb-3">The business experienced:</p>
                    <ul className="pl-12 space-y-2 mb-4">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>A reduction in net profit</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Fluctuating turnover</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Higher expenses in the recent period</span>
                      </li>
                    </ul>
                    <p className="pl-6 mb-3">
                      The previous broker assessed them under a full-documentation lending model and concluded that serviceability <span className="font-semibold text-primary">did not meet standard commercial criteria.</span>
                    </p>
                    <p className="pl-6 font-semibold text-primary">
                      The client came to us concerned they had no options.
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
                    <p className="font-semibold text-primary mb-3">1. Switching to a Rapid Refinance Pathway</p>
                    <p className="pl-6 mb-3">
                      Rather than using traditional full-doc commercial lending, we assessed them under a <span className="font-semibold text-primary">Rapid Refinance</span> model — a lender program requiring only:
                    </p>
                    <ul className="pl-12 space-y-2 mb-3">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>12 months of business loan statements</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Security address, current value, and loan amount</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Basic business financial indicators: turnover, net profit, interest expense, depreciation</span>
                      </li>
                    </ul>
                    <p className="pl-6">
                      This meant the business did <span className="font-semibold text-primary">not</span> need to supply BAS, full financial statements, or personal financials.
                    </p>
                  </div>
                  
                  <div data-testid="text-solution-2-step-2">
                    <p className="font-semibold text-primary mb-3">2. Presenting the Business on Its Strongest Merits</p>
                    <p className="pl-6 mb-3">
                      Although profitability had dropped, the business loan statements demonstrated:
                    </p>
                    <ul className="pl-12 space-y-2 mb-3">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>No missed repayments</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Stable repayment history</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Clear account conduct</span>
                      </li>
                    </ul>
                    <p className="pl-6">
                      This became the core strength of the application.
                    </p>
                  </div>
                  
                  <div data-testid="text-solution-2-step-3">
                    <p className="font-semibold text-primary mb-3">3. Positioning the Refinancing Case Correctly</p>
                    <p className="pl-6 mb-3">
                      We reframed the application using what mattered most under rapid refinance assessment:
                    </p>
                    <ul className="pl-12 space-y-2 mb-3">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Strong security position</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Stable trading income</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Acceptable cash flow trends</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Good repayment conduct</span>
                      </li>
                    </ul>
                    <p className="pl-6">
                      This removed the need for a detailed year-on-year profit analysis.
                    </p>
                  </div>

                  <div data-testid="text-solution-2-step-4">
                    <p className="font-semibold text-primary mb-3">4. Fast Approval Through a Streamlined Lender Process</p>
                    <p className="pl-6 mb-3">
                      With the two essential documents and minimal financial summary, the lender approved the refinance extremely quickly.
                    </p>
                    <p className="pl-6">
                      The client received their formal approval and letter of offer shortly after.
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
                  <ul className="space-y-4 pl-6">
                    <li data-testid="text-outcome-2-1">
                      <span className="font-semibold text-primary">Full Refinance Approval:</span> After another broker said "it can't be done"
                    </li>
                    <li data-testid="text-outcome-2-2">
                      <span className="font-semibold text-primary">No Need for Full Financials:</span> BAS, or personal documents
                    </li>
                    <li data-testid="text-outcome-2-3">
                      <span className="font-semibold text-primary">Lower Repayments:</span> And improved cash flow
                    </li>
                    <li data-testid="text-outcome-2-4">
                      <span className="font-semibold text-primary">Fast Turnaround:</span> Meeting the client's timing requirements
                    </li>
                    <li data-testid="text-outcome-2-5">
                      <span className="font-semibold text-primary">Future Credit Relationship:</span> A lender relationship suitable for future credit needs
                    </li>
                    <li data-testid="text-outcome-2-6">
                      <span className="font-semibold text-primary">Simple, Stress-Free Refinance:</span> Despite recent financial challenges
                    </li>
                  </ul>
                  
                  <p className="mt-6 text-primary font-medium" data-testid="text-outcome-summary-2">
                    The client is now positioned with a more manageable facility and a lender that supports streamlined documentation for future borrowing.
                  </p>
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
              Six-Stage Commercial Lending Process Map
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Our structured approach to commercial property and business finance
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
                    We begin with an in-depth discussion to understand your commercial goals, the purpose of the property purchase or refinance, and the broader financial requirements of your business. This includes reviewing current rental commitments, cash flow needs, business performance, and long-term operational plans. This stage ensures we clearly understand both your immediate objectives and the strategic drivers behind the transaction.
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
                    Information Collection & Preliminary Assessment
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    You'll receive access to the Lyte Financial client portal to upload key documents such as business loan statements, financials, and property details. We assess borrowing capacity, analyse trading performance, evaluate security positions, and determine lender appetite for the scenario. This step allows us to identify opportunities, constraints, and structural requirements early in the process.
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
                    Strategy & Recommendation Session
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Once our analysis is complete, we meet to present a tailored commercial lending strategy. During this session, we walk you through lender options, discuss structure pathways such as SPVs or trust entities, outline potential high-LVR solutions, and compare the impact of each scenario on cash flow and future growth. This collaborative session ensures full clarity and alignment before moving forward.
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
                    Structure Design & Application Submission
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    We finalise the ownership and borrowing structure — whether through a newly created SPV, an existing entity, or a trust arrangement — ensuring it aligns with your commercial objectives and lender policy. We then prepare and submit the commercial lending application, managing communication with lenders, accountants, solicitors, and valuers to ensure the submission is complete, accurate, and positioned for approval.
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
                    Approval, Settlement & Leaseback Execution
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Following approval, we manage all outstanding requirements and coordinate directly with lenders, legal advisers, and relevant stakeholders to finalise the transaction. This includes overseeing valuations, completing entity documentation, and executing any required leaseback arrangements between the trading business and the SPV or property-holding entity. Our goal is a seamless, compliant settlement that supports both business operations and long-term property strategy.
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
                    Our partnership continues well beyond settlement. We provide ongoing rate reviews, facility assessments, structural optimisation, and strategic guidance as your business evolves. Whether planning expansion, future property acquisitions, refinancing, or restructuring of existing facilities, we ensure your commercial finance continues to support your growth, cash flow, and long-term business objectives.
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
