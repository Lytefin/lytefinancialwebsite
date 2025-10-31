import StageCard from "./StageCard";

const stages = [
  {
    number: 1,
    title: "Discovery",
    description: "We discuss your current scenario, assessing your existing business performance for lending purposes or reviewing your PAYG experience to support a new business purchase application."
  },
  {
    number: 2,
    title: "Review of Premises or Business to be Purchased",
    description: "We dive deeper into the new business or property being acquired — reviewing financials, EBIT multiples, and considering multiple structural options for your purchase."
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

export default function FlowChartSection() {
  return (
    <section id="flow-chart" className="py-16 md:py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            data-testid="text-flowchart-title"
          >
            Our 5-Stage Lending Process
          </h2>
          <p 
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto"
            data-testid="text-flowchart-subtitle"
          >
            A comprehensive, step-by-step approach to securing your business funding
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stages.slice(0, 3).map((stage) => (
              <StageCard
                key={stage.number}
                stageNumber={stage.number}
                title={stage.title}
                description={stage.description}
              />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {stages.slice(3, 5).map((stage) => (
              <StageCard
                key={stage.number}
                stageNumber={stage.number}
                title={stage.title}
                description={stage.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
