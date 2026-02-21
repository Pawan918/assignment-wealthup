interface MetricBarProps {
  title: string;
  score: number;
  maxScore?: number;
}

export const MetricBar = ({ title, score, maxScore = 20 }: MetricBarProps) => {
  const percentage = Math.min(100, Math.max(0, (score / maxScore) * 100));

  return (
    <div className="flex flex-col items-start gap-3 w-[220px]">
      <div className="flex justify-between items-center w-full">
        <span className="font-bold text-base text-brand-primary">{title}</span>
        <span className="font-light text-sm text-brand-primary">
          {score} / {maxScore}
        </span>
      </div>

      <div className="relative w-full h-4 bg-[#F7F7F7] rounded-[30px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.08)_inset]">
        <div
          className="absolute top-0 left-0 h-full overflow-hidden rounded-[30px] transition-all duration-1000 ease-out"
          style={{ width: score === 0 ? "12px" : `${percentage}%` }}
        >
          <div
            className="w-[219.33px] h-full rounded-[30px] bg-gradient-to-r from-[#FF6969] via-[#FFBC70] via-50% to-[#7EFF7E]"
            style={{
              background:
                "linear-gradient(90deg, #FF6969 0%, #FF6969 12.58%, #FFBC70 25.48%, #FFBC70 53.97%, #7EFF7E 65%, #7EFF7E 94.23%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
