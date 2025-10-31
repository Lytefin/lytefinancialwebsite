import StageCard from '../StageCard';

export default function StageCardExample() {
  return (
    <div className="p-8 max-w-md">
      <StageCard
        stageNumber={1}
        title="Discovery"
        description="We discuss your current scenario, assessing your existing business performance for lending purposes or reviewing your PAYG experience to support a new business purchase application."
      />
    </div>
  );
}
