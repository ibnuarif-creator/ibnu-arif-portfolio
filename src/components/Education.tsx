import { certification, education } from "../data/content";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Education() {
  return (
    <section id="pendidikan" className="container-page py-24 sm:py-28">
      <SectionHeading title="Pendidikan & Sertifikasi" />

      <div className="mt-12 grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">
        <ol className="relative border-l-2 border-border pl-8">
          {education
            .slice()
            .reverse()
            .map((edu, i) => (
              <Reveal key={edu.degree} delay={i * 0.08} as="li">
                <div className="relative pb-12 last:pb-0">
                  <span className="absolute -left-[2.15rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background" />
                  <p className="text-sm font-medium text-primary">{edu.years}</p>
                  <h3 className="mt-1.5 font-title text-xl font-medium text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-muted-foreground">{edu.institution}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{edu.focus}</p>
                </div>
              </Reveal>
            ))}
        </ol>

        <Reveal delay={0.2}>
          <div className="rounded-xl border border-border bg-card p-7 shadow-sm">
            <p className="text-xs text-muted-foreground">Sertifikasi</p>
            <h3 className="mt-2 font-title text-lg font-medium leading-snug text-foreground">
              {certification.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">{certification.issuer}</p>
            <p className="mt-4 border-t border-border pt-4 text-sm font-medium text-foreground">
              {certification.validity}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
