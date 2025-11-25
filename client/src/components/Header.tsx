import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ContactDialog from "@/components/ContactDialog";
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
              className="h-[61px]"
              data-testid="logo-image"
            />
          </a>
          
          <nav className="hidden lg:flex items-center gap-10">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="bg-transparent text-primary-foreground text-lg hover-elevate active-elevate-2 px-5 py-3 font-semibold data-[state=open]:bg-transparent"
                    data-testid="dropdown-client-solutions"
                  >
                    Our Client Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex flex-col w-[280px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/scenarios/business"
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            data-testid="link-business-purchase"
                          >
                            <div className="text-sm font-semibold leading-none">Business Purchases and Funding</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/scenarios/residential"
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            data-testid="link-residential-lending"
                          >
                            <div className="text-sm font-semibold leading-none">Residential Lending</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/scenarios/commercial"
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            data-testid="link-commercial-property"
                          >
                            <div className="text-sm font-semibold leading-none">Commercial Property</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="/scenarios/smsf"
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            data-testid="link-smsf-lending"
                          >
                            <div className="text-sm font-semibold leading-none">SMSF Lending</div>
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
              className="text-lg hover-elevate active-elevate-2 px-5 py-3 rounded-md transition-colors font-semibold"
              data-testid="link-team"
            >
              Meet our Team
            </a>
            <a 
              href="/calculator" 
              className="text-lg hover-elevate active-elevate-2 px-5 py-3 rounded-md transition-colors font-semibold"
              data-testid="link-calculator"
            >
              Tools and Calculators
            </a>
            <a 
              href="#booking" 
              className="text-lg hover-elevate active-elevate-2 px-5 py-3 rounded-md transition-colors font-semibold"
              data-testid="link-booking"
            >
              Book a Meeting
            </a>
            <ContactDialog 
              trigger={
                <Button 
                  size="lg"
                  className="bg-primary-foreground text-primary hover-elevate active-elevate-2 text-lg px-6"
                  data-testid="button-contact"
                >
                  Contact
                </Button>
              }
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
