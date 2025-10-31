interface StageCardProps {
  stageNumber: number;
  title: string;
  description: string;
}

export default function StageCard({ stageNumber, title, description }: StageCardProps) {
  return (
    <div 
      className="bg-primary text-primary-foreground rounded-xl p-6 md:p-8 relative overflow-visible flex flex-col h-[240px]"
      data-testid={`card-stage-${stageNumber}`}
    >
      <div className="absolute top-4 left-6 text-6xl md:text-7xl font-serif font-bold opacity-10 select-none pointer-events-none">
        {stageNumber}
      </div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-3">
          <div className="inline-block bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-md text-xs font-medium mb-2">
            Stage {stageNumber}
          </div>
          <h3 
            className="font-serif text-xl md:text-2xl font-semibold mb-3 leading-tight"
            data-testid={`text-stage-${stageNumber}-title`}
          >
            {title}
          </h3>
        </div>
        
        <p 
          className="text-primary-foreground/95 leading-relaxed flex-1 text-sm md:text-base"
          data-testid={`text-stage-${stageNumber}-description`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
