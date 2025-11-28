import Header from "@/components/Header";

export default function StampDutyCalculator() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1 flex flex-col items-center py-8 px-4">
        <div className="text-center mb-6">
          <h1 
            className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2"
            data-testid="text-calculator-title"
          >
            Stamp Duty Calculator
          </h1>
          <p 
            className="text-muted-foreground max-w-xl mx-auto"
            data-testid="text-calculator-description"
          >
            Estimate the stamp duty costs for your property purchase
          </p>
        </div>
        
        <div className="w-full max-w-[1400px] flex justify-center px-4">
          <iframe 
            className="VisiCalcClass"
            id="Stamp_Duty_Calculator" 
            src="https://www.visionabacus.net/Tools/B3/SuiteA/Z200/MFAA/Stamp_Duty_Calculator/BlueGrey" 
            frameBorder="0" 
            scrolling="no"
            style={{ width: '100%', minHeight: '1200px' }}
            title="Stamp Duty Calculator"
            data-testid="iframe-stamp-duty-calculator"
          />
        </div>
      </div>
    </div>
  );
}
