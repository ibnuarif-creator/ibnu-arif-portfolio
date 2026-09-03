import { skills } from "../data/content";
import { Badge } from "./ui/Badge";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Skills() {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="container-page py-24 sm:py-28">
        <SectionHeading title="Keahlian" />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.07}>
              <h3 className="text-sm font-medium text-primary">{group.label}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge>{item}</Badge>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
