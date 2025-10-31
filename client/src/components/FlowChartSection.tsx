import { Card } from "@/components/ui/card";

const highlights = [
  {
    title: "Commercial Lending isn't difficult",
    description: "Did you know lenders can be more generous with commercial lending than residential offering up to 90-100% of the purchase price for new commercial property purchases?"
  },
  {
    title: "All you need is a Plan",
    description: "This is where the team at Lyte review your entire position to provide you with the most creative strategies in the market."
  },
  {
    title: "to have Every Option at Your Fingertips",
    description: "Lyte utilises every lender from the 'Big 4' down to family offices to ensure you have all options at your fingertips."
  }
];

export default function FlowChartSection() {
  return (
    <section id="flow-chart" className="py-16 md:py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            data-testid="text-flowchart-title"
          >
            Bespoke Lending Strategies for your new commercial acquisition
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((highlight, index) => (
            <Card 
              key={index}
              className="p-8 hover-elevate"
              data-testid={`card-highlight-${index + 1}`}
            >
              <h3 
                className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4"
                data-testid={`text-highlight-title-${index + 1}`}
              >
                {highlight.title}
              </h3>
              <p 
                className="text-muted-foreground text-base md:text-lg leading-relaxed"
                data-testid={`text-highlight-description-${index + 1}`}
              >
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
