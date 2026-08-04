import { Reveal, SectionHeading } from "./primitives";
import hsbcLogo from "@/assets/hsbc-logo.svg.asset.json";

const roles = [
  {
    title: "Senior Software Engineer",
    company: "HSBC Technology India",
    period: "Oct 2025 – Present",
    achievements: [
      "Designed and delivered RESTful APIs and 5+ Java Spring Boot microservices for real-time payments in Japan, extending global real-time payment capabilities (IMPS-like) with Kafka-based client notifications and seamless international API integration supporting 500 TPS.",
      "Built automated scheduled jobs for MongoDB archival and purging using Spring and shell scripting, saving ~1 hour per engineer per week by eliminating repetitive manual tasks.",
      "Owned end-to-end development, testing (functional, performance, regression), and deployment on Kubernetes using Jenkins CI/CD pipelines.",
    ],
  },
  {
    title: "Software Engineer",
    company: "HSBC Technology India",
    period: "Aug 2023 – Sept 2025",
    achievements: [
      "Developed a real-time data API enabling trade and transaction reporting pods to handle ~5M records with sub-second response times, reducing data access latency by ~40% and L1 queries by ~15%.",
      "Collaborated in Agile cross-functional teams to deliver 5+ backend-driven POCs, with 3 deployed to production, reducing time-to-market by 30%.",
      "Developed a backend system serving 11 business lines with high-quality reference data.",
      "Designed and exposed RESTful APIs for crash log ingestion and system health data, reducing debugging and issue resolution time by 70% across development and QA teams.",
      "Enabled business teams to independently manage static data without IT intervention, reducing support tickets and manual tasks to near zero after onboarding.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Shipping systems that banks depend on."
        subtitle="Three years of building production-grade backend platforms in a global bank."
      />

      <div className="relative space-y-8 pl-6 sm:pl-10">
        <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-primary via-primary-glow/40 to-transparent sm:left-2" />

        {roles.map((role, r) => (
          <Reveal key={role.title} delay={r * 0.08}>
            <span className="bg-gradient-primary absolute -left-[7px] size-3.5 rounded-full shadow-[var(--shadow-glow)] sm:left-[1px]" />
            <div className="glass-card glass-card-hover p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center rounded-xl border border-border bg-surface p-2.5">
                    <img
                      src={hsbcLogo.url}
                      alt="HSBC logo"
                      className="size-5 object-contain"
                    />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{role.title}</h3>
                    <p className="text-sm text-muted-foreground">{role.company}</p>
                  </div>
                </div>
                <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
                  {role.period}
                </span>
              </div>

              <ul className="mt-7 space-y-4">
                {role.achievements.map((a, i) => (
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
        ))}
      </div>
    </section>
  );
}
