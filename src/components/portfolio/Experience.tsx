import { Building2 } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const achievements = [
  "Built RESTful APIs and Spring Boot microservices powering Japan's real-time payment infrastructure supporting approximately 500 TPS.",
  "Developed a high-performance real-time data API processing approximately 5 million records with sub-second response times while reducing latency by 40%.",
  "Delivered backend systems supporting 11 business lines with high-quality reference data.",
  "Designed APIs for crash log ingestion and system health monitoring, reducing debugging time by 70%.",
  "Enabled business teams to independently manage enterprise reference data, nearly eliminating manual support requests.",
  "Delivered 5+ backend POCs with 3 successfully launched into production.",
  "Built automated MongoDB archival and purging jobs.",
  "Owned complete SDLC including design, development, testing, performance optimization, deployment, and Kubernetes releases.",
];

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Shipping systems that banks depend on."
        subtitle="Three years of building production-grade backend platforms in a global bank."
      />

      <div className="relative pl-6 sm:pl-10">
        <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-primary via-primary-glow/40 to-transparent sm:left-2" />

        <Reveal>
          <span className="bg-gradient-primary absolute -left-[7px] top-2 size-3.5 rounded-full shadow-[var(--shadow-glow)] sm:left-[1px]" />
          <div className="glass-card glass-card-hover p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="rounded-xl border border-border bg-surface p-2.5">
                  <Building2 className="size-5 text-primary-glow" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Senior Software Engineer</h3>
                  <p className="text-sm text-muted-foreground">HSBC Bank</p>
                </div>
              </div>
              <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
                2023 – Present
              </span>
            </div>

            <ul className="mt-7 space-y-4">
              {achievements.map((a, i) => (
                <Reveal key={a} delay={i * 0.04}>
                  <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="bg-gradient-primary mt-[0.55rem] size-1.5 shrink-0 rounded-full" />
                    {a}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
