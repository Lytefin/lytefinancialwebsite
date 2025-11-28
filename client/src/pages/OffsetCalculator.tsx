import Header from "@/components/Header";

export default function OffsetCalculator() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1 flex flex-col items-center py-8 px-4">
        <div className="text-center mb-6">
          <h1 
            className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2"
            data-testid="text-calculator-title"
          >
            Home Loan Offset Calculator
          </h1>
          <p 
            className="text-muted-foreground max-w-xl mx-auto"
            data-testid="text-calculator-description"
          >
            See how an offset account can reduce your interest payments and loan term
          </p>
        </div>
        
        <div className="w-full max-w-[1400px] flex justify-center px-4">
          <iframe 
            className="VisiCalcClass"
            id="Home_Loan_Offset_Calculator" 
            src="https://www.visionabacus.net/Tools/B3/SuiteA/Z200/MFAA/Home_Loan_Offset_Calculator/BlueGrey" 
            frameBorder="0" 
            scrolling="no"
            style={{ width: '100%', minHeight: '1200px' }}
            title="Home Loan Offset Calculator"
            data-testid="iframe-offset-calculator"
          />
        </div>
      </div>
    </div>
  );
}
