import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h1 
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
              data-testid="text-team-title"
            >
              Meet Our Team
            </h1>
            <p 
              className="text-primary-foreground text-lg md:text-xl max-w-3xl mx-auto"
              data-testid="text-team-description"
            >
              Our experienced team is dedicated to providing exceptional financial solutions tailored to your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <Card className="p-8 bg-primary" data-testid="card-team-member-1">
              <div className="flex justify-center mb-6">
                <div className="h-24 w-24 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <User className="h-12 w-12 text-primary-foreground" />
                </div>
              </div>
              <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-2 text-center">
                Tony Ly
              </h2>
              <p className="text-primary-foreground text-xl font-medium text-center mb-4">
                Founder and Director
              </p>
              <p className="text-primary-foreground text-base leading-relaxed text-center">
                Leading Lyte Financial with extensive expertise in business lending and financial advisory services.
              </p>
            </Card>

            <Card className="p-8 bg-primary" data-testid="card-team-member-2">
              <div className="flex justify-center mb-6">
                <div className="h-24 w-24 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <User className="h-12 w-12 text-primary-foreground" />
                </div>
              </div>
              <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-2 text-center">
                Jarred
              </h2>
              <p className="text-primary-foreground text-xl font-medium text-center mb-4">
                Operations Manager
              </p>
              <p className="text-primary-foreground text-base leading-relaxed text-center">
                Ensuring seamless operations and exceptional client service across all Lyte Financial solutions.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
