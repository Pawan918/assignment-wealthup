import React from "react";

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
}

const BaseCard = ({ children, className = "" }: BaseCardProps) => {
  return (
    <div
      className={`flex gap-7 rounded-[20px] p-6 h-full shadow-[0px_0px_15px_0px_#4A90E280] bg-surface-base ${className}
    `}
    >
      {children}
    </div>
  );
};

export default BaseCard;
