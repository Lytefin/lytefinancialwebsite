import Header from "@/components/Header";
import { MapPin, Phone, Mail, Clock, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import tonyPhoto from "@assets/image_1764038248473.png";
import jarredPhoto from "@assets/Jarred Photo_1764038929340.png";
import mathewPhoto from "@assets/Untitled design (4)_1764062211174.png";
import logoImage from "@assets/amended final logo_1763958071951.jpg";

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h1 
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
              data-testid="text-team-title"
            >
              Meet Our Team
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Experienced professionals dedicated to helping you achieve your financial goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card rounded-lg overflow-hidden border border-border shadow-lg" data-testid="card-team-tony">
              <div className="h-80 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
                <img 
                  src={tonyPhoto}
                  alt="Tony Ly - Founder & Director | Finance Broker"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 15%' }}
                  data-testid="img-tony-photo"
                />
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-1">Tony Ly</h2>
                  <p className="text-primary/80 font-medium">Founder & Director | Finance Broker</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Tony founded Lyte Financial to deliver lending solutions beyond standard banking. His expertise spans business acquisitions, commercial property, residential lending, and SMSF structures. Tony's strategic approach and ability to structure complex, multi-layered finance solutions has helped countless clients achieve their ownership goals.
                </p>
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <a href="mailto:tony@lytefinancial.com.au" className="text-muted-foreground hover:text-primary transition-colors">tony@lytefinancial.com.au</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <a href="tel:0455381398" className="text-muted-foreground hover:text-primary transition-colors">0455 381 398</a>
                  </div>
                </div>
                <div className="text-center">
                  <a 
                    href="https://calendly.com/tony-lytefinancial/30min?month=2025-11" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      className="w-full"
                      data-testid="button-book-tony"
                    >
                      Book a meeting with Tony
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border border-border shadow-lg" data-testid="card-team-mathew">
              <div className="h-80 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
                <img 
                  src={mathewPhoto}
                  alt="Mathew Hall - Advisory Chairman"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 15%' }}
                  data-testid="img-mathew-photo"
                />
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-1">Mathew Hall</h2>
                  <p className="text-primary/80 font-medium">Advisory Chairman</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Mathew brings over 17 years of senior leadership in banking and finance. Having held senior positions at large residential and commercial broking organisations, he provides strategic guidance and deep industry insight. His expertise in lending markets and institutional relationships strengthens Lyte Financial's sophisticated solutions.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <a href="mailto:mathew@lytefinancial.com.au" className="text-muted-foreground hover:text-primary transition-colors">mathew@lytefinancial.com.au</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <a href="tel:0437591747" className="text-muted-foreground hover:text-primary transition-colors">0437 591 747</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border border-border shadow-lg" data-testid="card-team-jarred">
              <div className="h-80 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
                <img 
                  src={jarredPhoto}
                  alt="Jarred Aranza - Operations Manager"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 20%' }}
                  data-testid="img-jarred-photo"
                />
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-1">Jarred Aranza</h2>
                  <p className="text-primary/80 font-medium">Operations Manager</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Jarred ensures every application progresses smoothly from consultation to settlement. Known for his precision and organisation, he manages documentation, lender communication, and compliance with ease. His proactive, approachable style ensures clients feel supported, informed, and confident at every stage of their lending journey.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <a href="mailto:jarred@lytefinancial.com.au" className="text-muted-foreground hover:text-primary transition-colors">jarred@lytefinancial.com.au</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <a href="tel:0290993613" className="text-muted-foreground hover:text-primary transition-colors">(02) 9099 3613</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
