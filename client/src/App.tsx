import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Scenarios from "@/pages/Scenarios";
import SMSFScenario from "@/pages/SMSFScenario";
import CommercialScenario from "@/pages/CommercialScenario";
import BusinessScenario from "@/pages/BusinessScenario";
import BusinessAcquisition from "@/pages/BusinessAcquisition";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/business-acquisition" component={BusinessAcquisition} />
      <Route path="/scenarios" component={Scenarios} />
      <Route path="/scenarios/smsf" component={SMSFScenario} />
      <Route path="/scenarios/commercial" component={CommercialScenario} />
      <Route path="/scenarios/business" component={BusinessScenario} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
