import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Team from "@/pages/Team";
import MortgageCalculator from "@/pages/MortgageCalculator";
import Scenarios from "@/pages/Scenarios";
import SMSFScenario from "@/pages/SMSFScenario";
import SMSFResidentialScenario from "@/pages/SMSFResidentialScenario";
import CommercialScenario from "@/pages/CommercialScenario";
import BusinessScenario from "@/pages/BusinessScenario";
import ResidentialScenario from "@/pages/ResidentialScenario";
import BusinessPurchase from "@/pages/BusinessPurchase";
import BusinessProcess from "@/pages/BusinessProcess";
import ResidentialLending from "@/pages/ResidentialLending";
import ResidentialProcess from "@/pages/ResidentialProcess";
import CommercialProperty from "@/pages/CommercialProperty";
import CommercialProcess from "@/pages/CommercialProcess";
import SMSFLending from "@/pages/SMSFLending";
import SMSFProcess from "@/pages/SMSFProcess";
import BorrowingPowerCalculator from "@/pages/BorrowingPowerCalculator";
import LoanRepaymentCalculator from "@/pages/LoanRepaymentCalculator";
import OffsetCalculator from "@/pages/OffsetCalculator";
import RefinancingCalculator from "@/pages/RefinancingCalculator";
import StampDutyCalculator from "@/pages/StampDutyCalculator";
import InterestOnlyCalculator from "@/pages/InterestOnlyCalculator";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/team" component={Team} />
      <Route path="/calculator" component={MortgageCalculator} />
      <Route path="/business-purchase" component={BusinessPurchase} />
      <Route path="/business-process" component={BusinessProcess} />
      <Route path="/residential-lending" component={ResidentialLending} />
      <Route path="/residential-process" component={ResidentialProcess} />
      <Route path="/commercial-property" component={CommercialProperty} />
      <Route path="/commercial-process" component={CommercialProcess} />
      <Route path="/smsf-lending" component={SMSFLending} />
      <Route path="/smsf-process" component={SMSFProcess} />
      <Route path="/calculators/borrowing-power" component={BorrowingPowerCalculator} />
      <Route path="/calculators/loan-repayment" component={LoanRepaymentCalculator} />
      <Route path="/calculators/offset" component={OffsetCalculator} />
      <Route path="/calculators/refinancing" component={RefinancingCalculator} />
      <Route path="/calculators/stamp-duty" component={StampDutyCalculator} />
      <Route path="/calculators/interest-only" component={InterestOnlyCalculator} />
      <Route path="/scenarios" component={Scenarios} />
      <Route path="/scenarios/smsf" component={SMSFScenario} />
      <Route path="/scenarios/smsf-residential" component={SMSFResidentialScenario} />
      <Route path="/scenarios/commercial" component={CommercialScenario} />
      <Route path="/scenarios/business" component={BusinessScenario} />
      <Route path="/scenarios/residential" component={ResidentialScenario} />
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
