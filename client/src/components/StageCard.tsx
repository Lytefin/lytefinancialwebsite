interface StageCardProps {
  stageNumber: number;
  title: string;
  description: string;
}

export default function StageCard({ stageNumber, title, description }: StageCardProps) {
  return (
    <div 
      className="bg-primary text-primary-foreground rounded-xl p-8 md:p-10 relative overflow-visible h-full flex flex-col"
      data-testid={`card-stage-${stageNumber}`}
    >
      <div className="absolute top-6 left-8 text-8xl md:text-9xl font-serif font-bold opacity-10 select-none pointer-events-none">
        {stageNumber}
      </div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4">
          <div className="inline-block bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-md text-sm font-medium mb-3">
            Stage {stageNumber}
          </div>
          <h3 
            className="font-serif text-2xl md:text-3xl font-semibold mb-4 leading-tight"
            data-testid={`text-stage-${stageNumber}-title`}
          >
            {title}
          </h3>
        </div>
        
        <p 
          className="text-primary-foreground/95 leading-relaxed flex-1"
          data-testid={`text-stage-${stageNumber}-description`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
