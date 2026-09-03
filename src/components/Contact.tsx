import { useState } from "react";
import { Check, Copy, Linkedin, Mail, GraduationCap } from "lucide-react";
import { profile } from "../data/content";
import { Reveal } from "./ui/Reveal";
import { buttonVariants } from "./ui/button";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.emailPrimary);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — the printed email text still works */
    }
  };

  return (
    <section id="kontak" className="relative overflow-hidden border-t border-border">
      <div className="container-page py-24 sm:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-title font-bold leading-tight text-foreground">
            Terbuka untuk kolaborasi seputar teknologi, pendidikan, dan
            pelestarian budaya Kalimantan Barat.
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center gap-4">
          <button onClick={copyEmail} className={buttonVariants.primary}>
            <Mail size={16} />
            {profile.emailPrimary}
            {copied ? <Check size={15} /> : <Copy size={15} className="opacity-60" />}
          </button>

          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={buttonVariants.outline}>
            <Linkedin size={16} />
            LinkedIn
          </a>

          <a href={profile.scholar} target="_blank" rel="noreferrer" className={buttonVariants.outline}>
            <GraduationCap size={16} />
            Google Scholar
          </a>
        </Reveal>

        <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
          {copied ? "Email disalin ke clipboard." : profile.location}
        </p>
      </div>
    </section>
  );
}
