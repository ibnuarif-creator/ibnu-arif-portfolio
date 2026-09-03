import type { ReactNode } from "react";

type Tone = "neutral" | "solid" | "outline";

const tones: Record<Tone, string> = {
  neutral: "bg-secondary text-secondary-foreground",
  solid: "bg-foreground text-background",
  outline: "bg-transparent text-muted-foreground",
};

export function Badge({ children, tone = "neutral", className = "" }: { children: ReactNode; tone?: Tone; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
