import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "../data/content";
import { ThemeToggle } from "./ui/ThemeToggle";

export function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0.01 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <button
          onClick={() => goTo("beranda")}
          className="font-title text-lg font-bold uppercase tracking-[0.15em] text-foreground transition-colors hover:text-primary"
        >
          Portofolio
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                active === item.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {active === item.id && (
                <span className="absolute inset-x-3 -bottom-px h-px bg-primary" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-background/98 backdrop-blur-md">
          <div className="container-page flex flex-col py-2">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`border-b border-border py-3 text-left text-base last:border-none ${
                  active === item.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center justify-between py-3">
              <span className="text-sm text-muted-foreground">Tema</span>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
