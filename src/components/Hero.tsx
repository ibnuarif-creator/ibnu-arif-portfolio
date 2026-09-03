import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { profile } from "../data/content";
import { buttonVariants } from "./ui/button";
import profileImage from "../assets/profil.png";

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, rgb(var(--primary)), transparent 70%)" }}
      />

      <div className="container-page relative grid gap-16 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {profile.role}
          </span>
          <h1 className="mt-5 max-w-2xl text-[clamp(2.5rem,6.5vw,4.75rem)] font-title font-bold leading-[1.05] text-foreground">
            {profile.name}
            <span className="mt-2 block font-title text-[0.42em] font-medium text-muted-foreground">
              {profile.credentials}
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {profile.hero}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={`mailto:${profile.emailPrimary}`} className={buttonVariants.primary}>
              <Mail size={16} />
              Hubungi saya
            </a>
            <button
              onClick={() =>
                document.getElementById("karya")?.scrollIntoView({ behavior: "smooth" })
              }
              className={buttonVariants.outline}
            >
              Lihat karya &amp; proyek
            </button>
          </div>

          <p className="mt-10 text-sm text-muted-foreground">{profile.location}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:mx-0"
        >
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <img
              src={profileImage}
              alt={`Potret ${profile.name}`}
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}
