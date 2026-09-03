import { communityService, experience } from "../data/content";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function CommunityService() {
  return (
    <section id="pengabdian" className="border-y border-border bg-muted/40">
      <div className="container-page grid gap-16 py-24 sm:py-28 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <SectionHeading title="Pengabdian Masyarakat & Narasumber" />
          <ul className="mt-10 space-y-6">
            {communityService.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06} as="li">
                <div className="border-l-2 border-border pl-5">
                  <p className="font-title font-medium text-foreground">{item.title}</p>
                  {item.detail && (
                    <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                  )}
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    {item.place} · {item.year}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeading title="Pengalaman Profesional" />
          <Reveal delay={0.15} className="mt-10">
            <div className="border-l-2 border-border pl-5">
              <p className="font-title font-medium text-foreground">{experience.role}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {experience.detail}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
