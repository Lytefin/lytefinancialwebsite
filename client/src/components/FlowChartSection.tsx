import { Card } from "@/components/ui/card";
import { Target, Lightbulb, TrendingUp } from "lucide-react";

const sections = [
  {
    icon: Target,
    title: "The Client's Goal",
    content: "A client with a successful, long-term career in senior management approached us. He had identified a prime opportunity to purchase an engineering workshop, but he had never been self-employed.\n\nThe target business was an attractive investment because it was already operating effectively under management, with key personnel, established contracts, and a solid daily operational structure.\n\nThe client's goal was to secure the funding needed to acquire the business and make the leap from employee to full-time owner-operator. The challenge was proving his suitability to the lender, given his lack of direct business ownership experience."
  },
  {
    icon: Lightbulb,
    title: "Our Strategic Solution",
    content: "Our solution focused on demonstrating that the client's corporate skills were directly transferable and mitigated the \"first-time buyer\" risk.\n\n• Mitigating the Experience Gap: We didn't just present him as an employee. We built a strong case highlighting his senior management experience, which included oversight of director reports, managing large budgets, and accountability for KPIs. We successfully demonstrated that these skills made him ideally suited to take over the director-level duties and work cohesively with the workshop's existing operations manager.\n\n• Detailed Business Assessment: We thoroughly assessed the workshop's financials, supply chains, product demand, and key accounts to prove its viability.\n\n• A Multi-Layered Funding Structure: We overlaid the applicant's proven experience onto the business's solid structure. With this strong foundation, we structured the finance package by drawing from multiple sources to finalise the full amount:\n   - Property Equity: We accessed equity from the applicant's existing properties.\n   - Cash Contribution: We factored in the applicant's own cash contribution.\n   - Business Assets: We secured the final portion of the loan via a charge over the high-value vehicles and equipment within the engineering business itself."
  },
  {
    icon: TrendingUp,
    title: "The Tangible Outcome for Our Client",
    content: "• Acquisition Funded: Our comprehensive strategy successfully secured the full funding package required for the purchase.\n\n• A New Career Path: The client was able to confidently exit his long-term employment and transition directly into the full-time management and ownership of his new business.\n\n• Smart Leverage: Instead of relying solely on his personal property, we used the business's own assets to help fund its acquisition, creating a more balanced and intelligent financial structure for his new venture."
  }
];

export default function FlowChartSection() {
  return (
    <section id="flow-chart" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card 
                key={index}
                className="p-8 md:p-10"
                data-testid={`card-section-${index + 1}`}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 
                      className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4"
                      data-testid={`text-section-title-${index + 1}`}
                    >
                      {section.title}
                    </h2>
                    <div 
                      className="text-muted-foreground text-base md:text-lg leading-relaxed whitespace-pre-line"
                      data-testid={`text-section-content-${index + 1}`}
                    >
                      {section.content}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
