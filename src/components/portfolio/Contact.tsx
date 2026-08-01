import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Reveal } from "./primitives";

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <Reveal>
        <div className="glass-card relative overflow-hidden p-8 text-center sm:p-14">
          <div className="bg-gradient-primary pointer-events-none absolute -top-40 left-1/2 size-96 -translate-x-1/2 rounded-full opacity-20 blur-[120px]" />
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl md:text-5xl">
            Let&apos;s Build Something Great
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Open to Technical Product Management roles and product collaborations. Reach out — I
            reply to every message.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:Singhmanas102@gmail.com"
              className="glass-card glass-card-hover inline-flex items-center gap-2.5 px-5 py-3 text-sm"
            >
              <Mail className="size-4 text-primary-glow" />
              Singhmanas102@gmail.com
            </a>
            <a
              href="tel:+919560972556"
              className="glass-card glass-card-hover inline-flex items-center gap-2.5 px-5 py-3 text-sm"
            >
              <Phone className="size-4 text-primary-glow" />
              +91 9560972556
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm transition-colors hover:border-ring"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm transition-colors hover:border-ring"
            >
              <Github className="size-4" /> GitHub
            </a>
            <a
              href="#"
              className="bg-gradient-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Download className="size-4" /> Resume
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© 2026 Manas</p>
        <p>Built with passion for Product, Engineering &amp; Design.</p>
      </div>
    </footer>
  );
}
