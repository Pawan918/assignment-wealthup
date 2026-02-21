import React from "react";

interface TrajectoryProps {
  current: number;
  potential: number;
}

export const FinanceCompareCard = ({ current, potential }: TrajectoryProps) => {
  const sooner = current - potential;

  return (
    <div className="flex gap-3 flex-col">
      <h2 className="text-brand-primary text-[20px]">Financial independence age</h2>
      <div className="relative flex flex-row items-center">
        <div className="flex flex-col justify-center items-center w-52.5 h-32.75 p-[12px_8px] gap-2.5 bg-[#F9F9F9] border-y border-l border-white rounded-l-lg shadow-[0px_0px_24px_0px_#4A90E240] z-0">
          <span className="font-semibold text-[14px] leading-4.25 tracking-[0.05em] text-[#828282]">
            Current Trajectory
          </span>
          <span className="font-bold text-[30px] leading-9 tracking-[0.05em] text-[#616161]">
            {current}
          </span>
          <span className="w-[150px] font-normal text-[12px] text-center leading-4.5 tracking-[0.05em] text-[#7C7C7C]">
            Based on current savings you have
          </span>
        </div>

        <div className="absolute left-52.5 top-2.25 w-px h-28.5 bg-[#DADADA] z-2" />
        <div className="flex flex-col justify-center items-center w-52.5 h-31.25 p-[12px_8px] gap-2.5 bg-[#EAF4FB] border border-white rounded-r-lg shadow-[0px_0px_24px_rgba(74,144,226,0.25)] z-1">
          <span className="font-semibold text-[14px] leading-4.25 tracking-[0.05em] text-[#307ED9]">
            Your Potential
          </span>
          <span className="font-bold text-[30px] leading-9 tracking-[0.05em] text-brand-primary">
            {potential}
          </span>
          <span className="w-[163px] font-normal text-[12px] leading-3.5 text-center tracking-[0.05em] text-brand-primary">
            By following our personalized roadmap
          </span>
        </div>
        {sooner > 0 && (
          <div className="absolute left-[148px] top-[47px] flex items-center z-3 drop-shadow-[-3.87px_5.24px_10.48px_rgba(27,33,44,0.07)]">
            <div className="bg-[#00BA00] h-6 px-2 flex items-center rounded-l-[5.24px]">
              <span className="font-['Inter'] font-bold text-[10px] text-white whitespace-nowrap">
                ✨ {sooner} years sooner !
              </span>
            </div>
            <div
              className="bg-[#00BA00] w-[14px] h-6 -ml-[0.5px]"
              style={{ clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
