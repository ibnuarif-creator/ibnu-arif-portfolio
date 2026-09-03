import { Smartphone, Globe2 } from "lucide-react";
import type { Project } from "../data/content";
import { SpotlightCard } from "./ui/SpotlightCard";
import { Badge } from "./ui/Badge";

export function ProjectCard({ project }: { project: Project }) {
  const Icon = project.group === "ar" ? Smartphone : Globe2;

  return (
    <SpotlightCard>
      <div className="relative flex aspect-[16/10] w-full shrink-0 flex-col items-center justify-center gap-2 border-b border-border bg-muted/60 text-muted-foreground">
        <Icon size={26} strokeWidth={1.5} />
        <span className="text-xs">Visual proyek menyusul</span>
        <span className="absolute left-4 top-4">
          <Badge tone={project.status === "selesai" ? "solid" : "outline"}>
            {project.statusLabel}
          </Badge>
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        {project.platform && (
          <p className="text-xs text-muted-foreground">{project.platform}</p>
        )}
        <h3 className="mt-1.5 font-title text-xl font-medium text-foreground">
          {project.name}
        </h3>
        {project.displayName && (
          <p className="text-sm italic text-muted-foreground">
            tampil di UI: &ldquo;{project.displayName}&rdquo;
          </p>
        )}
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {project.tech.map((t) => (
            <li key={t}>
              <Badge>{t}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </SpotlightCard>
  );
}
