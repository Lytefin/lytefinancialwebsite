import Header from "@/components/Header";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState<string>("500000");
  const [interestRate, setInterestRate] = useState<string>("6.5");
  const [loanTerm, setLoanTerm] = useState<string>("30");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);

  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const payments = parseFloat(loanTerm) * 12;

    if (principal && rate && payments) {
      const x = Math.pow(1 + rate, payments);
      const monthly = (principal * rate * x) / (x - 1);
      const total = monthly * payments;
      const interest = total - principal;

      setMonthlyPayment(monthly);
      setTotalInterest(interest);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calculator className="h-12 w-12 text-primary-foreground" />
              <h1 
                className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground"
                data-testid="text-calculator-title"
              >
                Mortgage Calculator
              </h1>
            </div>
            <p className="text-primary-foreground text-lg">
              Estimate your monthly mortgage payments
            </p>
          </div>

          <Card className="p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <Label htmlFor="loan-amount" className="text-lg font-semibold mb-2 block">
                  Loan Amount
                </Label>
                <Input
                  id="loan-amount"
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  placeholder="500000"
                  className="text-lg"
                  data-testid="input-loan-amount"
                />
              </div>

              <div>
                <Label htmlFor="interest-rate" className="text-lg font-semibold mb-2 block">
                  Interest Rate (% per year)
                </Label>
                <Input
                  id="interest-rate"
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="6.5"
                  className="text-lg"
                  data-testid="input-interest-rate"
                />
              </div>

              <div>
                <Label htmlFor="loan-term" className="text-lg font-semibold mb-2 block">
                  Loan Term (years)
                </Label>
                <Input
                  id="loan-term"
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  placeholder="30"
                  className="text-lg"
                  data-testid="input-loan-term"
                />
              </div>

              <Button
                onClick={calculateMortgage}
                size="lg"
                className="w-full text-lg bg-primary text-primary-foreground hover-elevate active-elevate-2"
                data-testid="button-calculate"
              >
                Calculate
              </Button>

              {monthlyPayment !== null && (
                <div className="mt-8 space-y-4">
                  <div className="bg-accent p-6 rounded-md">
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Monthly Payment
                    </p>
                    <p 
                      className="text-3xl font-bold text-primary"
                      data-testid="text-monthly-payment"
                    >
                      {formatCurrency(monthlyPayment)}
                    </p>
                  </div>

                  <div className="bg-accent p-6 rounded-md">
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Total Interest Paid
                    </p>
                    <p 
                      className="text-2xl font-bold text-primary"
                      data-testid="text-total-interest"
                    >
                      {formatCurrency(totalInterest || 0)}
                    </p>
                  </div>

                  <div className="bg-accent p-6 rounded-md">
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Total Amount Paid
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {formatCurrency((monthlyPayment * parseFloat(loanTerm) * 12))}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
