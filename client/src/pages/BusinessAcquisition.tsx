import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { ArrowDown } from "lucide-react";
import heroImage from "@assets/generated_images/Business_professionals_meeting_collaboration_1b42b8f6.png";

const stages = [
  {
    number: 1,
    title: "Discovery",
    description: "We discuss your current scenario, assessing your existing business performance for lending purposes or reviewing your P&YG experience to support a new business purchase application."
  },
  {
    number: 2,
    title: "Review of Premises or Business to be Purchased",
    description: "We dive deeper into the new business being sold or purchased — reviewing financials, EBIT multiples, and considering multiple structural options for your purchase."
  },
  {
    number: 3,
    title: "Preparation of Your Commercial Credit Proposal",
    description: "A detailed, comprehensive credit proposal is crafted, analyzing every aspect of your scenario and business to ensure the strongest possible lending application."
  },
  {
    number: 4,
    title: "Managing the Lending Process",
    description: "We liaise with the chosen lender to manage and streamline the process through to settlement, ensuring an efficient, stress-free experience."
  },
  {
    number: 5,
    title: "Ongoing Advice",
    description: "We build on our initial discussions and medium-term planning to make sure your business and lending structures position you for long-term success."
  }
];

export default function BusinessAcquisition() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          data-testid="img-hero-background"
        />
        
        <div className="absolute inset-0 bg-primary/80" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight"
            data-testid="text-hero-title"
          >
            From purchasing your first business to acquiring your next, Lyte has the expertise to deliver.
          </h1>
          <Button 
            size="lg"
            onClick={() => setLocation('/contact')}
            className="bg-primary-foreground text-primary hover-elevate active-elevate-2 font-medium text-base px-8"
            data-testid="button-start-journey"
          >
            Start Your Funding Journey
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
              data-testid="text-process-title"
            >
              Our 5 Stage Business Lending Process
            </h2>
            <p 
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
              data-testid="text-process-subtitle"
            >
              A comprehensive, step-by-step approach to securing your business funding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stages.slice(0, 3).map((stage) => (
              <Card 
                key={stage.number}
                className="p-8 bg-primary text-primary-foreground"
                data-testid={`card-stage-${stage.number}`}
              >
                <div className="mb-4">
                  <span className="text-sm font-medium opacity-80">Stage {stage.number}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">
                  {stage.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-90">
                  {stage.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mb-8">
            <ArrowDown className="h-8 w-8 text-muted-foreground" data-testid="icon-arrow-down" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {stages.slice(3).map((stage) => (
              <Card 
                key={stage.number}
                className="p-8 bg-primary text-primary-foreground"
                data-testid={`card-stage-${stage.number}`}
              >
                <div className="mb-4">
                  <span className="text-sm font-medium opacity-80">Stage {stage.number}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">
                  {stage.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-90">
                  {stage.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
