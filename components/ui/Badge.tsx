import React from "react";

type BadgeVariant = "success";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const Badge = ({ children, variant = "success", className = "" }: BadgeProps) => {
  const variantStyles: Record<BadgeVariant, string> = {
    success: "bg-[#E2FFE2] text-status-success-dark shadow-[0px _2px_5.9px_0px_#0000000D]",
  };

  return (
    <span
      className={`
      inline-flex items-center pl-4 pr-5 py-3 rounded-[80px] text-[18px] font-semibold
      transition-colors duration-200 text-nowrap
      ${variantStyles[variant]}
      ${className}
    `}
    >
      {children}
    </span>
  );
};

export default Badge;
