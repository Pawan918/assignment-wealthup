import VerifiedShieldIcon from "@/components/Icon/VerifiedShieldIcon";
import StepCard from "@/components/StepCard";
import { FinanceCompareCard } from "@/components/FinanceCompareCard";
import Badge from "@/components/ui/Badge";
import BaseCard from "@/components/ui/BaseCard";
import { MetricBar } from "@/components/ui/MetricBar";
import WealthScoreGauge from "@/components/ui/WealthScoreGuage";
import type { StepData } from "@/types/step";
import Image from "next/image";

const roadmapData: StepData[] = [
  {
    step: 1,
    status: "Critical",
    title: "Build your safety net (Emergency fund)",
    description:
      "Ankit, avoid a potential 2-year setback. Build your emergency fund to be risk-free within the next 6 months.",
    points: "+20 pts",
    actionText: "Start Investing Today",
    isLocked: false,
    showSelection: true,
    showFunds: true,
    isExpress: true,
  },
  {
    step: 2,
    title: "Optimize investments",
    description:
      "Invest regularly to build long-term wealth. Explore diversified mutual funds and asset allocation strategies tailored to your risk profile.",
    points: "+12 pts",
    actionText: "Begin Investing",
    isLocked: true,
    showSelection: false,
  },
  {
    step: 3,
    title: "Maximize growth",
    description:
      "Accelerate your financial future by reviewing advanced growth options, retirement planning, and tax-efficient investment vehicles.",
    points: "+8 pts",
    actionText: "Analyse your Mutual Funds",
    isLocked: true,
    showSelection: false,
  },
];

const metrics = [
  { title: "Emergency Funds", score: 0 },
  { title: "Liquidity", score: 11 },
  { title: "Investments", score: 20 },
  { title: "Health Insurance", score: 20 },
  { title: "Life Insurance", score: 7 },
  { title: "Savings", score: 16 },
];
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[linear-gradient(114.52deg,#ECF4FB_0%,#F8FAFC_100%)] font-['Urbanist']">
      <Image
        src="/brand_logo.svg"
        width={126}
        height={40}
        alt="Brand Logo"
        className="mt-7 mb-13.5"
      />
      <main className="flex min-h-screen w-full max-w-326.75 flex-col gap-8 items-center sm:items-start">
        <header className="w-full flex justify-between text-brand-primary">
          <div className="font-['Inter'] text-center md:text-left">
            <h2 className="text-[28px]">
              Good Morning, <span className="font-bold">Ankit</span>
            </h2>
            <h3 className="text-[22px]">
              At <span className="font-bold">28</span>, your income is strong,
              but your wealth efficiency is lagging.{" "}
            </h3>
          </div>
          <div className="hidden md:flex items-center">
            <Badge variant="success" className="flex gap-2">
              <VerifiedShieldIcon size={24} /> Verified Analysis
            </Badge>
          </div>
        </header>
        <BaseCard className="w-full flex flex-col md:flex-row justify-between relative z-10 overflow-hidden">
          <div className="flex items-center md:items-end my-4.5">
            <WealthScoreGauge score={43} targetScore={70} />
          </div>
          <div className="flex flex-col gap-8">
            <FinanceCompareCard current={65} potential={38} />
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <h2 className="text-brand-primary text-[20px]">
                Your score breakdown
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5 w-fit">
                {metrics.map((metric, index) => (
                  <div
                    key={metric.title}
                    className="flex gap-2 items-center lg:gap-5"
                  >
                    <MetricBar title={metric.title} score={metric.score} />
                    {(index + 1) % 3 !== 0 && (
                      <div className="h-9.5 w-0.5 bg-border-muted self-center" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Image
            src="/layer.svg"
            width={558}
            height={397}
            alt="Layer"
            className="absolute bottom-14 left-10 -rotate-[18.26deg] origin-bottom-left -z-1"
          />
        </BaseCard>
        <BaseCard className="w-full flex-col">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-brand-primary">
              Your personalized roadmap to{" "}
              <span className="font-bold">70+ WealthUp</span> score
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            {roadmapData.map((data, index) => (
              <StepCard key={index} data={data} />
            ))}
          </div>
        </BaseCard>
      </main>
    </div>
  );
}
