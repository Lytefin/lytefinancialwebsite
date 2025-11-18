import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="w-full px-6 md:px-12">
        <div className="flex items-center justify-between h-24">
          <a href="/" className="flex items-center gap-3 hover-elevate active-elevate-2 px-3 py-2 rounded-md -ml-3">
            <Building2 className="h-10 w-10" data-testid="logo-icon" />
            <div className="flex flex-col leading-none" data-testid="text-brand">
              <span className="font-serif text-3xl font-bold tracking-wide">
                LYTE
              </span>
              <span className="font-serif text-xs font-normal tracking-widest -mt-1">
                FINANCIAL
              </span>
            </div>
          </a>
          
          <nav className="hidden lg:flex items-center gap-10">
            <a 
              href="#about" 
              className="text-lg hover-elevate active-elevate-2 px-5 py-3 rounded-md transition-colors font-semibold"
              data-testid="link-about"
            >
              About
            </a>
            <a 
              href="#team" 
              className="text-lg hover-elevate active-elevate-2 px-5 py-3 rounded-md transition-colors font-semibold"
              data-testid="link-team"
            >
              Meet our Team
            </a>
            <a 
              href="#advantage" 
              className="text-lg hover-elevate active-elevate-2 px-5 py-3 rounded-md transition-colors font-semibold"
              data-testid="link-advantage"
            >
              The Business Advantage
            </a>
            <a 
              href="#booking" 
              className="text-lg hover-elevate active-elevate-2 px-5 py-3 rounded-md transition-colors font-semibold"
              data-testid="link-booking"
            >
              Book a Meeting
            </a>
            <Button 
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover-elevate active-elevate-2 text-lg px-6"
              data-testid="button-contact"
            >
              <a href="/contact">
                Contact
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
