import { profile } from "../data/content";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function About() {
  return (
    <section id="tentang" className="container-page py-24 sm:py-28">
      <SectionHeading title="Tentang" />
      <Reveal delay={0.1} className="mt-8 max-w-prose">
        <p className="text-lg leading-relaxed text-foreground">{profile.about}</p>
        <p className="mt-5 leading-relaxed text-muted-foreground">{profile.aboutSecondary}</p>
      </Reveal>
    </section>
  );
}
