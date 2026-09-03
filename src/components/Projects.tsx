import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/content";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./ui/SectionHeading";
import { SegmentedControl } from "./ui/SegmentedControl";
import { Reveal } from "./ui/Reveal";

type Filter = "semua" | "ar" | "web";

export function Projects() {
  const [filter, setFilter] = useState<Filter>("semua");

  const filtered = useMemo(
    () => projects.filter((p) => filter === "semua" || p.group === filter),
    [filter]
  );

  return (
    <section id="karya" className="container-page py-24 sm:py-28">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading
          title="Karya & Proyek"
          lede="Aplikasi imersif dan platform web yang saya bangun — sebagian besar mengangkat pendidikan dan budaya Kalimantan Barat."
        />
        <Reveal delay={0.15}>
          <SegmentedControl
            layoutId="project-filter"
            value={filter}
            onChange={setFilter}
            options={[
              { value: "semua", label: "Semua" },
              { value: "ar", label: "Aplikasi AR" },
              { value: "web", label: "Website Budaya" },
            ]}
          />
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              className="h-full"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
