import { ExternalLink } from "lucide-react";
import { profile, publications } from "../data/content";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Publications() {
  return (
    <section id="publikasi" className="container-page py-24 sm:py-28">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading title="Publikasi Ilmiah" />
        <Reveal delay={0.1}>
          <a
            href={profile.scholar}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:opacity-80"
          >
            Lihat profil Google Scholar
            <ExternalLink size={14} />
          </a>
        </Reveal>
      </div>

      <ol className="mt-12 divide-y divide-border border-y border-border">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 0.05} as="li">
            <div className="grid gap-2 py-6 sm:grid-cols-[4.5rem_1fr]">
              <span className="font-title text-sm font-medium text-muted-foreground">
                {pub.year}
              </span>
              <div>
                <p className="leading-relaxed text-foreground">
                  {pub.authors}{" "}
                  <span>&ldquo;{pub.title}&rdquo;</span>
                </p>
                <p className="mt-1.5 text-sm text-muted-foreground">{pub.venue}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
