import { Button } from "@/components/ui/button";
import logoImage from "@assets/image_1763875111843.png";

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="w-full px-6 md:px-12">
        <div className="flex items-center justify-between h-32">
          <a href="/" className="flex items-center hover-elevate active-elevate-2 px-3 py-2 rounded-md -ml-3">
            <img 
              src={logoImage} 
              alt="Lyte Financial" 
              className="h-20"
              data-testid="logo-image"
            />
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
              href="/team" 
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
