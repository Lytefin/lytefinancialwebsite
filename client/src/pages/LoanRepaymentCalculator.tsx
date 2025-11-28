import Header from "@/components/Header";

export default function LoanRepaymentCalculator() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1 flex flex-col items-center py-8 px-4">
        <div className="text-center mb-6">
          <h1 
            className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2"
            data-testid="text-calculator-title"
          >
            Loan Repayment Calculator
          </h1>
          <p 
            className="text-muted-foreground max-w-xl mx-auto"
            data-testid="text-calculator-description"
          >
            Calculate your estimated loan repayments based on loan amount, interest rate, and term
          </p>
        </div>
        
        <div className="w-full max-w-6xl flex justify-center">
          <iframe 
            className="VisiCalcClass"
            id="Loan_Repayment_Calculator" 
            src="https://www.visionabacus.net/Tools/B3/SuiteA/Z200/MFAA/Loan_Repayment_Calculator/BlueGrey" 
            frameBorder="0" 
            scrolling="no"
            style={{ width: '100%', minHeight: '1000px' }}
            title="Loan Repayment Calculator"
            data-testid="iframe-loan-repayment-calculator"
          />
        </div>
      </div>
    </div>
  );
}
