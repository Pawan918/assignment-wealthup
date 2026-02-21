"use client";
import { GaugeBackground } from "../Icon/GuageBackground";

interface WealthScoreGaugeProps {
  score?: number;
  targetScore?: number;
  maxScore?: number;
  peerPercentage?: number;
}

const WealthScoreGauge = ({
  score = 43,
  targetScore = 70,
  maxScore = 100,
  peerPercentage = 46,
}: WealthScoreGaugeProps) => {
  const width = 398;
  const height = 221;
  const strokeWidth = 30;

  const radius = 160;
  const centerX = width / 2;
  const centerY = 185;

  const percentage = Math.min(Math.max(score / maxScore, 0), 1);
  const circumference = Math.PI * radius;
  const offset = circumference - percentage * circumference;

  const targetPct = targetScore / maxScore;
  const targetRad = Math.PI - targetPct * Math.PI;
  const targetX = centerX + radius * Math.cos(targetRad);
  const targetY = centerY - radius * Math.sin(targetRad);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-113.5 h-69.25 flex items-center justify-center">
        <GaugeBackground className="absolute inset-0 w-full h-full" />
        <div className="relative w-99.5 h-55.25 mt-3">
          <div
            className="absolute z-30 flex flex-col items-center pointer-events-none transition-all duration-700 ease-out"
            style={{
              left: `${targetX + 7}px`,
              top: `${targetY - 25}px`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <div className="bg-white p-[8px_12px] rounded-lg shadow-[0px_8px_16px_-2px_#1B212C1F]">
              <p className="font-['Inter'] text-[14px] leading-5 text-[#4B4B4B] whitespace-nowrap m-0">
                You need{" "}
                <strong className="font-bold text-[#363636]">
                  +{targetScore - score}
                </strong>{" "}
                points to
                <br />
                reach a{" "}
                <strong className="font-bold text-[#00BA00]">good</strong> score
                of{" "}
                <strong className="font-bold text-[#363636]">
                  {targetScore}
                </strong>
              </p>
            </div>
            <div className="w-3.5 h-3.5 bg-white rotate-45 -mt-[7px] border-r border-b border-gray-50 shadow-[4px_4px_10px_rgba(0,0,0,0.02)]"></div>
          </div>
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="absolute inset-0 w-full h-full"
          >
            <defs>
              <linearGradient
                id="wealthGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#FF6A6A" />
                <stop offset="40%" stopColor="#FFBC70" />
                <stop offset="100%" stopColor="#7EFF7E" />
              </linearGradient>
              <filter id="innerShadow">
                <feOffset dx="0" dy="0" />
                <feGaussianBlur stdDeviation="2" result="offset-blur" />
                <feComposite
                  operator="out"
                  in="SourceGraphic"
                  in2="offset-blur"
                  result="inverse"
                />
                <feFlood
                  floodColor="black"
                  floodOpacity="0.08"
                  result="color"
                />
                <feComposite
                  operator="in"
                  in="color"
                  in2="inverse"
                  result="shadow"
                />
                <feComposite operator="over" in="shadow" in2="SourceGraphic" />
              </filter>
            </defs>
            <path
              d={`M ${centerX - radius},${centerY} A ${radius},${radius} 0 0 1 ${centerX + radius},${centerY}`}
              stroke="#F7F7F7"
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              filter="url(#innerShadow)"
              opacity="0.8"
            />
            <path
              d={`M ${centerX - radius},${centerY} A ${radius},${radius} 0 0 1 ${centerX + radius},${centerY}`}
              stroke="url(#wealthGradient)"
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              style={{
                strokeDashoffset: offset,
                transition:
                  "stroke-dashoffset 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            />
            <g
              transform={`translate(${targetX}, ${targetY}) rotate(${180 - targetPct * 180 - 45}) translate(-14, -16)`}
            >
              <path
                d="M4.91636 25.789L0.00142225 28.0001L4.149 31.9914L5.63474 26.4803L4.91636 25.789ZM22.4424 6.20236L27.3573 3.99123L23.2097 -5.91485e-05L21.724 5.51105L22.4424 6.20236ZM4.97625 26.4958L5.33544 26.8414L7.26947 24.5081L6.91027 24.1624L6.55108 23.8168L4.61706 26.1501L4.97625 26.4958ZM8.8443 21.8291L9.20349 22.1747L11.1375 19.8414L10.7783 19.4957L10.4191 19.1501L8.48511 21.4834L8.8443 21.8291ZM12.7123 17.1624L13.0715 17.508L15.0056 15.1747L14.6464 14.829L14.2872 14.4834L12.3532 16.8167L12.7123 17.1624ZM16.5804 12.4957L16.9396 12.8413L18.8736 10.508L18.5144 10.1623L18.1552 9.81665L16.2212 12.15L16.5804 12.4957ZM20.4484 7.82896L20.8076 8.17461L22.7417 5.84126L22.3825 5.49561L22.0233 5.14995L20.0893 7.4833L20.4484 7.82896Z"
                fill="#7A7A7A"
              />
            </g>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-9">
            <span className="font-['Inter'] font-bold text-[80px] leading-[97px] text-[#FF6A6A]">
              {score}
            </span>
            <span className="font-semibold text-[19px] leading-[23px] tracking-[0.05em] text-brand-primary -mt-2">
              Current WealthUp Score
            </span>
          </div>
        </div>
      </div>

      <div className="-mt-2.5 w-full text-center z-10">
        <span className="italic text-[16px] leading-[19px] text-[#48688E]">
          Better than{" "}
          <strong className="font-bold text-[#1B212C]">
            {peerPercentage}%
          </strong>{" "}
          of peers
        </span>
      </div>
    </div>
  );
};

export default WealthScoreGauge;
