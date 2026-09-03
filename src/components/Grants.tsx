import { grants } from "../data/content";
import { Badge } from "./ui/Badge";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Grants() {
  return (
    <section id="hibah" className="border-y border-border bg-muted/40">
      <div className="container-page py-24 sm:py-28">
        <SectionHeading
          title="Hibah Penelitian & Kebudayaan"
          lede="Tiga hibah selektif tahun 2026, didukung Universitas Tanjungpura dan Kementerian Kebudayaan RI."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {grants.map((g, i) => (
            <Reveal key={g.id} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-xl border border-border bg-card p-7 shadow-sm">
                <div className="flex items-center justify-between">
                  <Badge tone="outline">{g.role}</Badge>
                  <span className="text-xs text-muted-foreground">{g.year}</span>
                </div>
                <h3 className="mt-4 font-title text-lg font-medium leading-snug text-foreground">
                  {g.title}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground">{g.scheme}</p>
                <p className="mt-5 border-t border-border pt-4 text-sm font-medium text-foreground">
                  {g.status}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Program ini selektif — pada 2025 hanya sekitar 2.117 penerima dari
          sekitar 7.000 proposal Dana IndonesiaRaya.
        </p>
      </div>
    </section>
  );
}
