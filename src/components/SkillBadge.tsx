import { useState } from "react";

interface SkillBadgeProps {
  name: string;
  icon: React.ReactNode;
  percentage: number;
}

export default function SkillBadge({ name, icon, percentage }: SkillBadgeProps) {
  const [hovered, setHovered] = useState(false);

  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-24 h-24 flex items-center justify-center cursor-pointer group"
    >
      {/* Progress Ring */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90 transition-opacity duration-300"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        <circle
          cx="48"
          cy="48"
          r={radius}
          strokeWidth="4"
          className="stroke-portfolio-coral/20"
          fill="transparent"
        />
        <circle
          cx="48"
          cy="48"
          r={radius}
          strokeWidth="4"
          fill="transparent"
          className="stroke-portfolio-coral transition-all duration-700 ease-out"
          strokeDasharray={circumference}
          strokeDashoffset={hovered ? offset : circumference}
          strokeLinecap="round"
        />
      </svg>

      {/* Icon (visible when not hovered) */}
      <div
        className="absolute transition-all duration-300 flex flex-col items-center"
        style={{
          opacity: hovered ? 0 : 1,
          transform: hovered ? "scale(0.7)" : "scale(1)",
        }}
      >
        <div className="text-3xl mb-1">{icon}</div>
      </div>

      {/* Percentage (visible on hover) */}
      <div
        className="absolute transition-all duration-300 flex flex-col items-center"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "scale(1)" : "scale(0.7)",
        }}
      >
        <span className="text-xl font-bold text-portfolio-dark-text">
          {percentage}%
        </span>
      </div>

      {/* Skill name below */}
      <span className="absolute -bottom-7 text-xs font-medium text-portfolio-dark-text/70 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}