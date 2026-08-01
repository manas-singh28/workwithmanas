import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        style={{ scaleX: progress }}
        className="bg-gradient-primary h-[2px] w-full origin-left"
      />
      <div
        className={`transition-all duration-500 ${
          scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : ""
        }`}
      >
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-display text-sm font-semibold tracking-tight">
            Manas<span className="text-primary-glow">.</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-ring lg:inline-flex"
          >
            Let&apos;s Connect
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border bg-surface p-2 lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </nav>

        {open ? (
          <div className="border-t border-border bg-background/95 px-6 pb-6 pt-2 backdrop-blur-xl lg:hidden">
            <div className="grid grid-cols-2 gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-border px-3 py-2 text-sm text-muted-foreground"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
