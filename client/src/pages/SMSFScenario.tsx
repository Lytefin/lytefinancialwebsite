import Header from "@/components/Header";
import { Target, Lightbulb } from "lucide-react";
import heroImage from "@assets/SMSF COMMERCIAL 1_1763875933787.jpg";

export default function SMSFScenario() {
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
          <div className="max-w-4xl mx-auto">
            <h1 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white"
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
                  className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
                  data-testid="text-goal-title"
                >
                  The Client's Goal
                </h2>
              </div>
            </div>
            
            <div className="space-y-4 text-primary text-base md:text-lg leading-relaxed">
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
                  className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
                  data-testid="text-solution-title"
                >
                  Our Strategic Solution
                </h2>
              </div>
            </div>
            
            <div className="space-y-6 text-primary text-base md:text-lg leading-relaxed">
              <p data-testid="text-solution-intro">
                Our expertise was in guiding the clients on the right structure before the finance was even discussed. We collaborated closely with their accountant to develop a solution.
              </p>
              
              <p className="font-semibold text-primary" data-testid="text-solution-answer">
                The answer was a Unit Trust. This is how we implemented it:
              </p>
              
              <ul className="space-y-4 pl-6">
                <li className="flex gap-3" data-testid="text-solution-step-1">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span><strong className="text-primary">Establishment of a Unit Trust:</strong> A new Unit Trust was established specifically for the purpose of holding the asset.</span>
                </li>
                
                <li className="flex gap-3" data-testid="text-solution-step-2">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span><strong className="text-primary">SMSF Investment:</strong> The two business partners' individual SMSFs each invested in the trust, acquiring an equal share of the units.</span>
                </li>
                
                <li className="flex gap-3" data-testid="text-solution-step-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span><strong className="text-primary">The Purchase:</strong> This Unit Trust (now funded by the two SMSFs) became the legal purchasing entity that acquired the new commercial property.</span>
                </li>
              </ul>
              
              <p className="pt-4" data-testid="text-solution-conclusion">
                With this compliant and clear structure in place, we were able to facilitate the lending required for the Unit Trust to complete the transaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
