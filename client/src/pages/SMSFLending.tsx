import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { FileText, ListChecks, Home } from "lucide-react";
import smsfBanner from "@assets/stock_images/retirement_planning__a2c10d4c.jpg";

export default function SMSFLending() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section 
        className="relative py-24 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${smsfBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <h1 
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
              data-testid="text-title"
            >
              SMSF Lending
            </h1>
            <p 
              className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto"
              data-testid="text-description"
            >
              Navigate complex SMSF structures to leverage your superannuation for property investment
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-6xl mx-auto px-6 md:px-12">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <Card 
              className="p-10 bg-primary hover-elevate active-elevate-2 cursor-pointer" 
              onClick={() => setLocation('/scenarios/smsf-residential')}
              data-testid="card-residential"
            >
              <div className="flex justify-center mb-6">
                <div className="h-20 w-20 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Home className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>
              <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-4 text-center">
                SMSF residential purchase example
              </h2>
              <p className="text-primary-foreground text-base leading-relaxed text-center">
                Real client example of SMSF residential property purchase
              </p>
            </Card>

            <Card 
              className="p-10 bg-primary hover-elevate active-elevate-2 cursor-pointer" 
              onClick={() => setLocation('/scenarios/smsf')}
              data-testid="card-commercial"
            >
              <div className="flex justify-center mb-6">
                <div className="h-20 w-20 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <FileText className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>
              <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-4 text-center">
                SMSF Commercial Purchase example
              </h2>
              <p className="text-primary-foreground text-base leading-relaxed text-center">
                Real client example of SMSF commercial property purchase
              </p>
            </Card>

            <Card 
              className="p-10 bg-primary hover-elevate active-elevate-2 cursor-pointer" 
              onClick={() => setLocation('/smsf-process')}
              data-testid="card-process"
            >
              <div className="flex justify-center mb-6">
                <div className="h-20 w-20 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <ListChecks className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>
              <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-4 text-center">
                SMSF process
              </h2>
              <p className="text-primary-foreground text-base leading-relaxed text-center">
                Learn about our SMSF lending process and requirements
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
