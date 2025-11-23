import { Card } from "@/components/ui/card";
import { Building2, Users, Briefcase, Home } from "lucide-react";
import { useLocation } from "wouter";
import Header from "@/components/Header";

const scenarios = [
  {
    icon: Home,
    title: "Residential Lending Scenario",
    description: "See how we helped a couple purchase their new home while holding their existing property through bridging finance.",
    path: "/scenarios/residential",
    testId: "card-residential-scenario"
  },
  {
    icon: Users,
    title: "SMSF Scenario",
    description: "Discover how we helped business partners use their SMSFs to acquire commercial property through smart structuring.",
    path: "/scenarios/smsf",
    testId: "card-smsf-scenario"
  },
  {
    icon: Building2,
    title: "Commercial Scenario",
    description: "See how we secured 100% financing for a major commercial property acquisition to fuel business growth.",
    path: "/scenarios/commercial",
    testId: "card-commercial-scenario"
  },
  {
    icon: Briefcase,
    title: "Business Lending Scenario",
    description: "Learn how we helped a senior manager transition to business ownership with strategic financing.",
    path: "/scenarios/business",
    testId: "card-business-scenario"
  }
];

export default function Scenarios() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h1 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
              data-testid="text-scenarios-page-title"
            >
              Client Success Scenarios
            </h1>
            <p 
              className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto"
              data-testid="text-scenarios-page-subtitle"
            >
              Real-world examples of how Lyte Financial delivers innovative solutions for complex financing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scenarios.map((scenario) => {
              const Icon = scenario.icon;
              return (
                <Card 
                  key={scenario.path}
                  className="p-8 cursor-pointer hover-elevate active-elevate-2"
                  onClick={() => setLocation(scenario.path)}
                  data-testid={scenario.testId}
                >
                  <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
                    {scenario.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-center">
                    {scenario.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
