import { Building2 } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="w-full px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3 hover-elevate active-elevate-2 px-3 py-2 rounded-md -ml-3">
            <Building2 className="h-8 w-8" data-testid="logo-icon" />
            <span className="font-serif text-xl font-semibold" data-testid="text-brand">
              LYTE FINANCIAL
            </span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="/" 
              className="text-sm hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
              data-testid="link-home"
            >
              Home
            </a>
            <a 
              href="/scenarios" 
              className="text-sm hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
              data-testid="link-scenarios"
            >
              Scenarios
            </a>
            <a 
              href="/contact" 
              className="text-sm hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
              data-testid="link-contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
