import Header from "@/components/Header";

export default function BorrowingPowerCalculator() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1 w-full">
        <iframe 
          className="VisiCalcClass w-full h-full"
          id="Loan_Repayment_Calculator" 
          src="https://www.visionabacus.net/Tools/B3/SuiteA/Z200/MFAA/Loan_Repayment_Calculator/BlueGrey" 
          frameBorder="0" 
          scrolling="no"
          style={{ minHeight: 'calc(100vh - 80px)', width: '100%' }}
          title="Loan Repayment Calculator"
          data-testid="iframe-loan-calculator"
        />
      </div>
    </div>
  );
}
