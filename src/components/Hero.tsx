import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { profile } from "../data/content";
import { buttonVariants } from "./ui/button";
import profileCutout from "../assets/profil-cutout.png";

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-16"
    >
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, rgb(var(--primary)), transparent 70%)" }}
      />

      <div className="relative flex flex-1 flex-col justify-between gap-8 py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="container-page relative z-20 flex flex-wrap items-start justify-between gap-4 text-xs font-medium uppercase tracking-wide text-muted-foreground"
        >
          <span className="-ml-4 sm:-ml-8 lg:-ml-10">{profile.role}</span>
          <span>{profile.credentials}</span>
        </motion.div>

        <div className="relative flex flex-1 items-center justify-center px-3 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative z-0 w-full text-center font-title text-[clamp(3.5rem,17vw,14rem)] font-bold leading-[0.82] tracking-tight text-foreground [word-spacing:0.4em]"
          >
            {profile.name}
          </motion.h1>
        </div>

        {/* Cut-out portrait (background removed). On phones it sits in
            NORMAL FLOW between the name and the description — a fixed,
            modest size — so it is structurally impossible for it to
            overlap the paragraph below (that overlap was the actual mobile
            bug: the "bottom-aligned to the button row" trick below is a
            desktop-only layout, and forcing it onto a narrow screen made
            the photo's box reach up over the description text). From `sm:`
            up it switches to `position:absolute` and sits IN FRONT of the
            name like the model over "PORTFOLIO" in cth1.png, bottom-aligned
            to the OUTER hero container (the same box the button row sits
            in) so its bottom edge lands level with "Hubungi saya" / "Lihat
            karya & proyek". The centering/offset lives on this wrapper
            (flexbox, not `transform`) because framer-motion writes its own
            inline `transform` on the animated element — a Tailwind
            translate-x/y class on that same element gets silently
            clobbered by motion's. */}
        <div className="pointer-events-none relative z-10 flex justify-center py-2 sm:absolute sm:inset-0 sm:items-end sm:py-14">
          <motion.img
            src={profileCutout}
            alt={`Potret ${profile.name}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="h-56 w-auto object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)] sm:ml-24 sm:h-[55svh] sm:max-h-[440px] sm:drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] lg:ml-16 lg:h-[74svh] lg:max-h-[617px]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="container-page relative z-20 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="-ml-4 max-w-sm sm:-ml-8 lg:-ml-10">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {profile.hero}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
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
          </div>

          <div className="text-left text-sm text-muted-foreground sm:text-right">
            <p>{profile.emailPrimary}</p>
            <p className="mt-1">{profile.location}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
