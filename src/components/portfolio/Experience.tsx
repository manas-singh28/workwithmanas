import { Reveal, SectionHeading } from "./primitives";
import hsbcLogo from "@/assets/hsbc-logo.svg.asset.json";

const roles = [
  {
    title: "Senior Software Engineer — AI & Product Development",
    company: "HSBC Technology India",
    period: "Oct 2025 – Present",
    achievements: [
      "Shipped an MCP-based transaction capability for HSBC's Ask Nio conversational banking experience, enabling natural-language transaction retrieval; owned requirements and AI guardrails, including entitlement scoping and hallucination checks, increasing self-service deflection by 23%.",
      "Drove production readiness for an AI-enabled MCP transaction-history experience, defining success metrics and leading cross-functional load testing; validated 100 TPS at 100% pass rate and 200 TPS at 99.08%, informing SLOs, capacity plans, and prioritized fixes.",
      "Led authentication improvements for HSBC corporate clients, adding an activity-based session-extension flow so Ask Nio could act securely without mid-conversation timeouts—cutting session drop-offs by 17% and lifting login success to 98%.",
    ],
  },
  {
    title: "Software Engineer — Trade and Transaction Reporting",
    company: "HSBC Technology India",
    period: "Aug 2023 – Sept 2025",
    achievements: [
      "Defined and prioritized an automated data-archival workflow after analyzing lifecycle processes and stakeholder needs, freeing ~2 engineering hours per day across an 8-member team.",
      "Led product discovery and requirements definition across 11 business lines for a shared reference-data platform. Prioritized and shipped a real-time reporting API processing ~5M records, reducing data-access latency by ~40% and L1 support queries by ~15%.",
      "Defined a self-service workflow for business teams to manage static data independently after analyzing support-ticket patterns, reducing related IT requests to near zero.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Building AI and data products for enterprise banking."
        subtitle="Three years of pairing product ownership with hands-on engineering at HSBC."
      />

      <div className="relative space-y-8 pl-6 sm:pl-10">
        <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-primary via-primary-glow/40 to-transparent sm:left-2" />

        {roles.map((role, r) => (
          <Reveal key={role.title} delay={r * 0.08}>
            <span className="bg-gradient-primary absolute -left-[7px] size-3.5 rounded-full shadow-[var(--shadow-glow)] sm:left-[1px]" />
            <div className="glass-card glass-card-hover p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={hsbcLogo.url}
                    alt="HSBC logo"
                    className="h-9 w-auto sm:h-10"
                  />
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
                    <li className="flex gap-3 text-[15px] leading-relaxed text-foreground/80 sm:text-base">
                      <span className="bg-gradient-primary mt-[0.6rem] size-1.5 shrink-0 rounded-full" />
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
