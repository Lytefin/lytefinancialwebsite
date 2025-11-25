import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Building2, Users, TrendingUp, Home as HomeIcon, Star, MapPin, Phone, Mail, Clock } from "lucide-react";
import heroImage from "@assets/image_1763875547582.png";
import mapImage from "@assets/image_1763878897395.png";
import logoImage from "@assets/amended final logo_1763958071951.jpg";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import cbaLogo from '@assets/stock_images/commonwealth_bank_of_cd95a3e1.jpg';
import ingLogo from '@assets/stock_images/ing_bank_logo_austra_c9ff6c0c.jpg';
import westpacLogo from '@assets/stock_images/westpac_bank_logo_au_379b9359.jpg';
import stGeorgeLogo from '@assets/stock_images/st_george_bank_logo__13ba4291.jpg';
import judoLogo from '@assets/stock_images/judo_bank_logo_austr_67cb11e4.jpg';
import ampLogo from '@assets/stock_images/amp_bank_logo_austra_5f491124.jpg';
import constructionImage from '@assets/stock_images/construction_site_wo_d72f9b16.jpg';
import lendingPanel1 from '@assets/LENDING PANEL 1_1764039226168.jpg';
import lendingPanel2 from '@assets/LENDING PANEL 2_1764039230870.jpg';
import lendingPanel3 from '@assets/LENDING PANEL 3_1764039235261.jpg';
import lyteMap from '@assets/LYTE MAP_1763893148700.jpg';

const reviews = [
  {
    id: 1,
    author: "Sarah Mitchell",
    text: "Tony and his team at Lyte Financial made purchasing my first investment property seamless. Their expertise in navigating complex lending scenarios is unmatched. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    author: "James Robertson",
    text: "Exceptional service from start to finish. Jarred's deep understanding of SMSF lending helped us secure the perfect commercial property for our fund. Professional and efficient!",
    rating: 5,
  },
  {
    id: 3,
    author: "Emily Chen",
    text: "I was struggling to get business acquisition funding approved elsewhere. Lyte Financial found me a solution within days. Their industry knowledge and connections are impressive.",
    rating: 5,
  },
  {
    id: 4,
    author: "Michael Thompson",
    text: "The mortgage calculator on their website gave me a great starting point, but the personalized service from Tony exceeded all expectations. Got me a fantastic rate!",
    rating: 5,
  },
  {
    id: 5,
    author: "Lisa Patterson",
    text: "From residential to commercial property lending, Lyte Financial handled everything with professionalism. They simplified what seemed like an impossible process. Thank you!",
    rating: 5,
  },
];

const banks = [
  { id: 1, name: "Commonwealth Bank", logo: cbaLogo },
  { id: 2, name: "ING", logo: ingLogo },
  { id: 3, name: "Westpac", logo: westpacLogo },
  { id: 4, name: "St George", logo: stGeorgeLogo },
  { id: 5, name: "Judo Bank", logo: judoLogo },
  { id: 6, name: "AMP", logo: ampLogo },
];

const lendingPanels = [
  { id: 1, image: lendingPanel1 },
  { id: 2, image: lendingPanel2 },
  { id: 3, image: lendingPanel3 },
];

export default function Home() {
  const [, setLocation] = useLocation();
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [emblaBankRef] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative h-[44vh] min-h-[330px] flex items-start justify-start overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          data-testid="img-hero-background"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/50" />
        
        <div className="relative z-10 w-full px-6 md:px-12 pt-16 md:pt-24">
          <div className="max-w-2xl text-primary-foreground">
            <h1 
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight whitespace-nowrap"
              data-testid="text-hero-title"
            >
              Simplifying the Complex
            </h1>
            <p 
              className="text-xl md:text-2xl font-medium tracking-wide"
              data-testid="text-hero-tagline"
            >
              A funding solution for everything.
            </p>
          </div>
        </div>
      </section>

      <section className="relative pt-10 pb-16 md:pt-14 md:pb-24 bg-accent overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${constructionImage})` }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
              data-testid="text-services-title"
            >
              OUR REAL TIME CLIENT SOLUTIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Card 
              className="p-8 bg-primary hover-elevate active-elevate-2 cursor-pointer" 
              onClick={() => setLocation('/scenarios/business')}
              data-testid="card-service-1"
            >
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary-foreground text-center">
                Business Purchases and Funding
              </h3>
            </Card>

            <Card 
              className="p-8 bg-primary hover-elevate active-elevate-2 cursor-pointer" 
              onClick={() => setLocation('/scenarios/residential')}
              data-testid="card-service-2"
            >
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <HomeIcon className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary-foreground text-center">
                Residential Lending
              </h3>
            </Card>

            <Card 
              className="p-8 bg-primary hover-elevate active-elevate-2 cursor-pointer" 
              onClick={() => setLocation('/scenarios/commercial')}
              data-testid="card-service-3"
            >
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary-foreground text-center">
                Commercial Property
              </h3>
            </Card>

            <Card 
              className="p-8 bg-primary hover-elevate active-elevate-2 cursor-pointer" 
              onClick={() => setLocation('/scenarios/smsf')}
              data-testid="card-service-4"
            >
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary-foreground text-center">
                SMSF Lending
              </h3>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary" data-testid="section-reviews">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4"
              data-testid="text-reviews-title"
            >
              What Our Clients Say
            </h2>
            <div className="flex justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className="h-6 w-6 fill-primary-foreground text-primary-foreground" 
                />
              ))}
            </div>
            <p className="text-primary-foreground text-lg">
              5-Star Google Reviews
            </p>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
                  data-testid={`review-card-${review.id}`}
                >
                  <Card className="p-6 h-full bg-white">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className="h-5 w-5 fill-primary text-primary" 
                        />
                      ))}
                    </div>
                    <p className="text-primary text-base leading-relaxed mb-4">
                      "{review.text}"
                    </p>
                    <p className="text-primary font-semibold">
                      {review.author}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-accent" data-testid="section-banks">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <h2 
              className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2"
              data-testid="text-banks-title"
            >
              Trusted Lending Partners
            </h2>
            <p className="text-primary text-lg font-semibold mb-6">
              OVER 75+ LENDERS PROVIDING UNIQUE CLIENT SOLUTIONS
            </p>
          </div>

          <div className="overflow-hidden max-w-5xl mx-auto" ref={emblaBankRef}>
            <div className="flex">
              {lendingPanels.map((panel) => (
                <div
                  key={panel.id}
                  className="flex-[0_0_100%] min-w-0 pl-4"
                  data-testid={`lending-panel-${panel.id}`}
                >
                  <img
                    src={panel.image}
                    alt={`Lending Partners Panel ${panel.id}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full" data-testid="section-map">
        <img
          src={lyteMap}
          alt="Lyte Financial Location Map"
          className="w-full h-auto"
          data-testid="img-location-map"
        />
      </section>

      <footer className="relative" data-testid="footer">
        <div className="bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div>
                <img 
                  src={logoImage}
                  alt="Lyte Financial"
                  className="h-[70px] mb-6"
                  data-testid="footer-logo"
                />
              </div>

              <div>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">526/368 Sussex Street</p>
                    <p>Sydney, NSW, 2000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <a href="tel:0290993613" className="hover:underline">(02) 9099 3613</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <a href="mailto:info@lytefinancial.com.au" className="hover:underline">info@lytefinancial.com.au</a>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><span className="font-semibold">Mon - Fri:</span> 8:00 AM - 6:00 PM</p>
                    <p className="mb-1"><span className="font-semibold">Sat:</span> 8:00 AM - 11:00 AM</p>
                    <p><span className="font-semibold">Sun:</span> Closed</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button 
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  onClick={() => setLocation('/contact')}
                  data-testid="button-schedule-meeting"
                >
                  Schedule a Meeting
                </Button>
              </div>
            </div>

            <div className="border-t border-primary-foreground/20 pt-6">
              <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                <a href="/" className="hover:underline">Home</a>
                <a href="/team" className="hover:underline">About Us</a>
                <a href="/scenarios/business" className="hover:underline">Business & SME Lending</a>
                <a href="/scenarios/commercial" className="hover:underline">Commercial Lending</a>
                <a href="/scenarios/residential" className="hover:underline">Residential Lending</a>
                <a href="/scenarios/smsf" className="hover:underline">SMSF Lending</a>
                <a href="#" className="hover:underline">Financial Strategy</a>
                <a href="/calculator" className="hover:underline">Tools & Calculator</a>
                <a href="#booking" className="hover:underline">Book a Meeting</a>
                <a href="/contact" className="hover:underline">Contact Us</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
