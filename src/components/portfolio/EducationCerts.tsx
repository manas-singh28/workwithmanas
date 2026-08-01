import { Award, GraduationCap, ShieldCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

export function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeading eyebrow="Education" title="Foundations in engineering." />

      <div className="relative pl-6 sm:pl-10">
        <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-primary via-primary-glow/40 to-transparent sm:left-2" />
        <Reveal>
          <span className="bg-gradient-primary absolute -left-[7px] top-2 size-3.5 rounded-full shadow-[var(--shadow-glow)] sm:left-[1px]" />
          <div className="glass-card glass-card-hover p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="rounded-xl border border-border bg-surface p-2.5 text-primary-glow">
                  <GraduationCap className="size-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Vellore Institute of Technology, India</h3>
                  <p className="text-sm text-muted-foreground">
                    Bachelor of Technology · Electronics and Communications
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
                Graduated April 2023
              </span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              <span className="text-foreground">Relevant coursework:</span> Object-Oriented
              Programming, Cloud Technologies, Database Management.
            </p>
          </div>

        </Reveal>
      </div>
    </section>
  );
}

const certs = [
  {
    icon: Award,
    title: "NextLeap Top Product Management Fellow",
    detail: "Selected among top performers of the NextLeap Product Management Fellowship.",
  },
  {
    icon: ShieldCheck,
    title: "AWS Certified Solutions Architect – Associate",
    detail: "Cloud architecture, scalability, resilience and cost-aware system design.",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeading eyebrow="Certifications" title="Credentials that back the craft." />
      <div className="grid gap-6 md:grid-cols-2">
        {certs.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <div className="glass-card glass-card-hover h-full p-6 sm:p-8">
              <span className="inline-flex rounded-xl border border-border bg-surface p-2.5 text-primary-glow">
                <c.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
