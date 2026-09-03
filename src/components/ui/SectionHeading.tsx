import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  title: string;
  lede?: ReactNode;
}

export function SectionHeading({ title, lede }: SectionHeadingProps) {
  return (
    <Reveal className="max-w-2xl">
      <h2 className="text-[clamp(1.75rem,3.4vw,2.5rem)] font-title font-bold leading-tight text-foreground">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-primary" />
      {lede && <p className="mt-5 leading-relaxed text-muted-foreground">{lede}</p>}
    </Reveal>
  );
}
