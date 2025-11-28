import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logoImage from "@assets/amended final logo_1763958071951.jpg";

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="w-full px-6 md:px-12">
        <div className="flex items-center justify-between h-32">
          <a href="/" className="hover-elevate active-elevate-2 px-3 py-2 rounded-md">
            <img 
              src={logoImage} 
              alt="Lyte Financial" 
              className="h-[80px]"
              data-testid="logo-image"
            />
          </a>
          
          <nav className="hidden lg:flex items-center gap-10">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="bg-transparent text-primary-foreground text-xl hover-elevate active-elevate-2 px-6 py-4 font-semibold data-[state=open]:bg-transparent"
                    data-testid="dropdown-client-solutions"
                  >
                    Our Client Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex flex-col w-[320px] gap-1 p-3">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/scenarios/business"
                            className="block select-none rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            data-testid="link-business-purchase"
                          >
                            <div className="text-base font-semibold leading-none">Business Purchases and Funding</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/scenarios/residential"
                            className="block select-none rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            data-testid="link-residential-lending"
                          >
                            <div className="text-base font-semibold leading-none">Residential Lending</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/scenarios/commercial"
                            className="block select-none rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            data-testid="link-commercial-property"
                          >
                            <div className="text-base font-semibold leading-none">Commercial Property</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/scenarios/smsf"
                            className="block select-none rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            data-testid="link-smsf-lending"
                          >
                            <div className="text-base font-semibold leading-none">SMSF Lending</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <a 
              href="/team" 
              className="text-xl hover-elevate active-elevate-2 px-6 py-4 rounded-md transition-colors font-semibold"
              data-testid="link-team"
            >
              Meet our Team
            </a>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="bg-transparent text-primary-foreground text-xl hover-elevate active-elevate-2 px-6 py-4 font-semibold data-[state=open]:bg-transparent"
                    data-testid="dropdown-calculators"
                  >
                    Tools and Calculators
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex flex-col w-[320px] gap-1 p-3">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/calculators/borrowing-power"
                            className="block select-none rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            data-testid="link-borrowing-power-calculator"
                          >
                            <div className="text-base font-semibold leading-none">Borrowing Power Calculator</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/calculators/loan-repayment"
                            className="block select-none rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            data-testid="link-loan-repayment-calculator"
                          >
                            <div className="text-base font-semibold leading-none">Loan Repayment Calculator</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/calculators/offset"
                            className="block select-none rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            data-testid="link-offset-calculator"
                          >
                            <div className="text-base font-semibold leading-none">Home Loan Offset Calculator</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/calculators/refinancing"
                            className="block select-none rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            data-testid="link-refinancing-calculator"
                          >
                            <div className="text-base font-semibold leading-none">Refinancing Calculator</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/calculators/stamp-duty"
                            className="block select-none rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            data-testid="link-stamp-duty-calculator"
                          >
                            <div className="text-base font-semibold leading-none">Stamp Duty Calculator</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/calculators/interest-only"
                            className="block select-none rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            data-testid="link-interest-only-calculator"
                          >
                            <div className="text-base font-semibold leading-none">Interest Only Repayment Calculator</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="bg-transparent text-primary-foreground text-xl hover-elevate active-elevate-2 px-6 py-4 font-semibold data-[state=open]:bg-transparent"
                    data-testid="dropdown-booking"
                  >
                    Book A Meeting
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex flex-col w-[320px] gap-1 p-3">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="https://calendly.com/tony-lytefinancial/30min?month=2025-11"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block select-none rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            data-testid="link-book-tony"
                          >
                            <div className="text-base font-semibold leading-none">Book a Meeting with Tony</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <a href="/contact">
              <Button 
                size="lg"
                className="bg-primary-foreground text-primary hover-elevate active-elevate-2 text-xl px-8 py-3"
                data-testid="button-contact"
              >
                Contact Us
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
