import Header from "@/components/Header";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/amended final logo_1763958071951.jpg";

export default function RefinancingCalculator() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1 flex flex-col items-center py-8 px-4">
        <div className="text-center mb-6">
          <h1 
            className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2"
            data-testid="text-calculator-title"
          >
            Refinancing Calculator
          </h1>
          <p 
            className="text-muted-foreground max-w-xl mx-auto"
            data-testid="text-calculator-description"
          >
            Compare loan options to see if refinancing could save you money
          </p>
        </div>
        
        <div className="w-full max-w-[1800px] flex justify-center px-6">
          <iframe 
            className="VisiCalcClass"
            id="Loan_Comparison_Calculator" 
            src="https://www.visionabacus.net/Tools/B3/SuiteA/Z200/MFAA/Loan_Comparison_Calculator/BlueGrey" 
            frameBorder="0" 
            scrolling="no"
            style={{ width: '100%', minHeight: '900px' }}
            title="Refinancing Calculator"
            data-testid="iframe-refinancing-calculator"
          />
        </div>
      </div>

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
