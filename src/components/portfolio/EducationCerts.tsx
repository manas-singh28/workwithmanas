import { Award, Download, GraduationCap, Medal, ShieldCheck, Trophy } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

import pat25Pdf from "@/assets/awards/Pat_on_the_Back.pdf.asset.json";
import pat24Pdf from "@/assets/awards/Pat_on_the_Back_1.pdf.asset.json";
import pioneerPdf from "@/assets/awards/Pioneer_of_Quarter.pdf.asset.json";
import pat25Cover from "@/assets/awards/Pat_on_the_Back.jpg.asset.json";
import pat24Cover from "@/assets/awards/Pat_on_the_Back_1.jpg.asset.json";
import pioneerCover from "@/assets/awards/Pioneer_of_Quarter.jpg.asset.json";
import nextleapCover from "@/assets/awards/nextleap-top-fellow.png.asset.json";

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

const items = [
  {
    icon: Trophy,
    title: "Pioneer of the Quarter Award",
    detail:
      "HSBC Technology India · Q2 2026 — presented by Vikram Kulkarni, Head of HSBC Technology India & CIO, MSS Operations.",
    cover: pioneerCover,
    file: pioneerPdf,
  },
  {
    icon: Medal,
    title: "Pat on the Back Award",
    detail:
      "HSBC Technology India · Q4 2025 — presented by Vikram Kulkarni, Head of HSBC Technology India & CIO, MSS Operations.",
    cover: pat25Cover,
    file: pat25Pdf,
  },
  {
    icon: Medal,
    title: "Pat on the Back Award",
    detail:
      "HSBC Technology India · Q4 2024 — presented by Pradeep Menon, MD and Head of HSBC Technology India.",
    cover: pat24Cover,
    file: pat24Pdf,
  },
  {
    icon: Award,
    title: "NextLeap Top Product Management Fellow",
    detail: "Selected among top performers of the NextLeap Product Management Fellowship.",
    cover: nextleapCover,
    file: nextleapCover,
  },
  {
    icon: ShieldCheck,
    title: "AWS Certified Solutions Architect – Associate",
    detail: "Cloud architecture, scalability, resilience and cost-aware system design.",
    cover: null,
    file: null,
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeading
        eyebrow="Awards & Certifications"
        title="Recognition that backs the craft."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((c, i) => (
          <Reveal key={`${c.title}-${i}`} delay={i * 0.06}>
            <div className="glass-card glass-card-hover flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-background/40">
                <div className="bg-gradient-primary pointer-events-none absolute inset-0 opacity-10" />
                {c.cover ? (
                  <img
                    src={c.cover.url}
                    alt={`${c.title} certificate preview`}
                    loading="lazy"
                    className="relative size-full object-contain p-3 transition-transform duration-500 hover:scale-[1.03]"
                  />
                ) : (
                  <div className="relative flex size-full flex-col items-center justify-center gap-3 text-center">
                    <span className="inline-flex rounded-2xl border border-border bg-surface p-4 text-primary-glow shadow-[var(--shadow-glow)]">
                      <c.icon className="size-7" />
                    </span>
                    <span className="px-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Certified
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="inline-flex w-fit rounded-xl border border-border bg-surface p-2.5 text-primary-glow">
                  <c.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {c.detail}
                </p>
                {c.file ? (
                  <a
                    href={c.file.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary-glow"
                  >
                    <Download className="size-3.5" />
                    View certificate
                  </a>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
