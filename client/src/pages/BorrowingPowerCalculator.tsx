import Header from "@/components/Header";

export default function BorrowingPowerCalculator() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1 flex flex-col items-center py-8 px-4">
        <div className="text-center mb-6">
          <h1 
            className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2"
            data-testid="text-calculator-title"
          >
            Borrowing Power Calculator
          </h1>
          <p 
            className="text-muted-foreground max-w-xl mx-auto"
            data-testid="text-calculator-description"
          >
            Discover how much you could borrow based on your income and expenses
          </p>
        </div>
        
        <div className="w-full max-w-[1400px] flex justify-center px-4">
          <iframe 
            className="VisiCalcClass"
            id="Borrowing_Power_Calculator" 
            src="https://www.visionabacus.net/Tools/B3/SuiteA/Z200/MFAA/Borrowing_Power_Calculator/BlueGrey" 
            frameBorder="0" 
            scrolling="no"
            style={{ width: '100%', minHeight: '1200px' }}
            title="Borrowing Power Calculator"
            data-testid="iframe-borrowing-power-calculator"
          />
        </div>
      </div>
    </div>
  );
}
