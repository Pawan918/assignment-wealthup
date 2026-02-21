"use client";

import Image from "next/image";
import { useState } from "react";
interface StepCardProps {
  step: number;
  status: "Critical" | "Warning" | "Good" | "Completed";
  title: string;
  description: string;
  points: string;
  actionText: string;
  isLocked: boolean;
  showSelection: boolean;
  showFunds: boolean;
  isExpress: boolean;
}

const StepCard = ({ data }: { data: StepCardProps }) => {
  const [selectedAmount, setSelectedAmount] = useState("₹500");
  const amounts = ["₹500", "₹1,000", "₹5,000", "₹6,000"];
  const recommendedFunds = [
    {
      id: 1,
      name: "HDFC Mid-Cap Fund",
      returns: "26.6% (3Y)",
      logo: "/hdfc.png",
      isSelected: false,
    },
    {
      id: 2,
      name: "Bandhan Small Ca...",
      returns: "32% (3Y)",
      logo: "/bandhan.png",
      isSelected: true,
    },
  ];

  return (
    <div
      className={`flex flex-col items-start px-5 py-4 gap-5 rounded-[20px] border transition-all justify-between ${
        !data.isLocked
          ? "bg-white border-brand-primary shadow-[0px_0px_12px_rgba(41,79,124,0.15)]"
          : "bg-[#F6F6F6] border-[#DDDDDD]"
      }`}
    >
      <div className="flex flex-col items-start gap-3 w-full">
        <div
          className={`font-semibold text-[12px] tracking-[0.05em] ${data.status === "Critical" ? "text-[#FF0000]" : "text-[#696969]"}`}
        >
          Step {data.step}
          {data.status && `: ${data.status}`}
        </div>

        <div className="flex flex-col gap-1 w-full">
          <h3 className="text-[#374E6A] font-['Inter'] font-semibold text-[18px]">
            {data.title}
          </h3>
          <p className="text-[#4C6179] font-['Inter'] font-normal text-[12px] leading-[17px]">
            {data.description}
          </p>
        </div>

        {data.showSelection && !data.isLocked && (
          <div className="flex items-end gap-2 text-[#374E6A] font-semibold text-[14px]">
            I can commit to saving{" "}
            <span className="bg-[#D2E3F780] text-brand-primary px-1.5 py-0.75 rounded-sm">
              {selectedAmount}
            </span>{" "}
            monthly
          </div>
        )}
        {data.showSelection && !data.isLocked && (
          <div className="flex flex-row gap-2">
            {amounts.map((amt) => (
              <button
                key={amt}
                onClick={() => setSelectedAmount(amt)}
                className={`px-3 py-1.5 rounded-sm border text-[12px] font-semibold transition-colors cursor-pointer ${
                  selectedAmount === amt
                    ? "bg-[#E6F2FF] border-brand-primary text-[#363636]"
                    : "border-[#D9D9D9] text-[#585858]"
                }`}
              >
                {amt}
              </button>
            ))}
            <div className="border-b border-brand-primary w-[87px] justify-between self-end pb-1 flex items-center gap-1">
              <span className="text-[12px] text-[#585858] font-semibold">
                ₹
              </span>
              <input
                placeholder="Enter amount"
                className="bg-transparent outline-none text-[12px] text-[#818181] w-full placeholder:text-[#818181] placeholder:text-xs"
              />
            </div>
          </div>
        )}
      </div>
      {data.showFunds && !data.isLocked && (
        <div className="flex flex-col gap-3 w-full">
          <span className="text-[#374E6A] font-semibold text-[14px]">
            Recommended Funds (Top performers)
          </span>
          <div className="flex gap-2 relative">
            {recommendedFunds.map((fund) => (
              <div
                className={`flex items-center py-2 px-1 gap-2.5 border rounded-sm w-full text-[#363636] ${fund.isSelected ? "bg-[#E6F2FF] border-brand-primary" : "border-[#D9D9D9]"}`}
                key={fund.name}
              >
                <Image src={fund.logo} alt={fund.name} width={34} height={24} />
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] font-semibold">{fund.name}</span>
                  <span className="text-[#00BA00] text-[10px] font-medium">
                    {fund.returns}
                  </span>
                </div>
              </div>
            ))}
            <div className="absolute -right-3.5 top-0 z-10 flex items-center justify-center h-full">
              <div className="flex items-center justify-center bg-[#F8FAFC33] shadow-[0px_0px_15px_0px_#4A90E280] rounded-full border border-white w-6 h-6">
                <img
                  src="/chevron-right.svg"
                  alt="chevron"
                  className="w-3 h-3"
                ></img>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex flex-col items-center gap-4">
        <button
          className={`flex items-center justify-center py-3 px-6 gap-2.5 w-full rounded-[90px] text-white font-['Inter'] font-semibold transition-all bg-linear-[90deg,_#294F7C_0%,_#4B90E2_100%] ${
            data.isLocked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          <span className="text-[16px]">{data.actionText}</span>
          <div className="bg-[#F8FAFC] border-[0.5px] border-[#00BA00] rounded-[60px] px-3 py-1 text-[#00BA00] text-[14px]">
            {data.points}
          </div>
        </button>

        {/* Status Text */}
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 flex items-center justify-center">
            {data.isLocked ? (
              <Image src="/lock.svg" alt="Lock" width={16} height={16} />
            ) : (
              <Image src="/bolt.svg" alt="Bolt" width={16} height={16} />
            )}
          </div>
          <span
            className={`text-[14px] font-['Inter'] ${data.isLocked ? "text-[#4C4C4C]" : "text-brand-primary font-bold"}`}
          >
            {data.isLocked ? (
              "Complete step 1 (critical) to unlock"
            ) : (
              <p className="font-bold">
                Express setup:&nbsp;
                <span className="font-normal">Complete in under 3 minutes</span>
              </p>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
