interface StageCardProps {
  stageNumber: number;
  title: string;
  description: string;
}

export default function StageCard({ stageNumber, title, description }: StageCardProps) {
  return (
    <div 
      className="bg-primary text-primary-foreground rounded-xl p-8 relative overflow-visible aspect-square flex flex-col justify-between"
      data-testid={`card-stage-${stageNumber}`}
    >
      <div className="absolute top-6 left-6 text-7xl font-serif font-bold opacity-10 select-none pointer-events-none">
        {stageNumber}
      </div>
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="inline-block bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-md text-xs font-medium mb-3">
            Stage {stageNumber}
          </div>
          <h3 
            className="font-serif text-xl font-semibold mb-4 leading-tight"
            data-testid={`text-stage-${stageNumber}-title`}
          >
            {title}
          </h3>
        </div>
        
        <p 
          className="text-primary-foreground/95 leading-relaxed text-sm"
          data-testid={`text-stage-${stageNumber}-description`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
