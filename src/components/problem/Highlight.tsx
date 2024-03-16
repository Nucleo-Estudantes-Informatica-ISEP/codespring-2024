import type { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
  color?: "accent" | "primary";
  tilt?: "left" | "right";
  className?: string;
}

const Highlight: React.FC<HighlightProps> = ({
  children,
  color,
  tilt,
  className
}) => {
  color = color || "primary";
  tilt = tilt || "left";
  return (
    <span
      className={`relative after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:box-content after:h-[80%] after:w-full after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-[46px] ${
        color === "accent" ? "after:bg-accent" : "after:bg-primary"
      } ${
        tilt === "left" ? "after:-rotate-1" : "after:rotate-1"
      } after:px-2 ${className}`}
    >
      {children}
    </span>
  );
};

export default Highlight;
